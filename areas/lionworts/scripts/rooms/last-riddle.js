'use strict';

const { Broadcast } = require('ranvier');
const { sayAt } = require('ranvier/src/Broadcast');
const look = require('../../../../../bundle-commands/commands/look');

const sentHints = {};

const OATH = `In the solemnest covenance With our brethren of the wood I pledge my wand in service\nTo the coven and the good.`;

// Function to compare strings ignoring non-letter characters
function compareLettersOnly(str1, str2) {
    // Extract only letters and convert to lowercase
    const letters1 = str1.replace(/[^a-zA-Z]/g, '').toLowerCase();
    const letters2 = str2.replace(/[^a-zA-Z]/g, '').toLowerCase();

    return letters1 === letters2;
}

module.exports = {
    listeners: {
        playerSay: state => function (player, message) {
            console.log(`player said: ${message}`);

            // Check if the player spoke the oath (ignoring punctuation, spaces, etc.)
            if (compareLettersOnly(message, OATH)) {
                let room = player.room.area.getRoomById(69);
                player.moveTo(room);
                setTimeout(function () {
                    look.lookRoom(state, player);
                }, 2000);
            }
        },
        playerEnter: state => function (player) {
            console.log(`player entered room: ${this.id}`);
        }
    }
};
