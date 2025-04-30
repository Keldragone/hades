import { BoonInfo } from "./types";

import { BoonSlot } from "../boonSlot";
import { God } from "../god";

export const BoonData_Ares: { [ id: string ]: BoonInfo } = {
    Ares_Attack: {
        name: "Curse of Agony",
        description: "Your Attack inflicts Doom.",
        god: God.Ares,
        slot: BoonSlot.Attack,
        iconPath: "./BoonIcons/Ares/Ares_Attack.webp",
    },
    Ares_Special: {
        name: "Curse of Pain",
        description: "Your Special inflicts Doom.",
        god: God.Ares,
        slot: BoonSlot.Special,
        iconPath: "./BoonIcons/Ares/Ares_Special.webp",
    },
    Ares_Cast: {
        name: "Slicing Shot",
        description: "Your Cast sends a Blade Rift hurling ahead.",
        god: God.Ares,
        slot: BoonSlot.Cast,
        iconPath: "./BoonIcons/Ares/Ares_Cast.webp",
    },
    Ares_Dash: {
        name: "Blade Dash",
        description: "Your Dash creates a Blade Rift where you started.",
        god: God.Ares,
        slot: BoonSlot.Dash,
        iconPath: "./BoonIcons/Ares/Ares_Dash.webp",
    },
    Ares_Aid: {
        name: "Ares' Aid",
        description: "Your Call turns you into an Impervious Blade Rift for 1.2 Sec.",
        god: God.Ares,
        slot: BoonSlot.Aid,
        iconPath: "./BoonIcons/Ares/Ares_Aid.webp",
    },
};
