---
title: "Créer votre premier avatar"
description: "Apprenez comment créer votre premier avatar pour VRChat"
---

## Exigence : Configuration préalable du SDK !
Avant de commencer, assurez-vous d'avoir un [projet Unity avec le SDK configuré](/sdk).

Une fois le SDK configuré, consultez notre exemple d'**avatar exemple**. Ouvrez votre projet d'avatar et accédez à
"VRChat SDK > Samples > Avatar Dynamics Robot Avatar".

![L'avatar exemple peut vous aider à comprendre à quoi pourrait ressembler un projet d'avatar VRChat complet.](/img/avatars/creating-your-first-avatar-3dfc191-Unity_YrUFLEWWDe.png)

:::note Besoin d'aide ?
Créer votre premier avatar peut être difficile. Si vous êtes bloqué, voici où vous pouvez obtenir de l'aide :
- Lisez notre documentation (vous le faites actuellement !)
- Visitez notre [forum officiel](https://ask.vrchat.com/)
- Rejoignez notre [serveur Discord](https://discord.com/invite/vrchat)
:::

## Étape 0 - Créez un modèle !
Bien que la plupart des utilisateurs choisissent de trouver un modèle (voir étape 1), il est TOTALEMENT possible de créer un modèle d'avatar à partir de zéro. Vous pouvez utiliser n'importe quel logiciel 3D tant qu'il prend en charge l'exportation d'un fichier FBX avec une armature ! Blender et Maya sont des choix très courants.

Soyons clairs : pour les personnes n'ayant jamais modélisé en 3D, il s'agit du début d'un long parcours. Apprendre à modéliser en 3D est complexe, tout comme apprendre à animer et à texturer. La création d'un personnage articulé combine _toutes ces compétences_ !

Si vous choisissez de créer votre propre modèle, nous vous suggérons de commencer par quelque chose de simple. Même si votre modèle ne paraît pas aussi impressionnant que les modèles préfabriqués, il s'agit de _votre_ modèle et vous pouvez en faire ce que vous voulez.

Pour vous aider à démarrer, voici un tutoriel centré sur VRChat créé par l'un de nos membres de la communauté :
- [Rainhet's Blender 3D Virtual Avatar Tutorial 2022](https://www.youtube.com/watch?v=OKWsUAIsgpg&list=PL2EEbgwoJzdsC9wfKA2ZO2kAf4HDqC8a8&index=1) - Le tutoriel de Rainhet est détaillé et elle explique tout en détail pendant qu'elle travaille.
- [Rainhet's 3D Avatar Class](https://www.youtube.com/watch?v=w-yhjgnhaNw) - Une version plus ancienne de la série de tutoriels de Rainhet. Il existe également une [version de 10 minutes](https://www.youtube.com/watch?v=in9rNze4FD4) qui vous donne une vue d'ensemble du processus.

Si vous avez un tutoriel à suggérer, veuillez le soumettre à nos documents via la fonctionnalité '[Modifier cette page](https://github.com/vrchat-community/creator-docs/edit/main/Docs/docs/avatars/creating-your-first-avatar.md)' !

## Étape 0.5 - Utilisez un créateur d'avatar !
Vous pouvez également essayer d'utiliser un créateur d'avatar ! Il en existe plusieurs, de différentes complexités.

### Je veux essentiellement un créateur de personnage de jeu de rôle, puis cliquez sur "télécharger"
[Page des systèmes d'avatar VRChat](https://hello.vrchat.com/avatar-systems) - Nous répertorions plusieurs créateurs faciles à utiliser sur cette page. Elle est régulièrement mise à jour.

### OK, donnez-moi quelques curseurs et la possibilité de peindre des choses
Vous voudrez peut-être vous tourner vers [VRoid Studio](https://vroid.com/en/studio), qui est également disponible sur Steam. Il s'agit d'un créateur de personnages sur le thème de l'anime, principalement destiné à la création de modèles de style VTuber, mais qui offre une grande flexibilité ! Pour voir ce dont il est capable, consultez le [subreddit VRoid](https://www.reddit.com/r/VRoid/).
:::note

VRoid Studio exporte les avatars au format **.vrm**, qui n'est pas nativement pris en charge par Unity ! Si vous souhaitez importer un modèle VRoid Studio directement pour une utilisation dans VRChat, vous devrez peut-être vous tourner vers le [convertisseur VRMtoVRChat](https://github.com/esperecyan/VRMConverterForVRChat) créé par la communauté pour les avatars .vrm. Assurez-vous de [lire la documentation de ce plugin](https://www.store.vket.com/ec/items/122/detail/) si vous l'utilisez."
  "title": "Une note sur VRoid Studio
:::

## Étape 1 - Trouvez un modèle
C'est probablement la partie la plus importante, vous devez trouver un modèle 3D à utiliser comme avatar. Comme il s'agit de votre premier avatar, nous vous recommandons d'en choisir un sur l'[Unity Asset Store](https