---
title : "VRC Mirror Reflection"
---
Utilisé pour les miroirs. Un exemple peut être trouvé dans les [Préfabriqués SDK](/worlds/sdk-prefabs#vrcmirror).

| Paramètre                 | Description |
| :--                       | :--         |
| Disable Pixel Lights      | Désactive l'éclairage en temps réel pixelisé par points et spots. Les lumières pixelisées seront réduites à un éclairage de vertex lorsque ceci est activé.                                                                                                                                       |
| Turn Off Mirror Occlusion | Désactive le culling d'occlusion sur le miroir. Activez ceci si vous voyez des objets clignoter dans le miroir.                                                                                                                                            |
| Reflect Layers            | Seuls les objets sur les couches sélectionnées seront rendus dans le miroir. Les objets sur la couche Water ne sont jamais rendus dans les miroirs.                                                                                                        |
| Mirror Resolution         | Résolution de rendu du miroir (par œil en VR). Auto rend à la même résolution que le casque HMD ou le moniteur de l'utilisateur jusqu'à un maximum de 2048x2048.                                                                                           |
| Maximum Antialiasing      | Le niveau maximal de MSAA appliqué à l'image rendue dans le miroir. Peut être outrepassé par les paramètres graphiques du client.                                                                                                                           |
| Custom Shader             | Le miroir utilisera ce shader au lieu du shader par défaut si un shader est fourni.                                                                                                                                                                        |
| Camera Clear Flags        | Spécifie les CameraClearFlags que le miroir utilisera pour effacer l'arrière-plan avant le rendu. Le défaut "From Reference Camera" utilisera les mêmes drapeaux que la caméra rendant le plan du miroir.                                                |
| Custom Skybox             | Si "Camera Clear Flags" est réglé sur "Custom Skybox," ce ciel sera montré dans le miroir. Si le mode "Custom Skybox" est sélectionné mais rien n'est fourni, l'arrière-plan sera noir.                                                                    |
| Custom Clear Color        | Si "Camera Clear Flags" est réglé sur "Solid Color," cette couleur sera utilisée comme arrière-plan. Notez que le canal alpha sera respecté, donc vous pouvez l'utiliser pour effacer l'alpha et l'utiliser dans un shader personnalisé (par exemple, pour des miroirs de style découpé). |
