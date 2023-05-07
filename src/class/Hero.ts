import _ from "lodash";

export interface IHero {
  name: string;
  health: number;
  strength: number;
  element: ElementType;
  negativeElement?: ElementType[];
}

export enum ElementType {
  Fire = "fire",
  Water = "water",
  Thunder = "thunder",
}

export enum ElementEffectStatus {
  NONE = "",
  OVERLOAD = "overload",
  STEAM = "steam",
  ELECTRIC_SHOCK = "electric_shock",
}

class Hero {
  public name: string;
  public health: number;
  public strength: number;
  public isAlive: boolean;
  public element: ElementType;
  public negativeElement: ElementType[];
  public currentStatus!: ElementEffectStatus;

  constructor(attr: IHero) {
    this.name = attr.name;
    this.health = attr.health;
    this.strength = attr.strength;
    this.isAlive = true;
    this.element = attr.element;
    this.negativeElement = attr.negativeElement || [];
  }

  info() {
    console.log(`Hero: ${this.name}, strength: ${this.strength}`);
  }

  attack(enemy: Hero) {
    enemy.health -= this.strength;

    this.handleElementAttack(enemy);

    console.log(this);

    if (enemy.health <= 0) {
      enemy.die();
    }
  }

  handleElementAttack(enemy: Hero) {
    const newNegativeElements = [...enemy.negativeElement, this.element];
    enemy.negativeElement = _.uniq(newNegativeElements);
    if (
      _.includes(enemy.negativeElement, ElementType.Fire) &&
      _.includes(enemy.negativeElement, ElementType.Thunder)
    ) {
      enemy.currentStatus = ElementEffectStatus.OVERLOAD;
    }
    if (
      _.includes(enemy.negativeElement, ElementType.Fire) &&
      _.includes(enemy.negativeElement, ElementType.Water)
    ) {
      enemy.currentStatus = ElementEffectStatus.STEAM;
    }
    if (
      _.includes(enemy.negativeElement, ElementType.Thunder) &&
      _.includes(enemy.negativeElement, ElementType.Water)
    ) {
      enemy.currentStatus = ElementEffectStatus.ELECTRIC_SHOCK;
    }
  }

  removeElementAttack() {
    this.negativeElement = [];
    this.currentStatus = ElementEffectStatus.NONE;
  }

  negativeEffect() {
    if (this.currentStatus === ElementEffectStatus.OVERLOAD) {
      this.health -= 6;
    }
    if (this.currentStatus === ElementEffectStatus.STEAM) {
      this.health -= 5;
    }
    if (this.currentStatus === ElementEffectStatus.ELECTRIC_SHOCK) {
      this.health -= 8;
    }
    if (this.health <= 0) {
      this.die();
    }
  }

  upgradeStrength() {
    this.strength += 10;
  }

  die() {
    this.isAlive = false;
  }
}

export default Hero;
