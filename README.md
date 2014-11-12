App
===============

###Setting up PhoneGap on Android Platform (for Windows):

Instuctions can also be found at:
<a href="http://docs.phonegap.com/en/2.2.0/guide_getting-started_android_index.md.html"> docs.phonegap.com </a>

Tools required:
<ol>
	<li> Android SDK </li>
	<li> PhoneGap </li>
	<li> Apache Ant </li>
	<li> <a href="http://nodejs.org/download/"> NPM </a> </li>
</ol>

Note: Ensure you have Java JDK environment install on your computer.

	1. First ensure that you have the JAVA JDK environment installed on your computer, if not download and install.
	   	http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html

	   Next install the Android SDK from this site along with Eclipse.
		http://developer.android.com/sdk/index.html

	   Once Eclipse has finished installing you can now install the ADT Plugin.
		Instructions can be found on this page: http://developer.android.com/sdk/installing/installing-adt.html

	2. Ensure that you have NPM installed on your computer. 
	   To install PhoneGap use the command:
	   	C:\> npm install -g phonegap

	3. Download Apache Ant and extract it. 
		http://ant.apache.org/

	4. Next you need to set up the environment variables:
		Click here if you need help : http://www.nczonline.net/blog/2012/04/12/how-to-install-apache-ant-on-windows/

###Steps to initialize project with PhoneGap

* In a separate directory create a new PhoneGap project: `phonegap create project-name`
* Copy the following directories that were created in ur new project into this project: .cordova, platforms and plugins 

###Run the project

* Using the terminal, cd into the build directory 
* Follow the instructions in the README for that directory 
* Execute `node www/server.js` to start the node server 
</ol>