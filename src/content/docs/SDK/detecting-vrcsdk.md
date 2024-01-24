---
title : "Détection du SDK VRChat"
sidebar:
    badge:
        text: "Nouveau"
        variant: tip
---

Il existe plusieurs façons de détecter le SDK VRChat dans un projet Unity. Cela peut être utile lors du développement d'outils ou de bibliothèques Unity qui ne dépendent pas du SDK VRChat, mais qui peuvent tout de même vouloir utiliser [l'API SDK de VRChat](/sdk/public-sdk-api).

## Utilisation des définitions de version (Recommandé) {#using-version-defines}

La meilleure façon de détecter le SDK VRChat est avec [les définitions de version dans votre fichier de définition d'assemblage][version-defines].

Vous pouvez définir des symboles dans votre assemblage lorsque `com.vrchat.base`, `com.vrchat.avatars`, ou `com.vrchat.worlds` sont installés.
Il est recommandé d'utiliser uniquement la propriété "Expression" pour définir votre symbole lorsque la version installée du SDK VRChat est compatible avec votre outil.
Pour le versionnage du SDK VRChat, veuillez vous référer à la [documentation du Creation Companion][versioning].

Puisque les définitions de version sont une fonctionnalité pour les paquets UPM, cette méthode ne fonctionne que pour les SDK basés sur VPM, qui sont traités comme des paquets UPM par Unity.
Si vous souhaitez également détecter les SDK basés sur `.unitypackage`, utilisez la méthode héritée ci-dessous en définissant le même symbole que le VRCSDK définit, ou en ajoutant le code suivant à chaque fichier :

```csharp
#if !YOUR_VRCSDK3_AVATARS && !YOUR_VRCSDK3_WORLDS && VRC_SDK_VRCSDK3
    #if UDON
        #define YOUR_VRCSDK3_WORLDS
    #else
        #define YOUR_VRCSDK3_AVATARS
    #endif
#endif
```

[version-defines]: https://docs.unity3d.com/2019.4/Documentation/Manual/ScriptCompilationAssemblyDefinitionFiles.html#define-symbols
[versioning]: https://vcc.docs.vrchat.com/vpm/packages/#brandingbreakingbumps

## Utilisation des symboles de script définis par le VRCSDK (Obsolète) {#using-scripting-symbols}

L'autre méthode pour détecter l'installation du SDK VRChat est avec les symboles de script définis par le VRCSDK.
Pour tous les projets VRCSDK, `VRC_SDK_VRCSDK3` sera défini, et pour les projets de monde, `UDON` sera défini.

Cette méthode est obsolète et sera supprimée à l'avenir. Ne dépendez pas uniquement de cette méthode.

Dans l'ancien SDK VRChat, les symboles `VRC_SDK_VRCSDK3` et `UDON` étaient utilisés en interne. Mais comme ces symboles sont actifs dans tout le projet, de nombreux outils dépendent de ces symboles pour détecter le SDK VRChat.

Actuellement, dans le SDK VRChat, toutes ces utilisations de symboles sont migrées vers les définitions de version. Veuillez migrer vers les définitions de version dès que possible !