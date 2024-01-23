---
title: "Parcours d'Obstacles : Comment Ça Fonctionne"
---
Chaque système a été conçu pour avoir un ensemble spécifique de responsabilités, et pour en savoir le moins possible sur les autres systèmes.

# Vue d'ensemble
* Le **PlayerDataManager** attribue des objets **PlayerData** à chaque joueur qui entre dans le monde.
* Lorsqu'un objet **PlayerData** entre dans la porte de départ **Checkpoint**, le **Course** qu'ils viennent d'entrer commence à suivre leur temps et active le prochain **Checkpoint**.
* Lorsque l'objet **PlayerData** passe à travers le dernier **Checkpoint**, leur temps est ajouté au tableau des scores.
* Si l'objet **PlayerData** entre dans un déclencheur **PowerUp**, le **PlayerModsManager** change temporairement leur vitesse et/ou capacités de saut, les réinitialisant par défaut après une durée définie.
* Si l'objet **PlayerData** entre dans un déclencheur **Respawn**, le **Course** les fera réapparaître au dernier **Checkpoint** par lequel ils sont passés.

Les sections suivantes décrivent les programmes et scripts qui se combinent pour créer l'expérience complète.

# Joueurs
Chaque joueur qui rejoint le monde obtient un objet 'PlayerData' pour gérer son état et sa progression à travers un parcours. Le **PlayerDataManager** attribue des objets **PlayerData**, qui peuvent déclencher des programmes **OnPlayerDataEnter**.

## PlayerDataManager
Vous pouvez trouver ce programme sur l'objet "PlayerDataManager" sous l'objet "Udon" dans la scène. Il a deux variables publiques importantes :
**dataPool** : Référence au composant VRC Object Pool sur le même objet que ce gestionnaire. Lorsqu'un joueur rejoint le monde, ce gestionnaire essaiera de générer un objet PlayerData pour eux et leur donnera la propriété.
**followCam** : Référence à la caméra qui suivra au-dessus d'un joueur lorsqu'ils traversent le parcours. Défini ici pour que le PlayerDataManager puisse attribuer la référence à chaque objet PlayerData lorsqu'ils sont actualisés.

Lorsque vous changez l'option 'Nombre de joueurs' dans la fenêtre Toolkit, tous les objets PlayerData existants seront supprimés de la scène, puis de nouvelles copies seront ajoutées en tant qu'enfants du PlayerDataManager. Chacun aura ses variables publiques correctement configurées, et l'Object Pool sera mis à jour pour contenir tous les nouveaux objets PlayerData.

## PlayerObject
Le préfabriqué PlayerObject a un composant Rigidbody et Capsule Collider, nécessaires pour déclencher les PowerUps, les dangers, etc. Il est sur une couche personnalisée **CoursePlayer** qui ne collisionne qu'avec **CourseTrigger** pour interagir avec les dangers et les PowerUps. Il a également un UdonBehaviour avec un programme important sur celui-ci :

## PlayerData
Ce programme est le principal connecteur entre le joueur parcourant le parcours et tous les autres systèmes. Ses variables sont :
**timeElapsed** : Float synchronisé qui est mis à jour par le programme **Course** lorsqu'ils franchissent la porte d'arrivée. Lorsqu'il change, le propriétaire de l'objet PlayerData affichera ce temps sur le tableau des scores afin qu'ils puissent voir leur dernier temps localement. Le propriétaire de l'objet ScoreManager verra ce changement et ajoutera le nouveau temps et le nom d'affichage du joueur au tableau des scores.

**isRacing** : Booléen qui est défini sur vrai par le **Course** lorsque le joueur a franchi une porte de départ. Il est réglé sur faux lorsque le joueur entre dans une porte d'arrivée, réapparaît manuellement à l'aide de son menu, ou lorsque **Reset** est appelé sur le **Course**. Utilisé par le **Course**, voir ce programme pour plus d'informations.

**rigidbody** : Mis en cache au démarrage par le programme, il n'est pas nécessaire de le définir dans l'inspecteur. Il est déplacé à la position et à la rotation du joueur pendant chaque mise à jour.

**player** : Référence à l'objet VRCPlayerApi réel du joueur local. Mis en cache lorsque l'_playerId_ synchronisé sur ce programme change. Utilisé pour récupérer le _displayName_ du joueur.

