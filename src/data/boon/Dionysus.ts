import { hasAtLeastOneOf, satisfiesAllOf } from "./requirementsTests";
import { BoonInfo } from "./types";

export const BoonData_Dionysus: { [ id: string ]: BoonInfo } = {
    Dionysus_Attack: {
        name: "Drunken Strike",
        description: "Your Attack inflicts Hangover.",
        god: "Dionysus",
        slot: "Attack",
        iconPath: "./BoonIcons/Dionysus/Dionysus_Attack.webp",
    },
    Dionysus_Special: {
        name: "Drunken Flourish",
        description: "Your Special inflicts Hangover.",
        god: "Dionysus",
        slot: "Special",
        iconPath: "./BoonIcons/Dionysus/Dionysus_Special.webp",
    },
    Dionysus_Cast: {
        name: "Trippy Shot",
        description: "Your Cast lobs a projectile that bursts into Festive Fog.",
        god: "Dionysus",
        slot: "Cast",
        iconPath: "./BoonIcons/Dionysus/Dionysus_Cast.webp",
    },
    Dionysus_Dash: {
        name: "Drunken Dash",
        description: "Your Dash inflicts foes near you with Hangover.",
        god: "Dionysus",
        slot: "Dash",
        iconPath: "./BoonIcons/Dionysus/Dionysus_Dash.webp",
    },
    Dionysus_Aid: {
        name: "Dionysus' Aid",
        description: "Your Call inflicts Hangover to foes all around you for 1.5 Sec.",
        god: "Dionysus",
        slot: "Aid",
        iconPath: "./BoonIcons/Dionysus/Dionysus_Aid.webp",
    },
    Dionysus_AfterParty: {
        name: "After Party",
        description: "If your [Health] is low after Encounters, restore to the threshold.",
        god: "Dionysus",
        iconPath: "./BoonIcons/Dionysus/Dionysus_AfterParty.webp",
    },
    Dionysus_PositiveOutlook: {
        name: "Positive Outlook",
        description: "Take less damage while at 40% [Health] or below.",
        god: "Dionysus",
        iconPath: "./BoonIcons/Dionysus/Dionysus_PositiveOutlook.webp",
    },
    Dionysus_PremiumVintage: {
        name: "Premium Vintage",
        description: "Gain [Max Health] when you pick up [Nectar]. Receive 1 [Nectar] now.",
        god: "Dionysus",
        iconPath: "./BoonIcons/Dionysus/Dionysus_PremiumVintage.webp",
    },
    Dionysus_StrongDrink: {
        name: "Strong Drink",
        description: "Using a Fountain restores all [Health] and gives you bonus damage.",
        god: "Dionysus",
        iconPath: "./BoonIcons/Dionysus/Dionysus_StrongDrink.webp",
    },
    Dionysus_BadInfluence: {
        name: "Bad Influence",
        description: "Deal more damage while 3 foes are Hangover-afflicted.",
        god: "Dionysus",
        requirementTest: hasAtLeastOneOf([ "Dionysus_Attack", "Dionysus_Special", "Dionysus_Dash", "Dionysus_Aid" ]),
        iconPath: "./BoonIcons/Dionysus/Dionysus_BadInfluence.webp",
    },
    Dionysus_NumbingSensation: {
        name: "Numbing Sensation",
        description: "Your Hangover effects also make foes move slower.",
        god: "Dionysus",
        requirementTest: hasAtLeastOneOf([ "Dionysus_Attack", "Dionysus_Special", "Dionysus_Dash", "Dionysus_Aid" ]),
        iconPath: "./BoonIcons/Dionysus/Dionysus_NumbingSensation.webp",
    },
    Dionysus_PeerPressure: {
        name: "Peer Pressure",
        description: "Hangover-afflicted foes contaminate other nearby foes every 4 Sec.",
        god: "Dionysus",
        requirementTest: hasAtLeastOneOf([ "Dionysus_Attack", "Dionysus_Special", "Dionysus_Dash" ]),
        iconPath: "./BoonIcons/Dionysus/Dionysus_PeerPressure.webp",
    },
    Dionysus_HighTolerance: {
        name: "High Tolerance",
        description: "Take less damage while standing in Festive Fog.",
        god: "Dionysus",
        requirementTest: hasAtLeastOneOf([ "Dionysus_Cast" ]),
        iconPath: "./BoonIcons/Dionysus/Dionysus_HighTolerance.webp",
    },
    Dionysus_Legendary: {
        name: "Black Out",
        description: "Hangover-afflicted foes take bonus damage in Festive Fog.",
        god: "Dionysus",
        rarityType: "Legendary",
        requirementTest: satisfiesAllOf([
            hasAtLeastOneOf([ "Dionysus_Attack", "Dionysus_Special", "Dionysus_Dash", "Dionysus_Aid" ]),
            hasAtLeastOneOf([ "Dionysus_Cast" ]),
        ]),
        iconPath: "./BoonIcons/Dionysus/Dionysus_Legendary.webp",
    },
};
