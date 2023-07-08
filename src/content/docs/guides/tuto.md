---
title: Créer son propre tuto
description: Bien configurer le tutoriel pour implémentation sur le site de vrchat france
---

# Tutoriel VRChat

## Thème

Pour bien présenter son tutoriel, il est important de commencer par son titre ! Pour cela vous allez pouvoir rajouter au tout début de votre fichier: 

```
---
title: Un titre
description: Une description
---
```

:::caution[Ou envoyer les postes ?]
Si vous souhaitez contribuer, merci de passer par le [Discord](https://discord.gg/vrchatfrance).
:::
Voici la structure que cela prendra sur le sites:

   <FileTree>

   - Unity/
     - PostProcess/
       - **basic_install.md**
     - Lightprobes/
   - UdonSharp

   </FileTree>


Cela va permettre d'identifier correctement ce sur quoi le tutoriel va porter. Ensuite, vous avez plus qu'a suivre le tutoriel de markdown pour pouvoir configurer votre page correctement ! 


# Tutoriel Markdown

Le Markdown est un langage de balisage léger qui permet de formater du texte de manière simple et lisible. Il est couramment utilisé pour la rédaction de documents, la création de pages web, la rédaction de README, etc. Voici les principales balises Markdown que vous pouvez utiliser :

## Titres

Pour créer des titres, utilisez le symbole dièse (`#`) suivi d'un espace, suivi du texte du titre. Vous pouvez utiliser de un à six dièses pour les différents niveaux de titres :

```
# Titre de niveau 1
## Titre de niveau 2
### Titre de niveau 3
```

## Paragraphe

Les paragraphes sont simplement des lignes de texte consécutives. Assurez-vous de laisser une ligne vide entre deux paragraphes pour les séparer :

```
Ceci est un paragraphe.

Ceci est un autre paragraphe.
```

## Mise en forme du texte

- Pour mettre un texte en **gras**, entourez-le avec deux astérisques (`**`) ou deux traits de soulignement (`__`) de chaque côté :

```
**Ceci est en gras**
__Ceci est en gras également__
```

- Pour mettre un texte en *italique*, entourez-le avec un astérisque (`*`) ou un trait de soulignement (`_`) de chaque côté :

```
*Ceci est en italique*
_Ceci est en italique également_
```

- Vous pouvez également combiner les astérisques et les traits de soulignement pour créer des mises en forme mixtes :

```
**Texte en gras et _italique_**
```

## Listes

Pour créer une liste non ordonnée, utilisez des astérisques, des tirets ou des signes plus (`*`, `-`, `+`) suivis d'un espace :

```
- Élément 1
- Élément 2
- Élément 3
```

Pour créer une liste ordonnée, utilisez des chiffres suivis d'un point (`1.`, `2.`, `3.`) suivi d'un espace :

```
1. Élément 1
2. Élément 2
3. Élément 3
```

## Liens

Pour créer un lien, utilisez la syntaxe `[texte du lien](URL)`. Par exemple :

```
[Google](https://www.google.com)
```

## Images

Pour insérer une image, utilisez la syntaxe `![texte alternatif](URL de l'image)`. Par exemple :

```
![Logo Markdown](https://exemple.com/logo.png)
```

## Blocs de code

Pour afficher du code, entourez-le avec trois backticks (```) avant et après. Vous pouvez également spécifier le langage pour une coloration syntaxique appropriée :

\```
function hello() {
    console.log("Bonjour !");
}
\```

## Citations

Pour créer une citation, utilisez le symbole plus grand que (`>`) suivi d'un espace :

```
> Ceci est une citation.
```

## Lignes horizontales

Pour insérer une ligne horizontale, utilisez trois traits d'union (`---`) ou trois astérisques (`***`) sur une ligne séparée :

```
---
```

ou

```
***
```

:::tip[Le plus ?]
Grâce à vous, vous allez aidez plein de personnes dans le besoin qui recherche de l'aide sur Unity ou Blender ! 
:::