**timeDisplay** : Référence à l'UdonBehaviour qui affiche le dernier temps pour le joueur local.

**scoreManager** : Référence à l'UdonBehaviour **ScoreManager**. Lorsque le propriétaire de cet objet reçoit un changement de _timeElapsed_ d'un objet **PlayerData** qui vient de terminer le parcours, il définit la variable publique _scoreToProcess_ sur l'objet **ScoreManager** à une chaîne qui combine le _displayName_ et _elapsedTime_ en une seule chaîne à traiter.

**scoreManagerObject** : Référence à l'objet GameObject qui détient l'UdonBehaviour avec le programme **ScoreManager**. Nécessaire pour garantir que nous exécutons uniquement la logique de traitement des scores sur le propriétaire de l'objet **ScoreManager**. Nous ne pouvons pas obtenir cet objet GameObject à partir d'une référence UdonBehaviour, donc nous l'incluons ici.

**followCam** : Référence à la CinemachineVirtualCamera qui suit le joueur autour du parcours. Le programme définit sa propre transformation comme les cibles _follow_ et _lookAt_ pour la caméra, et change la priorité de cette caméra lorsque _isRacing_ change.

## OnPlayerDataEnter
Ce programme est utilisé sur des objets qui doivent détecter l'entrée de l'objet **PlayerData** dans son Trigger Collider. Nous utilisons les couches personnalisées **CoursePlayer** et **CourseTrigger** pour garantir que seuls certains objets déclencheront ce collisionneur. Lorsqu'ils le font, il déclenche l'événement interne **OnPlayerDataEnter** pour faire une multitude de choses. Ce programme a les variables suivantes :

**fxPrefab** : Un GameObject à générer lors du **Trigger**, destiné à jouer un son, montrer des particules, etc. pour que le joueur sache que quelque chose s'est passé.

**program** : Un UdonBehaviour cible avec un événement que nous voulons exécuter sur **Trigger**. Ce _program_ contient la logique spécifique pour un **

Checkpoint**, **PowerUp**, **Hazard**, etc.

**eventName** : Le nom de l'événement à exécuter sur le programme cible.

**deactivateOnTrigger** : Si cet objet doit se désactiver après un seul **Trigger**. Cela est utile pour les **Checkpoints** et autres éléments qui ne doivent s'activer qu'une seule fois par course.

**lastCollider** : Collider qui a déclenché la logique de Trigger, temporairement mis en cache avant **Trigger** est appelé et utilisé pour trouver l'UdonBehaviour **PlayerData** si nécessaire.

**fxSpawn** : Une Transform que nous utilisons pour définir la position du FX que nous allons générer. Par défaut sur la transformation de l'objet avec le collisionneur si non défini, utile si vous souhaitez déclencher des feux d'artifice dans un autre endroit lors du passage à travers un collisionneur, comme nous le faisons pour la porte d'arrivée.

**sendPlayerData** : Un booléen qui décide s'il faut ou non essayer de transmettre le programme **PlayerData** qui a déclenché la logique. Utilisé lors de l'entrée dans une porte de départ, pourrait être utile pour d'autres choses également.

Lorsqu'une entrée de déclencheur de collisionneur **PlayerData** est détectée, ce programme fait ce qui suit :
* Si nous avons défini une variable _eventName_, nous vérifierons si _sendPlayerData_ est vrai. Si c'est le cas, nous essaierons de définir la variable _playerData_ sur le programme UdonBehaviour cible sur l'UdonBehaviour avec lequel nous venons de collisionner.
* Nous exécuterons ensuite l'événement _eventName_ sur le programme cible.
* Si le GameObject _fxPrefab_ sur ce programme a été défini (pas laissé par défaut à 'self'), nous **Instancierons** une copie du préfabriqué et définirons sa position et sa rotation à partir de la variable _fxSpawn_.
* Si _deactivateOnTrigger_ est vrai, nous définirons **ce** GameObject sur inactif.

# Parcours & Points de Contrôle
C'est le cœur du projet, les portes et les points de contrôle que vous devez franchir pour terminer le contre-la-montre.

