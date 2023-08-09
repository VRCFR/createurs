---
title: "Platforms"
sidebar_position: 1
---

Nous prenons en charge la création de contenu pour Windows, à utiliser aussi bien sur ordinateur de bureau que dans la réalité virtuelle. Vous pouvez également créer votre contenu pour Android, à utiliser sur l'Oculus Quest 2 et notre prochaine version Android en cours de développement.

# Changer le cache de VRChat 

Par défaut, le cache est limité à 20 Go et est situé dans votre compte d'utilisateur (%AppData%..\LocalLow\VRChat\vrchat). Il est possible de modifier l'emplacement en suivant ce tutoriel : [lien](https://help.vrchat.com/hc/en-us/articles/1500004572821-I-want-to-change-where-my-downloaded-content-cache-is-stored).

Tant que nous y sommes, nous pouvons également modifier la taille du cache en suivant cette documentation : [lien](https://docs.vrchat.com/docs/configuration-file).

Voici le fichier config.json que j'utilise :

```
{
	"cache_directory": "F:/Cache/VRChat/",
	"cache_size": 100
}
```

(PS : N'oubliez pas de supprimer l'ancien dossier Cache-WindowsPlayer après avoir mis à jour la configuration.)
