---
title: "Boîte à Outils pour Parcours d'Obstacles"
---
![Boîte à Outils pour Parcours d'Obstacles](/img/worlds/uoc-window-0a203a2-obstacle-course-toolkit.png)

Nous avons créé une fenêtre spéciale pour aider à gérer tous les préfabriqués spéciaux et les programmes dans le projet. Voici ce que vous pouvez faire dans chaque section :

## Points de Contrôle

### Préfabriqués de Point de Contrôle
![image](/img/worlds/uoc-window-a05aa7a-checkpoint-prefabs.png)
Vous pouvez définir tous les préfabriqués que vous souhaitez utiliser pour votre porte de départ, les points de contrôle et la porte d'arrivée ici. Ils peuvent ensuite être facilement placés dans votre scène : [Ajouter des Points de Contrôle](/worlds/examples/obstacle-course/build-from-demo-parts#add-checkpoints).

### Points de Contrôle dans la Scène
![uoc-window-f588547-checkpoints-in-scene.png](/img/worlds/uoc-window-f588547-checkpoints-in-scene.png)

Sélectionnez l'un de ceux-ci pour zoomer sur le point de contrôle sélectionné dans la Vue Scène. Vous pouvez réorganiser les points de contrôle (ce qui les renommera également) et les supprimer. Les modifications apportées ici mettront correctement à jour les variables sur le CourseManager.

## Gestionnaire de Joueurs

### Préfabriqué d'Objet Joueur
![uoc-window-b781ee6-playerobjectprefab.png](/img/worlds/uoc-window-b781ee6-playerobjectprefab.png)

Changez cet objet si vous créez votre propre Objet Joueur, qui contient le programme PlayerData et suit chaque joueur local. La plupart des créateurs n'auront pas besoin de faire cela.

### Nombre de Joueurs
![uoc-window-0aa8cd9-number-of-players.png](/img/worlds/uoc-window-0aa8cd9-number-of-players.png)

Changez ce nombre pour générer le bon nombre d'Objets Joueurs et peupler automatiquement le ObjectPool.

## Gestionnaire de Scores

### Préfabriqué d'Objet Score
![uoc-window-c808c71-score-object-prefab.png](/img/worlds/uoc-window-c808c71-score-object-prefab.png)

Changez cet objet si vous créez votre propre ScoreField, qui affichera les scores des joueurs à mesure qu'ils terminent un parcours.

### Nombre de Scores à Afficher
![uoc-window-778d7ed-number-of-scores.png](/img/worlds/uoc-window-778d7ed-number-of-scores.png)

Changez ce nombre pour générer le bon nombre de Champs de Score et peupler les références du ScoreManager à ceux-ci.

## Power Ups

### Préfabriqués de Power Up
![uoc-window-d656caf-power-up-prefabs.png](/img/worlds/uoc-window-d656caf-power-up-prefabs.png)

Vous pouvez définir tous les préfabriqués que vous souhaitez utiliser pour vos Power Ups ici. Ils peuvent ensuite être facilement placés dans votre scène (lien vers le placement de Power Up) et automatiquement connectés.

## Power Ups dans la Scène
![uoc-window-4bf4a4c-power-ups-in-scene.png](/img/worlds/uoc-window-4bf4a4c-power-ups-in-scene.png)

Sélectionnez l'un de ceux-ci pour zoomer sur le Power Up sélectionné dans la Vue Scène. Vous pouvez changer les effets qu'ils auront sur la Vitesse et le Saut du joueur, ainsi que la durée de ces effets après qu'ils touchent le ramassage.

## Valeurs par Défaut
![uoc-window-f1374e0-defaults.png](/img/worlds/uoc-window-f1374e0-defaults.png)

C'est ici que vous définissez les vitesses de Mouvement et de Saut au lieu de le faire sur l'objet VRCWorld. La Marche, la Course et le Déplacement Latéral sont tous réglés à la même vitesse par défaut, et ils sont modifiés ensemble lorsque le joueur touche les Power Ups.