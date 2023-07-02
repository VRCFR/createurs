---
title: "Contacts"
description: "Contacts sont un nouveau système qui permet aux avatars de détecter les collisions avec eux-mêmes ou d'autres avatars. Ces collisions peuvent ensuite être utilisées pour piloter le contrôleur d'animation et réaliser toutes sortes d'effets amusants."
---

Contacts sont un nouveau système qui permet aux avatars de détecter les collisions avec eux-mêmes ou d'autres avatars. Ces collisions peuvent ensuite être utilisées pour piloter le contrôleur d'animation et réaliser toutes sortes d'effets amusants. 

Ce sont des éléments distincts des colliders standards d'Unity. Les contacts sont décomposés en émetteurs et récepteurs. Les émetteurs existent simplement pour être détectés. Les récepteurs détectent les émetteurs, puis mettent à jour les paramètres en conséquence.

# VRCContactSender
Le composant Contact Sender définit un volume d'espace qui enverra un signal de contact lors d'une collision avec un récepteur de contact.
![contacts-59b6e82-2022-04-19_11-53-01_Unity.png](/img/avatars/contacts-59b6e82-2022-04-19_11-53-01_Unity.png)
`Transform d'origine` - Transform où ce contact est placé. S'il est vide, nous utilisons le transform de cet objet de jeu.

## Forme
Cette section contient des paramètres qui définissent la forme du ContactSender.
`Type de forme` - Type de forme de collision utilisée par ce contact. Vous pouvez choisir entre une sphère et une capsule.
`Rayon` - Taille du collider s'étendant depuis son origine.
`Hauteur` - Hauteur de la capsule le long de l'axe choisi.
`Position` - Décalage de position par rapport au transform d'origine.
`Rotation` - Décalage de rotation par rapport au transform d'origine.

## Filtrage
Cette section contient des paramètres permettant d'ajuster et de définir comment ce ContactSender interagira avec les [récepteurs de contact](/avatars/avatar-dynamics/contacts#VRCContactReceiver).

`Étiquettes de collision` - Liste de chaînes de caractères spécifiant ce avec quoi il peut interagir/être affecté. Pour qu'une collision réussisse, l'émetteur et le récepteur doivent avoir au moins une paire de chaînes correspondantes. Les étiquettes de collision sont sensibles à la casse.

Par exemple, les étiquettes ci-dessous feront en sorte que l'émetteur envoie un signal de contact lorsqu'il entre en contact avec le récepteur de tête par défaut ou tout autre récepteur personnalisé avec l'étiquette `Face` - notez la majuscule F !
![contacts-de34d55-2022-04-19_11-53-34_NVIDIA_Share.png](/img/avatars/contacts-de34d55-2022-04-19_11-53-34_NVIDIA_Share.png)
## Colliders standards
Un ensemble de "Colliders standards" est défini dans le descripteur de l'avatar, dans une nouvelle section appelée "Colliders". Cette section vous permet de définir un certain nombre de colliders standards qui existent sur chaque avatar. Ils seront automatiquement configurés si vous ne les modifiez pas, mais vous pouvez également les ajuster pour correspondre exactement à votre avatar. Ces colliders n'affectent pas la notation de performances.

- Tête
- Torse
- Mains G/D
- Pieds G/D
- Doigts G/D
  - Index
  - Majeur
  - Annulaire
  - Auriculaire

Ces colliders agissent principalement comme des émetteurs de contact que les autres personnes peuvent détecter avec leurs avatars. Cependant, les colliders des doigts et des mains sont également utilisés pour créer des colliders globaux [PhysBone](/avatars/avatar-dynamics/physbones) qui peuvent être utilisés pour affecter les PhysBones des autres personnes.

