import { AttackType, getAttack } from "@attack/AttackType";
import AttackSummary from "@attack/AttackSummary";
import Attack from "@attack/Attack";

class Character {
  constructor(
    protected _health: number,
    protected _armour: number,
    protected _attackType: AttackType
  ) {}

  get health(): number {
    return this._health;
  }
  get attack(): Attack {
    return getAttack[this._attackType];
  }
  public takeHit = (attack: Attack): AttackSummary => {
    const accuracyRoll = attack.rollForAccuracy();
    if (accuracyRoll >= this._armour) {
      const damage = attack.rollForDamage();
      this._health -= damage;
      return {
        status: "hit",
        damage: damage,
        playerHealth: this._health,
      };
    } else {
      return { status: "miss" };
    }
  };
}

export default Character;
