---
title: "Débogage des dynamiques de l'avatar"
description: "Apprenez comment déboguer les problèmes des dynamiques de votre avatar"
---

Comme Avatar Dynamics est un système complexe, il est facile de faire des erreurs lors de la création de votre avatar. Pour vous aider à tester et déboguer les problèmes, nous avons mis à disposition des utilisateurs quelques outils pour faciliter le processus.

### Débogage en jeu
<iframe src='https://gfycat.com/ifr/LiveWhimsicalGuineafowl' frameborder='0' scrolling='no' allowfullscreen width='640' height='404'></iframe>

En utilisant le menu d'action, vous pouvez maintenant utiliser l'option Avatar Overlay pour afficher des représentations visuelles à la fois des [PhysBones](/avatars/avatar-dynamics/physbones) et des [Contacts](/avatars/avatar-dynamics/contacts) en direct dans le jeu. Ces outils sont utiles pour voir exactement ce qui se passe, ou si les objets ont été configurés correctement.

### Débogage dans l'éditeur
Les [PhysBones](/avatars/avatar-dynamics/physbones) et les [Contacts](/avatars/avatar-dynamics/contacts) fonctionnent dans l'éditeur comme ils le feraient dans le client. En entrant en mode Lecture, vous pouvez simuler ces systèmes et voir comment votre avatar réagira sans avoir besoin de télécharger votre avatar.

Tant qu'un contrôleur d'animation a été ajouté au composant Animator de votre avatar, les paramètres seront mis à jour comme dans le jeu. N'oubliez pas d'ajouter le contrôleur d'animation avant d'entrer en mode Lecture !

De plus, même si aucun contrôleur d'animation n'est configuré, vous pouvez toujours examiner chaque composant et voir les valeurs qu'ils donneraient pour chaque paramètre.