import { hasAtLeastOneOf, hasAtLeastXOf, satisfiesAllOf } from "./requirementsTests";

import { BoonInfo } from "./types";

import { BoonRarityType } from "../boonRarityType";
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
    Zeus_HeavensVengeance: {
        name: "Heaven's Vengeance",
        description: "After you take damage, your foe is struck by lightning.",
        god: God.Zeus,
        iconPath: "./BoonIcons/Zeus/Zeus_HeavensVengeance.webp",
    },
    Zeus_LightningReflexes: {
        name: "Lightning Reflexes",
        description: "After you Dash just before getting hit, a bolt strikes a nearby foes.",
        god: God.Zeus,
        iconPath: "./BoonIcons/Zeus/Zeus_LightningReflexes.webp",
    },
    Zeus_StormLightning: {
        name: "Storm Lightning",
        description: "Your chain-lightning effects bounce more times before expiring.",
        god: God.Zeus,
        requirementTest: hasAtLeastOneOf([ "Zeus_Attack", "Zeus_Cast" ]),
        iconPath: "./BoonIcons/Zeus/Zeus_StormLightning.webp",
    },
    Zeus_HighVoltage: {
        name: "High Voltage",
        description: "Your lightning bolt effects deal damage in a larger area.",
        god: God.Zeus,
        requirementTest: hasAtLeastOneOf([ "Zeus_Special", "Zeus_Dash", "Zeus_Aid" ]),
        iconPath: "./BoonIcons/Zeus/Zeus_HighVoltage.webp",
    },
    Zeus_DoubleStrike: {
        name: "Double Strike",
        description: "Your lightning bolt effects have a chance to strike twice.",
        god: God.Zeus,
        requirementTest: hasAtLeastOneOf([ "Zeus_Special", "Zeus_Dash", "Zeus_Aid" ]),
        iconPath: "./BoonIcons/Zeus/Zeus_DoubleStrike.webp",
    },
    Zeus_StaticDischarge: {
        name: "Static Discharge",
        description: "Your lightning effects also make foes Jolted.",
        god: God.Zeus,
        requirementTest: hasAtLeastOneOf([ "Zeus_Attack", "Zeus_Special", "Zeus_Cast", "Zeus_Dash", "Zeus_Aid", "Zeus_HeavensVengeance", "Zeus_LightningReflexes" ]),
        iconPath: "./BoonIcons/Zeus/Zeus_StaticDischarge.webp",
    },
    Zeus_CloudedJudgment: {
        name: "Clouded Judgment",
        description: "Your God Gauge charges faster when you deal or take damage.",
        god: God.Zeus,
        requirementTest: hasAtLeastOneOf([ "Aphrodite_Aid", "Ares_Aid", "Artemis_Aid", "Athena_Aid", "Demeter_Aid", "Dionysus_Aid", "Poseidon_Aid", "Zeus_Aid" ]), // AND HADES AID!!!!!
        iconPath: "./BoonIcons/Zeus/Zeus_CloudedJudgment.webp",
    },
    Zeus_BillowingStrength: {
        name: "Billowing Strength",
        description: "After using Call, you deal more damage for 15 Sec.",
        god: God.Zeus,
        requirementTest: hasAtLeastOneOf([ "Aphrodite_Aid", "Ares_Aid", "Artemis_Aid", "Athena_Aid", "Demeter_Aid", "Dionysus_Aid", "Poseidon_Aid", "Zeus_Aid" ]), // AND HADES AID!!!!!
        iconPath: "./BoonIcons/Zeus/Zeus_BillowingStrength.webp",
    },
    Zeus_Legendary: {
        name: "Splitting Bolt",
        description: "All your lightning effects create an additional burst.",
        god: God.Zeus,
        rarityType: BoonRarityType.Legendary,
        requirementTest: hasAtLeastOneOf([ "Zeus_StormLightning", "Zeus_HighVoltage", "Zeus_DoubleStrike" ]),
        iconPath: "./BoonIcons/Zeus/Zeus_Legendary.webp",
    },
};
