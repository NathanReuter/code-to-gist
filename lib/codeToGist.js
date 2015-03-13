'use strict';

module.exports = {
    parseText: function (text) {
        var parsedArray = [],
            textArray = text.split('\n'),
            codeBlockSpacesRegex = /^ {4}/,
            codeBlockTabRegex = /^\t/;

        for (var i = 0; i < textArray.length; i += 1) {

            var block = '';

            //For each line of text, verify if it starts with tab
            if (codeBlockTabRegex.test(textArray[i])) {
                block += textArray[i] + '\n';
            }

            //otherwise, check if it starts with 4 spaces
            else if (codeBlockSpacesRegex.test(textArray[i])) {
                block += textArray[i] + '\n';
            }

            //If the text doesn't start with either tab or 4 spaces
            //it is not a code block
            else {
                if (block.length) {
                    parsedArray.push(block);
                    block = '';
                }
            }
        }


        return parsedArray;
    }
};
