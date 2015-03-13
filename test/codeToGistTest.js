'use strict';

var codeToGist = require('../lib/codeToGist'),
    expect = require('chai').expect;

describe('Testing codeToGist', function () {

    it ('should identify and capture all code blocks strings in a given a text and return them all as an array of strings',
        function (done) {
            var text = '' +
                'some text\n'+
                'some other text\n' +
                '    if (this.isCode() === true) {\n' +
                '        this.someMoreCode();\n' +
                '    }\n' +
                'no more code\n',

                codeBlock = '' +
                'if (this.isCode() === true) {\n' +
                '    this.someMoreCode();\n' +
                '}\n';

            var codeArray = codeToGist.parseText(text);
            expect(codeArray).to.be.instanceof(Array);
            expect(codeArray.length).to.equal(1);
            expect(codeArray[0]).to.be.instanceof(String);
            expect(codeArray[0]).to.equal(codeBlock);
            done();
        });

});
