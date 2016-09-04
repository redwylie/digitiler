module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'src/main/resources/static/assets/styles/digitiler/css/digitiler.css' : 'src/main/resources/static/assets/styles/digitiler/scss/digitiler.scss'
        }
      }
    },
    sync: {
        main: {
            files: [{
              cwd: 'src/main/resources/static',
              src: [
                    '**'
                   ],
             dest: 'target/classes/static',
           },
           {
              cwd: 'src/main/resources/templates',
              src: [
                    '**'
                   ],
             dest: 'target/classes/templates',
           }],
           pretend: false,
           verbose: true, // Display log messages when copying files 
           updateAndDelete: true,
       }
    },
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass'],
        options: {
        livereload: true,
        }
      },
      styles: {
        files: ['src/main/resources/**/*'], // which files to watch
        tasks: ['sync'],
        options: {
          livereload: true,
          nospawn: true
        }
      }
    }
  });
  
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks('grunt-sync');
  grunt.registerTask('default', ['sass', 'watch']);
  grunt.registerTask('default', ['sync', 'watch']);
};