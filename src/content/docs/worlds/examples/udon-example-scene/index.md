---
title: "Scène d'exemple Udon"
---
Cette scène est prête pour [Construire et Tester](/worlds/udon/using-build-test) ou Publier, et elle démontre de nombreux éléments interactifs courants.

## Prefabs
Ces objets présentent certains des Prefabs inclus avec le SDK qui démontrent des interactions par défaut avec les composants VRChat pour les socles d'avatar, les stations et les miroirs.
 ![](/img/worlds/udon-example-scene-prefab-scene.png)
### VRCWorld
Ce prefab facilite le téléversement de votre scène Unity sur VRChat. Il comporte quatre composants :
- Le script [VRC Scene Descriptor](/worlds/components/vrc_scenedescriptor/), qui définit les propriétés de base de votre monde. Il est requis pour chaque monde VRChat.
- Le script [VRC Pipeline Manager](/sdk/vrcpipelinemanager/), qui contient l'ID du monde. Il est ajouté automatiquement avec le VRC Scene Descriptor.
- Le programme Udon Graph [VRCWorldSettings](/worlds/examples/udon-example-scene/player-mod-setter), qui vous permet de changer la vitesse de déplacement des joueurs dans votre monde.
- Le programme Udon Graph [Avatar Scaling Settings](/worlds/examples/udon-example-scene/avatar-scaling-settings), qui vous permet de limiter l'échelle d'avatar des joueurs dans votre monde.

Si vous souhaitez utiliser le prefab VRCWorld dans votre propre scène Unity, vous pouvez le trouver dans `\Packages\com.vrchat.worlds\Samples\UdonExampleScene\Prefabs\VRCWorld.prefab`.

### AvatarPedestal
Ceci est disponible en tant que prefab, et possède un programme pour changer l'avatar d'un utilisateur lorsqu'il interagit avec le socle, ce qui est le comportement par défaut du prefab.

### VRCChair3
Ceci est disponible en tant que prefab, et possède un programme pour asseoir un joueur dans une station lorsqu'il interagit avec celle-ci, et enregistre son displayName lorsqu'il entre ou sort.

### MirrorSystem
Cet objet a un programme **ToggleGameObject** qui utilise l'événement Interact pour activer/désactiver un objet cible. Dans ce cas, il contrôle un objet VRCMirror qui est un enfant de celui-ci.

### Cubes
Ces objets démontrent quelques choses simples que vous pouvez faire avec des cubes, en réutilisant principalement un programme **ChangeMaterialOnEvent** pour montrer comment vous pouvez déclencher des événements personnalisés à partir d'autres objets.
![](/img/worlds/udon-example-scene-7038b64-cubes-scene.png)

### ClickableCube
Cet objet a un programme **SendEventOnMouseDown** - qui répond aux clics de souris pour envoyer un événement à un autre objet. Dans ce cas, il envoie un événement personnalisé appelé "changeMaterial" à un programme **ChangeMaterialOnEvent** sur un objet enfant, qui change les matériaux à partir d'un tableau chaque fois qu'il reçoit cet événement. Ces deux programmes sont réutilisables - vous pouvez changer le nom de l'événement envoyé depuis le programme **SendEventOnMouseDown** dans l'inspecteur sur le composant UdonBehaviour. Notez qu'utiliser l'événement MouseDown n'est pas aussi utile que l'événement Interact, mais cela fonctionne dans l'éditeur, c'est pourquoi il est utilisé ici.

### TimerCube
Cet objet a un programme **SendEventOnTimer** - qui exécute un minuteur pendant une durée donnée, puis envoie l'événement spécifié. Dans ce cas, il envoie un événement personnalisé appelé "changeMaterial" à un programme **ChangeMaterialOnEvent** sur un objet enfant, qui change les matériaux à partir d'un tableau chaque fois qu'il reçoit cet événement. Ces deux programmes sont réutilisables - vous pouvez changer le nom de l'événement envoyé depuis le programme **SendEventOnTimer** dans l'inspecteur sur le composant UdonBehaviour, et changer sa durée en secondes pour changer la fréquence à laquelle il se déclenche.

### InteractCube
Cet objet a un programme **SendEventOnInteract** - qui écoute l'événement Interact, déclenché lorsqu'un joueur pointe sur un objet et appuie sur son bouton 'utiliser'. Dans ce cas, il envoie un événement personnalisé appelé "changeMaterial" à un programme **ChangeMaterialOnEvent** sur un objet enfant, qui change les matériaux à partir d'un tableau chaque fois qu'il reçoit cet événement. Ces deux programmes sont réutilisables - vous pouvez changer le nom de l'événement envoyé depuis le programme **SendEventOnInteract** dans l'inspecteur sur le composant UdonBehaviour.

