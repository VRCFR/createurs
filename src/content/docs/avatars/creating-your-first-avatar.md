---
title: "Créer Votre Premier Avatar"
sidebar:
    badge: 
        text: Mis à jour
        variant: tip
---

## Prérequis : Configurer le SDK d'abord !
Avant de commencer, assurez-vous d'avoir un [projet Unity avec le SDK configuré](/sdk).

Après avoir configuré le SDK, consultez notre **exemple d'avatar**. Ouvrez votre projet d'avatar et allez à
'VRChat SDK > Samples > Avatar Dynamics Robot Avatar.'

![L'exemple d'avatar peut vous aider à comprendre à quoi peut ressembler un projet complet d'avatar VRChat.](/img/avatars/creating-your-first-avatar-3dfc191-Unity_YrUFLEWWDe.png)

:::note[Besoin d'aide ?]

Créer votre premier avatar peut être un défi. Si vous êtes bloqué, voici où vous pouvez obtenir de l'aide :
- Lisez notre documentation (vous le faites déjà !) 
- Visitez notre [forum officiel](https://ask.vrchat.com/)
- Rejoignez notre [serveur Discord](https://discord.com/invite/vrchat)

:::
## Étape 0 - Créez un modèle !
Bien que la plupart des utilisateurs choisissent de trouver un modèle (voir l'étape 1), il est TOTALEMENT possible de créer un modèle d'avatar à partir de zéro. Vous pouvez utiliser n'importe quel logiciel 3D, tant qu'il permet d'exporter un FBX avec un armature ! Blender et Maya sont des choix très courants.

Soyons tout à fait clairs : pour les personnes qui n'ont jamais modélisé en 3D auparavant, c'est le début d'un long voyage. Apprendre à modéliser en 3D est complexe, tout comme apprendre à créer des armatures et des textures. Créer un personnage riggé combine _toutes ces compétences_ !

Si vous choisissez de créer votre modèle, nous vous suggérons de commencer par quelque chose de simple. Même si vous n'avez pas l'air aussi sophistiqué que les modèles préfabriqués, c'est _votre_ modèle, et vous pouvez en faire ce que vous voulez.

Pour vous lancer, voici un tutoriel centré sur VRChat créé par un membre de notre communauté :
- [Tutoriel Rainhet's Blender 3D Virtual Avatar 2022](https://www.youtube.com/watch?v=OKWsUAIsgpg&list=PL2EEbgwoJzdsC9wfKA2ZO2kAf4HDqC8a8&index=1) - Le tutoriel de Rainhet est long et elle explique tout en détail en travaillant dessus.
- [Cours d'Avatar 3D de Rainhet](https://www.youtube.com/watch?v=w-yhjgnhaNw) - Une version plus ancienne de la série de tutoriels de Rainhet. Il y a aussi une [version de 10 minutes](https://www.youtube.com/watch?v=in9rNze4FD4) qui vous donne une vue d'ensemble du processus.

Si vous avez un tutoriel à suggérer, veuillez le soumettre à notre documentation via la fonction '[Modifier cette Page](https://github.com/vrchat-community/creator-docs/edit/main/Docs/docs/avatars/creating-your-first-avatar.md)' !

## Étape 0.5 - Utilisez un créateur d'avatar !
Vous pouvez également essayer d'utiliser un créateur d'avatar ! Il en existe plusieurs de complexité variable.

### Je veux essentiellement un créateur de personnage de RPG, puis cliquer sur télécharger
[Page des systèmes d'avatar VRChat](https://hello.vrchat.com/avatar-systems) - Nous listons plusieurs créateurs faciles à utiliser sur cette page. Elle est tenue à jour.

### OK, donnez-moi des curseurs et la possibilité de peindre des choses
Vous voudrez peut-être vous intéresser à [VRoid Studio](https://vroid.com/en/studio), qui est également disponible sur Steam. C'est un créateur de personnages à thème anime, principalement destiné à créer des modèles de style VTuber, mais il est très flexible ! Pour des exemples de ce qu'il peut faire, consultez le [subreddit VRoid](https://www.reddit.com/r/VRoid/).
:::note[Une note sur VRoid Studio]

VRoid Studio produit des avatars au format **.vrm**, qui n'est pas nativement pris en charge par Unity ! Si vous souhaitez importer directement un modèle VRoid Studio pour une utilisation dans VRchat, vous pouvez vous intéresser au convertisseur [VRMtoVRChat](https://github.com/esperecyan/VRMConverterForVRChat) créé par la communauté pour les avatars .vrm. Assurez-vous de [lire la documentation de ce plugin](https://www.store.vket.com/ec/items/122/detail/) si vous l'utilisez.
:::
## Étape 1 - Trouvez un modèle
Probablement la partie la plus importante, vous devez trouver un modèle 3D à utiliser comme avatar. Comme c'est votre premier avatar, nous vous recommandons d'en obtenir un depuis le [Unity Asset Store](https://assetstore.unity.com/) car ils sont généralement entièrement riggés, ce qui signifie que vous n'avez rien de spécial à faire pour le télécharger. Si vous décidez d'obtenir votre modèle en dehors de l'Asset Store, assurez-vous que le modèle est entièrement riggé et est dans un format accepté par Unity.

**Assurez-vous d'obtenir une licence pour utiliser le modèle que vous souhaitez utiliser.** Les artistes passent des centaines d'heures sur leurs modèles. Les utiliser sans licence est une violation des conditions de service de VRChat ainsi qu'une violation des droits de l'auteur du modèle.

Assurez-vous que le modèle que vous utilisez est inférieur à 70 000 triangles (20 000 pour VRChat sur Meta Quest). Sur PC, vous pouvez télécharger des modèles au-dessus de ce montant, mais l'avatar sera automatiquement marqué comme ayant une "Très Mauvaise" performance, car un nombre excessif de polygones peut causer des problèmes de performance.

## Étape 2 - Intégrez le modèle dans votre projet
Maintenant que vous avez trouvé le modèle que vous voulez, il est temps de l'intégrer dans votre projet. Si vous l'ob

tenez depuis l'Asset Store, vous pouvez le télécharger et l'importer directement dans votre projet. Si vous avez obtenu le modèle ailleurs, vous devez l'importer ainsi que toutes les textures associées dans votre dossier 'Assets'.

Si vous importez votre modèle depuis un éditeur 3D, assurez-vous de prendre en compte la différence entre les systèmes de coordonnées. Par exemple, le système de coordonnées et d'unités par défaut de [**Blender**](https://blender.org) diffère de celui d'Unity. Vous devez exporter des fichiers FBX depuis Blender et définir l'exportateur en conséquence :

![image](/img/avatars/creating-your-first-avatar-b066a1b-2022-05-27_11-13-48_blender.png)
Après avoir intégré le modèle dans vos assets, sélectionnez-le, vous voudrez vous assurer qu'il a les bons paramètres définis, sous l'onglet rig dans l'inspecteur assurez-vous que le type d'animation est défini sur Humanoid.

## Étape 3 - Intégrez le modèle dans une scène
Avec le modèle dans vos assets et avec les bons paramètres, vous voudrez ensuite le mettre dans une scène. Pour ce faire, soit faites-le glisser dans votre hiérarchie, soit dans la scène. Nous recommandons d'avoir une scène par avatar et de le placer à 0, 0, 0. Si l'avatar ne se tient pas droit, faites-le pivoter pour qu'il le soit. Assurez-vous également que l'avatar n'est pas vraiment petit ou plus grand que 5x5x5m, vous pouvez utiliser un cube Unity par défaut qui fait 1x1x1m pour comparer.
:::caution[Optimisation de l'avatar]

Il est très important que votre avatar soit optimisé afin de ne pas causer de faible FPS pour vous-même et pour les autres. Le SDK vous informera si quelque chose semble suspect. Consultez nos [Conseils d'Optimisation d'Avatar](/avatars/conseils-optimisation-avatar) pour découvrir des méthodes pour améliorer le classement de performance de votre avatar.
:::
## Étape 4 - Ajouter un descripteur d'avatar
Après cela, nous voulons maintenant ajouter un composant 'VRC Avatar Descriptor' et ensuite configurer ses paramètres.
1. Sélectionnez l'avatar dans votre hiérarchie.
2. Cliquez sur 'Ajouter un composant' dans l'inspecteur.
3. Recherchez le composant 'VRC Avatar Descriptor' et ajoutez-le.
4. Personnalisez ses paramètres, expliqués ci-dessous.

![Ajoutez un `VRC Avatar Descriptor` pour commencer avec votre avatar.](/img/avatars/creating-your-first-avatar-fd027ea-Unity_qH7NJfAzzn.png)
### Position de vue
Tout d'abord, vous voudrez définir la position de vue. Ce sera l'endroit où votre caméra sera positionnée dans VRChat. Vous pouvez voir une représentation visuelle de celle-ci sous la forme d'une petite sphère blanche dans la scène. Si votre avatar a une tête, alors la meilleure position pour la vue est entre les yeux. S'il n'a pas de tête, placez-la où vous pensez que c'est approprié.
![Utilisez le descripteur d'avatar pour configurer votre avatar pour VRChat. Assurez-vous d'ajuster la position de vue !](/img/avatars/creating-your-first-avatar-5afcbf1-Unity_lsTjP8qDqO.png)
### Mode de synchronisation labiale
Lorsque vous parlez, vous pouvez faire réagir automatiquement la bouche de votre avatar (ou autre chose). Ouvrez votre `VRC Avatar Descriptor` et développez le menu déroulant `LipSync`. Il y a cinq modes au choix :

#### Défaut
![Appuyer sur 'Auto Detect!' est généralement suffisant pour permettre à votre avatar VRChat de réagir à votre parole.](/img/avatars/creating-your-first-avatar-d69289f-Unity_FgsAtEU75F.png)

Appuyez sur 'Auto Detect!' pour permettre au SDK VRChat de détecter automatiquement le mode de synchronisation labiale approprié. Le mode passera alors à l'un des modes ci-dessous.

#### Mouvement de la mâchoire
Si votre avatar utilise un seul os pour animer la mâchoire, vous pouvez le spécifier ici. La mâchoire de votre personnage s'ouvrira en fonction de la force avec laquelle vous parlez dans VRChat. Assurez-vous d'avoir configuré l'os de la mâchoire dans le rig Humanoid d'Unity pour votre avatar.

#### **Forme de Viseme Blend Shape** (recommandé)
Les formes de mélange/les clés de forme (nommées en fonction du logiciel que vous utilisez) modifient le maillage en fonction des positions des sommets. De nombreux modèles utilisent cela pour des animations détaillées pour parler. Si votre modèle a celles-ci, vous devriez les utiliser !

Nous utilisons la bibliothèque audio Oculus pour détecter et définir les visèmes. [Vous pouvez voir une référence à ce à quoi tous les visèmes devraient ressembler et quel son les déclenche ici](https://developer.oculus.com/documentation/unity/audio-ovrlipsync-viseme-reference).

VRChat peut généralement détecter automatiquement les visèmes de votre avatar. Si ce n'est pas le cas, vous pouvez choisir des visèmes dans la liste déroulante.
![Le mode 'Viseme Blend Shape' est la méthode la plus courante pour faire bouger le visage de votre personnage lorsque vous parlez.](/img/avatars/creating-your-first-avatar-6272723-Unity_w5nQONGtcb.png)

:::caution[Forme SIL]

Unity supprimera les clés de forme/blend shapes qui sont vides lors de l'importation, alors assurez-vous que votre forme "SIL" (la forme que votre bouche prend lorsque aucun son n'est détecté, mais que le micro est actif - comme l'espace entre les mots) déplace un seul vertex d'une très petite quantité imperceptible. Cela empêchera Unity de supprimer cette clé.
:::

:::note[Astuce de Performance pour Viseme !]

Si vous créez des avatars, envisagez de diviser votre avatar en deux meshes skinnés - un pour votre corps, et un pour votre tête/visage.
Le coût de performance des blend shapes dépend de la quantité de votre modèle 3D qu'ils affectent. Garder des blend shapes sur un mesh de tête séparé et avoir moins de blend shapes sur votre mesh corporel peut améliorer la performance de votre avatar.
:::

##### Blend Shape pour Mouvement de Mâchoire
Si votre avatar utilise un seul blend shape pour animer sa bouche, configurez-le ici. Il se comportera de manière similaire à 'Jaw Flap Bone' en animant le blend shape de la mâchoire au lieu d'un os de la mâchoire.

##### Paramètre Viseme Seulement
Si vous êtes un créateur avancé, vous pouvez utiliser ce mode pour contrôler la réaction de votre avatar à la parole avec les [Paramètres d'Animateur](/avatars/animator-parameters) intégrés de VRChat.

## Étape 5 - Aller à l'onglet de construction / Vérifier si l'avatar est correct
Ensuite, nous voulons vérifier que tout est bon dans la fenêtre de construction, pour cela vous devrez ouvrir `VRChat SDK > Show Control Panel`, où vous devriez voir l'objet GameObject de l'avatar mentionné avec un bouton Construire et Publier en dessous. Entre eux, vous verrez les paramètres, les tags de contenu, un classement de 'performance globale', des erreurs et des avertissements.

![Le panneau de construction du SDK VRChat.](/img/avatars/build-panel-avatars-2023.png)

Suivez simplement les étapes du panneau de construction du SDK VRChat :
- Donnez un nom à votre avatar. Vous pouvez également ajouter une description.
- Assurez-vous de taguer votre avatar avec les tags de contenu appropriés pour être conforme au [système de contrôle de contenu](https://hello.vrchat.com/blog/content-gating) de VRChat.
- Choisissez la visibilité de votre avatar. Les avatars privés ne peuvent pas être clonés ou utilisés par d'autres utilisateurs de VRChat.
- Sélectionnez une image miniature. Vous pouvez sélectionner une image ou utiliser une capture de votre scène Unity.
- Lisez la section 'Validations'. Elle contient de nombreuses erreurs et avertissements utiles. Par exemple, le SDK peut vous avertir que votre avatar a trop de polygones, que vous pouvez corriger en optimisant le(s) mesh(es). Si vous ne pouvez pas optimiser le mesh, vous devrez peut-être revenir en arrière et choisir un autre modèle.
- Lorsque vous êtes prêt, continuez avec la construction de votre avatar

## Étape 6 - Construire et télécharger l'avatar !
Maintenant, tout est prêt. Appuyez sur le bouton "Construire & Publier", et le SDK commencera à construire et à télécharger votre avatar. Avant de télécharger votre avatar, vous devriez vérifier qu'il est conforme aux [Conditions d'Utilisation](https://hello.vrchat.com/legal) et aux [Directives Communautaires](https://hello.vrchat.com/community-guidelines) de VRChat.

Après avoir téléchargé votre avatar, il devrait être disponible dans VRChat. Vous pouvez également voir votre avatar dans `VRChat SDK > Show Control Panel > Content Manager`.

Vous pouvez également tester votre avatar sans le télécharger. Pour ce faire, cliquez sur "Construire & Tester" à la place. Votre avatar apparaîtra dans la section "Autre" de votre menu Avatars VRChat. Les avatars de test ne peuvent être vus que par vous. Pour que les autres joueurs voient votre avatar, vous devez le télécharger.

## Étape 7 - Profitez de votre avatar !

Félicitations pour avoir créé votre premier avatar ! Nous espérons que tout s'est bien passé. Si vous avez besoin d'aide, pensez à visiter notre [Forum Ask](https://ask.vrchat.com/) ou notre [serveur Discord](https://discord.com/invite/vrchat).

Créer et télécharger des avatars VRChat peut être amusant et créativement satisfaisant. Si vous souhaitez améliorer vos compétences de création d'avatar, jetez un œil au reste de notre [documentation sur les Avatars](https://creators.vrchat.com/avatars/).

Pourquoi ne pas en apprendre davantage sur :
- [Optimiser votre avatar ?](/avatars/avatar-optimizing-tips)
- [Le système de classement de performance de VRChat ?](/avatars/avatar-performance-ranking-system)
- [La dynamique des avatars ?](/avatars/avatar-dynamics/) 
- [Créer votre premier Monde ?](/worlds/creating-your-first-world)

