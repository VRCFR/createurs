---
title: "Source audio spatiale VRC"
description: "Utilisez `VRC_SpatialAudioSource` pour ajouter une spatialisation 3D à une `Audio Source` Unity."
---

Utilisez `VRC_SpatialAudioSource` pour ajouter une spatialisation 3D à une `Audio Source` Unity.

Lorsqu'elle est ajoutée, `VRC_SpatialAudioSource` ajoutera automatiquement un composant Unity `Audio Source`.

Ce composant peut être utilisé à la fois sur les avatars et les mondes.

![image](/img/worlds/vrc_spatialaudiosource-1.png)

## Interface de l'éditeur Unity

Le composant génère deux Gizmos Unity qui montrent:

- Lointain
- Proche

De plus, le composant `Audio Source` génère un Gizmo "Rayon volumétrique".

Voici à quoi ressemblent les gizmos:
![Composant dans cette image est un peu obsolète, mais les gizmos sont les mêmes.](/img/worlds/vrc_spatialaudiosource-e975780-Unity_2019-07-09_11-51-13.png)

Le composant contient des infobulles pour toutes les propriétés. Passez la souris sur le nom de la propriété pour voir une brève description.

## Mécanismes d'atténuation

Toutes les unités sont en *mètres*. L'atténuation de l'intensité audio est approximativement inversement proportionnelle au carré par défaut, comme illustré ci-dessous:
![](/img/worlds/vrc_spatialaudiosource-c969d41-crowhurst_basic_audio_vol1-39.gif)

Vous pouvez remplacer la courbe en utilisant le graphique sur l'`Audio Source`. Cette courbe détermine l'intensité de l'audio à une distance donnée.

Aux distances approchant la valeur `Lointain`, l'audio peut s'atténuer plus rapidement en fonction de vos réglages.

### Utilisation de l'audio 2D

L'audio 2D est un audio dont le volume est constant quel que soit l'endroit où vous vous trouvez dans un monde. Cela peut être utilisé pour du bruit de fond déjà enregistré en tant que source spatialisée (enregistrement sur le terrain) ou pour de la musique de fond.

**Vous pouvez utiliser l'audio 2D des avatars si vous le souhaitez** en désactivant l'option « Use Spatialized Audio » dans le composant. Sauf si vous choisissez d'utiliser une autre courbe d'atténuation audio, l'intensité diminuera toujours avec la distance, mais elle ne sera pas spatialisée.

Cela étant dit, **nous ne recommandons pas d'utiliser l'audio 2D**. Toutes les sources sonores du monde réel ont des points distincts ou des sources volumétriques. Si vous souhaitez utiliser l'audio 2D malgré tout, veillez à :
- Décocher "Use Spatialized Audio" (Utiliser un audio spatialisé) sur le `VRC_SpatialAudioSource`
- Ajuster la répartition spatiale sur le `Audio Source` pour qu'elle soit à 100% 2D

## Audio spatiale sur les avatars

