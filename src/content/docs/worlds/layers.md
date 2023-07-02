---
title: "Couches Unity dans VRChat"
description: "Quelles sont les couches Unity utilisées par VRChat et Unity ?"
---

[Les couches](https://docs.unity3d.com/2019.4/Documentation/Manual/Layers.html) sont utilisées dans Unity pour organiser vos objets de jeu, déterminer les [collisions](https://docs.unity3d.com/Manual/LayerBasedCollision.html) et les [Raycasts](https://docs.unity3d.com/ScriptReference/Physics.Raycast.html) entre les objets de jeu, afficher sélectivement des parties de la scène, et plus encore.

**Vous pouvez librement utiliser la plupart des couches dans votre monde VRChat.** Certaines couches sont partagées et utilisées par Unity et VRChat.

Lorsque vous créez un projet Unity avec le SDK Worlds de VRChat, votre projet sera automatiquement configuré pour utiliser les couches intégrées de VRChat. Si vous modifiez la matrice de collision, renommez ou supprimez les couches intégrées, vos modifications seront écrasées lorsque vous téléverserez votre monde sur VRChat.

- Les couches 0 à 7 sont des couches Unity "Builtin".
- Les couches 3, 6 et 7 sont des couches internes Unity. Elles ne peuvent pas être utilisées.
- Les couches 8 à 21 sont des couches Unity "User" gérées par le SDK de VRChat.
- Les couches 22 à 31 sont des couches Unity "User" inutilisées. Vous pouvez les modifier librement et les modifications apportées à ces couches ne seront pas perdues lorsque vous construisez et téléversez votre monde.

## Couches intégrées de Unity

| Numéro de couche | Nom de la couche | Description |
| :-- | :-- | :-- |
| 0 | Default | Utilisé par défaut pour les objets de jeu de Unity. Utilisé par les socles d'avatars de VRChat. |
| 1 | TransparentFX | Utilisé pour les ressources de flou de Unity. |
| 2 | IgnoreRaycast | Ignoré par les Raycasts de physique de Unity si aucun masque de couche n'est fourni. Non ignoré par les Raycasts de physique de VRChat. |
| 4 | Water | Utilisé par les ressources standard de Unity. Utilisé par les portails de VRChat. Utilisé par les miroirs de VRChat. Souvent utilisé pour le traitement des postes de Unity. |
| 5 | UI | ⚠ Vous ne voudrez peut-être pas utiliser cette couche. Utilisé par défaut pour l'interface utilisateur de Unity. Ignoré par l'indicateur VRChat de l'interface utilisateur à moins que le joueur n'ait ouvert le menu VRChat. Ignoré par la caméra de VRChat à moins que "UI" ne soit activé dans la caméra. |
| 8 | Interactive | Inutilisé par Unity et VRChat. |
| 9 | Player | Utilisé pour les joueurs de VRChat, à l'exception du joueur local. |
| 10 | PlayerLocal | Utilisé par VRChat pour rendre le joueur local. Les avatars humanoïdes sont rendus sans leur os de tête. |
| 11 | Environment | Inutilisé par Unity et VRChat. |
| 12 | UiMenu | ⚠ Évitez d'utiliser cette couche. Utilisé par les plaques signalétiques de VRChat. Ignoré par l'indicateur VRChat de l'interface utilisateur à moins que le joueur n'ait ouvert le menu VRChat. |
| 13 | Pickup | Utilisé par défaut par les ramassables de VRChat lorsque vous ajoutez un composant de ramassage. Ne colle pas aux joueurs. |
| 14 | PickupNoEnvironment | Les collisionneurs sur cette couche ne collisionnent qu'avec "Pickup". |
| 15 | StereoLeft | Inutilisé par Unity et VRChat. |
| 16 | StereoRight | Inutilisé par Unity et VRChat. |
| 17 | Walkthrough | Les collisionneurs sur cette couche ne collisionnent pas avec les joueurs. |
| 18 | MirrorReflection | Utilisé par VRChat pour rendre le joueur local dans les miroirs. <br> Les rendus sur cette couche n'apparaîtront que dans les miroirs. <br> Les rendus sur cette couche ne sont pas affichés dans la caméra principale de VRChat. <br> Les collisionneurs sur cette couche ne bloquent pas les Raycasts de VRChat. |
| 19 | reserved2 | ⚠ Évitez d'utiliser cette couche. Réservée par VRChat. Lorsque vous téléversez votre monde, tout objet de jeu sur une couche réservée sera déplacé sur la couche 0 (par défaut). |
| 20 | reserved3 | ⚠ Évitez d'utiliser cette couche. Réservée par VRChat. Lorsque vous téléversez votre monde, tout objet de jeu sur une couche réservée sera déplacé sur la couche 0 (par défaut). |
| 21 | reserved4 | ⚠ Évitez d'utiliser cette couche. Réservée par VRChat. Lorsque vous téléversez votre monde, tout objet de jeu sur une couche réservée sera déplacé sur la couche 0 (par défaut). |
| 22-31 | | Inutilisé par Unity et VRChat. VRChat ne remplacera pas le nom et la matrice de collision de ces couches dans les mondes téléversés. |