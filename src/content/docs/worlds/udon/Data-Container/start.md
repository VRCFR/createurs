---
title: "Conteneurs de données"
description: "Les conteneurs de données stockent les jetons de données dans différents formats, soit sous forme de liste de données séquentielles, soit sous forme de dictionnaire de données clé-valeur. Ils sont fonctionnellement similaires aux listes et aux dictionnaires de C#."
---

Les jetons de données, à leur tour, stockent toutes les autres valeurs dont vous pourriez avoir besoin. Chaque jeton stocke une seule variable, mais cela peut inclure un autre DataDictionary ou DataList complet, afin de prendre en charge l'imbrication.

De plus, les conteneurs de données sont compatibles avec [VRCJSON](/worlds/udon/data-containers/vrcjson), ce qui vous permet de convertir les données vers/depuis le format JSON standard, qui peut provenir de sources externes telles que le [chargement de chaîne à distance](/worlds/udon/string-loading).