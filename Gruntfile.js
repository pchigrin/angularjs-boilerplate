'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        project: {
            app: ['app'],
            css: ['<%= project.app %>/css'],
            sass: ['<%= project.app %>/sass']
        },

        sass: {
            dev: {
                options: {
                    style: 'expanded',
                    compass: false
                },
                files: {
                    '<%= project.css %>/style.css':'<%= project.sass %>/style.scss'
                }
            }
        },

        watch: {
            sass: {
                files: '<%= project.sass %>/{,*/}*.{scss,sass}',
                tasks: ['sass:dev']
            }
        }
    });
	
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', [
        'watch'
    ]);

};