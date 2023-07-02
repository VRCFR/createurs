---
title: "Système de blocage et de repli de shader"
description: "Cette page sert de description du Système de Blocage de Shader, de son fonctionnement et de la manière dont les auteurs de shaders peuvent l'utiliser pour que leur shader adapte son fonctionnement en cas de blocage des shaders sur un avatar utilisant un shader donné."
---

Cette page sert de description du Système de Blocage de Shader, de son fonctionnement et de la manière dont les auteurs de shaders peuvent l'utiliser pour que leur shader adapte son fonctionnement en cas de blocage des shaders sur un avatar utilisant un shader donné.

## Mise à jour du système de repli des shaders de VRChat 2021.4.2
Les améliorations du repli des shaders fonctionnent en utilisant le champ "Tags" en haut du shader.
```text
Tags{"Queue"="Geometry"}
```
Le champ des tags peut ressembler à cela par défaut.

Vous pouvez désormais ajouter différents tags, sous le nom `VRCFallback`, pour spécifier quel shader de repli utiliser :
```text
Tags{"Queue"="Geometry" "VRCFallback"="Toon"}
```
Certains tags de repli peuvent être combinés, vous pouvez par exemple utiliser `ToonCutout` :
```text
Tags{"Queue"="Geometry" "VRCFallback"="ToonCutout"}
```
Les tags pris en charge sont les suivants :

```text
Unlit
VertexLit
Toon
Transparent
Cutout
Fade
Particle
Sprite
Matcap
MobileToon
DoubleSided
Hidden //(ceci masquera le mesh de la vue si le shader est bloqué, utile pour des effets de raymarching par exemple)
```
Toon et Unlit peuvent également être combinés avec les tags Transparent, Cutout, Fade et DoubleSided pour un contrôle plus précis. Le tag Toon prend en charge des variations telles que DoubleSided Cutout.
:::caution

Veuillez noter que l'utilisation des tags Transparent ou Fade avec Toon entraînera un repli vers Unlit Transparent. Vous voudrez peut-être en tenir compte lors du choix des tags de repli.
:::
La spécification de tout autre tag entraînera un repli vers un shader Standard.

Si aucun tag n'est spécifié, l'ancien système de repli sera utilisé, suivant le modèle du nom du shader, des mots clés, etc.

