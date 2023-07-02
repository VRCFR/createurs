---
title: "Comportements d'état"

---

:::caution Connaissance de Unity requise

Ce document est écrit en supposant que vous avez une certaine connaissance des [Animator de Unity](https://docs.unity3d.com/2019.4/Documentation/Manual/class-AnimatorController.html).
:::

Lorsque vous avez un état spécifique sélectionné dans la vue de l'Animator, vous pouvez ajouter des Comportements d'état. Ils sont un peu comme des composants pour les états. Ils font différentes choses. Essayez de les ajouter, et vous verrez ce qu'ils peuvent faire !

Tous les comportements d'état s'exécutent au premier frame de la transition vers cet état.

Les comportements d'état *devraient* s'exécuter quel que soit le temps pendant lequel la machine d'état reste dans l'état contenant le comportement d'état.

:::caution

Le terme "devrait" est utilisé délibérément ici, car la [documentation Unity](https://docs.unity3d.com/2019.4/Documentation/Manual/StateMachineBehaviours.html) ne garantit pas que les comportements d'état s'exécuteront si la transition ou la durée de l'état est très courte.

Si vous voulez être **complètement** sûr, assurez-vous que le temps total passé dans l'état contenant le comportement d'état et dans toutes les transitions directes vers cet état est d'au moins 0,02 seconde - bien que, en pratique, cela ne semble pas être nécessaire.

:::

## Contrôleur de couche d'Animator

![Unity_2020-07-08_12-50-04.png](/img/avatars/state-behaviors-e78eb77-Unity_2020-07-08_12-50-04.png)

Le Contrôleur de couche d'Animator vous permet de mélanger le poids d'une couche spécifique de l'Animator à l'intérieur de n'importe quelle couche jouable donnée sur une durée donnée.

Si l'état est quitté pendant la durée de mélange, la couche cible est immédiatement réglée sur le poids final.

Le poids de la couche restera jusqu'à ce qu'un autre état utilise à nouveau ce Comportement d'état et le réinitialise.
Certainement ! Voici les informations reformatées dans un tableau markdown à deux colonnes :

| Nom de la propriété | But                                                                                         |
| ------------------- | -------------------------------------------------------------------------------------------- |
| Jouable             | Vous permet de sélectionner quelle couche jouable vous souhaitez affecter.                   |
| Couche              | L'index de la couche jouable que vous souhaitez affecter. Vous ne pouvez pas changer le poids de la couche 0 (base) - il est toujours réglé sur un poids de 1.0. |
| Poids cible         | Définit le poids auquel vous souhaitez effectuer le mélange.                                 |
| Durée de mélange    | Définit la période de temps (en secondes) pendant laquelle vous souhaitez effectuer le mélange. 0 signifie immédiat.        |
| Chaîne de débogage  | Lorsque ce Comportement d'état s'exécute, cette chaîne sera imprimée dans le journal de sortie. Utile pour le débogage. |


## Contrôle de la locomotion de l'Animator

![state-behaviors-f6f3250-Unity_2020-07-08_13-16-13.png](/img/avatars/state-behaviors-f6f3250-Unity_2020-07-08_13-16-13.png)
Le Contrôle de la locomotion de l'Animator vous permet de désactiver la locomotion dans un état donné de l'animateur. L'état de la locomotion restera jusqu'à ce qu'un autre état utilise à nouveau ce Comportement d'état et le modifie.

En mode Bureau, cela désactive le mouvement de translation et limite le mouvement de rotation (vue) à l'axe vertical. En réalité virtuelle (VR), cela désactive le mouvement de translation et de rotation du contrôleur et limite le IK du demi-corps (le IK du corps entier n'est pas affecté). Dans les deux modes, la capsule du joueur est figée en place.
| Paramètre | Description |
| :-- | :-- |
| Désactiver la locomotion | Si défini sur Vrai, la locomotion (déplacement avec les commandes) sera désactivée. Le déplacement en Roomscale sera toujours possible. Si défini sur Faux, la locomotion sera activée. |
| Chaîne de débogage | Lorsque ce Comportement d'état s'exécute, cette chaîne sera imprimée dans le journal de sortie. Utile pour le débogage. |

## Espace de pose temporaire de l'Animator
![state-behaviors-467daaf-Unity_2020-07-14_21-38-14.png](/img/avatars/state-behaviors-467daaf-Unity_2020-07-14_21-38-14.png)

Le Contrôle de l'espace de pose temporaire de l'Animator vous permet de déplacer le point de vue de la personne portant l'avatar vers la tête à ce moment précis de l'état de l'animateur.

La vue restera définie jusqu'à ce qu'un autre état utilise à nouveau ce Comportement d'état et le réinitialise ou le supprime.

Ce comportement est exécuté lorsque le