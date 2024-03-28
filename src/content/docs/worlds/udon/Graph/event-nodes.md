---
title: "Nœuds d'événement"
description: "Ceci est une liste de nœuds Udon considérés comme des « événements »."
sidebar:
    badge: 
        text: Mis à jour
        variant: tip
---

Voici une liste de nœuds Udon considérés comme des "Événements".

Les événements sont utilisés pour détecter des actions et déclencher des chaînes d'actions ou de logique. Les [Événements d'entrée](/worlds/udon/input-events) ont leur propre page spéciale. Pour sauter à un événement dans le graphe, cliquez dessus dans la barre latérale du graphe.

Tous les nœuds ci-dessous ont des nœuds de flux lorsque la logique le requiert.

### Interagir
Déclenché lorsque le joueur local interagit avec cet objet de jeu.

### OnDrop
Déclenché lorsque qu'un joueur de VRChat lâche cet objet après l'avoir tenu.

### OnOwnershipTransferred
Déclenché lorsque la propriété de cet objet est transférée via un mécanisme quelconque.

### OnPickup
Déclenché lorsque cet objet est ramassé par un joueur de VRChat.

### OnPickupUseDown
Déclenché lorsque cet objet est tenu et que le bouton Utiliser est pressé. Se déclenche à l'appui sur le bouton. Nécessite "Maintien automatique" sur Desktop.

### OnPickupUseUp
Déclenché lorsque cet objet est tenu et que le bouton Utiliser est pressé. Se déclenche lorsque le bouton est relâché. Nécessite "Maintien automatique" sur Desktop.

### OnPlayerJoined
Sorties : `player` - `VRC.SDKBase.VRCPlayerApi`

Déclenché lorsqu'un joueur de VRChat rejoint l'instance. Sorties du `player` qui a rejoint.

### OnPlayerLeft
`Event_OnPlayerLeft`

Sorties : `player` - `VRC.SDKBase.VRCPlayerApi`

Déclenché lorsqu'un joueur de VRChat quitte l'instance. Sorties du `player` qui est parti.

### OnSpawn
`Event_OnSpawn`

Obsolète. OnSpawn ne sert à rien dans le SDK3 de VRChat. Dans le SDK2, cet événement était déclenché lors du spawn d'un objet pour le joueur local.

### OnStationEntered
`Event_OnStationEntered`

Déclenché lorsqu'un joueur de VRChat entre dans la station sur cet objet.

### OnStationExited
`Event_OnStationExited`

Déclenché lorsqu'un joueur de VRChat sort de la station sur cet objet.

### OnVideoEnd
`Event_OnVideoEnd`

Déclenché lorsque le lecteur vidéo sur cet objet a fini de lire, soit à la fin de la vidéo, soit via une interaction du joueur.

### OnVideoError
`Event_OnVideoError`

Sorties : `videoError` - `VRC.SDK3.Components.Video.VideoError`

Déclenché lorsque le lecteur vidéo rencontre une erreur lors du chargement de la vidéo.

### OnVideoLoop
`Event_OnVideoLoop`

Si la boucle est activée, déclenché lorsque le lecteur vidéo termine une boucle.

### OnVideoPause
`Event_OnVideoPause`

Déclenché lorsque le lecteur vidéo sur cet objet est mis en pause.

### OnVideoPlay
`Event_OnVideoPlay`

Déclenché lorsque le lecteur vidéo sur cet objet démarre la lecture, soit au début d'une nouvelle vidéo dans une file d'attente, en reprenant la lecture, soit via une interaction du joueur.

### OnVideoStart
`Event_OnVideoStart`

Déclenché lorsque le lecteur vidéo sur cet objet démarre la lecture à partir d'un état arrêté.

### OnVideoReady
`Event_OnVideoReady`

Déclenché lorsque le lecteur vidéo charge une nouvelle vidéo.

# Événements du joueur

### OnPlayerTriggerEnter
`Event_OnPlayerTriggerEnter`

Sorties : `player` - `VRC.SDKBase.VRCPlayerApi`

Déclenché lorsque la capsule d'un joueur entre dans un déclencheur.

### OnPlayerTriggerStay
`Event_OnPlayerTriggerStay`

Sorties : `player` - `VRC.SDKBase.VRCPlayerApi`

Déclenché sur les trames pendant que la capsule d'un joueur est à l'intérieur d'un déclencheur.

### OnPlayerTriggerExit
`Event_OnPlayerTriggerExit`

Sorties : `player` - `VRC.SDKBase.VRCPlayerApi`

Déclenché lorsque la capsule d'un joueur sort d'un déclencheur.

### OnPlayerCollisionEnter
`Event_OnPlayerCollisionEnter`

Sorties : `player` - `VRC.SDKBase.VRCPlayerApi`

Déclenché lorsque la capsule d'un joueur entre en collision avec un collider.

### OnPlayerCollisionStay
`Event_OnPlayerCollisionStay`

Sorties : `player` - `VRC.SDKBase.VRCPlayerApi`

Déclenché sur les trames pendant que la capsule d'un joueur est à l'intérieur d'un collider.

### OnPlayerCollisionExit
`Event_OnPlayerCollisionExit`

Sorties : `player` - `VRC.SDKBase.VRCPlayerApi`

Déclenché lorsque la capsule d'un joueur sort d'un collider.

### OnPlayerParticleCollision
`Event_OnPlayerParticleCollision`

Sorties : `player` - `VRC.SDKBase.VRCPlayerApi`

Déclenché lorsqu'une particule entre en collision avec la capsule d'un joueur, en supposant que le système de particules a Collision et Envoyer des messages de collision activés.

### OnPlayerRespawn
`Event_OnPlayerRespawn`

Sorties : `player` - `VRC.SDKBase.VRCPlayerApi`

Déclenché lorsqu'un joueur réapparaît en utilisant son menu.

### OnScreenUpdate
`Event_OnScreenUpdate`

Sorties : `data` - `VRC.SDK3.Platform.ScreenUpdateData`

Déclenché lorsque le joueur entre pour la première fois dans le monde sur un appareil mobile, et à chaque fois que l'orientation de son appareil change. Sorties une structure `ScreenUpdateData` avec les valeurs suivantes :
* `type` - `ScreenUpdateType` - uniquement `OrientationChanged` pour l'instant, peut être étendu à l'avenir.
* `orientation` - `VRCOrientation` - l'orientation de l'appareil du joueur, en tant qu'énumération `VRC.SDKBase.Platform.VRCOrientation`, qui est `Paysage` ou `Portrait`.
* `resolution` - `Vector2` - la résolution de l'appareil du joueur, sous forme de structure `Vector2`.

### OnInputMethodChanged
`Event_OnInputMethodChanged`
Sorties : `inputMethod` - `VRC.SDKBase.VRCInputMethod`

Déclenché lorsqu'un joueur utilise une méthode d'entrée différente - Clavier, Souris, Manette, etc.

### Notes avancées
Tous les nœuds de cette liste ont le type `System.Void`.