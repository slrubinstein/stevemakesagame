const Combat = {
  attack(attacker, defender) {
    var power = Math.max(attacker.strength - defender.defense, 1);

    defender.hp -= power;

    if (defender.hp <= 0) {
      defender.die();
    }

    defender.getHit();
  }
};

module.exports = Combat;


/**
 * some thoughts on combat
 * i like walking into monsters to hit them
 * maybe another button (gesture) for long range attacks
 * long range arrows have to be in the same row/column
 * magic maybe different
 * when enemies attack they need to turn to face player
 */