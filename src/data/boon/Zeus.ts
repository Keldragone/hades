import { BoonInfo } from "./types";

import { BoonSlot } from "../boonSlot";
import { God } from "../god";

export const BoonData_Zeus: { [ id: string ]: BoonInfo } = {
    Zeus_Attack: {
        name: "Lightning Strike",
        description: "Your Attack emits chain-lightning when you damage a foe.",
        god: God.Zeus,
        slot: BoonSlot.Attack,
        iconPath: "./BoonIcons/Zeus/Zeus_Attack.webp",
    },
    Zeus_Special: {
        name: "Thunder Flourish",
        description: "Your Special causes a lightning bolt to strike nearby foes.",
        god: God.Zeus,
        slot: BoonSlot.Special,
        iconPath: "./BoonIcons/Zeus/Zeus_Special.webp",
    },
    Zeus_Cast: {
        name: "Electric Shot",
        description: "Your Cast is a burst of chain-lightning that bounces between foes.",
        god: God.Zeus,
        slot: BoonSlot.Cast,
        iconPath: "./BoonIcons/Zeus/Zeus_Cast.webp",
    },
    Zeus_Dash: {
        name: "Divine Dash",
        description: "Your Dash causes a lightning bolt to strike nearby foes.",
        god: God.Zeus,
        slot: BoonSlot.Dash,
        iconPath: "./BoonIcons/Zeus/Zeus_Dash.webp",
    },
    Zeus_Aid: {
        name: "Zeus's Aid",
        description: "Your Call makes lightning strike nearby foes repeatedly for 1.5 Sec.",
        god: God.Zeus,
        slot: BoonSlot.Aid,
        iconPath: "./BoonIcons/Zeus/Zeus_Aid.webp",
    },
};
