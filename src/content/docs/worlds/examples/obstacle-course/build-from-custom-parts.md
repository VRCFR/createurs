---
title: "Course d'obstacle: construisez avec des parties customisée"
---

:::note[Commencez par créer un parcours simple]

Il est fortement recommandé de travailler avec les préfabriqués de démonstration et la scène de démarrage. Lisez les instructions sur [Construction à partir de pièces de démonstration](/worlds/examples/obstacle-course/build-from-demo-parts) pour en savoir plus.
:::

# Personnalisations
D'accord, vous avez créé un remix simple de nos pièces de démonstration, et vous êtes maintenant prêt à ajouter vos propres bonus, dangers et plus encore. Lisez la suite pour apprendre comment créer de nouveaux préfabriqués qui interagissent avec les systèmes existants.

# Création de points de contrôle personnalisés

Voici la hiérarchie du préfabriqué de point de contrôle que nous incluons :

![build-from-custom-parts-692d375-checkpoint-hierarchy.png](/img/worlds/build-from-custom-parts-692d375-checkpoint-hierarchy.png)

## Exigences du déclencheur
![build-from-custom-parts-f72c567-checkpoint-inspector.png](/img/worlds/build-from-custom-parts-f72c567-checkpoint-inspector.png)

:::note[C'est un motif !]

L'objet "Déclencheur" sur ce préfabriqué utilise un motif que vous verrez répété sur presque chaque objet qui détecte le joueur - points de contrôle, bonus, dangers, points de réapparition, etc. Nous allons entrer en détail sur ce premier préfabriqué, et nous pouvons passer rapidement sur les autres.
:::

Votre point de contrôle doit avoir un **Collider** sur le calque **CourseTrigger** avec _isTrigger_ activé et un UdonBehaviour avec le programme **OnPlayerDataEnter**.

![build-from-custom-parts-f896bef-checkpoint-inspector.png](/img/worlds/build-from-custom-parts-f896bef-checkpoint-inspector.png)

Cet UdonBehaviour doit avoir les variables suivantes définies :
1. _fxPrefab_ devrait faire référence à un préfabriqué qui comporte des effets amusants, et soit le programme Udon **DestroyAfterXSeconds** ou d'une autre manière pour qu'il se détruise après un certain temps.
2. _program_ devrait faire référence à un UdonBehaviour sur un autre objet sous ce préfabriqué, qui comporte un programme **Checkpoint**.
3. _eventName_ doit être défini sur un événement existant sur l'UdonBehaviour référencé ci-dessus.
4. _deactivateOnTrigger_ devrait être activé pour les points de contrôle afin qu'ils ne puissent être activés qu'une seule fois par course jusqu'à ce qu'un joueur termine le parcours.
5. _sendPlayerData_ n'est nécessaire que pour un point de contrôle utilisé comme porte de départ.

:::note[Détails de OnPlayerDataEnter]

Si vous souhaitez en savoir plus sur ce qui se passe dans ce programme, vous pouvez trouver la documentation complète ici : [OnPlayerDataEnter](/worlds/examples/obstacle-course/uoc-how-stuff-works#onplayerdataenter)
:::
## Exigences du programme de point de contrôle
Toute la configuration ci-dessus se contente de détecter le joueur, de créer un objet FX, puis de déclencher un événement sur le programme _réel_. Dans ce cas, il s'agit d'un programme appelé **Checkpoint** sur un objet appelé "UdonProgram". Le programme sur le déclencheur essaiera d'exécuter un programme appelé "Trigger" sur cet UdonBehaviour.

Tout ce que vous avez à faire, c'est d'avoir un objet avec un UdonBehaviour, avec le programme **Checkpoint** dessus. Toutes les variables de ce programme seront automatiquement définies lorsque vous le placerez, ou en temps réel lorsque quelqu'un le déclenchera dans votre monde.

## Exigences du programme de départ / d'arrivée
Si vous créez un point de contrôle à utiliser comme porte de départ ou d'arrivée, vous configurerez votre programme légèrement différemment. Le déclencheur de collision sera le même, et vous utiliserez le même programme **Checkpoint**, mais vous devrez apporter les modifications suivantes :

### Pour une **porte de départ** :
* Définissez l'_eventName_ sur "StartRace"
* Assurez-vous que _sendPlayerData_ est activé.

### Pour une **porte de fin** :
* Définissez l'_eventName_ sur "FinishRace"

## Personnalisez-le !
Tant que vous avez le **déclencheur de collision** et le **programme de point de contrôle** configurés comme décrit ci-dessus, vous disposez d'un préfabriqué de point de contrôle fonctionnel que vous pouvez utiliser dans votre monde. Notez que lorsque quelqu'un déclenche votre point de contrôle, l'objet GameObject sur lequel se trouve le déclencheur de collision sera défini sur **inactif**. Donc, si vous souhaitez masquer l'ensemble du point de contrôle, placez le collider sur l'objet le plus haut. Si vous voulez simplement masquer certaines parties comme nous le faisons dans les préfabriqués de démonstration, faites de ces parties des enfants de l'objet du déclencheur de collision.

Lorsque quelqu'un termine le parcours ou se réapparait à travers son menu, le parcours est **réinitialisé**. Lorsque cette méthode est appelée, le programme du parcours recherchera chaque point de contrôle pour les déclencheurs de collision. Il définira tous les GameObjects avec des déclencheurs de collision sur inactif, sauf le premier, qu'il définira sur actif (votre **porte de départ**). Gardez cela à l'esprit si vous avez des déclencheurs de collision supplémentaires sur vos préfabriqués - leurs GameObjects seront définis sur inactif si les déclencheurs ont _isTrigger_ activé.

## Ajoutez-le à votre liste de préfabriqués de points de contrôle

La fenêtre Utilitaire répertorie vos "Préfabriqués de points de contrôle" pour les ajouter facilement à votre scène. Vous pouvez faire glisser et déposer vos nouveaux préfabriqués personnalisés dans cette liste pour les remplacer, ou changez la "Taille" de la liste d'abord pour ajouter de nouveaux emplacements vides auxquels vous pouvez ajouter vos nouveaux préfabriqués.

# Création de bonus personnalisés
Lisez d'abord "Création de points de contrôle personnalisés" ci-dessus pour comprendre comment fonctionne le système de déclenchement de collision, car il est le même pour les bonus. Une fois que vous avez configuré votre déclencheur de collision, vous pouvez travailler sur le programme **PowerUp**.

## Exigences du programme PowerUp
![build-from-custom-parts-c3ecfa0-speed-up-program.png](/img/worlds/build-from-custom-parts-c3ecfa0-speed-up-program.png)

* Tout d'abord, assurez-vous d'avoir configuré un déclencheur de collision qui appelle "Trigger" sur cet UdonBehaviour.
* _playerModsManager_ peut rester inchangé, il sera injecté lorsque vous créerez le PowerUp via la fenêtre Utilitaire ou lorsque vous appuierez sur "Actualiser".
* Soit _speedChange_ soit _jumpChange_ doit être défini sur quelque chose de différent de 0. Les valeurs positives seront ajoutées à la **Vitesse de déplacement** ou à l'**Impulsion de saut** par défaut que vous avez définies dans la section **Bonus** de votre fenêtre Utilitaire. Les valeurs négatives seront soustraites. Vous pouvez les combiner - un bonus qui vous fait sauter haut mais vous déplacer très lentement est tout à fait valable.
* La _effectDuration_ doit être supérieure à 0 (pas de nombres négatifs). C'est la durée pendant laquelle le bonus durera. Le joueur recevra un message sur son HUD qui affiche le changement, qui disparaîtra à la vitesse que vous avez définie ici.

## Ajoutez-le à votre liste de préfabriqués de bonus

La fenêtre Utilitaire répertorie vos "Préfabriqués de bonus" pour les ajouter facilement à votre scène. Vous pouvez faire glisser et déposer vos nouveaux préfabriqués personnalisés dans cette liste pour les remplacer, ou changez la "Taille" de la liste d'abord pour ajouter de nouveaux emplacements vides auxquels vous pouvez ajouter vos nouveaux préfabriqués.

# Création de dangers personnalisés

Les dangers utilisent la configuration de déclenchement de collision que nous avons documentée sous **Points de contrôle** ci-dessus, alors assurez-vous de l'avoir lue en premier.

Nous avons créé deux types de dangers que vous pouvez utiliser : les dangers de **Réapparition** et les dangers de **Spawner**.

## Dangers de réapparition
Il s'agit du danger le plus courant dans notre parcours de démonstration. Il utilise un déclencheur de collision pour réapparaître le joueur au dernier point de contrôle. Vous avez besoin d'un déclencheur de collision configuré pour exécuter l'événement "Trigger" sur un autre objet qui comporte le programme **RespawnOnCourse**.

![build-from-custom-parts-752dc13-moving-wall-hazard.png](/img/worlds/build-from-custom-parts-752dc13-moving-wall-hazard.png)

Le programme **RespawnOnCourse** aura automatiquement la variable _course_ définie lorsque vous actualiserez votre fenêtre Utilitaire.

## Dangers de Spawner
Ce danger est composé de deux parties, c'est le danger à usage unique le plus personnalisé que nous fournissons, à titre d'exemple d'extension de notre système de base pour ajouter des fonctionnalités.

### Programme HazardSpawner
![build-from-custom-parts-3ab9259-hazardspawner.png](/img/worlds/build-from-custom-parts-3ab9259-hazardspawner.png)

Ce programme fera apparaître son _prefab_ toutes les _delay_ secondes. Il a une référence à _playerModsManager_ qui sera injectée lorsque la fenêtre Utilitaire sera actualisée. Lorsqu'il fait apparaître un danger, il recherchera un UdonBehaviour sur le nouvel objet et définira sa variable _playerModsManager_ sur la référence qu'il possède. Cela est nécessaire pour que le danger apparu puisse réduire la vitesse du joueur.

### Programme SpawnedHazard
![build-from-custom-parts-a85b1af-barrel-hazard.png](/img/worlds/build-from-custom-parts-a85b1af-barrel-hazard.png)

Ce préfabriqué comporte un TriggerCollider sur l'objet enfant "Trigger" qui exécute l'événement "HitPlayer" sur le programme SpawnedHazard.

* _lifeDuration_ contrôle la durée de vie de ce préfabriqué après son apparition, pour s'assurer qu'il ne reste pas indéfiniment si aucun joueur n'est présent.
* _playerModsManager_ est défini par le **programme HazardSpawner**
* _speedChange_ fonctionne comme un **bonus** typique. La valeur 'x' est le changement à appliquer à la vitesse par défaut du joueur, et la valeur 'y' est la durée de l'effet. Le paramètre par défaut (-3,3) sur ce préfabriqué soustraira 3 à la vitesse du joueur pendant 3 secondes lorsqu'il le touchera.

:::danger[DÉSACTIVEZ VOS PRÉFABRIQUÉS DE DANGER]

Étant donné que ces préfabriqués ne sont pas créés et gérés via la fenêtre Utilitaire, il est important de les désactiver après les avoir placés dans votre scène. Sinon, l'injection automatique pourrait ne pas fonctionner.
:::
# Autres personnalisations
Voici quelques autres choses que vous pouvez explorer :

## Champs de score
![build-from-custom-parts-60cfc05-ScoreManager.png](/img/worlds/build-from-custom-parts-60cfc05-ScoreManager.png)

Si vous souhaitez changer l'apparence des champs de score ou le nombre de scores affichés, vous pouvez dupliquer le préfabriqué "ScoreField", déposez votre nouvelle version dans l'emplacement "Score Object Prefab" dans la section "Score Manager" de la fenêtre Utilitaire, et définissez le "Nombre de scores à afficher" pour régénérer l'interface utilisateur qui affiche les scores.

## HUD
Vous pouvez changer l'apparence et la disposition des éléments de l'HUD - il suffit de parcourir la hiérarchie de l'objet "HUD".

## Minimap
Si vous souhaitez modifier l'angle de la caméra, la quantité de lissage, etc. de la mini-carte, vous pouvez trouver la **CinemachineVirtualCamera** qu'elle utilise sous "MinimapCameraSystem/VCam-Follow". Ses variables _Follow_ et _LookAt_ sont définies à l'exécution, donc si vous souhaitez les tester dans l'Éditeur, vous pouvez ajouter une capsule, la définir comme cible pour ces deux variables, et la faire glisser autour de votre parcours pour voir comment cela rend dans la mini-carte.

## Fonctionnalités Avancées
Vous pouvez cliquer sur le nouvel élément de parcours que vous avez créé dans votre volet de projet pour voir ses données brutes et accéder à toutes sortes de choses que vous pouvez modifier **_à vos propres risques_**, comme les programmes Udon par défaut. Vous pouvez également modifier la section "Variable to Scene Object Lookup" (Recherche de Variable vers Objet de Scène) :

![build-from-custom-parts-489afea-lookup.png](/img/worlds/build-from-custom-parts-489afea-lookup.png)

C'est ainsi que ressemble l'UtilityWindow lorsqu'il exécute Refresh() pour injecter les bons objets dans les UdonBehaviours. À gauche se trouvent les noms de variables, et à droite se trouvent les noms d'objets dans la scène sur lesquels le composant correct peut être trouvé. Actuellement, le système prend en charge la recherche et l'injection de ces types de composants :
* GameObject (Objet de Jeu)
* UdonBehaviour (Comportement Udon)
* CinemachineVirtualCamera (Caméra Virtuelle Cinemachine)

Ainsi, vous pouvez créer un nouveau programme Udon avec une variable publique appelée "course", et elle sera automatiquement injectée avec le Comportement Udon du Gestionnaire de Parcours. Vous pouvez ajouter vos propres éléments ici, et même ajouter des types supplémentaires si vous le souhaitez - il vous suffit de modifier la méthode **InjectVariableReferences** de la classe **ObstacleCourseEditorWindow**, en ajoutant des types supplémentaires dans la chaîne if. Si vous rédigez un bon gestionnaire de composants générique, faites une demande d'extraction sur le référentiel Git !