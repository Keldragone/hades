import { Boon, BoonId } from './types';
import { allOf, hasBoon, hasBoonInSlot, notUsingAspect, oneOrMoreOf, usingAspect, usingKeepsake, xOrMoreOf } from './requirementsTests';

import { BoonRarityType } from '../boonRarityType';
import { BoonSlot } from '../boonSlot';
import { GodId } from '../god';
import { AspectId } from '../weapon';
import { KeepsakeId } from '../keepsake';

const Boons_Artemis: Array<Boon> = [
    {
        id: BoonId.Artemis_Attack,
        name: 'Deadly Strike',
        description: 'Your Attack is stronger, with a +15% chance to deal Critical damage.',
        godId: GodId.Artemis,
        slot: BoonSlot.Attack,
        iconPath: './Icons/Boon/Artemis/Artemis_Attack.webp',
    },
    {
        id: BoonId.Artemis_Special,
        name: 'Deadly Flourish',
        description: 'Your Special is stronger, with a +20% chance to deal Critical damage.',
        godId: GodId.Artemis,
        slot: BoonSlot.Special,
        iconPath: './Icons/Boon/Artemis/Artemis_Special.webp',
    },
    {
        id: BoonId.Artemis_Cast,
        name: 'True Shot',
        description: 'Your Cast seeks foes, with a 10% chance to deal Critical damage.',
        godId: GodId.Artemis,
        slot: BoonSlot.Cast,
        testRunAvailability: notUsingAspect(AspectId.Shield_Beowulf),
        iconPath: './Icons/Boon/Artemis/Artemis_Cast.webp',
    },
    {
        id: BoonId.Artemis_CastAlternate,
        name: 'Hunter\'s Flare',
        description: 'Your Cast damages foes around you, with a 10% Critical chance.',
        godId: GodId.Artemis,
        slot: BoonSlot.Cast,
        testRunAvailability: usingAspect(AspectId.Shield_Beowulf),
        iconPath: './Icons/Boon/Artemis/Artemis_Cast.webp',
    },
    {
        id: BoonId.Artemis_Dash,
        name: 'Hunter Dash',
        description: 'Your Dash-Strike deals more damage.',
        godId: GodId.Artemis,
        slot: BoonSlot.Dash,
        testRunAvailability: notUsingAspect(AspectId.Rail_Lucifer),
        iconPath: './Icons/Boon/Artemis/Artemis_Dash.webp',
    },
    {
        id: BoonId.Artemis_Aid,
        name: 'Artemis\' Aid',
        description: 'Your Call fires a seeking arrow with +35% Critical chance.',
        godId: GodId.Artemis,
        slot: BoonSlot.Aid,
        iconPath: './Icons/Boon/Artemis/Artemis_Aid.webp',
    },
    {
        id: BoonId.Artemis_PressurePoints,
        name: 'Pressure Points',
        description: 'Any damage you deal has a chance to be Critical.',
        godId: GodId.Artemis,
        iconPath: './Icons/Boon/Artemis/Artemis_PressurePoints.webp',
    },
    {
        id: BoonId.Artemis_ExitWounds,
        name: 'Exit Wounds',
        description: 'Your foes take damage when your [Cast] stuck in them in dislodged.',
        godId: GodId.Artemis,
        testRunAvailability: notUsingAspect(AspectId.Shield_Beowulf),
        testRequirements: oneOrMoreOf([
            hasBoon(BoonId.Artemis_Cast),
            hasBoon(BoonId.Poseidon_Cast),
            hasBoon(BoonId.Poseidon_CastAlternate),
            hasBoon(BoonId.Zeus_Cast),
            hasBoon(BoonId.Aphrodite_Cast),
            hasBoon(BoonId.Athena_Cast),
        ]),
        iconPath: './Icons/Boon/Artemis/Artemis_ExitWounds.webp',
    },
    {
        id: BoonId.Artemis_CleanKill,
        name: 'Clean Kill',
        description: 'Your Critical effects deal even more damage.',
        godId: GodId.Artemis,
        testRequirements: oneOrMoreOf([
            hasBoon(BoonId.Artemis_Attack),
            hasBoon(BoonId.Artemis_Special),
            hasBoon(BoonId.Artemis_Cast),
            hasBoon(BoonId.Artemis_Aid),
            hasBoon(BoonId.Artemis_PressurePoints),
        ]),
        iconPath: './Icons/Boon/Artemis/Artemis_CleanKill.webp',
    },
    {
        id: BoonId.Artemis_SupportFire,
        name: 'Support Fire',
        description: 'After you Cast, or hit with an Attack or Special, fire a seeking arrow.',
        godId: GodId.Artemis,
        testRequirements: oneOrMoreOf([
            hasBoon(BoonId.Artemis_Attack),
            hasBoon(BoonId.Artemis_Special),
            hasBoon(BoonId.Artemis_Cast),
            hasBoon(BoonId.Artemis_CastAlternate),
            hasBoon(BoonId.Artemis_Dash),
            hasBoon(BoonId.Artemis_Aid),
            hasBoon(BoonId.Artemis_PressurePoints),
        ]),
        iconPath: './Icons/Boon/Artemis/Artemis_SupportFire.webp',
    },
    {
        id: BoonId.Artemis_HideBreaker,
        name: 'Hide Breaker',
        description: 'Your Critical effects deal even more damage to Armor.',
        godId: GodId.Artemis,
        testRequirements: oneOrMoreOf([
            hasBoon(BoonId.Artemis_Attack),
            hasBoon(BoonId.Artemis_Special),
            hasBoon(BoonId.Artemis_Cast),
            hasBoon(BoonId.Artemis_Aid),
            hasBoon(BoonId.Artemis_PressurePoints),
        ]),
        iconPath: './Icons/Boon/Artemis/Artemis_HideBreaker.webp',
    },
    {
        id: BoonId.Artemis_HunterInstinct,
        name: 'Hunter Instinct',
        description: 'Your God Gauge charges faster when you deal Critical damage.',
        godId: GodId.Artemis,
        testRequirements: allOf([
            oneOrMoreOf([
                hasBoon(BoonId.Artemis_Attack),
                hasBoon(BoonId.Artemis_Special),
                hasBoon(BoonId.Artemis_Cast),
                hasBoon(BoonId.Artemis_PressurePoints),
            ]),
            oneOrMoreOf([
                hasBoonInSlot(BoonSlot.Aid),
                usingKeepsake(KeepsakeId.Hades),
            ]),
        ]),
        iconPath: './Icons/Boon/Artemis/Artemis_HunterInstinct.webp',
    },
    {
        id: BoonId.Artemis_HuntersMark,
        name: 'Hunter\'s Mark',
        description: 'After you deal Critical damage to a foe, a foe near it is Marked.',
        godId: GodId.Artemis,
        testRequirements: oneOrMoreOf([
            hasBoon(BoonId.Artemis_Attack),
            hasBoon(BoonId.Artemis_Special),
            hasBoon(BoonId.Artemis_Cast),
            hasBoon(BoonId.Artemis_Aid),
            hasBoon(BoonId.Artemis_PressurePoints),
        ]),
        iconPath: './Icons/Boon/Artemis/Artemis_HuntersMark.webp',
    },
    {
        id: BoonId.Artemis_Legendary,
        name: 'Fully Loaded',
        description: 'You gain extra [Cast] for your Cast.',
        godId: GodId.Artemis,
        rarityType: BoonRarityType.Legendary,
        pommable: false,
        testRequirements: xOrMoreOf(2, [
            hasBoon(BoonId.Artemis_SupportFire),
            hasBoon(BoonId.Artemis_PressurePoints),
            hasBoon(BoonId.Artemis_ExitWounds),
        ]),
        iconPath: './Icons/Boon/Artemis/Artemis_Legendary.webp',
    },
];

export default Boons_Artemis;