Nous copions maintenant TOUS les paramètres de shader standard vers le matériau de repli, y compris les suivants :
```text
_MainTex
_MetallicGlossMap
_SpecGlossMap
_BumpMap
_ParallaxMap
_OcclusionMap
_EmissionMap
_DetailMask
_DetailAlbedoMap
_DetailNormalMap
_Color
_EmissionColor
_SpecColor
_Cutoff
_Glossiness
_GlossMapScale
_SpecularHighlights
_GlossyReflections
_SmoothnessTextureChannel
_Metallic
_SpecularHighlights
_GlossyReflections
_BumpScale
_Parallax
_OcclusionStrength
_DetailNormalMapScale
_UVSec
_Mode
_SrcBlend
_DstBlend
_ZWrite
```
## Ancien système de repli
Lorsqu'un shader est bloqué par le système de sécurité, il est d'abord vérifié s'il correspond à l'un des shaders pré-compilés internes de la liste suivante :
```text title="Shaders pré-compilés internes"
  "Standard",
  "Standard (Specular setup)",
  "Effects/Rim",
  "Effects/GlowAdditiveSimple",
  "Legacy Shaders/Bumped Diffuse",
  "Legacy Shaders/Bumped Specular",
  "Legacy Shaders/Decal",
  "Legacy Shaders/Diffuse",
  "Legacy Shaders/Diffuse Detail",
  "Legacy Shaders/Diffuse Fast",
  "Legacy Shaders/Lightmapped/Diffuse",
  "Legacy Shaders/Lightmapped/Specular",
  "Legacy Shaders/Lightmapped/VertexLit",
  "Legacy Shaders/Parallax Diffuse",
  "Legacy Shaders/Parallax Specular",
  "Legacy Shaders/Reflective/Bumped Diffuse",
  "Legacy Shaders/Reflective/Bumped Specular",
  "Legacy Shaders/Reflective/Bumped Unlit",
  "Legacy Shaders/Reflective/Bumped VertexLit",
  "Legacy Shaders/Reflective/Diffuse",
  "Legacy Shaders/Reflective/Parallax Diffuse",
  "Legacy Shaders/Reflective/Parallax Specular",
  "Legacy Shaders/Reflective/Specular",
  "Legacy Shaders/Reflective/VertexLit",
  "Legacy Shaders/Self-Illum/Bumped Diffuse",
  "Legacy Shaders/Self-Illum/Bumped Specular",
  "Legacy Shaders/Self-Illum/Diffuse",
  "Legacy Shaders/Self-Illum/Parallax Diffuse",
  "Legacy Shaders/Self-Illum/Parallax Specular",
  "Legacy Shaders/Self-Illum/Specular",
  "Legacy Shaders/Self-Illum/VertexLit",
  "Legacy Shaders/Specular",
  "Legacy Shaders/Transparent/Bumped Diffuse",
  "Legacy Shaders/Transparent/Bumped Specular",
  "Legacy Shaders/Transparent/Cutout/Bumped Diffuse",
  "Legacy Shaders/Transparent/Cutout/Bumped Specular",
  "Legacy Shaders/Transparent/Cutout/Diffuse",
  "Legacy Shaders/Transparent/Cutout/Soft Edge Unlit",
  "Legacy Shaders/Transparent/Cutout/Specular",
  "Legacy Shaders/Transparent/Cutout/VertexLit",
  "Legacy Shaders/Transparent/Diffuse",
  "Legacy Shaders/Transparent/Parallax Diffuse",
  "Legacy Shaders/Transparent/Parallax Specular",
  "Legacy Shaders/Transparent/Specular",
  "Legacy Shaders/Transparent/VertexLit",
  "Legacy Shaders/VertexLit",
  "MatCap/Vertex/Textured Lit",
  "Mobile/Bumped Diffuse",
  "Mobile/Bumped Specular",
  "Mobile/Bumped Specular (1 Directional Light)",
  "Mobile/Diffuse",
  "Mobile/Unlit (Supports Lightmap)",
  "Mobile/Particles/Additive",
  "Mobile/Particles/Alpha Blended",
  "Mobile/Particles/Multiply",
  "Mobile/Particles/VertexLit Blended",
  "Particles/~Additive-Multiply",
  "Particles/Additive",
  "Particles/Additive (Soft)",
  "Particles/Alpha Blended",
  "Particles/Alpha Blended Premultiply",
  "Particles/Anim Alpha Blended",
  "Particles/Multiply",
  "Particles/Multiply (Double)",
  "Particles/VertexLit Blended",
  "Sprites/Default",
  "Sprites/Diffuse",
  "Toon/Lit",
  "Toon/Lit (Double)",
  "Toon/Lit Cutout",
  "Toon/Lit Cutout (Double)",
  "Toon/Lit Outline",
  "UI/Default",
  "Unlit/FailShader",
  "VRChat/UI/Default"
```
Si un shader interne correspond, le repli sera un nouveau shader du même type, mais utilisant le shader pré-compilé interne. Tous les paramètres sont copiés. Les nouvelles versions ou variantes non incluses ne fonctionneront pas, car elles seront remplacées.

Si le shader ne correspond pas en interne, le nom du shader (pas le nom du fichier, mais celui fourni dans la ligne supérieure de la source du shader) est utilisé pour rechercher certaines caractéristiques identifiées et les remplacer par un shader de repli de type similaire :
```text title="Recherches de noms de shader de repli"
  "Unlit",
  "VertexLit",
  "Toon",
  "Outline",
  "Transparent",
  "Fade",
  "Cutout",
  "Particle",
  "Sprite",
  "MatCap"
```
Ces noms peuvent apparaître n'importe où dans le nom complet du shader.

De plus, certaines propriétés du shader sont recherchées :
```text title="Propriétés du shader"
"_Ramp" == "Toon"
"_ALPHABLEND_ON" == "Transparent"
"_ALPHATEST_ON" == "Cutout"
```
Toutes les correspondances sont sensibles à la casse.

Des efforts sont déployés pour créer un matériau de repli qui approxime les noms correspondants. Par exemple, les noms contenant "Sprite" utilisent le shader intégré de Unity "Sprites/Default".

Vous pouvez combiner "Toon" et "Cutout", ou "Toon" et "Outline" pour obtenir des shaders combinés, cependant "Transparent" et "Fade" n'ont actuellement pas de shader Toon Lit et utilisent à la place "Unlit/Transparent".

Le support de "Outline" est hautement expérimental et peut être supprimé en cas de perte de performances.

Pour les shaders "Toon", le paramètre "_Ramp" est copié (Texture2D).
Pour les shaders "MatCap", le paramètre "_MatCap" est copié (Texture2D).

Si aucune correspondance n'est trouvée dans le nom du shader, un matériau Standard est utilisé.

Tentative de transférer les paramètres nommés "_MainTex" et "_Color" vers le shader de repli. Si aucun des deux paramètres ne correspond, un shader Matcap est fourni avec la couleur définie sur la couleur du rang de l'utilisateur.

Tout cela est sujet à de nombreux changements à mesure que nous peaufinons le système de repli des shaders.