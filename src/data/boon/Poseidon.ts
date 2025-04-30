import { BoonInfo } from "./types";

import { BoonSlot } from "../boonSlot";
import { God } from "../god";

export const BoonData_Poseidon: { [ id: string ]: BoonInfo } = {
    Poseidon_Attack: {
        name: "Tempest Strike",
        description: "Your Attack deals more damage and knocks foes away.",
        god: God.Poseidon,
        slot: BoonSlot.Attack,
        iconPath: "./BoonIcons/Poseidon/Poseidon_Attack.webp",
    },
    Poseidon_Special: {
        name: "Tempest Flourish",
        description: "Your Special deals more damage and knocks foes away.",
        god: God.Poseidon,
        slot: BoonSlot.Special,
        iconPath: "./BoonIcons/Poseidon/Poseidon_Special.webp",
    },
    Poseidon_Cast: {
        name: "Flood Shot",
        description: "Your Cast damages foes in an area and knocks them away.",
        god: God.Poseidon,
        slot: BoonSlot.Cast,
        iconPath: "./BoonIcons/Poseidon/Poseidon_Cast.webp",
    },
    Poseidon_Dash: {
        name: "Tidal Dash",
        description: "Your Dash damages foes in an area and knocks them away.",
        god: God.Poseidon,
        slot: BoonSlot.Dash,
        iconPath: "./BoonIcons/Poseidon/Poseidon_Dash.webp",
    },
    Poseidon_Aid: {
        name: "Poseidon's Aid",
        description: "Your Call makes you surge into foes while Impervious for 1.2 Sec.",
        god: God.Poseidon,
        slot: BoonSlot.Aid,
        iconPath: "./BoonIcons/Poseidon/Poseidon_Aid.webp",
    },
};
