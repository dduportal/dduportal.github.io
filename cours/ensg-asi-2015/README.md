ENSG - Architecture des systèmes d'informations - 2015
------------------------------------------------------

If you want to edit the presentation, you must have :
* NodeJS installed (>= 0.8)
* Npm installed and in your PATH
* Access to the web (at least http / https)

Then, install gulp and bower globally (you may have to use sudo on *Nix systems) :
```
(sudo) npm install -g gulp bower
```

Install the dev and app dependencies :
```
cd src
npm install
bower install
```

You can then :

* Launch your presentation in "dev" mode (== local served with livereload) :
```
gulp
```

* Publish to dist folder your presentation :
```
gulp publish
```
