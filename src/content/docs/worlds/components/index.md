---
title : "Composants de Scène"
---

Chaque scène Unity que vous souhaitez intégrer dans VRChat nécessite un composant [VRC_SceneDescriptor](/worlds/components/vrc_scenedescriptor). Le SDK de VRChat Worlds contient divers autres composants pour permettre à vos utilisateurs d'interagir avec votre monde, de ramasser des objets, de se voir dans un miroir, et plus encore.

Veuillez consulter [Composants du Monde Autorisés](/worlds/whitelisted-world-components) pour une liste complète des composants disponibles dans le SDK de VRChat.

| Paramètre                                           | Description                                                  |
| --------------------------------------------------- | ------------------------------------------------------------ |
| [VRC_AvatarPedestal](/worlds/components/vrc_avatarpedestal) | Utilisé pour afficher et/ou changer d'avatar.                 |
| [VRC_MirrorReflection](/worlds/components/vrc_mirrorreflection) | Utilisé pour créer un miroir dans VRChat.                     |
| [VRC_ObjectSync](/worlds/components/vrc_objectsync) | Synchronise la transformation d'un GameObject avec tous les joueurs dans l'instance. |
| [VRC_Pickup](/worlds/components/vrc_pickup) | Permet aux objets d'être ramassés, tenus et utilisés par les joueurs.
| [VRC_PortalMarker](/worlds/components/vrc_portalmarker) | Crée des portails vers d'autres mondes VRChat.
| [VRC_SceneDescriptor](/worlds/components/vrc_scenedescriptor) | Décrit votre monde VRChat. Requis pour chaque scène Unity que vous souhaitez utiliser comme monde VRChat.
| [VRC_SpatialAudioSource](/worlds/components/vrc_spatialaudiosource) | Ajoute une spatialisation 3D à une source audio Unity. Habituellement ajouté automatiquement avec les composants AudioSource dans l'éditeur.
| [VRC_Station](/worlds/components/vrc_station) | Permet aux utilisateurs de s'asseoir.
| [VRC_UIShape](/worlds/components/vrc_uishape) | Permet aux utilisateurs d'interagir avec le système d'interface utilisateur de Unity.

