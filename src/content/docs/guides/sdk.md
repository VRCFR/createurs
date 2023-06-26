---
title: Configurer le SDK
description: Configuration du kit de développement de vrchat
---

## Prérequis & Téléchargement

Il existe plusieurs façons de télécharger le SDK VRChat.

Cliquez [ici](https://vrchat.com/download/vcc) pour télécharger le VRChat Creator Companion. C'est la méthode la plus simple pour commencer. Le Companion du Créateur peut installer automatiquement l'Éditeur Unity, le SDK Mondes et le SDK Avatars pour vous.
Alternativement, vous pouvez utiliser l'un de nos projets modèles sur GitHub. Si vous n'utilisez pas le Companion du Créateur, vous devrez également télécharger la version actuelle de Unity. Nous recommandons fortement d'utiliser Unity Hub pour télécharger Unity, disponible ici.

## Étape 0 - Installation d'Unity

Si vous avez déjà Unity en cours d'exécution, vous pouvez passer à l'étape 1. Le Companion du Créateur installe automatiquement Unity pour vous.

Si vous souhaitez installer Unity vous-même, consultez la page des Versions d'Unity Prises en Charge actuellement, et installez la version d'Unity prise en charge par VRChat, de préférence à l'aide de Unity Hub.

## Étape 1 - Création d'un projet

Pour notre premier projet, nous supposerons que vous créez du contenu pour PC Windows. Si vous recherchez le processus pour créer du contenu VRChat sur Quest, consultez la section Configuration d'Unity pour la Création de Contenu Quest.

La manière la plus simple de créer un projet préconfiguré est d'utiliser le Companion du Créateur VRChat ! Nous recommandons vivement d'utiliser le Companion du Créateur VRChat à cette fin. Si vous ne l'utilisez pas, vous devrez effectuer plusieurs étapes supplémentaires qui pourraient entraîner des erreurs.

Quelques conseils rapides :

- Enregistrez vos projets sur un disque de stockage de masse disposant d'un espace considérable, car les projets Unity peuvent devenir assez volumineux, surtout si vous utilisez un logiciel de versionnage.
- N'utilisez pas un seul projet pour de nombreux avatars ou mondes différents. Cela compliquera considérablement les migrations futures.
- Si vous savez utiliser un logiciel de contrôle de version tel que Git ou Plastic SCM, utilisez-le ! Cela facilite grandement l'annulation des modifications qui cassent votre projet.
- Si vous ne savez pas comment les utiliser, vous devriez apprendre ! Ils sont formidables. Malheureusement, un tutoriel Git dépasse largement le cadre de notre documentation 😰
- Vous pouvez créer un projet manuellement si vous le souhaitez, mais vous devrez de toute façon utiliser le Companion du Créateur ultérieurement pour installer le SDK (à moins que vous n'ayez commencé par l'un de nos dépôts de modèles).

Si vous utilisez Unity Hub :

1. Ouvrez Unity Hub (ou simplement l'éditeur si vous avez choisi cette option).
2. Créez un nouveau projet, choisissez le mode 3D et enregistrez-le.
3. N'utilisez pas HDRP ou URP. Nous ne les utilisons pas.

## Étape 2 - Ouvrez votre projet

Peu importe comment vous l'avez créé, vous pouvez maintenant ouvrir votre projet. Si votre projet n'est pas répertorié, cliquez sur "Ajouter" dans l'écran du projet et sélectionnez-le. Si vous utilisez

 Unity Hub, cliquez sur "Ouvrir" en haut à droite, puis sélectionnez le répertoire où se trouve votre projet.

Une fois le projet ouvert, vérifiez la barre de titre pour vous assurer qu'elle se termine par "PC, Mac & Linux Standalone <DX11>". Si ce n'est pas le cas, allez dans Fichier > Paramètres de construction..., sélectionnez "PC, Mac & Linux Standalone", puis cliquez sur "Basculer la plateforme" en bas à gauche.

Si vous créez du contenu pour VRChat pour Meta Quest ou des téléphones Android, vous devez également le créer pour Android. Consultez notre documentation Android pour plus de détails.

## (facultative) Étape 3 - Installation du SDK

Si vous n'avez pas utilisé le Companion du Créateur pour configurer votre projet, vous devrez installer le SDK. Faites-le via le Companion du Créateur VRChat.

Si des erreurs se produisent, même avec un projet vide tout neuf, veuillez contacter notre équipe d'assistance.

## Étape 4 - Connexion

Pour utiliser le SDK, vous devrez vous connecter. Pour ce faire, allez dans VRChat SDK > Afficher le panneau de contrôle > Authentification. Vous pouvez vous connecter à votre compte VRChat à partir de là.

N'oubliez pas que vous devez avoir un compte VRChat d'au moins le rang de confiance "Nouvel Utilisateur" pour télécharger du contenu. Vous ne pouvez pas utiliser un compte Steam, Oculus ou Viveport pour télécharger du contenu.

## Qu'est-ce qui suit ?

Votre projet est prêt ! Vous pouvez passer à la création de mondes ou à la création d'avatars.

## Mise à jour du SDK
Si vous avez besoin de mettre à jour votre SDK, il est important que vous suiviez ces étapes pour que la mise à jour se déroule correctement et que vous n'ayez pas de fichiers obsolètes ou en conflit.

## Contrôle de version
Si vous savez comment l'utiliser, vous pouvez trouver avantage à utiliser un logiciel de contrôle des versions comme [Git](https://git-scm.com/) pour gérer votre projet. Vous n'avez pas besoin de télécharger votre dépôt sur Github ou un service similaire pour tirer parti du contrôle de version. Créez une mise à jour avant de mettre à jour les SDK, juste pour être sûr.

## VRChat Creator Companion
Mettre à jour votre SDK est extrêmement facile avec le VCC. Consultez la documentation du [compagnon de création de VRChat](https://vcc.docs.vrchat.com/guides/getting-started) pour apprendre à l'utiliser !

## Migration vers le VCC
Si vous voulez apprendre à migrer votre projet pour utiliser le VCC, consultez le guide [ici](https://vcc.docs.vrchat.com/vpm/migrating).

## Mises à jour manuelles
Si vous utilisez le VCC, vous n'avez pas besoin de vous soucier des mises à jour manuelles.

## SDK3 hérité
:::attention 

Ces instructions ne s'appliquent qu'aux utilisateurs de notre SDK hérité (`Assets\\VRCSDK`).\nSi votre SDK se trouve dans votre dossier `Packages` (`Packages\\com.vrchat.base`), ne suivez pas les instructions ci-dessous.
:::

**Pour le SDK3, vous devriez pouvoir mettre à jour en important simplement le nouveau SDK sur l'ancien, également connu sous le nom de mise à jour sur place.** Cela est particulièrement important pour les Avatars SDK3, car vous pourriez perdre les comportements d'état sur vos animateurs si vous mettez à jour de manière incorrecte !

Si vous voulez être super prudent, sauvegardez toujours vos projets avant de mettre à jour le SDK.

### SDK3 - Monde
1. Fermez Unity.
2. Sauvegardez votre projet Unity ! Vous n'avez pas à sauvegarder votre dossier Library, ces fichiers sont générés automatiquement par Unity.
:::attention Mise à jour de SDK3 pré-2020.3.2

**C'est une étape rare et vous n'avez probablement pas besoin de la faire.**\n\nSi vous mettez à jour à partir d'un SDK antérieur à la version 2020.3.2, allez dans le dossier `Assets` de votre projet et supprimez les dossiers `VRCSDK` et `Udon`, ainsi que les fichiers `VRCSDK.meta` et `Udon.meta`.
:::
3. Ouvrez votre projet Unity.
4. Importez le nouveau SDK3 - Monde par-dessus l'ancien.

### SDK3 - Avatars
:::danger Ne procédez pas à des "réinstallations de suppression" pour SDK3 - Avatars !

***Si vous supprimez les dossiers du SDK avec Unity fermé et ouvrez Unity sans le SDK installé, vous perdrez des comportements d'état.*** Ils sont fragiles et ne persistent pas lors des réinstallations complètes. Assurez-vous de sauvegarder vos projets souvent et de sauvegarder/documenter vos configurations de comportements d'états.\n\n Si vous devez absolument effectuer une réinstallation complète de votre forfait SDK3-Avatars, sauvegardez d'abord votre projet. Vous devrez configurer de nouveau vos comportements d'états, assurez-vous donc de les avoir bien documentés.
:::
1. Fermez Unity.
2. Sauvegardez votre projet Unity ! Vous n'avez pas à sauvegarder votre dossier Library, ces fichiers sont générés automatiquement par Unity.
3. Ouvrez votre projet Unity.
4. Importez le nouveau SDK3 - Avatars sur l'ancien. Si vous obtenez des erreurs après l'importation, essayez de redémarrer Unity.
:::note Erreurs attendues du SDK3 sur la mise à jour de la dynamique des avatars

Il est prévu d'avoir quelques erreurs lorsque vous mettez à jour pour la première fois le SDK3-Avatars vers le SDK de dynamique d'avatar. Cela est dû au fait que le SDK installe les packages Burst et Mathematics pendant le processus d'installation, et qu'Unity s'empresse de les importer tôt.\n\nSi vous corrigez les erreurs ou redémarrez Unity, elles devraient disparaître.
:::

### SDK3 - Avatars - Processus de projet séparé
Si vous rencontrez des problèmes pour mettre à jour via le processus ci-dessus, essayez ceci à la place :
1. Fermez Unity.
2. Créez un nouveau projet vierge.
3. Importez le nouveau package SDK3 - Avatars dans ce projet.
4. Fermez ce projet Unity.
5. En utilisant l'explorateur (Ne pas ouvrir Unity encore !), supprimez les dossiers VRCSDK3 du projet que vous mettez à niveau. Jusqu'à ce que ce guide indique le contraire, ***ne pas ouvrir Unity.***
6. À partir du nouveau projet vierge dans lequel vous avez importé le SDK, copiez les dossiers VRCSDK3 dans votre projet que vous mettez à niveau.
7. Une fois la copie terminée, ouvrez Unity et ouvrez votre projet mis à niveau. Vous pouvez supprimer le projet vierge.

### Processus de mise à jour avancé

Si vous réinstallez le SDK dans un projet contenant un monde utilisant des configurations de déclencheurs complexes, voici une façon plus sûre de mettre à jour votre SDK.

1. Fermez Unity
2. Sauvegardez votre projet dans un autre dossier (ne sauvegardez pas le dossier Library, ces fichiers sont générés automatiquement par Unity)
3. Supprimez les dossiers SDK et Plugins, ainsi que les fichiers .META associés
4. Créez un nouveau projet Unity factice
5. Installez le dernier SDK dans le projet factice.
6. Copiez les dossiers SDK / Plugin nouvellement ajoutés et les fichiers .META associés du projet factice dans votre projet d'origine.
7. C'est tout. Maintenant, vous pouvez ouvrir votre projet mis à jour, et il n'y aura pas de plantage, peu importe la complexité de votre travail avec les déclencheurs !

## Mise à jour de Unity

Si vous mettez à jour à partir d'une version précédente d'Unity, nous [avons un guide pour la mise à jour](/sdk/migrating-to-a-newer-minor-unity-version) vers notre dernière version prise en charge !