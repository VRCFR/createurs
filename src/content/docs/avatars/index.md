---
title: "Avatars"
description: "Apprenez-en plus sur le SDK Avatars 3.0 de VRChat"
---

VRChat vous permet de créer et de télécharger des avatars personnalisés !

# Création d'Avatars

Pour commencer, consultez [Créer votre premier avatar](/avatars/creating-your-first-avatar).

Il y a toute une catégorie 'Avatars' dans la barre latérale à explorer. Voici quelques-unes des pages les plus impactantes et importantes :

- [Exigences de Rig](/avatars/rig-requirements) explique comment configurer la hiérarchie de votre modèle 3D personnalisé pour VRChat.
- [Système de Classement de Performance des Avatars](/avatars/avatar-performance-ranking-system) explique comment certains avatars obtiennent une performance 'Excellente', et d'autres 'Très Pauvre'.
- [Conseils d'Optimisation d'Avatar](/avatars/avatar-optimizing-tips) - Maintenant que vous savez _pourquoi_, consultez cette page pour apprendre comment récupérer tous vos frames.
- Continuez à lire cette page pour en savoir plus sur les concepts importants du SDK Avatars 3.0.

## Qu'est-ce que Avatars 3.0 ?

**Avatars 3.0** est notre nom pour toutes les fonctionnalités disponibles pour les avatars dans VRChat. Les fonctionnalités AV3 sont axées sur l'amélioration de l'expression, de la performance et des capacités des avatars dans VRChat.

