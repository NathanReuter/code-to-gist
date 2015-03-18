/*global describe: true, it: true*/

'use strict';

var codeToGist = require('../lib/codeToGist'),
    expect = require('chai').expect;

describe('Testing codeToGist', function () {

    it('should identify and capture all code blocks strings in a given a text and' +
            ' return them all as an array of strings', function (done) {
            var text = 'some text\n' +
                'some other text\n' +
                '\n' +
                '    if (this.isCode() === true) {\n' +
                '        this.someMoreCode();\n' +
                '    }\n' +
                'no more code\n',

                codeBlock = 'if (this.isCode() === true) {\n' +
                '    this.someMoreCode();\n' +
                '}\n',

                codeArray = codeToGist.parseText(text);

            expect(codeArray).to.be.instanceof(Array);
            expect(codeArray.length).to.equal(1);
            expect(codeArray[0]).to.equal(codeBlock);
            done();
        });


    it('should be able to capture multiple blocs', function (done) {
        var text = '## Getting Started\n' +
            'This plugin requires Grunt `~0.4.5`\n' +
            '\n' +
            'If you haven\'t used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started]' +
                '(http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile]' +
                '(http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you\'re ' +
                'familiar with that process, you may install this plugin with this command:\n' +
            '\n' +
            '    npm install grunt-contrib-jshint --save-dev\n' +
            '\n' +
            'Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of' +
                ' JavaScript:\n' +
            '\n' +
            '    grunt.loadNpmTasks(\'grunt-contrib-jshint\');\n' +
            '\n',

            codeArray = codeToGist.parseText(text);

        expect(codeArray.length).to.equal(2);
        expect(codeArray[0]).to.equal('npm install grunt-contrib-jshint --save-dev');
        expect(codeArray[1]).to.equal('grunt.loadNpmTasks(\'grunt-contrib-jshint\');');
        done();
    });

});
