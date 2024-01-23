---
title: "Système de Stylo Simple"
---
Le système de Stylo Simple se compose de deux programmes - un pour le Stylo, et un pour chaque Ligne qui sera dessinée.

# Comment le Stylo et les Lignes fonctionnent ensemble

### Stylo
Le stylo a des composants VRCPickup et VRCObjectSync, qui fournissent la fonctionnalité de base de prise en main et de synchronisation. Le programme lui-même utilise une synchronisation Continue puisque cela fonctionne bien avec ces composants.

### Lignes
Chaque objet de ligne a son propre LineRenderer et un programme avec une synchronisation Manuelle, car il n'a pas besoin de se mettre à jour aussi souvent que le stylo. La ligne a une variable **points** qui est un tableau de Vector3. Cette variable est le principal moyen de synchronisation des données pour les lignes pour tout le monde dans l'instance.

## Début du Dessin
Lorsqu'une personne utilise le Stylo, cela appelle **OnPickupUseDown** sur le stylo. Cela entraînera plusieurs actions dans le programme :
* Une nouvelle Ligne est récupérée du pool et sauvegardée dans une variable.
* Le joueur avec le stylo est fait Propriétaire de la ligne.
* *isDrawing* est défini sur vrai.
* La ligne est réinitialisée pour avoir deux points dont les positions sont à l'extrémité du stylo.
* Une variable est incrémentée pour suivre quelle ligne sera utilisée ensuite.

## Continuation du Dessin
À chaque image, l'événement **Update** est appelé sur le stylo, et la logique suivante est exécutée :
* Si *isDrawing* est vrai, on continue :
* Si le stylo a bougé de plus que *minMoveDistance*, on continue :
* Nous ajoutons un nouveau point au LineRenderer à la position de la *pointe du stylo*.
* Nous vérifions si nous avons mis en file d'attente suffisamment de points à envoyer en comparant currentIndex à pointsPerUpdate.
* Si nous sommes prêts à mettre à jour les données, nous appelons **OnUpdate** sur l'UdonBehaviour de la ligne cible.

Lorsque cette méthode **OnUpdate** est appelée sur la ligne, le programme récupère les positions actuelles des points dans la ligne, met à jour la variable synchronisée *points*, et appelle **RequestSerialization**, qui est la façon dont les UdonBehaviours synchronisés Manuellement disent à VRChat d'envoyer les données mises en file d'attente. Cette méthode est appelée uniquement par le propriétaire de la ligne. Tous les autres reçoivent les données, puis ont leur méthode **OnDeserialization** appelée. Lorsque cette méthode se déclenche sur une ligne, le programme de ligne lit les positions à partir du tableau *points* et les utilise pour mettre à jour les positions dans leur propre ligne.

## Fin du Dessin
Lorsque l'utilisateur lâche le bouton d'Utilisation, l'événement **OnPickupUseUp** est appelé sur le stylo. Cet événement se contente de définir *isDrawing* sur faux et appelle **OnFinish** sur l'UdonBehaviour de la ligne cible. Cela enverra la méthode **OnUpdate** une dernière fois pour s'assurer que les données **points** sont à jour pour tout le monde.