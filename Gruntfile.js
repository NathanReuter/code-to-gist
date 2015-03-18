'use strict';

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-jscs');

    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: true,
                ignores: ['node_modules/**/*']
            },
            all: ['./**/*.js']
        },

        jscs: {
            src: [
                'lib/**/*.js',
                'test/**/*.js',
                'Gruntfile.js'
            ],
            options: {
                config: '.jscsrc'
            }
        },

        mochaTest: {
            test: {
                options: {
                    reporter: 'spec'
                }
            },
            src: ['test/**/*Test.js']
        }
    });

    grunt.registerTask('test', ['jshint', 'mochaTest']);

};
