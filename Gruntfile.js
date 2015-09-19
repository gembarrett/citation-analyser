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
    watch: {
      files: ['main.scss'],
      tasks: ['sass']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass', 'watch']);

};