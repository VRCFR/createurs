---
title: "VRC Mirror Reflection"
description: "Utilisé pour les miroirs. Un exemple peut être trouvé dans les [Préfabriqués SDK](/worlds/sdk-prefabs#vrcmirror)."
---
| Paramètre | Description |
| :-- | :-- |
| Désactiver les Pixel Lights | Désactive l'éclairage ponctuel et directionnel basé sur des pixels en temps réel. Les lumières basées sur des pixels passeront à un éclairage basé sur les sommets lorsque cette option est activée. |
| Désactiver l'occultation des miroirs | Désactive l'occlusion sur le miroir. Activez cette option si vous voyez des objets clignoter dans le miroir. |
| Couches réfléchies | Seuls les objets des couches sélectionnées seront rendus dans le miroir. Les objets de la couche "Water" ne sont jamais rendus dans les miroirs. |
| Résolution du miroir | Résolution de rendu du miroir (par œil en réalité virtuelle). Le rendu automatique se fait à la même résolution que le casque ou le moniteur de l'utilisateur, jusqu'à un maximum de 2048x2048. |
| Anticrénelage maximum | Le niveau maximum de MSAA appliqué à l'image rendue dans le miroir. Peut être surclassé par les paramètres graphiques du client. |
| Shader personnalisé | Le miroir utilisera ce shader au lieu du shader par défaut, s'il est fourni. |
| Indicateurs de suppression de la caméra | Spécifie les indicateurs de suppression de la caméra que le miroir utilisera pour effacer l'arrière-plan avant le rendu. La valeur par défaut "Depuis la caméra de référence" utilise les mêmes indicateurs que la caméra qui rend le plan du miroir. |
| Skybox personnalisé | Si les indicateurs de suppression de la caméra sont définis sur "Skybox personnalisé", ce skybox sera affiché dans le miroir. Si le mode "Skybox personnalisé" est sélectionné mais qu'aucune valeur n'est fournie, l'arrière-plan sera noir. |
| Couleur de suppression personnalisée | Si les indicateurs de suppression de la caméra sont définis sur "Couleur unie", cette couleur sera utilisée comme arrière-plan. Notez que le canal alpha sera respecté, vous pouvez donc l'utiliser pour effacer l'alpha et l'utiliser dans un shader personnalisé (par exemple, pour des miroirs de style cut-out). |