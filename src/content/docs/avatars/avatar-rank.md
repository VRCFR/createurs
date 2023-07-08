---
title: "Classement des performances"
description: "systeme-de-classement-de-performance-avatar"
---
Le système de classement des performances des avatars vous permet de voir dans quelle mesure l'avatar d'un utilisateur affecte les performances grâce à l'analyse des composants de cet avatar. Vous pouvez également l'utiliser sur votre propre avatar pour voir à quel point il est performant.

Ce système est fourni pour informer les utilisateurs des composants les plus lourds en termes de performances sur leurs avatars, et offrir des conseils de base sur ce qu'il faut examiner pour optimiser leur avatar.

Il est également utilisé pour piloter le système de [Classement de performance minimum affiché](/avatars/systeme-de-classement-de-performance-avatar#section-classement-de-performance-minimum-affiche), qui permet aux utilisateurs de décider quels avatars ils souhaitent afficher en fonction de leur classement de performance.

**Ce système n'est pas censé être une autorité absolue en matière de performances d'avatar**, mais il constitue un bon guide général pour indiquer si un avatar nécessite un peu plus de travail pour être performant.
:::danger Les classements de performances ne sont pas la vérité absolue !

Bien que le système de classement de performances fasse de son mieux pour évaluer le scénario le plus "défavorable" en termes de performances d'un avatar, il existe de nombreuses façons d'optimiser un avatar bien conçu afin qu'il soit classé comme Très mauvais, et d'avoir un avatar gourmand en FPS classé comme Excellent.

Pour les personnes ayant des compétences techniques : le système de classement de performances est basé sur une analyse statique des propriétés de l'avatar, sans tenir compte de facteurs tels que les animateurs, les shaders, la résolution des textures, les lumières en pixels, et bien d'autres facteurs. *Cependant*, il tend à fournir un excellent test pour détecter les avatars problématiques dans 95 % des cas !
:::

## Version courte
**Visez un classement Bon.** Si vous ne pouvez pas l'atteindre, **Moyen est tout à fait acceptable**.

La création d'avatars est déjà difficile, et la création d'avatars optimisés l'est encore plus. C'est une compétence qui prend beaucoup de temps à acquérir !

Gardez à l'esprit que de nombreux événements, groupes et lieux dans VRChat peuvent vous demander de changer votre avatar si vous apparaissez avec un avatar de qualité Très mauvaise. Par conséquent, même si vous choisissez d'utiliser un avatar de qualité Très mauvaise dans de petites instances avec vos amis, assurez-vous d'avoir également un autre avatar destiné à être utilisé dans des instances avec plus de personnes.

Votre avatar affecte le taux de rafraîchissement de tout le monde, alors soyez attentif à la façon dont vos choix affectent l'expérience des autres. Sinon, ils pourraient vous voir comme votre avatar de repli !
## Icônes de classement de performances
Lorsque vous ouvrez votre menu rapide, vous verrez des icônes apparaître au-dessus des plaques d'identification des utilisateurs.

Les classements sont les suivants :

| Icône                                                  | Classement de performance | Description                                                                                                                                                                       |
|-------------------------------------------------------|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ![image](/img/avatars/performance-rank/excellent.png) | Excellent        | C'est aussi bon que ça peut l'être ! Le classement "Étoile d'or sur le frigo".                                                                                                      |
| ![image](/img/avatars/performance-rank/good.png)      | Bon             | Assez bien ! Un excellent objectif à atteindre.                                                                                                                                           |
| ![image](/img/avatars/performance-rank/medium.png)    | Moyen           | Ne vous laissez pas tromper par le nom, Moyen est plus que suffisant. Si vous êtes ici et que vous ne voulez pas aller plus loin, c'est bon.                                                            |
| ![image](/img/avatars/performance-rank/poor.png)      | Mauvais             | Aurait besoin de quelques améliorations.                                                                                                                                                              |
| ![image](/img/avatars/performance-rank/very-poor.png) | Très mauvais        | Cet avatar présente de graves problèmes de performance. Comme ce classement est sans limite, il est fort possible que vos performances en souffrent à cause de la visibilité de cet avatar. |

## Affichage des statistiques détaillées de l'avatar
Si vous cliquez sur un utilisateur avec votre menu rapide ouvert, vous remarquerez un nouveau bouton **"Afficher les statistiques de l'avatar"** sur le côté gauche, affichant l'icône du classement de performance de cet utilisateur.
:::caution

Ceci est une capture d'écran obsolète ! Mise à jour en attente.
:::

![image](/img/avatars/avatar-performance-ranking-system-05c612d-image_4.png)

Si vous cliquez sur cette icône, vous pouvez afficher les **Statistiques détaillées de l'avatar** de cet avatar. Vous pouvez y accéder pour votre propre avatar en allant dans le menu Avatar, en cliquant sur l'un de vos avatars, puis en cliquant sur le bouton **Statistiques de l'avatar** en bas à gauche de l'écran.
:::caution

Ceci est une capture d'écran obsolète ! Mise à jour en attente.
:::

![avatar-performance-ranking-system-7a362c2-fixedTrogPerf.png](/img/avatars/avatar-performance-ranking-system-7a362c2-fixedTrogPerf.png)

Lorsque vous cliquez sur le bouton **Statistiques de l'avatar**, une fenêtre s'affiche avec les détails de l'avatar que vous regardez, ou de votre propre avatar (si vous avez cliqué sur le bouton dans l'onglet Avatar).
:::caution

