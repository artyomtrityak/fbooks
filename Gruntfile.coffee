module.exports = (grunt) ->

  grunt.initConfig

    clean: ['static/']

    coffee:
      options:
        bare: true
      dev:
        options:
          sourceMap: true
        files: [
          expand: true
          cwd: 'static-dev/'
          src: ['**/*.coffee']
          dest: 'static/'
          ext: '.js'
        ]

    coffeelint:
      app: ['static-dev/**/*.coffee','!**/js/**']

    compass:
      dev:
        options:
          environment: 'development'
          outputStyle: 'expanded'
          sassDir: 'static-dev/assets/scss'
          cssDir: 'static-dev/assets/css'

    connect:
      server:
        options:
          port: 8080
          livereload: on
          base: './'

    copy:
      main:
        files: [
          expand: true
          cwd: 'static-dev/'
          src: [
            '**/*.css'
            '**/*.hbs'
            '**/*.js'
            '**/*.png'
            '**/*.gif'
            '**/*.jpg'
            '**/*.ttf'
            '**/*.woff'
            '**/*.eot'
            '**/*.svg'
            'assets'
            'app/properties.json'
          ]
          dest: 'static/'
        ]

    watch:
      options:
        livereload: on
      scss:
        files: ['static-dev/**/*.scss', 'static-dev/**/*.png']
        tasks: ['compass:dev', 'copy']
      html:
        files: ['index.html', 'static-dev/**/*.html', 'static-dev/**/*.hbs']
        tasks: ['copy']
      js:
        files: ['static-dev/**/*.coffee', 'static-dev/**/*.js']
        tasks: ['coffee', 'coffeelint']
      json:
        files: ['static-dev/app/properties.json']
        tasks: ['copy']

    

  grunt.loadNpmTasks 'grunt-coffeelint'
  grunt.loadNpmTasks 'grunt-contrib-clean'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-compass'
  grunt.loadNpmTasks 'grunt-contrib-connect'
  grunt.loadNpmTasks 'grunt-contrib-copy'
  grunt.loadNpmTasks 'grunt-contrib-requirejs'
  grunt.loadNpmTasks 'grunt-contrib-watch'

  grunt.registerTask 'run', 'runs all tasks', ->
    tasks = ['clean', 'coffeelint', 'coffee:dev', 'compass:dev', 'copy', 'connect', 'watch']
    grunt.option 'force', true
    grunt.task.run tasks

  grunt.registerTask 'default', ['run']
