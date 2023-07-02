---
title: "Descripteur de scène VRC"
description: "Décrire votre monde VRChat. Requis pour chaque scène Unity que vous souhaitez utiliser comme monde VRChat."
---

| Paramètre                   | Description                                                                                                      |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Spawns                      | Un tableau de transformations utilisées comme référence pour les points d'apparition du monde.                   |
| Ordre d'apparition          | L'ordre dans lequel les emplacements d'apparition doivent être utilisés, les options comprennent:               |
|                             | - Premier : Toujours utiliser le premier point d'apparition                                                     |
|                             | - Séquentiel : Dans l'ordre des points d'apparition listés                                                      |
|                             | - Aléatoire : Apparition aléatoire des utilisateurs                                                             |
|                             | - Démo : Le point d'apparition représente le centre de votre espace de jeu, ce qui signifie, par exemple, si vous êtes à un mètre du centre de votre espace de jeu, vous apparaissez à un mètre du point d'apparition. |
| Orientation d'apparition    | Orientation dans laquelle l'utilisateur apparaîtra, les options comprennent:                                    |
|                             | - Par défaut : Paramètre d'apparition par défaut de VRChat (Actuellement Aligner le joueur avec le point d'apparition) |
|                             | - Aligner le joueur avec le point d'apparition : Aligner le joueur avec la rotation de la transformation d'apparition |
|                             | - Aligner la salle avec le point d'apparition : Centrer l'échelle de la salle des joueurs sur le point d'apparition |
| Caméra de référence         | Les paramètres de cette caméra s'appliquent aux utilisateurs de la salle. Peut être un objet dans la scène ou un prefab. |
| Hauteur de réapparition -Y  | Hauteur à laquelle les joueurs réapparaissent et les objets réapparaissent ou sont détruits.                   |
| Comportement des objets lors de la réapparition | Que doivent faire les objets quand ils tombent hors du monde, les options comprennent:                           |
|                             | - Détruire : Supprimer l'objet                                                                                  |
|                             | - Réapparition : Réapparition de l'objet à l'emplacement où il a commencé                                      |
| Interdire la modification libre | Si vrai, les objets non synchronisés ne peuvent pas être manipulés par les non-maîtres.                           |
| Interdire les portails utilisateur | Empêche les utilisateurs d'ouvrir des portails depuis le menu du monde.                                       |
| Portée de la diminution vocale personnalisée de l'utilisateur | Activer les options suivantes qui contrôlent la portée de la diminution vocale.                                 |
| Diminution vocale en proximité | La distance à laquelle les voix des utilisateurs commencent à se réduire en volume.                              |
| Diminution vocale en éloignement | La distance à laquelle les voix des utilisateurs deviennent inaudibles.                                         |
| Version Unity               | Version Unity utilisée ; vous ne devriez jamais avoir besoin de le modifier.                                    |
| Préfabs dynamiques          | Un tableau de prefabs qui peuvent être générés dynamiquement pendant l'exécution. Tout prefab qui n'est pas référencé dans la scène mais qui doit être généré doit être mentionné ici. |
| Matériaux dynamiques        | Un tableau de matériaux qui peuvent être modifiés dynamiquement pendant l'exécution. Tout matériau qui n'est pas référencé dans la scène mais qui doit être appliqué à un objet doit être mentionné ici. |