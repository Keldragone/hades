import { allOf, hasBoon, noneOf, oneOrMoreOf, usingAspect } from './requirementsTests';
import { Boon, BoonId } from './types';

import { BoonRarityType } from '../boonRarityType';
import { BoonSlot } from '../boonSlot';
import { GodId } from '../god';
import { AspectId } from '../weapon';

const Boons_Dionysus: Array<Boon> = [
    {
        id: BoonId.Dionysus_Attack,
        name: 'Drunken Strike',
        description: 'Your Attack inflicts Hangover.',
        godId: GodId.Dionysus,
        slot: BoonSlot.Attack,
        iconPath: './Icons/Boon/Dionysus/Dionysus_Attack.webp',
    },
    {
        id: BoonId.Dionysus_Special,
        name: 'Drunken Flourish',
        description: 'Your Special inflicts Hangover.',
        godId: GodId.Dionysus,
        slot: BoonSlot.Special,
        iconPath: './Icons/Boon/Dionysus/Dionysus_Special.webp',
    },
    {
        id: BoonId.Dionysus_Cast,
        name: 'Trippy Shot',
        description: 'Your Cast lobs a projectile that bursts into Festive Fog.',
        godId: GodId.Dionysus,
        slot: BoonSlot.Cast,
        testRunAvailability: noneOf([
            usingAspect(AspectId.Shield_Beowulf),
            usingAspect(AspectId.Bow_Hera),
        ]),
        iconPath: './Icons/Boon/Dionysus/Dionysus_Cast.webp',
    },
    {
        id: BoonId.Dionysus_CastAlternate,
        name: 'Trippy Flare',
        description: 'Your Cast damages foes around you, leaving behind Festive Fog.',
        godId: GodId.Dionysus,
        slot: BoonSlot.Cast,
        testRunAvailability: oneOrMoreOf([
            usingAspect(AspectId.Shield_Beowulf),
            usingAspect(AspectId.Bow_Hera),
        ]),
        iconPath: './Icons/Boon/Dionysus/Dionysus_Cast.webp',
    },
    {
        id: BoonId.Dionysus_Dash,
        name: 'Drunken Dash',
        description: 'Your Dash inflicts foes near you with Hangover.',
        godId: GodId.Dionysus,
        slot: BoonSlot.Dash,
        iconPath: './Icons/Boon/Dionysus/Dionysus_Dash.webp',
    },
    {
        id: BoonId.Dionysus_Aid,
        name: 'Dionysus\' Aid',
        description: 'Your Call inflicts Hangover to foes all around you for 1.5 Sec.',
        godId: GodId.Dionysus,
        slot: BoonSlot.Aid,
        iconPath: './Icons/Boon/Dionysus/Dionysus_Aid.webp',
    },
    {
        id: BoonId.Dionysus_PremiumVintage,
        name: 'Premium Vintage',
        description: 'Gain [Max Health] when you pick up [Nectar]. Receive 1 [Nectar] now.',
        godId: GodId.Dionysus,
        pommable: false,
        iconPath: './Icons/Boon/Dionysus/Dionysus_PremiumVintage.webp',
        // Can't PURGE
    },
    {
        id: BoonId.Dionysus_AfterParty,
        name: 'After Party',
        description: 'If your [Health] is low after Encounters, restore to the threshold.',
        godId: GodId.Dionysus,
        pommable: false,
        iconPath: './Icons/Boon/Dionysus/Dionysus_AfterParty.webp',
    },
    {
        id: BoonId.Dionysus_StrongDrink,
        name: 'Strong Drink',
        description: 'Using a Fountain restores all [Health] and gives you bonus damage.',
        godId: GodId.Dionysus,
        pommable: false,
        iconPath: './Icons/Boon/Dionysus/Dionysus_StrongDrink.webp',
    },
    {
        id: BoonId.Dionysus_PositiveOutlook,
        name: 'Positive Outlook',
        description: 'Take less damage while at 40% [Health] or below.',
        godId: GodId.Dionysus,
        iconPath: './Icons/Boon/Dionysus/Dionysus_PositiveOutlook.webp',
    },
    {
        id: BoonId.Dionysus_HighTolerance,
        name: 'High Tolerance',
        description: 'Take less damage while standing in Festive Fog.',
        godId: GodId.Dionysus,
        testRequirements: oneOrMoreOf([
            hasBoon(BoonId.Dionysus_Cast),
            hasBoon(BoonId.Dionysus_CastAlternate),
        ]),
        iconPath: './Icons/Boon/Dionysus/Dionysus_HighTolerance.webp',
    },
    {
        id: BoonId.Dionysus_BadInfluence,
        name: 'Bad Influence',
        description: 'Deal more damage while 3 foes are Hangover-afflicted.',
        godId: GodId.Dionysus,
        testRequirements: oneOrMoreOf([
            hasBoon(BoonId.Dionysus_Dash),
            hasBoon(BoonId.Dionysus_Attack),
            hasBoon(BoonId.Dionysus_Special),
            hasBoon(BoonId.Dionysus_Aid),
        ]),
        iconPath: './Icons/Boon/Dionysus/Dionysus_BadInfluence.webp',
    },
    {
        id: BoonId.Dionysus_NumbingSensation,
        name: 'Numbing Sensation',
        description: 'Your Hangover effects also make foes move slower.',
        godId: GodId.Dionysus,
        testRequirements: oneOrMoreOf([
            hasBoon(BoonId.Dionysus_Dash),
            hasBoon(BoonId.Dionysus_Attack),
            hasBoon(BoonId.Dionysus_Special),
            hasBoon(BoonId.Dionysus_Aid),
        ]),
        iconPath: './Icons/Boon/Dionysus/Dionysus_NumbingSensation.webp',
    },
    {
        id: BoonId.Dionysus_PeerPressure,
        name: 'Peer Pressure',
        description: 'Hangover-afflicted foes contaminate other nearby foes every 4 Sec.',
        godId: GodId.Dionysus,
        testRequirements: oneOrMoreOf([
            hasBoon(BoonId.Dionysus_Dash),
            hasBoon(BoonId.Dionysus_Attack),
            hasBoon(BoonId.Dionysus_Special),
        ]),
        iconPath: './Icons/Boon/Dionysus/Dionysus_PeerPressure.webp',
    },
    {
        id: BoonId.Dionysus_Legendary,
        name: 'Black Out',
        description: 'Hangover-afflicted foes take bonus damage in Festive Fog.',
        godId: GodId.Dionysus,
        rarityType: BoonRarityType.Legendary,
        pommable: false,
        testRequirements: allOf([
            oneOrMoreOf([
                hasBoon(BoonId.Dionysus_Cast),
                hasBoon(BoonId.Dionysus_CastAlternate),
            ]),
            oneOrMoreOf([
                hasBoon(BoonId.Dionysus_Attack),
                hasBoon(BoonId.Dionysus_Special),
                hasBoon(BoonId.Dionysus_Aid),
                hasBoon(BoonId.Dionysus_Dash),
            ]),
        ]),
        iconPath: './Icons/Boon/Dionysus/Dionysus_Legendary.webp',
    },
];

export default Boons_Dionysus;
