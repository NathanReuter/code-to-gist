'use strict';

module.exports = {
    parseText: function (text) {
        var parsedArray = [],
            textArray = text.split('\n'),
            codeBlockSpacesRegex = /^ {4}/,
            codeBlockTabRegex = /^\t/,
            block = '',
            maybeBlockStarted = false,
            i;

        for (i = 0; i < textArray.length; i += 1) {

            if (textArray[i].length === 0) {
                maybeBlockStarted = true;
            }

            if (maybeBlockStarted) {

                if (codeBlockTabRegex.test(textArray[i])) {
                    // For each line of text, verify if it starts with tab
                    block += textArray[i].substring(1) + '\n';
                } else if (codeBlockSpacesRegex.test(textArray[i])) {
                    // otherwise, check if it starts with 4 spaces
                    block += textArray[i].substring(4) + '\n';
                } else {
                    // If the text doesn't start with either tab or 4 spaces
                    // it is not a code block
                    if (block.length) {
                        parsedArray.push(block);
                        block = '';
                    } else {
                        maybeBlockStarted = false;
                    }
                }
            }
        }


        return parsedArray;
    }
};
