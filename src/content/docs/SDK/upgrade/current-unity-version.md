---
title: "Version Actuelle de Unity"
sidebar:
    badge: 
        text: Mis à jour
        variant: tip
---

La version actuelle de Unity utilisée par VRChat est [**2022.3.6f1**](https://unity.com/releases/editor/whats-new/2022.3.6).

Si vous avez Unity Hub installé, vous pouvez [**cliquer sur ce lien**](unityhub://2022.3.6f1/b9e6e7e9fa2d) pour installer la version correcte de Unity. Nous avons obtenu ce lien depuis les [archives des versions de l'éditeur Unity](https://unity.com/releases/editor/archive).

Unity 2022.3.6f1 inclut de nombreuses améliorations telles que des temps d'itération plus rapides, des temps d'importation d'assets améliorés, des temps de changement de plateforme *beaucoup* plus rapides, une meilleure stabilité de l'éditeur, un support complet de C# 8, une fonctionnalité de recherche rapide, [et bien plus encore !](https://unity.com/releases/lts)

**Unity 2022 est requis pour utiliser la dernière version du SDK VRChat**, et nous recommandons fortement de mettre à jour si vous êtes encore sur Unity 2019. Sans mise à jour, vous ne pourrez pas accéder aux futures mises à jour du SDK, et certains contenus précédemment créés pourraient rencontrer des problèmes.

Pour des instructions sur comment mettre à jour, [visitez notre documentation Unity 2019 à 2022](/sdk/upgrade/unity-2022).

## Problèmes Connus

* La première fois que vous ouvrez une Scène et sélectionnez un GameObject à l'intérieur d'un préfabriqué avec un comportement U#, l'interface utilisateur pour le composant directement en dessous de ce comportement U# ne montrera pas son interface utilisateur. La désélection et la re-sélection du préfabriqué résolvent ce problème.
* Les particules tampons ne fonctionnent pas comme elles le faisaient dans Unity 2019, [il existe une solution de contournement pour les réparer de la part du membre de la communauté hfcRed ici](https://x.com/hfcRedddd/status/1696915379090604179).
* L'éditeur peut se planter lors de la mise à jour d'une référence de graphe de shader par un autre shader utilisant UsePass. Il s'agit d'un problème avec Unity 2022.3.6f1 et est résolu dans la version 2022.3.14f1.
* Unity 2022 peut parfois provoquer l'arrêt du débogueur de Rider pour des exceptions non gérées dans l'IMGUI de Unity.
    * Veuillez vous référer à [cette solution de contournement](https://forum.unity.com/threads/rider-debugger-breaks-on-unhandled-exception.1135879/#post-7305256) et au [suivi des bugs de Jetbrains](https://youtrack.jetbrains.com/issue/RIDER-64944) pour plus d'informations.
* Les sources audio spatialisées peuvent créer des avertissements lors de l'entrée en mode lecture ou lors de l'ajustement de leurs paramètres.