---
title: "Rangs de Performance"
description: "Le Système de Classement des Performances des Avatars vous permet de voir dans quelle mesure l'avatar d'un utilisateur affecte les performances en analysant les composants présents sur cet avatar. Vous pouvez également l'utiliser sur votre propre avatar pour évaluer ses performances."
---

Le présent système vise à informer les utilisateurs des composants les plus lourds en termes de performances sur leurs avatars et à offrir des conseils de base sur les éléments à prendre en compte lors de l'optimisation de leur avatar.

Il est également utilisé pour alimenter le système de [Classement Minimum de Performance Affichée](/avatars/avatar-performance-ranking-system#section-minimum-displayed-performance-rank), qui permet aux utilisateurs de décider quels avatars ils souhaitent afficher en fonction de leur classement de performances.

**Ce système ne prétend pas être l'autorité suprême en matière de performances des avatars**, mais il constitue un bon guide général pour indiquer si un avatar nécessite un peu plus de travail pour être performant.
:::danger Les rangs de performance ne sont pas une vérité absolue !

Bien que le système de classement des performances fasse de son mieux pour évaluer le scénario "pire cas" des performances d'un avatar, il existe de nombreuses façons qu'un avatar bien optimisé apparaisse comme étant de "Très Mauvaise" qualité, tandis qu'un avatar qui demande beaucoup de ressources en termes de FPS pourrait être classé comme "Excellent".

Pour les techniciens : le système de classement des performances est basé sur une analyse statique des propriétés de l'avatar, sans tenir compte de facteurs tels que les animateurs, les shaders, la résolution des textures, les lumières pixelisées et bien d'autres. *Cependant*, il constitue un excellent test de détection des avatars problématiques dans 95 % des cas !
:::

## Version Courte
**Visez le rang "Bon".** Si vous n'y parvenez pas, **"Moyen" est tout à fait acceptable.**

La création d'avatars est déjà difficile, et la création d'avatars optimisés l'est encore plus. C'est une compétence qui prend beaucoup de temps à développer !

N'oubliez pas que de nombreux événements, groupes et lieux dans VRChat peuvent vous demander de changer d'avatar si vous apparaissez avec un avatar de "Très Mauvaise" qualité. Par conséquent, même si vous choisissez d'utiliser un avatar de "Très Mauvaise" qualité dans des situations restreintes avec vos amis, assurez-vous d'en avoir un autre prévu pour les situations avec plus de personnes.

Votre avatar affecte le framerate de tout le monde, donc soyez conscient de l'impact de vos choix sur l'expérience des autres. Sinon, ils pourraient vous voir sous la forme de votre Fallback !
## Icônes de Classement de Performance
Lorsque vous ouvrez votre Menu Rapide, vous verrez des icônes apparaître au-dessus des noms des utilisateurs.

Les rangs sont les suivants :

| Icône                                                  | Classement de Performance | Description                                                                                                                                                                       |
|-------------------------------------------------------|---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ![image](/img/avatars/performance-rank/excellent.png) | Excellent                 | C'est aussi bien que possible ! Le rang "Etoile d'Or sur le Frigo".                                                                                                               |
| ![image](/img/avatars/performance-rank/good.png)      | Bon                       | Assez bien ! Un excellent objectif à viser.                                                                                                                                       |
| ![image](/img/avatars/performance-rank/medium.png)    | Moyen                     | Ne vous laissez pas tromper par le nom, "Moyen" est tout à fait correct. Si vous êtes à ce niveau et que vous ne souhaitez pas aller plus loin, vous êtes bien.                |
| ![image](/img/avatars/performance-rank/poor.png)      | Mauvais                   | Pourrait utiliser quelques améliorations.                                                                                                                                         |
| ![image](/img/avatars/performance-rank/very-poor.png) | Très Mauvais              | Cet avatar présente de graves problèmes de performance. Étant donné que ce classement est sans limite, il est très probable que vos performances en souffrent si cet avatar est visible. |

## Consultation des Statistiques Détaillées de l'Avatar
Si vous cliquez sur un utilisateur avec votre Menu Rapide ouvert, vous remarquerez un nouveau bouton **"Afficher les Statistiques de l'Avatar"** à gauche, affichant l'icône du classement de performance de cet utilisateur.
:::caution

Cette image est obsolète ! Mise à jour en cours.
:::

![image](/img/avatars/avatar-performance-ranking-system-05c612d-image_4.png)

En cliquant sur cette icône, vous pouvez consulter les **Statistiques Détaillées de l'Avatar** pour cet avatar. Vous pouvez y accéder pour votre propre avatar en allant dans votre Menu Avatar, en cliquant sur l'un de vos avatars, puis en cliquant sur le bouton **"Statistiques de l'Avatar"** en bas à gauche de l'écran.
:::caution

Cette image est obsolète ! Mise à jour en cours.
:::

![avatar-performance-ranking-system-7a362c2-fixedTrogPerf.png](/img/avatars/avatar-performance-ranking-system-7a362c2-fixedTrogPerf.png)

Lorsque vous cliquez sur le bouton **"Statistiques de l'Avatar"**, une fenêtre s'affiche avec les détails de l'avatar que vous regardez, ou de votre propre avatar (si vous avez cliqué sur le bouton dans l'onglet Avatar).
:::caution

Cette image est obsolète ! Mise à jour en cours.
:::

<iframe src='https://gfycat.com/ifr/ImpossibleFarawayLamprey?hd=1' frameborder='0' scrolling='no' allowfullscreen width='640' height='506'></iframe>

La couleur du texte correspond au rang auquel la statistique particulière "fait baisser" le classement.

Vous verrez également un avant et un après sous la forme des lignes "Original" et "Filtré pour les Performances". Si vous utilisez le système de [Classement Minimum de Performance Affichée](/avatars/avatar-performance-ranking-system#section-minimum-displayed-performance-rank), vous pouvez voir les statistiques avant et après que le système ait supprimé des composants. Dans le cas où le système de Classement Minimum de Performance Affichée bloque un avatar pour des raisons de performances, vous ne verrez que les statistiques originales.

Dans l'exemple ci-dess

us, les éclairages (Lights) et les systèmes de particules (Particle Systems) sont désactivés car ils dépassent la limite définie. Comme les systèmes de particules utilisent au moins un matériau chacun, le nombre de matériaux des systèmes de particules est également soustrait à l'avatar avant le filtrage.

Vous pouvez également voir que nous fournissons un lien vers notre **Documentation**, notamment nos [Conseils d'Optimisation des Avatars](/avatars/avatar-optimizing-tips).
## Statistiques de Classement de Performance de l'Avatar
Voici une liste de toutes les statistiques prises en compte par le système et leur description.

Les statistiques en gras entraîneront le blocage complet de l'avatar si elles dépassent le Classement de Performance Minimum Affichée. Si d'autres statistiques (à l'exception de la taille des limites) dépassent le Classement de Performance Minimum Affichée, seuls certains composants de l'avatar seront bloqués. Les composants liés aux statistiques dépassées seront supprimés.

Par exemple, si le Classement de Performance Minimum Affichée est réglé sur "Mauvais", un avatar avec 9 Renderers de Traînée (Trails) (Classement de Performance "Très Mauvais") sera affiché avec tous ses Renderers de Traînée supprimés. Consultez [Classement Minimum de Performance Affichée](/avatars/avatar-performance-ranking-system#section-minimum-displayed-performance-rank) pour plus d'informations.

| Qualité de l'Avatar              | Description                                                                                                                       |
| --------------------------------| ---------------------------------------------------------------------------------------------------------------------------------------- |
| Polygones                        | Nombre de polygones du modèle, compté en triangles.                                                                        |
| Taille des Limites               | Taille totale de l'avatar. Si elle est très grande, l'utilisateur a probablement une grande animation sur l'avatar qui n'est pas visible en permanence. Note importante : la Taille des Limites n'entraînera pas le blocage de l'avatar même si elle est inférieure au Classement de Performance Minimum Affichée. |
| Mémoire des Textures             | Quantité de mémoire estimée utilisée par les textures de l'avatar. Ces textures occupent de l'espace à la fois dans la RAM du système et dans la mémoire de la carte vidéo.                                                     |
| Meshes à Armatures               | Nombre de Meshes à Armatures (Skinned Mesh) présents sur l'avatar.                                                                                     |
| Meshes                           | Nombre de Meshes (non à Armatures) présents sur l'avatar.                                                                                 |
| Emplacements de Matériaux        | Nombre d'emplacements de matériaux présents sur l'avatar. Les emplacements de matériaux sont les emplacements sur le maillage où vous placez les matériaux. Ce sont eux qui comptent pour la création des sous-maillages, ce qui entraîne d'autres appels de dessin. Gardez à l'esprit que les systèmes de particules utiliseront un emplacement de matériaux, les systèmes de particules avec traînées utiliseront deux emplacements et les Renderers de Ligne utiliseront un emplacement de matériaux. |
| Composants Dynamic Bone          | Nombre de scripts Dynamic Bone présents sur l'avatar.                                                                                        |
| Transformations Dynamic Bone     | Nombre de transformations animées par un script Dynamic Bone donné sur l'avatar.                                                        |
| Composants Dynamic Bone Collider | Nombre de scripts Dynamic Bone Collider présents sur l'avatar.                                                                               |
| Vérification des Collisions Dynamic Bone | Nombre total de transformations Dynamic Bone affectées par les scripts Dynamic Bone Collider sur l'avatar. Cela peut compter plusieurs fois les transformations, car une seule transformation peut être affectée par plusieurs colliders. |
| Composants PhysBones             | Nombre de composants PhysBone présents sur l'avatar.                                                                                          |
| Transformations Affectées par les PhysBones | Nombre total de transformations affectées par les composants PhysBone sur l'avatar.                                                          |
| Colliders PhysBones              | Nombre de scripts de collider PhysBone présents sur l'avatar.                                                                                    |
| Vérification des Collisions PhysBones | Somme du nombre de transformations PhysBone que chaque collider peut affecter. Cela peut compter plusieurs fois les transformations, car une seule transformation peut être affectée par plusieurs colliders. |
| Contacts Dynamics de l'Avatar    | Nombre de Contacts Dynamics de l'avatar.                                                                                     |
| Animateurs                       | Nombre d'animateurs présents sur l'avatar. Note importante : il y en aura toujours au moins 1 en raison de l'animateur racine qui est compté. Cela signifie que pour le rang "Excellent", vous ne pouvez avoir aucun autre animateur. |
| Os                               | Nombre d'os dans la structure de l'avatar.                                                                                                 |
| Lumières                         | Nombre de composants Light présents sur l'avatar.                                                                                            |
| Systèmes de Particules           | Nombre de composants Particle System présents sur l'avatar.                                                                                   |
| Particules Actives Totales       | Somme de maxParticles pour tous les systèmes de particules de l'avatar.                                                                        |
| Polys Actifs de Particules Mesh  | Nombre total de polygones de Mesh Particles émis par

 les systèmes de particules actifs. Autrement dit, maxEmission * meshParticleVerts. |
| Traînées de Particules Activées  | Si des systèmes de particules sur l'avatar ont des traînées activées, ceci sera vrai.                                                   |
| Collisions de Particules Activées | Si des systèmes de particules sur l'avatar ont des collisions de particules activées, ceci sera vrai.                                                |
| Renderers de Traînées            | Nombre de Renderers de Traînées (Trail Renderers) présents sur l'avatar.                                                                                             |
| Renderers de Ligne               | Nombre de Renderers de Ligne (Line Renderers) présents sur l'avatar.                                                                                              |
| Tissus                           | Nombre total de composants Cloth présents sur l'avatar.                                                                                     |


## Classes de Performance de l'Avatar - Limites Maximales par Classement
Ci-dessous, vous trouverez les limites pour chaque Classement de Performance. Si vous dépassez ces chiffres pour une catégorie, vous serez classé dans la catégorie supérieure.

Par exemple (sur PC), si votre avatar a 2 Meshes à Armatures, votre avatar sera classé comme "Bon", car cela dépasse la note "Excellent", mais ne dépasse pas la note "Bon".

:::caution Tous les GameObjects et Composants sont comptés !

Tous les GameObjects et Composants, **y compris ceux qui sont actuellement désactivés**, sont pris en compte pour le Classement de Performance de l'Avatar.
:::

:::caution Mesh Read/Write Désactivé

Si vous désactivez Mesh Read/Write (lecture/écriture) sur **n'importe quel** Mesh (y compris les systèmes de particules) de l'avatar, le nombre de "Polygones" sera remplacé par "Mesh Read/Write Désactivé" et le Classement de Performance de l'Avatar sera immédiatement rétrogradé en "Très Mauvais", quel que soit le nombre réel de triangles sur l'avatar.

Le SDK vous avertit de cela et vous demandera de le corriger avant de télécharger l'avatar.
:::

## Limites sur PC
Sur PC, le Classement de Performance Minimum Affichée par défaut est réglé sur "Très Mauvais". **Actuellement, aucun avatar ne sera bloqué par défaut en raison du classement de performance sur PC, sauf si vous avez activé le système [Classement de Performance Minimum Affichée](/avatars/avatar-performance-ranking-system#section-minimum-displayed-performance-rank).**

Les triangles (polygones) sont un cas un peu particulier : si vous avez 32 000 triangles ou moins, vous serez classé "Excellent". Tout nombre supérieur à 32 000 mais inférieur à 70 001 sera classé "Bon" (à moins qu'une autre statistique ne vous fasse descendre en dessous). Si vous dépassez 70 000 polygones, l'avatar sera immédiatement classé "Très Mauvais".

| Qualité de l'Avatar              | Excellent          | Bon         | Moyen       | Mauvais         |
|---------------------------------|-------------------|-------------|-------------|-----------------|
| Polygones                       | 32 000            | 70 000      | 70 000      | 70 000          |
| Taille des Limites<sup>1</sup>  | 2,5m x 2,5m x 2,5m | 4m x 4m x 4m | 5m x 6m x 5m | 5m x 6m x 5m    |
| Mémoire des Textures            | 40 Mo             | 75 Mo       | 110 Mo      | 150 Mo          |
| Meshes à Armatures              | 1                 | 2           | 8           | 16              |
| Meshes                          | 4                 | 8           | 16          | 24              |
| Emplacements de Matériaux       | 4                 | 8           | 16          | 32              |
| Composants Dynamic Bone         | 0                 | 4           | 16          | 32              |
| Transformations Dynamic Bone    | 0                 | 16          | 32          | 256             |
| Composants Dynamic Bone Collider| 0                 | 0           | 4           | 32              |
| Vérification des Collisions Dynamic Bone | 0                 | 0           | 8           | 256             |
| [PhysBones](/avatars/avatar-dynamics/physbones) Composants           | 4                 | 8           | 16          | 32              |
| [PhysBones](/avatars/avatar-dynamics/physbones) Transformations      | 16                | 64          | 128         | 256             |
| [PhysBones](/avatars/avatar-dynamics/physbones) Colliders            | 4                 | 8           | 16          | 32              |
| Vérification des Collisions [PhysBones](/avatars/avatar-dynamics/physbones)   | 32                | 128         | 256         | 512             |
| Contacts Dynamics de l'Avatar   | 8                 | 16          | 24          | 32              |
| Animateurs                     | 1                 | 4           | 16          | 32              |
| Os                             | 75                | 150         | 256         | 400             |
| Lumières                       | 0                 | 0           | 0           | 1               |
| Systèmes de Particules         | 0                 | 4           | 8           | 16              |
| Particules Actives Totales     | 0                 | 300         | 1000        | 2500            |
| Polys Actifs de Particules Mesh | 0                 | 1000        | 2000        | 5000            |
| Traînées de Particules Activées | Faux              | Faux        | Vrai        | Vrai            |
| Collisions de Particules Activées | Faux              | Faux        | Vrai        | Vrai            |
| Renderers de Traînées           | 1                 | 2           | 4           | 8               |
| Renderers de Ligne              | 1                 | 2           | 4           | 8               |
| Tissus                         | 0                 | 1           | 1           | 1               |
| Total des Sommets de Tissu     | 0                 | 50          | 100         | 200             |
| Colliders Physiques            | 0                 | 1           | 8           | 8               |
| Rigidbodies Physiques          | 0                 | 1           | 8           | 8               |
| Joints Physiques               | 0                 | 0           | 4           | 8               |
| Effets Audio                   | 32                | 64          | 128         | 256             |
| Sources Audio                  | 32                | 64          | 128         | 256             |
| Sources Audio en 3D            | 0                 | 16          | 32          | 64              |
| Bande Passante Audio           | 20 kbps           | 40 kbps     | 60 kbps     | 100 kbps        |

1 : En raison des limitations de Unity, les limites des Tailles ne sont pas exactes. Les échelles de plus de 10 sur n'importe quel axe peuvent provoquer des problèmes avec l'avatar. Assurez-vous de rester en dessous de cette valeur ! C'est toutefois un bon objectif pour les dimensions de l'avatar. Pour de meilleurs résultats, essayez de rester à une taille inférieure à 4m x 4m x 4m.

## Limites sur Quest
Sur Quest, les performances sont plus limitées, donc le Classement de Performance Minimum Affichée par défaut est réglé sur "Moyen". **Tout avatar classé "Très Mauvais" sur Quest ne sera pas autorisé à charger par défaut.**

| Qualité de l'Avatar              | Excellent          | Bon         | Moyen       | Mauvais        |
|---------------------------------|-------------------|-------------|-------------|----------------|
| Polygones                       | 25 000            | 50 000      | 50 000      | 50 000         |
| Taille des Limites<sup>1</sup>  | 2,5m x 2,5m x 2,5m | 3m x 3m x 3m | 3m x 3m x 3m | 3m x 3m x 3m   |
| Mémoire des Textures            | 40 Mo             | 60 Mo       | 80 Mo       | 100 Mo         |
| Meshes à Armatures              | 1                 | 2           | 8           | 16             |
| Meshes                          | 4                 | 6           | 12          | 18             |
| Emplacements de Matériaux       | 4                 | 6           | 12          | 16             |
| Composants Dynamic Bone         | 0                 | 2           | 8           | 16             |
| Transformations Dynamic Bone    | 0                 | 8           | 16          | 128            |
| Composants Dynamic Bone Collider| 0                 | 0           | 2           | 16             |
| Vérification des Collisions Dynamic Bone | 0                 | 0           | 4           | 128            |
| [PhysBones](/avatars/avatar-dynamics/physbones) Composants           | 4                 | 6           | 12          | 16             |
| [PhysBones](/avatars/avatar-dynamics/physbones) Transformations      | 12                | 32          | 64          | 128            |
| [PhysBones](/avatars/avatar-dynamics/physbones) Colliders            | 4                 | 6           | 12          | 16             |
| Vérification des Collisions [PhysBones](/avatars/avatar-dynamics/physbones)   | 16                | 32          | 64          | 128            |
| Contacts Dynamics de l'Avatar   | 6                 | 12          | 18          | 24             |
| Animateurs                     | 1                 | 2           | 8           | 16             |
| Os                             | 50                | 100         | 128         | 200            |
| Lumières                       | 0                 | 0           | 0           | 0              |
| Systèmes de Particules         | 0                 | 2           | 4           | 8              |
| Particules Actives Totales     | 0                 | 100         | 500         | 1000           |
| Polys Actifs de Particules Mesh | 0                 | 500         | 1000        | 2000           |
| Traînées de Particules Activées | Faux              | Vrai        | Vrai        | Vrai           |
| Collisions de Particules Activées | Faux              | Vrai        | Vrai        | Vrai           |
| Renderers de Traînées           | 1                 | 2           | 4           | 8              |
| Renderers de Ligne              | 1                 | 2           | 4           | 8              |
| Tissus                         | 0                 | 0           | 0           | 0              |
| Total des Sommets de Tissu     | 0                 | 0           | 0           | 0              |
| Colliders Physiques            | 0                 | 0           | 4           | 4              |
| Rigidbodies Physiques          | 0                 | 0           | 4           | 4              |
| Joints Physiques               | 0                 | 0           | 2           | 4              |
| Effets Audio                   | 32                | 64          | 128         | 256            |
| Sources Audio                  | 32                | 64          | 128         | 256            |
| Sources Audio en 3D            | 0                 | 8           | 16          | 32             |
| Bande Passante Audio           | 20 kbps           | 40 kbps     | 60 kbps     | 100 kbps       |

1 : En raison des limitations de Unity, les limites des Tailles ne sont pas exactes. Les échelles de plus de 10 sur n'importe quel axe peuvent provoquer des problèmes avec l'avatar. Assurez-vous de rester en dessous de cette valeur ! C'est toutefois un bon objectif pour les dimensions de l'avatar. Pour de meilleurs résultats, essayez de rester à une taille inférieure à 3m x 3m x 3m.

## Limites sur Quest 2
Sur Quest 2, les performances sont meilleures que sur Quest, mais toujours limitées, donc le Classement de Performance Minimum Affichée par défaut est réglé sur "Moyen". **Tout avatar classé "Très Mauvais" sur Quest 2 ne sera pas autorisé à charger par défaut.**

| Qualité de l'Avatar              | Excellent          | Bon         | Moyen       | Mauvais        |
|---------------------------------|-------------------|-------------|-------------|----------------|
| Polygones                       | 25 000            | 70 000      | 70 000      | 70000         |
| Taille des Limites<sup>1</sup>  | 2,5m x 2,5m x 2,5m | 3m x 3m x 3m | 3m x 3m x 3m | 3m x 3m x 3m   |
| Mémoire des Textures            | 40 Mo             | 75 Mo       | 110 Mo      | 150 Mo         |
| Meshes à Armatures              | 1                 | 2           | 8           | 16             |
| Meshes                          | 4                 | 8           | 16          | 24             |
| Emplacements de Matériaux       | 4                 | 8           | 16          | 32             |
| Composants Dynamic Bone         | 0                 | 4           | 16          | 32             |
| Transformations Dynamic Bone    | 0                 | 16          | 32          | 256            |
| Composants Dynamic Bone Collider| 0                 | 0           | 4           | 32             |
| Vérification des Collisions Dynamic Bone | 0                 | 0           | 8           | 256            |
| [PhysBones](/avatars/avatar-dynamics/physbones) Composants           | 4                 | 8           | 16          | 32             |
| [PhysBones](/avatars/avatar-dynamics/physbones) Transformations      | 16                | 64          | 128         | 256            |
| [PhysBones](/avatars/avatar-dynamics/physbones) Colliders            | 4                 | 8           | 16          | 32             |
| Vérification des Collisions [PhysBones](/avatars/avatar-dynamics/physbones)   | 32                | 128         | 256         | 512            |
| Contacts Dynamics de l'Avatar   | 8                 | 16          | 24          | 32             |
| Animateurs                     | 1                 | 4           | 16          | 32             |
| Os                             | 75                | 150         | 256         | 400            |
| Lumières                       | 0                 | 0           | 0           | 1              |
| Systèmes de Particules         | 0                 | 4           | 8           | 16             |
| Particules Actives Totales     | 0                 | 300         | 1000        | 2500           |
| Polys Actifs de Particules Mesh | 0                 | 1000        | 2000        | 5000           |
| Traînées de Particules Activées | Faux              | Faux        | Vrai        | Vrai           |
| Collisions de Particules Activées | Faux              | Faux        | Vrai        | Vrai           |
| Renderers de Traînées           | 1                 | 2           | 4           | 8              |
| Renderers de Ligne              | 1                 | 2           | 4           | 8              |
| Tissus                         | 0                 | 1           | 1           | 1              |
| Total des Sommets de Tissu     | 0                 | 50          | 100         | 200            |
| Colliders Physiques            | 0                 | 1           | 8           | 8              |
| Rigidbodies Physiques          | 0                 | 1           | 8           | 8              |
| Joints Physiques               | 0                 | 0           | 4           | 8              |
| Effets Audio                   | 32                | 64          | 128         | 256            |
| Sources Audio                  | 32                | 64          | 128         | 256            |
| Sources Audio en 3D            | 0                 | 16          | 32          | 64             |
| Bande Passante Audio           | 20 kbps           | 40 kbps     | 60 kbps     | 100 kbps       |

1 : En raison des limitations de Unity, les limites des Tailles ne sont pas exactes. Les échelles de plus de 10 sur n'importe quel axe peuvent provoquer des problèmes avec l'avatar. Assurez-vous de rester en dessous de cette valeur ! C'est toutefois un bon objectif pour les dimensions de l'avatar. Pour de meilleurs résultats, essayez de rester à une taille inférieure à 3m x 3m x 3m.

## Limites sur PC et Quest
Sur PC et Quest, certaines statistiques sont les mêmes, mais d'autres sont différentes. Voici les limites communes entre les deux plates-formes :

| Qualité de l'Avatar              | Excellent          | Bon         | Moyen       | Mauvais         |
|---------------------------------|-------------------|-------------|-------------|-----------------|
| Meshes à Armatures              | 1                 | 2           | 8           | 16              |
| Emplacements de Matériaux       | 4                 | 8           | 16          | 32              |
| Animateurs                     | 1                 | 4           | 16          | 32              |
| Systèmes de Particules         | 0                 | 4           | 8           | 16              |
| Renderers de Traînées           | 1                 | 2           | 4           | 8               |
| Renderers de Ligne              | 1                 | 2           | 4           | 8               |
| Particules Actives Totales     | 0                 | 300         | 1000        | 2500            |
| Traînées de Particules Activées | Faux              | Faux        | Vrai        | Vrai            |
| Collisions de Particules Activées | Faux              | Faux        | Vrai        | Vrai            |
| Tissus                         | 0                 | 1           | 1           | 1               |

Le reste des statistiques varie en fonction de la plate-forme.

:::caution

Les statistiques fournies ici sont basées sur les limites de performance du SDK à la date de publication. Ces limites sont susceptibles d'être mises à jour à l'avenir en fonction des améliorations de la technologie et des capacités des plates-formes.

:::

J'espère que cela vous aide à mieux comprendre les limites et les classes de performance de l'avatar ! N'hésitez pas à poser d'autres questions si vous en avez besoin.