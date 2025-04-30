import { BoonInfo } from "./types";

import { BoonSlot } from "../boonSlot";
import { God } from "../god";

export const BoonData_Demeter: { [ id: string ]: BoonInfo } = {
    Demeter_Attack: {
        name: "Frost Strike",
        description: "Your Attack is stronger and inflicts Chill.",
        god: God.Demeter,
        slot: BoonSlot.Attack,
        iconPath: "./BoonIcons/Demeter/Demeter_Attack.webp",
    },
    Demeter_Special: {
        name: "Frost Flourish",
        description: "Your Special is stronger and inflicts Chill.",
        god: God.Demeter,
        slot: BoonSlot.Special,
        iconPath: "./BoonIcons/Demeter/Demeter_Special.webp",
    },
    Demeter_Cast: {
        name: "Crystal Beam",
        description: "Your Cast drops a crystal that fires a beam straight ahead for 5 Sec.",
        god: God.Demeter,
        slot: BoonSlot.Cast,
        iconPath: "./BoonIcons/Demeter/Demeter_Cast.webp",
    },
    Demeter_Dash: {
        name: "Mistral Dash",
        description: "Your Dash shoots a gust ahead that inflicts Chill.",
        god: God.Demeter,
        slot: BoonSlot.Dash,
        iconPath: "./BoonIcons/Demeter/Demeter_Dash.webp",
    },
    Demeter_Aid: {
        name: "Demeter's Aid",
        description: "Your Call creates a winter vortex for 5 Sec., deals damage every 0.25 Sec inflicting Chill.",
        god: God.Demeter,
        slot: BoonSlot.Aid,
        iconPath: "./BoonIcons/Demeter/Demeter_Aid.webp",
    },
};
