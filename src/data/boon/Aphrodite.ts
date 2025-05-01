import { hasAtLeastOneOf, satisfiesAllOf } from "./requirementsTests";

import { BoonInfo } from "./types";

import { BoonRarityType } from "../boonRarityType";
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
    Aphrodite_DyingLament: {
        name: "Dying Lament",
        description: "When foes are slain, they damage nearby foes and inflict Weak.",
        god: God.Aphrodite,
        iconPath: "./BoonIcons/Aphrodite/Aphrodite_DyingLament.webp",
    },
    Aphrodite_WaveOfDespair: {
        name: "Wave of Despair",
        description: "After you take damage, damage nearby foes and inflict Weak.",
        god: God.Aphrodite,
        iconPath: "./BoonIcons/Aphrodite/Aphrodite_WaveOfDespair.webp",
    },
    Aphrodite_DifferentLeague: {
        name: "Different League",
        description: "Resist some damage from nearby foes' attacks.",
        god: God.Aphrodite,
        iconPath: "./BoonIcons/Aphrodite/Aphrodite_DifferentLeague.webp",
    },
    Aphrodite_LifeAffirmation: {
        name: "Life Affirmation",
        description: "Any [Max Health] chamber rewards are worth more.",
        god: God.Aphrodite,
        iconPath: "./BoonIcons/Aphrodite/Aphrodite_LifeAffirmation.webp",
    },
    Aphrodite_EmptyInside: {
        name: "Empty Inside",
        description: "Your Weak effects have a longer duration.",
        god: God.Aphrodite,
        requirementTest: hasAtLeastOneOf([ "Aphrodite_Attack", "Aphrodite_Special", "Aphrodite_Cast", "Aphrodite_Dash" ]),
        iconPath: "./BoonIcons/Aphrodite/Aphrodite_EmptyInside.webp",
    },
    Aphrodite_SweetSurrender: {
        name: "Sweet Surrender",
        description: "Weak-afflicted foes are also more susceptible to damage.",
        god: God.Aphrodite,
        requirementTest: hasAtLeastOneOf([ "Aphrodite_Attack", "Aphrodite_Special", "Aphrodite_Cast", "Aphrodite_Dash" ]),
        iconPath: "./BoonIcons/Aphrodite/Aphrodite_SweetSurrender.webp",
    },
    Aphrodite_BrokenResolve: {
        name: "Broken Resolve",
        description: "Your Weak effects are more potent.",
        god: God.Aphrodite,
        requirementTest: hasAtLeastOneOf([ "Aphrodite_Attack", "Aphrodite_Special", "Aphrodite_Cast", "Aphrodite_Dash" ]),
        iconPath: "./BoonIcons/Aphrodite/Aphrodite_BrokenResolve.webp",
    },
    Aphrodite_BlownKiss: {
        name: "Blown Kiss",
        description: "Your Cast shoots farther and is stronger against undamaged foes.",
        god: God.Aphrodite,
        requirementTest: hasAtLeastOneOf([ "Aphrodite_Cast" ]),
        iconPath: "./BoonIcons/Aphrodite/Aphrodite_BlownKiss.webp",
    },
    Aphrodite_Legendary: {
        name: "Unhealthy Fixation",
        description: "Your Weak effects also have a 15% chance to Charm foes.",
        god: God.Aphrodite,
        rarityType: BoonRarityType.Legendary,
        requirementTest: satisfiesAllOf([
            hasAtLeastOneOf([ "Aphrodite_Attack", "Aphrodite_Special", "Aphrodite_Cast", "Aphrodite_Dash" ]),
            hasAtLeastOneOf([ "Aphrodite_EmptyInside", "Aphrodite_SweetSurrender", "Aphrodite_BrokenResolve" ]),
        ]),
        iconPath: "./BoonIcons/Aphrodite/Aphrodite_BlownKiss.webp",
    },
};
