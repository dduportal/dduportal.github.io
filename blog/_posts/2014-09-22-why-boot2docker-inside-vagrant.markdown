---
layout: post
title:  "Why boot2docker inside vagrant ?"
date:   2014-09-22 21:01:16
categories: jekyll update
---

Docker & Boot2Docker
--------------------

As an enthusiatic [Docker][docker] user, i abusively use [Boot2Docker][boot2docker] for quick boostraping Docker containers.

What is boot2docker ? Well, as said on the boot2docker's homepage :
{% highlight text %}
boot2docker is a lightweight Linux distribution based on Tiny Core Linux 
made specifically to run Docker containers. It runs completely from RAM, 
weighs ~27MB and boots in ~5s.
{% endhighlight %}

boot2docker is provided as an ISO file you can boot from anywhere (VM, baremetal, etc.). 
There is also a [command line][boot2docker-cli], you can install on Mac OS / Windows / Linux.
In this cas, you are using VirtualBox as hypervisor for running a VM, the boot2docker-cli will ensure the VM is created, well-configured in vbox.
Why VirtualBox ? That's easy :

* Free : it's not VMWare :)
* Portable : works on Mac, Windows and Linux

Once your VM has started to run, the CLI will create a persistent layer (yeah, remenber : b2d is load in RAM at boot). This ensure your docker containers and docker images will exists across reboots.

The "transparent hypervisor"
----------------------------

{% highlight bash %}
boot2docker up
Waiting for VM and Docker daemon to start...
.........................
Started.

To connect the Docker client to the Docker daemon, please set:
    export DOCKER_HOST=tcp://192.168.59.103:2375

{% endhighlight %}

OK, now you have a virtualbox VM running with boot2docker inside, how to use it ?

As the console told you after the b2d boot, you have to use a Docker client and configure it to tell to the docker daemon running inside the VM :
{% highlight bash %}
$ export DOCKER_HOST=tcp://192.168.59.103:2375
$ uname -a
Darwin hackinthdedadou.bouyguesbox.fr 13.3.0 Darwin Kernel Version 13.3.0: Tue Jun  3 21:27:35 PDT 2014; root:xnu-2422.110.17~1/RELEASE_X86_64 x86_64
$ docker run busybox:latest uname -a
Linux 3d4f76f8cd6f 3.16.1-tinycore64 #1 SMP Fri Aug 22 06:40:10 UTC 2014 x86_64 GNU/Linux
{% endhighlight %}

What have you done ? 

We're on Mac OS X (Darwin 64), which don't have Linux kernel with LXC or libcontainer capabilities).
Well you've just launch a remote container INSIDE the boot2docker VM :

<p align="center">
  <img src="/assets/transparent_hypervisor.png" alt="transparent_hypervisor"/>
</p>

The idea behind that is that you run Docker where it can be run, using a local colient the manage it. This is the same as a browser querying a remote webserver, except that you're running containers.


It aims at achieving the portability concern of Docker.

They named it the __"transparent hypervisor"__ : You haven't configured anything except the location of the remote Docker, and you can run Docker easily, __focusing on what's inside__.


Docker on Windows : poor fools !
--------------------------------
<p align="center">
  <img src="/assets/fly_fools.gif" alt="fly fools"/>
</p>

In fact we got 3 use cases :

* Direct run (on Linux) : docker client and dameon are in the same host, communication is thru a local unix socket (a file, generally /var/run/docker.sock).
* Transparent hypervisor (on mac OS or Linux) : the docker client is ran by the local computer, Docker daemon is running remotly, communication is thru TCP socket (or remotely shared unix socket).
* And you, poor fool, running your MS laptop because your company does not allow you to run *Nix. The only solution is to access the VM and to be in the 1st case :
{% highlight bash %}boot2docker ssh{% endhighlight %}

So, give a try a basic workflow of a nice github project with Docker stuff inside, on Windows :

* Hey buddy, let's try this new git project, with my windows cmd line :
{% highlight bat %}
C:\workspace> git clone https://github.com/awesome_user/awesomeProject
Cloning into 'awesomeProject'...
remote: Counting objects: 42, done.
remote: Compressing objects: 100% (42/42), done.
remote: Total 42 (delta 42), reused 42 (delta 42)
Receiving objects: 100% (42/42), 42.00 KiB | 42.00 KiB/s, done.
Resolving deltas: 100% (42/42), done.
Checking connectivity... done.
C:\workspace>cd awesomeProject
C:\workspace\awesomeProject>dir
...
Dockerfile
script.sh
...
{% endhighlight %}
* We got a Dockerfile over there ! Ain't nobody got time to install Linux : let's run my boo2docker :
{% highlight bat %}
C:\workspace\awesomeProject>boot2docker run
...
C:\workspace\awesomeProject>boot2docker ssh
[A nice whale ASCII art]
docker@boot2docker$ 
{% endhighlight %}





[docker]:      http://docker.com
[boot2docker]:   http://boot2docker.io
[boot2docker-cli]: https://github.com/boot2docker/boot2docker-cli
[iana-docker]: http://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml?search=docker