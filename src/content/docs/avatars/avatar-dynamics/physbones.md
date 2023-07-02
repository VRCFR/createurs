---
title: "PhysBones"
---

PhysBones est un ensemble de composants qui vous permet d'ajouter un mouvement secondaire aux avatars, vous permettant d'ajouter du mouvement à des éléments tels que les cheveux, la queue, les oreilles, les vêtements, et plus encore ! Une utilisation appropriée de ces composants rendra votre avatar plus dynamique et plus réaliste.

PhysBones remplace Dynamic Bones. Bien que les deux systèmes partagent de nombreux concepts, il existe des différences majeures avec PhysBones, de sorte que tous les avatars ne peuvent pas être directement convertis vers le système de VRChat.

Un exemple d'utilisation d'Avatar Dynamics se trouve dans le SDK sous `VRCSDK\Examples3\Dynamics\Robot Avatar`.

# VRCPhysBone

Définit une chaîne d'os qui sera animée avec PhysBones. Ils peuvent être utilisés pour simuler un mouvement secondaire et des corps souples, tels que les cheveux, la queue, les oreilles souples, etc. Il dispose de nombreuses options de configuration et peut être configuré de différentes manières.

De plus, les PhysBones peuvent être interagis par vous et d'autres personnes ! Si vous avez donné la permission à d'autres utilisateurs, ces derniers peuvent saisir les PhysBones configurés sur votre avatar et appuyer sur la gâchette tout en maintenant le PhysBone pour le "poser" et le maintenir en position. Vous pouvez également désactiver cela dans la configuration pour ne pas permettre le "posage", ne pas permettre la saisie, ou ne pas permettre de collisions du tout.

Bien que ce ne soit pas son objectif principal, PhysBones peut également servir de substitut raisonnable pour les vêtements jusqu'à ce que nous implémentions notre propre composant de vêtement (Cloth).

![](/img/avatars/physbones-ca9ee06-2022-05-04_18-23-09_Unity.png)

## Versions

Vous pouvez maintenant sélectionner la version du composant VRCPhysBone que vous souhaitez utiliser directement sur le composant. Par défaut, la dernière version sera choisie lors de la création d'un nouveau composant. Les avatars existants continueront à utiliser leur version précédente, sauf s'ils sont mis à jour manuellement et ré-uploadés.

Version 1.0 :

- La version de base du composant VRCPhysBone.

Version 1.1 :

- Mise à jour des os souples (Squishy Bones), permettant aux os de se déformer et de modifier leur longueur en fonction du mouvement.
- La gravité agit désormais comme un ratio de rotation des os lorsqu'ils sont au repos. Une force de traction positive est requise pour que les os se déplacent dans la direction de la gravité.
- La rigidité agit désormais comme un ratio qui maintient un os dans son orientation précédente.

## Transformations

`Transforme racine` - Le transforme où ce composant commence. S'il est laissé vide, on suppose qu'il démarre à partir de cet objet de jeu.
`Ignorer les transformations` - Liste des transformations ignorées qui ne doivent pas être affectées par ce composant. Les transformations ignorées incluent automatiquement tous les enfants de cette transformation.
`Position finale` - Vecteur utilisé pour créer des os supplémentaires à chaque extrémité de la chaîne. Utilisé uniqu

ement si la valeur est différente de zéro. En général, vous voudrez augmenter cette valeur le long de l'axe +Y, qui pointe "vers le haut" de l'os.
`Type Multi-Enfant` - Comportement de l'os racine lorsque plusieurs chaînes d'os existent. Il existe trois modes :

  - Si défini sur **Ignorer**, l'os racine ne bougera pas et ignorera la physique. Utile pour les cheveux, par exemple, car vous pouvez utiliser un seul composant PhysBone sur la racine pour affecter tous les os des cheveux !

  - Si défini sur **Premier**, l'os racine formera une seule chaîne continue avec la première chaîne d'os de la hiérarchie. Toutes les autres chaînes fonctionneront toujours, mais elles partiront du premier os de chaque chaîne respective plutôt que de la racine comme la première chaîne.

  - Si défini sur **Moyenne**, le mouvement de l'os racine sera la moyenne de toutes les autres chaînes. Cela signifie que la base de chaque chaîne pourra bouger.

