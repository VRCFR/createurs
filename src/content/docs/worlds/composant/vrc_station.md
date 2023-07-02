---
title: "Station VRC"
description: "Permet aux utilisateurs de s'asseoir."
--- 

Un exemple peut être trouvé dans le SDK comme [VRCChair](/worlds/examples/udon-example-scene#vrcchair3).\
\
Ce composant peut également être utilisé sur les avatars pour créer des sièges sur des avatars !\
\
Ce composant se comporte un peu différemment dans VRCSDK2 et VRCSDK3. Nous prenons en charge les stations SDK2 et SDK3 qui ont des animations pour piloter des avatars basés sur SDK2 ou SDK3.\
\
Il y a un nouveau paramètre `InStation` qui peut être utilisé pour indiquer qu'un avatar est entré dans une station, mais il se peut qu'il n'ait pas activé l'IK assis. Le paramètre `Seated` est maintenant vrai uniquement si la propriété `Seated` a été cochée sur la station.\
\
Stations utilisées dans les mondes\
\
Stations SDK2 avec avatar SDK2\
La propriété `Seated` est utilisée pour décider quel type d'IK l'occupant devrait avoir lors de la lecture de l'animation.\
\
**Si `Seated` est activée**, l'IK assis standard est appliqué aux avatars SDK2. C'est là que les hanches et le bas du corps sont verrouillés en place et que la tête/les mains sont suivies.\
\
**Si `Seated` n'est pas activée**, l'avatar SDK2 lit l'animation sans application d'IK.\
\
Stations SDK2 avec avatar SDK3\
L'animation dans la station aura automatiquement un contrôle de suivi appliqué en fonction de la propriété `Seated` de la station.\
\
De plus, si `Seated` est activée, un espace de pose temporaire est appliqué pour ajuster le point de vue.\
\
Stations SDK3 avec avatar SDK2/SDK3\
Les stations SDK3 prennent en charge le paramètre `AvatarVersion`. Actuellement, il est défini uniquement par les avatars SDK3 (où `AvatarVersion` aura une valeur de `3`), donc les avatars SDK2 resteront à la valeur par défaut (vérifier pour `AvatarVersion < 3`).\
\
Les transitions pour commencer une animation assise doivent dépendre de la combinaison `AvatarVersion` et `InStation` pour commencer l'animation personnalisée.\
\
La branche SDK2 doit appliquer une pose assise fixe (si `Seated` est activée) ou une animation du corps entier si `Seated` n'est pas activée.\
\
La branche SDK3 peut choisir de faire n'importe quelle combinaison d'animations, de changements de contrôle de suivi et de changements d'espace de pose disponibles pour l'avatar SDK3. Cependant, aucun comportement d'état en arrière-plan ne sera appliqué (ce qui se produit dans les stations SDK2).\
\
Notez que puisque le créateur décide du type de contrôle de suivi à appliquer, la propriété `Seated` sur une station SDK3 n'indique pas nécessairement le type de suivi sur les avatars SDK3.\
\
Nos exemples de contrôleurs assis montrent ce comportement de branchement, ainsi que les transitions appropriées et la configuration de comportement d'état pour l'application d'une animation assise.\
\
:::caution Les stations ne peuvent pas créer de nouveaux paramètres via les pilotes, seulement affecter les existants\
\
Les pilotes de paramètre [State Behaviors](/avatars/state-behaviors) dans les animateurs spécifiés sur les stations ne peuvent conduire que des paramètres d'avatar existants, pas en créer de nouveaux.\n\nEn règle générale, l'utilisation de pilotes de paramètre dans les animateurs de station n'est pas un cas d'utilisation pris en charge.
:::\
\
Stations utilisées sur les avatars\
\
Le préfabriqué par défaut `VRCChair` inclus dans le SDK peut être utilisé sur les avatars pour permettre à d'autres joueurs de "s'asseoir" sur vous. Vous pouvez l'utiliser pour transformer votre avatar en voiture, en table de dîner qui se déplace, et plus encore !\
\
Lorsque vous utilisez des stations sur un avatar que vous souhaitez animer ou désactiver, vous devez basculer des objets et des composants spécifiques. \
![image](/img/worlds/vrc_station-0adc923-av-station-fix.png)\
**N'animez pas ou ne désactivez pas le bouton bascule dans le cadre rouge. N'animez que les bascules dans les cadres verts.** Comme cela implique de désactiver/activer des composants et des objets, cela **doit** être fait dans la couche FX.\
\
Tenter de contourner cela en activant/désactivant un objet parent de la chaise causera également des problèmes. Vous devez animer explicitement les objets mis en évidence en vert ci-dessus.\
\
Notez que si les stations d'avatar sont activées par défaut (c'est-à-dire si les bascules vertes sont activées par défaut), cela signifie que si un utilisateur désactive les animations avec le système de sécurité, les stations restent actives, même si le porteur les a désactivées.\
\
Paramètres et options\
\
Certainement ! Voici les informations reformatées sous forme d'un tableau à deux colonnes en markdown :\
\
| Paramètre                    | Description                                                                                             |\
| ---------------------------- | ------------------------------------------------------------------------------------------------------- |\
| Mobility du joueur           | Est-ce que le joueur peut bouger, les options incluent :                                                 |\
|                              | - Mobile : Permet aux utilisateurs de se déplacer lorsqu'ils sont assis sur une station                  |\
|                              | - Immobilize : Empêche l'utilisateur de se déplacer                                                      |\
|                              | - Immobilize For Vehicle : Comme Immobilize, mais optimisé pour les stations mobiles                     |\
| Peut changer de station depuis une station | Si l'utilisateur peut changer de station lorsqu'il est assis sur une station                         |\
| Animation Controller (optionnel) | Utilisé pour remplacer les animations de siège normales par une animation personnalisée             |\
| Désactiver la sortie de la station | Si l'utilisateur ne peut pas quitter la station de manière habituelle, utilise des déclencheurs pour le faire sortir de son siège  |\
| Assis                       | Est-ce une station où l'utilisateur devrait être assis ? Voir les détails ci-dessus pour savoir ce que cela indique. |\
| Station Enter Player Location | Transform utilisé pour définir où l'utilisateur doit être transporté lorsqu'il est assis                 |\
| Station Exit Player Location  | Transform utilisé pour définir où l'utilisateur doit être transporté lorsqu'il est désemparé               |\
| Contrôle de l'objet          | Cela est utilisé pour avoir une station où vous pouvez contrôler un objet, comme des véhicules           |\
\
Le tableau ci-dessus représente les colonnes "Paramètre" et "Description" des informations que vous avez fournies.\
\
Si vous avez d'autres questions ou avez besoin d'une assistance supplémentaire, n'hésitez pas à demander !"