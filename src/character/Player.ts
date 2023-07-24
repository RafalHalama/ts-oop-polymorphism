import { AttackType, getAttack } from "@attack/AttackType";
import AttackSummary from "@attack/AttackSummary";
import Character from "./Character";

class Player extends Character {
  constructor(
    _health: number,
    _armour: number,
    _attackType: AttackType,
    private _experienceReward: number
  ) {
    super(_health, _armour, _attackType);
  }
}

export default Player;
