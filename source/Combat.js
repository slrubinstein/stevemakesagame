const Combat = {
  attack(attacker, defender) {
    var power = Math.max(attacker.strength - defender.defense, 1);

    defender.hp -= power;

    if (defender.hp <= 0) {
      defender.die();
    }
  }
};

module.exports = Combat;
