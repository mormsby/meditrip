App
===============

Build Tools
-----------

###This folder contains the build tools for the app.

To setup **Build Tools**:

* Execute `npm install -g grunt-cli`
* Install <a href="http://rubyinstaller.org/"> Ruby </a>
* Execute `gem update --system && gem install compass`
* Open a shell in this directory and execute `npm install` to install dependencies. 
* Thats All!

Disclaimer: Will take a while to install them all, but its worth it, makes life easier and faster !

###It will create a heavy `node_modules` folder, please add it to your .gitignore file

Build Commands:

* `grunt` run all unit tests
* `grunt build` compile scss,javascript and html partials to the www folder. To test simply run emulator.
* `grunt test` watch all javascript files for changes then run all unit tests

Suggest more and I will add them or go ahead yourself by editing Gruntfile.js