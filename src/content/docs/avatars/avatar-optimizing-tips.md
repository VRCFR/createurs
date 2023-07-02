---
title: "Conseils pour optimiser les avatars"
description: "Suivez ces astuces pour rendre votre avatar plus efficace et apprécié de tous en économisant des ressources."
---

:::caution

**Ce guide n'est pas une référence absolue pour l'optimisation des avatars !** Optimiser correctement votre avatar nécessite une connaissance approfondie de nombreux aspects. Nous ne nous attendons pas à ce que tout le monde sache tout.

Cependant, nous faisons de notre mieux pour tenir ce document à jour avec les choses les plus couramment négligées par les gens et les cibles les plus importantes à atteindre.

Si vous avez des suggestions concernant les astuces d'optimisation, veuillez utiliser le bouton **Suggérer des modifications** en haut à droite et ajouter les vôtres !
:::

Vous voulez que votre avatar soit efficace et apprécié de tous grâce à toutes les ressources que vous économisez ? Suivez ces conseils et vous devriez être bon !

Tous les chiffres et limites recommandés dans ce document sont susceptibles de changer à tout moment. Bien que certaines des descriptions fournies ci-dessous ne soient pas précises d'un point de vue technique, ce document est destiné à aider les utilisateurs novices à apprendre à optimiser leurs avatars.

Des outils créés par la communauté, tels que [Cats Blender Plugin](https://github.com/michaeldegroot/cats-blender-plugin) (licence MIT), permettent aux utilisateurs d'optimiser très facilement leurs modèles et de résoudre les problèmes courants des avatars VRChat. Nous vous recommandons vivement d'utiliser de tels outils ! Cela facilite votre travail et améliore les performances pour tous.

En passant, le panneau de contrôle de construction du SDK fournit le nombre de composants sur les avatars pour vous aider à les optimiser.

## Ne pas utiliser Dynamic Bones !
Dynamic Bones est un Asset Unity que vous pouvez acheter et qui vous permet de définir des os sur le squelette de votre avatar pour les faire bouger comme s'ils étaient suspendus. Vous pouvez également définir des forces statiques comme la gravité, ce qui permet aux cheveux de tomber de manière plus réaliste.

Dynamic Bones est obsolète et sera éventuellement supprimé. Utilisez plutôt [PhysBones](/avatars/avatar-dynamics/physbones).

VRChat convertira automatiquement les Dynamic Bones en PhysBones à l'exécution.

## Limiter l'utilisation de Cloth
Cloth est un composant Unity par défaut, qui a un coût similaire à celui de Dynamic Bones et qui est plus difficile à configurer. Limitez fortement son utilisation et ne l'appliquez pas aux maillages qui comportent plus d'environ 200 sommets.

## Réduire le nombre de maillages sur votre avatar
Il existe deux types de Mesh Renderers sur votre avatar : les Mesh Renderers statiques et les Skinned Mesh Renderers. Les Meshes statiques ne se déforment pas. Les Skinned Meshes, en revanche, sont généralement liées à des structures (os) qui indiquent au moteur comment déplacer et déformer le maillage en fonction de la position des os. Ces Skinned Meshes sont beaucoup plus coûteux, et vous ne devez en avoir qu'un seul sur votre avatar. Il y a très peu de raisons d'en avoir plus d'un, la plupart du temps, des éléments supplémentaires peuvent être intégrés dans le modèle d'origine.

De plus, chaque maillage supplémentaire sur votre avatar