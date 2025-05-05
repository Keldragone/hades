import { AspectId } from "./weapon"

export interface RunState {
    aspectId: AspectId;
    keepsake: string;
    mirror: Array<string>;
    collectedBoonIds: Array<string>;
    collectedHammerIds: Array<string>;
};
