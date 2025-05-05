import { hasAtLeastOneOf } from './requirementsTests';

import { BoonInfo } from './types';

import { BoonRarityType } from '../boonRarityType';
import { BoonSlot } from '../boonSlot';
import { God } from '../god';
import { RunState } from '../runState';
import { AspectId } from '../weapon';

export const BoonData_Athena: { [ id: string ]: BoonInfo } = {
    Athena_Attack: {
        id: 'Athena_Attack',
        name: 'Divine Strike',
        description: 'Your Attack is stronger, and can Deflect.',
        god: God.Athena,
        slot: BoonSlot.Attack,
        iconPath: './Icons/Boon/Athena/Athena_Attack.webp',
    },
    Athena_Special: {
        id: 'Athena_Special',
        name: 'Divine Flourish',
        description: 'Your Special is stronger, and can Deflect.',
        god: God.Athena,
        slot: BoonSlot.Special,
        iconPath: './Icons/Boon/Athena/Athena_Special.webp',
    },
    Athena_Cast: {
        id: 'Athena_Cast',
        name: 'Phalanx Shot',
        description: 'Your Cast damages foes in a small area, and can Deflect.',
        god: God.Athena,
        slot: BoonSlot.Cast,
        testRunAvailability: (runState: RunState) => {
            return runState.aspectId !== AspectId.Shield_Beowulf;
        },
        iconPath: './Icons/Boon/Athena/Athena_Cast.webp',
    },
    Athena_CastAlternate: {
        id: 'Athena_CastAlternate',
        name: 'Phalanx Flame',
        description: 'Your Cast damages foes around you, and can Deflect.',
        god: God.Athena,
        slot: BoonSlot.Cast,
        testRunAvailability: (runState: RunState) => {
            return runState.aspectId === AspectId.Shield_Beowulf;
        },
        iconPath: './Icons/Boon/Athena/Athena_Cast.webp',
    },
    Athena_Dash: {
        id: 'Athena_Dash',
        name: 'Divine Dash',
        description: 'Your Dash deals damage and can Deflect.',
        god: God.Athena,
        slot: BoonSlot.Dash,
        iconPath: './Icons/Boon/Athena/Athena_Dash.webp',
    },
    Athena_Aid: {
        id: 'Athena_Aid',
        name: 'Athena\'s Aid',
        description: 'Your Call briefly makes you Invulnerable and Deflect all attacks.',
        god: God.Athena,
        slot: BoonSlot.Aid,
        iconPath: './Icons/Boon/Athena/Athena_Aid.webp',
    },
    Athena_HolyShield: {
        id: 'Athena_HolyShield',
        name: 'Holy Shield',
        description: 'After you take damage, damage nearby foes and briefly Deflect.',
        god: God.Athena,
        iconPath: './Icons/Boon/Athena/Athena_HolyShield.webp',
    },
    Athena_BronzeSkin: {
        id: 'Athena_BronzeSkin',
        name: 'Bronze Skin',
        description: 'Resist damage from foes\' attacks.',
        god: God.Athena,
        iconPath: './Icons/Boon/Athena/Athena_BronzeSkin.webp',
    },
    Athena_SureFooting: {
        id: 'Athena_SureFooting',
        name: 'Sure Footing',
        description: 'Resist damage from Traps.',
        god: God.Athena,
        pommable: false,
        iconPath: './Icons/Boon/Athena/Athena_SureFooting.webp',
    },
    Athena_ProudBearing: {
        id: 'Athena_ProudBearing',
        name: 'Proud Bearing',
        description: 'You begin each Encounter with your God Gauge partly full.',
        god: God.Athena,
        requirementTest: hasAtLeastOneOf([ 'Aphrodite_Aid', 'Ares_Aid', 'Artemis_Aid', 'Athena_Aid', 'Demeter_Aid', 'Dionysus_Aid', 'Poseidon_Aid', 'Zeus_Aid' ]), // AND HADES AID!!!!!
        iconPath: './Icons/Boon/Athena/Athena_ProudBearing.webp',
    },
    Athena_BlindingFlash: {
        id: 'Athena_BlindingFlash',
        name: 'Blinding Flash',
        description: 'Your abilities that can Deflect also make foes Exposed.',
        god: God.Athena,
        requirementTest: hasAtLeastOneOf([ 'Athena_Attack', 'Athena_Special', 'Athena_Cast', 'Athena_Dash' ]),
        iconPath: './Icons/Boon/Athena/Athena_BlindingFlash.webp',
    },
    Athena_BrilliantRiposte: {
        id: 'Athena_BrilliantRiposte',
        name: 'Brilliant Riposte',
        description: 'When you Deflect attacks, they deal more damage.',
        god: God.Athena,
        requirementTest: hasAtLeastOneOf([ 'Athena_Attack', 'Athena_Special', 'Athena_Dash', 'Athena_HolyShield' ]),
        iconPath: './Icons/Boon/Athena/Athena_BrilliantRiposte.webp',
    },
    Athena_DeathlessStand: {
        id: 'Athena_DeathlessStand',
        name: 'Deathless Stand',
        description: 'Death Defiance makes you Impervious longer. Replenish 1 charge now.',
        god: God.Athena,
        requirementTest: hasAtLeastOneOf([ 'Athena_Attack', 'Athena_Special', 'Athena_Cast', 'Athena_Dash' ]),
        iconPath: './Icons/Boon/Athena/Athena_DeathlessStand.webp',
    },
    Athena_LastStand: {
        id: 'Athena_LastStand',
        name: 'Last Stand',
        description: 'Death Defiance restores more [Health] than usual. Replenish 1 charge now.',
        god: God.Athena,
        requirementTest: hasAtLeastOneOf([ 'Athena_Attack', 'Athena_Special', 'Athena_Cast', 'Athena_Dash' ]),
        iconPath: './Icons/Boon/Athena/Athena_LastStand.webp',
    },
    Athena_Legendary: {
        id: 'Athena_Legendary',
        name: 'Divine Protection',
        description: 'You have a barrier that negates incoming damage.',
        god: God.Athena,
        rarityType: BoonRarityType.Legendary,
        pommable: false,
        requirementTest: hasAtLeastOneOf([ 'Athena_BrilliantRiposte' ]),
        iconPath: './Icons/Boon/Athena/Athena_Legendary.webp',
    },
};
