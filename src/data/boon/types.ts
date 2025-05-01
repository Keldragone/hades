import { BoonRarityType } from "../boonRarityType";
import { BoonSlot } from "../boonSlot";
import { God } from "../god";
import { BoonRequirementsTest } from "./requirementsTests";

export interface BoonInfo {
    name: string;
    description: string;
    god: God | Array<God>;
    slot?: BoonSlot;
    rarityType?: BoonRarityType;
    requirementTest?: BoonRequirementsTest;
    iconPath: string;
};