# Parcours
Ce programme se trouve sur l'objet CourseManager et gère l'état du contre-la-montre pour le joueur local. Il n'a pas de variables synchronisées - il ne connaît que le joueur local qui le parcourt.

Au **démarrage**, il appelle **Reset** pour se configurer correctement.
Si le joueur se réapparaît lui-même, le parcours sera **Réinitialisé**.

Sur **Reset**, nous éteignons tous les déclencheurs **Checkpoint** sauf pour la porte de départ, que nous activons. Nous faisons cela en parcourant chaque GameObject dans le tableau _checkpoints_, en trouvant chaque Trigger Collider, et en appelant **SetActive** sur le GameObject de ce collisionneur à vrai pour l'index 0 et faux pour tous les autres.
Nous définissons également _nextIndex_ sur -1 et réglons _isRacing_ sur faux.

Sur **StartRace**, nous :
* définissons _startTime_ à partir de l'heure actuelle
* réglons _isRacing_ sur vrai
* définissons _nextIndex_ sur 1 (car la course est lancée en passant par le Checkpoint 0)

Lorsqu'un **Checkpoint** est déclenché, il définit l'_nextIndex_ sur le parcours à son propre index + 1. Cela déclenche l'événement **nextIndexChange** sur le programme du parcours, qui activera ensuite le GameObject pour le prochain Checkpoint.

Pendant **Update**, nous vérifions si un joueur _isRacing_, et si c'est le cas, nous obtenons le temps écoulé de la course et le définissons sur l'objet Text _timeDisplay_.

Sur **FinishRace**, nous :
* réglons _isRacing_ sur faux
* définissons _timeElapsed_ sur le programme **PlayerData** cible au temps actuel moins _startTime_.
* définissons _playerData_ sur null puisque nous n'avons plus de joueur parcourant le parcours.
* attendons _resetDelay_ secondes puis **Réinitialisons** le parcours.

Sur **Respawn**, nous vérifions si le joueur _isRacing_. Si c'est le cas, nous les renvoyons à la position de transformation du dernier checkpoint. Sinon, nous les téléportons suffisamment bas pour qu'ils soient réapparus par le monde, de retour à l'un des points de spawn originaux.

## ObstacleCourseData
Ce script personnalisé contient simplement une référence à l'**ObstacleCourseAsset** avec toutes les informations sur votre parcours comme les préfabriqués à utiliser, le nombre de joueurs, les vitesses par défaut, etc. Il est chargé par la fenêtre Utility, vous devriez donc en avoir un dans votre scène. Vous devriez créer le vôtre pour qu'il ne soit pas écrasé si vous mettez à jour votre projet avec une version plus récente de ce package. Pour ce faire, dupliquez un asset existant, ce qui garantira que les valeurs par défaut sont correctes.

## Checkpoint
Les objets Checkpoint ont chacun un index qui représente leur ordre dans le contre-la-montre, cela est automatiquement défini lors du placement des Checkpoints via la fenêtre Utility ou en modifiant leur ordre.
Ils ont un Trigger Collider avec un programme **OnPlayerDataEnter** qui appelle un programme **Checkpoint** que nous avons sur un objet appelé "UdonProgram" dans nos préfabriqués d'exemple. Le programme est simple, avec trois événements possibles qui peuvent être déclenchés dessus :

**StartRace** définira la variable _playerData_ sur le programme **Course** sur l'UdonBehaviour qui vient d'entrer dans ce checkpoint. Le parcours lancera la course lorsque cela se produira.

**Trigger** définira la variable _nextIndex_ sur le programme **Course** à l'_index_ + 1.

**FinishRace** appellera simplement **FinishRace** sur le programme **Course**.

# Score
Qu'est-ce qu'un contre-la-montre sans un peu de compétition amicale ? Le système de score synchronise les noms et les temps des dernières courses, ainsi que le meilleur temps jusqu'à présent dans l'instance.

Voici la traduction en français :

## ScoreManager
Ce programme se trouve sur un objet appelé "ScoreManager" sous l'objet "Udon". Il utilise un système de file d'attente pour traiter et synchroniser les scores entrants. Il n'a pas de variables synchronisées lui-même, il s'appuie plutôt sur les *ScoreFields* pour synchroniser les valeurs. Ces champs sont automatiquement remplis par la fenêtre Utilitaire lorsque vous changez le Nombre de Scores à Afficher.

