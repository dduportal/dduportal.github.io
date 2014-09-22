---
layout: post
title:  "Why boot2docker inside vagrant ?"
date:   2014-09-22 21:01:16
categories: jekyll update
---

As an enthusiatic [Docker][docker] user, i abusively use [Boot2Docker][boot2docker] for quick launch of Docker container.

What is boot2docker ? Well, as said on the boot2docker's homepage :
{% highlight %}
boot2docker is a lightweight Linux distribution based on Tiny Core Linux made specifically to run Docker containers.
It runs completely from RAM, weighs ~27MB and boots in ~5s
{% endhighlight %}

One of the main problem today with boot2docker is the filesystem sharing function.

[docker]:      http://docker.com
[boot2docker]:   http://boot2docker.io
