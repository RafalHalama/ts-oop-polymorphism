import AttackSummary from "@attack/AttackSummary";
import { AttackType, getAttack } from "@attack/AttackType";
import Character from "@character/Character";

describe("Character tests", () => {
  let character: Character;
  let _health = 25;
  let _armour = 15;
  let attackType = AttackType.Axe;

  beforeEach(() => {
    // Before each "it" test, start with a new Character instance
    character = new Character(_health, _armour, attackType);
  });

  it("should reduce the Character health on successful hits", () => {
    let result: AttackSummary;

    do {
      result = character.takeHit(getAttack[AttackType.Sword]);
    } while (result.status === "miss");

    expect(character.health).toBeLessThan(_health);
    expect(result.status).toEqual("hit");

    expect(_health - result.damage).toEqual(result.playerHealth);
    expect(character.health).toEqual(result.playerHealth);
  });
});

describe("player vs enemy fight tests", () => {});