> 🚧
>
> Si vous utilisez un seul os racine ou un seul os racine avec plusieurs enfants (mais pas de petits-enfants), vous **devez** définir une position finale !

 Par exemple, si vous mettez le composant PhysBone sur l'un des os `OsRacine` ci-dessous, vous **devez** définir une **position finale** pour que PhysBones fonctionne. C'est différent de Dynamic Bones !

  - Un seul os
    - `OsRacine`
  - Plusieurs enfants, un seul os racine
    - `OsRacine`
      - `OsEnfant1`
      - `OsEnfant2`
      - `OsEnfant3`
      - `OsEnfant4`

Vous pouvez également résoudre ce problème en ajoutant des "os de fin" après chaque `OsEnfant`, mais cela nécessite de modifier l'armature.

## Forces

**Type d'intégration** définit le type de mathématiques utilisé pour simuler le mouvement de tout os affecté par ce composant. En fonction de votre choix, les options disponibles dans la section Forces changeront. Vous pouvez choisir entre deux options :

- `Simplifiée` est une méthode plus stable qui semble un peu plus lente et moins réactive aux impulsions et aux forces externes, mais qui est plus facile à configurer.
- `Avancée` est moins stable, mais permet des configurations plus complexes et tend à être plus réactive aux impulsions et aux forces externes.
  Avec les paramètres par défaut, ces deux modes se comportent de manière assez similaire, mais en ajustant les paramètres et en les testant, vous découvrirez rapidement leurs différences.

> 📘
>
> La plupart (sinon tous) des options ci-dessous permettent l'utilisation de courbes en appuyant sur le bouton "C" à côté du curseur. Les courbes vous permettent d'ajuster la valeur sur la longueur de la chaîne d'os et permettent des configurations TRÈS complexes !

![physbones-054e326-2022-04-19_11-32-12_Unity.png](/img/avatars/physbones-054e326-202

2-04-19_11-32-12_Unity.png)

`Force de traction` - Quantité de force utilisée pour ramener les os à leur position de repos.
`Ressort` - Quantité de rebondissement des os lorsqu'ils tentent de revenir à leur position de repos. Disponible uniquement avec le type d'intégration Simplifiée.
`Momentum` - Quantité de rebondissement des os lorsqu'ils tentent de revenir à leur position de repos. Disponible uniquement avec le type d'intégration Avancée. Bien que la description soit la même que pour le paramètre de Ressort, l'effet est légèrement différent.
`Rigidité` - Quantité d'effort fournie par les os pour rester dans leur position de repos. Disponible uniquement avec le type d'intégration Avancée.
`Gravité` - Quantité de gravité appliquée aux os. Une valeur positive tire les os vers le bas, une valeur négative les tire vers le haut.
`Diminution de la gravité` - Disponible uniquement si la gravité est différente de zéro. Cela contrôle la réduction de la gravité lorsque l'os est en position de repos. Une valeur de 1.0 signifie que la gravité n'affectera pas l'os en position de repos. Cela vous permet d'avoir les effets de la gravité lorsque l'os est tourné par rapport à la position initiale, sans affecter l'état de repos de l'os.

Vous pouvez utiliser le paramètre de diminution de la gravité de la manière suivante : si vos cheveux sont modélisés dans la pose souhaitée lorsque vous êtes debout normalement, vous pouvez utiliser une diminution de la gravité de 1.0. Ainsi, la gravité n'affectera pas vos cheveux lorsque vous êtes immobile, et vos cheveux se reposeront dans leur position modélisée. Si vos cheveux sont modélisés à 45 degrés vers l'extérieur et que vous voulez qu'ils soient suffisamment affectés par la gravité pour avoir une belle courbe (mais pas complètement vers l'extérieur ou complètement vers le bas), le curseur vous permet de l'ajuster et d'utiliser une valeur de 0,5 à 0,8 pour avoir seulement une fraction de la gravité en position de repos.

