---
title: "Manette Valve Index"
---

VRChat propose une prise en charge des **Contrôleurs Valve Index** !

## Pose des Doigts

Les Contrôleurs Valve Index contiennent des capteurs capacitifs pour l'auriculaire, l'annulaire et le majeur. Ils contiennent également des capteurs capacitifs sur la gâchette pour l'index, ainsi que des capteurs sur le pavé tactile/boutons pour détecter lorsque votre pouce est "appuyé". Enfin, ils contiennent un capteur de "pression" pour détecter le serrage du contrôleur.

À tout moment, les doigts de votre avatar dans VRChat suivront l'état de vos doigts sur le contrôleur. Bien que le suivi ne soit pas exact, l'état fermé ou ouvert du doigt permettra un mouvement des doigts sur votre avatar, améliorant ainsi l'immersion.

## Basculement des Gestes

Lorsque vous avez activé le Basculement des Gestes, VRChat tentera de faire correspondre la pose actuelle de vos doigts aux [poses de main standard de VRChat](doc:valve-index#section-vrchat-standard-hand-poses). Toutes les substitutions de gestes appliquées seront jouées, _mais la pose de votre main ne changera pas même si vous avez défini une substitution pour la position de votre main._

Lorsque vous avez désactivé le Basculement des Gestes, VRChat ne tentera pas de faire correspondre les gestes.

Si vous désactivez le Basculement des Gestes tout en maintenant une substitution de geste, cette substitution continuera à s'animer jusqu'à ce que vous réactiviez le Basculement des Gestes.

## Interaction avec les Objets

La prise d'objets (comme un disque dans Battle Discs) se fait en serrant la poignée. Relâcher la poignée fera tomber l'objet. Jouer à des jeux comme Battle Discs peut sembler plus immersif et naturel avec les contrôleurs Valve Index. La force de serrage requise [peut être ajustée](valve-index#section-set-default-bindings) ainsi que de nombreux autres réglages.

## Définir les Liaisons par Défaut

Assurez-vous d'utiliser les "liaisons VRChat pour les Contrôleurs Index" pour les Contrôleurs Index dans le menu `Paramètres > Liaisons des contrôleurs > VRChat` de SteamVR. C'est très important - **si vous utilisez d'anciennes liaisons personnalisées pour les contrôleurs Index, elles ne fonctionneront pas !**

La page des Liaisons des Contrôleurs SteamVR peut être un peu boguée, donc assurez-vous que vos liaisons sont correctement configurées une fois que vous les avez choisies.

Ces liaisons ont été définies comme les "liaisons par défaut" pour VRChat. Vous pouvez trouver cela dans les paramètres des contrôleurs SteamVR. Vous devrez peut-être utiliser le bouton "Utiliser l'ancienne interface de liaison" dans SteamVR.

Vous pouvez également ajuster de nombreux paramètres dans le menu des Liaisons des Contrôleurs SteamVR, y compris la force requise pour la poignée. Ajustez ces paramètres si vous trouvez que les choses ne sont pas tout à fait correctes. Si vous trouvez une configuration qui vous plaît, vous pouvez utiliser SteamVR pour partager ces liaisons avec la Communauté !

![image des controller](https://files.readme.io/8d84f6f-chrome_2019-05-29_17-39-32.png)

## Remarques sur la Personnalisation des Liaisons

- Faites attention lorsque vous réattribuez les événements Tactile des boutons "touchables par le pouce". VRChat vérifie les événements Tactile sur chaque bouton que le pouce peut toucher pour savoir si le pouce est plié. Si un bouton "touchable par le pouce" n'est pas attribué aux mêmes événements Tactile, VRChat ne peut pas savoir que le pouce a été plié et ne suivra pas correctement.
- `Saut`, `Basculer Micro`, `Basculer Gestes` et `Menu d'Action Gauche / Droite` sont des liaisons d'entrée fixes vers l'application.

## Poses de Main Standard VRChat

| Nom de la Pose de la Main | Description de la Pose de la Main                                                                                        |
|---------------------------|-------------------------------------------------------------------------------------------------------------------|
| Poing                     | Auriculaire, annulaire, majeur baissés  <br>Index sur la détente  <br>Pouce baissé                                                |
| Main Ouverte              | Auriculaire, annulaire, majeur levés  <br>Index hors de la détente  <br>Pouce levé                                                        |
| Point                     | Auriculaire, annulaire, majeur baissés  <br>Index hors de la détente  <br>Pouce baissé                                                     |
| Pouce Levé                | Auriculaire, annulaire, majeur baissés  <br>Index sur la détente  <br>Pouce levé                                                            |
| Victoire                  | Auriculaire, annulaire baissés, majeur levé  <br>Index hors de la détente  <br>Pouce baissé                                                        |
| Pistolet                  | Auriculaire, annulaire, majeur baissés  <br>Index hors de la détente  <br>Pouce levé                                                        |
| Signe des Cornes          | Auriculaire levé, annulaire, majeur baissés  <br>Index hors de la détente  <br>Pouce baissé                                                  |

## Notes sur l'Assemblage

VRChat utilise Mechanim d'Unity et le personnage "YBot" de Mixamo comme standard pour les configurations d'assemblage. Vous pourriez constater avec votre dextérité nouvellement acquise que votre standard pour l'assemblage des mains augmente, et vous pourriez avoir besoin d'ajuster votre assemblage et votre peinture de poids.

Une bonne façon de tester cela est d'utiliser l'onglet [Muscles et Paramètres de l'Avatar](https://docs.unity3d.com/Manual/MuscleDefinitions.html) d'Unity pour tester l'état ouvert/fermé de la main. Si la pose de la main semble étrange, vous devrez peut-être ajuster légèrement votre peinture de poids et votre assemblage.