---
title: "VRC Ui Shape"
---
Rendez l'interface utilisateur d'Unity interactive dans VRChat. Nécessite un élément [UICanvas](https://docs.unity3d.com/Manual/UICanvas.html) Unity sur le même GameObject.

## Étapes pour créer une interface utilisateur interactive avec VRC_UiShape

1. Ajoutez un Canvas en utilisant le menu clic droit dans votre hiérarchie.
2. Ajoutez un composant `VRC_UIShape` au Canvas.
3. Réglez le mode de rendu du Canvas sur Espace Monde.
4. Réduisez les échelles `x`, `y`, et `z` du Canvas. Habituellement, quelque part entre `0.001` et `0.005` fonctionnera bien. C'est la taille en mètres d'un seul pixel sur le canvas.
5. Définissez la couche GameObject du Canvas sur Default
6. Ajoutez vos éléments d'interface utilisateur au Canvas en utilisant le menu clic droit dans la hiérarchie
7. Réglez vos éléments d'interface utilisateur sur `Navigation: None` pour éviter que l'interface utilisateur ne se déplace lors de l'appui sur des touches ou du mouvement des joysticks.

## Problèmes courants

### Si vous avez un canvas qui ne fait pas apparaître le pointeur VRChat :

* **Le canvas doit avoir un composant** `VRC_UIShape`. **Assurez-vous de ne pas l'avoir placé sur un autre objet enfant.**
* **La couche du Canvas ne peut pas être UI.** Régler le canvas et tous ses enfants sur default fonctionnera.
* **L'objet avec le** `VRC_UIShape` **doit avoir un collider en forme de boîte.** S'il n'y en a pas, un sera automatiquement ajouté après le téléchargement du monde. Cependant, si vous avez ajouté un collider vous-même, vous devez vous assurer qu'il est de la bonne taille.
* **Assurez-vous de ne pas avoir un autre collider bloquant le canvas.**

### Si le pointeur apparaît mais que l'interface utilisateur n'est pas réactive :
* **La scène doit avoir un EventSystem.** Ceci est ajouté automatiquement lorsque vous créez le canvas, alors ne le supprimez pas.
* **Assurez-vous que les éléments interactifs ne sont pas recouverts par des éléments invisibles.** Cela arrive souvent lorsqu'une boîte de texte se superpose et couvre un bouton. Il y a plusieurs solutions : Vous pouvez réorganiser le bouton pour qu'il soit en haut (plus bas dans la hiérarchie), vous pouvez redimensionner le texte pour qu'il ne recouvre pas le bouton, ou vous pouvez régler le `raycast target` du texte sur `false`.
* **Assurez-vous que l'interface utilisateur avec laquelle vous essayez d'interagir a une image avec `Raycast Target` activé.** Ceci est généré automatiquement si vous créez des éléments d'interface utilisateur avec le menu clic droit dans la hiérarchie.
* **Assurez-vous que le canvas a les composants `Graphic Raycaster` et `Canvas Scaler`.** Ces composants sont générés automatiquement si vous créez le canvas avec le menu clic droit dans la hiérarchie.

### Si l'interface utilisateur est réactive mais ne fait pas ce que vous attendez :

* Certains événements d'interface utilisateur sont supprimés dans VRChat pour des raisons de sécurité. Assurez-vous que les événements que vous essayez d'utiliser sont sur [cette liste](/worlds/udon/ui-events)
* Si vous utilisez `SendCustomEvent`, assurez-vous de taper l'événement exactement de la même manière à la fois dans le bouton d'interface utilisateur et dans le nœud `event custom` de l'UdonBehaviour
* Si vous utilisez `SendCustomEvent` pour un comportement UdonSharp, l'événement doit être défini sur public. S'il est réglé sur privé, il ne fonctionnera pas.
* Si quelque chose ne va pas avec un UdonBehaviour, il peut s'arrêter, ce qui l'empêchera de faire quoi que ce soit. Voir [cette documentation](/worlds/udon/debugging-udon-projects#finding-udon-errors) pour plus de détails

### Si l'interface utilisateur se déplace lorsque vous vous déplacez, appuyez sur une touche ou bougez un joystick :

* Réglez** `Navigation: None` **sur tous les éléments d'interface utilisateur.

### Si vous souhaitez qu'un TextField ne montre pas le clavier de VRChat :

* Ajoutez le composant `VRCInputFieldKeyboardOverride` pour empêcher le clavier de VRChat d'apparaître.
