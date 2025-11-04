'use strict';

const { Random } = require('rando-js');

const { Broadcast, Heal } = require('ranvier');


module.exports = {
    listeners: {
        use: state => function (player, args) {

            const random_index = Random.inRange(1, 100);
            if (random_index <= 20) {
                let players = Array.from(player.room.players);

                let random_player_index = Random.inRange(0, players.length - 1);
                let target_player = players[random_player_index];

                if (target_player.account.username === player.account.username) {
                    Broadcast.sayAt(player, "You feel a strange tingling sensation run through your body as the wand's magic surges and transports you to a different location.");
                } else {
                    Broadcast.sayAt(player, `You point the wand at ${target_player.account.username} and wave it. A sudden burst of magical energy envelops them! and they disappear.`);
                }
                let current_room = target_player.room;
                let fallen_tree = current_room.area.getRoomById(9);
                current_room.removePlayer(target_player);
                target_player.room = fallen_tree;
                fallen_tree.addPlayer(target_player);
            } else if (random_index <= 60) {
                Broadcast.sayAt(player, "You wave the wand, but nothing happens. Maybe you need more practice?");
            } else {
                const spellIndex = Random.inRange(0, spells.length - 1);
                const spellEffect = spells[spellIndex];
                Broadcast.sayAt(player, spellEffect);
            }

        }
    }
};


const spells = [
    "Being completely untrained in the use of magickal wands, you accidentally cast a <i>Blazify</i> spell and unleash a blizzard of crackling silver flames around your paws and face! Well done, you've singed off your fur and whiskers. Please be more careful next time!",
    "You accidentally cast a <i>Skunkify</i> spell, drenching yourself from head to paw in skunk juice. Your fur remain repulsively pungent for the next six turns!",
    `You accidentally cast a rudimentary <i>Serpify</i> spell, turning your tail into a living snake! You let out a terrified yelp, only to discover your new serpent companion is content merely to sing <i>"La prise de la Basilisk"</i> loudly and off-key. You have a singing French snake for a tail for the next five turns!`,
    "You accidentally cast a rather advanced <i>Allergify</i> spell, causing you to sneeze uncontrollably and very loudly. To your astonishment, each sneeze sprays a noseful of colored confetti into the air. It takes several minutes to clear your sinuses of paper before you can continue on your way.",
    "Being completely untrained in the use of magickal wands, you feel the device tremble and shake in your paw. Suddenly, a giant soap bubble emerges from the end of the wand, floats up into the air, and bursts, spraying soap droplets onto the ground below. This effect seems harmless enough, until you begin to hear ominous orchestral music approaching from far away. Suddenly, you see a column of mops and buckets marching toward you, apparently intent on washing you and everything around you within an inch of your life. Run!",
    "You accidentally cast a rudimentary <i>Levitato</i> spell upon yourself, lifting you a short paw's length off the ground. You attempt to swim forward by waving your limbs, but it is of no use. You'll just have to hang out here until the effects wear off and hope a stiff breeze doesn't push you off course in the meantime. I have to tell you, Cub, you kind of look ridiculous.",
    `The wand shimmers with light and suddenly projects a silver summoning circle upon the ground, glowing runes outlining the sacred liminal space inside. You watch in amazement as a form begins to take shape inside the circle in front of you... it takes a few moments for you to realize you are sitting face to face with a large grey sloth.",

“Hey,” it says, slowly, its heavy-lidded eyes blinking at you.

“Hi there,” you reply, eager to engage with this magical creature.

“I just had…” the sloth says, slowly, drawing out each syllable in deliberate precision, “the craziest dream.”

You lean in with great curiosity.

“Please go on,” you say. What mystery will this magickal sloth reveal?

“So I was in this sandwich shop with Jerry and Steve? From East Wood? Like, why were they there, you know? I haven't seen them in probably a month, or more, but I guess I'd been thinking about them and our game night, and how we need to get that started up again. So anyway, we were in line, and the sandwich guy is taking this order from the guy in front of us, it was for a pickle and parsnip sandwich on wheat. And he's like, ‘No, I'm sorry, we don't have wheat bread.’ And this guy in front of us is like, ‘What do you mean you don't have wheat bread, it's a sandwich shop, you have to have wheat bread,’ and the sandwich guy is all, ‘that’s what I'm telling you, we don't have any wheat bread, the delivery guy hasn’t come by yet today, but he should be here soon if you want to wait,’ and the guy in front of us is like ‘okay, then can I have it on white bread?’ and the sandwich shop guy is like, ‘yeah we have a lot of white bread, we're just temporarily out of the wheat bread that you ordered,’ so the guy in front of us is like ‘okay, then I'll get it on white bread,’ and the sandwich shop guy is all, ‘Yeah okay, that makes sense, let’s do that,’ and then I'm thinking, in the dream, I mean, I'm thinking, <i>okay, well, I wanted wheat bread because whole grains are good for the gut biome, but if they only have white bread, then I guess I have to order that, even though it's not really what I had originally wanted.</i> Oh wait, I forgot to mention the earlier part...”

Cubling, you have accidentally cast an incredibly powerful <i>Borify</i> spell upon yourself, and you must now suffer the consequences. You fight to stay awake for over forty-five minutes of listening to a sloth tell you about a dream it had in which it ordered a sandwich with its friends Jerry and Steve. This is perhaps the most achingly boring and insufferable animal you have ever met.

You wonder if you could just eat the sloth and put it out of both of your miseries, but this is your fault, not his. You must suffer through it.

The sloth is still talking when it begins to fade and the spell dissolves.`,

    "You accidentally cast a decent <i>Plumage Magnificat</i> spell, causing you to erupt an enormous and dazzling peacock feather fan from your backside. You look fabulous, but the feathers refuse to fold down for another four turns.",
    "Being unschooled in magick wand usage, you accidentally cast a <i>Transmogrifur</i> spell, turning your coat into a pattern of colorful diamond-shaped patches. You look like a character on a playing card. If your littermates could see you now, they would never let you live this down.",
    "You accidentally cast a powerful <i>Tie-of-the-Tongue</i> spell. You are literally tongue-tied into a sailor's knot inside your mouth. You sound ridiculous for the next seven turns!"
];