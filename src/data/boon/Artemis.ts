import { BoonInfo } from "./types";
import { doesNotHaveAnyOf, hasAtLeastOneOf, hasAtLeastXOf, satisfiesAllOf } from "./requirementsTests";

export const BoonData_Artemis: { [ id: string ]: BoonInfo } = {
    Artemis_Attack: {
        name: "Deadly Strike",
        description: "Your Attack is stronger, with a +15% chance to deal Critical damage.",
        god: "Artemis",
        slot: "Attack",
        iconPath: "./BoonIcons/Artemis/Artemis_Attack.webp",
    },
    Artemis_Special: {
        name: "Deadly Flourish",
        description: "Your Special is stronger, with a +20% chance to deal Critical damage.",
        god: "Artemis",
        slot: "Special",
        iconPath: "./BoonIcons/Artemis/Artemis_Special.webp",
    },
    Artemis_Cast: {
        name: "True Shot",
        description: "Your Cast seeks foes, with a 10% chance to deal Critical damage.",
        god: "Artemis",
        slot: "Cast",
        iconPath: "./BoonIcons/Artemis/Artemis_Cast.webp",
    },
    Artemis_Dash: {
        name: "Hunter Dash",
        description: "Your Dash-Strike deals more damage.",
        god: "Artemis",
        slot: "Dash",
        iconPath: "./BoonIcons/Artemis/Artemis_Dash.webp",
    },
    Artemis_Aid: {
        name: "Artemis' Aid",
        description: "Your Call fires a seeking arrow with +35% Critical chance.",
        god: "Artemis",
        slot: "Aid",
        iconPath: "./BoonIcons/Artemis/Artemis_Aid.webp",
    },
    Artemis_PressurePoints: {
        name: "Pressure Points",
        description: "Any damage you deal has a chance to be Critical.",
        god: "Artemis",
        iconPath: "./BoonIcons/Artemis/Artemis_PressurePoints.webp",
    },
    Artemis_ExitWounds: {
        name: "Exit Wounds",
        description: "Your foes take damage when your [Cast] stuck in them in dislodged.",
        god: "Artemis",
        requirementTest: satisfiesAllOf([
            hasAtLeastOneOf([ "Aphrodite_Cast", "Artemis_Cast", "Athena_Cast", "Poseidon_Cast", "Zeus_Cast" ]),
            doesNotHaveAnyOf([ "Demeter_Cast", "Ares_Cast", "Dionysus_Cast" ]),
        ]),
        iconPath: "./BoonIcons/Artemis/Artemis_ExitWounds.webp",
    },
    Artemis_HideBreaker: {
        name: "Hide Breaker",
        description: "Your Critical effects deal even more damage to Armor.",
        god: "Artemis",
        requirementTest: hasAtLeastOneOf([ "Artemis_Attack", "Artemis_Special", "Artemis_Cast", "Artemis_Aid", "Artemis_PressurePoints" ]),
        iconPath: "./BoonIcons/Artemis/Artemis_HideBreaker.webp",
    },
    Artemis_CleanKill: {
        name: "Clean Kill",
        description: "Your Critical effects deal even more damage.",
        god: "Artemis",
        requirementTest: hasAtLeastOneOf([ "Artemis_Attack", "Artemis_Special", "Artemis_Cast", "Artemis_Aid", "Artemis_PressurePoints" ]),
        iconPath: "./BoonIcons/Artemis/Artemis_CleanKill.webp",
    },
    Artemis_HunterInstinct: {
        name: "Hunter Instinct",
        description: "Your God Guage charges faster when you deal Critical damage.",
        god: "Artemis",
        requirementTest: hasAtLeastOneOf([ "Artemis_Attack", "Artemis_Special", "Artemis_Cast", "Artemis_PressurePoints" ]),
        iconPath: "./BoonIcons/Artemis/Artemis_HunterInstinct.webp",
    },
    Artemis_HuntersMark: {
        name: "Hunter's Mark",
        description: "After you deal Critical damage to a foe, a foe near it is Marked.",
        god: "Artemis",
        requirementTest: hasAtLeastOneOf([ "Artemis_Attack", "Artemis_Special", "Artemis_Cast", "Artemis_Aid", "Artemis_PressurePoints" ]),
        iconPath: "./BoonIcons/Artemis/Artemis_HuntersMark.webp",
    },
    Artemis_SupportFire: {
        name: "Support Fire",
        description: "After you Cast, or hit with an Attack or Special, fire a seeking arrow.",
        god: "Artemis",
        requirementTest: hasAtLeastOneOf([ "Artemis_Attack", "Artemis_Special", "Artemis_Cast", "Artemis_Dash", "Artemis_Aid", "Artemis_PressurePoints" ]),
        iconPath: "./BoonIcons/Artemis/Artemis_SupportFire.webp",
    },
    Artemis_Legendary: {
        name: "Fully Loaded",
        description: "You gain extra [Cast] for your Cast.",
        god: "Artemis",
        rarityType: "Legendary",
        requirementTest: hasAtLeastXOf(2, [ "Artemis_ExitWounds", "Artemis_PressurePoints", "Artemis_SupportFire" ]),
        iconPath: "./BoonIcons/Artemis/Artemis_Legendary.webp",
    },
};
