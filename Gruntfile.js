module.exports = function(grunt) {

  grunt.initConfig({
    sass: {                              
        dist: {                           
          options: {                      
            style: 'compressed'
          },
          files: {                         
            'main.min.css': 'main.scss'
          }
        }
    },    
    uglify: {
      dist: {
        options: {
          sourceMap: true,
          sourceMapName: 'main.min.map'
        },
        files: {
          'main.min.js':['main.js']
        }
      }
    },
    watch: {
      files: ['*.scss', 'main.js'],
      tasks: ['sass', 'uglify']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass', 'uglify', 'watch']);

};