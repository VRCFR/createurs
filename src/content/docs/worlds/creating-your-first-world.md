---
title: "Création de votre premier monde"
description: "Apprenez comment créer votre premier monde sur VRChat en suivant ces étapes simples."
---

> 🚧 
> 
> Certains éléments de cette page sont en cours de mise à jour.  
> Besoin d'aide ? Rendez-vous sur notre Discord à [discord.gg/vrchat](https://discord.gg/vrchat) ou sur notre forum officiel à [ask.vrchat.com](https://ask.vrchat.com).

Avant de commencer, assurez-vous d'avoir un projet Unity avec le SDK déjà configuré.

## Étape 1 - Configuration de la scène

La première chose dont vous avez besoin est d'une scène. Cela peut être une scène existante avec du contenu ou une nouvelle scène. Une fois la scène ouverte, faites glisser et déposez le préfabriqué VRCWorld dans votre scène.

Vous pouvez trouver le préfabriqué VRCWorld en le recherchant dans l'onglet 'Projet' et en définissant votre recherche sur 'Dans les packages' ou 'Tout'.

![](/img/worlds/creating-your-first-world-b1946d4-Unity_4t4quWsgTY.png)

## Étape 2 - Création de points d'apparition

Vous devez maintenant configurer au moins un point dans la scène où les utilisateurs peuvent apparaître. Par défaut, les joueurs apparaissent à l'emplacement de votre objet VRCWorld. C'est la configuration la plus simple et celle que la plupart des utilisateurs utilisent.

Si vous souhaitez créer des points d'apparition supplémentaires, créez un GameObject vide et placez-le à l'endroit où vous souhaitez que les utilisateurs apparaissent. Ajoutez le GameObject à la liste 'spawns' dans le [VRC_SceneDescriptor](/worlds/components/vrc_scenedescriptor). Faites cela pour autant de points d'apparition que vous le souhaitez.

Si vous avez plusieurs points d'apparition, vous pouvez choisir l'ordre dans lequel les personnes apparaîtront en modifiant la propriété 'Spawn Order'.

## Étape 3 - Paramètres du descripteur

Il existe différentes options que vous pouvez configurer dans le [VRC_SceneDescriptor](/worlds/components/vrc_scenedescriptor) pour modifier le comportement de la pièce. Voici quelques-unes des plus importantes.

_Spawns_ - Un tableau de transformations indiquant où les joueurs apparaîtront lorsqu'ils rejoindront votre monde. Par défaut, les joueurs apparaissent à la transformation de votre descripteur de scène.

