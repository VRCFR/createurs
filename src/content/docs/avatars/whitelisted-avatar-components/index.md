---
title: "Composants d'Avatar Autorisés"
description: "Utilisation des paramètres d'animateur sur Unity"
sidebar:
    badge: 
        text: Nouveau
        variant: tip
---

Voici une liste des composants autorisés sur les avatars. Tout composant qui ne figure pas sur cette liste sera supprimé au moment de l'exécution et peut empêcher le téléchargement.

Les scripts/composants personnalisés ne sont pas autorisés sur les avatars et seront supprimés lors du téléchargement et de l'exécution.
:::note[Oculus Quest]

La version Quest de VRChat a quelques exceptions à cette liste. Consultez [ici](/platforms/android/quest-content-limitations#components) pour plus d'informations.
:::

## VRChat

- VRCAvatarDescriptor
- [VRCPipelineManager](/sdk/vrcpipelinemanager/)
- [*VRC_IKFollower*](https://docs.vrchat.com/docs/vrc_ikfollower) - Obsolète ! Vous devriez utiliser des Contraintes à la place.
- [VRCContactReceiver](/avatars/avatar-dynamics/contacts#vrccontactreceiver)
- [VRCContactSender](/avatars/avatar-dynamics/contacts#vrccontactsender)
- [VRCPhysBoneCollider](/avatars/avatar-dynamics/physbones#vrcphysbonecollider)
- [VRCPhysBone](/avatars/avatar-dynamics/physbones#vrcphysbone)
- [VRCHeadChop](/avatars/whitelisted-avatar-components/vrc_headchop)
- [VRCSpatialAudioSource](/worlds/components/vrc_spatialaudiosource#spatial-audio-on-avatars)
- [VRCStation](/worlds/components/vrc_station)

## Unity

- [AimConstraint](https://docs.unity3d.com/2022.3/Documentation/Manual/class-AimConstraint.html)
- [Animation](https://docs.unity3d.com/2022.3/Documentation/Manual/class-Animation.html)
- [Animator](https://docs.unity3d.com/2022.3/Documentation/Manual/class-Animator.html)
- [AudioSource](https://docs.unity3d.com/2022.3/Documentation/Manual/class-AudioSource.html)
- [Camera](https://docs.unity3d.com/2022.3/Documentation/Manual/class-Camera.html)
  - Pour les avatars portés par l'utilisateur local, les composants Camera sont entièrement autorisés.
  - Pour les avatars portés par des utilisateurs distants, les règles suivantes s'appliquent :
    - Dans tous les cas, les composants Camera des utilisateurs distants sont désactivés lorsque l'avatar est chargé.
      - Vous pouvez utiliser des animations pour activer les composants Camera.
    - Si l'utilisateur local et l'utilisateur distant sont amis, les composants Camera ne sont pas supprimés.
      - Notez que devenir ami avec un utilisateur ne recharge pas automatiquement son avatar.
    - Si l'utilisateur local a sélectionné "Afficher l'avatar" pour l'utilisateur distant dans le menu rapide de VRChat, les composants Camera ne sont pas supprimés.
    - Si aucune des conditions ci-dessus n'est remplie, les composants Camera sont supprimés et ne peuvent pas être activés.
- [Cloth](https://docs.unity3d.com/2022.3/Documentation/Manual/class-Cloth.html)
- [Collider](https://docs.unity3d.com/2022.3/Documentation/Manual/CollidersOverview.html)
- [FlareLayer](https://docs.unity3d.com/2022.3/Documentation/Manual/class-FlareLayer.html)
- [Joints](https://docs.unity3d.com/2022.3/Documentation/Manual/Joints.html)
- [Light](https://docs.unity3d.com/2022.3/Documentation/Manual/class-Light.html)
- [LineRenderer](https://docs.unity3d.com/2022.3/Documentation/Manual/class-LineRenderer.html)
- [LookAtConstraint](https://docs.unity3d.com/2022.3/Documentation/Manual/class-LookAtConstraint.html)
- [MeshFilter](https://docs.unity3d.com/2022.3/Documentation/Manual/class-MeshFilter.html)
- [MeshRenderer](https://docs.unity3d.com/2022.3/Documentation/Manual/class-MeshRenderer.html)
- [ParentConstraint](https://docs.unity3d.com/2022.3/Documentation/Manual/class-ParentConstraint.html)
- [ParticleSystemRenderer](https://docs.unity3d.com/2022.3/Documentation/Manual/PartSysRendererModule.html)
- [ParticleSystem](https://docs.unity3d.com/2022.3/Documentation/Manual/class-ParticleSystem.html)
- [PositionConstraint](https://docs.unity3d.com/2022.3/Documentation/Manual/class-PositionConstraint.html)
- [Rigidbody](https://docs.unity3d.com/2022.3/Documentation/Manual/class-Rigidbody.html)
- [RotationConstraint](https://docs.unity3d.com/2022.3/Documentation/Manual/class-RotationConstraint.html)
- [ScaleConstraint](https://docs.unity3d.com/2022.3/Documentation/Manual/class-ScaleConstraint.html)
- [SkinnedMeshRenderer](https://docs.unity3d.com/2022.3/Documentation/Manual/class-SkinnedMeshRenderer.html)
- [TrailRenderer](https://docs.unity3d.com/2022.3/Documentation/Manual/class-TrailRenderer.html)
- [Transform](https://docs.unity3d.com/2022.3/Documentation/Manual/class-Transform.html)

## [Root Motion (FinalIK)](http://www.root-motion.com/finalikdox/html/index.html)
:::note[Composants FinalIK modifiés]

VRChat a grandement modifié son implémentation de FinalIK. En conséquence, ces composants peuvent ne pas fonctionner comme documenté.

Nous ne prenons pas en charge directement ou ne testons pas les implémentations personnalisées de FinalIK sur les avatars. Cependant, elles devraient fonctionner correctement, et si nous devons intentionnellement en désactiver un ou plusieurs, nous ferons de notre mieux pour informer les créateurs.

Si vous découvrez un bogue, veuillez nous en informer [ici](https://feedback.vrchat.com).
:::
- [Aim IK](http://www.root-motion.com/finalikdox/html/page1.html)
- [Biped IK](http://www.root-motion.com/finalikdox/html/page4.html)
- [CCDIK](http://www.root-motion.com/finalikdox/html/page5.html)
- [FABRIK](http://www.root-motion.com/finalikdox/html/page6.html)
- [Full Body Biped IK](http://www.root-motion.com/finalikdox/html/page8.html)
- [Grounder](http://www.root-motion.com/finalikdox/html/page9.html)
- [Limb IK](http://www.root-motion.com/finalikdox/html/page12.html)
- [Rotation Limits](http://www.root-motion.com/finalikdox/html/page14.html)
- Shoulder Rotator
- Twist Relaxer
- [VRIK](http://www.root-motion.com/finalikdox/html/page16.html)

 Utiliser ce script sur un avatar humanoïde le cassera.

## [DynamicBone](https://assetstore.unity.com/packages/tools/animation/dynamic-bone-16743)
:::danger[Dynamic Bone Obsolète]

Le support de Dynamic Bone est obsolète. Vous devriez utiliser [PhysBones](/avatars/avatar-dynamics/physbones) à la place.
  
:::

- DynamicBone
- DynamicBoneCollider
