module.exports = function(grunt) {
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

        //Less to css
      less: {
          development: {
              options: {
                  paths: ['src/styles'],
                  compress: false,
                  yuicompress: true,
                  optimization: 2
              },
              files: {
                  'dist/css/styles.css': 'src/styles/styles.less'
              }
          }
      }


  });

    //Load Tasks
    grunt.loadNpmTasks('grunt-contrib-less');

    //Register Tasks
    grunt.registerTask('default', ['less']);
};