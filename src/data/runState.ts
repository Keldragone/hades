import { Aspect, Weapon } from "./weapon"

export interface RunState {
    weapon: Weapon;
    aspect: Aspect;
    keepsake: string;
    mirror: Array<string>;
    collectedBoonIds: Array<string>;
    collectedHammerIds: Array<string>;
};
