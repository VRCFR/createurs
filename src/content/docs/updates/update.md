---
title: "Consulter les mises à jour"
description: "Consulter les mises à jours du SDK"
sidebar:
    label: "Mises à jours"
    badge: Nouveau
---

**Mise à jour vers la version Unity 2022.3.22f1 !**
Cette version apporte des corrections et pourrait améliorer légèrement les performances. Comme d'habitude, nous recommandons de NE PAS mettre à jour vos mondes et projets pour le moment. Nous vous informerons lorsque ce sera le bon moment pour le faire !

### Les nouveautés importantes

**Les Emoji Animés**
Oui, enfin. Et non, ce n'est pas une blague du premier avril tardive. Les abonnés à VRC+ peuvent maintenant créer des emojis animés de deux manières :

1. **Dans VRChat avec la caméra !**
   - Réglez le mode de la caméra sur "Emoji", puis choisissez entre 4 ou 16 images pour commencer à créer des emojis animés ! (plus de détails sur les mises à jour de la caméra ci-dessous)

2. **Sur le site web, sous Galerie > Emoji.**
   - Vous pouvez télécharger jusqu'à 64 images ou une feuille de sprites !

Amusez-vous avec la nouvelle sélection de style de boucle et l'option de bouclage "Ping Pong" pour les emojis animés.

**Modifications de la caméra avec l'ajout des emojis animés :**

- Les boutons Photo et Emoji sont maintenant extensibles et ont de nouvelles fonctionnalités.
- Tous les cas utilisant la caméra du Menu rapide utilisent maintenant la Caméra utilisateur, par exemple :
  - Prendre une photo pour l'attacher à un message.
  - Prendre une nouvelle photo pour la galerie.
  - Prendre une nouvelle photo emoji.
- Le bouton Temporisé (5s) permet maintenant à l'utilisateur d'arrêter le compte à rebours.
- Lorsque l'utilisateur utilise le bouton Temporisé (5s) en mode Animé, la caméra compte à rebours de manière répétée pour prendre chaque photo jusqu'à ce que la feuille de texture animée soit remplie (4 ou 16 photos, selon le mode Emoji Animé sélectionné).

Pour les utilisateurs de Quest, les couleurs sur divers casques Meta ont été ajustées pour correspondre à nos autres plateformes.

### Les changements intermédiaires

**Panneau Instances de Groupes :**

- Les deux sections de cellules ont été (re)nommées en Emplacements Amis et Emplacements Membres du Groupe.
- Un peu plus d'espace a été ajouté en bas du panneau Instances de Groupes.
- Correction d'un problème où un double-clic sur un groupe dans le panneau latéral provoquait la rupture du panneau Instances de Groupes.
- Correction d'un problème où des amis quittant une Instance de Groupe provoquaient la rupture du panneau Instances de Groupes.
- Correction d'un problème sur le panneau Instances de Groupes qui signalait des amis occupant des instances alors qu'ils n'étaient pas présents (effrayant...).
- Restauration du symbole # pour les numéros d'instance dans l'interface utilisateur. Les enthousiastes de l'octothorpe se réjouissent.
- Clarification de certains termes autour des paramètres de masquage de miroir personnel, préférant le mot Afficher plutôt que Masquer.
- Suppression de l'ancienne boîte d'appel jaune VRChat Plus du Menu Principal.
- Suppression de l'ancien bouton d'interaction d'avatar du Menu Principal.

### Améliorations mobiles Android

**Ajout de la Vue Focus pour mobile, qui vous permet de tapoter pour remplir la vue de la caméra avec des toiles d'espace mondial pour une interaction plus facile.**

- La fonction est active uniquement à une distance d'activation et de désactivation basée sur la taille de la toile, réglée entre 0,6-2m.
- La distance de désactivation est entre 3-6m, selon la taille de la toile.
- Un indicateur de Vue Focus est affiché sur votre plaque nominative pendant qu'elle est active, similaire à des cache-oreilles.
- Votre avatar restera en place pendant que vous êtes en Vue Focus.
- Vous pouvez zoomer et panoramiquer pendant que vous êtes en Vue Focus et le panoramique s'arrêtera aux limites de la toile.
- Prend en charge les orientations paysage et portrait !
- Vous pourrez toujours tapoter pour ouvrir les entrées du clavier.
- Le support

 de la Vue Focus peut être activé/désactivé dans les contrôles du Menu Principal.
- Vous ne pouvez pas entrer en Vue Focus en utilisant une méthode d'entrée autre que le toucher, et la Vue Focus se terminera si la méthode d'entrée change loin du toucher.
- Les avatars locaux et distants ne seront pas rendus.
- Vous ne pourrez pas panoramiquer/zoomer lors de l'interaction avec un objet sélectionnable/défilement.

**Et pour les créateurs cherchant à ajouter la Vue Focus à leurs mondes mobiles :**

- Vous pouvez activer AllowFocusView sur le composant VRC_UiShape pour autoriser/refuser la vue focus sur des toiles spécifiques.
- Les créateurs peuvent désactiver la Vue Focus dans leurs mondes entièrement en utilisant vrchat.com/home, similaire à l'échelle des avatars.

[**Consultez la Mise à jour complète ici !**](https://docs.vrchat.com/docs/latest-release)
