module.exports = function(grunt) {

  grunt.initConfig({

    clean: ['builds/'],

    compass: {
      dev: {
        options: {
          environment: 'development',
          outputStyle: 'expanded',
          sassDir: 'static/assets/scss',
          cssDir: 'static/assets/css'
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 8081,
          livereload: true,
          base: './'
        }
      }
    },

    watch: {
      options: {
        livereload: true,
      },
      scss: {
        files: ['static/**/*.scss', 'static/**/*.png'],
        tasks: ['compass:dev']
      },
      html: {
        files: ['index.html', 'static/**/*.html', 'static/**/*.hbs'],
        tasks: []
      },
      js: {
        files: ['static/**/*.js'],
        tasks: ['jshint']
      }
    },

    jshint: {
      options: {
        browser: true,
        globals: {
          requirejs: true,
          console: true
        }
      },
      all: ['Gruntfile.js', 'static/**/*.js', '!**/assets/**']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('run', 'runs all tasks', function() {
    var tasks = ['clean', 'jshint', 'compass:dev', 'connect', 'watch'];
    grunt.option('force', true);
    grunt.task.run(tasks);
  });

  grunt.registerTask('default', ['run']);
};
