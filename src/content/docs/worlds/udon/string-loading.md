---
title: "Chargement de texte"
description: "Charger des fichiers texte depuis internet dans vos mondes VRChat"
sidebar:
    badge:
        text: Mis à jour
        variant: tip
---
Le chargement de chaînes de caractères vous permet de télécharger des fichiers texte depuis internet et de les utiliser dans votre monde VRChat. Vous pouvez utiliser le script `DownloadString` inclus dans le SDK, ou vous pouvez créer votre propre script en utilisant la nouvelle fonction `VRCStringDownloader.LoadUrl`.

- Vos fichiers texte peuvent être dans n'importe quel format, comme `.txt` ou `.json`.
* Une chaîne peut être téléchargée toutes les cinq secondes.
Si cette limite est dépassée, les téléchargements de chaînes sont mis en file d'attente et téléchargés dans un ordre aléatoire.
* Une chaîne ne peut pas dépasser 100 Mo au maximum.
* Vous ne pouvez avoir que 1000 éléments dans la file d'attente.

# URLs de confiance
Si un site ne figure pas sur la liste, il ne sera pas téléchargé à moins que les "URL non fiables" ne soient activées dans les paramètres de l'utilisateur.

Les URLs suivantes sont disponibles :

* GitHub (`*.github.io`)
* Pastebin (`pastebin.com`)
* Github Gist (`gist.githubusercontent.com`)

# Guides
## Utilisation du script `DownloadString` pour télécharger une chaîne
Le SDK inclut un script pour télécharger facilement des chaînes :

1. Créez un nouveau GameObject dans votre scène.
2. Ajoutez un composant `UdonBehaviour`.
3. Sélectionnez `DownloadString` comme source du programme.
4. Entrez l'URL et sélectionnez le composant texte où vous souhaitez afficher le texte téléchargé.

## Créez votre propre script pour LoadUrl
Vous pouvez utiliser la fonction `VRCStringDownloader.LoadUrl` pour télécharger des chaînes dans vos propres graphiques.

1. Exécutez `VRCStringDownloader.LoadUrl` avec une URL et spécifiez un `UdonBehaviour`.
2. Attendez que l'événement `OnStringLoadSuccess` ou `OnStringLoadError` soit appelé sur l'`UdonBehaviour` spécifié.
3. Utilisez l'`IVRCStringDownload` de l'événement pour obtenir le `Résultat` du téléchargement de la chaîne. 
# Nouveaux nœuds UdonGraph
## Nouveaux événements
### OnStringLoadSuccess
Retourne `IVRCStringDownload`. Appelé lorsque la fonction `LoadUrl` a réussi à télécharger la chaîne depuis internet.

### OnStringLoadError
Retourne `IVRCStringDownload`. Appelé lorsque la fonction `LoadUrl` n'a pas réussi à télécharger la chaîne.

## Nouveaux types
### VRCStringDownloader

Utilisez cette classe statique pour télécharger des chaînes depuis le web.

#### VRCStringDownloader.LoadUrl
* **Url** : l'URL à charger depuis internet.
* **UdonBehaviour** : l'`UdonBehaviour` pour envoyer les événements.
    * Dans Udon Graph, cela est par défaut l'`UdonBehaviour` actuel.
    * Dans Udon Sharp, vous pouvez utiliser `(IUdonEventReceiver)this`.

### IVRCStringDownload
Résultat des événements de chargement de chaîne.

* **Get Error (`string`)** : Le message d'erreur pour `OnStringLoadError`.
* **Get ErrorCode (`int`)** : Le code d'erreur HTTP pour `OnStringLoadError`.
* **Get ResultBytes (`byte[]`)** : Les données brutes téléchargées sous forme d'`Array` de bytes. Vous pouvez utiliser `System.Text.Encoding` sur cela pour décoder une chaîne dans un format personnalisé. Accéder à cette propriété renverra une copie des données.
* **Get Result (`string`)** : La chaîne qui a été téléchargée, décodée via la norme UTF8.
* **Get UdonBehaviour (`UdonBehaviour`)** : L'`UdonBehaviour` auquel les événements sont envoyés.
* **Get Url (`VRCUrl`)** : Obtient l'URL à partir de laquelle le téléchargement a été tenté.

### Exemple de code

```csharp title="Exemple de téléchargement de chaîne, Encodage de texte personnalisé"
using System.Text;
using UdonSharp;
using UnityEngine;
using VRC.SDK3.StringLoading;
using VRC.SDKBase;
using VRC.Udon.Common.Interfaces;

public class ResultBytesExample : UdonSharpBehaviour
{
    [SerializeField]
    private VRCUrl url;

    void Start()
    {
        VRCStringDownloader.LoadUrl(url, (IUdonEventReceiver)this);
    }

    public override void OnStringLoadSuccess(IVRCStringDownload result)
    {
        string resultAsUTF8 = result.Result;
        byte[] resultAsBytes = result.ResultBytes;
        string resultAsASCII = Encoding.ASCII.GetString(resultAsBytes);
        Debug.Log($"UTF8: {resultAsUTF8}");
        Debug.Log($"ASCII: {resultAsASCII}");
    }

    public override void OnStringLoadError(IVRCStringDownload result)
    {
        Debug.LogError($"Error loading string: {result.ErrorCode} - {result.Error}");
    }
}
```