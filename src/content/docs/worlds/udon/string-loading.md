---
title: "Chargement de texte"
description: "Charger des fichiers texte depuis internet dans vos mondes VRChat"
sidebar:
    badge:
        text: Mis à jour
        variant: tip
---
Le Chargement de texte vous permet de télécharger des fichiers texte depuis internet et de les utiliser dans votre monde VRChat. Vous pouvez utiliser le script `DownloadString` inclus dans le SDK, ou vous pouvez créer votre propre script en utilisant la nouvelle fonction `VRCStringDownloader.LoadUrl`.

- Vos fichiers texte peuvent être dans n'importe quel format, tels que `.txt` ou `.json`.
* Un texte peut être téléchargé toutes les cinq secondes.
Si cette limite est dépassée, les téléchargements de textes sont mis en file d'attente et téléchargés dans un ordre aléatoire.
* Un texte ne peut être que d'un maximum de 100 Mo
* Vous ne pouvez avoir que 1000 éléments dans la file d'attente

# URLs de confiance
Si un site n'est pas sur la liste, il ne sera pas téléchargé à moins que l'option ‘Allow Untrusted URLs’ ne soit activée dans les paramètres de l'utilisateur.

Les URLs suivantes sont disponibles :

* GitHub (`*.github.io`)
* Pastebin (`pastebin.com`)
* Github Gist (`gist.githubusercontent.com`)
* Poly  (`*.poly.jp`)

# Guides
## Utiliser le script `DownloadString` pour télécharger un texte
Le SDK inclut un script pour télécharger facilement des textes :

1. Créez un nouveau GameObject dans votre scène.
2. Ajoutez un composant `UdonBehaviour`.
3. Sélectionnez `DownloadString` comme source du programme.
4. Entrez l'URL et sélectionnez le composant texte où vous souhaitez afficher le texte téléchargé.

## Créer votre propre script pour LoadUrl
Vous pouvez utiliser la fonction `VRCStringDownloader.LoadUrl` pour télécharger des textes dans vos propres graphiques.

1. Exécutez `VRCStringDownloader.LoadUrl` avec une URL et spécifiez un UdonBehaviour.
2. Attendez que l'événement `OnStringLoadSuccess` ou `OnStringLoadError` soit appelé sur l'UdonBehaviour spécifié.
3. Utilisez le `IVRCStringDownload` de l'événement pour obtenir le `Resultat` du téléchargement du texte.
# Nouveaux nœuds UdonGraph
## Nouveaux événements
### OnStringLoadSuccess
Renvoie `IVRCStringDownload`. Appelé lorsque la fonction `LoadUrl` a téléchargé avec succès le texte depuis internet.

### OnStringLoadError
Renvoie `IVRCStringDownload`. Appelé lorsque la fonction `LoadUrl` a échoué à télécharger le texte.

## Nouveaux types
### VRCStringDownloader

Utilisez cette classe statique pour télécharger des textes depuis le web.

#### VRCStringDownloader.LoadUrl
* **Url**: l'URL à charger depuis internet.
* **UdonBehaviour**: l'UdonBehaviour pour envoyer les événements à. 
    * Dans Udon Graph, cela prend par défaut l'UdonBehaviour actuel
    * Dans Udon Sharp, vous pouvez utiliser `(IUdonEventReceiver)this`


### IVRCStringDownload
Résultat des événements de chargement de texte.

* **Get Error (`string`)**: Le message d'erreur pour `OnStringLoadError`.
* **Get ErrorCode (`int`)**: Le code d'erreur HTTP pour `OnStringLoadError`.
* **Get Response (`string`)**: Le texte qui a été téléchargé.
* **Get UdonBehaviour (`UdonBehaviour`)**: L'UdonBehaviour auquel les événements sont envoyés.
* **Get Url (`VRCUrl`)**: Obtient l'URL depuis laquelle le téléchargement a été tenté.