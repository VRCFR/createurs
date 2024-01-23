---
title: "VRC Station"
---
Permet aux utilisateurs de s'asseoir. Un exemple peut être trouvé dans le SDK sous [VRCChair](/worlds/examples/udon-example-scene#vrcchair3).

Ce composant peut également être utilisé sur les avatars pour créer des sièges sur les avatars !

Ce composant se comporte un peu différemment dans VRCSDK2 et VRCSDK3. Nous supportons les stations SDK2 et SDK3 qui ont des animations pour piloter soit des avatars basés sur SDK2, soit sur SDK3.

Il y a un nouveau paramètre `InStation`, qui peut être utilisé pour indiquer qu'un avatar est entré dans une station, mais peut ne pas avoir l'IK Seated activé. Le paramètre `Seated` est maintenant uniquement vrai si la propriété `Seated` était cochée sur la station.

## Stations utilisées dans les Mondes

### Station SDK2 avec Avatar SDK2
La propriété Seated est utilisée pour décider quel type d'IK l'occupant doit obtenir lors de la lecture de l'animation.

**Si Seated est coché**, l'IK assise standard est appliquée aux avatars SDK2. C'est là que la hanche et le bas du corps sont verrouillés en place, et la tête/les mains sont suivies.

**Si Seated est décoché**, l'avatar SDK2 joue l'animation sans IK appliquée.

### Station SDK2 avec Avatar SDK3
L'animation dans la station aura automatiquement le Contrôle de Suivi appliqué en fonction de la propriété Seated de la station.

De plus, si Seated est coché, un Espace de Pose Temporaire est appliqué pour ajuster le point de vue.

### Station SDK3 avec Avatar SDK2/SDK3
Les stations SDK3 prennent en charge le paramètre `AvatarVersion`. Il est actuellement uniquement défini par les avatars SDK3 (où `AvatarVersion` aura une valeur de `3`), donc les avatars SDK2 resteront à la valeur par défaut (vérifiez si `AvatarVersion < 3`).

Les transitions pour commencer une animation assise doivent se ramifier sur `AvatarVersion` combiné avec `InStation` pour commencer l'animation personnalisée.

La branche SDK2 devrait appliquer une pose assise fixe (si Seated est activé), ou une animation complète du corps si Seated n'est pas activé.

La branche SDK3 peut choisir de faire toute combinaison d'animations, de changements de Contrôle de Suivi, et de changements d'Espace de Pose qui sont disponibles pour l'avatar SDK3. Cependant, il n'y aura pas de Comportements d'État appliqués en arrière-plan (ce qui se produit dans les stations SDK2).

Notez que puisque le créateur décide quel type de Contrôle de Suivi appliquer, la propriété Seated sur une station SDK3 n'indique pas nécessairement le type de suivi sur les avatars SDK3.

Nos exemples de contrôleurs Seated montrent ce comportement de ramification et les transitions et configurations de Comportement d'État appropriées pour appliquer une animation assise.

:::caution[Les stations ne peuvent pas créer de nouveaux Paramètres via des Pilotes, seulement affecter les existants]

Les pilotes de paramètres [Comportements d'État](/avatars/state-behaviors) dans les animateurs spécifiés sur les stations ne pourront conduire que les paramètres d'avatar existants, pas en créer de nouveaux.

En général, utiliser des pilotes de paramètres dans les animateurs de station n'est pas un cas d'utilisation pris en charge.
:::
## Stations utilisées sur les Avatars
Le préfabriqué `VRCChair` par défaut inclus dans le SDK peut être utilisé sur les avatars pour permettre à d'autres joueurs de "s'asseoir" sur vous. Vous pouvez l'utiliser pour transformer votre avatar en voiture, en table à manger mobile, et plus encore ! Un avatar peut avoir jusqu'à 6 stations.

Lors de l'utilisation de stations sur un avatar que vous souhaitez animer pour activer ou désactiver, vous devez basculer des objets et composants spécifiques.
![image](/img/worlds/vrc_station-0adc923-av-station-fix.png)
**Ne pas animer ou désactiver le basculement dans la boîte rouge. Animer uniquement les basculements dans les boîtes vertes.** Puisque cela implique de désactiver/activer des composants et des objets, cela **doit** être fait dans la couche FX.

Tenter de contourner cela en désactivant/activant un objet parent de la chaise causera également des problèmes. Vous devez explicitement animer les objets mis en évidence ci-dessus en vert.

Gardez à l'esprit que le fait d'avoir des stations d'avatar activées par défaut (c'est-à-dire, avoir les basculements verts activés par défaut) signifie que si un utilisateur désactive les animations avec le Système de Sécurité, les stations restent actives, même si le porteur les a animées pour les désactiver.

## Paramètres et Options

| Paramètre                        | Description                                                                                              |
| -------------------------------- | -------------------------------------------------------------------------------------------------------- |
| Player Mobility                  | Le joueur doit-il pouvoir se déplacer, les options comprennent :                                          |
|                                  | - Mobile : Permet aux utilisateurs de se déplacer lorsqu'ils sont assis dans la station                  |
|                                  | - Immobilize : Empêche l'utilisateur de se déplacer                                                      |
|                                  | - Immobilize For Vehicle : Identique à Immobilisé mais optimisé pour les stations mobiles                |
| Can Use Station From Station     | Si l'utilisateur peut changer de station en étant assis dans une station                                  |
| Animation Controller (optionnel) | Utilisé pour remplacer les animations d'assise normales par une animation personnalisée.                 |
| Disable Station Exit             | Si l'utilisateur ne peut pas quitter la station par les moyens habituels, utilisez des déclencheurs pour le désasseoir |
| Seated                           | Est-ce une station où l'utilisateur devrait être assis ? Voir les détails ci-dessus pour voir ce que cela indique. |
| Station Enter Player Location    | Transform utilisé pour définir où l'utilisateur doit être transporté lorsqu'il est assis                 |
| Station Exit Player Location     | Transform utilisé pour définir où l'utilisateur doit être transporté lorsqu'il est désassis               |
| Controls Object                  | Ceci est utilisé pour avoir une station où vous pouvez contrôler un objet, comme des véhicules.           |
