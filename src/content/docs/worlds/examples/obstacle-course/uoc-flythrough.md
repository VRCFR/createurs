---
title: "Parcours d'Obstacles : Vue Aérienne"
---
Nous avons inclus un système Cinemachine pour générer facilement une vidéo vue aérienne de votre parcours !

# Configuration de Base
* Glissez et déposez le préfabriqué **Flythrough** depuis **Assets/_WorldJam2/_SubSystems/Flythrough** dans votre scène.
* Appuyez sur "Rafraîchir" dans la fenêtre Utilitaire des Obstacles. Cela générera un chemin basé sur tous les Points de Contrôle dans votre scène !
* Sélectionnez l'objet **FlythroughPrefab/RecordCamPath** dans votre hiérarchie pour voir le chemin qui a été créé.
![uoc-flythrough-2114971-flythrough-path.png](/img/worlds/uoc-flythrough-2114971-flythrough-path.png)

* Appuyez sur 'Lecture' dans la Vue de Jeu pour voir votre vue aérienne ! Quittez le Mode Lecture une fois que vous avez une idée de son apparence.

# Modification du Chemin

Par défaut, le chemin sera généré 0.5 unités au-dessus de l'origine de chaque point de contrôle. Si c'est trop haut ou trop bas pour votre scène en particulier, vous pouvez modifier le "Record Path Y Offset" dans la section **Enregistrement** de la fenêtre VRC Obstacle pour changer la hauteur de chaque point de contrôle en même temps. Vous pouvez cliquer et glisser à gauche et à droite sur l'étiquette pour facilement trouver le bon endroit.

Si vous souhaitez ajouter / supprimer / repositionner les points de passage dans le chemin, désactivez 'Auto Update Checkpoints' dans la section Enregistrement, puis sélectionnez le **RecordCamPath** dans la hiérarchie. Ici, vous pouvez changer les numéros directement, ou appuyer sur le numéro du point de passage sur le côté gauche de l'inspecteur pour sélectionner le point de passage dans la vue scène et le déplacer à l'aide de l'outil de transformation standard.

Vous pouvez changer la vitesse de la vue aérienne en sélectionnant l'objet *RecordCamTarget* dans la hiérarchie et en modifiant le paramètre _Speed_ sur le composant **Cinemachine Dolly Cart*. Le réglage par défaut utilise des Unités de Position Normalisées avec une Vitesse de .03 pour parcourir le cours en environ 30 secondes.
![uoc-flythrough-5f34a79-waypoints.png](/img/worlds/uoc-flythrough-5f34a79-waypoints.png)

# Enregistrer la Sortie
Vous pouvez utiliser un enregistreur d'écran pour enregistrer directement votre Vue de Jeu dans l'Éditeur, ou utiliser le Paquet Enregistreur Unity pour générer une sortie de meilleure qualité. Vous pouvez l'ajouter depuis le Gestionnaire de Paquets. Il a été testé et fonctionne avec cette configuration. Si vous voulez des instructions complètes sur l'utilisation de l'Enregistreur, vous pouvez trouver le manuel officiel Unity ici : [Manuel de l'Utilisateur Unity Recorder 1.0.](https://unitytech.github.io/unity-recorder/manual/index.html) et un tutoriel ici : [Travailler avec Unity Recorder](https://learn.unity.com/tutorial/working-with-unity-recorder).

# Nettoyage
Assurez-vous de retirer l'enregistreur de votre scène avant de publier ! Si vous avez personnalisé un chemin, vous pouvez faire une copie du préfabriqué avec votre nouveau chemin pour l'utiliser à nouveau plus tard.

# Bonus
Vous pourriez intégrer cette caméra vue aérienne avec le système Cinemachine existant dans la scène (qui rend sur la Minimap et les jumbotrons en jeu), ou créer un système séparé pour un enregistrement de haute qualité en jeu !