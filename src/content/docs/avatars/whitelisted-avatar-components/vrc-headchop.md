---
title: "VRC Head chop"
sidebar:
    badge: 
        text: Nouveau
        variant: tip
---

Lorsqu'un avatar est porté, VRChat "découpe" automatiquement l'os de la tête de l'avatar en définissant son échelle de transformation à presque 0. Cela empêche la tête de dépasser de la vue à la première personne de l'utilisateur. `VRCHeadChop` est un composant d'avatar facultatif qui contrôle quels os spécifiques sont réduits pour la découpe de la tête, permettant aux créateurs d'avatars de :
- Garder certaines parties de la tête de l'avatar visibles à la première personne, comme ses cheveux ou son nez.
- Cacher des parties de l'avatar à la première personne qui ne font pas partie de la tête, comme une capuche.

`VRCHeadChop` n'affecte que l'apparence de l'avatar du point de vue de l'utilisateur qui le porte. Cela n'affecte pas l'apparence de l'avatar dans les miroirs ou pour les autres joueurs.

## Propriétés du composant
![vrcheadchop-618b6e18-2024-02-06_11-48-10_Unity.png](/img/avatars/vrcheadchop-f0de7579-2024-03-15_19-46-28_Unity.png)

| Propriété |  | Description |
| ---- | ---- | ---- |
| **Target Bones** |  | Une liste d'au plus 32 os à contrôler avec ce composant. Chaque os peut être configuré individuellement : |
|  | *Transform* | Une transformation osseuse. |
|  | *Scale Factor* | Définit l'échelle à appliquer à cet os.<br/>Si le facteur d'échelle est 0, l'os sera complètement caché.<br/>Si le facteur d'échelle est 1, l'os sera entièrement visible. (Par défaut) |
|  | *Apply Condition* | Contrôle dans quelles conditions la mise à l'échelle doit être appliquée à la transformation. <br/>- Toujours appliquer (Par défaut)<br/>- VR seulement<br/>- Non-VR seulement |
| **Global Scale Factor** |  | Multiplie le facteur d'échelle de chaque os cible. Vous pouvez généralement laisser cela défini sur 1 à moins que vous ne vouliez mettre à l'échelle tous les os à la fois.<br/>Si le facteur d'échelle global est 1, chaque os cible utilisera son facteur d'échelle individuel. (Par défaut)<br/>Si le facteur d'échelle global est 0, tous les os cibles auront un facteur d'échelle de 0. |

:::note[Conseils d'utilisation]

- Modifier les paramètres de `VRCHeadChop` pour un os parent affecte également tous les os enfants.
- Si un os enfant a ses propres paramètres `VRCHeadChop`, il annule les paramètres de son os parent.
- Il peut y avoir un maximum de 16 composants `VRCHeadChop` attachés à votre avatar. Si vous dépassez cette limite, le SDK d'avatars affichera une erreur.
- Le type de verrouillage "Verrouillage de hanche" [lock type](https://docs.vrchat.com/docs/ik-20-features-and-options#lock-types) peut faire en sorte que la tête de votre avatar bloque votre vue si vous utilisez `VRCHeadChop`.

:::

## Utilisation de base

La manière la plus courante d'utiliser `VRCHeadChop` est de garder les cheveux de votre avatar visibles. Sur la plupart des avatars, les os des cheveux sont des enfants de l'os de la tête de l'avatar.

1. Ajoutez les os que vous voulez rendre visibles à la liste "Os cibles".
2. Définissez leur facteur d'échelle sur 1.
3. (Facultatif) Définissez "Condition d'application" sur "VR seulement" si vous ne voulez pas que ces os soient visibles pour les joueurs non-VR.

Cela permet aux os des cheveux d'être entièrement visibles depuis votre perspective à la première personne. Le reste de la tête et tous les autres os enfants sont gardés cachés.

Par exemple, le robot Avatar Dynamics inclus dans le SDK possède des cheveux et une paire d'oreilles d'animal. Nous pouvons garder ces parties de la tête visibles à la première personne tout en cachant le reste de la tête en utilisant la configuration suivante. Dans cet exemple, nous définissons également les conditions d'application sur "VR seulement", donc les parties supplémentaires n'apparaissent que lorsqu'on joue en VR.

![vrcheadchop-618b6e18-2024-02-06_11-48-10_Unity.png](/img/avatars/vrcheadchop-example-setup-f0de7579-2024-03-15_19-52-11_Unity.png)

Remarquez que nous n'avons pas besoin de lister chacune des transformations enfants des os que nous voulons montrer (par exemple chaque brin de cheveux individuel) puisqu'elles seront montrées avec les os racines de toute façon. Il n'importe pas non plus à quelle transformation vous ajoutez le composant `VRCHeadChop` - tout ce qui compte, c'est la liste des transformations que vous définissez pour lui dans l'inspecteur.

Cela a le résultat suivant ; les cheveux et les oreilles ont été agrandis pour qu'ils puissent être vus à la première personne, tandis que les yeux sont toujours réduits pour qu'ils ne bloquent pas votre vue.

![vrcheadchop-618b6e18-2024-02-06_11-48-10_Unity.png](/img/avatars/vrcheadchop-example-result-f0de7579-2024-03-15_20-12-17_Unity.png)

Vous pouvez également définir l'état activé de ce composant à l'aide d'un animateur - si le composant est désactivé, il n'aura aucun effet jusqu'à ce qu'il soit activé à nouveau. Cela peut être utilisé pour configurer des bascules d'expression qui contrôlent si certaines parties de l'avatar sont visibles à la première personne ou non. Il est recommandé de le faire afin que les joueurs utilisant vos avatars aient la possibilité de désactiver les fonctionnalités visibles à la première personne s'ils le souhaitent. L'échelle globale peut être contrôlée avec un animateur si vous voulez donner un contrôle plus précis sur la quantité de mise à l'échelle des os.

## Utilisations alternatives

Il est possible de changer directement l'échelle de l'os de la tête lui-même en incluant l'os de la tête dans la liste. Dans ce cas, VRChat ne mettra plus automatiquement l'os de la tête à l'échelle pour vous, et utilisera plutôt le facteur d'échelle que vous fournissez pour lui. Vous pouvez ensuite réduire la taille des os qui sont des enfants de la tête que vous *ne* voulez pas voir à la première personne en définissant leurs facteurs d'échelle sur 0. Si vous adoptez cette approche, vous voudrez probablement réduire la taille de la partie du visage dans laquelle se trouve le point de vue pour que le porteur ne voie pas l'intérieur de la tête de l'avatar.

Une autre façon d'utiliser ce composant est de cacher des éléments ailleurs sur l'avatar qui ne devraient pas être visibles à la première personne. Par exemple, si votre avatar a une capuche pondérée sur sa tête qui n'est pas réellement un enfant de l'os de la tête, vous pourriez utiliser ce composant pour la cacher à la première personne en lui donnant un facteur d'échelle de 0.
