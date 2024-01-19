---
title: "VRC Spatial Audio Source"
---
Utilisez `VRC_SpatialAudioSource` pour ajouter une spatialisation 3D à une `Audio Source` Unity.

Lorsqu'ajouté, `VRC_SpatialAudioSource` ajoutera automatiquement un composant `Audio Source` Unity.

Ce composant peut être utilisé à la fois sur les avatars et les mondes.

![image](/img/worlds/vrc_spatialaudiosource-1.png)
## Interface de l'Éditeur Unity

Le composant génère deux [Gizmos Unity](https://docs.unity3d.com/2019.4/Documentation/ScriptReference/Gizmos.html) qui montrent :

- Far (Loin)
- Near (Proche)

De plus, le composant `Audio Source` génère un gizmo "Rayon Volumétrique".

Voici à quoi ressemblent les gizmos :
![Component in this image is a bit out of date, but the gizmos are the same.](/img/worlds/vrc_spatialaudiosource-e975780-Unity_2019-07-09_11-51-13.png)
Le composant contient des infobulles pour toutes les propriétés. Survolez le nom de la propriété pour voir une brève description.

## Mécanismes de Diminution

Toutes les unités sont en *mètres*. La diminution de l'intensité audio est, par défaut, approximativement inverse au carré, comme illustré ci-dessous :
![](/img/worlds/vrc_spatialaudiosource-c969d41-crowhurst_basic_audio_vol1-39.gif)

Vous pouvez remplacer la courbe en utilisant le graphique sur `Audio Source`. Cette courbe détermine l'intensité de l'audio à une distance donnée.

À des distances approchant la valeur `Far`, l'audio peut s'estomper plus rapidement en fonction de vos paramètres.

### Utilisation de l'Audio 2D

L'audio 2D est lorsque le volume de l'audio est constant, peu importe où vous êtes dans un monde. Cela pourrait être utilisé pour un bruit de fond qui est déjà enregistré comme une source spatialisée (un enregistrement sur le terrain) ou une musique de fond.

**Vous pouvez utiliser l'audio 2D pour avatar si vous le souhaitez** en désactivant l'option `Use Spatialized Audio` dans le composant. À moins que vous choisissiez d'utiliser une courbe de diminution audio différente, l'intensité diminuera toujours avec la distance comme auparavant, mais ne sera pas spatialisée.

Cela dit, **nous ne recommandons pas l'utilisation de l'audio 2D.** Toutes les sources sonores réelles ont des sources ponctuelles ou volumétriques distinctes. Si vous souhaitez utiliser l'audio 2D malgré tout, assurez-vous de :
- Décocher `Use Spatialized Audio` sur `VRC_SpatialAudioSource`
- Ajuster le mélange spatial sur `Audio Source` pour être 100% 2D

## Audio Spatial sur les Avatars

VRChat prend en charge l'utilisation de `VRC_SpatialAudioSource` sur les avatars, bien qu'avec certaines [limitations](/worlds/components/vrc_spatialaudiosource#section-avatar-limitations). Ces limitations sont en place pour prévenir les abus et les sons malveillants.

À part ces limitations, `VRC_SpatialAudioSource` fonctionne exactement de la même manière sur les avatars que dans les mondes.
:::danger[N'oubliez pas d'ajouter un SpatialAudioSource !]

Si vous n'ajoutez pas un `VRC_SpatialAudioSource` avec vos sources audio d'avatar, un sera ajouté par le SDK avec les paramètres par défaut.

Si vous utilisez une `Audio Source` basée sur un avatar préexistant sans un `VRC_SpatialAudioSource` ou un composant ONSP (héritage), vous pourriez obtenir un comportement inattendu, non documenté et indésirable. Nous **recommandons fortement** d'utiliser toujours `VRC_SpatialAudioSource` avec toute `Audio Source` basée sur un avatar.

:::

## Propriétés du Composant

:::caution[Ajustement Dynamique à l'Exécution]

Ajuster ces propriétés via des animations pendant l'exécution n'est pas pris en charge. Ces valeurs sont définies à l'initialisation.

L'animation des propriétés de `Audio Source` devrait toujours fonctionner pour les propriétés qui ne sont pas liées aux paramètres de spatialisation, comme le pitch.

:::

:::caution[Désactivation / Activation des Sources Sonores]

Sur les avatars, il est préférable de désactiver et d'activer les composants `Audio Source` plutôt que le GameObject entier.
:::

| Propriété                           | Description     |
| :-- | :-- |
| Gain                                 | Un boost supplémentaire au volume. Par défaut, les sources audio du monde obtiennent un boost de 10dB. Les sources audio d'avatar sont limitées à un gain maximal de 10dB. |
| Far                                  | Le rayon éloigné, en mètres, où le volume s'estompe jusqu'au silence. Par défaut, il est réglé sur 40m. L'audio d'avatar est limité à un maximum de 40m. <br /> Far remplace uniquement une courbe `Audio Source` si vous activez la case "Use Spatializer Falloff" sur `VRC_SpatialAudioSource`. |
| Advanced: Near                       | Le rayon proche, en mètres, où le volume commence à diminuer. Nous recommandons de le laisser à zéro pour le réalisme et une spatialisation efficace. Par défaut à 0m. <br /> Near remplace uniquement une courbe `Audio Source` si vous activez la case "Use Spatializer Falloff" sur `VRC_SpatialAudioSource`.  |                                                                                                                                                 |
| Advanced: Volumetric Radius          | Une source audio est normalement simulée comme une source ponctuelle, cependant, changer cette valeur permet à la source de paraître provenir d'une zone plus grande. Cela devrait être utilisé avec prudence et est principalement pour les sources audio distantes qui doivent sembler "grandes" lorsque vous passez à côté. <br /> L'auditeur ne devrait jamais se rapprocher du rayon pour de meilleurs résultats. Gardez cela à zéro à moins que vous ne sachiez ce que vous faites. Par défaut à 0m. <br />  La valeur pour `Volumetric Radius` devrait toujours être inférieure à Far. |
| Advanced: Use AudioSource Volume Curve | Utilisez la courbe de volume '3D Sound Settings' de `Audio Source`. Si décoché, utilisez une diminution Inverse Square. Il est recommandé de garder cela désactivé pour assurer une spatialisation réaliste et authentique. <br /> <br /> Par défaut à Faux. |
| Advanced: Enable Spatialization      | Décochez cela pour désactiver la courbe de diminution inverse-square par défaut et utilisez plutôt les paramètres de spatialisation de `Audio Source`. <br /><br /> Par défaut à Vrai.|

## Limitations Avatar
Vous êtes autorisé à ajuster la courbe de diminution sur les `Audio Sources` basées sur avatar. Il suffit de régler `Use AudioSource Volume Curve` sur Vrai, d'ajuster la courbe dans `Audio Source`, et VRChat utilisera cette courbe de diminution au lieu de l'inverse-square par défaut.

Cependant, comme mentionné ci-dessus, il y a certaines limitations sur les composants `VRC_SpatialAudioSource` sur les avatars. Ces limites sont appliquées à l'exécution.

- `Gain` ne peut pas dépasser 10db
- `Far` ne peut pas dépasser 40m

[Player Audio](/worlds/udon/players/player-audio) peut outrepasser ces paramètres.

### Écrasement de Courbe

Si vous essayez de jouer de l'audio d'avatar avec une courbe personnalisée dans un monde avec une distance `Far` plus courte que la normale, Unity "écrase" la courbe. Vous pouvez voir ce qui se passe en ajustant la plage `maxDistance` sur `Audio Source`.

### Compresseur Audio Avatar
Il y a un compresseur sur le canal audio Avatar qui empêche les sons d'être malicieusement forts. Cela ne devrait pas affecter l'utilisation normale des sources audio d'avatar qui ont des niveaux de volume raisonnables.

### Conseils pour Éviter le Compresseur

Si vous avez de l'audio sur votre avatar, il y a quelques choses que vous pouvez faire avec votre audio au préalable pour vous assurer de ne pas atteindre le compresseur.

1. Essayez d'obtenir des fichiers audio "secs" - c'est-à-dire, des fichiers audio sans effets. La réverbération et le délai sont les plus problématiques en causant le "pompage" du compresseur.
2. Laissez un peu de marge dans le fichier audio. En d'autres termes, ne remplissez pas la forme d'onde jusqu'au haut et au bas de la plage. Dans Audacity (ou autre éditeur de vague), normalisez votre audio entre -6 et -12db.
3. Essayez d'éviter des pics extrêmement élevés dans la forme d'onde avec une attaque très courte - en d'autres termes, ne "pompez" pas soudainement l'audio à des niveaux très élevés. Si vous normalisez, cela devrait disparaître du fichier de toute façon.

## Remplacement d'ONSP dans les Anciennes Scènes

Utiliser le bouton "Enable 3D Spatialization on all AudioSources" dans le panneau de contrôle de construction convertit désormais tout `ONSPAudioSource` en composants `VRC_SpatialAudioSource`. Certaines de ces sources peuvent nécessiter un ajustement après la conversion.
