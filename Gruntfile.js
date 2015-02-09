//config for express server

module.exports = function(grunt){

  grunt.initConfig({
   
    pkg:grunt.file.readJSON('package.json'),

    mocha_casperjs: {
      options: {}, 
      files: {
        src: ['test/**/*']
      }
    },

    express: {
     test: {
       options: {
         script: './server.js'
       }
     }
    },

    jshint:{
     files:['src/*']
    }
    
  });

  grunt.loadNpmTasks('grunt-mocha-casperjs');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', [ 'express:test', 'mocha_casperjs', 'jshint']);


};
