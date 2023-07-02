---
title: "Conseils sur la création, l'optimisation et les laboratoires communautaires pour la création de mondes"
description: "Guide pour soumettre un monde pour qu'il soit rendu public"
---

Vous voulez rendre votre monde public ? Vous êtes au bon endroit ! Vous devez soumettre votre monde aux **Laboratoires communautaires**.

Il y a quelques choses à prendre en compte avant de soumettre votre monde aux Laboratoires communautaires. **Assurez-vous de tout lire attentivement !** Ne pas le faire pourrait entraîner la suppression de votre monde, ou qu'il ne quitte jamais les Laboratoires communautaires.

Vous pouvez soumettre votre monde aux Laboratoires communautaires sur VRChat.com (Modifier les infos du monde -> Zone dangereuse -> Visibilité du monde -> Publier) ou lorsque vous téléchargez une nouvelle version dans Unity.

La publication de votre monde le rendra immédiatement accessible à tous les utilisateurs qui optent pour les Laboratoires communautaires. À terme, votre monde deviendra public et accessible à tous les utilisateurs en dehors des Laboratoires communautaires ! [En savoir plus sur les Laboratoires ici](https://docs.vrchat.com/docs/vrchat-community-labs).

## Informations importantes

- **Vous ne pouvez soumettre qu'un seul monde par utilisateur tous les sept jours aux Laboratoires communautaires.**
- **Vous pouvez mettre à jour votre monde aussi souvent que vous le souhaitez.** Faites simplement une mise à jour ! Cela n'affectera pas le statut de votre monde.
- **Si votre monde est déjà public, vous n'avez pas besoin de le soumettre à nouveau si vous le mettez à jour.** Il sera mis à jour automatiquement et vous ne perdrez pas votre statut public.
- Si votre monde ou tout contenu du monde (vidéos, avatars, images) enfreint les conditions d'utilisation de VRChat ou les directives de la communauté, votre capacité à soumettre des mondes aux Laboratoires communautaires sera suspendue pendant un certain temps. Des suspensions répétées peuvent entraîner des mesures de modération in-app.
- **Les avertissements de contenu sont obsolètes et ne sont pas utilisés pour le moment.** Vous ne pouvez pas télécharger de contenu sur VRChat qui enfreint nos [directives de la communauté](https://vrchat.com/community-guidelines) ou nos [conditions d'utilisation](https://vrchat.com/legal). Le faire (même si vous avez coché un avertissement de contenu) entraînera des mesures de modération.
- Nous n'approuvons pas les mondes via les messages privés Discord, les e-mails à VRChat ou tout autre canal.
- Si votre monde a une taille de fichier **très importante**, nous pourrions vous demander de réduire la taille du monde et de le retirer de la mise en public en attendant. **Essayez de garder vos mondes en dessous de 200 Mo.**

## Mondes d'avatars / Tous les socles d'avatars dans n'importe quel monde

- **Les avatars sur les socles doivent être "raisonnablement optimisés".** Consultez nos [conseils d'optimisation des avatars](/avatars/avatar-optimizing-tips) pour plus de détails. 
  Évitez de partager des avatars de mauvaise qualité. Cela s'applique à tous les mondes, pas seulement aux mondes d'avatars. Si les avatars dans votre monde ont de graves problèmes de performances, votre monde peut être supprimé de la mise en public ou des Laboratoires communautaires.
- **Si vous téléchargez un monde avec des avatars de substitution et que vous les remplacez par des avatars violant les conditions d'utilisation après la publication, vous serez suspendu de soumettre des mondes pendant un mois. Selon la gravité de l'infraction, vous pourriez être modéré in-app.**
- **Si vous avez un monde d'avatars, aucun de vos avatars ne peut violer les conditions d'utilisation / directives de la communauté.**
- Pensez à utiliser les modules complémentaires [Cat's Blender Plugin](https://github.com/absolute-quantum/cats-blender-plugin) et Shotariya's Texture Combiner pour Blender afin d'optimiser vos modèles.

## Conseils de performance

- **Visez au moins 45 FPS avec un seul utilisateur VR au spawn.** Si vous n'avez pas de casque VR, demandez à un ami de tester le monde pour vous. Avoir un monde qui fonctionne mal signifie que les gens ne passeront pas de temps dans votre monde et il sera difficile de sortir des Laboratoires.
- **N'utilisez pas de shaders qui ne sont pas compatibles VR.** Les shaders doivent prendre en charge le rendu stéréo à un seul passage. Si vous recherchez un bon shader pour l'eau, [essayez Silent's Water Shader](https://gitlab.com/s-ilent/clear-water).
- **Utilisez des shaders pour mobile sur Android.** La plupart des shaders fonctionnent sur Android, mais ils demandent généralement plus de puissance de traitement pour le rendu. Utilisez des shaders pour mobile lorsque c'est possible.
- **Faites très attention aux effets de post-traitement.** Certains effets de post-traitement de l'espace-écran causent de gros problèmes pour les utilisateurs VR. Soyez particulièrement prudent avec l'aberration chromatique, la réflexion de l'espace-écran et l'occlusion ambiante de l'espace-écran.
- **De mauvaises choses se produisent lorsque vous mettez plus de 2 lecteurs vidéo dans une salle.** Cela affecte généralement négativement les performances.
- **De mauvaises choses se produisent également lorsque vous mettez plus de 1 miroir dans votre salle.** Les miroirs affectent gravement les performances d'un monde. Si vous avez 1 miroir dans la salle, assurez-vous de le configurer pour qu'il puisse être activé ou désactivé.
- **NOUS VOUS RECOMMANDONS FORTEMENT de ne pas activer les miroirs par défaut.** Ajoutez un bouton qui peut être activé par les joueurs ou activé automatiquement lorsque les joueurs entrent dans une certaine zone.
- **N'utilisez PAS trop de lumières en temps réel.** Elles sont **très** coûteuses et peuvent affecter les performances de votre monde si elles sont mal utilisées.
- **Le calcul de l'éclairage est extrêmement important et peut vous faire gagner énormément en performances.**

## Conseils généraux

- Testez votre monde ! Il n'est pas rare de voir des mondes où vous tombez immédiatement hors du portail pour toujours.
- Testez également votre monde en VR. Vérifiez que vos shaders fonctionnent correctement et s'affichent correctement en VR. Si vous n'avez pas de casque VR, demandez à un ami de jeter un coup d'œil.
- **TESTEZ VOTRE ÉCLAIRAGE !** L'éclairage d'un monde est très important et le faire correctement est essentiel. Ne vous contentez pas de tester avec des shaders Toon car ils ne représentent pas correctement l'éclairage, utilisez plutôt des shaders Standard ou PBR pour voir comment l'éclairage est affecté. Si votre monde a l'air surexposé, vous avez probablement trop de lumières, votre intensité est trop élevée ou vous devez envisager d'utiliser le mappage tonal.
- Vous voulez rendre votre monde privé à nouveau ? Modifiez votre monde sur le site web et vous pouvez le mettre en mode Privé.
- Évitez d'utiliser directement des fichiers `.blend`. L'exportation de fichiers FBX depuis Blender pour les utiliser dans VRChat cause généralement moins de problèmes.

Si vous avez des questions sur le processus, [visitez notre forum](https://ask.vrchat.com/c/worlds/27) ou envoyez un e-mail à hello@vrchat.com avec votre question. Si vous organisez un événement ou avez un monde très fréquenté dans l'application et avez besoin d'un monde rendu public à un autre moment, veuillez nous contacter par e-mail au moins 48 heures à l'avance.

## Soumission aux Laboratoires communautaires

Une fois que vous avez tout lu ci-dessus, soumettez votre nouveau monde aux Laboratoires communautaires ! Si vous voulez en savoir plus sur le fonctionnement des Laboratoires communautaires, consultez notre [documentation sur les Laboratoires communautaires de VRChat](https://docs.vrchat.com/docs/vrchat-community-labs).

## Devenir un monde de jeu ou d'avatars

Si vous voulez que votre monde soit catégorisé comme un monde d'avatars ou un monde de jeux, ajoutez simplement l'étiquette appropriée lors du téléchargement.

> 🚧 N'abusez pas des rangées de mondes
> 
> Ces règles sont mises en place pour donner à **tous** les mondes une chance d'être découverts. L'utilisation de techniques similaires au référencement n'est pas autorisée et entraînera des actions telles que la suppression d'étiquettes, ou dans des cas répétés/plus graves, la modération de l'auteur.
> 
> VRChat se réserve le droit de prendre des mesures à l'encontre des utilisateurs qui abusent de nos systèmes pour promouvoir injustement ou de manière trompeuse leur propre contenu.

### Mondes d'avatars

**Un monde d'avatars est un monde où l'obtention et le partage d'avatars sont la** **_principale priorité._** Trouver un avatar dans les mondes étiquetés comme Mondes d'avatars devrait être rapide et facile, et ne devrait pas être une réflexion après coup ou une "addition" à une autre fonctionnalité clairement principale du monde.

Pour catégoriser votre monde comme un monde d'avatars, ajoutez l'étiquette `avatar`.

### Mondes de jeux

