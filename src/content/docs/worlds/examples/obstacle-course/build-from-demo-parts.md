---
title: "Parcours d'Obstacles : Construire à Partir de Pièces de Démonstration"
---

# Ouvrir la Scène de Démarrage
La manière la plus simple de créer un nouveau parcours est d'utiliser les modèles et les préfabriqués que nous fournissons.
Commencez par ouvrir la scène "_WorldJam2/Scenes/Starter.unity"

# Créez votre propre Dossier
Il est important de sauvegarder tout ce qui est spécifique à votre projet dans un dossier en dehors du dossier "_WorldJam2" pour pouvoir importer des mises à jour sans écraser votre travail. Nous vous recommandons de créer un nouveau dossier sous Assets, nous l'appellerons "_MyProject" pour cette démo. Nous utilisons des underscores au début des dossiers importants pour qu'ils apparaissent en haut de la liste de fichiers classés par ordre alphabétique.

# Créez un Nouveau Parcours
L'**ObstacleCourseAsset** contient toutes les informations spéciales sur vos Points de Contrôle, Préfabriqués de Joueur, Affichage des Scores, PowerUps et plus encore. 
1. Dans la fenêtre **Projet**, trouvez le "StarterCourse.asset" sous "_WorldJam2/Courses" et Dupliquez-le.
2. Renommez le nouveau parcours en quelque chose de personnalisé comme "MyCourse.asset" et déplacez-le dans votre dossier "_MyProject".
3. Dans votre hiérarchie, sélectionnez le **CourseManager** sous "Udon/CourseManager".
4. Glissez-déposez le nouvel Asset de Parcours que vous venez de créer sur le champ "Asset" du script **Obstacle Course Data** sur l'objet CourseManager.

![build-from-demo-parts-8a69d28-drop-course-asset.png](/img/worlds/build-from-demo-parts-8a69d28-drop-course-asset.png)

Maintenant, toutes vos modifications seront enregistrées sur votre parcours personnalisé au lieu du parcours de départ.

# Ajouter des Pièces de Parcours
Vous pouvez trouver toutes les Pièces de Parcours disponibles dans le projet sous "Assets/_WorldJam2/Prefabs/Course Pieces".
![build-from-demo-parts-ebf489c-all-course-pieces.png](/img/worlds/build-from-demo-parts-ebf489c-all-course-pieces.png)

1. Pour ajouter de nouvelles pièces à votre parcours, glissez-déposez-les simplement dans la vue scène. Vous pouvez maintenir CTRL en les faisant glisser pour les aligner sur une grille.
2. Si vous utilisez Udon sur l'une de vos pièces, assurez-vous de les Désassembler du statut de préfabriqué pour en faire de simples Objets de Jeu. C'est aussi une bonne idée au cas où vous voudriez charger une mise à jour de ce projet sans écraser vos pièces existantes.

:::note[Alignement sur la Grille]