VRChat prend en charge l'utilisation de `VRC_SpatialAudioSource` sur les avatars, bien qu'avec certaines [limitations](/worlds/components/vrc_spatialaudiosource#section-avatar-limitations). Ces limitations sont mises en place pour éviter les abus et les sons malveillants.

Mis à part ces limitations, `VRC_SpatialAudioSource` fonctionne de la même manière sur les avatars que dans les mondes.
:::danger N'oubliez pas d'ajouter une source audio spatiale !

Si vous n'ajoutez pas de `VRC_SpatialAudioSource` avec vos sources audio d'avatar, un composant sera ajouté par le SDK avec des réglages par défaut. Si vous utilisez une `Audio Source` basée sur un avatar sans `VRC_SpatialAudioSource` ou composant ONSP (obsolète), vous risquez d'obtenir un comportement inattendu, non documenté et indésirable. Nous vous recommandons vivement d'utiliser toujours `VRC_SpatialAudioSource` avec toutes les sources audio basées sur un avatar.
:::

## Propriétés du composant

:::caution

Il n'est pas pris en charge d'ajuster ces propriétés via des animations pendant l'exécution. Ces valeurs sont définies à l'initialisation. L'animation des propriétés de l'`Audio Source` devrait toujours fonctionner pour les propriétés qui ne sont pas liées aux paramètres de spatialisation, comme la hauteur de ton.
:::

:::caution Désactiver / Activer les sources audio

Sur les avatars, il est préférable de désactiver et activer les composants Audio Source plutôt que l'ensemble de l'objet.
:::

Voici les informations converties en un tableau markdown à deux colonnes :

| Propriété                         | Description     |
| :-- | :-- |
| Gain                             | Un gain supplémentaire pour le volume. Par défaut, les sources audio du monde obtiennent un boost de 10 dB. Les sources audio des avatars sont limitées à un gain maximum de 10 dB. |
| Lointain                         | Le rayon lointain, en mètres, où le volume tombe au silence. Par défaut, il est réglé sur 40 m. Le son des avatars est limité à un maximum de 40 m.<br /> Lointain ne remplace les courbes d'une `Audio Source` que si vous activez la case à cocher "Use Spatializer Falloff" sur VRC_SpatialAudioSource. |
| Avancé : Proche                   | Le rayon proche, en mètres, où le volume commence à diminuer. Nous vous recommandons de le garder à zéro pour plus de réalisme et une spatialisation efficace. Par défaut, il est réglé sur 0 m. <br /> Proche ne remplace les courbes d'une `Audio Source` que si vous activez la case à cocher "Use Spatializer Falloff" sur VRC_SpatialAudioSource.  |                                                                                                                                                 |
| Avancé : Rayon volumétrique      | Normalement, une source audio est simulée en tant que source ponctuelle, mais en changeant cette valeur, la source peut sembler provenir d'une zone plus grande. Cela doit être utilisé avec précaution et principalement pour les sources audio lointaines qui doivent paraître "grandes" lorsque vous les dépassez.<br />L'auditeur ne doit jamais s'approcher du rayon pour obtenir les meilleurs résultats. Gardez cette valeur à zéro à moins de savoir ce que vous faites. Par défaut, elle est réglée sur 0 m. <br /> La valeur du rayon volumétrique doit toujours être inférieure à la valeur lointaine. |
| Avancé : Utiliser la courbe de volume de l'AudioSource | Utilisez la courbe de volume des "3D Sound Settings" de l'AudioSource. Si cette option n'est pas cochée, utilisez l'atténuation de l'inverse du carré. Il est recommandé de désactiver cette option pour garantir une spatialisation réaliste et authentique. Par défaut, elle est désactivée. |
| Avancé : Activer la spatialisation  | Décochez cette option pour désactiver la courbe d'atténuation d'inverse du carré par défaut et utilisez plutôt les paramètres de spatialisation de l'Audio Source.<br /><br /> Par défaut, cette option est activée.|

Le tableau ci-dessus représente les colonnes "Propriété" et "Description" des informations que vous avez fournies.

Si vous avez d'autres questions ou avez besoin d'une assistance supplémentaire, n'hésitez pas à demander !

## Limitations des avatars

Vous êtes autorisé à ajuster la courbe d'atténuation sur les `Audio Sources` des avatars. Il suffit de définir "Use AudioSource Volume Curve" sur True, d'ajuster la courbe dans l'`Audio Source` et VRChat utilisera cette courbe d'atténuation au lieu de l'inverse du carré par défaut.

Cependant, comme indiqué ci-dessus, il y a quelques limitations sur les composants `VRC_SpatialAudioSource` sur les avatars. Ces limites sont appliquées à l'exécution.

- Le "Gain" ne peut pas dépasser 10 dB
- Le "Lointain" ne peut pas dépasser 40 m

[L'audio du joueur](/worlds/udon/players/player-audio) peut remplacer ces réglages.

### Écrasement de la courbe

Si vous essayez de lire un son d'avatar avec une courbe personnalisée dans un monde avec une distance "Lointain" plus courte que la normale, Unity "écrase" la courbe. Vous pouvez voir ce qui se passe en ajustant la plage "maxDistance" sur l'Audio Source.

### Compresseur audio de l'avatar

Il y a un compresseur sur le canal audio de l'avatar qui empêche les sons d'être trop forts de manière malveillante. Cela ne devrait pas affecter l'utilisation normale des sources audio de l'avatar ayant des niveaux de volume raisonnables.

### Conseils pour éviter le compresseur

Si vous avez une audio sur votre avatar, vous pouvez faire quelques choses avec votre audio au préalable pour vous assurer de ne pas dépasser le compresseur.

1. Essayez d'