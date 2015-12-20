module.exports = function(grunt) {
  grunt.initConfig({
    clean: {
      js:   ['public/js'],
      html: ['public/**/*.html'],
      css:  ['public/css', '.sass-cache'],
      map:  ['**/*.map']
    },
    jshint: {
      files: ['public/js/*.js'],
      options: {
        esnext: true,
        globals: {
          jQuery: true
        }
      }
    },
    coffee: {
      compile: {
        options: {
          sourceMap: true,
          sourceMapDir: 'public/js'
        },
        expand:  true,
        flatten: true,
        cwd:     'src/coffee',
        src:     ['*.coffee'],
        dest:    'public/js',
        ext:     '.js'
      }
    },
    haml: {
      compile: {
        files: [
          { 
            expand: true,
            cwd:   'src/haml',
            src:   '**/*.haml',
            dest:  'public',
            ext :  '.html'
          }
        ]
      }
    },
    sass: {
      dist: {
        files: [
          {
            expand: true,
            cwd: 'src/styles',
            src: ['**/*.scss'],
            dest: 'public/css',
            ext: '.css'
          }
        ]
      }
    },
    watch: {
      coffee: {
        files: ['src/coffee/**/*.coffee'],
        tasks: ['coffee']
      },
      haml: {
        files: ['src/haml/**/*.haml'],
        tasks: ['haml']
      },
      sass: {
        files: ['src/styles/**/*.scss'],
        tasks: ['sass']
      },
      scripts: {
        files: ['public/js/**/*.js', 'Gruntfile.js'],
        tasks: ['jshint']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-haml2html');

  grunt.registerTask('default', ['coffee', 'jshint', 'haml', 'sass']);
};