Au **démarrage**, ce programme appelle une fois son propre événement **Render**.

Sur **Render**, le programme appelle **Render** sur le _scoreCam_, qui va rendre sa vue actuelle sur une RenderTexture utilisée partout dans le parcours pour afficher le score actuel.

Lorsque _scoretoProcess_ est modifié sur le propriétaire de cet objet, nous appelons **MakeRoom** puis **ProcessNextScore**. Cela fonctionne car chaque joueur de votre instance recevra une mise à jour de _timeElapsed_ lorsqu'un joueur termine un parcours, et ce programme mettra à jour _scoreToProcess_ sur cet objet s'il en est le propriétaire.

Sur **MakeRoom**, nous vérifions si nos scoreFields sont déjà tous pleins, et si c'est le cas, nous copierons les valeurs itérativement vers le bas pour faire de la place en haut.

Sur **ProcessNextScore** :
* Démontez le score en nom d'affichage et en temps pour les formater joliment, puis définissez la valeur _targetVarName_ sur le **ScoreField** correspondant à cela. Cette variable cible est synchronisée, donc nous la réglons de cette manière pour la mettre à jour pour tout le monde.
* Comparez le temps de ce score au temps de notre meilleur score et mettez à jour le **HighScoreField** si nécessaire.
* Définissez la valeur de _scoreToProcess_ sur une chaîne vide pour qu'elle soit prête à traiter le prochain score qui arrive.
* Envoyez l'événement **Render** à tout le monde pour mettre à jour leur texture de score.

## ScoreField
Ce programme utilise un modèle simple et efficace - il a une variable synchronisée publique appelée _log_. Lorsque log change, il met à jour le texte dans le champ avec la nouvelle valeur. De cette manière, les valeurs sont synchronisées et mises à jour pour tout le monde lorsque le propriétaire de l'objet les met à jour, ce qui peut être facilement fait à partir d'un autre programme. Dans notre cas, nous mettons à jour cette valeur à partir du **ScoreManager**.

## HighScoreField
Ce programme utilise le même modèle que le champ de score ci-dessus, mais a également un _score_ flottant synchronisé qui peut être utilisé pour comparer les scores et mettre à jour uniquement si le nouveau score est meilleur. Il a également un "préfixe" qui est une chaîne injectée avant tout changement. Dans ce cas, la chaîne "Meilleur Score :" est préfixée à la chaîne entrante.

# PowerUps
Il est amusant d'offrir des boosts de vitesse et de saut pour les joueurs cherchant à maximiser leurs scores. Vous pouvez également utiliser des pénalités de vitesse et de saut comme partie des obstacles et des dangers pour donner aux joueurs un choix de stratégie. Les PowerUps sont tous placés en tant qu'enfants de l'objet "PlayerModsManager" lorsque vous les créez avec la fenêtre Utilitaire. Ils ont également le comportement Udon *PlayerModsManager* défini automatiquement sur eux pour qu'ils puissent appliquer leurs effets.

Ils ont un programme très simple. Il est appelé à partir d'un programme **OnPlayerDataEnter**, bien sûr, et a un seul événement **Trigger**. Ses variables sont :

**playerModsManager** : Défini automatiquement lors de la création de PowerUps via la fenêtre Utilitaire. Utilisé pour appliquer réellement les effets.

**speedChange** : Effet à appliquer à la vitesse du joueur lorsqu'il est déclenché. 0 passera, un nombre positif augmentera la vitesse, un nombre négatif la diminuera.

**jumpChange** : Identique à speedChange, mais pour l'Impulsion de Saut.

**effectDuration** : Combien de temps avant que l'effet se dissipe.

Sur **Trigger**, le programme définira _speedToProcess_ sur le **PlayerModsManager** s'il n'est pas 0, et il définira _jumpToProcess_ s'il n'est pas 0. Afin de simplifier la logique, nous regroupons les valeurs _amount_ et _duration_ dans un seul Vector2, où le _x_ est le montant et le _y_ la durée.