`Type d'immobilité` modifie le comportement de l'option `Immobile`.

- Si défini sur **Tout le mouvement**, `Immobile` réduit tout mouvement calculé à partir de la transformation parent de l'os racine. C'est le mode **par défaut** pour les nouveaux PhysBones et les Dynamic Bones convertis. Dans ce mode, tous les mouvements des PhysBones, que ce soit dans l'espace de la scène ou dans l'espace de jeu, seront atténués par le facteur `Immobile`.

- Si défini sur **Monde (expérimental)**, `Immobile` annule uniquement les mouvements de position par rapport à la racine de la scène. Les mouvements par animation ou IK affectent toujours les os normalement. _Ce mode peut changer à l'avenir !_

Cela signifie que se déplacer dans votre espace de jeu affectera toujours le mouvement de vos PhysBones norm

alement, mais se déplacer (appuyer sur votre joystick pour bouger) aura son mouvement atténué par le facteur `Immobile`.

## Limites

La définition de limites vous permet de limiter la quantité de mouvement d'une chaîne d'os PhysBone. C'est utile lorsque vous ne voulez pas que les cheveux traversent votre tête, et c'est **bien plus performant** qu'un collider !

De plus, lors de la configuration des options de limites, une visualisation de ces limites apparaîtra dans la vue de la scène lorsque vous aurez sélectionné la chaîne d'os PhysBone. Cela peut être extrêmement utile pour affiner les limites !

`Type de limite` a plusieurs modes. Tous permettent d'ajuster la `Rotation` en termes de `Tangage`, `Lacet` et `Roulis` - autrement dit, le long des axes X, Y et Z respectivement.

### Aucune

`Aucune` signifie qu'aucune limite n'est activée sur cette chaîne d'os. Il n'y a pas d'options de configuration.

### Angle

![physbones-b7abe1f-2022-04-19_11-49-26_Unity.png](/img/avatars/physbones-b7abe1f-2022-04-19_11-49-26_Unity.png)

`Angle` signifie que la chaîne d'os sera limitée à un certain `Angle Maximum`, centré sur un axe défini par la `Rotation`. Cela est visualisé sous la forme d'un cône dans la vue de la scène.

### Charnière

![physbones-b7723cc-2022-04-19_11-50-04_Unity.png](/img/avatars/physbones-b7723cc-2022-04-19_11-50-04_Unity.png)

`Charnière` signifie que la chaîne d'os sera limitée à un certain `Angle Maximum` le long du plan défini par la `Rotation`. Cela est visualisé comme une tranche d'un cercle, similaire à une part de pizza ou à une part de tarte.

### Polaire

![physbones-824db3c-2022-04-19_11-51-22_Unity.gif](/img/avatars/physbones-824db3c-2022-04-19_11-51-22_Unity.gif)

`Polaire` est un peu plus compliqué. Si vous prenez une `Charnière` et que vous la balayez sur l'axe `Lacet` sur une certaine distance, vous obtenez un segment d'une sphère dans les coordonnées `Polaire`. Vous pouvez configurer les valeurs `Tangage Maximum` et `Lacet Maximum` pour ajuster la taille du segment, et utiliser la `Rotation` pour définir l'emplacement de ce segment sur la sphère. La visualisation de `Polaire` est particulièrement utile.

N'utilisez pas trop de limites Polaires, car elles ont un coût de performance non nul. L'utilisation d'un grand nombre (plus de 64) causera probablement des problèmes. Si vos valeurs de `Tangage Maximum` et `Lacet Maximum` sont similaires ou identiques, une limite `Angle` suffira et coûtera moins en termes de performance.

## Collision



`Rayon` - Rayon de collision autour de chaque os, en mètres. Utilisé à la fois pour la collision et la prise en main.
`Autoriser la collision` - Autorise la collision avec des colliders autres que ceux spécifiés sur ce composant. Actuellement, les seuls autres colliders sont les mains et les doigts de chaque joueur tels que définis par leur avatar.
`Colliders` - Liste des colliders qui entrent spécifiquement en collision avec ces os.

