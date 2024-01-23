---
title: "Parcours d'Obstacles"
---
# Aperçu
<iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2Fid3VqPUy_rY%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Did3VqPUy_rY&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fid3VqPUy_rY%2Fhqdefault.jpg&key=f2aa6fc3595946d0afc3d76cbbd25dc3&type=text%2Fhtml&schema=youtube" width="720" height="480" scrolling="no" title="Intégration YouTube" frameborder="0" allow="autoplay; fullscreen" allowfullscreen="true"></iframe>

Ce projet a été créé pour notre deuxième Jam Mondiale, et sert de kit de démarrage amusant pour un monde de jeu de course contre la montre !

Visitez le monde exemple ici : [Monde de Parcours d'Obstacles VRChat Jam](https://vrchat.com/home/world/wrld_39c422c4-ab87-4cc1-a4d1-390af2e45c74).
Téléchargez un projet prêt à l'emploi ici : [Projet de Parcours d'Obstacles VRChat](https://github.com/vrchat/VRChat-Obstacle-Jam/releases/download/1.0.3/obstacle-jam-public_v1.0.3.zip).
Pour les utilisateurs avancés, vous pouvez [forker le projet GitHub](https://github.com/vrchat/VRChat-Obstacle-Jam) pour rester facilement à jour avec les mises à jour ou corrections.

Il est conçu pour être utilisable par des créateurs avec peu ou pas d'expérience en Udon, vous pouvez simplement assembler un nouveau parcours en utilisant les modèles existants, ou en créant / important les vôtres.

Pour explorer la scène, téléchargez simplement la dernière version, et Construisez & Testez la scène 'Assets/_WorldJam2/Scenes/DemoScene'.

# Démarrage Rapide
Voici quelques modifications faciles que vous pouvez apporter pour commencer :

## Mouvement & Saut
Ouvrez la fenêtre de l'outil depuis votre barre de menu en trouvant l'élément "▶ Boîte à Outils pour Parcours d'Obstacles" et sélectionnez "Ouvrir la Fenêtre" dans son menu déroulant. Ouvrez la section "Power Ups" et vous pouvez changer les pouvoirs de Mouvement et de Saut par défaut pour le monde.
![index-40a0a08-utility-change-defaults.png](/img/worlds/index-40a0a08-utility-change-defaults.png)

## Nombre de Joueurs
Si vous souhaitez augmenter le nombre de joueurs pouvant parcourir le parcours, ouvrez simplement la section "Gestionnaire de Joueurs" de la Fenêtre Utilitaire et augmentez le nombre ici. Assurez-vous de changer le nombre de joueurs que votre monde peut gérer lorsque vous publiez votre monde pour qu'il soit la moitié de ce nombre !
![index-985e270-number-of-players.png](/img/worlds/index-985e270-number-of-players.png)

## Propriétés de PowerUp
Retournez dans la section "Power Ups" de la Fenêtre Utilitaire, ouvrez la section "PowerUps dans la Scène". Cliquez sur le nom d'un PowerUp et la Vue Scène se concentrera dessus pour que vous puissiez voir lequel c'est. Ensuite, vous pouvez changer les champs _vitesse_, _saut_ et/ou _durée_ pour mettre à jour les variables de ce PowerUp.
![index-f5481d9-powerups-in-scene.png](/img/worlds/index-f5481d9-powerups-in-scene.png)