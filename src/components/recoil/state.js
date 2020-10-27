import { atom } from "recoil";

export const userPositionState = atom({
  key: "userPositionState",
  default: { position: { x: 0, y: 0 }, rotation: { z: 0, x: 0, y: 0 } }, // default value (aka initial value)
});
