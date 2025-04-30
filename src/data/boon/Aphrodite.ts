import { BoonInfo } from "./types";

import { BoonSlot } from "../boonSlot";
import { God } from "../god";

export const BoonData_Aphrodite: { [ id: string ]: BoonInfo } = {
    Aphrodite_Attack: {
        name: "Heartbreak Strike",
        description: "Your Attack deals more damage and inflicts Weak.",
        god: God.Aphrodite,
        slot: BoonSlot.Attack,
        iconPath: "./BoonIcons/Aphrodite/Aphrodite_Attack.webp",
    },
    Aphrodite_Special: {
        name: "Heartbreak Flourish",
        description: "Your Special deals more damage and inflicts Weak.",
        god: God.Aphrodite,
        slot: BoonSlot.Special,
        iconPath: "./BoonIcons/Aphrodite/Aphrodite_Special.webp",
    },
    Aphrodite_Cast: {
        name: "Crush Shot",
        description: "Your Cast is a wide, short-range blast that inflicts Weak.",
        god: God.Aphrodite,
        slot: BoonSlot.Cast,
        iconPath: "./BoonIcons/Aphrodite/Aphrodite_Cast.webp",
    },
    Aphrodite_Dash: {
        name: "Passion Dash",
        description: "Your Dash inflicts damage where you end up, inflicting Weak.",
        god: God.Aphrodite,
        slot: BoonSlot.Dash,
        iconPath: "./BoonIcons/Aphrodite/Aphrodite_Dash.webp",
    },
    Aphrodite_Aid: {
        name: "Aphrodite's Aid",
        description: "Your Call fires a seeking projectile that inflicts Charm.",
        god: God.Aphrodite,
        slot: BoonSlot.Aid,
        iconPath: "./BoonIcons/Aphrodite/Aphrodite_Aid.webp",
    },
};
