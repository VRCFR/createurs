---
title: "VRC Ui Shape"
description: "Permet aux joueurs d'interagir avec l'interface graphique Unity dans votre monde"
---

Permettre à l'interface graphique Unity d'être interactive dans VRChat. Nécessite un élément [UICanvas](https://docs.unity3d.com/Manual/UICanvas.html) Unity sur le même GameObject.

## Étapes pour créer une interface graphique interactive avec VRC_UiShape

1. Ajoutez un Canvas en utilisant le menu clic-droit dans votre hiérarchie.
2. Ajoutez un composant `VRC_UIShape` au Canvas.
3. Définissez le mode de rendu du Canvas sur Espace du monde (World Space).
4. Réduisez l'échelle `x`, `y` et `z` du Canvas. Généralement, une valeur entre `0.001` et `0.005` fonctionnera bien. Il s'agit de la taille en mètres d'un pixel sur le canvas.
5. Définissez la couche (layer) du GameObject du Canvas sur Default.
6. Ajoutez vos éléments d'interface graphique au Canvas en utilisant le menu clic-droit dans la hiérarchie.
7. Définissez vos éléments d'interface graphique sur `Navigation: None` pour empêcher l'interface de se déplacer lorsque vous appuyez sur des touches ou déplacez les joysticks.

## Problèmes courants

### Si vous avez un Canvas qui ne fait pas apparaître le pointeur VRChat :

* **Le Canvas doit avoir un** `VRC_UIShape` **comme composant.** Assurez-vous de ne pas l'avoir placé sur un autre objet enfant.
* **La couche (layer) du Canvas ne peut pas être UI.** Définir le Canvas et tous ses enfants sur Default fonctionnera.
* **L'objet avec le composant** `VRC_UIShape` **doit avoir un collider de type box.** S'il n'y en a pas, un collider sera ajouté automatiquement après le téléchargement du monde. Cependant, si vous avez ajouté un collider vous-même, il faut s'assurer qu'il ait la taille correcte.
* **Assurez-vous de ne pas avoir un autre collider qui bloque le Canvas.**

### Si le pointeur apparaît mais que l'interface n'est pas réactive :

* **La scène doit avoir un EventSystem.** Celui-ci est ajouté automatiquement lorsque vous créez le Canvas, donc ne le supprimez pas.
* **Assurez-vous que les éléments interactifs ne sont pas recouverts par des éléments invisibles.** Cela arrive souvent lorsqu'une zone de texte chevauche et recouvre un bouton. Voici quelques solutions : vous pouvez réorganiser le bouton pour qu'il soit au-dessus (plus bas dans la hiérarchie), vous pouvez redimensionner le texte pour qu'il ne recouvre pas le bouton, ou vous pouvez définir la propriété `raycast target` du texte sur `false`.
* **Assurez-vous que l'interface que vous essayez d'interagir avec possède une image avec `Raycast Target` activé.** Cela est généré automatiquement si vous créez des éléments d'interface graphique avec le menu clic-droit dans la hiérarchie.
* **Assurez-vous que le Canvas possède les composants `Graphic Raycaster` et `Canvas Scaler`.** Ceux-ci sont générés automatiquement si vous créez le Canvas avec le menu clic-droit dans la hiérarchie.

### Si l'interface est réactive mais ne fait pas ce que vous attendez d'elle :

* Certains événements d'interface graphique sont supprimés dans VRChat pour des raisons de sécurité. Assurez-vous que les événements que vous essayez d'utiliser sont dans [cette liste](/worlds/udon/ui-events).
* Si vous utilisez `SendCustomEvent`, assurez-vous de taper l'événement exactement de la même manière à la fois dans le bouton de l'interface graphique et dans le nœud `event custom` de l'objet UdonBehaviour.
* Si vous utilisez `SendCustomEvent` avec un comportement UdonSharp, l'événement doit être défini comme public. S'il est défini comme privé, cela ne fonctionnera pas.
* Si quelque chose ne va pas avec un UdonBehaviour, celui-ci peut être bloqué, ce qui l'empêche de faire quoi que ce soit. Consultez [cette documentation](/worlds/udon/debugging-udon-projects#finding-udon-errors) pour plus de détails.

### Si l'interface se déplace lorsque vous vous déplacez, appuyez sur une touche ou déplacez un joystick :

* Définissez **`Navigation: None`** sur tous les éléments d'interface graphique.

### Si vous ne souhaitez pas qu'un champ texte affiche le clavier de VRChat :

* Ajoutez le composant `VRCInputFieldKeyboardOverride` pour empêcher l'affichage du clavier de VRChat.