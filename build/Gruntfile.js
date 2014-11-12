module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compass: {                  // Task
      dist: {                   // Target
        options: {              // Target options
          sassDir: '../src/scss',
          cssDir: '../www/lib',
          imagesDir: '../img',
          imagesPath: '../www/img',
          environment: 'development'
        }
      }
    },
    uglify: {
      options: {
        compress: false,
        beautify: true,
        mangle: false
      },
      dist: {
        files: {
          '../www/lib/script.js': ['../src/js/*.js','../src/js/**/*.js']
        }
      }
    },
    html2js: {
      options: {
        module: 'FSPartials',
        base: '../src/'    
      },
      main: {
        src: ['../src/partials/*.html','../src/partials/**/*.html'],
        dest: '../www/lib/partials.js'
      },
    },
    karma: {
      options: {
        files: [
          '../src/vendor/angular.min.js',
          '../src/vendor/**/*.js',
          '../src/js/**/*.js',
          '../test/**/*.js'
        ],
        frameworks: ['jasmine'],
        runnerPort: 9999,
        singleRun: true,
        browsers: ['PhantomJS'],
        reporters: ['dots']
      },
      live: {
        background: true,
        singleRun: false
      },
      unit: {

      }
    },
    watch: {
      karma: {
        files: ['../src/js/**/*.js','../test/**/*.js'],
        tasks: ['karma:live:run'] //NOTE the :run flag
      }
    }
  });

  // Load the plugins that provides the tasks.
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-html2js');

  // Default task(s).
  grunt.registerTask('default', ['karma:unit']);
  grunt.registerTask('build', ['uglify:dist','html2js','compass:dist']);
  grunt.registerTask('test', ['karma:live','watch']);

};