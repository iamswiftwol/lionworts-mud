'use strict';

const { Random } = require('rando-js');

const { Broadcast, Heal } = require('ranvier');

const ROSES = ['White Rose', 'Red Rose', 'Black Rose'];


module.exports = {
    listeners: {
        use: state => function (player, args) {
            let has_all_three = true;
            for (const rose of ROSES) {
                let has_rose = false;
                for (const item of player.inventory) {
                    console.log(item[1].name)
                    if (rose == item[1].name) {
                        has_rose = true;
                    }
                }
                if (!has_rose) {
                    has_all_three = false;
                }
            }

            if (player.room.id != 55) {
                console.log(player.room.id);
                Broadcast.sayAt(player, "You can't use that here.");
                return;
            }


            if (!has_all_three) {
                Broadcast.sayAt(player, "Nothing happens... perhaps if you had all three roses?");
                return;
            }

            Broadcast.sayAt(player, `Guided by either foresight or whimsy, you place the roses between the teeth of the grinning fox. You moment you do, you hear the clacking of wind chimes far off in the woods.

Suddenly you catch sight of a sparkling light below you. At the bottom of the placard, beneath the poem, there now shines a new line of words in swirling cursive and radiant silver ink: <i>"...With our brethren of the wood..."</i>

The glen is silent and still but for the falling of the rain on thorns. You now see the small opening of a tunnel in the thorn wall that you’re certain did not exist before.`);
            let room = player.room;
            let destinationRoom = room.area.getRoomById(39);

            room.unlockDoor(destinationRoom);
            room.openDoor(destinationRoom);

        }
    }
};

