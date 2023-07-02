---
title: "Paramètres de l'animateur"
description: "lol"
---
:::caution[Connaissance d'Unity requise] 

Ce document est rédigé en supposant que vous connaissez un peu les [animateurs Unity](https://docs.unity3d.com/2019.4/Documentation/Manual/class-AnimatorController.html).

:::

Voici une liste de paramètres (**sensibles à la casse**) pouvant être ajoutés à n'importe quelle couche de lecture (contrôleur d'animation) et modifiés dans toutes les couches de lecture incluant ce paramètre. Les paramètres créés par l'utilisateur qui ne figurent pas dans cette liste n'existeront que localement dans ce contrôleur d'animation et ne peuvent pas être modifiés par l'avatar.

Vous devrez les ajouter à vos animateurs de la couche de lecture pour les utiliser. **Ils sont sensibles à la casse !**

> ❗️ Ne pas créer de "point mort" !
> 
> Vous devez supposer que les valeurs des paramètres peuvent changer. Si vous créez des "points morts" dans vos animateurs - c'est-à-dire, si vous n'avez pas de "sortie" dans une branche particulière - vous risquez d'avoir un avatar défectueux.

## Paramètres

| Nom                                                                        | Description                                                                                                                                                                        | Type        | Synchronisation           |
| --------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------------------- |
| IsLocal                                                                     | Vrai si l'avatar est porté localement, faux sinon                                                                                                                                 | Bool        | Aucune                    |
| [Viseme](/avatars/animator-parameters#viseme-values)                             | [Index des visèmes Oculus](https://developer.oculus.com/documentation/unity/audio-ovrlipsync-viseme-reference) (`0-14`). Lors de l'utilisation de Jawbone/Jawflap, la plage est de `0-100` indiquant le volume | Int         | Discours                   |
| Voice                                                                       | Volume du microphone (`0.0-1.0`)                                                                                                                                                   | Float       | Discours                   |
| [GestureLeft](/avatars/animator-parameters#gestureleft-and-gestureright-values)  | Gestuelle de la main gauche (0-7)                                                                                                                                                 | Int         | IK                         |
| [GestureRight](/avatars/animator-parameters#gestureleft-and-gestureright-values) | Gestuelle de la main droite (0-7)                                                                                                                                                 | Int         | IK                         |
| GestureLeftWeight                                                           | Trigger analogique L (0.0-1.0)†                                                                                                                                                   | Float       | Lisible                    |
| GestureRightWeight                                                          | Trigger analogique R (0.0-1.0)†                                                                                                                                                   | Float       | Lisible                    |
| AngularY                                                                    | Vitesse angulaire sur l'axe Y                                                                                                                                                     | Float       | IK                         |
| VelocityX                                                                   | Vitesse de déplacement latéral en m/s                                                                                                                                             | Float       | IK                         |
| VelocityY                                                                   | Vitesse de déplacement vertical en m/s                                                                                                                                            | Float       | IK                         |
| VelocityZ                                                                   | Vitesse de déplacement avant en m/s                                                                                                                                               | Float       | IK                         |
| VelocityMagnitude                                                           | Magnitude totale de la vitesse                                                                                                                                                    | Float       | IK                         |
| Upright                                                                     | À quel point êtes-vous "droit". 0 signifie couché, 1 signifie debout                                                                                                               | Float       | IK                         |
| Grounded                                                                    | Vrai si le joueur touche le sol                                                                                                                                                   | Bool        | IK                         |
| Seated                                                                      | Vrai si le joueur est assis                                                                                                                                                       | Bool        | IK                         |
| AFK                                                                         | Le joueur n'est pas disponible (capteur de proximité HMD / touche de fin d'appel)                                                                                                  | Bool        | IK                         |
| Expression1 - Expression16                                                  | Paramètre défini par l'utilisateur, Int (`0`-`255`) ou Float (`-1.0`-`1.0`)                                                                                                         | Int / Float | IK ou Lisible              |
| [TrackingType](/avatars/animator-parameters#trackingtype-parameter)              | Voir la description ci-dessous                                                                                                                                                     | Int        