### PickupCube
Cet objet a deux composants importants - un comportement Udon avec un programme **PickupAndUse** et un composant VRCObjectSync. Le composant Object Sync synchronisera le mouvement de cet objet avec d'autres utilisateurs, et le programme **PickupAndUse** change la couleur du matériau du cube lorsque le bouton "Utiliser" est pressé, en écoutant les événements **OnPickupUseDown** et **OnPickupUseUp**.

### ClickableCubeForLoop
Cet objet utilise le programme **SendEventOnMouseDown** du ClickableCube, et l'utilise pour exécuter un événement personnalisé appelé "runLoop" qui est sur un champ Texte enfant. Ce champ a un programme **SimpleForLoop** qui démontre l'utilisation basique d'une boucle For - dans ce cas, juste en créant une chaîne et en ajoutant l'index actuel de la boucle à la cha

îne à chaque boucle, puis en mettant à jour le champ texte avec cette chaîne finale.

## Udon Variable Sync
Ces objets démontrent différentes manières de synchroniser les valeurs des variables du propriétaire d'un objet avec tous les autres dans l'instance.
![](/img/worlds/udon-example-scene-01fa074-variable-sync-scene.png)

L'élément "Canvas" a de nombreux éléments d'interface utilisateur avec des variables synchronisées :

