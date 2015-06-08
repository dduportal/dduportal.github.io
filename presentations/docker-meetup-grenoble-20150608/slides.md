title: swarm
name: inverse
layout: true
class: center, middle, inverse
---
# Docker Grenoble meetup 08 Juin 2015

---

# Access this presentation :

## Online version (HTML) :

[http://dduportal.github.io/presentations/docker-meetup-grenoble-20150608](http://dduportal.github.io/presentations/docker-meetup-grenoble-20150608)

Proudly powered by [RemarkJS](https://github.com/gnab/remark)

??

## Offline version (PDF) :

[http://dduportal.github.io/presentations/mixit-2015-devbox-docker/docker-meetup-grenoble-20150608.pdf](http://dduportal.github.io/presentations/mixit-2015-devbox-docker/docker-meetup-grenoble-20150608.pdf)

Proudly exported with [Deck2PDF](https://github.com/melix/deck2pdf)

---
layout:false

# Agenda :

1. 

---
template: inverse

# Introduction

---

layout: false
.left-column[
# Intro
  ## Qui sommes-nous ?
]
.right-column[
# Damien DUPORTAL

.center[![dduportal](pictures/dduportal.jpg)]

* DevOps Engineer @ Worldline

* Grimpeur
* Français émigré en Belgique
* Enseignant la HA et les SIGs (ENSG, EPSI)

* Contact :
  * Gmail : `damien.duportal@gmail.com`
  * Twitter : [@DamienDuportal](https://twitter.com/DamienDuportal)
  * Github : [dduportal](https://github.com/dduportal)


]

---



* Pourquoi Swarm ?
  - Docker habituel pour dev (schema boot2docker)
  - Production : Si le serveur plante / Si on effectue une maintenance programmee ?
* C'est quoi swarm ?
  - Docker == client + serveur (schema docker cli / serveur en N/N et 1/N) 
  - Approche Garder client, noeuds de docker engines
  - Manager /n oeuds ?
* Comment ?
  - Demarrer noeuds : quel discovery ?
  - Demarrer manager : config et MaJ ?


* Demo :
  * Phase 1 :
    - Schema MBA + PI
    - Demarrer PI, SSH, docker cli, docker run arm
    - Configuration Pi pour docker remote + registre + labels
    - Docker run remote depuis MBA pour rejouer
  * Phase 2 :
    - Manager en statique avec IP depuis b2d-MBA
    - Schema updated
    - Client depuis Mac OS qui lance des arm-nginx avec visu browser
  * Phase 3 :
    - Docker hub discovery pour disovery dynamique
    - schema upd
    - Agents, puis manager


