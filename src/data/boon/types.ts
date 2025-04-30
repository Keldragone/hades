import { BoonRequirementsTest } from "./requirementsTests";

export interface BoonInfo {
    name: string;
    description: string;
    god: string | Array<string>;
    slot?: string;
    rarityType?: string;
    requirementTest?: BoonRequirementsTest;
    iconPath: string;
};