Ceci est une capture d'écran obsolète ! Mise à jour en attente.
:::

<iframe src='https://gfycat.com/ifr/ImpossibleFarawayLamprey?hd=1' frameborder='0' scrolling='no' allowfullscreen width='640' height='506'></iframe>
La couleur du texte correspond au classement qui est le plus pénalisant pour cette statistique spécifique.

Vous verrez également un avant et après sous la forme des lignes "Original" et "Perf Filtered". Si vous utilisez le système de [Classement de performance minimum affiché](/avatars/system

e-de-classement-de-performance-avatar#section-classement-de-performance-minimum-affiche), vous pouvez voir les statistiques avant et après que le système ait supprimé certains composants. Dans le cas où le système de classement de performance minimum affiché bloque un avatar pour des raisons de performance, vous ne verrez que les statistiques originales.

Dans l'exemple donné ci-dessus, les lumières et les systèmes de particules sont désactivés car ils dépassent la limite définie. Étant donné que les systèmes de particules utilisent au moins un matériau chacun, le nombre de matériaux des systèmes de particules est également soustrait de l'avatar avant le filtrage.

Vous pouvez également voir que nous proposons un lien vers notre **Documentation**, notamment nos [Conseils d'optimisation d'avatar](/avatars/conseils-doptimisation-davatar).
## Statistiques de classement de performance de l'avatar
Voici une liste de toutes les statistiques que le système prend en compte et leur description.

Les statistiques en gras entraîneront le blocage complet de l'avatar s'ils dépassent le classement de performance minimum affiché. Si d'autres statistiques (à l'exception des limites) dépassent le classement de performance minimum affiché, l'avatar ne sera bloqué que partiellement. Les composants liés aux statistiques dépassées seront supprimés. 

