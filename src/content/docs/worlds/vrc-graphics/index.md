---
title: "VRCGraphics"
---
# Types

## VRCShader

Classe principale pour les paramètres globaux des shaders. Voir les [fonctions documentées ci-dessous](#vrcshaderpropertytoid) pour plus d'informations.

## VRCGraphics

Expose un sous-ensemble de la classe `Graphics` intégrée d'Unity. Voir les fonctions documentées pour plus de détails.

# Fonctions exposées

## VRCGraphics.Blit()

Copie la texture source dans la RenderTexture de destination avec un shader. Notez que nous ne vous permettons pas de fournir une destination nulle.

Voir : https://docs.unity3d.com/2019.4/Documentation/ScriptReference/Graphics.Blit.html

### Exemple de Minimap
La version du SDK installée par [le Creator Companion](https://vcc.docs.vrchat.com) comprend une scène d'exemple qui fournit une Minimap performante comme exemple d'utilisation de Graphics.Blit. Vous pouvez l'ouvrir depuis la barre de menu Unity sous VRChat SDK > Samples > Minimap. Cet exemple utilise le Graphique Udon, il est également disponible en tant qu'[exemple UdonSharp](https://assets.vrchat.com/sdkExamples/com.vrchat-examples.minimap-1.0.0.unitypackage).

![index-aecb84d-minimap-example.png](/img/worlds/index-aecb84d-minimap-example.png)

### Exceptions pour Meta Quest

VRCGraphics.Blit ne fonctionnera pas sur le GPU Quest à moins que vous :

Ajoutiez ZTest Always au shader
OU
Désactiviez la profondeur sur la RenderTexture cible.

Le non-respect de ces conditions entraînera l'échec de l'opération.

## VRCGraphics.DrawMeshInstanced()

Dessine le même maillage plusieurs fois en utilisant l'instanciation GPU.

Voir : https://docs.unity3d.com/2019.4/Documentation/ScriptReference/Graphics.DrawMeshInstanced.html

## VRCShader.PropertyToID()

Utilisez PropertyToID pour obtenir un ID basé sur un nom de propriété de shader. Appelez cette fonction une seule fois pendant l'initialisation, l'ID peut être réutilisé et ne changera pas, même entre différents matériaux et shaders.

Notez que le nom de la propriété doit être préfixé par “\_Udon”, ou être la chaîne littérale “\_AudioTexture” pour être utilisé avec VRCShader.SetGlobal, cependant, il retournera toujours l'ID indépendamment de cela.

Voir : https://docs.unity3d.com/2019.4/Documentation/ScriptReference/Shader.PropertyToID.html

## VRCShader.SetGlobal()

Utilisez l'ID acquis avec PropertyToID comme clé et spécifiez une valeur du type correct. La valeur sera disponible dans _tous_ les shaders du monde (y compris ceux sur les avatars !) sous le nom passé à PropertyToID.

Variantes disponibles :

  * VRCShader.SetGlobalColor()
  * VRCShader.SetGlobalFloat()
  * VRCShader.SetGlobalFloatArray()
  * VRCShader.SetGlobalInteger() définit toujours la valeur en `float` pour le moment, en raison d'un bug d'Unity
  * VRCShader.SetGlobalMatrix()
  * VRCShader.SetGlobalMatrixArray()
  * VRCShader.SetGlobalTexture()
  * VRCShader.SetGlobalVector()
  * VRCShader.SetGlobalVectorArray()