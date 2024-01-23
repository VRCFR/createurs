---
title: "Système de synchronisation vidéo Udon"
---
![](/img/worlds/udon-video-sync-player-9000c94-udonsyncplayer-scene.png)

# Vue d'ensemble
Il y a deux choses principales que nous devons synchroniser pour que les gens puissent regarder des vidéos ensemble - l'URL de la vidéo à regarder, et le temps de lecture pour que les gens regardent les choses simultanément. Pour comprendre comment nous synchronisons ces deux éléments pour tout le monde, y compris les nouveaux arrivants, examinons un scénario qui utilise ce programme.

**Le déroulement pour quelqu'un qui entre une URL est :**
Devenir propriétaire de l'objet UdonSyncPlayer ▸ envoyer une nouvelle **_url_** ▸ Essayer de charger et de jouer l'URL ▸ Lorsque la vidéo commence, envoyer des informations de synchronisation ▸ Envoyer de nouvelles informations de synchronisation toutes les **_syncFrequency_** secondes

**Le déroulement pour tout le monde est :**
Recevoir la nouvelle valeur de **_url_** ▸ Essayer de charger et de jouer l'URL ▸ Recevoir les informations de synchronisation ▸ Sauter au temps synchronisé

# Quelqu'un charge une URL
Lorsque notre scène hypothétique se charge, disons qu'aucune vidéo n'est encore en cours de lecture et qu'il y a deux personnes dans la pièce. Quelqu'un colle une nouvelle URL dans le champ de saisie, ce qui déclenche l'événement **OnURLChanged** qui est câblé dans l'interface utilisateur.
![Lorsqu'une nouvelle URL est entrée, cette logique fonctionne pour envoyer la nouvelle URL à tout le monde.](/img/worlds/udon-video-sync-player-c08ee3f-url-change.png)
Il y a quelques appels 'IsValid' ici que nous utilisons juste pour nous assurer que nous n'essayons pas d'appeler des méthodes sur des objets qui ont été détruits ou mal configurés. Nous allons sauter la description de ceux-ci pour le reste de cet exemple pour simplifier les explications.

Le joueur local vient de mettre une nouvelle URL, donc nous le rendons propriétaire du programme pour qu'il puisse contrôler ses variables. Nous obtenons l'URL du champ InputField, puis appelons **SetProgramVariable** sur le symbole **_url_** avec cette nouvelle valeur. Cela fonctionne de la même manière que d'appeler **set url** avec "sendChange" activé, c'est juste une autre façon de le faire, pratique à savoir si vous voulez changer la variable sur un autre UdonBehaviour. Une fois que nous avons mis à jour cette variable, nous appelons **RequestSerialization** pour demander à Udon de mettre à jour la valeur de **_url_** pour tout le monde dans le monde.

# Les utilisateurs obtiennent la nouvelle URL
![Chaque fois que la variable synchronisée **_url_** change, essayez de la lire !](/img/worlds/udon-video-sync-player-572ee25-playurl.png)
Comme nous avons un événement de **Changement de variable** pour **_url_** dans notre graphique, cet événement sera déclenché chaque fois que l'URL est mise à jour, et il essaiera simplement de jouer l'URL.

# La vidéo commence
![](/img/worlds/udon-video-sync-player-8eb0c7f-onvideostart.png)

Cet événement est déclenché localement lorsque la vidéo commence réellement à être jouée. Nous appelons le même événement pour le propriétaire et pour tout le monde - la logique différente est gérée dans **UpdateTimeAndOffset**.

# Mise à jour du temps et du décalage
![](/img/worlds/udon-video-sync-player-3735c0c-update-time-and-offset.png)

Tout d'abord, cette logique vérifie si elle est exécutée sur le propriétaire de l'objet. Si ce n'est pas le cas, elle exécute l'événement **Resync** à la place. Si c'est le cas, alors nous voulons synchroniser à la fois _où_ dans la vidéo nous sommes, et _quand_ nous y étions. Nous devrions être au tout début de la vidéo puisque c'est la première fois que la logique est exécutée, mais en enregistrant ces deux valeurs, nous pouvons utiliser ceci pour des mises à jour de synchronisation futures également.

Nous voulons synchroniser deux nombres avec tout le monde, et ces deux nombres sont étroitement liés, donc nous les combinons en une seule variable Vector2 afin de les garder ensemble et de simplifier une partie de la logique de synchronisation. Nous construisons un Vector2 où 'x' est le temps actuel de la vidéo et 'y' est le temps du serveur observé par le propriétaire lorsqu'ils étaient à ce moment de la vidéo. Avec ces informations, tout le monde peut se régler sur un temps correspondant - voir [Resync](/worlds/examples/udon-example-scene/udon-video-sync-player#resync) ci-dessous.

Après avoir **demandé

 la sérialisation** de cette variable synchronisée, le propriétaire appelle **SendCustomEventDelayedSeconds** pour mettre à jour cette valeur à nouveau. Ils utilisent la variable **_syncFrequency_** pour déterminer combien de temps avant de mettre à jour la valeur. Pour une approche _très_ simple, cette variable peut être laissée à 0 si le propriétaire ne met jamais en pause, ne revient pas en arrière ou n'avance pas rapidement la vidéo, et tout le monde peut se synchroniser à partir de l'heure de début de la vidéo au lieu de mettre à jour **_timeAndOffset_** de temps en temps.

# Resync
![](/img/worlds/udon-video-sync-player-b63cdfd-resync.png)

Lorsque des non-propriétaires commencent à jouer la vidéo ou reçoivent une mise à jour de la variable **_timeAndOffset_**, ils peuvent utiliser les données pour savoir où sauter dans la vidéo.

Pour un exemple simple, disons que le propriétaire était à **0** au temps vidéo à **1000** au temps du serveur.
  * Les propriétaires définissent **_timeAndOffset_** à (0,1000).
  * Vous rejoignez 45 secondes plus tard et obtenez cette valeur. Votre propre temps de serveur est **1045**, vous sautez donc à **00:45** dans la vidéo en trouvant la différence dans le temps du serveur (45 secondes) et en ajoutant le temps de la vidéo (0 seconde).

# Améliorations et augmentations
![](/img/worlds/udon-video-sync-player-f43a120-udonsyncplayer-full-graph.png)

Nous avons gardé cet exemple assez simple pour qu'il soit compréhensible et améliorable. Il y a beaucoup de choses que vous pourriez faire pour l'améliorer et partager vos changements ! Voici quelques idées :

* Faire attendre les non-propriétaires pour jouer la vidéo jusqu'à ce qu'ils reçoivent des informations du propriétaire
* Détecter les URL de flux par rapport aux vidéos et désactiver la synchronisation
* Gérer les événements d'erreur vidéo avec des notes utiles pour les utilisateurs
* Autoriser uniquement certains joueurs à changer de vidéos
* Créer des listes de lecture vidéo
* Créer un système de mise en file d'attente vidéo