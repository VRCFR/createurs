---
title: "VRC Pickup"
---
Permet aux objets d'être ramassés, tenus et utilisés par les joueurs.

## Règles de Proximité

:::note

Toutes les règles décrites dans cette section s'appliquent également aux "Interactables", c'est-à-dire aux UdonBehaviours qui ont un événement `Interact` (ils montreront également un curseur "Proximity" dans l'Inspecteur).
:::

La valeur "Proximity" définit à quelle distance votre objet ramassable pourra être saisi. Elle est donnée en mètres, alias "unités Unity", où la longueur d'un côté d'un Cube par défaut équivaut à 1 unité.

Il y a 2 mécanismes de saisie où la valeur de Proximité sera en jeu :

- **Raycast :** Si vous êtes loin d'un objet à ramasser, ou si vous utilisez le mode bureau, les objets seront mis en évidence si le "laser" sortant de vos mains (en VR) ou de votre tête (bureau) intersecte le collider sur un objet à ramasser. Le calcul de la distance pour comparer à la Proximité est différent en mode VR et Bureau :
    - VR : La distance entre l'origine du laser (c'est-à-dire vos contrôleurs de main) et le point d'impact sur le collider, en mètres.
    - Bureau : La distance entre l'origine du laser (c'est-à-dire votre tête ou la position de la caméra principale) moins une valeur "d'atteinte supplémentaire" pour compenser l'incapacité à avancer vos mains. Il s'agit d'une valeur approximative qui prend également en compte l'échelle de votre avatar ("bras plus longs"). Comme elle est soustraite de la distance, cela vous permettra de saisir des objets qui sont techniquement hors de la portée de "Proximité", mais pourraient être saisis en bougeant vos bras tout en restant dans cette position en VR.
- **Hover (uniquement VR) :** Si vos mains sont suffisamment proches d'un objet, les objets à ramasser seront mis en évidence même si un rayon dans la direction du laser UI ne croise pas l'objet. Cela permet une "saisie" plus naturelle des objets. La distance d'atteinte est une sphère centrée sur vos mains avec un rayon de 0,4 mètres multiplié par l'échelle de votre avatar (notez que cette valeur n'est pas directement comparable au système de "mise à l'échelle de l'avatar" disponible pour les utilisateurs, bien que changer l'échelle de l'avatar de cette manière puisse affecter la portée).
    - La valeur "Proximity" est toujours comparée à la distance brute entre votre main et le collider sur l'objet à ramasser, ce qui signifie que la "distance d'atteinte" décrite n'est qu'une limite supérieure pour la proximité à laquelle le mode "Hover" s'engagera.
    - Par exemple, régler la Proximité à 0 nécessitera que la main soit _à l'intérieur_ du collider pour que l'objet à ramasser soit mis en évidence (il pourra toujours être saisi en mode Bureau cependant, en raison de la "portée supplémentaire" que les utilisateurs de bureau obtiennent pour compenser).
    - En tant que technique avancée, vous pouvez ajuster la valeur de Proximité en fonction des données fournies via le [système de mise à l'échelle de l'avatar](/worlds/udon/players/player-avatar-scaling).

## Nécessite :

- Rigidbody
- Collider

| Paramètre                           | Description |
| :--                                 | :--         |
| Momentum Transfer Method            | Définit comment la force de collision sera ajoutée à l'autre objet qui a été frappé, en utilisant Rigidbody.AddForceAtPosition.<br />Note : la force ne sera ajoutée que si 'AllowCollisionTransfer' est activé.                                                                                                                                          |
| Disallow Theft                      | Si d'autres utilisateurs sont autorisés à prendre l'objet ramassé hors de la prise de quelqu'un d'autre                                                                                                                                                                       |
| Physical Root                       | Peut être utilisé si la racine de l'objet n'est pas sur le même GameObject que ce script, permet plusieurs points de ramassage sur un seul objet.                                                                                                                               |
| Exact Gun                           | L'objet sera tenu à cette position s'il est réglé sur Exact Gun                                                                                                                                                       |
| Exact Grip                          | L'objet sera tenu à cette position s'il est réglé sur Exact Grip                                                                                                                                                      |
| Allow Manipulation When Equipped    | Si l'utilisateur doit pouvoir manipuler l'objet ramassé pendant qu'il le tient, s'il utilise une manette                                                                                                                                                                      |
| Orientation                         | La manière dont l'objet sera tenu                                                                                                                                                                                      |
| Auto Hold                           | Si l'objet ramassé doit rester dans la main de l'utilisateur après qu'il ait lâché le bouton de saisie.<br />- Auto Detect : détecte automatiquement quoi faire<br />- Yes : Après avoir relâché le bouton de saisie, l'objet reste dans la main jusqu'à ce que le bouton de lâcher soit pressé et relâché<br />- No : Après avoir relâché le bouton de saisie, l'objet est lâché<br />Note : Cela ne s'applique qu'aux schémas de contrôle qui manquent d'une entrée "Utiliser" indépendante de "Saisir", comme le mode Bureau, Vive et les systèmes d'entrée similaires à Vive. Cela ne s'applique pas aux Quest, Quest-like, et autres systèmes d'entrée avec une gâchette définie. |
| Use Text                            | Texte qui apparaît lorsque l'utilisateur a un objet équipé, l'incitant à "tirer" l'objet.<br />Nécessite que "Auto Hold" soit réglé sur "Yes".                                                                                                                                  |
| Throw Velocity Boost Min Speed      | La vitesse à laquelle l'objet doit se déplacer pour être lancé                                                                                                                                                         |
| Throw Velocity Boost Scale          | À quel point le lancer doit s'échelonner, plus élevé = lancé plus rapide tandis que plus bas signifie une vitesse de lancer plus lente                                                                                                                                        |
| Pickupable                          | Si vous pouvez ramasser l'objet                                                                                                                                                                                        |
| Proximity                           | La distance maximale depuis laquelle cet objet peut être atteint. Voir la section ci-dessus pour plus de détails. |
