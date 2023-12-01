---
title: "Imposteurs"
description: "Les avatars imposteurs"
sidebar:
    badge: 
        text: Nouveau
        variant: caution
---

# Imposteurs
## Qu'est-ce que les Imposteurs
Un imposteur est le double corporel de votre avatar. C'est ce que les autres verront si votre avatar ne peut pas se charger pour une raison quelconque, comme si votre avatar était téléchargé uniquement pour PC mais que votre ami utilise un Quest. Normalement, vous apparaîtriez comme un avatar de secours ou un robot, mais créer un imposteur vous permettra de conserver votre style unique.

## Créer un Imposteur
Vous ne pouvez générer des imposteurs que pour les avatars que vous [possédez et avez téléchargés](/avatars/creating-your-first-avatar), et actuellement, les imposteurs ne prennent en charge que les avatars humanoïdes.

Pour créer votre premier imposteur :

1. Connectez-vous au site web VRChat.

2. Naviguez vers "Avatars", puis "Mes Avatars", puis le nom et l'icône de l'avatar que vous souhaitez transformer en imposteur.

3. Cliquez sur "Générer des Imposteurs", ou, si l'avatar a déjà un imposteur que vous souhaitez mettre à jour, sur "Régénérer des Imposteurs".

4. Attendez.

5. Rafraîchissez la page, après un certain temps, vous devriez maintenant voir que votre avatar a des imposteurs pour Quest et PC.

![image](/img/avatars/impostors/generation.png)

 Vous pouvez activer et désactiver les imposteurs. Quand ils sont désactivés, votre avatar de secours sera affiché à la place.


## Prévisualiser un Imposteur
Une fois que vous avez généré votre imposteur, vous serez probablement très excité de voir à quoi il ressemble !

1. Connectez-vous à VRChat.

2. Ouvrez le Menu Avatar via votre Menu Principal.

3. Cliquez sur l'avatar pour lequel vous avez généré un imposteur.

4. Vous devriez remarquer que les "Caractéristiques" de l'avatar incluent maintenant "Imposteur". 

![image](/img/avatars/impostors/features-row.png)

Vous devriez également voir un nouveau bouton sous l'aperçu du modèle de l'avatar, qui vous permettra de basculer entre la prévisualisation de l'imposteur et de l'avatar normal.

**Note : Les imposteurs aperçus dans ce menu peuvent présenter des bugs qui ne sont pas visibles par d'autres joueurs.**

![image](/img/avatars/impostors/preview-avatar.png)
![image](/img/avatars/impostors/preview-impostor.png)

## Personnaliser un Imposteur
Les imposteurs sont plutôt bons par défaut, mais les avatars complexes peuvent bénéficier d'une personnalisation en utilisant le SDK VRChat.

Pour personnaliser, ajoutez simplement le script VRCImpostorSettings à votre avatar avant de le télécharger.

## VRCImpostorSettings

### Échelle de Résolution
Change la quantité d'espace sur l'atlas de texture des imposteurs qui est dédiée à la texture de cette partie du corps. 

Par exemple, vous pouvez placer ce script sur l'os de la tête et changer cette valeur pour faire en sorte que la tête occupe plus ou moins de l'atlas de texture, augmentant ou diminuant la qualité globale de la texture. Notez que cela peut réduire d'autres parties du corps sur l'atlas si nécessaire. 

_Cela est relatif à l'os sur lequel VRCImpostorSettings est placé._

### Transforms à Ignorer
Ignore ces transformations lors de la capture des données pour l'imposteur. Cela les cachera du résultat final.

_Cela est indépendant de l'os sur lequel VRCImpostorSettings est placé._

### Transforms Enfants Supplémentaires
C'est utile pour des choses comme les ailes et les queues, car cela indiquera au générateur d'imposteurs de créer une sprite séparée pour l'os sur lequel ce script est placé.

Nous ne recommandons pas de l'utiliser sur des petites choses comme les doigts individuels car toutes les sprites partagent une seule feuille de texture. Faire cela diminuerait la qualité ailleurs.

_Cela est indépendant de l'os sur lequel VRCImpostorSettings est placé._

### Re-parenter Ici
Re-parente un autre os à cette sprite d'im

posteur. Cela signifie qu'il sera impostorisé avec cette partie du corps, et fera partie de cette sprite.

Par exemple, si vous souhaitez que vos ailes fassent partie du haut du corps, vous pouvez re-parenter l'os racine des ailes à l'os de la poitrine pendant l'impostorisation avec ceci.

_Cela est relatif à l'os sur lequel VRCImpostorSettings est placé._

## Quand un imposteur est-il visible ?
Actuellement, il n'y a que trois façons de voir un imposteur :

- Aperçu de l'Avatar

- Blocage des Performances (par exemple, l'avatar est très pauvre mais vous avez réglé la limite de performance sur moyen)

- Incompatibilité de Plateforme (par exemple, l'avatar est téléchargé pour PC, mais vous êtes sur un Quest)

**Note : La génération automatique d'imposteurs et le support pour les avatars non humanoïdes arrivent dans le futur !**