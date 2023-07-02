---
title: "Avatars"
description: "VRChat vous permet de créer et de télécharger des avatars personnalisés !"
---

VRChat vous permet de créer et de télécharger des avatars personnalisés !

# Création d'avatars

Pour commencer, consultez [Créer votre premier avatar](/avatars/creating-your-first-avatar).

Il y a toute une catégorie 'Avatars' dans la barre latérale. Voici quelques pages plus impactantes et importantes :

- [Exigences de la structure](/avatars/rig-requirements) explique comment configurer la hiérarchie du modèle 3D personnalisé pour VRChat.
- [Système de classement de la performance des avatars](/avatars/avatar-performance-ranking-system) explique comment certains avatars obtiennent une performance « Excellente » et d'autres « Très médiocre ».
- [Conseils d'optimisation des avatars](/avatars/avatar-optimizing-tips) - Maintenant que vous savez _pourquoi_, consultez cette page pour apprendre comment récupérer tous vos frames.
- Continuez à lire cette page pour en savoir plus sur les concepts importants de l'Avatars 3.0 SDK.

## Qu'est-ce que l'Avatars 3.0 ?

**Avatars 3.0** est notre nom pour toutes les fonctionnalités disponibles pour les avatars dans VRChat. Les fonctionnalités du AV3 sont axées sur l'amélioration de l'expression, des performances et des capacités des avatars dans VRChat.

Avatars 3.0 est fortement intégré avec le [Menu d'action](https://docs.vrchat.com/docs/action-menu) pour contrôler et interagir avec l'avatar que vous portez. Il est probablement préférable de l'essayer avant de créer un avatar AV3 !

## Prérequis

- [Installer & configurer le SDK d'avatars VRChat](/sdk)
- [Créer votre premier avatar](/avatars/creating-your-first-avatar)

## Compréhension des concepts

Pour comprendre et utiliser Avatars 3.0, vous devez connaître quelques concepts. Ces concepts vous aideront à comprendre la construction des avatars, comment les assembler au mieux et l'utilisation prévue des différents systèmes.

### Systèmes Unity

Ce document est rédigé en supposant que vous connaissez un peu les [Animateurs Unity](https://docs.unity3d.com/2019.4/Documentation/Manual/class-AnimatorController.html). En particulier, vous devez vous assurer d'avoir une connaissance de base de :

- Les animateurs et les animations
- Les couches d'animation, les poids des couches et le fondu
- États et transitions
- Les paramètres animateur
- Les comportements d'état
- Les masques d'avatar

Il peut également être utile de connaître des choses comme :

- Temps de sortie de l'état
- Temps de boucle pour les animations
- (Avancé) Synchronisation du temps entre les couches
- (Avancé) Arbres de mélange

### Bases

Avec les Avatars 3.0, vous pouvez créer rapidement un avatar de base avec un mouvement des yeux simulé et des visèmes.

1. Importez votre avatar, riguez-le en personnage humain. Configurez vos matériaux, etc.
2. Ajoutez le composant descripteur d'avatar.
3. Définissez les os des yeux si vous souhaitez un mouvement des yeux simulé.
4. Définissez le type de visème si vous souhaitez des visèmes. Assignez l'os de la mâchoire dans l'écran de configuration du rigging, ou définissez vos visèmes par des blendshapes. Identique à l'Avatar 2.0.
5. Définissez votre point de vue.
6. Construisez et téléversez !

Si vous créez un avatar non-humain, veuillez lire la section Avatars génériques ci-dessous.

Vous avez terminé ! Cela créera un avatar de base avec des gestes et des actions par défaut. Il y a des fonctionnalités intégrées que vous pouvez exploiter, donc même si quelqu'un insère un avatar avec des blendshapes/os nommés d'une certaine manière, vous obtiendrez certaines fonctionnalités de base d'Avatar 3.0.

Cependant, même avec ces systèmes de base améliorés, il y a quelques nouvelles fonctionnalités.

### Test local d'avatar

Vous avez déjà voulu itérer et tester un avatar sans le téléverser ? Eh bien, avec Avatars 3.0, maintenant vous pouvez !

Dans l'onglet "Builder" du panneau de contrôle VRChat SDK, vous pouvez maintenant sélectionner "Builder & Test" dans la section "Offline Testing". Lorsque vous cliquez dessus, votre avatar sera construit, puis copié dans un dossier.

Lorsque vous lancez VRChat, vous pourrez accéder à cet avatar localement en regardant dans la section "Autres" du menu Avatar ! Vous seul pourrez le voir, mais vous pouvez apporter des modifications à votre avatar, cliquer à nouveau sur "Builder & Test", et après une courte construction, votre avatar sera mis à jour. Il vous suffit de sélectionner à nouveau l'avatar dans votre menu et de cliquer à nouveau sur "Changer", et vous passerez au nouvel avatar de test.

Cet avatar n'est visible que par vous ! Pour les testeurs AV3, cela a accéléré considérablement l'itération. Nous espérons que cela vous plaira !

Pour supprimer l'avatar de test local copié, rendez-vous dans l'onglet "Content Manager" du panneau de contrôle VRChat SDK. Vous verrez votre avatar dans la section "Avatars de test" en bas. Cliquez sur "Supprimer" et il disparaîtra de la section "Autres" du menu Avatar lorsque vous le réouvrirez.

### Mouvement des yeux simulé

Le mouvement des yeux simulé est là où vos yeux se déplacent, regardant les choses autour de vous. Ce n'est pas le suivi des yeux - nous n'avons pas de moyen pour vous permettre d'entrer des données à partir de périphériques de suivi des yeux - mais c'est un