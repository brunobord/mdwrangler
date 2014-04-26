module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            splitted: {
                files: {
                    'dist/build.min.js': ['src/build.js'],
                    'dist/marked.min.js': ['src/marked.js'],
                    'dist/zepto.min.js': ['src/zepto.js'],
                }
            },
            dist: {
                files: {
                    'static/js/mdwrangler.min.js': ['src/zepto.js', 'src/marked.js', 'src/build.js'],
                }
            }
        }
    });


    // Plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // tasks
    grunt.registerTask('default', ['uglify']);

};

