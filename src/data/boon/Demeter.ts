import { hasAtLeastOneOf, hasAtLeastXOf } from "./requirementsTests";

import { BoonInfo } from "./types";

import { BoonRarityType } from "../boonRarityType";
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
    Demeter_FrozenTouch: {
        name: "Frozen Touch",
        description: "After you take damage, damage and completely Chill your foe.",
        god: God.Demeter,
        iconPath: "./BoonIcons/Demeter/Demeter_FrozenTouch.webp",
    },
    Demeter_RareCrop: {
        name: "Rare Crop",
        description: "Your Boons become Common, then gain Rarity every 3 Encounter(s).",
        god: God.Demeter,
        iconPath: "./BoonIcons/Demeter/Demeter_RareCrop.webp",
    },
    Demeter_RavenousWill: {
        name: "Ravenous Will",
        description: "While you have no [Cast], take 10% less damage and deal more.",
        god: God.Demeter,
        iconPath: "./BoonIcons/Demeter/Demeter_RavenousWill.webp",
    },
    Demeter_NourishedSoul: {
        name: "Nourished Soul",
        description: "Any [Heal] effects are more potent. Restore +30% now.",
        god: God.Demeter,
        iconPath: "./BoonIcons/Demeter/Demeter_NourishedSoul.webp",
    },
    Demeter_SnowBurst: {
        name: "Snow Burst",
        description: "Whenever you Cast, damage nearby foes and inflict Chill.",
        god: God.Demeter,
        iconPath: "./BoonIcons/Demeter/Demeter_SnowBurst.webp",
    },
    Demeter_ArcticBlast: {
        name: "Arctic Blast",
        description: "Applying 10 stacks of Chill causes a blast, clearing the effect.",
        god: God.Demeter,
        requirementTest: hasAtLeastOneOf([ "Demeter_Attack", "Demeter_Special", "Demeter_Dash", "Demeter_Aid", "Demeter_SnowBurst" ]),
        iconPath: "./BoonIcons/Demeter/Demeter_ArcticBlast.webp",
    },
    Demeter_KillingFreeze: {
        name: "Killing Freeze",
        description: "When all foes are Chill afflicted, they become Slow and Decay.",
        god: God.Demeter,
        requirementTest: hasAtLeastOneOf([ "Demeter_Attack", "Demeter_Special", "Demeter_Dash", "Demeter_Aid", "Demeter_SnowBurst" ]),
        iconPath: "./BoonIcons/Demeter/Demeter_KillingFreeze.webp",
    },
    Demeter_GlacialGlare: {
        name: "Glacial Glare",
        description: "Your Cast fires longer and inflicts Chill.",
        god: God.Demeter,
        requirementTest: hasAtLeastOneOf([ "Demeter_Cast" ]),
        iconPath: "./BoonIcons/Demeter/Demeter_GlacialGlare.webp",
    },
    Demeter_Legendary: {
        name: "Winter Harvest",
        description: "Chill-affected foes shatter at 10% HP, inflicting Chill nearby.",
        god: God.Demeter,
        rarityType: BoonRarityType.Legendary,
        requirementTest: hasAtLeastXOf(2, [ "Demeter_RavenousWill", "Demeter_ArcticBlast", "Demeter_KillingFreeze" ]),
        iconPath: "./BoonIcons/Demeter/Demeter_Legendary.webp",
    },
};