## Étirement et déformation

`Mouvement d'étirement` - Quantité de mouvement qui affectera l'étirement/déformation des os. Une valeur de zéro signifie que les os s'étirent/déforment uniquement en raison de la prise en main ou des collisions.
`Étirement maximum` - Quantité maximale d'étirement des os. Cette valeur est un multiple de la longueur initiale de l'os. [Note : Limites maximales](/avatars/avatar-dynamics/physbones#limites-maximales)
`Déformation maximale` - Quantité maximale de rétrécissement des os. Cette valeur est un multiple de la longueur initiale de l'os.

## Prise en main et pose

`Autoriser la prise en main` - Permet aux joueurs de prendre en main les os.
`Autoriser la pose` - Permet aux joueurs de poser les os après les avoir pris en main.
`Mouvement de prise en main` - Contrôle la façon dont les os pris en main se déplacent. Une valeur de zéro fait en sorte que les os utilisent la traction et le ressort pour atteindre la position prise en main. Une valeur de un fait en sorte que les os se déplacent immédiatement vers la position prise en main.
`Fixer à la main` - Lorsqu'un os est pris en main, il sera fixé à l'os qui le prend en main.

## Options

`Paramètre` - Préfixe utilisé pour fournir plusieurs paramètres au contrôleur d'avatar. Dans les éléments suivants, si vous définissez le paramètre sur `Queue`, cela remplacerait `{paramètre}` par `Queue`.

`{paramètre}_EstPrisEnMain`
 [Bool] Les os sont-ils actuellement pris en main.

`{paramètre}_EstPosé`
 [Bool] Les os sont-ils posés.

`{paramètre}_Angle`
[Float] Plage de 0,0 à 1,0. Angle normalisé de 180 degrés formé entre l'os d'extrémité et sa position de repos initiale. En d'autres termes, si vous tordez un os complètement à l'opposé de sa direction de départ, ce paramètre aura une valeur de 1,0.

`{paramètre}_Étirement`
[Float] Plage de 0,0 à 1,0. Dans quelle mesure les os sont-ils proches de leur longueur d'étirement maximale.

`Est animé` - Permet d'animer les transformations des os. À chaque image, la position de repos des os sera mise à jour en fonction de l'animation appliquée. Cette option doit être activée pour que tous les os de la chaîne PhysBone (y compris l'os racine !) respectent les animations qui leur sont appliquées.

`Réinitialiser lors de la désactivation` - Lorsque ce composant est dés

activé, les os reviendront automatiquement à leur position par défaut.

## Notes importantes, conseils d'utilisation, etc.

**Ne placez pas un composant Constraint et un composant PhysBone sur le même GameObject**, car cela peut causer des problèmes d'ordre d'exécution.

Placez plutôt le Constraint sur le GameObject parent. Vous pouvez toujours définir la cible du Constraint sur le GameObject d'origine.

> ❗️ 
> 
> **Les PhysBones ont une limite stricte sur le Meta Quest.** Cela est fait pour éviter une réduction des performances sur les appareils Meta Quest, qui sont souvent déjà faibles en ressources CPU. 
> 
> Vous pouvez considérer ces limites comme les limites Very Poor pour le Quest décrites dans la documentation sur le [Système de classement des performances des avatars](/avatars/avatar-performance-ranking-system#quest-limits).

### Limitations par composant

**Un seul composant VRCPhysBone ne peut pas affecter plus de 256 transformations à la fois.** Cela inclut l'os racine ainsi que tous les enfants. _Cela affecte également les conversions de Dynamic Bones !_

Cependant, vous devez essayer de ne pas avoir autant de transformations à animer en premier lieu. Essayez de fusionner les os de la chaîne vers leurs parents immédiats. Des outils créés par la communauté comme Cat's Blender Plugin peuvent le faire pour vous.

### Animation des propriétés

Les propriétés des PhysBones telles que le ressort, la traction, la rigidité, etc. sont définies à l'initialisation et **ne peuvent pas être animées**.

Cependant, si vous animez une propriété d'un composant PhysBone, puis animez le composant désactivé puis réactivé, vous pourriez obtenir le comportement souhaité. Notez que ce n'est pas une méthode prise en charge pour animer ces propriétés et ne sera pas prise en charge dans les futures modifications. (En d'autres termes, cela pourrait ne pas fonctionner. Si c'est le cas, nous n'essaierons pas de le corriger.)

### Os humains

**Ne définissez pas les os humains comme os racine de PhysBone.** En d'autres termes, ne définissez pas les os de la hanche, de la colonne vertébrale, de la poitrine, de la poitrine supérieure, du cou, de la tête ou des membres comme racine. Cela causera des problèmes majeurs.

Au lieu de cela, dupliquez l'os que vous souhaitez utiliser comme racine et reparentez tous les os enfants que vous souhaitez animer sur cette nouvelle racine dupliquée. Cela doit être fait dans Blender. Des outils créés par la communauté comme Cat's Blender Plugin peuvent le faire pour vous.

### Rotation des PhysBones

Contrairement aux Dynamic Bones, **l'os racine d'une chaîne PhysBone est autorisé à tourner**. Il ne peut pas se déplacer, cependant. Cela peut avoir certaines conséquences avec certains agencements - essayez les choses de votre côté pour voir comment elles se comportent.

### Paramètres AV3 des PhysBones

Lors de l'affectation de paramètres, **il n'est pas nécessaire d'utiliser les Paramètres synchronisés définis par l'objet `VRCExpressionParameters

`**. Ces paramètres sont déjà mis à jour sur les machines locale et distante, car les deux exécutent des PhysBones.

### Comportement immobile des PhysBones

Dynamic Bones utilise sa valeur `Inert` à partir de l'endroit où le composant est placé, et non de la transformation racine. C'est probablement un bogue de Dynamic Bones. Par conséquent, les PhysBones utilisent leur valeur `Immobile` à partir de la transformation racine. Cela peut affecter le comportement dans certains cas.

### Utilisation optimale des composants

En raison de la nature multi-threadée des PhysBones, il n'est pas toujours optimal de mettre tous les os dans une seule chaîne. Plusieurs composants nous permettent de répartir le travail sur plusieurs threads. Cependant, vous devriez toujours essayer d'avoir moins de composants... mais ce n'est pas aussi mauvais d'en avoir quelques-uns sur votre avatar que cela l'était avec les Dynamic Bones.

Si vous avez vraiment besoin d'un chiffre, vous devriez envisager de diviser les ensembles de chaînes lorsque vous atteignez plus de 128 transformations affectées par un seul composant. Si vous avez une robe avec 256 os et qu'elle est divisée à une racine, la diviser en deux ou trois composants fonctionnera.

Cependant, si vous avez simplement affaire à une trentaine d'os... ne vous en faites pas. Comme vous pouvez probablement le constater, ce ne sont pas des règles strictes ! Nous introduirons probablement des avertissements doux plus tard lorsque quelque chose semble devoir être configuré différemment.

### Limites maximales

Chaque composant VRCPhysBone a une boîte englobante qui s'agrandit et se rétrécit à mesure que les os se déplacent. Ces boîtes englobantes facilitent la détection des collisions avec les joueurs touchant et saisissant les PhysBones. Pour des raisons d'efficacité, les boîtes englobantes sont limitées à un maximum de 10×10×10 mètres. Les PhysBones peuvent sortir de cette plage et continuer à fonctionner normalement. Cependant, les joueurs peuvent être incapables de toucher ou de saisir ces os en fonction de leur emplacement.

La boîte englobante ne tient compte que des os avec une collision et un rayon supérieur à zéro. Dans les situations où vous souhaitez fournir un étirement extrêmement long, tant que des os avec une collision existent au-delà du point d'étirement, vous pouvez éviter d'atteindre cette limite de boîte englobante maximale.