## PlayerModsManager
Il est utile d'avoir un endroit central pour gérer les changements des capacités d'un joueur, surtout lorsque vous considérez que quelqu'un pourrait passer par un "Speed + 3" avec une durée de 2 secondes, puis un "Speed - 1" avec une durée de 3 secondes. Dans notre programme, les mods de vitesse s'annulent mutuellement, et il en va de même pour les mods de saut. Donc, dans l'exemple ci-dessus, dès que le joueur déclenche le PowerUp "Speed - 1", il reviendrait à sa vitesse par défaut - 1, avec un nouveau chronomètre de 3 secondes en cours.

Le programme fonctionne avec une file d'attente, comme le **ScoreManager**. Lorsque _speedToProcess_ est modifié, il déterminera la nouvelle vitesse à utiliser, l'appliquera à l'API VRCPlayerApi du joueur local et lancera un compte à rebours basé sur la _effectDuration_ du PowerUp. Le programme affiche le mod sur le HUD de l'utilisateur et le fait disparaître progressivement avec le temps pour que le joueur comprenne intuitivement combien de temps il reste. Lorsque le minuteur expire, il réinitialise la propriété cible sur l'API VRCPlayerApi à la valeur par défaut, c'est pourquoi nous stockons et définissons ces valeurs ici plutôt que dans le programme "VRCWorldSettings".

## DestroyAfterXSeconds
Ce programme simple est utile pour les objets instantiés localement, comme les préfabriqués FX créés par les programmes **OnPlayerDataEnter**. Il garantira que l'objet se détruira lui-même pour que vous ne vous retrouviez pas avec des centaines de vieux effets sonores et systèmes de particules qui traînent.

## PlayClipFromArray
Ce programme est utile pour introduire une certain

e variété dans vos sons, par exemple pour une utilisation sur des préfabriqués FX. Au lieu d'un seul AudioClip, vous pouvez en définir un groupe sur ce programme et il en choisira un au hasard lorsqu'il sera créé et jouera celui-là. Cela pourrait également être utile pour un programme de bruits de pas.

# Hazards
Si vous voulez défier vos joueurs, vous pouvez ajouter une variété de dangers. Nous avons inclus quelques programmes d'exemple, n'hésitez pas à créer les vôtres !

## Autorotate
Ce programme fait simplement tourner le Transform sur lequel il se trouve. Vous pouvez ajuster le _amount_ pour chaque axe, qui sera multiplié par Time.deltaTime pour garantir qu'il tourne en douceur. Un animateur aurait de meilleures performances, mais cela fonctionne lorsque vous expérimentez.

## SpawnedHazard
Ce danger réduira la vitesse du joueur qui entre en contact avec lui. Vous pouvez définir _speedChange_ comme vous le feriez sur un PowerUp - le x est le montant à ajouter à la vitesse du joueur, et le y est la durée de l'effet. Pour réduire la vitesse d'un joueur de 3 pendant 1 seconde, vous définiriez _speedChange_ à (-3,1). Ils trouvent l'objet "PlayerModsManager" et le comportement Udon par nom lorsqu'ils sont créés - pas très performant mais cela fonctionne.

## HazardSpawner
Ce programme utilise **SendCustomEventDelayedSeconds** pour générer des dangers toutes les _delay_ secondes. Dans notre projet d'exemple, nous utilisons des délais légèrement différents pour créer une colline difficile de barils pour nos joueurs à esquiver.

## FallingBlock
Ce programme est le seul que nous incluons qui interagit avec un joueur et n'utilise pas **OnPlayerDataEnter**. C'est parce que nous voulons savoir quand un joueur entre _et_ quand il sort, ce qui n'est pas pris en compte dans ce programme. Lorsqu'un joueur entre, nous utilisons **SendCustomEventDelayedSeconds** pour exécuter **CheckForDrop** après _triggerTime_ secondes.

Sur **CheckForDrop**, si le joueur n'est pas encore sorti du collider, il réglera son Rigidbody sur non cinématique, le faisant tomber (ainsi que le joueur avec lui). Il appellera ensuite **Reset** après _resetTime_ secondes.

# Divers

## Injection
Ce projet dispose d'un système pour injecter des références à certains composants. Il est décrit [ici](/worlds/examples/obstacle-course/build-from-custom-parts#advanced-stuff).