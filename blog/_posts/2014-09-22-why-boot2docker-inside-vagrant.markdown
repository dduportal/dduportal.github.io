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
 







The documentation says that Docker dameon running inside b2d is listening on 2 sockets :

* A Unix socket located in /var/run/docker.sock (this is the default), which is a file acting like a pipe, used a communication lonk beetween docker client and the docker daemon.
* A TCP socket listening on all the VM IPs (0.0.0.0), on the [registered Docker IANA port 2375][iana-docker]

A quick look at the VM processes (when you'll have ssh-ed inside the VM, see beelow) will confirm this configuration :
{% highlight bash %}
docker@boot2docker:~$ ps aux | grep 'docker -d' | grep -v grep
  846 root     /usr/local/bin/docker -d -D -g /var/lib/docker -H unix:// -H tcp://0.0.0.0:2375
{% endhighlight %}




Windows : poor fools
--------------------


One of the main problem today with boot2docker is the filesystem sharing function.

[docker]:      http://docker.com
[boot2docker]:   http://boot2docker.io
[boot2docker-cli]: https://github.com/boot2docker/boot2docker-cli
[iana-docker]: http://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml?search=docker