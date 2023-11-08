---
title: "Création de Votre Premier Monde"
description: "Création de monde VRChat"
---

:::caution[🚧]
Certaines parties de cette page sont en cours de mise à jour.  
Besoin d'aide ? Visitez notre Discord à [discord.gg/vrchat](https://discord.gg/vrchat) ou notre forum officiel à [ask.vrchat.com](https://ask.vrchat.com).
:::

Avant de commencer, assurez-vous d'avoir un [projet Unity avec le SDK configuré](/sdk).

## Étape 1 - Configuration d'une scène

La première chose dont vous avez besoin est une scène. Il peut s'agir soit d'une scène existante avec du contenu, soit d'une nouvelle. Avec la scène ouverte, faites glisser et déposez le prefab VRCWorld dans votre scène.

Vous pouvez trouver le prefab VRCWorld en le recherchant dans votre onglet 'Projet', et en définissant votre recherche sur 'Dans les Packages' ou 'Tout'.

![](/img/worlds/creating-your-first-world-b1946d4-Unity_4t4quWsgTY.png)

## Étape 2 - Création de points d'apparition

Vous devez maintenant configurer au moins un point dans la scène où les utilisateurs peuvent apparaître. Par défaut, les joueurs apparaissent à l'emplacement de votre objet VRCWorld. C'est la configuration la plus simple et celle que la plupart des utilisateurs utilisent.

Si vous souhaitez créer des points d'apparition supplémentaires, créez un GameObject vide et placez-le à l'endroit où vous souhaitez que les utilisateurs apparaissent. Ajoutez ce GameObject à la liste `spawns` dans le [VRC_SceneDescriptor](/worlds/components/vrc_scenedescriptor). Faites cela pour autant de points d'apparition que vous le souhaitez.

Si vous avez plus d'un point d'apparition, vous pouvez choisir l'ordre dans lequel les gens y apparaîtront en modifiant la propriété Ordre d'apparition.

## Étape 3 - Paramètres du Descripteur

Il existe différentes options que vous pouvez définir dans le [VRC_SceneDescriptor](/worlds/components/vrc_scenedescriptor) qui modifient le comportement de la salle. Voici quelques-unes des plus importantes.

_Spawns_ - Un tableau de transformations où les joueurs apparaîtront lorsqu'ils rejoindront votre monde. Par défaut, les joueurs apparaissent à la transformation de votre Descripteur de Scène.

_Hauteur de Rappel_ - Hauteur Y à laquelle les joueurs réapparaissent et les objets sont réapparus ou détruits. Tout ce qui existe en dessous de ce niveau Y sera réapparu (ou détruit, dans le cas d'objets configurés).

_Camera de Référence_ - Une caméra sur laquelle vous pouvez appliquer des paramètres qui sont appliqués au joueur lorsqu'il rejoint la salle. Le plus souvent utilisé pour ajuster les plans de coupe et ajouter des effets de post-traitement.

Vous trouverez d'autres paramètres sur la page du [VRC_SceneDescriptor](/worlds/components/vrc_scenedescriptor).

## Étape 4 - Configuration de la Scène

Commençons ! Allez à `VRChat SDK > Afficher le Panneau de Contrôle > Constructeur`. Là, vous verrez des choses optionnelles que vous pouvez configurer dans votre scène ainsi que des options pour construire votre monde. Parcourez ces opérations :

- Configuration des calques pour correspondre aux calques de VRChat. Vous devriez certainement le faire, sinon votre monde risque de ne pas fonctionner correctement.
- Configuration de la matrice de collision pour correspondre à celle de VRChat. Voir ci-dessus. Ne sautez pas cette étape !
- Appliquer une spatialisation 3D aux AudioSources 3D automatiquement à l'exécution. Utilisez ceci si toutes les AudioSources de votre scène doivent être spatialisées.
- Appliquer une spatialisation 3D aux AudioSources 3D dans la scène actuelle. Vous devriez utiliser ceci si vous souhaitez ensuite ajouter des AudioSources qui sont en 2D, comme de la musique d'ambiance.

## Étape 5 - Construction de votre Monde

Ensuite, vous devez construire le monde ! Vous devrez choisir ce que vous ferez en premier : vous pouvez soit créer une version de test pour tester votre monde sans le télécharger, soit publier directement votre monde dans VRChat. Sous les en-têtes Test et Publier, vous trouverez les boutons Dernière Construction et Nouvelle Construction. Dernière Construction utilise la dernière construction réussie du monde pour le tester ou le télécharger. Nouvelle Construction assemble un nouveau monde pour le tester ou le télécharger.

_(Facultatif)_
Si vous souhaitez tester votre monde, appuyez sur le bouton Nouvelle Construction sous l'en-tête Test. Cela construira une nouvelle version de votre monde et vous lancera dans le monde dans VRChat. L'option Nombre de Clients est utilisée lorsque vous souhaitez ouvrir plusieurs clients pour tester le comportement en réseau.

Maintenant, nous pouvons construire et télécharger votre monde en appuyant sur le bouton Nouvelle Construction trouvé sous l'en-tête Publier ! Cela construira votre monde et le préparera pour le téléchargement. Unity devrait passer en mode Lecture, affichant un écran dans lequel vous pouvez entrer des détails sur le téléchargement, ce qui comprend :

- Nom du monde - Le nom de votre monde, tel qu'il apparaît pour tout le monde !
- Capacité maximale - Le nombre maximum de joueurs autorisés dans votre monde.
  - Si une instance atteint sa capacité de joueurs, de nouveaux joueurs ne peuvent pas rejoindre.
  - Le créateur de l'instance, le créateur du monde ou le propriétaire du groupe peuvent toujours rejoindre, même si cela dépasserait la capacité de joueurs. (À moins qu'ils n'aient pas la permission d'entrer/voir cette instance)