Unity a de nombreux réglages pour aligner les éléments sur une grille - consultez le manuel ici : [Alignement sur la Grille](https://docs.unity3d.com/2019.4/Documentation/Manual/GridSnapping.html)
:::
# Ajouter des Points de Contrôle
Votre Porte de Départ, Points de Contrôle et Porte d'Arrivée sont mieux ajoutés via la fenêtre d'utilitaires spéciale que nous avons créée pour ce jam.

1. Ouvrez la **Fenêtre d'Utilitaires Obstacle Jam** depuis votre barre de menu sous "⏵Obstacle Jam Utilities / Open Window"
![build-from-demo-parts-df0b76f-open-utilities-window.png](/img/worlds/build-from-demo-parts-df0b76f-open-utilities-window.png)

2. Regardez les préfabriqués :

![build-from-demo-parts-22a6f4e-checkpoint-prefabs.png](/img/worlds/build-from-demo-parts-22a6f4e-checkpoint-prefabs.png)

Ce sont les trois seuls préfabriqués dont nous avons besoin pour faire un parcours fonctionnel - une Porte de Départ, un Point de Contrôle et une Porte de Fin.

3. La fenêtre d'utilitaires rend très facile l'ajout de nouveaux Points de Contrôle. Sélectionnez un préfabriqué de la liste "Checkpoint Prefabs" et déplacez votre curseur vers votre Vue Scène. Vous verrez un aperçu du préfabriqué sélectionné, il essaiera de se placer intelligemment sur la surface que vous pointez - remarquez comment la porte s'accroche au côté du bloc dans le GIF ci-dessous jusqu'à ce que je pointe vers le haut.
4. Une fois que vous êtes satisfait du placement, appuyez sur la barre d'espace pour réellement ajouter le préfabriqué et le connecter à votre scène. 
![build-from-demo-parts-4200ff4-place-gates.gif](/img/worlds/build-from-demo-parts-4200ff4-place-gates.gif)

5. Lorsque vous ajoutez un préfabriqué de Point de Contrôle de cette manière, il est automatiquement ajouté à votre liste "Checkpoints In Scene". Ouvrez cette liste pour voir le nouveau point de contrôle inclus :

![build-from-demo-parts-84c73fe-checkpoints-in-scene.png](/img/worlds/build-from-demo-parts-84c73fe-checkpoints-in-scene.png)

Sélectionnez l'un de ces points de contrôle et la Vue Scène se déplacera pour se concentrer dessus. Vous pouvez également le voir sélectionné dans la hiérarchie. Si vous appuyez sur le triangle à côté de ce nouveau "Checkpoint 1" objet dans votre hiérarchie, vous pouvez voir un UdonProgram dessus. Sélectionnez ce UdonProgram et vous pouvez voir que son 'index' a été automatiquement défini sur 1.

![build-from-demo-parts-feaf465-checkpoint-program.png](/img/worlds/build-from-demo-parts-feaf465-checkpoint-program.png)

6. Continuez à ajouter des points

 de contrôle autour de votre parcours jusqu'à ce que vous en ayez assez pour commencer. Si vous devez réorganiser l'ordre, vous pouvez utiliser les flèches haut et bas dans la liste "Checkpoints in Scene" pour changer l'ordre dans lequel les joueurs doivent passer par vos portes. Lorsque vous changez l'ordre de cette manière, l'index du Point de Contrôle est changé pour correspondre à son ordre réel, et son nom est changé pour correspondre à son index.

# Tester les Points de Contrôle
À ce stade, vous avez étendu ou modifié le parcours, et ajouté quelques points de contrôle - il est temps de tester ! Ouvrez le Panneau de Contrôle SDK VRChat, connectez-vous à votre compte et choisissez "Build & Test" pour tester votre parcours !
:::note[Build and Test]

Si vous rencontrez des problèmes pour lancer votre monde ou si vous souhaitez simplement en savoir plus sur les tests locaux, consultez les documents [Build and Test](/worlds/udon/using-build-test).
:::
# Ajouter des PowerUps
Ajoutons quelques PowerUps pour rendre les choses plus intéressantes.

1. Dans la Fenêtre Utilitaire, ouvrez la section "Power Ups". Elle est très similaire à la section Checkpoints, avec différents paramètres pour ceux que vous avez déjà placés.

![build-from-demo-parts-9c8911e-power-ups-section.png](/img/worlds/build-from-demo-parts-9c8911e-power-ups-section.png)

2. Sélectionnez l'un des Préfabriqués PowerUp, puis placez-le dans votre scène en pointant votre souris sur une surface et en appuyant sur la barre d'espace, tout comme vous l'avez fait pour les Points de Contrôle.
3. Après avoir placé un PowerUp, l'outil **Transform** est sélectionné pour que vous puissiez affiner le placement de votre objet.
4. Votre nouveau PowerUp apparaît dans la section "PowerUps In Scene". Vous pouvez utiliser les champs à droite du nom du PowerUp pour changer l'effet qu'il a sur vos joueurs. Vous pouvez utiliser des nombres négatifs pour _réduire_ la Vitesse et le Saut d'un joueur, mais une durée négative n'aura aucun effet.
5. Sélectionnez un PowerUp pour vous concentrer automatiquement dessus dans la Vue Scène et le sélectionner dans la hiérarchie. Si vous souhaitez en supprimer un, vous pouvez le supprimer de votre scène et appuyer sur 'Rafraîchir' en bas de la Fenêtre Utilitaire pour mettre à jour la liste.

Vous pouvez également changer la **Vitesse de Mouvement** et l'**Impulsion de Saut** par défaut dans cette section. Assurez-vous de **NE PAS** mettre un programme **VRCWorldSettings** dans votre monde, sinon il entrera en conflit avec ces paramètres.

La Vitesse de Mouvement définit les vitesses de **Marche**, **Course** et **Déplacement Latéral** pour qu'elles soient toutes les mêmes.

# Tester les PowerUps

**Build & Test** à nouveau votre scène pour essayer vos nouveaux PowerUps !

# Ajouter des Dangers

1. Trouvez les préfabriqués de danger dans "Assets/_WorldJam2/Prefabs/Hazards"
![build-from-demo-parts-5c1a72c-hazards.png](/img/worlds/build-from-demo-parts-5c1a72c-hazards.png)

2. Ceux-ci n'utilisent pas nos outils spéciaux car ils n'ont pas besoin de configuration spéciale. Glissez-déposez-les simplement dans votre scène et affinez leur placement.

3. Après avoir placé un danger, faites un clic droit sur l'objet GameObject dans votre hiérarchie et choisissez "Décompresser Complètement le Préfabriqué". Cela garantira que les mises à jour de votre projet n'écraseront pas les dangers que vous avez déjà créés, et évitera certains problèmes connus avec Udon et les Préfabriqués.
![build-from-demo-parts-9d80caf-unpack-prefab.png](/img/worlds/build-from-demo-parts-9d80caf-unpack-prefab.png)

4. Une fois que vous avez placé vos dangers, appuyez sur le bouton "Rafraîchir" en bas de la fenêtre Utilitaire. Cela injectera certaines références dans vos dangers pour qu'ils puissent correctement réapparaître vos utilisateurs lorsqu'ils touchent le danger.

:::danger[SÉRIEUSEMENT - DÉCOMPRESSER CE PRÉFABRIQUÉ !]

:::

## Dangers Modulaires
Les dangers que nous avons inclus sont modulaires, vous pouvez donc facilement modifier leur apparence et leur difficulté. Chaque danger mobile est composé d'un collisionneur réglé sur "Déclencheur" attaché à un objet de jeu animé. Vous pouvez ajouter différents maillages et emplacements de déclencheurs pour un tout nouveau concept de danger en utilisant les différentes pièces de parcours que nous avons incluses ou en combinant d'autres packs d'actifs.
![build-from-demo-parts-26e93e5-uoc_hazard_pic1.png](/img/worlds/build-from-demo-parts-26e93e5-uoc_hazard_pic1.png)

Les quatre types de dangers mobiles inclus vous donnent un point de départ pour des dangers horizontaux, verticaux, tournants et balançants. Vous pouvez changer la vitesse de chaque type en utilisant la fenêtre de l'Animateur.
![build-from-demo-parts-9b460a2-uoc_hazard_pic2.png](/img/worlds/build-from-demo-parts-9b460a2-uoc_hazard_pic2.png)

# Vérifier les Dangers

C'est l'heure d'un autre **Build & Test !**

# Définir le Nombre de Joueurs
Il est judicieux de définir le **Nombre de Joueurs** dans votre monde de Parcours d'Obstacle à deux fois plus élevé que la **Capacité de Joueurs** dans votre monde. Changez simplement le nombre dans ce champ dans votre Fenêtre Utilitaire, et le **Bassin d'Objets** qui gère les **Objets Joueurs** se remplira automatiquement avec ce nombre de joueurs, et configurera tous ces joueurs avec les variables nécessaires.
![build-from-demo-parts-574bf2e-number-of-players.png](/img/worlds/build-from-demo-parts-574bf2e-number-of-players.png)

# Construire & Publier

Une fois que vous êtes prêt à inviter vos amis à tester votre monde, vous pouvez le **Construire & Publier** pour le rendre disponible sur VRChat. Vous définirez le nom de votre monde, prendrez une photo à partager, et vous pourrez le Soumettre aux Community Labs une fois que vous serez prêt à le montrer à plus de personnes !
:::note[Publication & Niveaux de Confiance]

Vous devez passer un certain temps sur VRChat avant de pouvoir publier des mondes. En savoir plus ici : [FAQ](https://docs.vrchat.com/docs/frequently-asked-questions#why-cant-i-upload-content-yet)
:::
Si vous souhaitez explorer plus d'options pour Personnaliser votre Parcours d'Obstacle, vous pouvez lire la suite sur [Construire à Partir de Pièces Personnalisées](/worlds/examples/obstacle-course/build-from-custom-parts)