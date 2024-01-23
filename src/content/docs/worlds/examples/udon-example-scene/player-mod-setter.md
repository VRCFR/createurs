---
title: Paramètres de Modification du Joueur
---
Ce script d'exemple UdonBehaviour vous permet de configurer le mouvement des joueurs dans votre monde.

Ce script définit ces valeurs une seule fois lorsqu'un joueur rejoint votre monde. Vous pouvez utiliser d'autres scripts pour modifier ces valeurs plus tard.
## Variables
| Nom                   | Type  | Défaut | Description |
| -                     | -     | -      | - |
| **Jump Height**       | float | 3      | La force de saut des joueurs. Affectée par la gravité.
| **Run Speed**         | float | 4      | La vitesse de déplacement en avant ou en arrière. (Si le joueur utilise un clavier, il doit maintenir la touche `Shift`.) 
| **Walk Speed**        | float | 2      | (Clavier uniquement) La vitesse de déplacement sans maintenir la touche `Shift`.
| **Strafe Speed**      | float | 2      | La vitesse de déplacement de gauche à droite.
| **Gravity**           | float | 1      | La mesure dans laquelle la [gravité](https://docs.unity3d.com/ScriptReference/Physics-gravity.html) affecte les joueurs.
| **Use Legacy Locomotion** | bool  | false   | Active le système de locomotion légendaire et déprécié de VRChat. Ne peut pas être désactivé par Udon plus tard.