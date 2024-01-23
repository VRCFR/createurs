---
title : "ASyncGPUReadback"
---

AsyncGPUReadback dans Unity est une fonctionnalité qui permet aux développeurs de copier des données, telles que la couleur d'un pixel spécifique, des textures sur le GPU vers du code sur le CPU. Cette fonction est similaire à `Texture2D.GetPixels` sauf qu'elle ne bloque pas les tâches sur le fil principal car elle s'exécute de manière asynchrone.

En effectuant le transfert de données de manière asynchrone, Unity assure que le processus n'affecte pas négativement la fréquence d'images et la performance globale de l'application. AsyncGPUReadback aide les développeurs à éviter de ralentir la pipeline de rendu, car le transfert de données se produit en arrière-plan, parallèlement au fil principal.

Les cas d'utilisation courants pour AsyncGPUReadback incluent la génération de données côté CPU basée sur la sortie rendue, tels que la création d'une chaîne de mipmaps de texture, la mise en œuvre d'effets de post-traitement personnalisés, ou l'analyse de cadres rendus à des fins d'IA et de vision par ordinateur.

## Différences entre Unity AsyncGpuReadback et VRCAsyncGpuReadback

L'implémentation de AsyncGpuReadback par VRChat utilise un wrapper qui appelle les fonctions Unity. Ce wrapper utilise une interface différente. Les différences sont les suivantes :

- Plutôt que d'appeler AsyncGpuReadback, vous devez utiliser VRCAsyncGpuReadback.
- Plutôt que de fournir `Action<AsyncGPUReadbackRequest> callback`, vous fournissez un UdonBehaviour, et ensuite cet UdonBehaviour recevra `OnAsyncGpuReadbackComplete` lorsque le readback est terminé.
- Plutôt que d'utiliser `GetData` sur le readback terminé, vous devez utiliser `TryGetData`.

Voir la documentation d'Unity sur cette fonctionnalité pour d'autres détails partagés :  
[Faire une demande de readback](https://docs.unity3d.com/2019.4/Documentation/ScriptReference/Rendering.AsyncGPUReadback.Request.html)  
[Obtenir des données d'un readback](https://docs.unity3d.com/2019.4/Documentation/ScriptReference/Rendering.AsyncGPUReadbackRequest.html)

## Utilisation de VRCAsyncGpuReadback

Lorsque vous utilisez VRCAsyncGpuReadback, il y a 3 étapes principales à suivre :

1. Configurer un tableau de données à utiliser.
2. Faire la demande de AsyncGpuReadback
3. Recevoir le message lorsque la demande est terminée
4. Extraire les données de la demande

## Exemple de Graphique de Nœuds Udon

![asyncgpureadback-mu8QGGS.png](/img/worlds/asyncgpureadback-mu8QGGS.png)

## Exemple UdonSharp

```csharp

using UdonSharp;
using UnityEngine;
using VRC.SDK3.Rendering;
using VRC.Udon.Common.Interfaces;
​
public class AGPURB : UdonSharpBehaviour
{
    public Texture texture;
​
    void Start()
    {
        VRCAsyncGPUReadback.Request(texture, 0, (IUdonEventReceiver)this);
    }
​
    public void OnAsyncGpuReadbackComplete(VRCAsyncGPUReadbackRequest request)
    {
        if (request.hasError)
        {
            Debug.LogError("Erreur de readback GPU !");
            return;
        }
        else
        {
            var px = new Color[texture.width * texture.height];
            Debug.Log("Succès de readback GPU : " + request.TryGetData(px));
            Debug.Log("Données de readback GPU : " + px[0]);
        }
    }
}
```