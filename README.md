MediTrip
===============

Build Tools
-----------

To setup:

* Execute `npm install -g grunt-cli`
* Install <a href="http://rubyinstaller.org/"> Ruby </a>
* Execute `gem update --system && gem install compass`
* Open a shell in this directory and execute `npm install` to install dependencies. 
* Thats All!

Disclaimer: Will take a while to install them all, but its worth it, makes life easier and faster !

###It will create a heavy `node_modules` folder, please add it to your .gitignore file

Build Commands:

* `grunt` run all unit tests
* `grunt build` compile scss,javascript and html partials to the www folder. To test simply run emulator. The files are also being watched for changes.

Suggest more and I will add them or go ahead yourself by editing Gruntfile.js

###Run the project

* Using the terminal, cd into the build directory 
* Follow the instructions in the README for that directory 
* Execute `npm start` to start the node server 

Go to <a href="http://localhost:8888/#/"> http://localhost:8888/#/ </a>