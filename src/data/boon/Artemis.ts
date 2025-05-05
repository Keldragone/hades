import { BoonInfo } from './types';
import { doesNotHaveAnyOf, hasAtLeastOneOf, hasAtLeastXOf, satisfiesAllOf } from './requirementsTests';

import { BoonRarityType } from '../boonRarityType';
import { BoonSlot } from '../boonSlot';
import { God } from '../god';
import { RunState } from '../runState';
import { AspectId } from '../weapon';

export const BoonData_Artemis: { [ id: string ]: BoonInfo } = {
    Artemis_Attack: {
        id: 'Artemis_Attack',
        name: 'Deadly Strike',
        description: 'Your Attack is stronger, with a +15% chance to deal Critical damage.',
        god: God.Artemis,
        slot: BoonSlot.Attack,
        iconPath: './BoonIcons/Artemis/Artemis_Attack.webp',
    },
    Artemis_Special: {
        id: 'Artemis_Special',
        name: 'Deadly Flourish',
        description: 'Your Special is stronger, with a +20% chance to deal Critical damage.',
        god: God.Artemis,
        slot: BoonSlot.Special,
        iconPath: './BoonIcons/Artemis/Artemis_Special.webp',
    },
    Artemis_Cast: {
        id: 'Artemis_Cast',
        name: 'True Shot',
        description: 'Your Cast seeks foes, with a 10% chance to deal Critical damage.',
        god: God.Artemis,
        slot: BoonSlot.Cast,
        testRunAvailability: (runState: RunState) => {
            return runState.aspectId !== AspectId.Shield_Beowulf;
        },
        iconPath: './BoonIcons/Artemis/Artemis_Cast.webp',
    },
    Artemis_CastAlternate: {
        id: 'Artemis_CastAlternate',
        name: 'Hunter\'s Flare',
        description: 'Your Cast damages foes around you, with a 10% Critical chance.',
        god: God.Artemis,
        slot: BoonSlot.Cast,
        testRunAvailability: (runState: RunState) => {
            return runState.aspectId === AspectId.Shield_Beowulf;
        },
        iconPath: './BoonIcons/Artemis/Artemis_Cast.webp',
    },
    Artemis_Dash: {
        id: 'Artemis_Dash',
        name: 'Hunter Dash',
        description: 'Your Dash-Strike deals more damage.',
        god: God.Artemis,
        slot: BoonSlot.Dash,
        testRunAvailability: (runState: RunState) => {
            return runState.aspectId !== AspectId.Rail_Lucifer;
        },
        iconPath: './BoonIcons/Artemis/Artemis_Dash.webp',
        // NO LUCIFER
    },
    Artemis_Aid: {
        id: 'Artemis_Aid',
        name: 'Artemis\' Aid',
        description: 'Your Call fires a seeking arrow with +35% Critical chance.',
        god: God.Artemis,
        slot: BoonSlot.Aid,
        iconPath: './BoonIcons/Artemis/Artemis_Aid.webp',
    },
    Artemis_PressurePoints: {
        id: 'Artemis_PressurePoint',
        name: 'Pressure Points',
        description: 'Any damage you deal has a chance to be Critical.',
        god: God.Artemis,
        iconPath: './BoonIcons/Artemis/Artemis_PressurePoints.webp',
    },
    Artemis_ExitWounds: {
        id: 'Artemis_ExitWounds',
        name: 'Exit Wounds',
        description: 'Your foes take damage when your [Cast] stuck in them in dislodged.',
        god: God.Artemis,
        requirementTest: satisfiesAllOf([
            hasAtLeastOneOf([ 'Aphrodite_Cast', 'Artemis_Cast', 'Athena_Cast', 'Poseidon_Cast', 'Zeus_Cast' ]),
            doesNotHaveAnyOf([ 'Demeter_Cast', 'Ares_Cast', 'Dionysus_Cast' ]),
        ]),
        testRunAvailability: (runState: RunState) => {
            return runState.aspectId !== AspectId.Shield_Beowulf;
        },
        iconPath: './BoonIcons/Artemis/Artemis_ExitWounds.webp',
    },
    Artemis_HideBreaker: {
        id: 'Artemis_HideBreaker',
        name: 'Hide Breaker',
        description: 'Your Critical effects deal even more damage to Armor.',
        god: God.Artemis,
        requirementTest: hasAtLeastOneOf([ 'Artemis_Attack', 'Artemis_Special', 'Artemis_Cast', 'Artemis_Aid', 'Artemis_PressurePoints' ]),
        iconPath: './BoonIcons/Artemis/Artemis_HideBreaker.webp',
    },
    Artemis_CleanKill: {
        id: 'Artemis_CleanKill',
        name: 'Clean Kill',
        description: 'Your Critical effects deal even more damage.',
        god: God.Artemis,
        requirementTest: hasAtLeastOneOf([ 'Artemis_Attack', 'Artemis_Special', 'Artemis_Cast', 'Artemis_Aid', 'Artemis_PressurePoints' ]),
        iconPath: './BoonIcons/Artemis/Artemis_CleanKill.webp',
    },
    Artemis_HunterInstinct: {
        id: 'Artemis_HunterInstinct',
        name: 'Hunter Instinct',
        description: 'Your God Guage charges faster when you deal Critical damage.',
        god: God.Artemis,
        requirementTest: hasAtLeastOneOf([ 'Artemis_Attack', 'Artemis_Special', 'Artemis_Cast', 'Artemis_PressurePoints' ]),
        iconPath: './BoonIcons/Artemis/Artemis_HunterInstinct.webp',
    },
    Artemis_HuntersMark: {
        id: 'Artemis_HuntersMark',
        name: 'Hunter\'s Mark',
        description: 'After you deal Critical damage to a foe, a foe near it is Marked.',
        god: God.Artemis,
        requirementTest: hasAtLeastOneOf([ 'Artemis_Attack', 'Artemis_Special', 'Artemis_Cast', 'Artemis_Aid', 'Artemis_PressurePoints' ]),
        iconPath: './BoonIcons/Artemis/Artemis_HuntersMark.webp',
    },
    Artemis_SupportFire: {
        id: 'Artemis_SupportFire',
        name: 'Support Fire',
        description: 'After you Cast, or hit with an Attack or Special, fire a seeking arrow.',
        god: God.Artemis,
        requirementTest: hasAtLeastOneOf([ 'Artemis_Attack', 'Artemis_Special', 'Artemis_Cast', 'Artemis_Dash', 'Artemis_Aid', 'Artemis_PressurePoints' ]),
        iconPath: './BoonIcons/Artemis/Artemis_SupportFire.webp',
    },
    Artemis_Legendary: {
        id: 'Artemis_Legendary',
        name: 'Fully Loaded',
        description: 'You gain extra [Cast] for your Cast.',
        god: God.Artemis,
        rarityType: BoonRarityType.Legendary,
        pommable: false,
        requirementTest: hasAtLeastXOf(2, [ 'Artemis_ExitWounds', 'Artemis_PressurePoints', 'Artemis_SupportFire' ]),
        iconPath: './BoonIcons/Artemis/Artemis_Legendary.webp',
    },
};
