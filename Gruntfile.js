module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            dist: {
                files: {
                    'js/script.min.js': 'js/script.js'
                }
            }
        },

        compass: {
            dist: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'css'
                }
            }
        },

        watch: {
            html: {
                files: [
                    'index.html'
                ],
                options: {
                    livereload: true
                }
            },
            css: {
                files: ['sass/style.sass', 'sass/**/*.sass'],
                tasks: ['compass'],
                options: {
                    livereload: true
                }
            },
            js: {
                files: [
                    'js/script.js'
                ],
                tasks: ['uglify'],
                options: {
                    livereload: true
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');

    grunt.registerTask('default', ['compass', 'uglify', 'watch']);

};