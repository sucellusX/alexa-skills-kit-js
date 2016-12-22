/**
    Copyright 2016-2017 Brett Harris. All Rights Reserved. Based of of Amazon Alexa skill samples

    Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

        http://aws.amazon.com/apache2.0/

    or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

'use strict';
var textHelper = (function () {
    var nameBlacklist = {
        player: 1,
        players: 1
    };

    return {
        completeHelp: 'Here\'s some things you can say,'
        + ' add john.'
        + ' give john 5 drinks.'
        + ' get my b.a.c. .'
        + ' new session.'
        + ' reset.'
        + ' and exit.'
        + ' For use only by people of legal drinking age. Always drink responsibly. This Alexa skill provides an estimation of your blood alcohol, but your experience may vary by a wide number due to many factors. ',
        nextHelp: 'You can give a player drinks, add a player, get the current b.a. seas, or say help. What would you like?',

        getPlayerName: function (recognizedPlayerName) {
            if (!recognizedPlayerName) {
                return undefined;
            }
            var split = recognizedPlayerName.indexOf(' '), newName;

            if (split < 0) {
                newName = recognizedPlayerName;
            } else {
                //the name should only contain a first name, so ignore the second part if any
                newName = recognizedPlayerName.substring(0, split);
            }
            if (nameBlacklist[newName]) {
                //if the name is on our blacklist, it must be mis-recognition
                return undefined;
            }
            return newName;
        }
    };
})();
module.exports = textHelper;