- Capacité recommandée - Le nombre maximum recommandé de joueurs pour votre monde.
  - Si une instance publique atteint sa capacité recommandée, VRChat découragera d'autres joueurs de rejoindre. L'instance ne figurera plus dans la liste des instances publiques de VRChat.
  - Les joueurs peuvent toujours essayer de rejoindre l'instance dans certaines circonstances s'ils ont un lien d'invitation directe sur vrchat.com.

> 🤔 Et si mon monde n'a pas de 'Capacité recommandée' ?
> 
> Si vous avez téléchargé votre monde VRChat sans 'capacité recommandée', la capacité de joueurs fonctionne différemment :
> 
> - 'Capacité recommandée' sera identique à la valeur de votre capacité de joueurs
> - 'Capacité de joueurs' sera **deux fois** la valeur de votre capacité de joueurs
> 
> Par exemple : Si vous avez défini 'Capacité de joueurs' à 10 et que vous n'avez pas défini 'Capacité recommandée', votre _capacité de joueurs_ réelle sera de 20. La 'capacité de joueurs' était parfois appelée 'limite souple' pour cette raison.

- Description - Cela s'affichera sur la page 'Détails du Monde' dans VRChat et sur le site web.
- Avertissements de Contenu - **Les Avertissements de Contenu sont obsolètes et ne sont pas utilisés actuellement.** Vous ne pouvez pas télécharger de contenu sur VRChat qui enfreint nos [Directives de la Communauté](https://vrchat.com/community-guidelines) ou [Conditions d'Utilisation](https://vrchat.com/legal). Le faire (même si vous avez coché un avertissement de contenu) entraînera une action de modération.

Vous pouvez également revenir à la vue de la scène et ajuster la caméra VRCCam pour que la vignette soit superbe.

Une fois que tout cela est entré, vous devez confirmer que vous avez le droit de télécharger le contenu sur VRChat. Après avoir fait cela, vous pouvez cliquer sur le bouton "Télécharger". La salle sera alors téléchargée sur VRChat ! Lorsque c'est terminé, vous devriez pouvoir la voir dans le jeu, ou via le gestionnaire de contenu dans le SDK via `VRChat SDK > Afficher le Panneau de Contrôle > Gestionnaire de Contenu`.

> 🚧 Échecs de Téléchargement
> 
> Si votre monde échoue lors du téléchargement, vérifiez la console pour voir s'il y a des erreurs, le cas échéant résolvez-les avant d'essayer de construire à nouveau votre monde. Consultez notre autre documentation ou demandez dans [Discord](https://discord.com/invite/vrchat) si vous avez besoin d'aide.