Par exemple, avec un classement de performance minimum affiché défini sur Mauvais, un avatar avec 9 renderers de traînée (Très mauvais) sera affiché sans aucun de ses renderers de traînée. Consultez la section [Classement de performance minimum affiché](/avatars/systeme-de-classement-de-performance-avatar#section-classement-de-performance-minimum-affiche) pour plus d'informations.

| Qualité de l'avatar             | Description de la qualité                                                                                                                     |
| --------------------------| ---------------------------------------------------------------------------------------------------------------------------------------- |
| Polygones                   | Le nombre de polygones du modèle en question, compté en triangles.                                                                        |
| Taille des limites                | La taille totale de l'avatar. Si elle est très grande, cela signifie probablement que l'utilisateur a une animation de grande taille sur l'avatar qui n'est pas visible tout le temps. Note importante : la taille des limites ne bloquera pas l'avatar même si elle est inférieure au classement de performance minimum affiché. |
| Mémoire de texture             | La quantité de mémoire estimée utilisée par les textures de l'avatar. Ces textures occupent de l'espace à la fois dans la RAM du système et dans la mémoire de la carte vidéo.                                                     |
| Maillages skinnés             | Le nombre de composants de maillage skinné sur l'avatar.                                                                                     |
| Maillages                     | Le nombre de composants de maillage non skinné sur l'avatar.                                                                                 |
| Emplacements de matériaux             | Le nombre d'emplacements de matériaux sur l'avatar. Les emplacements de matériaux sont les emplacements sur le maillage où vous placez les matériaux. C'est ce qui compte pour la création de sous-maillages, ce qui entraîne un nombre supplémentaire d'appels de rendu. Gardez à l'esprit que les systèmes de particules utiliseront un emplacement de matériau, les systèmes de particules avec des traînées en utiliseront deux, et les renderers de ligne utiliseront un emplacement de matériau. |
| Composants de Dynamic Bone    | Le nombre de scripts Dynamic Bone sur l'avatar.                                                                                        |
| Transformations de Dynamic Bone    | Le nombre de transformations animées par n'importe quel script Dynamic Bone sur l'avatar.                                                        |
| Colliders de Dynamic Bone     | Le nombre de scripts Dynamic Bone Collider sur l'avatar.                                                                               |
| Compteur de vérification des collisions de Dynamic Bone | Le nombre total de transformations DynamicBone affectées par les scripts Dynamic Bone Collider sur l'avatar. Cela peut compter plusieurs fois les transformations, car une seule transformation peut être affectée par plusieurs colliders. |
| Composants PhysBones       | Le nombre de composants PhysBone sur l'avatar.                                                                                          |
| Transformations affectées par PhysBones   | Le nombre total de transformations affectées par les composants PhysBone sur l'avatar.                                                          |
| Colliders de PhysBones        | Le nombre de scripts PhysBone Collider sur l'avatar.                                                                                    |
| Compteur de vérification des collisions de PhysBones | La somme du nombre de transformations PhysBone que chaque collider peut affecter. Cela peut compter plusieurs fois les transformations, car une seule transformation peut être affectée par plusieurs colliders. |
| Contacts de l'avatar Dynamics   | Le nombre de contacts de l'avatar Dynamics sur l'avatar.                                                                                     |
| Animateurs                  | Le nombre d'animateurs sur l'avatar. Note importante : cela sera toujours au moins 1 en raison de l'animateur racine qui est compté. Cela signifie que pour un classement Excellent, vous ne pouvez pas avoir d'autres animateurs supplémentaires. |
| Os                      | Le nombre d'os dans la structure de l'avatar.                                                                                                 |
| Lumières                     | Le nombre de composants Light sur l'avatar.                                                                                            |
| Systèmes de particules           | Le nombre de composants Particle System sur l'avatar.                                                                                   |
|

Le nombre total de particules actives | La somme de maxParticles de tous les systèmes de particules sur l'avatar.                                                                        |
| Polys actifs de particules de maillage | Le nombre total de polygones de particules de maillage émis par les systèmes de particules actifs. Autrement dit, maxEmission * meshParticleVerts. |
| Traînées de particules activées    | Si des systèmes de particules sur l'avatar ont des traînées de particules activées, cela sera True.                                                   |
| Collision de particules activée | Si des systèmes de particules sur l'avatar ont des collisions de particules activées, cela sera True.                                                |
| Renderers de traînée            | Le nombre de renderers de traînée sur l'avatar.                                                                                             |
| Renderers de ligne             | Le nombre de renderers de ligne sur l'avatar.                                                                                              |
| Tissus                     | Le nombre total de composants Cloth sur l'avatar.                                                                                     |


## Limites de valeur des classements de performance des avatars - Maximum par classement
Ci-dessous, vous trouverez les limites pour chaque classement de performance. Si vous dépassez ces chiffres pour une catégorie quelconque, vous passerez au classement supérieur.

Par exemple (sur PC), si votre avatar comporte 2 maillages skinnés, il sera classé comme "Bon", car cela dépasse la note "Excellent", mais pas la note "Bon". 
:::caution Tous les GameObjects et composants sont comptabilisés !

Tous les GameObjects et composants, **y compris ceux qui sont actuellement désactivés**, sont pris en compte dans le classement de performance de l'avatar.
:::

:::caution Mesh Read/Write désactivé

Si vous désactivez la lecture/écriture de maillages sur **n'importe quel** maillage de l'avatar (y compris les systèmes de particules), le compte des "Polygones" affichera "Mesh Read/Write Disabled" et le classement de performance de l'avatar sera immédiatement rétrogradé en "Très mauvais", indépendamment du nombre réel de triangles de l'avatar.

Le SDK vous avertit de cela et vous demandera de le corriger avant de télécharger.
:::

## Limites sur PC
Sur PC, le niveau par défaut du classement de performance minimum affiché est défini sur "Très mauvais". **Actuellement, aucun avatar ne sera bloqué par défaut en raison du classement de performance sur PC, à moins que vous n'ayez activé le [système de classement de performance minimum affiché](/avatars/systeme-de-classement-de-performance-avatar#section-classement-de-performance-minimum-affiche).**

Les triangles (polygones) sont un cas un peu spécial : si vous avez 32 000 triangles ou moins, vous serez classé comme "Excellent". Tout nombre supérieur à 32 000 mais inférieur à 70 001 sera classé comme "Bon" (sauf si une autre statistique vous tire vers le bas). Si vous dépassez 70 000 polygones, l'avatar sera immédiatement classé comme "Très mauvais".

| Qualité de l'avatar                                                        | Excellent          | Bon         | Moyen       | Mauvais     |
|-----------------------------------------------------------------------| ------------------ | ------------ | ------------ | ------------ |
| Polygones                                                              | 32 000             | 70 000       | 70 000       | 70 000       |
| Taille des limites<sup>1</sup>                                               | 2,5 m x 2,5 m x 2,5 m | 4 m x 4 m x 4 m | 5 m x 6 m x 5 m | 5 m x 6 m x 5 m |
| Mémoire de texture                                                        | 40 Mo              | 75 Mo        | 110 Mo       | 150 Mo       |
| Maillages skinnés                                                        | 1                  | 2            | 8            | 16           |
| Maillages                                                                | 4                  | 8            | 16           | 24           |
| Emplacements de matériaux                                                        | 4                  | 8            | 16           | 32           |
| Composants de Dynamic Bone                                               | 0                  | 4            | 16           | 32           |
| Transformations de Dynamic Bone                                               | 0                  | 16           | 32           | 256          |
| Colliders de Dynamic Bone                                                | 0                  | 0            | 4            | 32           |
| Compteur de vérification des collisions de Dynamic Bone                                    | 0                  | 0            | 8            | 256          |
| Composants PhysBones                                                      | 4                  | 8            | 16           | 32           |
| Transformations affectées par PhysBones                                             | 16                 | 64           | 128          | 256          |
| Colliders de PhysBones                                                        | 4                  | 8            | 16           | 32           |
| Compteur de vérification des collisions de PhysBones | 32                 | 128          | 256          | 512          |
| Contacts de l'avatar Dynamics                                          | 8                  | 16           | 24           | 32           |
| Animateurs                                                             | 1                  | 4            | 16           | 32           |
| Os                                                                     | 75                 | 150          | 256          | 400          |
| Lumières                                                                | 0                  | 0            | 0            | 1            |
| Systèmes de particules                                                      | 0                  | 4            | 8            | 16           |
| Nombre total de particules actives                                               | 0                  | 300          | 1000         | 2500         |
| Polys actifs de particules de maillage                                           | 0                  | 1000         | 2000         | 5000         |
| Traînées de particules activées                                                | False              | False        | True         | True         |
| Collision de particules activée                                             | False              | False        | True         | True         |
| Renderers de traînée                                                        | 1                  | 2            | 4            | 8            |
| Renderers de ligne                                                         | 1                  | 2            | 4            | 8            |
| Tissus                                                                 | 0                  | 1            | 1            | 1            |
| Nombre total de vertices de tissu                                                 | 0                  | 50           | 100          | 200          |
| Colliders de physique                                                     | 0                  | 1            | 8            | 8            |
| Rigidbodies de physique                                                   | 0                  |

4            | 8            | 8            | 16           |
| Contacts de physique                                                    | 0                  | 8            | 16           | 32           |

1. La taille des limites est donnée en mètres (m).
2. Le classement "Moyen" n'a pas de limites spécifiques pour chaque statistique, mais est utilisé comme classement de base si une statistique dépasse le classement "Bon".
3. Les autres statistiques n'ont pas de limites spécifiques et sont utilisées comme référence pour déterminer le classement global de performance de l'avatar.

## Limites sur Oculus Quest
Sur Oculus Quest, le niveau par défaut du classement de performance minimum affiché est défini sur "Mauvais". **Les avatars classés comme "Très mauvais" ou "Mauvais" seront bloqués par défaut sur Oculus Quest, à moins que vous n'ayez activé le [système de classement de performance minimum affiché](/avatars/systeme-de-classement-de-performance-avatar#section-classement-de-performance-minimum-affiche).**

Les triangles (polygones) sont un cas un peu spécial : si vous avez 12 000 triangles ou moins, vous serez classé comme "Excellent". Tout nombre supérieur à 12 000 mais inférieur à 28 001 sera classé comme "Bon" (sauf si une autre statistique vous tire vers le bas). Si vous dépassez 28 000 polygones, l'avatar sera immédiatement classé comme "Très mauvais".

| Qualité de l'avatar                                                    | Excellent          | Bon         | Moyen       | Mauvais     |
|-----------------------------------------------------------------| ------------------ | ------------ | ------------ | ------------ |
| Polygones                                                        | 12 000             | 28 000       | 28 000       | 28 000       |
| Taille des limites                                                        | 2,5 m x 2,5 m x 2,5 m | 4 m x 4 m x 4 m | 5 m x 6 m x 5 m | 5 m x 6 m x 5 m |
| Mémoire de texture                                                 | 20 Mo              | 40 Mo        | 60 Mo        | 80 Mo        |
| Maillages skinnés                                                 | 1                  | 2            | 8            | 16           |
| Maillages                                                        | 2                  | 4            | 12           | 20           |
| Emplacements de matériaux                                                        | 2                  | 4            | 8            | 12           |
| Composants de Dynamic Bone                                        | 0                  | 2            | 8            | 16           |
| Transformations de Dynamic Bone                                        | 0                  | 8            | 16           | 128          |
| Colliders de Dynamic Bone                                         | 0                  | 0            | 2            | 16           |
| Compteur de vérification des collisions de Dynamic Bone                                        | 0                  | 0            | 4            | 128          |
| Composants PhysBones                                               | 2                  | 4            | 8            | 16           |
| Transformations affectées par PhysBones                                             | 8                  | 32           | 64           | 128          |
| Colliders de PhysBones                                                     | 2                  | 4            | 8            | 16           |
| Compteur de vérification des collisions de PhysBones  | 16                 | 64           | 128          | 256          |
| Contacts de l'avatar Dynamics                                   | 4                  | 8            | 12           | 16           |
| Animateurs                                                       | 1                  | 2            | 8            | 16           |
| Os                                                               | 40                 | 80           | 128          | 200          |
| Lumières                                                          | 0                  | 0            | 0            | 1            |
| Systèmes de particules                                                | 0                  | 2            | 4            | 8            |
| Nombre total de particules actives                                             | 0                  | 100          | 400          | 1000         |
| Polys actifs de particules de maillage                                         | 0                  | 500          | 1000         | 2500         |
| Traînées de particules activées                                              | False              | False        | True         | True         |
| Collision de particules activée                                           | False              | False        | True         | True         |
| Renderers de traînée                                                      | 1                  | 2            | 4            | 8            |
| Renderers de ligne                                                       | 1                  | 2            | 4            | 8            |
| Tissus                                                           | 0                  | 1            | 1            | 1            |
| Nombre total de vertices de tissu                                                   | 0                  | 25           | 50           | 100          |
| Colliders de physique                                                   | 0                  | 1            | 4            | 4            |
| Rigidbodies de physique                                             | 0                  | 2            | 4            | 8            |
| Contacts de physique                                               | 0                  | 4            | 8            | 16           |

1. La taille des limites est donnée en mètres (m).
2. Le classement "Moyen" n'a pas de limites spécifiques pour chaque statistique, mais est utilisé comme classement de base si une statistique dépasse le classement "Bon".
3. Les autres statistiques n'ont pas de limites spécifiques et sont utilisées comme référence pour déterminer le classement global de performance de l'avatar.

N'oubliez pas que ces limites peuvent varier en fonction des performances réelles de la plate-forme VRChat et des mises à jour ultérieures du système de classement de performances.