_Respawn Height_ - Hauteur Y à laquelle les joueurs réapparaissent et les objets de ramassage sont réapparus ou détruits. Tout ce qui se trouve en dessous de ce niveau Y sera réapparu (ou détruit, dans le cas d'objets configurés).

_Reference Camera_ - Une caméra sur laquelle vous pouvez appliquer des paramètres qui seront appliqués au joueur lorsqu'il rejoindra la pièce. Le plus souvent utilisé pour ajuster les plans de découpe et ajouter des effets de post-traitement.

Vous pouvez trouver plus de paramètres sur la page [VRC_SceneDescriptor](/worlds/components/vrc_scenedescriptor).

## Étape 4 - Configuration de la scène

Commençons ! Allez dans `VRChat SDK > Show Control Panel > Builder`. Là, vous verrez des éléments facultatifs que vous pouvez configurer dans votre scène ainsi que des options pour construire votre monde. Parcourez ces opérations :

- Configuration des calques pour correspondre aux calques de VRChat. Vous devriez absolument le faire, sinon votre monde risque de ne pas fonctionner correctement.
- Configuration de la matrice des couches de collision pour correspondre à celle de VRChat. Voir ci-dessus. Ne sautez pas cette étape !
- Application de la spatialisation 3D aux AudioSources 3D automatiquement à l'exécution. Utilisez cela si toutes les AudioSource de votre scène doivent être spatialisées.
- Application de la spatialisation 3D aux AudioSources 3D dans la scène actuellement. Vous devriez utiliser cela si vous souhaitez ensuite ajouter des AudioSources qui sont en 2D, comme de la musique d'ambiance.

## Étape 5 - Construction de votre monde

Ensuite, vous devez construire le monde ! Vous devrez choisir ce que vous allez faire en premier : vous pouvez soit créer une version de test pour tester votre monde sans le publier, soit publier directement votre monde sur VRChat. Sous les titres Test et Publish, vous trouverez les boutons Last Build et New Build. Last Build prend la dernière version construite avec succès du monde pour le tester ou le télécharger. New Build crée un nouveau monde pour le tester ou le télécharger.

_(Facultatif)_  
Si vous souhaitez tester votre monde, cliquez sur le bouton New Build sous le titre Test. Cela créera une nouvelle version de votre monde et vous le lancera dans VRChat. L'option Number of Clients est utilisée lorsque vous souhaitez ouvrir plusieurs clients pour tester le comportement en réseau.

Maintenant, nous pouvons construire et télécharger votre monde en cliquant sur le bouton New Build sous le titre Publish ! Cela construira votre monde et le préparera pour le téléchargement. Unity devrait passer en mode Play et afficher un écran dans lequel vous pouvez saisir les détails sur le téléchargement, notamment :

- Nom du monde - Le nom de votre monde, tel qu'il apparaît pour tout le monde !
- _(Bientôt disponible)_ Capacité recommandée - Le nombre maximum recommandé de joueurs pour votre monde.
  - Si une instance publique a atteint sa capacité recommandée, VRChat découragera les autres joueurs de rejoindre. L'instance ne sera plus visible dans la liste des instances publiques de VRChat.
  - Les joueurs peuvent toujours essayer de rejoindre l'instance dans certaines circonstances s'ils ont une URL d'invitation directe sur vrchat.com.
- Capacité des joueurs - Le nombre maximum de joueurs autorisés dans votre monde.
  - Si une instance atteint sa capacité de joueurs, de nouveaux joueurs ne peuvent pas rejoindre.
  - Le créateur de l'instance, le créateur du monde ou le propriétaire du groupe peuvent toujours rejoindre, même si cela dépasse la capacité des joueurs. (Sauf s'ils n'ont pas la permission d'entrer/voir cette instance)

> 🤔 Que se passe-t-il si mon monde n'a pas de 'Capacité recommandée' ?
> 
> Si vous avez téléchargé votre monde VRChat sans 'capacité recommandée', la capacité des joueurs fonctionne différemment :
> 
> - 'Capacité recommandée' sera identique à la valeur de votre capacité des joueurs
> - 'Capacité des joueurs' sera deux fois la valeur de votre capacité des joueurs
> 
> Par exemple : Si vous avez défini 'Capacité des joueurs' sur 10 et que vous n'avez pas défini 'Capacité recommandée', alors votre _véritable_ 'Capacité des joueurs' sera de 20. La 'Capacité des joueurs' était parfois appelée la 'limite souple' pour cette raison.

- Description - Elle sera affichée sur la page 'Détails du monde' de VRChat et sur le site web.
- Avertissements de contenu - **Les avertissements de contenu sont obsolètes et ne sont pas utilisés actuellement.** Vous ne pouvez pas télécharger de contenu sur VRChat qui enfreint nos [Directives de la communauté](https://vrchat.com/community-guidelines) ou nos [Conditions d'utilisation](https://vrchat.com/legal). Le non-respect de cette règle (même si vous avez coché un avertissement de contenu) entraînera une action de modération.

Vous pouvez également retourner dans la vue Scène et ajuster la caméra VRCCam pour que la vignette soit magnifique.

Une fois toutes ces informations saisies, vous devez confirmer que vous avez le droit de télécharger le contenu sur VRChat. Après avoir fait cela, vous pouvez cliquer sur le bouton "Télécharger". La pièce sera ensuite téléchargée sur VRChat ! Une fois terminé, vous devriez pouvoir la voir dans le jeu ou via le gestionnaire de contenu dans le SDK via `VRChat SDK > Show Control Panel > Content Manager`.

> 🚧 Échecs de téléchargement
> 
> Si votre monde échoue à se télécharger, vérifiez la console pour voir s'il y a des erreurs. Si c'est le cas, résolvez-les avant de réessayer de construire votre monde. Consultez notre autre documentation ou demandez de l'aide dans [Discord](https://discord.com/invite/vrchat) si vous avez besoin d'aide.