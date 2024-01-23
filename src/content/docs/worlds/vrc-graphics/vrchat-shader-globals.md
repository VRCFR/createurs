---
title: "VRChat Shader Globals"
---
VRChat fournit plusieurs paramètres globaux de shader que les créateurs de shaders peuvent utiliser pour implémenter des fonctionnalités spécifiques à VRChat.

Les paramètres globaux de shader suivants sont actuellement disponibles :

- `float _VRChatCameraMode` :
  - `0` - Rendu normal
  - `1` - Rendu dans une caméra portable VR
  - `2` - Rendu dans une caméra portable de bureau
  - `3` - Rendu pour une capture d'écran
- `float _VRChatMirrorMode` :
  - `0` - Rendu normal, pas dans un miroir
  - `1` - Rendu dans un miroir vu en VR
  - `2` - Rendu dans un miroir vu en mode bureau
- `float3 _VRChatMirrorCameraPos` - Position dans l'espace mondial de la caméra miroir (indépendante de l'œil, "centrée" en VR)