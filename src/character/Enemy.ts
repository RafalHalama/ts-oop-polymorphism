import { AttackType, getAttack } from "@attack/AttackType";
import Character from "./Character";

class Enemy extends Character {
  constructor(
    _health: number,
    _armour: number,
    _attackType: AttackType,
    private _experienceReward: number
  ) {
    super(_health, _armour, _attackType);
  }
}

export default Enemy;
