---
title: Contraintes
sidebar:
    badge: 
        text: Nouveau
        variant: tip
---

VRChat propose son propre système de contraintes personnalisé, permettant aux os de votre avatar de se déplacer, de pivoter et de se mettre à l'échelle par rapport à d'autres os.

Ce système est conçu pour remplacer de manière similaire celui d'Unity, avec quelques fonctionnalités supplémentaires basées sur l'utilisation typique des contraintes pour les avatars VRChat. Si vous n'avez jamais utilisé de contraintes auparavant, vous pourriez trouver utile de consulter la [documentation d'Unity sur les contraintes](https://docs.unity3d.com/Manual/Constraints.html).

Vous devriez utiliser les contraintes VRChat plutôt que celles d'Unity lors de la création d'avatars. Si votre avatar contient des contraintes Unity, elles seront automatiquement converties en contraintes VRChat lorsque votre avatar sera chargé en jeu. Utiliser directement les contraintes VRChat vous donnera une représentation plus précise du comportement de votre avatar ainsi qu'un classement de performance plus précis.

## Types de Contraintes

VRChat propose actuellement les types de contraintes suivants, conçus pour fonctionner de la même manière que les six contraintes intégrées d'Unity :
- [**VRCAimConstraint**](/avatars/avatar-dynamics/constraints/vrc-aim-constraint) - Pivote le transform cible pour qu'il vise les sources. Vous pouvez personnaliser la direction considérée comme avant.
- [**VRCLookAtConstraint**](/avatars/avatar-dynamics/constraints/vrc-look-at-constraint) - Une version simplifiée de la contrainte Aim qui fait pivoter le transform cible pour que son axe Z positif soit toujours orienté vers les sources.
- [**VRCParentConstraint**](/avatars/avatar-dynamics/constraints/vrc-parent-constraint) - Déplace et pivote le transform cible comme s'il était un enfant de ses sources.
- [**VRCPositionConstraint**](/avatars/avatar-dynamics/constraints/vrc-position-constraint) - Modifie la position du transform cible pour correspondre aux positions de ses sources.
- [**VRCRotationConstraint**](/avatars/avatar-dynamics/constraints/vrc-rotation-constraint) - Modifie la rotation du transform cible pour correspondre aux rotations de ses sources.
- [**VRCScaleConstraint**](/avatars/avatar-dynamics/constraints/vrc-scale-constraint) - Modifie l'échelle du transform cible pour correspondre aux échelles de ses sources.

Visitez les liens ci-dessus pour plus d'informations sur les paramètres disponibles pour chaque type de contrainte.

## Paramètres Avancés des Contraintes

Le panneau des Paramètres Avancés contient des fonctions supplémentaires fournies par les contraintes VRChat.

### Target Transform

Le paramètre `Target Transform` permet de modifier le transform ciblé par cette contrainte. Par défaut, ce paramètre est vide, et la contrainte est appliquée au transform auquel le composant de contrainte est attaché. Notez que changer ce transform avec une animation n'est pas possible.

Cela peut être utile si vous souhaitez regrouper tous les composants de contrainte de votre avatar en un seul endroit, ou si vous configurez un système utilisant des contraintes que vous souhaitez rendre transférable entre différents avatars.

### Solve In Local Space

Normalement, une contrainte est résolue en espace monde, ce qui signifie qu'elle correspondra à la **position/rotation/échelle** des sources en espace monde. Si l'option `Solve In Local Space` est activée, la contrainte correspondra à la **position/rotation/échelle** locale de ses sources.

Cela peut être utile dans des situations telles que la configuration de membres supplémentaires fictifs pour les avatars. Vous pourriez, par exemple, avoir une chaîne de contraintes de rotation résolues localement qui se réfère à chaque os du bras réel de l'avatar, ce qui entraînerait cette chaîne à pivoter comme le fait le bras réel. Cependant, ce n'est pas limité aux contraintes de rotation - tous les types peuvent utiliser la résolution locale.

La vidéo ci-dessous illustre la différence entre les contraintes de rotation résolues globalement et localement en exemple. Dans ce clip, les flèches du milieu et de droite utilisent chacune des contraintes de rotation pour correspondre à la rotation de la flèche de gauche, où la flèche du milieu utilise la résolution en espace monde et la flèche de droite utilise la résolution en espace local. Remarquez comment la contrainte résolue en monde correspond toujours à la rotation de la cible en espace monde. En revanche, la contrainte résolue localement correspond toujours à la direction vers laquelle la cible est orientée par rapport à son os parent.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/6iBJ5QntrMU?si=YxAkg17x3LvinnL_" title="Lecteur vidéo YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Freeze To World

Lorsque `Freeze To World` est activé, la contrainte ignore toutes ses sources et verrouille le transform cible dans l'espace monde. La position/rotation/échelle du transform restera la même jusqu'à ce que `Freeze To World` soit désactivé.

Ce paramètre fonctionne mieux lorsqu'il est animé pour s'activer et se désactiver. Par exemple :

 1. Configurez un [expressions toggle](/avatars/expression-menu-and-controls/#types-of-controls) pour `Freeze To World` et désactivez-le par défaut.
 2. Lorsque `Freeze To World` est activé dans votre clip d'animation, le transform est verrouillé dans l'espace monde.
 3. Lorsque `Freeze To World` est désactivé dans votre clip d'animation, le transform suit à nouveau les sources de la contrainte.

Cela permet aux avatars de laisser tomber un objet à une position fixe dans le monde. Lorsque vous vous éloignez, l'objet ne suivra pas votre avatar. Les contraintes de parenté sont les plus adaptées pour cela car elles peuvent geler à la fois la position _et_ la rotation du transform cible. Cependant, `Freeze To World` est également disponible pour tous les autres types de contraintes.

La propriété `Freeze To World` n'affecte que les axes sélectionnés comme gelés dans la section Paramètres de la Contrainte. Vous devez geler tous les axes si vous voulez arrêter complètement l'objet en place. Sinon, ces axes ne seront pas mis à jour et le transform ne restera pas verrouillé dans l'espace monde.

:::note

Activer `Freeze To World` n'est pas la même chose que désactiver le composant de contrainte !

- Lorsque la contrainte est désactivée, le transform affecté cesse de se déplacer en **espace local**. Il suit toujours le mouvement de votre avatar.
- Lorsque vous activez `Freeze To World`, la contrainte déplace activement le transform en espace local pour l'empêcher de se déplacer en **espace monde**.

:::

#### Rebake Offsets When Unfrozen

Lorsque `Rebake Offsets When Unfrozen` est activé, la contrainte recalculera son décalage par rapport à ses sources lorsqu'elle est déverrouillée par la désactivation de `Freeze To World`, au lieu du comportement habituel de conserver son décalage original.

L'activation de cette valeur n'a pas d'effet en soi - elle détermine simplement ce qui doit se passer lorsque `Freeze To World` est désactivé.

## Performance

Il y a deux catégories de performance liées aux contraintes. Consultez la page des [Performance Ranks](/avatars/avatar-performance-ranking-system#avatar-performance-ranks---value-maximums-per-rank) pour les limites appliquées à chaque plateforme.

### Constraint Count

Le nombre de contraintes est assez simple - c'est le nombre total de contraintes attachées à votre avatar, y compris les contraintes désactivées. Cela inclut à la fois les contraintes VRChat et les contraintes Unity. Les contraintes Unity sont automatiquement converties en contraintes VRChat lorsque votre avatar est chargé en jeu.

Réduire le nombre total de contraintes peut améliorer la performance de votre avatar.

### Constraint Depth

Lorsque vous configurez une chaîne de contraintes sur votre avatar (par exemple, une chaîne de contraintes de rotation le long d'un membre supplémentaire), ces contraintes doivent être évaluées une à une dans un ordre spécifique, allant de la contrainte à la base de la chaîne jusqu'à la contrainte au bout. Si la chaîne contient 3 contraintes, alors la chaîne a une profondeur de contrainte de 3. La note globale de profondeur de contrainte de l'avatar est la plus longue chaîne de dépendances à travers tout l'avatar.

La profondeur des contraintes peut être réduite en diminuant la longueur de la chaîne de contraintes la plus longue. Gardez à l'esprit que cette catégorie recherche la *plus longue* chaîne plutôt que la somme de toutes les chaînes - si votre avatar a plusieurs bras ayant tous une profondeur de 3, le score global pour l'avatar serait toujours de 3 (en supposant qu'il n'y ait pas de chaînes plus longues ailleurs sur l'avatar).

La profondeur des contraintes est importante car elle donne une meilleure estimation de la façon dont les contraintes sur un avatar performeront que de simplement compter combien de contraintes il y a au total. En organisant les contraintes pour minimiser les dépendances entre elles, beaucoup d'entre elles pourront fonctionner en même temps, ce qui donne une meilleure performance par rapport à des situations où les contraintes doivent fonctionner l'une après l'autre.

:::info[Constraint Depth with Unity Constraints]

La profondeur des contraintes d'un avatar ne peut être calculée

 avec précision que lorsqu'il utilise exclusivement des contraintes VRChat.

Si votre avatar contient des contraintes Unity, la profondeur des contraintes est susceptible d'être surestimée, car la catégorie suppose que les contraintes Unity ne peuvent fonctionner qu'une à la fois. Vous pouvez convertir toutes les contraintes Unity de votre avatar en contraintes VRChat équivalentes en utilisant l'option Auto Fix pertinente dans le panneau de contrôle du SDK.

:::

## Conseils d'Utilisation

- Si votre contrainte ne semble pas fonctionner, assurez-vous qu'elle est réellement active.
	- L'option `Is Active` doit être activée.
	- Le composant lui-même doit être activé (la case à cocher à côté de son nom) et doit être attaché à un objet de jeu actif sur votre avatar.
	- Assurez-vous que l'option `Lock` est activée. Sinon, la contrainte réévaluera ses valeurs `At Rest` et `Offset` plutôt que d'affecter le transform.
- La référence `Target Transform` ne peut pas être modifiée par des animations. Cela est dû au fait que changer le transform ciblé par la contrainte nécessiterait de recalculer le classement de performance de l'avatar. Si vous souhaitez changer le transform ciblé d'une contrainte, vous pouvez plutôt essayer de passer entre plusieurs composants de contrainte différents, chacun avec un transform cible différent.
- Si possible, évitez d'utiliser des animations pour changer quels transforms sont référencés par vos contraintes. Animer une référence de transform peut provoquer des problèmes de performance pour votre avatar, car les contraintes peuvent devoir être réévaluées chaque fois que les références changent.
    - Ceci se réfère spécifiquement à l'animation de la _référence_ d'une contrainte à un transform - animer la position, la rotation et l'échelle du transform est acceptable !
	- Il n'est pas possible d'animer les références de transform pour les sources individuelles en raison de limitations techniques. Comme alternative plus simple, vous pouvez configurer plusieurs sources avec des transforms différents et animer leurs poids à la place.

## Informations sur les Outils d'Éditeur

Si vous êtes un utilisateur avancé d'Unity, vous pouvez écrire vos propres outils d'éditeur personnalisés en C# qui interagissent avec le convertisseur de contraintes.

Ces utilitaires sont brièvement résumés ici. Veuillez consulter la documentation en ligne pour des descriptions complètes de leur fonctionnement.

### Méthodes de Conversion

La classe SDK `AvatarDynamicsSetup` contient les méthodes de conversion que le SDK utilise pour traduire les contraintes Unity en contraintes VRChat équivalentes. Les méthodes de conversion de contraintes suivantes sont exposées pour les outils utilisateur :
| Méthode | Description |
|---|---|
| `ConvertUnityConstraintsAcrossGameObjects(List<GameObject> targetGameObjects)` | Convertit les contraintes Unity sur une liste d'objets de jeu en contraintes VRChat. |
| `ConvertUnityConstraintsAcrossAnimationClips(List<AnimationClip> targetAnimationClips)` | Modifie une liste de clips d'animation afin que toutes les pistes les ciblant soient mises à jour pour cibler des contraintes VRChat à la place. |
| `DoConvertUnityConstraints(IConstraint[] unityConstraints, VRCAvatarDescriptor avatarDescriptor, bool convertReferencedAnimationClips)` | Convertit un tableau de contraintes Unity en contraintes VRChat, en incluant éventuellement les clips d'animation référencés. Cela s'exécute immédiatement sans dialogue de confirmation. |
| `RebindConstraintAnimationClip(AnimationClip clip, IConstraint oldConstraint)` | Tente de modifier un seul clip d'animation pour cibler les pistes des contraintes Unity vers les contraintes VRChat, en limitant éventuellement les conversions à la contrainte Unity donnée. |
| `TryGetSubstituteAnimationBinding(Type unityConstraintType, string unityConstraintPropertyName, out Type vrcConstraintType, out string vrcConstraintPropertyName, out bool isArrayProperty)` | Tente de traduire un nom de propriété et un type de contrainte Unity en un nom de propriété et un type de contrainte VRChat équivalents. |

### Fonctions Déleguées

Pour compléter les méthodes ci-dessus, la classe `AvatarDynamicsSetup` fournit également des délégués permettant à vos outils de contrôler le comportement du convertisseur. Les délégués suivants sont disponibles :
| Délégué | Description |
|---|---|
| `bool IsUnityConstraintAutoConverted(IConstraint constraint)` | Étant donné une contrainte Unity, retourne `true` si cette contrainte sera convertie en contrainte VRChat lors de la compilation par les outils utilisateur. Vous pouvez utiliser ceci pour supprimer l'avertissement de validation normalement généré par le SDK incitant l'utilisateur à convertir ses contraintes Unity en contraintes VRChat. |
| `bool ConvertUnityConstraintsAcrossGameObjects(List<GameObject> gameObjects, bool isAutoFix)` | Étant donné une liste d'objets de jeu, convertit toutes les contraintes et les clips d'animation sous-jacents en contraintes VRChat. Le paramètre `isAutoFix` est réglé sur `true` si cela a été déclenché par l'utilisateur cliquant sur auto-fix dans la liste des validations, ou `false` s'il a été déclenché par une entrée de menu ou un script utilisateur personnalisé. Retournez `true` pour empêcher le convertisseur SDK natif de s'exécuter. |
| `bool ConvertUnityConstraintsAcrossAnimationClips(List<AnimationClip> animationClips)` | Étant donné une liste de clips d'animation, met à jour toutes les pistes faisant référence aux contraintes Unity pour référencer plutôt les contraintes VRChat. Retournez `true` pour empêcher le convertisseur SDK natif de s'exécuter. |