### ButtonSyncOwner
C'est le premier programme décrit ici qui utilise la méthode de synchronisation [Manuelle](/worlds/udon/networking#2-manual-variable). Dans l'image ci-dessous, vous pouvez voir qu'il a un gestionnaire OnClick() qui appelle UdonBehaviour.SendCustomEvent avec une valeur de "OnClick". Il cible le UdonBehaviour juste en dessous, où il exécutera l'événement personnalisé "OnClick". C'est ainsi que les éléments d'interface utilisateur Unity peuvent exécuter des événements sur les UdonBehaviours.
![Déclencher des événements personnalisés à partir de contrôles d'interface utilisateur Unity](/img/worlds/index-2c98f4e-onclick-manual-sync.png)
Dans le programme de graphique, l'événement OnClick vérifie si le joueur qui a cliqué est le propriétaire de l'objet. S'il l'est, il augmente la variable "clickCount" de 1, puis appelle **RequestSerialization**, qui signale à Udon de mettre à jour les données sur ce UdonBehaviour synchronisé manuellement.
![OnClick ▸ Si Propriétaire ▸ Définir clickCount à clickCount + 1 ▸ Sériealiser.](/img/worlds/index-f0a3ff2-bso-gaph.png)
Notez que le nœud 'Set clickCount' a le bouton bascule 'sendChange' activé. Cela déclenchera un événement pour tout le monde lorsqu'ils recevront la nouvelle valeur de clickCount.
![Les événements de changement de variable sont très puissants ! Vous pouvez les utiliser pour exécuter la même logique sur le propriétaire et les autres chaque fois qu'une variable synchronisée est modifiée.](/img/worlds/index-4590d3e-clickCount-change.png)
Lorsque clickCount est mis à jour, cet événement de changement se déclenche, qui définira ensuite le texte du bouton à la nouvelle valeur, peu importe qui est le 'propriétaire' de ce programme.

### ButtonSyncAnyone
Cet objet utilise un programme très similaire à **ButtonSyncOwner** ci-dessus, mais ajoute une logique pour les utilisateurs qui cliquent sur le bouton et qui ne sont *pas* le propriétaire de l'objet. Dans ce cas, ils envoient l'événement personnalisé "OnClick" au propriétaire de l'objet. C'est tout ! Le propriétaire recevra cet événement et le traitera comme s'il venait de cliquer lui-même sur le bouton.
![Les non-propriétaires enverront un événement au propriétaire pour mettre à jour facilement le nombre.](/img/worlds/index-2b1a9c3-ButtonSyncAnyone.png)
### ButtonSyncBecomeOwner
Cet objet s'appuie sur le programme ButtonSync maintenant familier pour démontrer comment changer facilement la propriété d'un objet. Lorsqu'un non-propriétaire clique sur le bouton, il lui assigne la propriété, puis met à jour la variable. C'est utile lorsque vous souhaitez changer plusieurs variables ou effectuer une logique plus compliquée que simplement incrémenter une valeur.
![](/img/worlds/udon-example-scene-1372141-button-sync-become-owner.png)

Lors du changement de propriété d'un objet, une logique est exécutée pour décider si le transfert est autorisé ou non. Vous pouvez en savoir plus à ce sujet ici : [Réseau](/worlds/udon/networking#object-ownership). Si vous n'ajoutez aucune logique personnalisée, toutes les demandes de propriété seront approuvées. Les nœuds ci-dessous montrent une configuration simple qui vérifie une variable booléenne appelée 'someSpecialLogic' pour décider si le transfert sera approuvé. Vous pourriez construire votre propre logique basée sur le 'demandeur', le 'nouveau propriétaire', ou les deux.
![Quelqu'un veut-il être le nouveau propriétaire ? Vérifiez 'someSpecialLogic' que vous avez mis à jour ailleurs.](/img/worlds/index-91b3564-onOwnershipRequest.png)

### SliderSync
Cet objet possède un programme appelé **SliderSync** qui fonctionne de manière similaire à **ButtonSyncBecomeOwner**. Lorsque quelqu'un déplace le curseur, il devient le propriétaire et envoie la nouvelle valeur à tout le monde. Une différence est que lorsque l'événement "OnValueChanged" est déclenché depuis l'interface utilisateur, il vérifiera si cette nouvelle valeur est différente de la valeur actuelle du curseur. C'est parce que la mise à jour de la valeur du curseur depuis Udon déclenchera également cet événement, ce qui pourrait causer une boucle infinie. Donc, à la place, nous avons une logique qui s'assure que la variable 'sliderValue' est différente de la valeur du curseur avant d'exécuter le reste de notre logique.

Il utilise également l'événement de changement de variable pour mettre à jour un champ de texte avec la valeur du curseur chaque fois que quelqu'un devient le propriétaire et la met à jour.

### Toggle

Cet objet possède un programme appelé **ToggleSync** qui fonctionne de la même manière que le curseur ci-dessus. Lorsque quelqu'un change la valeur pour quelque chose d'inégal à la valeur actuelle, il devient le propriétaire et envoie la nouvelle valeur à tout le monde.

### Dropdown
 
Cet objet possède un programme appelé **DropdownSync** qui fonctionne de la même manière que le Toggle et le Slider ci-dessus. Lorsque quelqu'un change la valeur, il s'assure qu'elle est différente de la valeur actuelle, puis devient le propriétaire et envoie la nouvelle valeur à tout le monde.

### InputField
 
Cet objet possède un programme appelé **InputFieldSync** qui fonctionne de manière similaire au Dropdown ci-dessus. Lorsque quelqu'un change la valeur, il vérifie qu'elle est différente, devient le propriétaire et envoie la nouvelle valeur à tout le monde.

### PickupCube
 
Cet objet possède des composants VRC Pickup et VRC Object Sync qui lui permettent d'être ramassé et déplacé, synchronisant automatiquement avec d'autres utilisateurs. Le comportement Udon est réglé sur "Continuous" au lieu de "Manual" comme les programmes de synchronisation ci-dessus, car il a besoin de se mettre à jour plus souvent pour maintenir son Transform à jour. Ce comportement Udon a un programme **SyncPickupColor** qui change doucement la couleur pendant qu'il est tenu. Il le fait en vérifiant pendant l'événement Update pour voir si le joueur local est le propriétaire de l'objet ET si VRCPickup.get isHeld est vrai. Notez qu'il n'utilise pas RequestSerialization puisqu'il est réglé sur Continuous - il mettra simplement à jour les valeurs aussi souvent que possible.

### PickupSphere
Cet objet n'a en fait pas d'Udon ! Il utilise simplement les composants VRC Pickup et VRC Object Sync pour permettre aux utilisateurs de le ramasser et de le déplacer de manière synchronisée.

## Détection des joueurs
Il peut être très utile de répondre à un joueur entrant dans une certaine zone ou entrant en collision avec un objet physique. Ces programmes d'exemple illustrent quelques façons de le faire.

### PlayerTrigger
C'est le moyen le plus couramment utilisé pour détecter un joueur entrant ou sortant d'une zone. L'objet "TriggerArea" a un matériau bleu translucide, un Box Collider avec *IsTrigger* coché, et un comportement Udon avec une source de programme **PlayerTrigger**.

Dans ce programme, les événements **OnPlayerTriggerEnter** et **OnPlayerTriggerExit** sont déclenchés chaque fois qu'un joueur entre ou sort du collider. Le programme obtient ensuite le **displayName** de ce joueur et met à jour le texte sur le canevas cible.

### PlayerCollision
Cette configuration montre comment déclencher et répondre aux événements **OnPlayerCollisionEnter/Exit**, qui sont déclenchés lorsqu'un objet physique entre en collision avec le collider d'un joueur.

L'objet *TriggerArea* a un programme Udon **FireOnTrigger** qui détecte un joueur entrant dans sa zone de déclenchement, tout comme dans le programme **PlayerTrigger** ci-dessus. Dans ce cas, cet événement est utilisé pour envoyer l'événement personnalisé "Fire" à l'objet *Projectile*. Cela fera ajouter une force au cube Projecticle qui le déplacera vers le joueur. Lorsqu'il entre en collision avec le joueur, il écrira le displayName de ce joueur dans un champ de texte cible.

Notez que les événements PlayerCollision ne se déclencheront localement que pour le joueur qui les a vécus. Si vous souhaitez informer les autres joueurs de ces événements, vous devrez ajouter cette fonctionnalité vous-même via des variables synchronisées ou des événements réseau personnalisés.

### PlayerParticleCollision
Cette démonstration a une configuration similaire à PlayerCollision ci-dessus, où elle utilise une zone de déclenchement pour démarrer d'autres événements. Dans ce cas, lorsqu'un joueur entre dans la zone de déclenchement, le programme **SetActiveFromPlayerTrigger** allumera l'objet *CollisionParticles*. Cet objet a un ParticleSystem qui tire sur le joueur avec World Collision et Send Collision Messages activés. Le programme Udon **PlayerCollisionParticles** attaché à cet objet déclenchera les événements **OnPlayerParticleCollision* dans le graphique, qui écrivent le displayName du joueur affecté dans le champ de texte cible.

## [Udon Sync Player](/worlds/examples/udon-example-scene/udon-video-sync-player)
Cette configuration montre une manière d'utiliser les lecteurs vidéo Unity / AVPro pour charger et synchroniser la lecture vidéo. C'est un grand programme, donc nous l'avons séparé sur sa propre page.

## CubeArraySync
Ce programme simple crée une grille de cubes qui s'allument et s'éteignent aléatoirement lorsque quelqu'un clique dessus tout en utilisant très peu de données, démontrant la puissance de la synchronisation des tableaux. Le programme **CubeArraySync** a une variable appelée *data* qui est un tableau de Booléens avec 25 valeurs. Cela signifie qu'il a 25 valeurs oui/non simples qui sont synchronisées avec chaque utilisateur. Il a également un tableau d'objets GameObject appelé *cubes* avec 25 cubes.

Lorsque quelqu'un clique sur l'objet contenant tous les cubes, un événement réseau personnalisé appelé "Randomize" est envoyé au propriétaire de l

'objet CubeArraySync. Le propriétaire utilise ensuite une boucle **For** pour définir aléatoirement chaque valeur sur on ou off, en générant un nombre entre 0 et 1 et en vérifiant si cette valeur est supérieure à 0,5. Une fois qu'il met à jour la variable du tableau, il appelle **RequestSerialization** puis appelle l'événement personnalisé **UpdateCubes**.

L'événement **UpdateCubes** utilise une autre boucle **For** pour parcourir chaque variable oui/non dans le tableau et définir son cube correspondant sur on ou off. Cet événement est déclenché par le propriétaire après la mise à jour du tableau, ou par **OnDeserialization** après que VRChat a mis à jour la variable du tableau pour tous les autres utilisateurs. Nous utilisons OnDeserialization ici au lieu de OnVariableChange parce que les variables de tableau ne déclenchent actuellement pas d'événements de changement de variable, donc nous attendons d'avoir de nouvelles données dans OnDeserialization et mettons à jour notre scène ensuite.

## ObjectPool
Le [Object Pool](/worlds/udon/networking/network-components#vrc-object-pool) est un composant qui vous aide à gérer une collection d'objets. Il synchronisera automatiquement l'état Actif de ses objets. Ce programme d'exemple fera tomber des boîtes du ciel une à une dans une grille empilée, et lorsque vous cliquez sur une boîte, elle est retirée et réapparue du ciel.

Pour ce faire, le programme **ObjectPool** exécute un simple minuteur et essaie de **Spawn** un objet à intervalles réguliers. Chaque *Pooled Box* dans son Pool a un simple programme **Pooled Box** qui enregistre sa position initiale au démarrage, restaure cette position chaque fois qu'elle est activée (ce qui se produit lorsqu'elle est générée par le pool), et renvoie chaque objet lorsque vous cliquez dessus.

## [Simple Pen System](/worlds/examples/udon-example-scene/simple-pen-system)
Même un stylo basique demande beaucoup de travail, donc cet exemple a sa propre page.

## ChooserContainer
Un canevas qui suit le joueur local autour du monde. Utilise un programme 'FollowPlayer' qui peut être facilement réutilisé pour d'autres objets.

### Chooser
Bascule on/off tous les préfabriqués qui contiennent les exemples pour ce monde. Montre comment gérer la synchronisation pour un tableau d'objets de manière à ce que tout le monde puisse le contrôler.