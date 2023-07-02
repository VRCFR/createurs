---
title: "Menu d'expressions et contrôles"
description: "Guide sur la création d'un menu d'expressions et les différents types de contrôles disponibles"
---

:::caution Nécessite des connaissances en Unity

Ce document est rédigé en supposant que vous avez quelques connaissances sur [Unity Animators](https://docs.unity3d.com/2019.4/Documentation/Manual/class-AnimatorController.html).
:::

## Création d'un menu d'expressions

1. Faites un clic droit dans le projet Unity, sélectionnez `Create/VRC Scriptable Objects/Expressions Menu`
2. Sélectionnez le nouvel objet dans le projet

Vous devrez également créer un objet ExpressionParameters, où vous pouvez définir tous les paramètres personnalisés que vous utilisez. Vous pouvez les nommer ici, ainsi que définir leur type. Vous créez un objet de la même manière que ci-dessus :

3. Faites un clic droit dans le projet Unity, sélectionnez `Create/VRC Scriptable Objects/Expression Parameters`
4. Sélectionnez le nouvel objet dans le projet.
5. Configurez vos paramètres personnalisés avec des noms et des types. `Int` a une plage de 0 à 255, Float a une plage de -1,0 à 1,0. Vous pouvez accéder à vos paramètres avec vos noms personnalisés pour faciliter l'organisation.

Après cela, vous devrez revenir à votre menu Expressions.

6. Dans l'inspecteur, cliquez sur "Add Control". Jusqu'à 8 contrôles peuvent être ajoutés à un menu.
7. Vous pouvez également nommer les états, ajouter des icônes et modifier l'ordre des contrôles ici.
8. Lorsque vous avez terminé, faites glisser cet objet vers la propriété "Expressions Menu" de l'Avatar Descriptor.
9. Faites glisser votre objet Expressions Parameters vers la propriété "Expressions Parameters" de l'Avatar Descriptor.

À savoir : nous avons inclus quelques icônes par défaut que vous pouvez utiliser dans `VRCSDK/Assets3/Expression Menu Icons/`.

### Types de contrôles

* **Bouton** - Définit un paramètre lorsqu'il est cliqué, puis le réinitialise après l'envoi de la synchronisation/réinitialisation, généralement après environ une seconde. Ne peut pas être maintenu enfoncé.
* **Toggle** - Définit un paramètre lorsque le bouton bascule, se réinitialise lorsque le bouton est désactivé.
* **Sous-menu** - Ouvre un autre menu d'expressions. Il peut également définir un paramètre lorsqu'il est ouvert, si tel est le cas, ce paramètre est réinitialisé à zéro lorsque vous quittez ce menu.
  * **Note importante :** Vous pouvez mettre des sous-menus dans des sous-menus !

* **Marionnette à deux axes** - Ouvre un menu de marionnettes à axes qui contrôle deux paramètres flottants en fonction de la position du joystick. Les paramètres sont assignés à la position verticale et horizontale. Les valeurs flottantes vont de -1,0 à 1,0.
* **Marionnette à quatre axes** - Ouvre un menu de marionnettes à axes qui contrôle quatre paramètres flottants en fonction de la position du joystick. Les paramètres sont attribuées dans l'ordre : haut, droite, bas, gauche. Les valeurs flottantes vont de 0,0 à 1,0.
* **Marionnette radiale** - Ouvre un menu de marionnettes radiales qui contrôle un seul paramètre flottant, un peu comme une barre de progression que vous pouvez remplir ! La valeur flottante va de 0,0 à 1,0.

:::note

Les contrôles de **marionnettes** utilisent [**IK Sync**](/avatars/animator-parameters#sync-types) lorsqu'ils sont ouverts. Si vous souhaitez une synchronisation aussi proche que possible de vos entrées pour des mouvements rapides, vous devriez utiliser un menu de marionnettes.\n\n**Bouton**/**Toggle** utilise **Playable Sync**, qui se met à jour à la demande, au lieu de manière continue, et convient aux éléments que vous "allumez/éteignez" mais pour lesquels une synchronisation très précise n'est pas nécessaire.\n\nLa synchronisation du menu de marionnettes se met toujours à jour à la fréquence maximale disponible et lisse les valeurs pour les utilisateurs distants - bien meilleur lorsque la réplication temporelle est importante.",
  "title": "Synchronisation du menu de marionnettes"
:::

Les contrôles de marionnettes peuvent également définir un paramètre lors de l'entrée dans le menu.

Si vous utilisez un appui sur le joystick pour sortir, alors les paramètres marionnettés conserveront leur valeur jusqu'à ce que vous les modifiez à nouveau - soit en réentrant dans un menu de marionnettes qui utilise ces paramètres, soit en les utilisant ailleurs.