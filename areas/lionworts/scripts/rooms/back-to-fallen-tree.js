'use strict';

const { Broadcast } = require('ranvier');
const { sayAt } = require('ranvier/src/Broadcast');
const look = require('../../../../../bundle-commands/commands/look');

const sentHints = {};

module.exports = {
    listeners: {
        playerEnter: state => function (player) {
            let room = player.room.area.getRoomById(9);
            player.moveTo(room);
            setTimeout(function(){
                sayAt(player, `Suddenly things shift and you find yourself back at the fallen tree...`);
                look.lookRoom(state, player);
            },2000);
        }
    }
};
