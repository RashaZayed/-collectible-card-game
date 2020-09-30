class Card {
  constructor(name, cost) {
    this.name = name;
    this.cost = cost;
  }
}
class Unit extends Card {
  constructor(name, cost, power, res) {
    super(name, cost);
    this.power = power;
    this.res = res;
  }
  attack(target) {
    if (target instanceof Unit) {
      target.res -= this.power;
    } else {
      throw new Error("Target must be a unit!");
    }
  }
}
const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);

class Effect extends Card {
  constructor(name, cost, text, stat, magnitude) {
    super(name, cost);
    this.text = text;
    this.stat = stat;
    this.magnitude = magnitude;
  }

  play(target) {
    if (target instanceof Unit) {
      if (this.stat.includes("resilience")) {
        target.resilience += this.magnitude;
      } else {
        target.resilience += this.power;
      }
    } else {
      throw new Error("Target must be a unit");
    }
  }
}

const hardAlogorithm = new Effect(
  "Hard Alogorithm",
  2,
  "increase targets resilience by 3",
  "resilience",
  3
);
const promiseRejection = new Effect(
  "unhandled Promise Rejection",
  1,
  "reduce targets resilience by 2",
  "resilience",
  -2
);
const pairProgramming = new Effect(
  "Pair Programming",
  3,
  "increase targets power by 2",
  "power",
  2
);
hardAlogorithm.play(redBeltNinja);
promiseRejection.play(redBeltNinja);
pairProgramming.play(redBeltNinja);
redBeltNinja.attack(blackBeltNinja);
