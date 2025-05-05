import { hasAtLeastOneOf, hasAtLeastXOf, satisfiesAllOf } from './requirementsTests';

import { BoonInfo } from './types';

import { BoonRarityType } from '../boonRarityType';
import { BoonSlot } from '../boonSlot';
import { God } from '../god';
import { RunState } from '../runState';
import { AspectId } from '../weapon';

export const BoonData_Poseidon: { [ id: string ]: BoonInfo } = {
    Poseidon_Attack: {
        id: 'Poseidon_Attack',
        name: 'Tempest Strike',
        description: 'Your Attack deals more damage and knocks foes away.',
        god: God.Poseidon,
        slot: BoonSlot.Attack,
        iconPath: './Icons/Boon/Poseidon/Poseidon_Attack.webp',
    },
    Poseidon_Special: {
        id: 'Poseidon_Special',
        name: 'Tempest Flourish',
        description: 'Your Special deals more damage and knocks foes away.',
        god: God.Poseidon,
        slot: BoonSlot.Special,
        iconPath: './Icons/Boon/Poseidon/Poseidon_Special.webp',
    },
    Poseidon_Cast: {
        id: 'Poseidon_Cast',
        name: 'Flood Shot',
        description: 'Your Cast damages foes in an area and knocks them away.',
        god: God.Poseidon,
        slot: BoonSlot.Cast,
        testRunAvailability: (runState: RunState) => {
            return runState.aspectId !== AspectId.Shield_Beowulf;
        },
        iconPath: './Icons/Boon/Poseidon/Poseidon_Cast.webp',
    },
    Poseidon_CastAlternate: {
        id: 'Poseidon_CastAlternate',
        name: 'Flood Flare',
        description: 'Your Cast damages foes around you and knocks them away.',
        god: God.Poseidon,
        slot: BoonSlot.Cast,
        testRunAvailability: (runState: RunState) => {
            return runState.aspectId === AspectId.Shield_Beowulf;
        },
        iconPath: './Icons/Boon/Poseidon/Poseidon_Cast.webp',
    },
    Poseidon_Dash: {
        id: 'Poseidon_Dash',
        name: 'Tidal Dash',
        description: 'Your Dash damages foes in an area and knocks them away.',
        god: God.Poseidon,
        slot: BoonSlot.Dash,
        iconPath: './Icons/Boon/Poseidon/Poseidon_Dash.webp',
    },
    Poseidon_Aid: {
        id: 'Poseidon_Aid',
        name: 'Poseidon\'s Aid',
        description: 'Your Call makes you surge into foes while Impervious for 1.2 Sec.',
        god: God.Poseidon,
        slot: BoonSlot.Aid,
        iconPath: './Icons/Boon/Poseidon/Poseidon_Aid.webp',
    },
    Poseidon_TyphoonsFury: {
        id: 'Poseidon_TyphoonsFury',
        name: 'Typhoon\'s Fury',
        description: 'You deal more damage when slamming foes into barriers.',
        god: God.Poseidon,
        requirementTest: hasAtLeastOneOf([ 'Poseidon_Attack', 'Poseidon_Special', 'Poseidon_Cast', 'Poseidon_Dash', 'Poseidon_Aid' ]),
        iconPath: './Icons/Boon/Poseidon/Poseidon_TyphoonsFury.webp',
    },
    Poseidon_HydraulicMight: {
        id: 'Poseidon_HydraulicMight',
        name: 'Hydraulic Might',
        description: 'Your Attack and Special are stronger the first 10 Sec. in Encounter(s).',
        god: God.Poseidon,
        iconPath: './Icons/Boon/Poseidon/Poseidon_HydraulicMight.webp',
    },
    Poseidon_OceansBounty: {
        id: 'Poseidon_OceansBounty',
        name: 'Ocean\'s Bounty',
        description: 'Any [Gemstone], [Darkness] or [Obols] chamber rewards are worth more.',
        god: God.Poseidon,
        pommable: false,
        iconPath: './Icons/Boon/Poseidon/Poseidon_OceansBounty.webp',
    },
    Poseidon_SunkenTreasure: {
        id: 'Poseidon_SunkenTreasure',
        name: 'Sunken Treasure',
        description: 'Gain an assortment of [Gemstone], [Darkness], [Obols] and [Heal].',
        god: God.Poseidon,
        pommable: false,
        iconPath: './Icons/Boon/Poseidon/Poseidon_SunkenTreasure.webp',
        // Can get this MULTIPLE TIMES?!?!
    },
    Poseidon_RazorShoals: {
        id: 'Poseidon_RazorShoals',
        name: 'Razor Shoals',
        description: 'Using knock-away effects also Rupture foes.',
        god: God.Poseidon,
        requirementTest: hasAtLeastOneOf([ 'Poseidon_Attack', 'Poseidon_Special', 'Poseidon_Cast', 'Poseidon_Dash', 'Poseidon_Aid' ]),
        iconPath: './Icons/Boon/Poseidon/Poseidon_RazorShoals.webp',
    },
    Poseidon_BoilingPoint: {
        id: 'Poseidon_BoilingPoint',
        name: 'Boiling Point',
        description: 'Your God Gauge charges faster when you take damage.',
        god: God.Poseidon,
        requirementTest: hasAtLeastOneOf([ 'Aphrodite_Aid', 'Ares_Aid', 'Artemis_Aid', 'Athena_Aid', 'Demeter_Aid', 'Dionysus_Aid', 'Poseidon_Aid', 'Zeus_Aid' ]), // AND HADES AID!!!!!
        iconPath: './Icons/Boon/Poseidon/Poseidon_BoilingPoint.webp',
    },
    Poseidon_BreakingWave: {
        id: 'Poseidon_BreakingWave',
        name: 'Breaking Wave',
        description: 'Slamming foes into walls or corners creates a watery blast in the area.',
        god: God.Poseidon,
        requirementTest: hasAtLeastOneOf([ 'Poseidon_Attack', 'Poseidon_Special', 'Poseidon_Cast', 'Poseidon_Dash', 'Poseidon_Aid' ]),
        iconPath: './Icons/Boon/Poseidon/Poseidon_BreakingWave.webp',
    },
    Poseidon_WavePounding: {
        id: 'Poseidon_WavePounding',
        name: 'Wave Pounding',
        description: 'Your boons with Knock-Away effects deal bonus damage to bosses.',
        god: God.Poseidon,
        requirementTest: hasAtLeastOneOf([ 'Poseidon_Attack', 'Poseidon_Special', 'Poseidon_Cast', 'Poseidon_Dash', 'Poseidon_Aid' ]),
        iconPath: './Icons/Boon/Poseidon/Poseidon_WavePounding.webp',
    },
    Poseidon_RipCurrent: {
        id: 'Poseidon_RipCurrent',
        name: 'Rip Current',
        description: 'Your Call pulls in foes and the effect lasts longer.',
        god: God.Poseidon,
        requirementTest: hasAtLeastOneOf([ 'Poseidon_Aid' ]),
        iconPath: './Icons/Boon/Poseidon/Poseidon_RipCurrent.webp',
    },
    Poseidon_Legendary_HugeCatch: {
        id: 'Poseidon_Legendary_HugeCatch',
        name: 'Huge Catch',
        description: 'You have a greater chance to find Fishing Point in each Chamber.',
        god: God.Poseidon,
        rarityType: BoonRarityType.Legendary,
        pommable: false,
        requirementTest: hasAtLeastXOf(2, [ 'Poseidon_OceansBounty', 'Poseidon_SunkenTreasure' ]), // or conch shell equipped...
        iconPath: './Icons/Boon/Poseidon/Poseidon_Legendary_HugeCatch.webp',
    },
    Poseidon_Legendary_SecondWave: {
        id: 'Poseidon_Legendary_SecondWave',
        name: 'Second Wave',
        description: 'Your knock-away effects shove foes a second time after the first.',
        god: God.Poseidon,
        rarityType: BoonRarityType.Legendary,
        pommable: false,
        requirementTest: satisfiesAllOf([
            hasAtLeastOneOf([ 'Poseidon_BreakingWave', 'Poseidon_TyphoonsFury' ]),
            hasAtLeastOneOf([ 'Poseidon_Attack', 'Poseidon_Special', 'Poseidon_Cast', 'Poseidon_Dash', 'Poseidon_Aid' ]),
        ]),
        iconPath: './Icons/Boon/Poseidon/Poseidon_Legendary_SecondWave.webp',
    },
};
