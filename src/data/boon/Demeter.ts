import { hasAtLeastOneOf, hasAtLeastXOf } from './requirementsTests';

import { Boon, BoonId } from './types';

import { BoonRarityType } from '../boonRarityType';
import { BoonSlot } from '../boonSlot';
import { GodId } from '../god';
import { RunState } from '../runState';
import { AspectId } from '../weapon';

const Boons_Demeter: Array<Boon> = [
    {
        id: BoonId.Demeter_Attack,
        name: 'Frost Strike',
        description: 'Your Attack is stronger and inflicts Chill.',
        godId: GodId.Demeter,
        slot: BoonSlot.Attack,
        iconPath: './Icons/Boon/Demeter/Demeter_Attack.webp',
    },
    {
        id: BoonId.Demeter_Special,
        name: 'Frost Flourish',
        description: 'Your Special is stronger and inflicts Chill.',
        godId: GodId.Demeter,
        slot: BoonSlot.Special,
        iconPath: './Icons/Boon/Demeter/Demeter_Special.webp',
    },
    {
        id: BoonId.Demeter_Cast,
        name: 'Crystal Beam',
        description: 'Your Cast drops a crystal that fires a beam straight ahead for 5 Sec.',
        godId: GodId.Demeter,
        slot: BoonSlot.Cast,
        testRunAvailability: (runState: RunState) => {
            return runState.aspectId !== AspectId.Shield_Beowulf;
        },
        iconPath: './Icons/Boon/Demeter/Demeter_Cast.webp',
    },
    {
        id: BoonId.Demeter_CastAlternate,
        name: 'Icy Flare',
        description: 'Your Cast damages foes around you and inflicts Chill.',
        godId: GodId.Demeter,
        slot: BoonSlot.Cast,
        testRunAvailability: (runState: RunState) => {
            return runState.aspectId === AspectId.Shield_Beowulf;
        },
        iconPath: './Icons/Boon/Demeter/Demeter_Cast.webp',
    },
    {
        id: BoonId.Demeter_Dash,
        name: 'Mistral Dash',
        description: 'Your Dash shoots a gust ahead that inflicts Chill.',
        godId: GodId.Demeter,
        slot: BoonSlot.Dash,
        iconPath: './Icons/Boon/Demeter/Demeter_Dash.webp',
    },
    {
        id: BoonId.Demeter_Aid,
        name: 'Demeter\'s Aid',
        description: 'Your Call creates a winter vortex for 5 Sec., deals damage every 0.25 Sec inflicting Chill.',
        godId: GodId.Demeter,
        slot: BoonSlot.Aid,
        iconPath: './Icons/Boon/Demeter/Demeter_Aid.webp',
    },
    {
        id: BoonId.Demeter_FrozenTouch,
        name: 'Frozen Touch',
        description: 'After you take damage, damage and completely Chill your foe.',
        godId: GodId.Demeter,
        iconPath: './Icons/Boon/Demeter/Demeter_FrozenTouch.webp',
    },
    {
        id: BoonId.Demeter_RareCrop,
        name: 'Rare Crop',
        description: 'Your Boons become Common, then gain Rarity every 3 Encounter(s).',
        godId: GodId.Demeter,
        pommable: false,
        iconPath: './Icons/Boon/Demeter/Demeter_RareCrop.webp',
        // Can't PURGE, can't EXCHANGE, can't UPGRADE via Eurydice
    },
    {
        id: BoonId.Demeter_RavenousWill,
        name: 'Ravenous Will',
        description: 'While you have no [Cast], take 10% less damage and deal more.',
        godId: GodId.Demeter,
        pommable: false,
        iconPath: './Icons/Boon/Demeter/Demeter_RavenousWill.webp',
    },
    {
        id: BoonId.Demeter_NourishedSoul,
        name: 'Nourished Soul',
        description: 'Any [Heal] effects are more potent. Restore +30% now.',
        godId: GodId.Demeter,
        pommable: false,
        iconPath: './Icons/Boon/Demeter/Demeter_NourishedSoul.webp',
        // Can't PURGE
    },
    {
        id: BoonId.Demeter_SnowBurst,
        name: 'Snow Burst',
        description: 'Whenever you Cast, damage nearby foes and inflict Chill.',
        godId: GodId.Demeter,
        iconPath: './Icons/Boon/Demeter/Demeter_SnowBurst.webp',
    },
    {
        id: BoonId.Demeter_ArcticBlast,
        name: 'Arctic Blast',
        description: 'Applying 10 stacks of Chill causes a blast, clearing the effect.',
        godId: GodId.Demeter,
        pommable: false,
        requirementTest: hasAtLeastOneOf([ 'Demeter_Attack', 'Demeter_Special', 'Demeter_Dash', 'Demeter_Aid', 'Demeter_SnowBurst' ]),
        iconPath: './Icons/Boon/Demeter/Demeter_ArcticBlast.webp',
    },
    {
        id: BoonId.Demeter_KillingFreeze,
        name: 'Killing Freeze',
        description: 'When all foes are Chill afflicted, they become Slow and Decay.',
        godId: GodId.Demeter,
        pommable: false,
        requirementTest: hasAtLeastOneOf([ 'Demeter_Attack', 'Demeter_Special', 'Demeter_Dash', 'Demeter_Aid', 'Demeter_SnowBurst' ]),
        iconPath: './Icons/Boon/Demeter/Demeter_KillingFreeze.webp',
    },
    {
        id: BoonId.Demeter_GlacialGlare,
        name: 'Glacial Glare',
        description: 'Your Cast fires longer and inflicts Chill.',
        godId: GodId.Demeter,
        requirementTest: hasAtLeastOneOf([ 'Demeter_Cast' ]),
        testRunAvailability: (runState: RunState) => {
            return runState.aspectId !== AspectId.Shield_Beowulf;
        },
        iconPath: './Icons/Boon/Demeter/Demeter_GlacialGlare.webp',
    },
    {
        id: BoonId.Demeter_Legendary,
        name: 'Winter Harvest',
        description: 'Chill-affected foes shatter at 10% HP, inflicting Chill nearby.',
        godId: GodId.Demeter,
        rarityType: BoonRarityType.Legendary,
        pommable: false,
        requirementTest: hasAtLeastXOf(2, [ 'Demeter_RavenousWill', 'Demeter_ArcticBlast', 'Demeter_KillingFreeze' ]),
        iconPath: './Icons/Boon/Demeter/Demeter_Legendary.webp',
    },
];

export default Boons_Demeter;
