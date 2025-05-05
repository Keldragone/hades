import { hasAtLeastOneOf, satisfiesAllOf } from './requirementsTests';
import { BoonInfo } from './types';

import { BoonRarityType } from '../boonRarityType';
import { BoonSlot } from '../boonSlot';
import { God } from '../god';
import { RunState } from '../runState';
import { AspectId } from '../weapon';

export const BoonData_Dionysus: { [ id: string ]: BoonInfo } = {
    Dionysus_Attack: {
        id: 'Dionysus_Attack',
        name: 'Drunken Strike',
        description: 'Your Attack inflicts Hangover.',
        god: God.Dionysus,
        slot: BoonSlot.Attack,
        iconPath: './Icons/Boon/Dionysus/Dionysus_Attack.webp',
    },
    Dionysus_Special: {
        id: 'Dionysus_Special',
        name: 'Drunken Flourish',
        description: 'Your Special inflicts Hangover.',
        god: God.Dionysus,
        slot: BoonSlot.Special,
        iconPath: './Icons/Boon/Dionysus/Dionysus_Special.webp',
    },
    Dionysus_Cast: {
        id: 'Dionysus_Cast',
        name: 'Trippy Shot',
        description: 'Your Cast lobs a projectile that bursts into Festive Fog.',
        god: God.Dionysus,
        slot: BoonSlot.Cast,
        testRunAvailability: (runState: RunState) => {
            return (
                runState.aspectId !== AspectId.Shield_Beowulf
                && runState.aspectId !== AspectId.Bow_Hera
            );
        },
        iconPath: './Icons/Boon/Dionysus/Dionysus_Cast.webp',
    },
    Dionysus_CastAlternate: {
        id: 'Dionysus_CastAlternate',
        name: 'Trippy Flare',
        description: 'Your Cast damages foes around you, leaving behind Festive Fog.',
        god: God.Dionysus,
        slot: BoonSlot.Cast,
        testRunAvailability: (runState: RunState) => {
            return (
                runState.aspectId === AspectId.Shield_Beowulf
                || runState.aspectId === AspectId.Bow_Hera
            );
        },
        iconPath: './Icons/Boon/Dionysus/Dionysus_Cast.webp',
    },
    Dionysus_Dash: {
        id: 'Dionysus_Dash',
        name: 'Drunken Dash',
        description: 'Your Dash inflicts foes near you with Hangover.',
        god: God.Dionysus,
        slot: BoonSlot.Dash,
        iconPath: './Icons/Boon/Dionysus/Dionysus_Dash.webp',
    },
    Dionysus_Aid: {
        id: 'Dionysus_Aid',
        name: 'Dionysus\' Aid',
        description: 'Your Call inflicts Hangover to foes all around you for 1.5 Sec.',
        god: God.Dionysus,
        slot: BoonSlot.Aid,
        iconPath: './Icons/Boon/Dionysus/Dionysus_Aid.webp',
    },
    Dionysus_AfterParty: {
        id: 'Dionysus_AfterParty',
        name: 'After Party',
        description: 'If your [Health] is low after Encounters, restore to the threshold.',
        god: God.Dionysus,
        pommable: false,
        iconPath: './Icons/Boon/Dionysus/Dionysus_AfterParty.webp',
    },
    Dionysus_PositiveOutlook: {
        id: 'Dionysus_PositiveOutlook',
        name: 'Positive Outlook',
        description: 'Take less damage while at 40% [Health] or below.',
        god: God.Dionysus,
        iconPath: './Icons/Boon/Dionysus/Dionysus_PositiveOutlook.webp',
    },
    Dionysus_PremiumVintage: {
        id: 'Dionysus_PremiumVintage',
        name: 'Premium Vintage',
        description: 'Gain [Max Health] when you pick up [Nectar]. Receive 1 [Nectar] now.',
        god: God.Dionysus,
        pommable: false,
        iconPath: './Icons/Boon/Dionysus/Dionysus_PremiumVintage.webp',
        // Can't PURGE
    },
    Dionysus_StrongDrink: {
        id: 'Dionysus_StrongDrink',
        name: 'Strong Drink',
        description: 'Using a Fountain restores all [Health] and gives you bonus damage.',
        god: God.Dionysus,
        pommable: false,
        iconPath: './Icons/Boon/Dionysus/Dionysus_StrongDrink.webp',
    },
    Dionysus_BadInfluence: {
        id: 'Dionysus_BadInfluence',
        name: 'Bad Influence',
        description: 'Deal more damage while 3 foes are Hangover-afflicted.',
        god: God.Dionysus,
        requirementTest: hasAtLeastOneOf([ 'Dionysus_Attack', 'Dionysus_Special', 'Dionysus_Dash', 'Dionysus_Aid' ]),
        iconPath: './Icons/Boon/Dionysus/Dionysus_BadInfluence.webp',
    },
    Dionysus_NumbingSensation: {
        id: 'Dionysus_NumbingSensation',
        name: 'Numbing Sensation',
        description: 'Your Hangover effects also make foes move slower.',
        god: God.Dionysus,
        requirementTest: hasAtLeastOneOf([ 'Dionysus_Attack', 'Dionysus_Special', 'Dionysus_Dash', 'Dionysus_Aid' ]),
        iconPath: './Icons/Boon/Dionysus/Dionysus_NumbingSensation.webp',
    },
    Dionysus_PeerPressure: {
        id: 'Dionysus_PeerPressure',
        name: 'Peer Pressure',
        description: 'Hangover-afflicted foes contaminate other nearby foes every 4 Sec.',
        god: God.Dionysus,
        requirementTest: hasAtLeastOneOf([ 'Dionysus_Attack', 'Dionysus_Special', 'Dionysus_Dash' ]),
        iconPath: './Icons/Boon/Dionysus/Dionysus_PeerPressure.webp',
    },
    Dionysus_HighTolerance: {
        id: 'Dionysus_HighTolerance',
        name: 'High Tolerance',
        description: 'Take less damage while standing in Festive Fog.',
        god: God.Dionysus,
        requirementTest: hasAtLeastOneOf([ 'Dionysus_Cast' ]),
        iconPath: './Icons/Boon/Dionysus/Dionysus_HighTolerance.webp',
    },
    Dionysus_Legendary: {
        id: 'Dionysus_Legendary',
        name: 'Black Out',
        description: 'Hangover-afflicted foes take bonus damage in Festive Fog.',
        god: God.Dionysus,
        rarityType: BoonRarityType.Legendary,
        pommable: false,
        requirementTest: satisfiesAllOf([
            hasAtLeastOneOf([ 'Dionysus_Attack', 'Dionysus_Special', 'Dionysus_Dash', 'Dionysus_Aid' ]),
            hasAtLeastOneOf([ 'Dionysus_Cast' ]),
        ]),
        iconPath: './Icons/Boon/Dionysus/Dionysus_Legendary.webp',
    },
};
