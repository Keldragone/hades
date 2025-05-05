import { hasAtLeastOneOf } from './requirementsTests';

import { Boon, BoonId } from './types';

import { BoonRarityType } from '../boonRarityType';
import { BoonSlot } from '../boonSlot';
import { GodId } from '../god';
import { RunState } from '../runState';
import { AspectId } from '../weapon';

const Boons_Ares: Array<Boon> = [
    {
        id: BoonId.Ares_Attack,
        name: 'Curse of Agony',
        description: 'Your Attack inflicts Doom.',
        godId: GodId.Ares,
        slot: BoonSlot.Attack,
        iconPath: './Icons/Boon/Ares/Ares_Attack.webp',
    },
    {
        id: BoonId.Ares_Special,
        name: 'Curse of Pain',
        description: 'Your Special inflicts Doom.',
        godId: GodId.Ares,
        slot: BoonSlot.Special,
        iconPath: './Icons/Boon/Ares/Ares_Special.webp',
    },
    {
        id: BoonId.Ares_Cast,
        name: 'Slicing Shot',
        description: 'Your Cast sends a Blade Rift hurling ahead.',
        godId: GodId.Ares,
        slot: BoonSlot.Cast,
        testRunAvailability: (runState: RunState) => {
            return runState.aspectId !== AspectId.Shield_Beowulf;
        },
        iconPath: './Icons/Boon/Ares/Ares_Cast.webp',
    },
    {
        id: BoonId.Ares_CastAlternate,
        name: 'Slicing Flare',
        description: 'Your Cast sends a large Blade Rift hurling ahead for a brief time.',
        godId: GodId.Ares,
        slot: BoonSlot.Cast,
        testRunAvailability: (runState: RunState) => {
            return runState.aspectId === AspectId.Shield_Beowulf;
        },
        iconPath: './Icons/Boon/Ares/Ares_Cast.webp',
    },
    {
        id: BoonId.Ares_Dash,
        name: 'Blade Dash',
        description: 'Your Dash creates a Blade Rift where you started.',
        godId: GodId.Ares,
        slot: BoonSlot.Dash,
        iconPath: './Icons/Boon/Ares/Ares_Dash.webp',
    },
    {
        id: BoonId.Ares_Aid,
        name: 'Ares\' Aid',
        description: 'Your Call turns you into an Impervious Blade Rift for 1.2 Sec.',
        godId: GodId.Ares,
        slot: BoonSlot.Aid,
        iconPath: './Icons/Boon/Ares/Ares_Aid.webp',
    },
    {
        id: BoonId.Ares_CurseOfVengeance,
        name: 'Curse of Vengeance',
        description: 'After you take damage, inflict Doom on surrounding foes.',
        godId: GodId.Ares,
        iconPath: './Icons/Boon/Ares/Ares_CurseOfVengeance.webp',
    },
    {
        id: BoonId.Ares_UrgeToKill,
        name: 'Urge to Kill',
        description: 'Your Attack, Special, and Cast deal more damage.',
        godId: GodId.Ares,
        iconPath: './Icons/Boon/Ares/Ares_UrgeToKill.webp',
    },
    {
        id: BoonId.Ares_BattleRage,
        name: 'Battle Rage',
        description: 'After slaying a foe, your next Attack or Special deals more damage.',
        godId: GodId.Ares,
        iconPath: './Icons/Boon/Ares/Ares_BattleRage.webp',
    },
    {
        id: BoonId.Ares_BloodFrenzy,
        name: 'Blood Frenzy',
        description: 'After using Death Defiance, deal more damage that encounter.',
        godId: GodId.Ares,
        pommable: false,
        iconPath: './Icons/Boon/Ares/Ares_BloodFrenzy.webp',
    },
    {
        id: BoonId.Ares_BlackMetal,
        name: 'Black Metal',
        description: 'Your Blade Rift powers deal damage in a wider area.',
        godId: GodId.Ares,
        requirementTest: hasAtLeastOneOf([ 'Ares_Cast', 'Ares_Dash', 'Ares_Aid' ]),
        iconPath: './Icons/Boon/Ares/Ares_BlackMetal.webp',
    },
    {
        id: BoonId.Ares_EngulfingVortex,
        name: 'Engulfing Vortex',
        description: 'Your Blade Rift effects last longer and pull foes in.',
        godId: GodId.Ares,
        pommable: false,
        requirementTest: hasAtLeastOneOf([ 'Ares_Cast', 'Ares_Dash', 'Ares_Aid' ]),
        iconPath: './Icons/Boon/Ares/Ares_EngulfingVortex.webp',
    },
    {
        id: BoonId.Ares_DireMisfortune,
        name: 'Dire Misfortune',
        description: 'Your Doom effects deal more damage when applied multiple times.',
        godId: GodId.Ares,
        pommable: false,
        requirementTest: hasAtLeastOneOf([ 'Ares_Attack', 'Ares_Special' ]),
        iconPath: './Icons/Boon/Ares/Ares_DireMisfortune.webp',
    },
    {
        id: BoonId.Ares_ImpendingDoom,
        name: 'Impending Doom',
        description: 'Your Doom effects deal more damage, but take +0.5 Sec. to activate.',
        godId: GodId.Ares,
        requirementTest: hasAtLeastOneOf([ 'Ares_Attack', 'Ares_Special', 'Ares_CurseOfVengeance' ]),
        iconPath: './Icons/Boon/Ares/Ares_ImpendingDoom.webp',
    },
    {
        id: BoonId.Ares_Legendary,
        name: 'Vicious Cycle',
        description: 'Your Blade Rift effects deal more damage for each consecutive hit.',
        godId: GodId.Ares,
        rarityType: BoonRarityType.Legendary,
        pommable: false,
        requirementTest: hasAtLeastOneOf([ 'Ares_BlackMetal', 'Ares_EngulfingVortex' ]),
        iconPath: './Icons/Boon/Ares/Ares_Legendary.webp',
    },
];

export default Boons_Ares;
