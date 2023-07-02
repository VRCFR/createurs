---
title: "Exigences du rig"
description: "Guide des exigences pour le rig de votre avatar"
---

:::caution

Cette page est assez désuète, mais devrait être assez précise.
:::

## Paramètres d'exportation

Lorsque vous exportez votre rig depuis votre éditeur 3D de choix, assurez-vous que les paramètres des coordonnées sont corrects. La plupart du temps, les paramètres par défaut sont corrects.

Pour Blender, assurez-vous que la rotation de votre axe X initial est de 90 degrés.
### Rig humanoid

Unity signalera une configuration de rig humanoid si celle-ci ne répond pas aux exigences Mecanim d'un rig humanoid. Veuillez lire et connaître la [documentation Unity sur la configuration des avatars](https://docs.unity3d.com/Manual/ConfiguringtheAvatar.html).

:::danger Un avatar humanoid doit avoir des os de tête, de mains et de pied mappés.

Vous verrez ce message dans le panneau de contrôle de construction de VRChat si votre rig d'avatar est humanoid mais n'a pas les os essentiels mappés.
:::

:::note Avatars non-humanoïdes

Si votre avatar s'éloigne beaucoup d'un être humain (par exemple, quadrupède, monstre courbé, etc.), vous devriez envisager d'utiliser un rig générique et votre propre Animation Controller. Consultez le SimpleAvatarController pour un exemple. Ceci est plus avancé que la création d'un avatar humanoid, il est donc préférable de bien connaître le système du contrôleur d'animation d'Unity.
:::

### Mappage des doigts

:::caution Les os du pouce, de l'index et du majeur ne sont pas mappés, la Full-Body IK ne sera pas activée.

**Cet avertissement n'apparaît pas pour les avatars SDK3, car ils n'ont pas de problème avec l'utilisation d'armatures sans os des doigts.** Cette erreur se produit uniquement lors de l'utilisation de VRChat SDK2, qui est obsolète et ne doit pas être utilisé.\n\nPour avoir la Full-Body IK (permettant la flexion des jambes et le placement automatique des pieds), vous devez mapper ces trois os des doigts. Si vous ignorez cet avertissement, votre avatar ne pourra pas se baisser et ses pieds ne se placeront pas automatiquement (à moins que vous n'utilisiez le déplacement contrôlé par le contrôleur).\n\nCela empêchera également la lecture des substitutions d'animation personnalisées des gestes de la main. (Ceci n'est **pas** actuellement mentionné par l'avertissement dans le SDK.)
:::

### Hiérarchie de la colonne vertébrale

:::danger Votre rig a l'os UPPERCHEST mappé dans le rig humanoid. Cela posera des problèmes avec l'IK.

**Cet avertissement n'apparaît pas pour les avatars SDK3, car ils n'ont pas de problème avec l'utilisation d'armatures avec un upper chest mappé.** Cette erreur se produit uniquement lors de l'utilisation de VRChat SDK2, qui est obsolète et ne doit pas être utilisé.\n\nSi vous devez utiliser SDK2, laissez l'os upper chest vide lors de la configuration de votre humanoid.
:::

:::danger Hiérarchie de la colonne vertébrale incomplète. Assurez-vous que Pelvis, Spine, Chest, Neck et Shoulders sont mappés.

Tous ces os doivent être mappés. Si vous obtenez ce message, assurez-vous que aucun de ces emplacements n'est vide. Notez que les emplacements Neck et Chest sont facultatifs pour Mecanim, mais nécessaires pour VRChat.
:::

:::danger Hiérarchie de la colonne vertébrale incorrecte. Assurez-vous que le parent des Shoulders et du Neck est le Chest.

Pour que l'IK fonctionne correctement, vous devez avoir une hiérarchie spécifique d'os autour de la poitrine. Dans votre rig, vos os d'épaule (mappés dans Left Arm > Shoulder, Right Arm > Shoulder) doivent être des enfants directs de votre os de poitrine (mappé dans Body > Chest). De plus, l'os du cou (mappé dans Head > Neck) doit aussi être un enfant direct du Chest.
:::

### Hiérarchie des bras et des jambes

:::caution LowerArm n'est pas le premier enfant de UpperArm ou Hand n'est pas le premier enfant de LowerArm : vous pouvez rencontrer des problèmes avec les rotations de l'avant-bras.

Le système IK de VRChat regarde le premier enfant d'un os lors de la détermination de la disposition des os. Si vous avez d'autres os enfants, comme des os de placement d'accessoires ou des os de torsion dans votre rig, ils peuvent perturber l'IK. Dans ce cas particulier, le SDK constate que votre LowerArm n'est pas le premier enfant répertorié de votre UpperArm.\n\nPour résoudre ce problème, déplacez l'os enfant en première position dans la liste des enfants de l'os parent. **Vous devrez déballer votre prefab d'avatar pour cela.**\n\nNotez que ce message indique l'emplacement, pas le nom réel de l'os dans votre rig, vous devrez donc regarder pour voir quel os se trouve dans cet emplacement.
:::

:::caution LowerLeg n'est pas le premier enfant de UpperLeg ou Foot n'est pas le premier enfant de LowerLeg : vous pouvez rencontrer des problèmes avec les rotations tibiales.

Voir ci-dessus.
:::

### Hiérarchie générale

:::caution Cet avatar a une hiérarchie divisée (l'os Hips n'est pas l'ancêtre de tous les os humanoides). L'IK peut ne pas fonctionner correctement.

Certains rigs divisent la hiérarchie en deux sections, le haut et le bas du corps. Dans ce cas, l'os que vous placez dans l'emplacement Body > Hips doit être l'ancêtre (parent ou supérieur) du reste des os humains que vous mappez. Soyez très prudent avec ce genre de rigs ! Souvent, l'ancêtre de ces os est un os racine sur le sol ou un autre emplacement qui n'est pas adapté pour un os de hanche. Beaucoup de ces rigs ne conviennent pas à l'utilisation avec VRChat et doivent être re-riggés pour fonctionner correctement.
:::

### Tracking du Full-Body

Il y a des considérations spéciales si vous utilisez le Full-Body tracking, c'est-à-dire si vous avez 3 HTC Tracking Pucks connectés. Voici plusieurs recommandations qui garantiront le bon fonctionnement de votre avatar lors de l'utilisation du Full-Body tracking.

Pour voir plus d'informations détaillées sur les exigences de rigging pour le Full-Body tracking, consultez notre [guide du système de Full-Body tracking](https://docs.vrchat.com/docs/full-body-tracking).
:::caution L'angle entre le bassin et les os de la cuisse doit être proche de 180 degrés (l'angle de cet avatar est ___). Votre avatar peut ne pas fonctionner correctement avec l'IK et le tracking du Full-Body.

Le tracking du Full-Body est sensible à l'angle entre l'os de la hanche et l'os de la cuisse. Il est préférable de mesurer cet angle lorsque l'AvatarTPoseController est appliqué à votre avatar. Idéalement, l'os de la hanche pointe directement vers le haut et les os de la cuisse pointent directement vers le bas dans la TPose, mais une légère divergence est acceptable. Vous pouvez ignorer ce message si vous n'allez pas utiliser le Full-Body tracking.
:::

### Os des orteils
Il n'est pas nécessaire de mapper les os des orteils dans un avatar humanoid. Cependant, si vous LES mappez, votre avatar pourra monter et descendre sur la pointe des pieds. Le mappage des orteils rend également le placement automatique des pieds plus naturel et améliore l'apparence de l'équilibre en alignant la position automatique sur le début de l'os de l'orteil plutôt que sur le talon.