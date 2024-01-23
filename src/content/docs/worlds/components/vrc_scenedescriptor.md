---
title: "VRC Scene Descriptor"
---
Décrit votre monde VRChat. Requis pour chaque scène Unity que vous souhaitez utiliser comme monde VRChat.

| Paramètre                      | Description                                                                                                      |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| Spawns                         | Un tableau de transformations utilisé comme référence pour les points d'apparition du monde.                     |
| Spawn Order                    | Ordre dans lequel les emplacements d'apparition doivent être utilisés, les options comprennent :                 |
|                                | - First: Toujours utiliser le premier spawn                                                                      |
|                                | - Sequential: Dans l'ordre où les spawns sont listés                                                             |
|                                | - Random: Fait apparaître les utilisateurs aléatoirement                                                         |
|                                | - Demo: Le point de spawn représente le centre de votre espace de jeu, par exemple, si vous êtes à un mètre du centre de votre espace de jeu, vous apparaissez à un mètre du spawn. |
| Spawn Orientation              | Orientation dans laquelle l'utilisateur sera spawné, les options comprennent :                                    |
|                                | - Default: Le réglage de spawn par défaut de VRChat (Actuellement Aligner le Joueur avec le Point de Spawn)       |
|                                | - Align Player With Spawn Point: Aligner le joueur avec la rotation du transform de spawn                        |
|                                | - Align Room With Spawn Point: Centre l'espace de jeu du joueur sur le point de spawn                            |
| Reference Camera               | Les paramètres de cette caméra sont appliqués aux utilisateurs dans la salle. Peut être un objet dans la scène ou un préfabriqué. |
| Respawn Height -Y              | Hauteur à laquelle les joueurs respawnent et les objets ramassables sont respawnés ou détruits.                  |
| Object Behaviour At Respawn    | Que doivent faire les objets ramassables lorsqu'ils tombent du monde, les options comprennent :                  |
|                                | - Destroy: Supprimer l'objet ramassable                                                                          |
|                                | - Respawn: Faire respawn l'objet ramassable à l'emplacement où il a commencé                                     |
| Forbid Free Modification       | Si vrai, les objets non synchronisés ne peuvent pas être manipulés par les non-maîtres.                           |
| Forbid User Portals            | Empêche les utilisateurs d'ouvrir des portails depuis le menu du monde.                                           |
| User Custom Voice Falloff Range | Active les options suivantes qui contrôlent la portée de baisse de volume de la voix.                             |
| Voice Falloff Near             | La distance à laquelle les voix des utilisateurs commencent à diminuer en volume.                                 |
| Voice Falloff Far              | La distance à laquelle les voix des utilisateurs deviennent inaudibles.                                           |
| Unity Version                  | Version d'Unity utilisée ; vous ne devriez jamais avoir besoin de la modifier.                                     |
| Dynamic Prefabs                | *Obsolète, non utilisé dans le SDK3 de VRChat.* |
| Dynamic Materials              | *Obsolète, non utilisé dans le SDK3 de VRChat.* |
| Interact Passthrough           | Un masque définissant quelles couches utilisateur doivent permettre aux interactions de passer à travers. Voir la page [Layers](/worlds/layers) pour plus d'informations. |
