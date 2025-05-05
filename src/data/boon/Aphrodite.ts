import { allOf, hasBoon, notUsingAspect, oneOrMoreOf, usingAspect } from './requirementsTests';

import { Boon, BoonId } from './types';

import { BoonRarityType } from '../boonRarityType';
import { BoonSlot } from '../boonSlot';
import { GodId } from '../god';
import { AspectId } from '../weapon';

const Boons_Aphrodite: Array<Boon> = [
    {
        id: BoonId.Aphrodite_Attack,
        name: 'Heartbreak Strike',
        description: 'Your Attack deals more damage and inflicts Weak.',
        godId: GodId.Aphrodite,
        slot: BoonSlot.Attack,
        iconPath: './Icons/Boon/Aphrodite/Aphrodite_Attack.webp',
    },
    {
        id: BoonId.Aphrodite_Special,
        name: 'Heartbreak Flourish',
        description: 'Your Special deals more damage and inflicts Weak.',
        godId: GodId.Aphrodite,
        slot: BoonSlot.Special,
        iconPath: './Icons/Boon/Aphrodite/Aphrodite_Special.webp',
    },
    {
        id: BoonId.Aphrodite_Cast,
        name: 'Crush Shot',
        description: 'Your Cast is a wide, short-range blast that inflicts Weak.',
        godId: GodId.Aphrodite,
        slot: BoonSlot.Cast,
        testRunAvailability: notUsingAspect(AspectId.Shield_Beowulf),
        iconPath: './Icons/Boon/Aphrodite/Aphrodite_Cast.webp',
    },
    {
        id: BoonId.Aphrodite_CastAlternate,
        name: 'Passion Flare',
        description: 'Your Cast damages foes around you and inflicts Weak.',
        godId: GodId.Aphrodite,
        slot: BoonSlot.Cast,
        testRunAvailability: usingAspect(AspectId.Shield_Beowulf),
        iconPath: './Icons/Boon/Aphrodite/Aphrodite_Cast.webp',
    },
    {
        id: BoonId.Aphrodite_Dash,
        name: 'Passion Dash',
        description: 'Your Dash inflicts damage where you end up, inflicting Weak.',
        godId: GodId.Aphrodite,
        slot: BoonSlot.Dash,
        iconPath: './Icons/Boon/Aphrodite/Aphrodite_Dash.webp',
    },
    {
        id: BoonId.Aphrodite_Aid,
        name: 'Aphrodite\'s Aid',
        description: 'Your Call fires a seeking projectile that inflicts Charm.',
        godId: GodId.Aphrodite,
        slot: BoonSlot.Aid,
        iconPath: './Icons/Boon/Aphrodite/Aphrodite_Aid.webp',
    },
    {
        id: BoonId.Aphrodite_DyingLament,
        name: 'Dying Lament',
        description: 'When foes are slain, they damage nearby foes and inflict Weak.',
        godId: GodId.Aphrodite,
        iconPath: './Icons/Boon/Aphrodite/Aphrodite_DyingLament.webp',
    },
    {
        id: BoonId.Aphrodite_WaveOfDespair,
        name: 'Wave of Despair',
        description: 'After you take damage, damage nearby foes and inflict Weak.',
        godId: GodId.Aphrodite,
        iconPath: './Icons/Boon/Aphrodite/Aphrodite_WaveOfDespair.webp',
    },
    {
        id: BoonId.Aphrodite_LifeAffirmation,
        name: 'Life Affirmation',
        description: 'Any [Max Health] chamber rewards are worth more.',
        godId: GodId.Aphrodite,
        pommable: false,
        iconPath: './Icons/Boon/Aphrodite/Aphrodite_LifeAffirmation.webp',
    },
    {
        id: BoonId.Aphrodite_DifferentLeague,
        name: 'Different League',
        description: 'Resist some damage from nearby foes\' attacks.',
        godId: GodId.Aphrodite,
        iconPath: './Icons/Boon/Aphrodite/Aphrodite_DifferentLeague.webp',
    },
    {
        id: BoonId.Aphrodite_EmptyInside,
        name: 'Empty Inside',
        description: 'Your Weak effects have a longer duration.',
        godId: GodId.Aphrodite,
        testRequirements: oneOrMoreOf([
            hasBoon(BoonId.Aphrodite_Attack),
            hasBoon(BoonId.Aphrodite_Special),
            hasBoon(BoonId.Aphrodite_Cast),
            hasBoon(BoonId.Aphrodite_CastAlternate),
            hasBoon(BoonId.Aphrodite_Dash),
        ]),
        iconPath: './Icons/Boon/Aphrodite/Aphrodite_EmptyInside.webp',
    },
    {
        id: BoonId.Aphrodite_BrokenResolve,
        name: 'Broken Resolve',
        description: 'Your Weak effects are more potent.',
        godId: GodId.Aphrodite,
        pommable: false,
        testRequirements: oneOrMoreOf([
            hasBoon(BoonId.Aphrodite_Attack),
            hasBoon(BoonId.Aphrodite_Special),
            hasBoon(BoonId.Aphrodite_Cast),
            hasBoon(BoonId.Aphrodite_CastAlternate),
            hasBoon(BoonId.Aphrodite_Dash),
        ]),
        iconPath: './Icons/Boon/Aphrodite/Aphrodite_BrokenResolve.webp',
    },
    {
        id: BoonId.Aphrodite_BlownKiss,
        name: 'Blown Kiss',
        description: 'Your Cast shoots farther and is stronger against undamaged foes.',
        godId: GodId.Aphrodite,
        pommable: false,
        testRunAvailability: notUsingAspect(AspectId.Shield_Beowulf),
        testRequirements: oneOrMoreOf([
            hasBoon(BoonId.Aphrodite_Cast),
        ]),
        iconPath: './Icons/Boon/Aphrodite/Aphrodite_BlownKiss.webp',
    },
    {
        id: BoonId.Aphrodite_SweetSurrender,
        name: 'Sweet Surrender',
        description: 'Weak-afflicted foes are also more susceptible to damage.',
        godId: GodId.Aphrodite,
        testRequirements: oneOrMoreOf([
            hasBoon(BoonId.Aphrodite_Attack),
            hasBoon(BoonId.Aphrodite_Special),
            hasBoon(BoonId.Aphrodite_Cast),
            hasBoon(BoonId.Aphrodite_CastAlternate),
            hasBoon(BoonId.Aphrodite_Dash),
        ]),
        iconPath: './Icons/Boon/Aphrodite/Aphrodite_SweetSurrender.webp',
    },
    {
        id: BoonId.Aphrodite_Legendary,
        name: 'Unhealthy Fixation',
        description: 'Your Weak effects also have a 15% chance to Charm foes.',
        godId: GodId.Aphrodite,
        rarityType: BoonRarityType.Legendary,
        pommable: false,
        testRequirements: allOf([
            oneOrMoreOf([
                hasBoon(BoonId.Aphrodite_Attack),
                hasBoon(BoonId.Aphrodite_Special),
                hasBoon(BoonId.Aphrodite_Cast),
                hasBoon(BoonId.Aphrodite_CastAlternate),
                hasBoon(BoonId.Aphrodite_Dash),
            ]),
            oneOrMoreOf([
                hasBoon(BoonId.Aphrodite_EmptyInside),
                hasBoon(BoonId.Aphrodite_SweetSurrender),
                hasBoon(BoonId.Aphrodite_BrokenResolve),
            ]),
        ]),
        iconPath: './Icons/Boon/Aphrodite/Aphrodite_Legendary.webp',
    },
];

export default Boons_Aphrodite;
