import { BoonInfo } from "./types";

import { BoonSlot } from "../boonSlot";
import { God } from "../god";

export const BoonData_Athena: { [ id: string ]: BoonInfo } = {
    Athena_Attack: {
        name: "Divine Strike",
        description: "Your Attack is stronger, and can Deflect.",
        god: God.Athena,
        slot: BoonSlot.Attack,
        iconPath: "./BoonIcons/Athena/Athena_Attack.webp",
    },
    Athena_Special: {
        name: "Divine Flourish",
        description: "Your Special is stronger, and can Deflect.",
        god: God.Athena,
        slot: BoonSlot.Special,
        iconPath: "./BoonIcons/Athena/Athena_Special.webp",
    },
    Athena_Cast: {
        name: "Phalanx Shot",
        description: "Your Cast damages foes in a small area, and can Deflect.",
        god: God.Athena,
        slot: BoonSlot.Cast,
        iconPath: "./BoonIcons/Athena/Athena_Cast.webp",
    },
    Athena_Dash: {
        name: "Divine Dash",
        description: "Your Dash deals damage and can Deflect.",
        god: God.Athena,
        slot: BoonSlot.Dash,
        iconPath: "./BoonIcons/Athena/Athena_Dash.webp",
    },
    Athena_Aid: {
        name: "Athena's Aid",
        description: "Your Call briefly makes you Invulnerable and Deflect all attacks.",
        god: God.Athena,
        slot: BoonSlot.Aid,
        iconPath: "./BoonIcons/Athena/Athena_Aid.webp",
    },
};
