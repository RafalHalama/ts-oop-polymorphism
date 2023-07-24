import { AttackType, getAttack } from "./attack/AttackType";
import Player from "./player/Player";

const at = AttackType.Axe;
const p = new Player(25, 16);

for (let i = 0; i < 10; ++i) {
  const r = p.takeHit(at);
  console.log(r);
}
export { Player };
