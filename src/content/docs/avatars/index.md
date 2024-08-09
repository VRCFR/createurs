---
title: "Avatars"
description: "Apprenez-en plus sur le SDK Avatars 3.0 de VRChat"
---

VRChat vous permet de créer et de télécharger des avatars personnalisés ! Cette catégorie explique comment utiliser le SDK Avatars 3.0 de VRChat.

## Création d'Avatars

Pour commencer, consultez [Créer votre premier avatar](/avatars/creating-your-first-avatar).

Il y a toute une catégorie 'Avatars' dans la barre latérale à consulter. Voici quelques-unes des pages les plus impactantes et importantes :

- [Exigences de Rig](/avatars/rig-requirements) explique comment configurer la hiérarchie de votre modèle 3D personnalisé pour VRChat.
- [Système de Classement de Performance des Avatars](/avatars/avatar-performance-ranking-system) explique comment certains avatars obtiennent une performance 'Excellente' et d'autres 'Très Mauvaise'.
- [Conseils d'Optimisation des Avatars](/avatars/avatar-optimizing-tips) - Maintenant que vous savez _pourquoi_, consultez cette page pour apprendre comment récupérer tous vos frames.
- Continuez à lire cette page pour en savoir plus sur les concepts importants du SDK Avatars 3.0.

## Qu'est-ce qu'Avatars 3.0 ?

**Avatars 3.0** est notre nom pour toutes les fonctionnalités disponibles pour les avatars dans VRChat. Les fonctionnalités d'AV3 sont axées sur l'amélioration de l'expression, de la performance et des capacités des avatars dans VRChat.

Avatars 3.0 est fortement intégré avec le [Action Menu](https://docs.vrchat.com/docs/action-menu) pour contrôler et interagir avec l'avatar que vous portez. Il est probablement préférable que vous vous essayiez au Action Menu avant de créer un avatar AV3 !

## Prérequis

- [Installer et configurer le SDK Avatars VRChat](/sdk)
- [Créer votre premier avatar](/avatars/creating-your-first-avatar)

## Comprendre les Concepts

Pour comprendre et utiliser Avatars 3.0, vous devez connaître quelques concepts. Ces concepts vous aideront à comprendre la construction des avatars, la meilleure façon de les assembler, et l'utilisation prévue des différents systèmes.

### Systèmes Unity

Ce document est rédigé en supposant que vous avez quelques connaissances en [Unity Animators](https://docs.unity3d.com/2022.3/Documentation/Manual/class-AnimatorController.html). En particulier, vous devez avoir une connaissance de base des éléments suivants :

- Animators et animations
- Animator layers, layer weights, et blending
- States et transitions
- Animator parameters
- State behaviors
- Avatar masks

Il peut également être utile de connaître des éléments comme :

- State exit time
- Loop Time pour les animations
- (Avancé) Time Sync entre les layers
- (Avancé) Blend trees

### Bases

Avec Avatars 3.0, vous pouvez créer un avatar de base avec simulated eye movement et visemes très rapidement.

1. Importez votre avatar, riguez-le en tant qu'humanoïde. Configurez vos matériaux, etc.
2. Ajoutez le composant Avatar Descriptor.
3. Définissez les eye bones, si vous souhaitez un simulated eye movement.
4. Définissez le viseme type, si vous souhaitez des visemes. Assignez l'os de la mâchoire dans l'écran de configuration du Rigging, ou définissez vos visemes par blendshapes. Comme pour Avatar 2.0.
5. Définissez votre viewpoint.
6. Construisez et téléchargez !

Si vous créez un avatar non-humanoïde, veuillez lire la section Generic Avatars ci-dessous.

C'est fait ! Cela créera un avatar de base avec des gestes et actions par défaut. Il y a des choses intégrées dont vous pouvez profiter, donc même si quelqu'un insère un avatar avec des blendshapes/bones nommés d'une certaine manière, vous bénéficierez de certaines fonctionnalités de base d'Avatar 3.0.

Cependant, même avec ces systèmes de base mis à jour, il y a de nouvelles fonctionnalités.

### Test d'Avatar Local

Vous avez toujours voulu itérer et tester un avatar sans le télécharger ? Eh bien, avec Avatars 3.0, vous pouvez maintenant !

Dans l'onglet "Builder" du panneau de contrôle VRChat SDK, vous pouvez maintenant sélectionner "Build & Test" dans la section "Offline Testing". Lorsque vous cliquez dessus, votre avatar sera construit, puis copié dans le dossier `%LocalAppdata%Low\VRChat\VRChat\Avatars`.

Lorsque vous lancez VRChat, vous pourrez accéder à cet avatar localement en cherchant dans la section "Other" du menu Avatar ! Seul vous pourrez le voir, mais vous pouvez apporter des modifications à votre avatar, cliquer sur "Build & Test" à nouveau, et après une courte construction, votre avatar sera mis à jour. Il vous suffit de re-sélectionner l'avatar dans votre menu et de cliquer sur "Change" à nouveau, et vous changerez pour le nouvel avatar de test.

Cet avatar est _uniquement_ visible par vous ! Pour les autres, vous apparaîtrez comme si vous portiez le dernier avatar que vous portiez avant de passer à l'avatar de test local. Pour nos testeurs AV3, cela a rendu l'itération beaucoup plus rapide. Nous espérons que vous l'apprécierez !

Pour supprimer l'avatar de test local copié, allez dans l'onglet "Content Manager" du panneau de contrôle VRChat SDK. Vous verrez votre avatar dans la section "Test Avatars" en bas. Cliquez sur "Delete" et il disparaîtra de la section "Other" du menu Avatar lorsque vous le rouvrirez.

### Simulated Eye Movement

Le simulated eye movement est lorsque vos yeux se déplacent autour, regardant les choses autour de vous. Ce n'est pas _eye tracking_ mais c'est une bonne façon de rendre votre avatar plus "vivant".

Vous pouvez prévisualiser votre configuration dans l'éditeur et ajuster comment les yeux de votre avatar regardent dans une combinaison d'états, qui sont utilisés pour déterminer comment vos eye bones sont configurés.

Le clignement des yeux peut être géré par des blendshapes ou des bones. Les blendshapes sont la méthode habituelle, mais nous avons également inclus des bones pour permettre plus de configurations.

Les blendshapes de clignement des yeux sont définis par trois blendshapes, décrits ci-dessous :

- Blink - Les deux yeux clignotant
- Looking Up - Blendshape utilisé lorsque vous regardez vers le haut -- utilisez ceci pour ajuster la position des yeux/iris/paupères/sourcils
- Looking Down - Blendshape utilisé lorsque vous regardez vers le bas, utilisez ceci de la même manière que LookUp

Vous pouvez définir ces blendshapes sur `-none-` si vous ne souhaitez pas les utiliser.

De plus, vous remarquerez deux curseurs -- l'un passe de Calm à Excited, et l'autre passe de Shy à Confident. Calm / Excited affecte la fréquence à laquelle vous clignez des yeux. Shy / Confident affecte la fréquence à laquelle vous regardez les autres joueurs, et combien de temps votre regard reste sur les visages des autres joueurs avant de se détourner.

Vous en apprendrez plus à ce sujet lorsque nous parlerons des state behaviors, mais vous pouvez définir des states dans votre animator pour **désactiver les eye animations** lorsque vous atteignez cet état. Vous pouvez configurer cela de manière à ne pas avoir à vous soucier de vos blendshapes étant trop stimulés parce que votre humeur "heureuse" ferme vos yeux, et que votre clignement des yeux continue à se produire.

### Visemes Basés sur Blendshapes / Bones

Si vous souhaitez simplement vous en tenir aux visemes standard basés sur le jaw-flap bone ou sur des blendshapes, nous avons ce qu'il vous faut. Les deux sont toujours présents et fonctionnent très bien.

De plus, vous pouvez maintenant configurer l'angle du jaw-flap bone viseme pour plus de personnalisation !

Cependant, dans Avatars 3.0, vous pouvez également accéder à un Animator Parameter qui indique quel viseme devrait être joué actuellement ! Cela signifie que si vous pouvez l'animer, **vous pouvez l'utiliser dans un viseme.** Plus besoin de ruses pour les bouches 2D, les robots, peu importe -- vous pouvez simplement animer ce que vous aimez pour vos visemes.

Le paramètre `Viseme` est mis à jour dans tous les modes de visemes.

### Animations Proxy

Vous remarquerez probablement que le SDK inclut un tas d'animations nommées `proxy_animationName`. Ces animations sont des "placeholders" pour une variété d'animations par défaut de VRChat. Si vous utilisez une animation qui commence par `proxy_`, VRChat essaiera de la remplacer par une animation intégrée. Cela peut se faire dans n'importe quelle playable layer.

Bien que nous ne remplaçons pas une animation avec un préfixe `proxy_` si le suffixe ne correspond pas à l'une de nos animations intégrées, il est probablement préférable d'éviter de nommer vos animations avec le préfixe `proxy_`.

### Utiliser Auto Footstep

C'est une option dans l'Avatar Descriptor AV3. Elle est activée par défaut.

**"Use Auto Footstep"** ne s'applique qu'au 3-point ou 4-point tracking. Désactiver cela signifie que vous désactivez l'animation procédurale du bas du corps pour le mouvement en room-scale. Cette animation procédurale est ce qui joue lorsque vous vous déplacez dans l'espace de la pièce en 3 ou 4-point tracking.

Laisser Auto Footsteps activé (ce qui est l'état par défaut) vous permettra toujours d'activer/désactiver le tracking via le comportement d'état Tracking Control.

Si Auto Footsteps est désactivé, activer/désactiver le tracking de vos jambes et hanches ne fera rien, et vous vous fiez à vos animations pour animer le bas de votre corps en tout temps.

### Forcer les Animations de Locomotion

C'est une option dans l'Avatar Descriptor AV3. Elle est activée par défaut.

**"Force Locomotion Animations"** est activée par défaut. Elle ne s'applique qu'au 6-point tracking (Full-Body Tracking). Lorsque "Locomotion Animations" est activé, la locomotion en FBT (c'est-à-dire, le déplacement de vos joysticks) jouera une animation de marche/course telle que déterminée par votre Base playable layer.

Lorsque "Locomotion Animations" est désactivé, la locomotion en FBT ne jouera PAS l'animation de marche/course. Cela est utile si vous souhaitez "mimer" votre marche avec votre mouvement de tracking corporel. **Si vous désactivez "Locomotion Animations", n'utilisez pas les couches Base et Additive par défaut.** Vous êtes censé créer les vôtres !

### Write Defaults sur les States

[Write Defaults](https://docs.unity3d.com/2022.3/Documentation/Manual/class-State.html) est une option disponible pour chaque state dans un Animator Controller.

Les states avec Write Defaults "Off" définiront uniquement les valeurs des propriétés animées, et ces valeurs ne changeront pas à moins d'être animées à nouveau. Cela peut rendre plus facile le suivi des propriétés animées à travers une couche spécifique.

Les states avec Write Defaults "On" définiront les valeurs par défaut pour les propriétés qui ne sont pas animées. Cela signifie que si vous animez une valeur de propriété à "1" depuis "0", la valeur reviendra à la valeur par défaut "0" en quittant le state, à moins que le state suivant continue à animer la valeur à "1".

Quel que soit l'option que vous choisissez, **nous recommandons de maintenir votre utilisation de Write Defaults cohérente sur l'ensemble de l'avatar** - en d'autres termes, ayez Write Defaults "Off" pour tous les states, ou "On" pour tous les states. Avoir à la fois des states "Off" et "On" sur un avatar est connu pour causer des valeurs de propriétés inattendues. Cela est communément appelé "Mixed Write Defaults". Le SDK vous avertira si cela est détecté.

VRChat utilise Write Defaults réglé sur "Off" dans ses animateurs intégrés et exemples.

Si vous décidez de régler Write Defaults sur "Off" :
- Write Defaults est réglé sur **On** pour les states nouvellement créés, donc vous devrez changer cette valeur pour chaque nouvel state que vous créez.
- Vous devrez peut-être ajouter des animations pour initialiser ou réinitialiser les propriétés avec des valeurs spécifiques.
- Il est recommandé que pour tous les states dans une layer, vous animiez explicitement chaque propriété affectée par cette layer.
- Chaque state doit avoir un clip d'animation ("motion" dans les options du state) qui anime au moins une propriété. Il n'est pas nécessaire que ce soit une référence valide de propriété. Les states avec un clip "None" ou entièrement vides se comporteront comme si Write Defaults était "On".

:::caution[Additive layers et direct blend trees]

La communauté créatrice d'avatars de VRChat recommande de définir Write Defaults sur "On" pour :
- Les layers qui utilisent le additive blending
- Les blend trees qui utilisent le direct blending

Vous devriez faire cela même si vous utilisez "Off" pour le reste de l'avatar. Le SDK évitera de générer des avertissements concernant les paramètres Mixed Write Defaults dans ces cas.

:::

### Generic Avatars

Avatar 3.0 prend également en charge les avatars génériques non-humanoïdes. Si vous voulez accéder à des fonctionnalités similaires à celles des Humanoïdes AV3, vous devrez suivre quelques directives :

- Importez votre modèle générique en tant que FBX et assignez-lui le type de rig 'Generic', afin qu'un objet "avatar" soit créé
- Assurez-vous que cet objet avatar est référencé dans le champ avatar du composant Animator à la racine de votre avatar (le même Game Object que le descriptor d'avatar).
- Laissez le Animator controller vide (il sera supprimé au moment de l'exécution) et utilisez les Playable Layers pour définir vos contrôleurs d'animation personnalisés. Les avatars génériques ont 3 Playable layers : Base, Action et FX, car les autres layers sont spécifiques aux Humanoïdes.

Si vous ne suivez pas ces étapes, votre generic avatar n'aura pas accès à de nombreuses fonctionnalités d'Avatar 3.0 telles que Expression Parameters et State Behaviors. Si cela vous convient, vous pouvez ajouter un Animator controller directement dans le root animator, en laissant le champ avatar vide. Cette méthode pourrait être utile si vous construisez simplement une hiérarchie d'objets statiques dans Unity et souhaitez une animation simple.
