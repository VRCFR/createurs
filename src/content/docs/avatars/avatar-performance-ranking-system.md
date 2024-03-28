---
title: "Performance d'avatars"
description: "Quel sont les performances d'avatars sur VRChat"
---

:::note[Vidéo de Tupper]
je vous conseil cette vidéo qui explique comment fonctionne l'optimisation d'avatar et comment le faire ! 
:::caution[Langue]
La vidéo est que en anglais, en vue de la durée de la vidéo, nous n'avons pas sous-titré toutes les informations contenue dedans

<iframe src="https://www.youtube.com/embed/JFBQeNON64Q" title="Furality Sylva - Where'd My Frames Go? Avatar Performance in VRChat" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
</iframe>
:::



## Niveaux de performance

Le système de classement de performance des avatars vous permet de voir dans quelle mesure l'avatar d'un utilisateur affecte les performances grâce à l'analyse des composants de cet avatar. Vous pouvez également l'utiliser sur votre propre avatar pour savoir à quel point il est performant.

Ce système est conçu pour informer les utilisateurs des composants les plus lourds en termes de performances sur leurs avatars et leur offrir des conseils de base sur ce qu'il faut examiner lors de l'optimisation de leur avatar.

Il est également utilisé pour gérer le système [Classement de Performance Minimum Affiché](/avatars/avatar-performance-ranking-system#section-minimum-displayed-performance-rank), qui permet aux utilisateurs de décider quels avatars ils souhaitent afficher en fonction de leur classement de performance.

**Ce système n'a pas vocation à être une autorité incontestable sur les performances des avatars**, mais c'est un bon guide général pour indiquer si un avatar nécessite un peu plus de travail pour être performant.
:::danger[Les classements de performance ne sont pas définitifs !]

Bien que le système de classement de performance fasse de son mieux pour évaluer le "pire scénario" en termes de performances d'un avatar, il existe de nombreuses façons qu'un avatar bien optimisé apparaisse comme "Très Médiocre" et qu'un avatar qui consomme beaucoup de FPS obtienne un classement "Excellent".

Pour les techniquement avertis : le système de classement de performance est basé sur une analyse statique des propriétés de l'avatar, sans tenir compte d'aspects tels que les animateurs, les shaders, la résolution des textures, les lumières pixelisées et de nombreux autres facteurs. *Cependant*, il sert généralement de très bon test pour détecter les avatars problématiques 95% du temps !
:::

## Version courte
**Visez le classement "Bon".** Si vous n'y parvenez pas, le niveau "Moyen" est tout à fait acceptable.

La création d'avatars est déjà difficile, et la création d'avatars optimisés l'est encore plus. C'est une compétence qui demande beaucoup de temps pour être maîtrisée !

Gardez à l'esprit que de nombreux événements, groupes et lieux dans VRChat peuvent vous demander de changer d'avatar si vous apparaissez avec un avatar "Très Médiocre". Par conséquent, même si vous choisissez d'utiliser un avatar "Très Médiocre" dans des situations restreintes avec vos amis, assurez-vous d'avoir également un avatar destiné à être utilisé dans des instances avec plus de personnes.

Votre avatar affecte le taux de rafraîchissement de tout le monde, donc soyez conscient de la façon dont vos choix affectent l'expérience des autres. Sinon, ils pourraient vous voir en tant qu'avatar de secours (Fallback) !

## Icônes de classement de performance
Lorsque vous ouvrez votre menu rapide, des icônes apparaissent au-dessus des plaques d'identité des utilisateurs.

Les classements sont les suivants :

| Icône                                                  | Classement de Performance | Description                                                                                                                                                                       |
|-------------------------------------------------------|--------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ![image](/img/avatars/performance-rank/excellent.png) | Excellent                | C'est aussi bien que possible ! Le classement "Étoile d'or sur le frigo".                                                                                                          |
| ![image](/img/avatars/performance-rank/good.png)      | Good (Bon)                     | Assez bon ! Un excellent objectif à atteindre.                                                                                                                                    |
| ![image](/img/avatars/performance-rank/medium.png)    | Medium (Moyens)                   | Ne vous laissez pas tromper par le nom, le classement "Moyen" est tout à fait acceptable. Si vous êtes ici et que vous ne voulez pas aller plus loin, c'est bien.                 |
| ![image](/img/avatars/performance-rank/poor.png)      | Poor (Médiocre)                 | Pourrait nécessiter quelques ajustements.                                                                                                                                        |
| ![image](/img/avatars/performance-rank/very-poor.png) | Very Poor (Très Médiocre)              | Cet avatar présente de sérieux problèmes de performances. Comme ce classement n'est pas borné, il est fort probable que vos performances en souffrent lorsque cet avatar est visible. |

## Affichage des statistiques détaillées de l'avatar

Si vous cliquez sur un utilisateur avec votre menu rapide ouvert, vous remarquerez un nouveau bouton **"Afficher les statistiques de l'avatar"** sur le côté gauche, affichant l'icône du classement de performance de cet utilisateur.
:::caution

Cette image est obsolète ! Mise à jour en attente.
:::

![image](/img/avatars/avatar-performance-ranking-system-05c612d-image_4.png)

En cliquant sur cette icône, vous pouvez afficher les **statistiques détaillées de l'avatar** correspondant. Vous pouvez accéder à ces statistiques pour votre propre avatar en allant dans le menu Avatar, en cliquant sur l'un de vos avatars, puis en cliquant sur le bouton **Avatar Stats** en bas à gauche de l'écran.
:::caution

Cette image est obsolète ! Mise à jour en attente.
:::

![avatar-performance-ranking-system-7a362c2-fixedTrogPerf.png](/img/avatars/avatar-performance-ranking-system-7a362c2-fixedTrogPerf.png)

Lorsque vous cliquez sur le bouton **Avatar Stats**, une fenêtre pop-up s'affiche avec les détails de l'avatar que vous regardez ou de votre propre avatar (si vous avez cliqué sur le bouton dans l'onglet Avatar).
:::caution

Cette image est obsolète ! Mise à jour en attente.
:::

<iframe src='https://gfycat.com/ifr/ImpossibleFarawayLamprey?hd=1' frameborder='0' scrolling='no' allowfullscreen width='640' height='506'></iframe>

La couleur du texte correspond au classement qui fait "baisser" le classement global en raison de cette statistique particulière.

Vous verrez également un "avant et après" sous forme de lignes "Original" et "Perf Filtered". Si vous utilisez le système [Classement de Performance Minimum Affiché](/avatars/avatar-performance-ranking-system#section-minimum-displayed-performance-rank), vous pouvez voir les statistiques avant et après que le système ait supprimé des composants. Dans le cas où le système de classement de performance minimum bloque un avatar pour des raisons de performances, vous ne verrez que les statistiques originales.

Dans l'exemple ci-dessus, les Lights (lumières) et les Particle Systems (systèmes de particules) sont désactivés car la limite définie est dépassée. Comme les Particle Systems utilisent au moins un matériau chacun, le nombre de matériaux issus des Particle Systems est également soustrait de l'avatar avant le filtrage.

Vous pouvez également voir que nous fournissons un lien vers notre **Documentation**, en particulier nos [Conseils d'optimisation des avatars](/avatars/avatar-optimizing-tips).

## Statistiques de classement de performance des avatars
Voici une liste de toutes les statistiques prises en compte par le système et leur description.

Les statistiques en gras bloqueront complètement l'avatar s'ils dépassent le classement de performance minimum affiché. Si d'autres statistiques (à l'exception des limites) dépassent le classement de performance minimum affiché, l'avatar sera partiellement bloqué. Les composants liés aux statistiques dépassées seront supprimés.

Par exemple, avec le classement de performance minimum affiché réglé sur "Médiocre", un avatar ayant 9 renderers de trails (Très Médiocre) sera affiché avec tous ses renderers de trails supprimés. Référez-vous à la section [Classement de Performance Minimum Affiché](/avatars/avatar-performance-ranking-system#section-minimum-displayed-performance-rank) pour plus d'informations.

| Qualité de l'Avatar        | Description de la Qualité                                                                                                                 |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Polygones                  | Le nombre de polygones du modèle, comptés en triangles.                                                                                   |
| Taille des Limites         | La taille totale de l'avatar. Si elle est très grande, cet utilisateur a probablement une grande animation sur l'avatar qui n'est pas visible tout le temps.<br/>Note importante : La taille des limites n'entraînera pas le blocage de l'avatar, même si elle est inférieure au paramètre "Rang de Performance Minimale Affichée". |
| Mémoire des Textures       | La quantité de mémoire estimée être utilisée par les textures de l'avatar. Ces textures occupent de l'espace dans la RAM du système et dans la mémoire de la carte vidéo. |
| Meshs Skinnés              | Le nombre de composants Skinned Mesh Renderer sur l'avatar.                                                                               |
| Meshs Basiques             | Le nombre de composants Mesh Renderer (non skinnés) sur l'avatar.                                                                        |
| Emplacements de Matériaux  | Le nombre d'emplacements de matériaux sur l'avatar. Ce sont les emplacements sur le mesh où vous insérez les matériaux. C'est ce qui compte pour la création de Submesh, ce qui entraîne plus d'appels de rendu. Gardez à l'esprit que les systèmes de particules utiliseront un emplacement de matériau, les systèmes de particules avec des traînées en utilisent deux, et les Line Renderers utilisent un emplacement de matériau. |
| Composants PhysBones       | Le nombre de composants PhysBone sur l'avatar.                                                                                            |
| Transforms Affectés par PhysBones | Le nombre total de transforms affectés par les composants PhysBones sur l'avatar.                                                        |
| Colliders PhysBones        | Le nombre de scripts de collider PhysBone sur l'avatar.                                                                                   |
| Compte de Vérification de Collision PhysBones | La somme de combien de transforms PhysBone chaque collider peut affecter. Cela peut compter des transforms deux fois ou plus, car un transform peut être affecté par plusieurs colliders. |
| Contacts de Dynamique d'Avatar | Le nombre de Contacts de Dynamique d'Avatar sur l'avatar.                                                                                |
| Animateurs                 | Le nombre d'Animateurs sur l'avatar. Note importante : Il y en aura toujours au moins 1 à cause de l'animateur racine compté. Cela signifie que pour le rang Excellent, vous ne pouvez pas avoir d'animateurs supplémentaires. |
| Os                         | Le nombre d'Os dans le rig de l'avatar.                                                                                                  |
| Lumières                   | Le nombre de composants Light sur l'avatar.                                                                                              |
| Systèmes de Particules     | Le nombre de composants Système de Particules sur l'avatar.                                                                              |
| Total de Particules Actives| La somme de maxParticles à travers tous les systèmes de particules sur l'avatar.                                                          |
| Polygones Actifs de Particules de Mesh | Le nombre total de polygones de Particules de Mesh émises par les Systèmes de Particules actifs. En d'autres termes, maxEmission * meshParticleVerts. |
| Traînées de Particules Activées | Si des Systèmes de Particules sur l'avatar ont des Traînées de Particules activées, cela sera Vrai.                                       |
| Collision de Particules Activée | Si des Systèmes de Particules sur l'avatar ont la Collision de Particules activée, cela sera Vrai.                                        |
| Traîneurs de Piste        | Le nombre de Traîneurs de Piste sur l'avatar.                                                                                            |
| Traîneurs de Ligne         | Le nombre de Traîneurs de Ligne sur l'avatar.                                                                                            |
| Tissus                     | Le nombre total de composants Cloth sur l'avatar.                                                                                        |
| Composants d'Os Dynamiques | (Obsolète) Le nombre de scripts d'Os Dynamiques sur l'avatar.                                                                            |
| Transforms d'Os Dynamiques | (Obsolète) Le nombre de transforms animés par un script d'Os Dynamiques donné sur l'avatar.                                              |
| Colliders d'Os Dynamiques  | (Obsolète) Le nombre de scripts de Collider d'Os Dynamiques sur l'avatar.                                                                 |
| Compte de Vérification de Collision d'Os Dynamiques | (Obsolète) Le nombre total de transforms d'Os Dynamiques affectés par les scripts de Collider d'Os Dynamiques sur l'avatar. Cela peut compter des transforms deux fois ou plus, car un transform peut être affecté par plusieurs colliders. |                                                                                 |

## Avatar Performance Ranks - Valeurs maximales par classement

Ci-dessous, vous trouverez les limites pour chacun des classements de performance. Si vous dépassez ces nombres pour une catégorie quelconque, vous passerez au classement supérieur.

Par exemple (sur PC), si votre avatar a 2 Meshes animées, votre avatar sera classé comme "Bon", car cela dépasse le classement "Excellent", mais ne dépasse pas le classement "Bon".
:::caution[Tous les GameObjects et les composants sont pris en compte !]

Tous les GameObjects et les composants, **y compris ceux qui sont actuellement désactivés**, contribuent au classement de performance de l'avatar.
:::

:::caution[Mesh Read/Write désactivé]

Si vous désactivez Mesh Read/Write sur **n'importe quel** mesh de l'avatar (y compris les systèmes de particules), le nombre de "Polygones" affichera "Mesh Read/Write Disabled" et le classement de performance de l'avatar sera immédiatement rétrogradé à "Très Médiocre", indépendamment du nombre réel de triangles sur l'avatar.

Le SDK vous avertit de cela et vous demandera de le corriger avant de télécharger l'avatar.
:::

## Limites sur PC
Sur PC, le niveau de classement de performance minimum affiché par défaut est réglé sur "Très Médiocre". **Actuellement, aucun avatar ne sera bloqué par défaut en raison du classement de performance sur PC, sauf si vous avez activé le système [Classement de Performance Minimum Affiché](/avatars/avatar-performance-ranking-system#section-minimum-displayed-performance-rank).**

Les polygones sont un cas quelque peu spécial - si vous avez 32 000 polygones ou moins, vous serez classé "Excellent". Tout nombre supérieur à 32 000 mais inférieur à 70 001 sera classé "Bon" (sauf si une autre statistique vous fait descendre). Si vous dépassez 70 000 polygones, l'avatar sera immédiatement classé comme "Très Médiocre".

| Qualité de l'avatar                                                        | Excellent          | Bon         | Moyen       | Médiocre         |
|----------------------------------------------------------------------------| ------------------ | ----------- | ----------- | -------------- |
| Polygones                                                                  | 32 000             | 70 000      | 70 000      | 70 000         |
| Taille des limites<sup>1</sup>                                              | 2,5m x 2,5m x 2,5m | 4m x 4m x 4m | 5m x 6m x 5m | 5m x 6m x 5m   |
| Mémoire de texture                                                         | 40 Mo              | 75 Mo       | 110 Mo      | 150 Mo         |
| Meshes animées                                                             | 1                  | 2           | 8           | 16             |
| Meshes                                                                     | 4                  | 8           | 16          | 24             |
| Meshes Basique | 4 | 8 | 16 | 24 |
| Emplacements de matériaux                                                  | 4                  | 8           | 16          | 32             |
| Composants os dynamiques                                                   | 0                  | 4           | 16          | 32             |
| Transformations os dynamiques                                              | 0                  | 16          | 32          | 256            |
| Colliders os dynamiques                                                    | 0                  | 0           | 4           | 32             |
| Nombre de vérifications de collision des os dynamiques                     | 0                  | 0           | 8           | 256            |
| [PhysBones](/avatars/avatar-dynamics/physbones) Components                 | 4                  | 8           | 16          | 32             |
| [PhysBones](/avatars/avatar-dynamics/physbones) Affected Transforms        | 16                 | 64          | 128         | 256            |
| [PhysBones](/avatars/avatar-dynamics/physbones) Colliders                  | 4                  | 8           | 16          | 32             |
| Nombre de vérifications de collision des os physiques                      | 32                 | 128         | 256         | 512            |
| Contacts dynamiques de l'avatar                                            | 8                  | 16          | 24          | 32             |
| Animateurs                                                                 | 1                  | 4           | 16          | 32             |
| Os                                                                         | 75                 | 150         | 256         | 400            |
| Lumières                                                                   | 0                  | 0           | 0           | 1              |
| Systèmes de particules                                                     | 0                  | 4           | 8           | 16             |
| Particules actives au total                                               | 0                  | 300         | 1000        | 2500           |
| Polys actifs des Mesh Particles                                            | 0                  | 1000        | 2000        | 5000           |
| Trails de particules activés                                               | False              | False       | True        | True           |
| Collision de particules activée                                            | False              | False       | True        | True           |
| Renderers de trails                                                        | 1                  | 2           | 4           | 8              |
| Renderers de lignes                                                        | 1                  | 2           | 4           | 8              |
| Vêtements                                                                  | 0                  | 1           | 1           | 1              |
| Total Cloth Vertices                                                       | 0                  | 50          | 100         | 200            |
| Physics Colliders                                                          | 0                  | 1           | 8           | 8              |
| Physics Rigidbodies                                                        | 0                  | 1           | 8           | 8              |
| Sources audio                                                              | 1                  | 4           | 8           | 8              |

Note de bas de page :
1: La taille des limites est déterminée par la taille maximale de tous les composants de votre avatar. Les Trail Renderers et les Line Renderers ne sont pas pris en compte dans ce calcul.

## Limites sur Android
### Blocage du classement de performance par défaut
Sur Android (téléphones, tablettes et Meta Quest), le Rang de Performance Minimale Affichée est réglé par défaut sur Moyen. Cela signifie que vous ne verrez aucun avatar classé comme Médiocre ou Très Médiocre.

Vous pouvez régler votre niveau de blocage de classement de performance sur "Médiocre" pour permettre l'affichage des avatars "Médiocres". Cependant, vous ne pouvez pas régler votre niveau de blocage de classement de performance sur "Très Médiocre".

Par exemple, si un avatar sur Android dépasse 20 000 triangles (polygones), il ne s'affichera pas par défaut dans l'application. Ces avatars peuvent être forcés à s'afficher en cliquant sur chaque utilisateur et en cliquant sur "Afficher l'Avatar".

Il est important de noter **qu'il existe une limite maximale stricte sur les systèmes de [Dynamique d'Avatar](/avatars/avatar-dynamics) sur Android.** Elle ne peut pas être contournée en utilisant "Afficher l'Avatar". Voici la limite maximale :

- 8 composants [PhysBone](/avatars/avatar-dynamics/physbones)
- 64 transforms affectés par les [PhysBones](/avatars/avatar-dynamics/physbones)
- 16 [PhysBones](/avatars/avatar-dynamics/physbones) colliders
- 64 vérifications de collisions des [PhysBones](/avatars/avatar-dynamics/physbones)
- 16 [Avatar Dynamics Contacts](/avatars/avatar-dynamics/contacts)


Si cette limite est dépassée sur Android, tous les composants de Dynamique d'Avatar seront retirés de l'avatar, même si l'option "Afficher l'Avatar" est activée.

:::danger

**La fonctionnalité "Afficher l'Avatar" pour les avatars classés Très Médiocre pourrait être supprimée à l'avenir, et les avatars Très Médiocres pourraient être entièrement retirés d'Android.** Veuillez garder cela à l'esprit lors de la création d'avatars pour VRChat sur Android.
:::

| Qualité de l'avatar                                                              | Excellent          | Bon         | Moyen       | Médiocre      |
|----------------------------------------------------------------------------------| ------------------ | ----------- | ----------- | ------------- |
| Polygones                                                                        | 7 500              | 10 000      | 15 000      | 20 000        |
| Taille des limites<sup>1</sup>                                                  | 2,5m x 2,5m x 2,5m | 4m x 4m x 4m | 5m x 6m x 5m | 5m x 6m x 5m  |
| Mémoire de texture                                                               | 10 Mo              | 18 Mo       | 25 Mo       | 40 Mo         |
| Meshes animées                                                                   | 1                  | 1           | 2           | 2             |
| Meshes                                                                           | 1                  | 1           | 2           | 2             |
| Meshes Basiques                                                                   | 1                  | 1           | 2           | 2             |
| Emplacements de matériaux                                                        | 1                  | 1           | 2           | 4             |
| Animateurs                                                                       | 1                  | 1           | 1           | 2             |
| Os                                                                               | 75                 | 90          | 150         | 150           |
| Composants [PhysBones](/avatars/avatar-dynamics/physbones)<sup>2</sup>            | 0                  | 4           | 6           | 8             |
| [PhysBones](/avatars/avatar-dynamics/physbones) Transforms affectés<sup>2</sup>  | 0                  | 16          | 32          | 64            |
| [PhysBones](/avatars/avatar-dynamics/physbones) Colliders<sup>2</sup>             | 0                  | 4           | 8           | 16            |
| Nombre de vérifications de collisions des [PhysBones](/avatars/avatar-dynamics/physbones)<sup>2</sup> | 0                  | 16          | 32          | 64            |
| Contacts dynamiques de l'avatar                                                 | 2                  | 4           | 8           | 16            |
| Systèmes de particules                                                           | 0                  | 0           | 0           | 2             |
| Particules actives au total                                                     | 0                  | 0           | 0           | 200           |
| Polys actifs des Mesh Particles                                                  | 0                  | 0           | 0           | 400           |
| Trails de particules activés                                                     | False              | False       | False       | True          |
| Collision de particules activée                                                  | False              | False       | False       | True          |
| Renderers de trails                                                              | 0                  | 0           | 0           | 1             |
| Renderers de lignes                                                              | 0                  | 0           | 0           | 1             |

Note de bas de page :

1: La taille des limites est déterminée par la taille maximale de tous les composants de votre avatar. Les Trail Renderers et les Line Renderers ne sont pas pris en compte dans ce calcul.

2 : Si la valeur Très Médiocre est dépassée sur Android, quel que soit l'état actuel de l'option "Afficher l'Avatar" de l'avatar, tous les composants liés à la Dynamique d'Avatar seront retirés.

### Catégories supprimées
Les catégories suivantes sont désactivées sur Android car elles ne peuvent jamais apparaître sur les avatars :

  * Lumières
  * Tissus
  * Total de Vertices de Tissu
  * Colliders Physiques
  * Rigidbodies Physiques
  * Sources Audio
  * Composants d'Os Dynamiques
  * Transforms d'Os Dynamiques
  * Colliders d'Os Dynamiques
  * Compte de Vérification de Collision d'Os Dynamiques

Ces valeurs peuvent toujours apparaître dans les statistiques affichées dans l'application, mais elles seront toujours nulles.

## Classement minimum de performance affichée
Vous pouvez choisir de gérer les avatars en fonction de leur classement de performance. Cette option est disponible dans le menu "Options de performance", accessible en tant que bouton dans le coin supérieur droit de l'onglet "Sécurité" du menu principal.

Lorsque vous choisissez un classement de performance dans ce menu, tous les avatars qui sont en dessous de ce niveau auront leurs composants/affichage gérés comme décrit ci-dessous.

| Paramètre                                                                          | Description                                                                                                          |
| :-- |:---------------------------------------------------------------------------------------------------------------------|
| Polygones                                                                         | **Avatar remplacé par [Fallback](https://docs.vrchat.com/docs/avatar-fallback-system)**                     |
| Taille des limites                                                                | Aucun changement                                                                                                     |
| Mémoire de texture                                                                | **Avatar remplacé par [Fallback](https://docs.vrchat.com/docs/avatar-fallback-system)**                             |
| Meshes animées                                                                    | **Avatar remplacé par [Fallback](https://docs.vrchat.com/docs/avatar-fallback-system)**                             |
| Meshes                                                                            | **Avatar remplacé par [Fallback](https://docs.vrchat.com/docs/avatar-fallback-system)**                             |
| Meshs Basiques                                                                    | **Avatar remplacé par [Système de Remplacement](https://docs.vrchat.com/docs/avatar-fallback-system)**              |
| Emplacements de matériaux                                                         | **Avatar remplacé par [Fallback](https://docs.vrchat.com/docs/avatar-fallback-system)**                             |
| Composants, Transformations, Colliders, CollisionCheckCount ou Contacts des PhysBones (Avatar Dynamics)  | Tous les composants PhysBone, PhysBone Collider et Contact sont supprimés                                                       |
| Composants ou Transformations des Dynamic Bones                                    | Tous les composants Dynamic Bones sont supprimés                                                                                 |
| Composants ou Colliders des Dynamic Bones                                          | Tous les composants Dynamic Bone Collider sont supprimés                                                                         |
| Animators                                                                         | Tous les animateurs (à l'exception de l'animateur racine) sont supprimés                                                         |
| Os                                                                                | **Avatar remplacé par [Fallback](https://docs.vrchat.com/docs/avatar-fallback-system)**                             |
| Lumières                                                                          | Toutes les lumières sont supprimées                                                                                          |
| Systèmes de particules                                                            | Tous les systèmes de particules sont supprimés                                                                                 |
| Particules actives au total                                                       | Tous les systèmes de particules sont supprimés                                                                                 |
| Polys actifs des Mesh Particles                                                   | Tous les systèmes de particules sont supprimés                                                                                 |
| Trails de particules activés                                                      | Tous les systèmes de particules sont supprimés                                                                                 |
| Collision de particules activée                                                   | Tous les systèmes de particules sont supprimés                                                                                 |
| Renderers de trails                                                               | Tous les Trail Renderers sont supprimés                                                                                       |
| Renderers de lignes                                                               | Tous les Line Renderers sont supprimés                                                                                        |
| Vêtements                                                                         | Tous les composants Cloth sont supprimés                                                                                      |
| Nombre total de sommets des vêtements                                             | Tous les composants Cloth sont supprimés                                                                                      |
| Colliders de physique                                                             | Tous les colliders de physique sont supprimés                                                                                 |
| Rigidbodies de physique                                                           | Tous les rigidbodies de physique sont supprimés                                                                               |
| Sources audio                                                                      | Toutes les sources audio sont supprimées                                                                                     |

### Classement minimum de performance affichée sur PC
Sur VRChat pour PC, le classement minimum de performance affichée est réglé par défaut sur "Très Médiocre". Cela signifie que, par défaut, aucun avatar n'aura ses composants ou son affichage affecté pour des raisons de performance sur PC. Si vous souhaitez modifier cela, vous pouvez choisir entre les options "Moyen", "Médiocre" ou "Très Médiocre".

### Blocage du classement de performance de l'avatar sur Android
Sur VRChat pour Android, le blocage du classement de performance de l'avatar est réglé par défaut sur "Moyen". Vous pouvez choisir de le modifier pour le régler sur "Médiocre" afin de voir les avatars de ce rang, mais cela peut entraîner une baisse des performances.

Vous ne pouvez pas désactiver le système de blocage du classement de performance de l'avatar sur Quest. En d'autres termes, les avatars classés comme "Très Médiocres" auront toujours leur affichage géré par VRChat pour l'Oculus Quest, et pourraient ne pas s'afficher du tout.

Quel que soit le réglage que vous choisissez, si les limites des composants [Avatar Dynamics](/avatars/avatar-dynamics) sont dépassées sur Android, tous ces composants seront supprimés. En résumé, il existe une limite rigide pour les composants Avatar Dynamics sur les avatars Android.

### Annulation de l'affichage des avatars individuels
:::danger

**La fonctionnalité "Afficher l'avatar" pour les avatars classés "Très Médiocre" pourrait être supprimée à l'avenir, et les avatars classés "Très Médiocres" pourraient être complètement supprimés de Quest.** Veuillez garder cela à l'esprit lors de la création d'avatars pour VRChat sur l'Oculus Quest.
:::
Vous pouvez choisir de passer outre l'ensemble du système (et le système de Sécurité) en sélectionnant "Afficher l'Avatar" pour chaque utilisateur que vous souhaitez afficher.