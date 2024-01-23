---
title: "Chargement d'Image"
---
Udon peut charger des images depuis Internet et les afficher comme éléments d'interface utilisateur ou comme textures sur des objets du monde. Notre monde exemple ci-dessous démontre comment le système fonctionne et comment utiliser GitHub pour héberger les images et les légendes.

## Monde Exemple

[Téléchargez le projet exemple](https://github.com/vrchat-community/examples-image-loading/archive/refs/heads/main.zip) ou [visitez le dépôt GitHub](https://github.com/vrchat-community/examples-image-loading) pour le cloner vous-même.

Cette scène a un cadre photo qui change automatiquement pour montrer différentes images avec des légendes correspondantes. Les images et les légendes sont toutes hébergées gratuitement sur GitHub Pages et sont incluses dans le dépôt GitHub ci-dessus.

<video loop="loop" autoplay="autoplay" muted>
  <source src="/img/worlds/image-loader.mp4" type="video/mp4" />
    Votre navigateur ne supporte pas la balise vidéo.
</video>

Fichier de scène : `Assets/_Project/Gallery`

## Utilisation du Préfabriqué dans Votre Monde

Pour utiliser le préfabriqué, vous devrez l'ajouter à votre projet et configurer les URL des légendes d'image.

Ce dépôt publie sur [GitHub Pages](https://pages.github.com/) pour un hébergement gratuit. Vous pouvez héberger les images et les légendes où vous voulez, mais nous recommandons d'utiliser GitHub Pages car c'est gratuit, facile à configurer, et vous pouvez garder les images et les légendes dans le même dépôt que votre monde. Si vous les hébergez ailleurs, passez à l'étape 4.

1. [Forkez le dépôt exemple](https://github.com/vrchat-community/examples-image-loading/fork) sur votre propre compte GitHub.

2. Modifiez les images et les légendes dans le répertoire "Web". Vous pouvez ignorer ou supprimer la page `index.html`, elle est juste là comme exemple pour tester les images et les légendes dans un navigateur. Vous pouvez conserver les images nommées 1.jpg, etc. pour faciliter l'utilisation du préfabriqué, ou les renommer et mettre à jour les URL du préfabriqué.

:::tip
Lorsque les fichiers dans le répertoire "Web" sont modifiés, le site web est republié. Tant que les noms de fichiers restent les mêmes (les images sont 1.jpg, 2.jpg, etc.), les URL dans le monde pointeront vers les fichiers nouvellement publiés. La republication se fait automatiquement grâce à [une action GitHub incluse](https://github.com/vrchat-community/examples-image-loading/actions/workflows/static.yml).
:::
3. Clonez le dépôt sur votre ordinateur.

4. Assurez-vous que votre projet dispose du SDK 3.2.3 ou plus récent ainsi que de ClientSim et UdonSharp, que vous pouvez facilement ajouter via le [Creator Companion](https://vcc.docs.vrchat.com/).

5. Importez le [Prefab Unitypackage](https://github.com/vrchat-community/examples-image-loading/releases/download/0.2.0/SlideshowFrame.unitypackage) dans votre projet.

6. Glissez le préfabriqué **SlideshowFrame** dans votre scène.

7. Sélectionnez le **SlideshowFrame** dans l'Inspecteur de votre scène.

8. Dans le composant **SlideshowFrame**, réglez la taille du tableau **Image Urls** pour qu'elle corresponde au nombre d'images que vous souhaitez charger, puis mettez à jour les URL pour qu'elles correspondent à vos URL d'images. Si vous utilisez GitHub Pages, les URL seront au format `https://<votre-nom-utilisateur-github>.github.io/<nom-de-votre-repo>/1.jpg`.

9. Mettez à jour l'URL **String Url** pour qu'elle corresponde à votre URL de légende. Si vous utilisez GitHub Pages, l'URL sera au format `https://<votre-nom-utilisateur-github>.github.io/<nom-de-votre-repo>/captions.csv`.

#### Testez-le

Si vous utilisez GitHub pour héberger les images et les légendes, assurez-vous d'avoir validé et poussé vos modifications sur GitHub, ce qui déclenchera l'Action GitHub pour publier les fichiers sur GitHub Pages.

1. Entrez en mode Play dans Unity.
2. Les images et les légendes devraient se charger automatiquement. Si ce n'est pas le cas, vérifiez la Console pour les erreurs.
3. Faites un Build and Test pour vous assurer que cela fonctionne dans VRChat également. Vous devrez peut-être activer "Untrusted URLs" dans vos paramètres.

## Objets Importants

Les objets les plus importants à inspecter dans la scène sont [TheFrame](#theframe) et [SlideshowFrame](#slideshowframe).


![image](https://user-images.githubusercontent.com/737888/219288603-2fc2753b-27a1-4f61-ad22-a51df527907d.png)

### TheFrame

TheFrame est un GameObject avec quelques pièces importantes :
* **SlideshowFrame**: un `UdonBehaviour` qui charge les images et les légendes depuis le serveur web.
* **Mesh**: est le cadre noir autour de l'image.
* **Picture**: est un `Mesh` qui rend les textures téléchargées.
* **UI**: est un `Canvas` Espace Monde qui rend les légendes.

### SlideshowFrame

Le `UdonBehaviour` **SlideshowFrame** contient toute la logique pour télécharger les images et les légendes depuis le serveur web.

![image](https://user-images.githubusercontent.com/737888/219288738-ace09705-18d4-4f8e-bb45-792ff662bf7b.png)

Il a ces variables publiques :
* **Image Urls**: Un `Array` de toutes les `VRCUrls` pour les images à télécharger.
* **String Url**: Est une seule `VRCUrl` où le texte de la légende peut être téléchargé.
* **Renderer**: Le **sharedMaterial** de ce `Renderer` cible aura sa texture définie à partir des textures téléchargées.
* **Field**: La propriété **text** de cet `Élément UI` sera définie à partir de la légende téléchargée correspondant à la texture.
* **Slide Duration Seconds**: Combien de temps montrer chaque image.

Le flux logique de base du script est le suivant :

## Création d'un Téléchargeur d'Images

### Utilisation du script `

ImageDownload` pour télécharger une image

Le SDK inclut un script pour télécharger facilement des images :

1. Créez un nouvel GameObject dans votre scène.
2. Ajoutez un composant UdonBehaviour.
3. Sélectionnez `ImageDownload` comme source de programme.
4. Sélectionnez un Matériau pour appliquer la texture téléchargée.
5. (Optionnel) Personnalisez `TextureInfo` pour modifier les paramètres de la texture téléchargée.

### Créez votre propre script pour `VRCImageDownloader`

Vous pouvez utiliser `VRCImageDownloader` dans vos propres scripts Udon Graph.

1. Créez un nouvel objet `VRCImageDownloader` avec son nœud Constructeur.
2. Sauvegardez le `VRCImageDownloader` nouvellement créé comme variable. (Ceci est **requis**.)
3. Exécutez la fonction `DownloadImage` sur l'instance `VRCImageDownloader`.
4. (Optionnel) Attendez que l'événement `OnImageLoadSuccess` ou `OnImageLoadError` s'exécute.

#### Le flux logique de base du script est :

1. Au démarrage, construisez un `VRCImageDownloader` à réutiliser pour télécharger toutes les images. Il est important de le conserver pour que les textures persistent.

```csharp
// Il est important de stocker le VRCImageDownloader comme variable, pour l'empêcher d'être collecté par le garbage collector !
_imageDownloader = new VRCImageDownloader();
```

2. Téléchargez les légendes/chaînes à partir de l'URL `String`.

Si le téléchargement de la chaîne réussit, divisez-la ligne par ligne en chaînes séparées et enregistrez-les dans un tableau `_captions`. Si cela échoue, enregistrez le message d'erreur.

<details><summary>Code de Téléchargement des Légendes</summary>
<p>

```csharp
private void Start()
{
    // Pour recevoir les événements de chargement d'image et de chaîne, 'this' est converti au type nécessaire
    _udonEventReceiver = (IUdonEventReceiver)this;
        
    // Les légendes sont téléchargées une fois. En cas de succès, OnImageLoadSuccess() sera appelé.
    VRCStringDownloader.LoadUrl(stringUrl, _udonEventReceiver);
}

public override void OnStringLoadSuccess(IVRCStringDownload result)
{
    _captions = result.Result.Split('\n');
    UpdateCaptionText();
}

public override void OnStringLoadError(IVRCStringDownload result)
{
    Debug.LogError($"Impossible de charger la chaîne {result.Error}");
}
```

</p>
</details>

3. Essayez de charger la prochaine image. Incrémentez `_loadedIndex` pour suivre notre progression, puis appelez `DownloadImage()` sur le téléchargeur que nous avons enregistré plus tôt.

Si le téléchargement de l'image réussit, enregistrez une référence à celle-ci, puis chargez-la sur le `Renderer`. Si cela échoue, enregistrez le message d'erreur.

4. Appelez à nouveau la fonction pour charger la prochaine image, retardée par `SlideDurationSeconds`. `_loadedIndex` est incrémenté à chaque appel de chargement, et repart du début après avoir atteint la dernière URL du tableau.

Lorsque chaque image est visitée pour la deuxième fois et plus, elle sera affichée à partir de sa référence Texture2D enregistrée au lieu d'être chargée à nouveau, à moins qu'elle n'ait échoué à être téléchargée la première fois.

:::tip[Code Source]
Voir le code source complet pour [SlideshowFrame.cs sur GitHub](https://github.com/vrchat-community/examples-image-loading/blob/main/Assets/_Project/Frame/SlideshowFrame.cs).
:::

## Problèmes Connus

* La première image n'a pas sa légende chargée assez rapidement, donc elle ne s'affiche pas avant le premier tour complet.

:::tip[Udon]

Voir la [page principale de documentation sur le Chargement d'Image](/worlds/udon/image-loading) pour tous les détails sur le système de chargement d'image, y compris les limites de domaine et de fichier.

:::