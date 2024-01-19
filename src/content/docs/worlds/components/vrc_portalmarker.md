---
title: "VRC Portal Marker"
---
Crée des portails vers d'autres mondes VRChat.
Il y a deux principales manières d'utiliser ce composant :
1. Lien vers une instance publique : Réglez la propriété Room Id sur un monde spécifique, et le portail mènera à une instance publique existante ou nouvelle de ce monde.
2. Lien vers un monde quelque peu aléatoire via recherche : Réglez les paramètres `Search Term`, `Sort Heading`, `Sort Order` et éventuellement `Offset` pour effectuer une recherche de mondes, et le portail mènera au monde à l'offset spécifié dans les résultats de recherche. **Ne réglez PAS la propriété Room Id si vous souhaitez utiliser cette méthode.**

| Paramètre                | Description                                                                                                                                                                                                    |
|--------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| World                    | Contient un emplacement VRChat spécifique tel que le Hub ou Home, si l'un est sélectionné, le portail y mènera.                                                                                                 |
| Room Id                  | Id du monde de destination, comme `wrld_f995a2eb-7ddc-4558-aef1-815c3b23df6c`.                                                                                                                                  |
| Custom Portal Name       | Remplace le nom affiché au-dessus du portail.                                                                                                                                                                  |
| Sort Heading             | Comment trier les résultats de recherche - par Featured, Trending, Updated, Created, Active ou None.                                                                                                            |
| Sort Order               | Si les résultats sont triés en ordre Ascendant ou Descendant. Un ordre Descendant fera apparaître en premier les mondes "Most Trending", par exemple, tandis qu'Ascendant aura les mondes "Least Trending" en premier. |
| Offset                   | L'offset à utiliser pour choisir le portail à visiter. Utile si vous voulez faire 5 portails vers les 5 meilleurs mondes dans une catégorie, par exemple, en utilisant des Offsets de zéro à quatre.              |
| Search Term              | Les mots à utiliser lors de la recherche de mondes.                                                                                                                                                            |
| Tag                      | Une liste de tags séparés par des virgules à rechercher, si `Room Id` n'est pas réglé et `Sort Heading` est réglé sur `None`.                                                                                    |
