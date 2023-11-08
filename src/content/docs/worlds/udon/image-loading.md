---
title: "Chargement d'images"
description: "Affichez des fichiers image depuis internet dans votre monde VRChat"
sidebar:
    badge:
        text: Mis à jour
        variant: tip
---

Le chargement d'images vous permet d'afficher des images depuis internet dans votre monde VRChat. Lorsqu'un utilisateur visite votre monde, l'image peut être téléchargée depuis internet et utilisée comme texture dans vos matériaux. Voici quelques exemples de la manière dont le chargement d'images peut être utilisé :

- Mettre à jour les textures dans votre monde sans avoir à les réuploader.
- Créer une affiche dans votre monde et la mettre à jour pour des événements saisonniers ou des fêtes.
- Réutiliser la même texture dans plusieurs mondes et les mettre à jour tous en une fois.

Le SDK comprend un script `ImageDownload` facile à utiliser, ou vous pouvez créer votre propre script avec le nouvel objet `VRCImageDownloader`.

:::note[Exemple]
Vous pouvez [consulter notre exemple de chargeur d'images](/worlds/examples/image-loading) pour commencer rapidement.
:::

## Avant de commencer

Il y a quelques limites et paramètres du chargeur d'images que vous devriez connaître :

- La résolution maximale est de 2048 × 2048 pixels. Tenter de télécharger des images plus grandes entraînera une erreur.
- Une image peut être téléchargée toutes les cinq secondes.
  - Si cette limite est dépassée, les téléchargements d'images sont mis en file d'attente et téléchargés dans un ordre aléatoire.
  - Cette limite s'applique à l'ensemble de votre scène, quelle que soit la quantité de composants VRCImageDownload utilisés.
- L'URL doit pointer directement vers un fichier image. La redirection d'URL n'est pas autorisée et entraînera une erreur.
- Les images téléchargées sont automatiquement interprétées comme des images RGBA, RVB ou RG.
  - Par exemple, une image en niveaux de gris avec un canal alpha est interprétée comme une image RG.
- Il y a une limite de 1000 éléments dans la file d'attente.
- Les tampons d'entrée et de sortie sont limités à un maximum de 32 Mo, les images dépassant cette limite entraîneront une erreur.

Et seuls certains domaines sont autorisés. Si un domaine ne figure pas sur la liste, les images ne seront pas téléchargées à moins que l'option **Autoriser les URL non fiables** n'ait été activée dans les paramètres de l'utilisateur.

- Discord (`cdn.discordapp.com`)
- Dropbox (`dl.dropbox.com`, `dl.dropboxusercontent.com`)
- GitHub (`*.github.io`)
- ImageBam (`images4.imagebam.com`)
- ImgBB (`i.ibb.co`)
- imgbox (`images2.imgbox.com`)
- Imgur (`i.imgur.com`)
- Postimages (`i.postimg.cc`)
- Reddit (`i.redd.it`)
- Twitter (`pbs.twimg.com`)
- VRChat (`assets.vrchat.com`)
- Poly (`*.poly.jp`)

## Noeuds UdonGraph

### VRCImageDownloader

Utilisez le constructeur de `VRCImageDownloader` pour créer un téléchargeur d'images, qui peut télécharger une image depuis internet en cours d'exécution.

### DownloadImage

Télécharge une image et déclenche un événement indiquant la réussite ou l'échec (voir 'Nouveaux événements').
Renvoie un `IVRCImageDownload`, qui peut être utilisé pour suivre la progression du téléchargement.

- **Instance** : Le composant `ImageDownloader` pour télécharger l'image.
- **URL** : L'URL `VRCURL` de la texture à télécharger.
- **Matériau** (optionnel) : Le matériau auquel appliquer automatiquement l'image téléchargée en tant que texture principale.
- **UdonBehavior** (optionnel) : Le `Udonbehavior` auquel envoyer les événements `VRCImageDownloader`. Si `udonBehavior` est vide, le comportement Udon actuel recevra tous les événements.
  - Notez que UdonSharp ne recevra aucun événement à moins que `udonBehavior` ne soit spécifié.
- **TextureInfo** (optionnel) : L'objet `TextureInfo` contenant les paramètres de la nouvelle texture créée.

### Dispose

Nettoie le `VRCImageDownloader`. Libère les textures téléchargées de la mémoire. Appeler `Dispose` invalide l'objet VRCImageDownloader, et un nouveau doit être instancié pour télécharger des images.

**Note sur la suppression et la collecte des déchets :**

- Appeler `Dispose` invalidera le `VRCImageDownloader`, l'`IVRCImageDownload` associé et la texture téléchargée.
  - Après avoir appelé `Dispose`, l'état `State` de `IVRCImageDownload` passera à `Non chargé` jusqu'à ce qu'il soit collecté par le ramasse-miettes.
- `VRCImageDownloader` conserve les textures en mémoire jusqu'à ce qu'il soit détruit ou disposé à l'aide de sa fonction `Dispose`.
- Assurez-vous de conserver la référence à votre `VRCImageDownloader` en tant que variable pour éviter qu'il (et toute texture téléchargée) ne soit collecté de manière aléatoire.

### TextureInfo

Contient les paramètres à appliquer à une texture téléchargée.

- **GenerateMipmaps** : Active la génération de mipmaps. (Par défaut : `false`)
- **FilterMode** : Définit le mode de filtrage de la texture. (Par défaut : `Bilinear`)
- **WrapModeU** : Le mode de répétition de la texture le long de l'axe U (horizontal) (Par défaut : `Répétition`)
- **WrapModeV** : Le mode de répétition de la texture le long de l'axe V (vertical) (Par défaut : `Répétition`)
- **WrapModeW** : Le mode de répétition de la texture le long de l'axe W (profondeur, uniquement pertinent pour Texture3D) (Par défaut : `Répétition`)
- **AnisoLevel** : L'anisotropie de la texture. Une valeur de 0 désactive le filtrage, 16 équivaut à un filtrage complet. (Par défaut : `9`)
  - VRChat utilise un filtrage anisotropique forcé. Lorsque la valeur d'anisotrop

ie se situe entre 1 et 9, Unity la fixe à 9. Si la valeur est supérieure à 9, Unity la limite entre 9 et 16.
- **MaterialProperty** : Remplace la `MaterialProperty` à laquelle appliquer la texture téléchargée, si un `matériau` a été spécifié dans `DownloadImage`. (Par défaut : `_MainTex`)

### IVRCImageDownload

Contient des informations sur l'image téléchargée. Renvoyé par la fonction `DownloadImage` de `VRCImageDownloader`, par `OnImageLoadSuccess` et par `OnImageLoadError`.
Notez que bon nombre de ces champs seront invalides jusqu'à ce que le téléchargement soit terminé ou ait échoué.

- **Obtenir une erreur** : Récupère l'erreur `VRCImageDownloadError` associée à l'événement.
- **Obtenir un message d'erreur** : Récupère le message d'erreur en tant que `chaîne de caractères`.
- **Obtenir un matériau** : Récupère le matériau envoyé dans la fonction `DownloadImage`.
- **Obtenir la progression** : Récupère la progression du téléchargement de l'image sous forme de `float` entre 0 et 1. Utilisez ceci pour suivre la progression du téléchargement, par exemple pour des barres de chargement personnalisées.
- **Obtenir le résultat** : La `Texture2d` de l'image téléchargée.
- **Obtenir la taille en octets en mémoire** : Récupère la taille de la texture en octets en tant qu'`int`.
- **Obtenir l'état** : Récupère le `VRCImageDownloadState` indiquant l'état du téléchargement de l'image.
- **Obtenir TextureInfo** : L'information sur la texture donnée à la fonction `DownloadImage` (TextureInfo).
- **Obtenir Udonbehavior** : Récupère le `udonbehavior` donné aux événements de téléchargement d'image (UdonBehavior).
- **Obtenir URL** : Récupère l'`URL VRC` du téléchargement de l'image.

### VRCImageDownloadState

Indique l'état du téléchargement de l'image dans `IVRCImageDownload` :

- **En attente** : Non démarré ou toujours en cours.
- **Erreur** : Erreur de téléchargement (voir `VRCImageDownloadError`).
- **Complet** : Téléchargement terminé, la texture est prête à être utilisée.
- **Non chargé** : En attente de la collecte des déchets après l'appel de `Dispose` sur `IVRCImageDownload`.
- **Inconnu** : État inconnu.

### VRCImageDownloadError

Lorsqu'un téléchargement d'image échoue, `OnImageLoadError` est appelé. Le champ `Error` de `IVRCImageDownload` contiendra l'un des états d'erreur suivants :

- **URL invalide** : L'URL de téléchargement utilisée dans `DownloadImage` est invalide.
- **Accès refusé** : L'accès à l'URL a été refusé.
- **Image invalide** : L'image téléchargée est invalide.
- **Erreur de téléchargement** : Une erreur de demande web s'est produite.
- **Inconnu** : État d'erreur inconnu.

## Événements

* **OnImageLoadSuccess** : Renvoie `IVRCImageDownload`. Appelé lorsqu'un `VRCImageDownloader` a téléchargé avec succès une image.
* **OnImageLoadError** : Renvoie `IVRCImageDownload`. Appelé lorsqu'un `VRCImageDownloader` a échoué à télécharger une image.