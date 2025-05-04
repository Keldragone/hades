import { BoonRarityType } from "../boonRarityType";
import { BoonSlot } from "../boonSlot";
import { God } from "../god";
import { RunState } from "../runState";
import { BoonRequirementsTest } from "./requirementsTests";

export interface BoonInfo {
    id: string;
    name: string;
    description: string;
    god: God | Array<God>;
    slot?: BoonSlot;
    rarityType?: BoonRarityType;
    pommable?: boolean;
    requirementTest?: BoonRequirementsTest;
    testRunAvailability?: (runState: RunState) => {};
    iconPath: string;
};
