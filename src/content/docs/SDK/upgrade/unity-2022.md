---
title: "Mise à niveau vers Unity 2022"
sidebar:
    badge: 
        text: Nouveau
        variant: caution
---

Cette page explique comment mettre à niveau votre projet VRChat de la version 2019.4.31f1 à Unity 2022.3.6f1.
Unity 2022 est requis pour utiliser la dernière version du SDK VRChat. Vous pouvez consulter les [avantages de la mise à niveau ici](/sdk/upgrade/current-unity-version).

Si vous utilisez le Creator Companion, la mise à niveau de votre projet est facile ! Mais d'abord, assurez-vous de créer des sauvegardes de vos projets.

## Sauvegarder votre projet Unity

Si vous utilisez le [VRChat Creator Companion](https://creators.vrchat.com/), il suggérera automatiquement de sauvegarder votre projet avant de le migrer.

1. Pour sauvegarder votre projet, cliquez sur le menu à trois points à côté du bouton Gérer le Projet, puis choisissez l'option "Créer une Sauvegarde". C'est la méthode recommandée de sauvegarde, en particulier pour les nouveaux créateurs !
	- Notez que "Créer une Sauvegarde" ne sauvegardera pas les dossiers `Udon`, `UdonSharp`, ou `VRChat Examples`. Si vous avez apporté des modifications à ces dossiers, choisissez une autre option de sauvegarde.
	- Vous pouvez également sauvegarder le projet en dupliquant tout le dossier du projet avec un nouveau nom, comme `MyProject-Backup`.
	- Vous *pouvez* exporter votre projet entier en tant que Package Unity, mais cela prend beaucoup de temps et peut causer des erreurs. Nous ne le recommandons pas.

![Créer une sauvegarde.](/img/sdk/migrate-2019-2022/creating_backup.png)

:::danger[Ne sautez pas cette étape !]
Garder une sauvegarde lors de changements majeurs dans votre projet précieux est toujours une bonne idée.

Les mises à niveau peuvent échouer. Si c'est le cas, votre sauvegarde peut être utilisée comme point de contrôle. Si vous gardez vos fichiers de projet originaux en sécurité, vous pouvez les restaurer, réessayer et découvrir ce qui a mal tourné.

**Sans sauvegarde, vous n'avez pas de seconde chance.** Si vous faites une erreur ou si la mise à niveau échoue, la corriger peut être difficile ou même **impossible.**
:::

1. Ouvrez votre projet dans Unity 2019 pour voir s'il y a des erreurs ou des avertissements dans [la console Unity](https://docs.unity3d.com/Manual/Console.html) ou dans le [panneau de construction SDK VRChat](https://creators.vrchat.com/worlds/creating-your-first-world#step-4---configure-your-world-in-the-sdk-build-panel).
	- Si vous ne résolvez pas les problèmes dans votre projet Unity 2019, ils peuvent causer des problèmes dans Unity 2022.
	- *Certains* avertissements peuvent être ignorés en toute sécurité, mais vous devriez essayer de comprendre pourquoi ils sont présents.

Maintenant, vous êtes prêt à mettre à niveau !

## Utiliser le Creator Companion 

Il existe deux façons de mettre à niveau votre projet depuis le VCC : directement depuis votre page Projets ou depuis chaque page Gérer le Projet. **Assurez-vous que le projet que vous essayez de mettre à niveau est fermé avant de continuer.**

1. Allez dans Paramètres, puis cliquez sur Mises à jour pour voir si votre Creator Companion doit être mis à jour. Sans mise à jour, les invites pour passer à Unity 2022 ne s'afficheront pas.

![Vérifier les mises à jour du VCC.](/img/sdk/migrate-2019-2022/updating_vcc.png)

2. Sur la page Projets, vous verrez une nouvelle colonne **Unity** avec un sélecteur de version pour chacun de vos projets. Cliquez dessus, puis sur Migrer vers Unity 2022.

![Cliquez sur le bon projet.](/img/sdk/migrate-2019-2022/updating_vcc_via_projects.png)

Sinon, cliquez sur **Gérer le Projet** sur n'importe quel projet et vous verrez une bannière de Mise à niveau vers 2022.

![Mise à niveau via Gérer le Projet.](/img/sdk/migrate-2019-2022/manage_project_upgrade.png)

## Utiliser Unity Hub

Unity Hub est une application séparée qui vous permet d'installer et de travailler facilement avec plusieurs versions de Unity en même temps. Vous pouvez également l'utiliser pour installer Unity 2022 si vous ne souhaitez pas utiliser le Creator Companion.

1. Installez le [Unity Hub](https://unity.com/download).
	- Vous pouvez suivre le [guide d'installation officiel de Unity](https://learn.unity.com/tutorial/install-the-unity-hub-and-editor).
	- Vous devrez créer un [compte Unity](https://id.unity.com/account/new) après avoir installé Unity Hub.
2. Visitez [l'archive de téléchargement Unity](https://unity.com/releases/editor/archive).
3. Cliquez sur **Unity 2022.x**.
4. Faites défiler la page jusqu'à ce que vous voyiez Unity **2022.3.6** et cliquez sur le bouton bleu **Unity Hub**.
	- Ne choisissez pas la première version de Unity dans la liste !
	- Vous pouvez également vous rendre sur la [page Version Actuelle de Unity](/sdk/upgrade/current-unity-version) pour trouver un lien pour télécharger la version correcte de Unity.

![Sélectionnez la bonne version à installer dans l'archive Unity.](/img/sdk/migrate-2019-2022/unity_webpage_search.png)

![Acceptez l'invite du navigateur pour ouvrir Unity Hub.](/img/sdk/migrate-2019-2022/browser-prompt-unity-hub.png)

1. Cliquez sur **Ouvrir Unity Hub** dans votre navigateur web.

![Activez le support de compilation Android si vous souhaitez pouvoir développer du contenu pour les appareils Android.](/img/sdk/migrate-2019-2022/unity_version_hub_upgrade_android.png)

6. Activez le **support de compilation Android** dans l'écran d'installation Unity.
	- Vous pouvez ignorer cette étape si vous ne prévoyez pas de télécharger du contenu sur Android ou Quest pour le moment.
	- Vous pouvez compléter cette étape plus tard en choisissant [Ajouter des modules](https://docs.unity3d.com/hub/manual/AddModules.html) dans Unity Hub.
7. Cliquez sur **Continuer** pour installer Unity 2022.3.6.

## Gérer les versions de Unity

Il est facile de vérifier quelles versions de Unity sont disponibles sur votre PC pour une utilisation avec le Creator Companion. Vous pouvez également changer quelle version de Unity est utilisée pour ouvrir tous les *nouveaux* projets.

1. Dans le CC, allez dans **Paramètres**.
2. Sous **Éditeurs Unity**, utilisez le menu déroulant pour changer l'éditeur Unity par défaut. Cela n'aura **pas** d'effet rétroactif sur les projets déjà créés.
3. Si vous n'avez pas encore installé Unity 2022.3.6, [suivez les instructions ci-dessus](unity-2022.md#Using-the-Creator-Companion). 
4. Si vous ne voyez pas une version de Unity que vous avez installée, essayez d'utiliser le bouton de rafraîchissement ou de trouver le chemin directement en utilisant le bouton de fichier.

## Paquets

Si vous essayez d'ajouter des paquets à votre projet 2022, gardez à l'esprit :

- Chaque paquet sélectionné a une version qui fonctionne en 2022.
- D'autres paquets *peuvent* fonctionner, mais certains peuvent nécessiter une nouvelle version de l'auteur du paquet !
- De nombreuses erreurs résulteront de l'utilisation de paquets obsolètes, alors assurez-vous que tout ce que vous importez est compatible avec Unity 2022.

# Dépannage

- Testez votre monde avant de le télécharger. Vérifiez les erreurs dans la console Unity, et testez votre monde dans VRChat pour voir s'il fonctionne.
	- Après avoir téléchargé avec succès un monde avec Unity 2022, vous ne pourrez plus télécharger ce même monde avec Unity 2019.
- [Assurez-vous d'activer votre licence Unity Personal](https://support.unity.com/hc/en-us/articles/211438683-How-do-I-activate-my-license-) avant d'utiliser le SDK VRChat. Unity est gratuit pour un usage personnel.
- Pour en savoir plus sur Unity Hub, consultez [la documentation Unity](https://docs.unity3d.com/hub/manual/index.html).
- Si vous rencontrez des problèmes liés au SDK lui-même, veuillez lire notre page [Dépannage SDK](/sdk/sdk-troubleshooting).
