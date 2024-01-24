---
title: "API SDK Public"
description: "Le Public API est une interface permettant aux développeurs d'interagir avec une application ou un service de manière programmable et contrôlée."
---

Le SDK VRChat propose un ensemble d'interfaces et de méthodes que vous pouvez utiliser pour améliorer le processus de création de mondes et d'avatars.

Vous pouvez trouver le dossier **API SDK Public** dans les deux SDK :

Pour les avatars : `Packages/VRChat SDK/Avatars/Editor/VRCSDK/SDK3A/Public SDK API`  
Pour les mondes : `Packages/VRChat SDK/Base/Editor/VRCSDK/SDK3A/Public SDK API`

Cependant, la plupart des événements et méthodes sont partagés entre les SDK pour mondes et avatars et sont définis dans le **Package SDK de Base** : `Packages/VRChat SDK - Base > Editor/VRCSDK/Dependencies/VRChat/Public SDK API`.

D'autres méthodes marquées comme `[PublicAPI]` font également partie de l'API SDK Public. Par exemple, "Packages/VRChat SDK - Base/Editor/VRCSDK/Dependencies/VRChat/API/VRCApi.cs" pour la mise à jour de la description des contenus.

:::note

Ces types se trouvent dans des définitions d'assemblages qui sont référencés automatiquement. Si vous écrivez du code dans votre propre projet, les types seront généralement disponibles par défaut. Si vous écrivez un package redistribuable et avez votre propre définition d'assemblage, vous devrez ajouter les références de définition d'assemblage appropriées :

Pour les avatars : `VRC.SDK3A.Editor`  
Pour les mondes : `VRC.SDK3.Editor`  
Pour les deux : `VRC.SDKBase.Editor`

:::

# Qu'est-ce qui est disponible ?

Pour la liste la plus à jour des événements et des méthodes, nous vous recommandons de consulter directement les fichiers mentionnés ci-dessus.

Mais voici une courte liste de ce qui est disponible :

- Événements OnEnable/OnDisable du panneau principal du SDK
- Événements de début/fin de création
- Événements de succès/erreur de téléchargement
- Méthodes de création, de création et de test, et de création et de téléchargement

:::note
Si vous rencontrez des exceptions lors du processus de création, vous pouvez consulter la liste des exceptions attendues dans les définitions de l'interface.
:::
## Exemples

### Obtenir une instance d'un constructeur

Se connecter à `OnSdkPanelEnable` garantira que la fenêtre du SDK a été ouverte et que les constructeurs ont été enregistrés. Vous pouvez ensuite utiliser `TryGetBuilder` pour obtenir une instance du constructeur dont vous avez besoin.

> Vous pouvez appeler `VRCSdkControlPanel.TryGetBuilder` à n'importe quel moment, mais cela renverra false si la fenêtre du SDK n'est pas ouverte ou si le constructeur que vous essayez d'accéder n'est pas disponible.

```cs
[InitializeOnLoadMethod]
public static void RegisterSDKCallback()
{
    VRCSdkControlPanel.OnSdkPanelEnable += AddBuildHook;
}

private IVRCSdkAvatarBuilderApi _builder;

private static void AddBuildHook(object sender, EventArgs e)
{
    VRCSdkControlPanel.TryGetBuilder<IVRCSdkAvatarBuilderApi>(out _builder);
}
```

### Exécuter du code avant la création

`OnSdkBuildStart` s'exécute juste avant que le SDK ne lance le processus de création, mais après que les validations et les rappels de demande de création ont été effectués.

```cs
[InitializeOnLoadMethod]
public static void RegisterSDKCallback()
{
    VRCSdkControlPanel.OnSdkPanelEnable += AddBuildHook;
}

private static void AddBuildHook(object sender, EventArgs e)
{
    if (VRCSdkControlPanel.TryGetBuilder<IVRCSdkAvatarBuilderApi>(out var builder))
    {
        builder.OnSdkBuildStart += OnBuildStarted;
    }
}

private static void OnBuildStarted(object sender, object target)
{
    Debug.Log("Création de " + ((GameObject) target).name);
}
```

### Création depuis un script

```cs
[MenuItem("Mes Outils/Créer l'Avatar Sélectionné")]
public static async void BuildSelectedAvatar()
{
    var avatar = Selection.activeGameObject;
    if (!VRCSdkControlPanel.TryGetBuilder<IVRCSdkAvatarBuilderApi>(out var builder)) return;
    try {
      await builder.BuildAndTest(avatar);
    } catch (Exception e) {
      Debug.LogError(e.Message);
    }
}
```
## Attention
:::caution
Si vous utilisez actuellement la réflexion pour accéder aux détails internes du SDK, nous vous recommandons de passer à l'API publique dès que possible.
:::
Nous allons faire de notre mieux pour fournir une API stable, mais elle reste sujette à des modifications futures. Nous vous recommandons d'utiliser le sémantique versioning (semver) pour définir quelle version du SDK est compatible avec vos outils. [En savoir plus ici](https://vcc.docs.vrchat.com/vpm/packages/#versions-and-ranges).
