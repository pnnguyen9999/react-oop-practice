export interface IHero {
  name: string;
  health: number;
  strength: number;
}
class Hero {
  public name: string;
  public health: number;
  public strength: number;
  public isAlive: boolean;

  constructor(attr: IHero) {
    this.name = attr.name;
    this.health = attr.health;
    this.strength = attr.strength;
    this.isAlive = true;
  }

  info() {
    console.log(`Hero: ${this.name}, strength: ${this.strength}`);
  }

  attack(enemy: Hero) {
    enemy.health -= this.strength;
    if (enemy.health <= 0) {
      enemy.die();
    }
    console.log(enemy);
  }

  upgradeStrength() {
    this.strength += 10;
  }

  die() {
    this.isAlive = false;
  }
}

export default Hero;
