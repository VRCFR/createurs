---
title: "Paramètres de l'animateur"
description: "Utilisation des paramètres d'animateur sur Unity"
sidebar:
    badge: 
        text: Mis à jour
        variant: tip
---
:::caution[Connaissances en Unity Requises]

Ce document est rédigé en supposant que vous avez quelques connaissances sur les [Animateurs Unity](https://docs.unity3d.com/2019.4/Documentation/Manual/class-AnimatorController.html).

:::

Ceci est une liste de Paramètres (**sensibles à la casse**) qui peuvent être ajoutés à n'importe quelle Couche Jouable (contrôleur d'animation) et modifiés sur toutes les Couches Jouables incluant ce paramètre. Les paramètres créés par l'utilisateur qui ne figurent pas dans cette liste existeront uniquement localement au sein de ce contrôleur d'animation et ne sont actuellement pas modifiables par l'avatar.

Vous devrez les ajouter à vos animateurs de Couches Jouables pour les utiliser. **Ils sont sensibles à la casse !**

:::danger[Ne pas créer d'impasse !]

Vous devez supposer que les valeurs des paramètres peuvent changer. Si vous "bloquez" vos animateurs, ce qui signifie que vous n'avez pas de "sortie" dans une branche particulière, vous risquez de vous retrouver avec un avatar défectueux.

:::
## Paramètres

| Nom                               | Description                                                  | Type        | Synchronisation   |
| ---------------------------------- | ------------------------------------------------------------ | ----------- | ----------------- |
| IsLocal                            | Vrai si l'avatar est porté localement, faux sinon            | Bool        | Aucune            |
| [Viseme](/avatars/animator-parameters#viseme-values)                             | [Index de visème Oculus](https://developer.oculus.com/documentation/unity/audio-ovrlipsync-viseme-reference) (`0-14`). Lors de l'utilisation de Jawbone/Jawflap, la plage est de `0-100` indiquant le volume  | Int         | Parole            |
| Voice                              | Volume du microphone (`0.0-1.0`)                             | Float       | Parole            |
| [GestureLeft](/avatars/animator-parameters#gestureleft-and-gestureright-values)                        | Geste du contrôle de la main gauche (0-7)                    | Int         | IK                |
| [GestureRight](/avatars/animator-parameters#gestureleft-and-gestureright-values)                       | Geste du contrôle de la main droite (0-7)                    | Int         | IK                |
| GestureLeftWeight                  | Gâchette analogique gauche (0.0-1.0)†                        | Float       | Jouable           |
| GestureRightWeight                 | Gâchette analogique droite (0.0-1.0)†                        | Float       | Jouable           |
| AngularY                           | Vitesse angulaire sur l'axe Y                                | Float       | IK                |
| VelocityX                          | Vitesse de déplacement latérale en m/s                       | Float       | IK                |
| VelocityY                          | Vitesse de déplacement verticale en m/s                      | Float       | IK                |
| VelocityZ                          | Vitesse de déplacement vers l'avant en m/s                   | Float       | IK                |
| VelocityMagnitude                  | Amplitude totale de la vitesse                               | Float       | IK                |
| Upright                            | À quel point vous êtes "droit". 0 est couché, 1 est debout droit | Float       | IK                |
| Grounded                           | Vrai si le joueur touche le sol                              | Bool        | IK                |
| Seated                             | Vrai si le joueur est dans une station                       | Bool        | IK                |
| AFK                                | Le joueur est-il indisponible (capteur de proximité du HMD / touche Fin)       | Bool        | IK                |
| Expression1 - Expression16         | Paramètre défini par l'utilisateur, Int (`0`-`255`) ou Float (`-1.0`-`1.0`)     | Int / Float | IK ou Jouable     |
| [TrackingType](/avatars/animator-parameters#trackingtype-parameter)                       | Voir la description ci-dessous                               | Int         | Jouable           |
| VRMode                             | Retourne `1` si l'utilisateur est en VR, `0` s'il ne l'est pas | Int         | IK                |
| MuteSelf                           | Retourne `vrai` si l'utilisateur s'est mis en sourdine, `faux` s'il n'est pas en sourdine | Bool        | Jouable           |
| InStation                          | Retourne `vrai` si l'utilisateur est dans une station, `faux` sinon | Bool        | IK                |
| Earmuffs                           | Retourne `vrai` si la fonction Earmuff de l'utilisateur est activée, `faux` sinon | Bool        | Jouable           |
| IsOnFriendsList                    | Retourne `vrai` si l'utilisateur qui visualise l'avatar est ami avec l'utilisateur le portant. `Faux` localement. | Bool        | Autre             |
| [AvatarVersion](/worlds/components/vrc_station/#sdk3-station-with-sdk2sdk3-avatar) | Retourne `3` si l'avatar a été créé en utilisant le SDK3 de VRChat (2020.3.2) ou plus récent, `0` sinon. | Entier      | IK             |

"Supine" et "GroundProximity" sont visibles dans l'affichage de débogage, mais ne sont pas encore implémentés. Ils ne font actuellement rien et ne changent jamais de valeurs.

† GestureLeftWeight et GestureRightWeight vont de 0.0 à 1.0 dans divers gestes en fonction de la traction de la gâchette. Par exemple, si vous faites un poing mais ne tirez pas sur la gâchette de la main gauche, GestureLeft sera 1, mais GestureLeftWeight sera 0.0. Lorsque vous commencez à tirer sur la gâchette, elle montera de 0.0 vers 1.0. Cela peut être utilisé pour créer des gestes "analogiques" ou détecter conditionnellement diverses choses.

### Paramètres de mise à l'échelle de l'avatar

| Nom               | Description                                                                                                                                                                                     | Type  | Synchronisation  |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- | ---------------- |
| ScaleModified      | Retourne `vrai` si l'utilisateur est mis à l'échelle à l'aide de la mise à l'échelle de l'avatar, `faux` si l'avatar est à sa taille par défaut.                                               | Bool  | Jouable          |
| ScaleFactor        | Relation entre la hauteur par défaut de l'avatar et la hauteur actuelle. Un avatar avec une hauteur des yeux par défaut de 1m mis à l'échelle à 2m rapportera `2`.                             | Float | Jouable          |
| ScaleFactorInverse | Relation inverse (`1/x`) entre la hauteur par défaut de l'avatar et la hauteur actuelle. Un avatar avec une hauteur des yeux par défaut de 1m mis à l'échelle à 2m rapportera `0.5`. Peut être inexact aux extrêmes. | Float | Jouable          |
| EyeHeightAsMeters  | Hauteur des yeux de l'avatar en mètres.                                                                                                                                                        | Float | Jouable          |
| EyeHeightAsPercent | Relation de la hauteur des yeux de l'avatar en mètres par rapport aux limites de mise à l'échelle par défaut (`0.2`-`5.0`). Un avatar mis à l'échelle à 2m rapportera `(2.0 - 0.2) / (5.0 - 0.2)` = `0.375`.       | Float | Jouable          |

Tous ces paramètres sont en lecture seule.

### Types de paramètres

Vous avez accès à trois types de variable lors de la définition de vos paramètres dans votre objet Paramètres.

Vous pouvez utiliser jusqu'à un total de 256 bits de "mémoire". Ceci n'est pas strictement de la mémoire dans le sens de l'utilisation de la mémoire de l'avatar, mais a à voir avec la bande passante que vous utilisez lors de la synchronisation des paramètres.

| Type de paramètre | Plage             | Utilisation de la mémoire | Notes                              |
| :------------- | :---------------- | :----------- | :--------------------------------- |
| `int`          | `0`-`255`         | 8 bits       | Entier non signé de 8 bits.                |
| `float`        | `-1.0` à `1.0`    | 8 bits       | Décimal fixe signé de 8 bits†. |
| `bool`         | `Vrai` ou `Faux`  | 1 bit        |                                    |

† Les valeurs `float` synchronisées à distance ont 255 valeurs possibles, donnant une précision de `1/127` sur le réseau, et peuvent stocker `-1.0`, `0.0`, et `1.0` précisément. Lorsqu'elles sont mises à jour localement, telles qu'avec [OSC](https://docs.vrchat.com/docs/osc-overview), les valeurs flottantes sont stockées comme des valeurs à virgule flottante natives (32 bits) dans les animateurs. 

### Valeurs de GestureLeft et GestureRight

GestureLeft et GestureRight utilisent ces valeurs :

| Index | Geste       |
| ----- | ----------- |
| 0     | Neutre      |
| 1     | Poing       |
| 2     | Main Ouverte |
| 3     | Doigt Pointé |
| 4     | Victoire    |
| 5     | RockNRoll   |
| 6     | Pistolet    |
| 7     | Pouce Levé  |

### Valeurs de Visème

Nous utilisons l'[index de visème Oculus](https://developer.oculus.com/documentation/unity/audio-ovrlipsync-viseme-reference), de haut en bas, où `sil` est 0. Pour référence :

| Paramètre Visème | Visème |
| :--------------- | :----- |
| 0                | `sil`  |
| 1                | `pp`   |
| 2                | `ff`   |
| 3                | `th`   |
| 4                | `dd`   |
| 5                | `kk`   |
| 6                | `ch`   |
| 7                | `ss`   |
| 8                | `nn`   |
| 9                | `rr`   |
| 10               | `aa`   |
| 11               | `e`    |
| 12               | `i`    |
| 13               | `o`    |
| 14               | `u`    |

### Types de synchronisation

- **Parole** - Utilisé uniquement pour les visèmes, est piloté par les paramètres de sortie de la synchronisation labiale Oculus en fonction de votre parole. Mis à jour localement, pas directement synchronisé (car il est piloté par l'audio)
- **Jouable** - Un mode de synchronisation plus lent destiné à synchroniser des états d'animation de longue durée. Mises à jour toutes les 0,1 à 1 secondes selon les besoins en fonction des changements de paramètres (1 à 10 mises à jour par seconde), mais vous ne devriez pas compter dessus pour une synchronisation rapide.
- **IK** - Un mode de synchronisation plus rapide destiné à synchroniser des valeurs qui changent fréquemment. Mises à jour continues toutes les 0,1 secondes (10 mises à jour par seconde), et interpole les valeurs `float` localement pour les utilisateurs distants. Selon le paramètre, cela peut également être simplement calculé en fonction de l'état IK rendu localement de l'avatar.

Lorsqu'un paramètre d'expression est utilisé dans un menu de marionnette, il passe automatiquement de Jouable à IK afin que vous obteniez le taux de mise à jour continu et l'interpolation douce. Lorsque le menu est fermé, il revient à la synchronisation Jouable.

### Pilotage des paramètres d'expression

De plus, les paramètres d'expression peuvent être "pilotés" vers une valeur via des comportements d'état. Ils peuvent être définis à l'aide du comportement d'état `Avatar Parameter Driver` sur un état dans un animateur.

### État AFK

L'état AFK est déclenché par :

- L'utilisateur retire le casque et le capteur de proximité du HMD indique que le casque n'est pas porté
- Un menu système est ouvert. Cela dépend de la manière dont la plateforme que vous utilisez fournit des données lorsque les menus système sont ouverts - par exemple, le Oculus Dash ne s'enregistre pas comme AFK, mais le menu SteamVR **s'enregistre** comme AFK. C'est un peu un effet secondaire, et non un comportement conçu.
- L'utilisateur a appuyé sur la touche Fin, basculant l'état AFK.

### Paramètre TrackingType

`TrackingType` indique plusieurs informations.

Si la valeur est 3, 4 ou 6 tandis que `VRMode` est 1, cela indique combien de points de suivi l'utilisateur de l'avatar a activés et suit actuellement. **Cette valeur peut changer !** Si un utilisateur en suivi à 6 points retire ses trois points supplémentaires, la valeur passera de 6 à 3. Prenez cela en compte lorsque vous concevez votre animateur.

Si la valeur est 0, 1 ou 2 tandis que `VRMode` est 1, cela indique que l'avatar est encore en cours d'initialisation. Vous ne devriez pas concevoir des animateurs pour créer des branches basées sur cette combinaison de valeurs, et devriez plutôt attendre une valeur "valide" de 3, 4 ou 6.

:::caution[Prenez en compte les changements]

Durant l'initialisation de l'avatar, cette valeur peut changer ! Assurez-vous que votre animateur prend en compte les changements possibles et qu'il ne se "termine" pas dans une branche sans issue.

:::

| Paramètre | Description |
| --- | :-- |
| 0 | Non initialisé. Se produit généralement seulement lorsque l'utilisateur change d'avatar et que son IK n'est pas encore envoyé. |
| 1 | Configuration générique. L'utilisateur peut avoir un suivi de n'importe quel type, mais l'avatar est configuré en tant que générique, donc le suivi est ignoré. _Peut_ être un utilisateur de bureau si `VRMode` est 0. |
| 2 | _Se produit uniquement avec AV2, et par conséquent n'est pas un état dans lequel vous devriez vous attendre à rester longtemps pour les contrôleurs AV3 sur les avatars. Peut encore se produire avec les stations SDK3._ <br />Suivi des mains seulement, sans les doigts. Cela ne se produit que dans des états qui sont des transitions - c'est-à-dire, vous devriez vous attendre à ce que `TrackingType` change à nouveau, et l'avatar ne devrait pas rester dans cet état. |
| 3 | Suivi de la tête et des mains. Si `VRMode` est `1`, cet utilisateur est en VR à 3 points. Si `VRMode` est `0`, c'est un utilisateur de bureau dans un avatar humanoïde. |
| 4 | Utilisateur VR à 4 points. Tête, mains et hanche. |
| 5 | Utilisateur VR à 5 points. Tête, mains et pieds suivis. Essentiellement un suivi complet du corps mais sans la hanche. |
| 6 | Utilisateur VR avec suivi complet du corps. Tête, mains, hanche et pieds suivis. |


### Alias des paramètres d'Expression

Vous **devez** créer des noms (ou "alias") pour les paramètres d'Expression. **Vous ne pouvez pas (et ne devriez pas !) utiliser le nom d'Expression par défaut pour les paramètres.**

Une fois que vous avez créé des noms pour tout paramètre d'Expression que vous souhaitez utiliser, vous pouvez utiliser ce nom directement dans votre Contrôleur. Cela signifie que vous pouvez concevoir votre propre standard de nommage pour vos paramètres. Cela _signifie aussi_ que les définitions de menus et les contrôleurs peuvent être combinés et assortis tant qu'ils utilisent les mêmes noms. Vous pouvez obtenir des contrôleurs préfabriqués d'autres personnes et créer vos propres styles de menus en fonction de vos préférences, sans vous soucier des conflits de paramètres d'Expression.

Lorsque vous nommez vos propres paramètres, l'utilisation de barres obliques (`/`) fera en sorte que les paramètres s'organisent automatiquement dans divers menus déroulants. Par exemple, nommer un paramètre `Toggles/Hat` fera apparaître la sélection de menu comme Toggles -> Hat lors de la sélection de paramètres pour des choses comme les transitions d'animateur et les menus d'Expression, tout en conservant le même nom pour le paramètre sous-jacent. Cela ne change pas la façon dont les paramètres se comportent, cela rend simplement plus facile de travailler avec de longues listes de paramètres.

### Aliasing par défaut AV3

Il y a quelques "défauts" utilisés par les contrôleurs AV3 VRChat que vous pouvez utiliser si vous ne voulez pas construire vos propres contrôleurs. Ils ne rentreront pas en conflit avec votre propre utilisation (tant que vous ne les nommez pas de la même manière) grâce à l'aliasing.

En particulier, les couches d'Action et FX par défaut utilisent l'aliasing. Vous n'avez pas besoin de vous soucier d'utiliser une Expression qui est dans ces couches.

Les actions utilisent des paramètres aliasés nommés `VRCEmote`, qui est un Int avec une plage de 1 à 16.

FX utilise des paramètres Float aliasés appelés `VRCFaceBlendH` (-1,1) et `VRCFaceBlendV` (-1,1), si vous souhaitez essayer vos propres menus pour les utiliser. La couche FX par défaut nécessite que vous ayez un mesh skinné nommé `Body` avec des blendshapes `mood_happy`, `mood_sad`, `mood_surprised` et `mood_angry`.

Pour reformuler, si vous avez un avatar que vous téléchargez en tant qu'avatar Avatar3 sans couches jouables personnalisées, vous pourrez utiliser certains émoticônes intégrés avec eux tant que vous avez les blendshapes nommés ci-dessus.

Si vous avez également un blendshape `eyes_closed`, il les fermera lorsque vous utiliserez l'émoticône Die par défaut ou passerez en mode AFK.

### Synchronisation des paramètres multiplateforme

Lors de l'utilisation d'un avatar qui a des versions Quest et PC téléchargées, les paramètres sont synchronisés par leur position dans la liste des paramètres et leur type de paramètre, **et non** par les noms des paramètres. Pour qu'un paramètre donné soit synchronisé entre PC et Quest, il doit être à la même position dans la liste des paramètres et avoir le même type de paramètre.

Étant donné cela, il peut être judicieux d'utiliser le même asset de paramètres d'Expression pour les versions PC et Quest d'un avatar, même si une version n'utilise pas tous les paramètres.
