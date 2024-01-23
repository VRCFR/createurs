---
title: "Paramètres de Mise à l'Échelle des Avatars"
---

Ce script d'exemple UdonBehaviour vous permet de modifier facilement les paramètres de mise à l'échelle des avatars de votre monde.

Pour apprendre à écrire votre propre script Udon pour la mise à l'échelle des avatars, lisez notre [documentation sur la mise à l'échelle des avatars](/worlds/udon/players/player-avatar-scaling).

![avatar-scaling-example-component.png](/img/worlds/udon/avatar-scaling-example-component.png)

## Variables

| Nom | Type | Défaut | Description |
| - | - | - | - |
| **disableAvatarScaling** | booléen | false | Si activé, les joueurs dans votre monde ne pourront pas choisir leur propre échelle d'avatar, même si vous l'avez autorisé sur VRChat.com. |
| **minimumHeight** | flottant | 0.2 | La hauteur minimale des yeux de l'avatar en mètres que les joueurs peuvent choisir. |
| **maximumHeight** | flottant | 5 | La hauteur maximale des yeux de l'avatar en mètres que les joueurs peuvent choisir. |
| **alwaysEnforceHeight** | booléen | false | Si activé, les joueurs qui passent à un avatar très grand ou très petit seront automatiquement réglés sur "minimumHeight" ou "maximumHeight". 

## Exemples

- Je veux que les joueurs utilisent la mise à l'échelle des avatars librement.
	- Vous n'avez pas besoin de changer les paramètres.
- Je ne veux pas que les joueurs utilisent la mise à l'échelle des avatars.
	- Activez "disableAvatarScaling".
- Je veux que les joueurs utilisent une hauteur d'avatar spécifique.
	- Réglez "minimumHeight" et "maximumHeight" comme vous le souhaitez.
	- Si vous voulez empêcher l'utilisation d'avatars très grands ou très petits, activez "alwaysEnforceHeight".

Voici à quoi ressemble le Graph Udon pour le script d'exemple :

![avatar-scaling-example-component.png](/img/worlds/udon/avatar-scaling-example-graph.png)