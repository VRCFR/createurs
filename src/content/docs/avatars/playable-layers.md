---
title: "Playable Layers"
slug: "playable-layers"
excerpt: "Créez des animations simples ou complexes pour votre avatar VRChat"
---

Lorsque vous créez des animations pour votre avatar VRChat, vous utilisez les "Playable Layers" de VRChat. Ils vous permettent de séparer proprement certaines actions que vous souhaitez réaliser avec votre avatar dans leurs propres animations, telles que courir, sauter, faire un pouce levé, sourire, remuer la queue et faire des combinaisons de ces actions.
:::caution Connaissance de Unity Requise

Ce document est rédigé en supposant que vous connaissez un peu les [Animators Unity](https://docs.unity3d.com/2019.4/Documentation/Manual/class-AnimatorController.html).
:::

Dans le descripteur d'avatar Avatars 3.0, il y a cinq boutons intitulés:
- Base
- Additive
- Gesture
- Action
- FX

Ce sont les **Playable Layers**. Chacun d'eux utilise un Animator Unity et s'empile les uns sur les autres. En d'autres termes, vous avez cinq animateurs principaux avec lesquels jouer, et chacun d'eux peut avoir plusieurs **Animator Layers**.

Ces layers s'appliquent dans l'ordre - en d'autres termes, Base s'applique en premier, puis Additive, puis Gesture, Action, FX. Par exemple, si quelque chose en Additive anime un os (avec un poids de 1.0), puis quelque chose en Action anime ce même os (avec un poids de 1.0), l'animation de Action aura la priorité.

Nous avons des exemples de Playable Layers disponibles dans le kit de développement (SDK). Selon votre façon d'apprendre et d'itérer sur les choses, il peut être plus facile pour vous d'utiliser et d'éditer ces layers par défaut pour comprendre les choses !

Lorsque vous utilisez VRChat et que vous portez (ou regardez) un avatar Avatars 3.0, tous ces Playable Layers sont regroupés dans un Animator combiné. Cet Animator est l'animateur principal de votre avatar, et vous pouvez contrôler n'importe quelle partie de celui-ci. **Cela signifie qu'il n'est pas nécessaire d'ajouter d'autres animateurs à votre avatar.**

Par ailleurs, vous ne devez jamais utiliser le même contrôleur dans plusieurs Playable Layers. Cela peut fonctionner pour certaines configurations, mais c'est une très mauvaise pratique et cela causera des problèmes majeurs lorsque vous étendrez les fonctionnalités de votre avatar.
:::danger Utilisez uniquement des Contrôleurs d'Animation

Nous ne prenons en charge que l'utilisation de Contrôleurs d'Animation dans les emplacements des Playable Layers. N'utilisez aucun autre type de contrôleur - vous rencontrerez des erreurs ou ne pourrez pas télécharger le contenu.
:::

Que font donc ces Playable Layers ? Voici la version courte :

**Base :** C'est ce qui doit toujours jouer, réagir aux mouvements (comme la locomotion), ou à l'état de locomotion de votre avatar (course, chute, accroupissement, etc). Uniquement des animations de transformation.
**Additive :** C'est ce que Base utilise déjà, mais vous voulez "ajouter" quelque chose en plus - comme une animation de respiration. Uniquement des animations de transformation.
**Gesture :** Ce qui est déclenché par la main ou par le menu d'expression. Vous pouvez également l'utiliser pour des "animations de repos" comme une queue qui remue, des ailes qui battent ou des oreilles qui bougent. Uniquement des animations de transformation.
**Action :** Remplace complètement les autres layers, similaire à AV2 Emotes. Uniquement des animations de transformation.
**FX :** Similaire à Gesture, mais pour tout ce qui n'est pas une animation de position, de rotation ou d'échelle des transformations.

C'est bien, mais passons à plus de détails.

## Base

Le layer Base contient les animations de locomotion, y compris les arbres de fusion pour la marche, la course, le déplacement latéral. Il comprend également les états d'animation pour le saut, la chute, la chute rapide, l'accroupissement et le crawling, entre autres choses.

Gardez à l'esprit que si vous ajoutez quelque chose ici, vous devrez redéfinir les états d'animation de locomotion. C'est assez complexe ! Jetez un coup d'œil à l'exemple de Base Playable Layer pour voir à quel point cela peut être complexe.

Les animations dans Base ne doivent affecter que les transformations, et tous les layers doivent utiliser des Avatar Masks pour vous assurer que vous n'affectez que les transformations appropriées.

## Additive

Le layer Additive est destiné aux mouvements de transformation supplémentaires des os humanoïdes animés dans Base, comme les animations de respiration qui peuvent "ajouter" des mouvements au layer Base.

**Si vous souhaitez ajouter une animation de repos aux os non humanoïdes - comme une queue, des oreilles, etc. utilisez Gesture à la place !** Additive est *spécifiquement* pour les os humanoïdes.

Le layer Additive est spécial car il est toujours réglé sur un mode de mélange "additif". En bref, si vous avez une transformation qui bouge pendant la locomotion, l'animation additive ajoutera son animation par-dessus. Cela peut donner des effets étranges si vous faites des choses folles avec les os dans Additive, alors essayez de le garder assez minimal.

:::caution Le Masque Avatars Ignoré sur le Premier Layer Additive

Le masque du premier layer (layer base, 0e layer, etc) est ignoré. Cela est dû à des raisons de masquage interne. Vous pouvez toujours masquer d'autres layers, mais tout masquage appliqué au premier layer sera ignoré.
:::

Les animations dans Additive ne doivent affecter que les transformations.

## Gesture

Le layer Gesture est destiné aux animations qui doivent agir sur des parties individuelles du corps tout en jouant les animations sous-jacentes pour le reste du corps. Un peu comme les Gestures AV2, mais appliqué à n'importe quelle partie du corps.

Utilisez le masquage Avatar pour vous assurer que les animations n'affectent *que* les parties de l