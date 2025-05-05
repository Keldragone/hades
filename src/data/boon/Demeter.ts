import { hasAtLeastOneOf, hasAtLeastXOf } from './requirementsTests';

import { BoonInfo } from './types';

import { BoonRarityType } from '../boonRarityType';
import { BoonSlot } from '../boonSlot';
import { God } from '../god';
import { RunState } from '../runState';
import { AspectId } from '../weapon';

export const BoonData_Demeter: { [ id: string ]: BoonInfo } = {
    Demeter_Attack: {
        id: 'Demeter_Attack',
        name: 'Frost Strike',
        description: 'Your Attack is stronger and inflicts Chill.',
        god: God.Demeter,
        slot: BoonSlot.Attack,
        iconPath: './Icons/Boon/Demeter/Demeter_Attack.webp',
    },
    Demeter_Special: {
        id: 'Demeter_Special',
        name: 'Frost Flourish',
        description: 'Your Special is stronger and inflicts Chill.',
        god: God.Demeter,
        slot: BoonSlot.Special,
        iconPath: './Icons/Boon/Demeter/Demeter_Special.webp',
    },
    Demeter_Cast: {
        id: 'Demeter_Cast',
        name: 'Crystal Beam',
        description: 'Your Cast drops a crystal that fires a beam straight ahead for 5 Sec.',
        god: God.Demeter,
        slot: BoonSlot.Cast,
        testRunAvailability: (runState: RunState) => {
            return runState.aspectId !== AspectId.Shield_Beowulf;
        },
        iconPath: './Icons/Boon/Demeter/Demeter_Cast.webp',
    },
    Demeter_CastAlternate: {
        id: 'Demeter_CastAlternate',
        name: 'Icy Flare',
        description: 'Your Cast damages foes around you and inflicts Chill.',
        god: God.Demeter,
        slot: BoonSlot.Cast,
        testRunAvailability: (runState: RunState) => {
            return runState.aspectId === AspectId.Shield_Beowulf;
        },
        iconPath: './Icons/Boon/Demeter/Demeter_Cast.webp',
    },
    Demeter_Dash: {
        id: 'Demeter_Dash',
        name: 'Mistral Dash',
        description: 'Your Dash shoots a gust ahead that inflicts Chill.',
        god: God.Demeter,
        slot: BoonSlot.Dash,
        iconPath: './Icons/Boon/Demeter/Demeter_Dash.webp',
    },
    Demeter_Aid: {
        id: 'Demeter_Aid',
        name: 'Demeter\'s Aid',
        description: 'Your Call creates a winter vortex for 5 Sec., deals damage every 0.25 Sec inflicting Chill.',
        god: God.Demeter,
        slot: BoonSlot.Aid,
        iconPath: './Icons/Boon/Demeter/Demeter_Aid.webp',
    },
    Demeter_FrozenTouch: {
        id: 'Demeter_FrozenTouch',
        name: 'Frozen Touch',
        description: 'After you take damage, damage and completely Chill your foe.',
        god: God.Demeter,
        iconPath: './Icons/Boon/Demeter/Demeter_FrozenTouch.webp',
    },
    Demeter_RareCrop: {
        id: 'Demeter_RareCrop',
        name: 'Rare Crop',
        description: 'Your Boons become Common, then gain Rarity every 3 Encounter(s).',
        god: God.Demeter,
        pommable: false,
        iconPath: './Icons/Boon/Demeter/Demeter_RareCrop.webp',
        // Can't PURGE, can't EXCHANGE, can't UPGRADE via Eurydice
    },
    Demeter_RavenousWill: {
        id: 'Demeter_RavenousWill',
        name: 'Ravenous Will',
        description: 'While you have no [Cast], take 10% less damage and deal more.',
        god: God.Demeter,
        pommable: false,
        iconPath: './Icons/Boon/Demeter/Demeter_RavenousWill.webp',
    },
    Demeter_NourishedSoul: {
        id: 'Demeter_NourishedSoul',
        name: 'Nourished Soul',
        description: 'Any [Heal] effects are more potent. Restore +30% now.',
        god: God.Demeter,
        pommable: false,
        iconPath: './Icons/Boon/Demeter/Demeter_NourishedSoul.webp',
        // Can't PURGE
    },
    Demeter_SnowBurst: {
        id: 'Demeter_SnowBurst',
        name: 'Snow Burst',
        description: 'Whenever you Cast, damage nearby foes and inflict Chill.',
        god: God.Demeter,
        iconPath: './Icons/Boon/Demeter/Demeter_SnowBurst.webp',
    },
    Demeter_ArcticBlast: {
        id: 'Demeter_ArcticBlast',
        name: 'Arctic Blast',
        description: 'Applying 10 stacks of Chill causes a blast, clearing the effect.',
        god: God.Demeter,
        pommable: false,
        requirementTest: hasAtLeastOneOf([ 'Demeter_Attack', 'Demeter_Special', 'Demeter_Dash', 'Demeter_Aid', 'Demeter_SnowBurst' ]),
        iconPath: './Icons/Boon/Demeter/Demeter_ArcticBlast.webp',
    },
    Demeter_KillingFreeze: {
        id: 'Demeter_KillingFreeze',
        name: 'Killing Freeze',
        description: 'When all foes are Chill afflicted, they become Slow and Decay.',
        god: God.Demeter,
        pommable: false,
        requirementTest: hasAtLeastOneOf([ 'Demeter_Attack', 'Demeter_Special', 'Demeter_Dash', 'Demeter_Aid', 'Demeter_SnowBurst' ]),
        iconPath: './Icons/Boon/Demeter/Demeter_KillingFreeze.webp',
    },
    Demeter_GlacialGlare: {
        id: 'Demeter_GlacialGlare',
        name: 'Glacial Glare',
        description: 'Your Cast fires longer and inflicts Chill.',
        god: God.Demeter,
        requirementTest: hasAtLeastOneOf([ 'Demeter_Cast' ]),
        testRunAvailability: (runState: RunState) => {
            return runState.aspectId !== AspectId.Shield_Beowulf;
        },
        iconPath: './Icons/Boon/Demeter/Demeter_GlacialGlare.webp',
    },
    Demeter_Legendary: {
        id: 'Demeter_Legendary',
        name: 'Winter Harvest',
        description: 'Chill-affected foes shatter at 10% HP, inflicting Chill nearby.',
        god: God.Demeter,
        rarityType: BoonRarityType.Legendary,
        pommable: false,
        requirementTest: hasAtLeastXOf(2, [ 'Demeter_RavenousWill', 'Demeter_ArcticBlast', 'Demeter_KillingFreeze' ]),
        iconPath: './Icons/Boon/Demeter/Demeter_Legendary.webp',
    },
};