# VRCContactReceiver
Le composant Contact Receiver définit un volume d'espace qui recevra un signal de contact lors d'une collision avec un émetteur de contact. Il définira ensuite un [paramètre d'animateur](/avatars/animator-parameters) d'une certaine manière, selon la définition de l'utilisateur.
![contacts-6f84ac4-2022-04-19_11-57-25_NVIDIA_Share.png](/img/avatars/contacts-6f84ac4-2022-04-19_11-57-25_NVIDIA_Share.png)
`Transform d'origine` - Transform où ce contact est placé. S'il est vide, nous utilisons le transform de cet objet de jeu.

## Forme
Cette section contient des paramètres qui définissent la forme du ContactReceiver.
`Type de forme` - Type de forme de collision utilisée par ce contact. 
`Rayon` - Taille du collider s'étendant depuis son origine.
`Hauteur` - Hauteur de la capsule le long de l'axe choisi.
`Position` - Décalage de position par rapport au transform d'origine.
`Rotation` - Décalage de rotation par rapport au transform d'origine.
`Étiquettes de collision` - Liste de chaînes de caractères spécifiant ce avec quoi il peut interagir/être affecté. Pour qu'une collision réussisse, l'émetteur et le récepteur doivent avoir au moins une paire de chaînes correspondantes. Les étiquettes de collision sont sensibles à la casse.

## Filtrage
Cette section contient des paramètres permettant d'ajuster et de définir comment ce ContactReceiver interagira avec les [émetteurs de contact](/avatars/avatar-dynamics/contacts#VRCContactSender).

`Autoriser soi-même` - Autoriser ce contact à être affecté par soi-même.
`Autoriser les autres` - Autoriser ce contact à être affecté par d'autres personnes.
`Local uniquement` - Limiter ce contact pour qu'il ne fonctionne que sur le client local.

`Étiquettes de collision` - Liste de chaînes de caractères spécifiant ce avec quoi il peut interagir/être affecté. Pour qu'une collision réussisse, l'émetteur et le récepteur doivent avoir au moins une paire de chaînes correspondantes. Les étiquettes de collision sont sensibles à la casse.

## Récepteur
Cette section contient des paramètres définissant ce que le récepteur fait lorsqu'il reçoit un signal.
`Type de récepteur` définit le comportement du réglage du paramètre lorsqu'un signal est reçu.
- `Constant` - Vous informe de la présence de tous les contacts. Se réinitialise lorsqu'aucun contact n'est détecté. Idéalement, utilisez un paramètre booléen ici. Définit `1.0` pour un Float, `True` pour un Booléen et `1` pour un Entier.
- `OnEnter` - Vous informe de la frame où un contact est détecté. Se réinitialise immédiatement à la frame suivante. Idéalement, utilisez un paramètre booléen ici. Définit `1.0` pour un Float, `True` pour un Booléen et `1` pour un Entier. Peut éventuellement avoir une `Vélocité minimale` définie.
- `Proximité` - Vous donne une valeur Float de `0.0-1.0` en fonction de la proximité d'un contact avec le centre du déclencheur. Cela est calculé comme le point le plus proche de l'émetteur sur le récepteur. Vous devez utiliser un Float. S'il détecte plusieurs contacts, il vous donnera le plus proche. 
:::note

Si vous souhaitez obtenir une mesure de proximité plus précise, vous devez ajuster le rayon de l'émetteur pour le rendre très petit.
:::
`Paramètre` - Le paramètre mis à jour sur le contrôleur d'animation. Ce paramètre N'A PAS besoin d'être défini dans la liste des paramètres d'avatar synchronisés. Le paramètre peut être un Float, Booléen ou Entier, en fonction du type de récepteur utilisé.
`Valeur` - Valeur à laquelle le paramètre est mis à jour lorsqu'une collision est détectée. Le paramètre se réinitialise à zéro lorsqu'aucune collision n'est présente.
`Vélocité minimale` - Vélocité minimale requise à partir d'un collider entrant pour affecter ce déclencheur, uniquement actif dans le type `OnEnter`.