Avatars 3.0 est fortement intégré avec le [Menu d'Action](https://docs.vrchat.com/docs/action-menu) pour contrôler et interagir avec l'avatar que vous portez. Il est probablement préférable que vous essayiez le Menu d'Action avant de construire un avatar AV3 !

## Prérequis

- [Installez et configurez le SDK Avatars de VRChat](/sdk)
- [Créez votre premier avatar](/avatars/creating-your-first-avatar)

## Comprendre les Concepts

Pour comprendre et utiliser Avatars 3.0, vous devez connaître quelques concepts. Ces concepts vous aideront à comprendre la construction des avatars, comment les assembler au mieux, et l'utilisation prévue des différents systèmes.

### Systèmes Unity

Ce document est écrit en supposant que vous en savez un peu sur les [Animateurs Unity](https://docs.unity3d.com/2019.4/Documentation/Manual/class-AnimatorController.html). En particulier, vous devriez vous assurer d'avoir une connaissance de base de :

- Animateurs et animations
- Couches d'animateur, poids des couches et fusion
- États et transitions
- Paramètres de l'animateur
- Comportements d'état
- Masques d'avatar

Il peut également être utile de connaître des choses comme :

- Temps de sortie de l'état
- Temps de Boucle pour les animations
- (Avancé) Synchronisation temporelle entre les couches
- (Avancé) Arbres de fusion

### Bases

Avec Avatars 3.0, vous pouvez créer un avatar basique avec mouvement des yeux simulé et visèmes très rapidement.

1. Importez votre avatar, configurez-le comme humanoïde. Configurez vos matériaux, etc.
2. Ajoutez le composant Descriptor d'Avatar.
3. Définissez les os des yeux, si vous voulez un mouvement des yeux simulé.
4. Définissez le type de visème, si vous voulez des visèmes. Assignez l'os de la mâchoire dans l'Écran de Configuration de Rigging, ou définissez vos visèmes par blendshapes. Comme pour Avatar 2.0.
5. Réglez votre point de vue.
6. Construisez et téléchargez !

Si vous créez un avatar non-humanoïde, veuillez lire la section Avatars Génériques ci-dessous.

Vous avez terminé ! Cela créera un avatar basique avec des gestes et actions par défaut. Il y a des choses intégrées dont vous pouvez profiter, donc même si quelqu'un ajoute un avatar avec des blendshapes/os nommés d'une certaine manière, vous obtiendrez quelques fonctionnalités basiques d'Avatar 3.0.

Cependant, même avec ces systèmes de base améliorés, il y a de nouvelles fonctionnalités.

### Test d'Avatar Local

Vous avez toujours voulu itérer et tester un avatar sans le télécharger ? Eh bien, avec Avatars 3.0, maintenant vous le pouvez !

Dans l'onglet "Builder" du panneau de contrôle SDK de VRChat, vous pouvez maintenant sélectionner "Build & Test" dans la section "Offline Testing". Lorsque vous cliquez dessus, votre avatar sera construit, puis copié dans un dossier.

Lorsque vous lancez VRChat, vous pourrez accéder à cet avatar localement en regardant dans la section "Autre" du menu Avatar ! Seul vous pourrez le voir, mais vous pouvez apporter des modifications à votre avatar, cliquer à nouveau sur "Build & Test", et après une courte construction, votre avatar sera mis à jour. Sélectionnez simplement à nouveau l'avatar dans votre menu et cliquez sur "Changer" à nouveau, et vous passerez à l'avatar de test local.

Cet avatar est _visible uniquement par vous_ ! Pour les autres, vous aurez l'air de porter le dernier avatar que vous portiez avant de passer à l'avatar de test local. Pour nos testeurs AV3, cela a rendu l'itération BEAUCOUP plus rapide. Nous espérons que vous l'aimerez !

Pour supprimer l'avatar de test local copié, allez dans l'onglet "Content Manager" du panneau de contrôle SDK de VRChat. Vous verrez votre avatar dans la section "Test Avatars" en bas. Cliquez sur "Delete" et il disparaîtra de la section "Autre" du menu Avatar lorsque vous le rouvrirez.

### Mouvement des Yeux Simulé

Le mouvement simulé des yeux est lorsque vos yeux se déplacent, regardant les choses autour de vous. Ce n'est pas un _suivi des yeux_ à proprement parler, mais c'est une assez bonne manière de rendre votre avatar plus "vivant".

Vous pouvez prévisualiser votre configuration dans l'éditeur et ajuster l'apparence des yeux de votre avatar dans une combinaison d'états, qui sont utilisés pour déterminer comment vos os des yeux sont configurés.

Le clignement peut être géré via des blendshapes ou des os. Les blendshapes sont la méthode habituelle, mais nous avons inclus les os également pour permettre plus de configurations.

Les blendshapes de clignement sont définis par trois blendshapes, décrits ci-dessous :

- Clignement - Clignement des deux yeux
- Regard vers le Haut - Blendshape utilisé lorsque vous regardez vers le haut -- utilisez ceci pour ajuster la position des yeux/iris/paupières/sourcils
- Regard vers le Bas - Blendshape utilisé lorsque vous regardez vers le bas, utilisez-le de manière similaire à LookUp

Vous pouvez régler ces blendshapes sur `-none-` si vous ne souhaitez pas les utiliser.

De plus, vous remarquerez deux curseurs -- l'un va de Calme à Excité, et l'autre va de Timide à Confiant. Calme / Excité affecte la fréquence de votre clignement. Timide / Confiant affecte la fréquence à laquelle vous regardez les autres joueurs, et combien de temps votre regard reste sur le visage d'autres joueurs avant de regarder ailleurs.

Vous en apprendrez plus à ce sujet lorsque nous parlerons des comportements d'état, mais vous pouvez configurer des états dans votre animateur pour **désactiver les animations des yeux** lorsque vous atteignez cet état. Vous pouvez le configurer de telle manière que vous n'ayez pas à vous soucier que vos blendshapes soient surconduits parce que votre humeur "heureuse" ferme vos yeux, et votre clignement est toujours en cours.

### Visèmes Basés sur Blendshape / Os

Si vous voulez juste rester avec le standard du bone de mâchoire ou des visèmes basés sur blendshape, nous vous avons couvert. Les deux sont toujours présents et fonctionnent très bien.

De plus, vous pouvez maintenant configurer l'angle du bone de visème de mâchoire pour une personnalisation supplémentaire !

Cependant, dans Avatars 3.0, vous pouvez également accéder à un paramètre d'animateur qui indique quel visème devrait être actuellement joué ! Cela signifie que si vous pouvez l'animer, **vous pouvez l'utiliser dans un visème.** Plus de tricherie pour les bouches 2D, robots, quoi que ce soit -- vous pouvez juste animer ce que vous voulez pour vos visèmes.

Le paramètre `Viseme` de l'animateur est mis à jour dans tous les modes de visème.

### Animations Proxy

Vous remarquerez probablement que le SDK inclut un tas d'animations nommées `proxy_animationName`. Ces animations sont des "placeholders" pour une variété d'animations par défaut de VRChat. Si vous utilisez une animation qui commence par `proxy_`, VRChat tentera de la remplacer par une animation intégrée. Cela peut être fait dans n'importe quelle couche jouable.

Bien que nous ne remplacions pas une animation avec un préfixe `proxy_` si le suffixe ne correspond pas à l'une de nos animations intégrées, il est probablement préférable d'éviter de nommer vos animations avec le préfixe `proxy_`.

### Utiliser Auto Footstep

C'est une option dans le descripteur d'avatar AV3. Elle est activée par défaut.

**"Utiliser Auto Footstep"** s'applique uniquement au suivi à 3 points ou 4 points. La désactiver signifie que vous désactivez l'animation de la partie inférieure du corps procédurale pour le mouvement à l'échelle de la pièce. Cette animation procédurale est celle qui se joue lorsque vous vous déplacez dans l'espace de la pièce tout en étant en suivi à 3 ou 4 points.

Laisser Auto Footsteps activé (qui est l'état par défaut) vous permettra toujours d'activer/désactiver le suivi via le comportement d'état de Contrôle de Suivi.

Si Auto Footsteps est désactivé, activer/désactiver le suivi de vos jambes et hanches ne fera rien, et vous comptez sur vos animations pour conduire votre partie inférieure du corps à tout moment.

### Forcer les Animations de Locomotion

C'est une option dans le descripteur d'avatar AV3. Elle est activée par défaut.

**"Forcer les Animations de Locomotion"** est activé par défaut. Il s'applique uniquement au suivi à 6 points (Suivi Complet du Corps). Lorsque "Animations de Locomotion" est activé, se déplacer en FBT (c'est-à-dire, bouger vos joysticks) jouera une animation de marche/course déterminée par votre couche de base jouable.

Lorsque "Animations de Locomotion" est désactivé, se déplacer en FBT NE jouera PAS l'animation de marche/course. Cela est utile si vous souhaitez "mimer" votre marche avec votre mouvement de suivi complet du corps. **Si vous désactivez "Animations de Locomotion", n'utilisez pas les couches de base et additives par défaut.** On s'attend à ce que vous fassiez les vôtres !

### Écriture des Valeurs par Défaut dans les États

[Écrire les Valeurs par Défaut](https://docs.unity3d.com/2019.4/Documentation/Manual/class-State.html) est une option disponible pour les états dans les Animators sur Unity.

L'option "Écrire les Valeurs par Défaut" activée écrira les valeurs par défaut de **toutes les propriétés animées** (_sur une base globale du Contrôleur !_) qui ne sont pas animées dans cet état spécifique. Cela peut provoquer des interactions très étranges si vous ne prévoyez pas cela.

Cette fonctionnalité a été ajoutée par Unity lors de la migration vers la version 5.0. Cela a été fait pour que les assets et projets préexistants qui dépendaient de ce comportement d'écriture de toutes les propriétés par défaut ne se brisent pas.

Normalement, lorsque vous travaillez avec d'autres développeurs de jeux sur un projet, vous vous mettez d'accord sur une norme. Dans VRChat, nous sommes _tous_ des développeurs de jeux, donc nous devons établir la norme ici.

VRChat n'utilise pas "Écrire les Valeurs par Défaut" dans nos animateurs intégrés et exemples. Cela signifie que seules les propriétés réelles qui sont dans les animations sont jouées par n'importe quel nœud d'animation. Nous recommandons que les créateurs suivent également ce flux de travail, car il est plus facile de garder une trace des propriétés qui seront animées à travers n'importe quelle couche spécifique, et cela correspond également à l'utilisation prévue de Unity dans son ensemble.

La valeur "Écrire les Valeurs par Défaut" est par défaut activée lorsque vous créez un nouveau nœud, donc les créateurs doivent être conscients qu'ils devront désactiver cette valeur. Si vous souhaitez utiliser Écrire les Valeurs par Défaut, vous devrez garder une trace de toutes les propriétés possibles qui pourraient être écrites par un nœud avec cette option activée.

**Nous recommandons de garder Écrire les Valeurs par Défaut désactivé et d'animer explicitement tout paramètre qui doit être défini par l'animation.** Notez que cela peut nécessiter d'ajouter des animations de "réinitialisation" ou d'ajouter des propriétés à l'animation pour "initialiser" les transformations dans une orientation spécifique.

Cela dit, si vous vous engagez dans des cas d'utilisation et des configurations plus avancés, il peut être avantageux d'utiliser Écrire les Valeurs par Défaut activé.

### Avatars Génériques

Avatar 3.0 prend également en charge les avatars génériques non humanoïdes. Si vous souhaitez accéder à des fonctionnalités similaires à celles auxquelles les humanoïdes AV3 ont accès, vous devrez suivre quelques directives :

- Importez votre modèle générique en tant que FBX et assignez-lui le type de rig 'Générique', afin qu'un objet "avatar" soit créé.
- Assurez-vous que cet objet avatar est référencé dans le champ avatar du composant Animator à la racine de votre avatar (le même objet de jeu que le descripteur d'avatar).
- Laissez le contrôleur d'animation vide (il sera supprimé à l'exécution) et utilisez les Couches Jouables pour définir vos propres contrôleurs d'animation. Les avatars génériques ont 3 couches Jouables : Base, Action et FX, car les autres couches sont spécifiques aux humanoïdes.

Si vous ne suivez pas ces étapes, votre avatar générique n'aura pas accès à de nombreuses fonctionnalités d'Avatar 3.0 telles que les Paramètres d'Expression et les Comportements d'État. Si cela vous convient, vous pouvez ajouter un contrôleur d'animation directement dans l'animateur racine, en laissant le champ avatar vide. Cette méthode pourrait être utile si vous construisez juste une hiérarchie d'objets statiques dans Unity et souhaitez une animation simple.
