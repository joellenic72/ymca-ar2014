# YMCADC AR 2014
This Project uses [Gulp.js](http://gulpjs.com/) as the build system, [Bourbon](http://bourbon.io/) for the mixins, and [Neat](http://neat.bourbon.io/) for the grid. I’ve also utilized [snap.svg](http://snapsvg.io/) for the particle generator. Below are links to documentation of these libraries.

[Gulp.js Docs](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)
[Bourbon Docs](http://bourbon.io/docs/)
[Neat Docs](http://thoughtbot.github.io/neat-docs/latest/)
[Snap.svg Docs](http://snapsvg.io/docs/)




## Local Setup
If you’re working on my computer, its already been set up so all you have to do is open the terminal (or iTerm if you want to live a little) and type:

		$ ymca-ar
		$ gulp

The first command is an alias which will take you to __/Users/hyperion/Sites/YMCA/ar-2014__. The second command initiates gulp to start watching all files. I would recommend working on my computer if possible since everything is already set up.

## New Local setup
If you want work on a different computer, You will have to run a new local set up that will install all necessary dependencies and then run a server with BrowserSync. This Gulp file watches all SASS, JS, and images, then compiles and reloads the assets accordingly. *note you must have[Node](https://nodejs.org/) and [NPM](https://www.npmjs.com/) installed on your global local development environment before you can run this.
    
    $ npm install -g gulp
    $ cd blank-gulp
    $ npm install
    $ bundle install
    $ gulp


## Building
Building will remove all files from the 'dist' directory, compile and minify all SASS/CSS, concat and uglify all JS, minify all images, and process and copy all HTML. This will result with the entire site ready in the 'dist' directory upon completion.

    $ cd blank-gulp
    $ gulp build
