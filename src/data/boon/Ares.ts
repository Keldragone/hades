import { hasAtLeastOneOf, satisfiesAllOf } from './requirementsTests';

import { BoonInfo } from './types';

import { BoonRarityType } from '../boonRarityType';
import { BoonSlot } from '../boonSlot';
import { God } from '../god';
import { RunState } from '../runState';
import { Aspect } from '../weapon';

export const BoonData_Ares: { [ id: string ]: BoonInfo } = {
    Ares_Attack: {
        id: 'Ares_Attack',
        name: 'Curse of Agony',
        description: 'Your Attack inflicts Doom.',
        god: God.Ares,
        slot: BoonSlot.Attack,
        iconPath: './BoonIcons/Ares/Ares_Attack.webp',
    },
    Ares_Special: {
        id: 'Ares_Special',
        name: 'Curse of Pain',
        description: 'Your Special inflicts Doom.',
        god: God.Ares,
        slot: BoonSlot.Special,
        iconPath: './BoonIcons/Ares/Ares_Special.webp',
    },
    Ares_Cast: {
        id: 'Ares_Cast',
        name: 'Slicing Shot',
        description: 'Your Cast sends a Blade Rift hurling ahead.',
        god: God.Ares,
        slot: BoonSlot.Cast,
        testRunAvailability: (runState: RunState) => {
            return runState.aspect !== Aspect.Shield_Beowulf;
        },
        iconPath: './BoonIcons/Ares/Ares_Cast.webp',
    },
    Ares_CastAlternate: {
        id: 'Ares_CastAlternate',
        name: 'Slicing Flare',
        description: 'Your Cast sends a large Blade Rift hurling ahead for a brief time.',
        god: God.Ares,
        slot: BoonSlot.Cast,
        testRunAvailability: (runState: RunState) => {
            return runState.aspect === Aspect.Shield_Beowulf;
        },
        iconPath: './BoonIcons/Ares/Ares_Cast.webp',
    },
    Ares_Dash: {
        id: 'Ares_Dash',
        name: 'Blade Dash',
        description: 'Your Dash creates a Blade Rift where you started.',
        god: God.Ares,
        slot: BoonSlot.Dash,
        iconPath: './BoonIcons/Ares/Ares_Dash.webp',
    },
    Ares_Aid: {
        id: 'Ares_Aid',
        name: 'Ares\' Aid',
        description: 'Your Call turns you into an Impervious Blade Rift for 1.2 Sec.',
        god: God.Ares,
        slot: BoonSlot.Aid,
        iconPath: './BoonIcons/Ares/Ares_Aid.webp',
    },
    Ares_CurseOfVengeance: {
        id: 'Ares_CurseOfVengeance',
        name: 'Curse of Vengeance',
        description: 'After you take damage, inflict Doom on surrounding foes.',
        god: God.Ares,
        iconPath: './BoonIcons/Ares/Ares_CurseOfVengeance.webp',
    },
    Ares_UrgeToKill: {
        id: 'Ares_UrgeToKill',
        name: 'Urge to Kill',
        description: 'Your Attack, Special, and Cast deal more damage.',
        god: God.Ares,
        iconPath: './BoonIcons/Ares/Ares_UrgeToKill.webp',
    },
    Ares_BattleRage: {
        id: 'Ares_BattleRage',
        name: 'Battle Rage',
        description: 'After slaying a foe, your next Attack or Special deals more damage.',
        god: God.Ares,
        iconPath: './BoonIcons/Ares/Ares_BattleRage.webp',
    },
    Ares_BloodFrenzy: {
        id: 'Ares_BloodFrenzy',
        name: 'Blood Frenzy',
        description: 'After using Death Defiance, deal more damage that encounter.',
        god: God.Ares,
        pommable: false,
        iconPath: './BoonIcons/Ares/Ares_BloodFrenzy.webp',
    },
    Ares_BlackMetal: {
        id: 'Ares_BlackMetal',
        name: 'Black Metal',
        description: 'Your Blade Rift powers deal damage in a wider area.',
        god: God.Ares,
        requirementTest: hasAtLeastOneOf([ 'Ares_Cast', 'Ares_Dash', 'Ares_Aid' ]),
        iconPath: './BoonIcons/Ares/Ares_BlackMetal.webp',
    },
    Ares_EngulfingVortex: {
        id: 'Ares_EngulfingVortex',
        name: 'Engulfing Vortex',
        description: 'Your Blade Rift effects last longer and pull foes in.',
        god: God.Ares,
        pommable: false,
        requirementTest: hasAtLeastOneOf([ 'Ares_Cast', 'Ares_Dash', 'Ares_Aid' ]),
        iconPath: './BoonIcons/Ares/Ares_EngulfingVortex.webp',
    },
    Ares_DireMisfortune: {
        id: 'Ares_DireMisfortune',
        name: 'Dire Misfortune',
        description: 'Your Doom effects deal more damage when applied multiple times.',
        god: God.Ares,
        pommable: false,
        requirementTest: hasAtLeastOneOf([ 'Ares_Attack', 'Ares_Special' ]),
        iconPath: './BoonIcons/Ares/Ares_DireMisfortune.webp',
    },
    Ares_ImpendingDoom: {
        id: 'Ares_ImpendingDoom',
        name: 'Impending Doom',
        description: 'Your Doom effects deal more damage, but take +0.5 Sec. to activate.',
        god: God.Ares,
        requirementTest: hasAtLeastOneOf([ 'Ares_Attack', 'Ares_Special', 'Ares_CurseOfVengeance' ]),
        iconPath: './BoonIcons/Ares/Ares_ImpendingDoom.webp',
    },
    Ares_Legendary: {
        id: 'Ares_Legendary',
        name: 'Vicious Cycle',
        description: 'Your Blade Rift effects deal more damage for each consecutive hit.',
        god: God.Ares,
        rarityType: BoonRarityType.Legendary,
        pommable: false,
        requirementTest: hasAtLeastOneOf([ 'Ares_BlackMetal', 'Ares_EngulfingVortex' ]),
        iconPath: './BoonIcons/Ares/Ares_Legendary.webp',
    },
};
