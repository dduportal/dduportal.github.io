title: swarm
name: inverse
layout: true
class: center, middle, inverse
---
# Docker swarm
### Docker Grenoble meetup - 08 Juin 2015

---

## Online version (HTML) :

[http://dduportal.github.io/presentations/docker-meetup-grenoble-20150608](http://dduportal.github.io/presentations/docker-meetup-grenoble-20150608)

Proudly powered by [RemarkJS](https://github.com/gnab/remark)

???

## Offline version (PDF) :

[http://dduportal.github.io/presentations/mixit-2015-devbox-docker/docker-meetup-grenoble-20150608.pdf](http://dduportal.github.io/presentations/mixit-2015-devbox-docker/docker-meetup-grenoble-20150608.pdf)

Proudly exported with [Deck2PDF](https://github.com/melix/deck2pdf)

---
layout:false

# Agenda :

1. Whoami
2. Pourquoi Swarm ?
3. Concepts de Swarm
4. Demo

---
template: inverse

# Whoami

---

layout: false
.left-column[
# Whoami
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
  * Github :
      * [dduportal](https://github.com/dduportal)
      * [mes Dockerfiles](https://github.com/dduportal-dockerfiles)

]

---

layout: false
.left-column[
# Whoami
]
.right-column[
# Manuel VACELET

.center[![vaceletm](pictures/vaceletm.jpg)]

* CTO & Co-founder @ Enalean / Tuleap

* Agile (Grenoble)
* Logiciels libres
* Montagnes

* Contact :
  * Email : `manuel.vacelet@enalean.com`
  * Twitter : [@vaceletm](https://twitter.com/vaceletm)
  * Github :
      * [vaceletm](https://github.com/vaceletm)

]


---
template: inverse

# Pourquoi Swarm ?

---

layout: false
.left-column[
# Whoami
# Pourquoi ?
]
.right-column[

# Docker "basique"

.center[![dduportal](pictures/docker4dev.png)]

]

---

layout: false
.left-column[
# Whoami
# Pourquoi ?
]
.right-column[

# Docker "remote" avec CLI

.center[![dduportal](pictures/dockerCli.png)]

]

---

layout: false
.left-column[
# Whoami
# Pourquoi ?
]
.right-column[

# Docker remote resilient ?

.center[![dduportal](pictures/dockerCli.png)]

]

---

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
