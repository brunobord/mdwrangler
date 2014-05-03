module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            splitted: {
                files: {
                    'dist/build.min.js': ['src/build.js'],
                    'dist/marked.min.js': ['src/marked.js'],
                    'dist/140medley.min.js': ['src/140medley.js'],
                }
            },
            dist: {
                files: {
                    'static/js/mdwrangler.min.js': ['src/140medley.js', 'src/marked.js', 'src/build.js'],
                }
            }
        },

        connect: {
            testserver: {
                options: {
                    port: 8000,
                }
            }
        },

        casperjs: {
            options: {
                async: {
                    parallel: false
                }
            },
            files: ['tests/casperjs/**/*.js']
        }

    });


    // Plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-casperjs');
    // tasks
    grunt.registerTask('default', ['uglify']);
    grunt.registerTask('test', ['connect:testserver', 'casperjs']);

};
