import { doesNotHaveAnyOf, hasAtLeastOneOf, satisfiesAllOf } from './requirementsTests';
import { BoonInfo } from './types';

import { BoonRarityType } from '../boonRarityType';
import { BoonSlot } from '../boonSlot';
import { God } from '../god';
import { RunState } from '../runState';
import { AspectId } from '../weapon';

export const BoonData_Duo: { [ id: string ]: BoonInfo } = {
    Duo_Aphrodite_Ares: {
        id: 'Duo_Aphrodite_Ares',
        name: 'Curse of Longing',
        description: 'Your Doom effects continuously strike Weak foes.',
        rarityType: BoonRarityType.Duo,
        god: [ God.Aphrodite, God.Ares ],
        pommable: false,
        requirementTest: satisfiesAllOf([
            hasAtLeastOneOf([ 'Aphrodite_Attack', 'Aphrodite_Special', 'Aphrodite_Cast', 'Aphrodite_Dash' ]),
            hasAtLeastOneOf([ 'Ares_Attack', 'Ares_Special' ]),
        ]),
        iconPath: './BoonIcons/Duo/Duo_Aphrodite_Ares.webp',
    },
    Duo_Aphrodite_Artemis: {
        id: 'Duo_Aphrodite_Artemis',
        name: 'Heart Rend',
        description: 'Your Critical effects deal even more damage to Weak foes.',
        rarityType: BoonRarityType.Duo,
        god: [ God.Aphrodite, God.Artemis ],
        pommable: false,
        requirementTest: satisfiesAllOf([
            hasAtLeastOneOf([ 'Aphrodite_Attack', 'Aphrodite_Special', 'Aphrodite_Cast', 'Aphrodite_Dash' ]),
            hasAtLeastOneOf([ 'Artemis_Attack', 'Artemis_Special', 'Artemis_Cast' ]),
        ]),
        iconPath: './BoonIcons/Duo/Duo_Aphrodite_Artemis.webp',
    },
    Duo_Aphrodite_Athena: {
        id: 'Duo_Aphrodite_Athena',
        name: 'Parting Shot',
        description: 'Your Cast gains any bonuses you have for striking foes from behind.',
        rarityType: BoonRarityType.Duo,
        god: [ God.Aphrodite, God.Athena ],
        pommable: false,
        requirementTest: satisfiesAllOf([
            doesNotHaveAnyOf([ 'Dionysus_Cast' ]),
            hasAtLeastOneOf([ 'Aphrodite_Attack', 'Aphrodite_Special', 'Aphrodite_Cast', 'Aphrodite_Dash', 'Aphrodite_Aid' ]),
            hasAtLeastOneOf([ 'Athena_Attack', 'Athena_Special', 'Athena_Cast', 'Athena_Dash', 'Athena_Aid' ]),
        ]),
        testRunAvailability: (runState: RunState) => {
            return runState.aspectId !== AspectId.Shield_Beowulf;
        },
        iconPath: './BoonIcons/Duo/Duo_Aphrodite_Athena.webp',
    },
    Duo_Aphrodite_Demeter: {
        id: 'Duo_Aphrodite_Demeter',
        name: 'Cold Embrace',
        description: 'Your Cast crystal fires its beam directly at you for +4 seconds.',
        rarityType: BoonRarityType.Duo,
        god: [ God.Aphrodite, God.Demeter ],
        pommable: false,
        requirementTest: satisfiesAllOf([
            doesNotHaveAnyOf([ 'Duo_Artemis_Demeter' ]),
            hasAtLeastOneOf([ 'Aphrodite_Attack', 'Aphrodite_Special', 'Aphrodite_Dash', 'Aphrodite_Aid' ]),
            hasAtLeastOneOf([ 'Demeter_Cast' ]),
        ]),
        testRunAvailability: (runState: RunState) => {
            return runState.aspectId !== AspectId.Shield_Beowulf;
        },
        iconPath: './BoonIcons/Duo/Duo_Aphrodite_Demeter.webp',
    },
    Duo_Aphrodite_Dionysus: {
        id: 'Duo_Aphrodite_Dionysus',
        name: 'Low Tolerance',
        description: 'Your Hangover effects stack even more times against Weak foes.',
        rarityType: BoonRarityType.Duo,
        god: [ God.Aphrodite, God.Dionysus ],
        pommable: false,
        requirementTest: satisfiesAllOf([
            hasAtLeastOneOf([ 'Aphrodite_Attack', 'Aphrodite_Special', 'Aphrodite_Cast', 'Aphrodite_Dash' ]),
            hasAtLeastOneOf([ 'Dionysus_Attack', 'Dionysus_Special', 'Dionysus_Dash', 'Dionysus_Aid' ]),
        ]),
        iconPath: './BoonIcons/Duo/Duo_Aphrodite_Dionysus.webp',
    },
    Duo_Aphrodite_Poseidon: {
        id: 'Duo_Aphrodite_Poseidon',
        name: 'Sweet Nectar',
        description: 'Any Poms of Power you find are more effective.',
        rarityType: BoonRarityType.Duo,
        god: [ God.Aphrodite, God.Poseidon ],
        pommable: false,
        requirementTest: satisfiesAllOf([
            hasAtLeastOneOf([ 'Aphrodite_Attack', 'Aphrodite_Special', 'Aphrodite_Cast', 'Aphrodite_Dash', 'Aphrodite_Aid' ]),
            hasAtLeastOneOf([ 'Poseidon_Attack', 'Poseidon_Special', 'Poseidon_Cast', 'Poseidon_Dash', 'Poseidon_Aid' ]),
        ]),
        iconPath: './BoonIcons/Duo/Duo_Aphrodite_Poseidon.webp',
    },
    Duo_Aphrodite_Zeus: {
        id: 'Duo_Aphrodite_Zeus',
        name: 'Smoldering Air',
        description: 'Your Call charges up automatically, but is capped at 25%.',
        rarityType: BoonRarityType.Duo,
        god: [ God.Aphrodite, God.Zeus ],
        pommable: false,
        requirementTest: satisfiesAllOf([
            hasAtLeastOneOf([ 'Aphrodite_Attack', 'Aphrodite_Special', 'Aphrodite_Cast', 'Aphrodite_Dash', 'Aphrodite_Aid' ]),
            hasAtLeastOneOf([ 'Zeus_Attack', 'Zeus_Special', 'Zeus_Cast', 'Zeus_Dash', 'Zeus_Aid' ]),
        ]), // BUT NOT SIGIL OF THE DEAD (HADES KEEPSAKE)
        iconPath: './BoonIcons/Duo/Duo_Aphrodite_Zeus.webp',
    },
    Duo_Ares_Artemis: {
        id: 'Duo_Ares_Artemis',
        name: 'Hunting Blades',
        description: 'Your Cast creates a faster Blade Rift that seeks the nearest foe.',
        rarityType: BoonRarityType.Duo,
        god: [ God.Ares, God.Artemis ],
        pommable: false,
        requirementTest: satisfiesAllOf([
            doesNotHaveAnyOf([ 'Duo_Ares_Demeter' ]),
            hasAtLeastOneOf([ 'Ares_Cast' ]),
            hasAtLeastOneOf([ 'Artemis_Attack', 'Artemis_Special', 'Artemis_Dash', 'Artemis_Aid' ]),
        ]),
        testRunAvailability: (runState: RunState) => {
            return runState.aspectId !== AspectId.Shield_Beowulf;
        },
        iconPath: './BoonIcons/Duo/Duo_Ares_Artemis.webp',
    },
    Duo_Ares_Athena: {
        id: 'Duo_Ares_Athena',
        name: 'Merciful End',
        description: 'Your attacks that can Deflect immediately activate Doom effects.',
        rarityType: BoonRarityType.Duo,
        god: [ God.Ares, God.Athena ],
        pommable: false,
        requirementTest: satisfiesAllOf([
            hasAtLeastOneOf([ 'Ares_Attack', 'Ares_Special' ]),
            hasAtLeastOneOf([ 'Athena_Attack', 'Athena_Special' ]),
        ]),
        iconPath: './BoonIcons/Duo/Duo_Ares_Athena.webp',
    },
    Duo_Ares_Demeter: {
        id: 'Duo_Ares_Demeter',
        name: 'Freezing Vortex',
        description: 'Your Cast inflicts Chill, but is smaller and moves slower.',
        rarityType: BoonRarityType.Duo,
        god: [ God.Ares, God.Demeter ],
        pommable: false,
        requirementTest: satisfiesAllOf([
            doesNotHaveAnyOf([ 'Duo_Ares_Artemis' ]),
            hasAtLeastOneOf([ 'Ares_Cast' ]),
            hasAtLeastOneOf([ 'Demeter_Attack', 'Demeter_Special', 'Demeter_Dash', 'Demeter_Aid' ]),
        ]),
        iconPath: './BoonIcons/Duo/Duo_Ares_Demeter.webp',
    },
    Duo_Ares_Dionysus: {
        id: 'Duo_Ares_Dionysus',
        name: 'Curse of Nausea',
        description: 'Your Hangover effects deal damage faster.',
        rarityType: BoonRarityType.Duo,
        god: [ God.Ares, God.Dionysus ],
        pommable: false,
        requirementTest: satisfiesAllOf([
            hasAtLeastOneOf([ 'Ares_Attack', 'Ares_Special', 'Ares_CurseOfVengeance' ]),
            hasAtLeastOneOf([ 'Dionysus_Attack', 'Dionysus_Special', 'Dionysus_Dash', 'Dionysus_Aid' ]),
        ]),
        iconPath: './BoonIcons/Duo/Duo_Ares_Dionysus.webp',
    },
    Duo_Ares_Poseidon: {
        id: 'Duo_Ares_Poseidon',
        name: 'Curse of Drowning',
        description: 'Your Cast is a pulse that deals damage to foes around you.',
        rarityType: BoonRarityType.Duo,
        god: [ God.Ares, God.Poseidon ],
        pommable: false,
        requirementTest: satisfiesAllOf([
            doesNotHaveAnyOf([ 'Duo_Artemis_Poseidon', 'Duo_Demeter_Poseidon' ]),
            hasAtLeastOneOf([ 'Ares_Attack', 'Ares_Special', 'Ares_Dash', 'Ares_Aid' ]),
            hasAtLeastOneOf([ 'Poseidon_Cast' ]),
        ]),
        testRunAvailability: (runState: RunState) => {
            return runState.aspectId !== AspectId.Bow_Hera;
        },
        iconPath: './BoonIcons/Duo/Duo_Ares_Poseidon.webp',
    },
    Duo_Ares_Zeus: {
        id: 'Duo_Ares_Zeus',
        name: 'Vengeful Mood',
        description: 'Your Revenge attacks sometimes occur without taking damage.',
        rarityType: BoonRarityType.Duo,
        god: [ God.Ares, God.Zeus ],
        pommable: false,
        requirementTest: satisfiesAllOf([
            hasAtLeastOneOf([ 'Ares_Attack', 'Ares_Special', 'Ares_Cast', 'Ares_Dash', 'Ares_Aid' ]),
            hasAtLeastOneOf([ 'Zeus_Attack', 'Zeus_Special', 'Zeus_Cast', 'Zeus_Dash', 'Zeus_Aid' ]),
            hasAtLeastOneOf([ 'Aphrodite_WaveOfDespair', 'Ares_CurseOfVengeance', 'Athena_HolyShield', 'Demeter_FrozenTouch', 'Zeus_HeavensVengeance' ]),
        ]),
        iconPath: './BoonIcons/Duo/Duo_Ares_Zeus.webp',
    },
    Duo_Artemis_Athena: {
        id: 'Duo_Artemis_Athena',
        name: 'Deadly Reversal',
        description: 'After you Deflect, briefly gain +20% chance to deal Critical damage.',
        rarityType: BoonRarityType.Duo,
        god: [ God.Artemis, God.Athena ],
        pommable: false,
        requirementTest: satisfiesAllOf([
            hasAtLeastOneOf([ 'Artemis_Attack', 'Artemis_Special', 'Artemis_Cast', 'Artemis_Aid' ]),
            hasAtLeastOneOf([ 'Athena_Attack', 'Athena_Special' ]),
        ]),
        iconPath: './BoonIcons/Duo/Duo_Artemis_Athena.webp',
    },
    Duo_Artemis_Demeter: {
        id: 'Duo_Artemis_Demeter',
        name: 'Crystal Clarity',
        description: 'Your Cast is stronger and tracks foes more effectively.',
        rarityType: BoonRarityType.Duo,
        god: [ God.Artemis, God.Demeter ],
        pommable: false,
        requirementTest: satisfiesAllOf([
            doesNotHaveAnyOf([ 'Duo_Aphrodite_Demeter' ]),
            hasAtLeastOneOf([ 'Artemis_Attack', 'Artemis_Special', 'Artemis_Dash', 'Artemis_Aid' ]),
            hasAtLeastOneOf([ 'Demeter_Cast' ]),
        ]),
        testRunAvailability: (runState: RunState) => {
            return runState.aspectId !== AspectId.Shield_Beowulf;
        },
        iconPath: './BoonIcons/Duo/Duo_Artemis_Demeter.webp',
    },
    Duo_Artemis_Dionysus: {
        id: 'Duo_Artemis_Dionysus',
        name: 'Splitting Headache',
        description: 'Hangover-afflicted foes are more likely to take Critical damage.',
        rarityType: BoonRarityType.Duo,
        god: [ God.Artemis, God.Dionysus ],
        pommable: false,
        requirementTest: satisfiesAllOf([
            hasAtLeastOneOf([ 'Artemis_Attack', 'Artemis_Special', 'Artemis_Cast', 'Artemis_Aid' ]),
            hasAtLeastOneOf([ 'Dionysus_Attack', 'Dionysus_Special', 'Dionysus_Dash', 'Dionysus_Aid' ]),
        ]),
        iconPath: './BoonIcons/Duo/Duo_Artemis_Dionysus.webp',
    },
    Duo_Artemis_Poseidon: {
        id: 'Duo_Artemis_Poseidon',
        name: 'Mirage Shot',
        description: 'Your Cast fires a second projectile, though it has reduced damage.',
        rarityType: BoonRarityType.Duo,
        god: [ God.Artemis, God.Poseidon ],
        pommable: false,
        requirementTest: satisfiesAllOf([
            doesNotHaveAnyOf([ 'Duo_Ares_Poseidon' ]),
            hasAtLeastOneOf([ 'Artemis_Attack', 'Artemis_Special', 'Artemis_Cast', 'Artemis_Aid' ]),
            hasAtLeastOneOf([ 'Poseidon_Attack', 'Poseidon_Special', 'Poseidon_Cast', 'Poseidon_Dash', 'Poseidon_Aid' ]),
        ]),
        iconPath: './BoonIcons/Duo/Duo_Artemis_Poseidon.webp',
    },
    Duo_Artemis_Zeus: {
        id: 'Duo_Artemis_Zeus',
        name: 'Lightning Rod',
        description: 'Your collectible [Cast] strike nearby foes with lightning every 1 Sec.',
        rarityType: BoonRarityType.Duo,
        god: [ God.Artemis, God.Zeus ],
        pommable: false,
        requirementTest: satisfiesAllOf([
            hasAtLeastOneOf([ 'Artemis_Attack', 'Artemis_Special', 'Artemis_Cast', 'Artemis_Dash', 'Artemis_Aid' ]),
            hasAtLeastOneOf([ 'Zeus_Attack', 'Zeus_Special', 'Zeus_Cast', 'Zeus_Dash', 'Zeus_Aid' ]),
        ]),
        testRunAvailability: (runState: RunState) => {
            return runState.mirror.includes('InfernalSoul');
        },
        iconPath: './BoonIcons/Duo/Duo_Artemis_Zeus.webp',
    },
    Duo_Athena_Demeter: {
        id: 'Duo_Athena_Demeter',
        name: 'Stubborn Roots',
        description: 'While you have no Death/Stubborn Defiance your [Health] slowly recovers.',
        rarityType: BoonRarityType.Duo,
        god: [ God.Athena, God.Demeter ],
        pommable: false,
        requirementTest: satisfiesAllOf([
            hasAtLeastOneOf([ 'Athena_Attack', 'Athena_Special', 'Athena_Cast', 'Athena_Dash', 'Athena_Aid' ]),
            hasAtLeastOneOf([ 'Demeter_Attack', 'Demeter_Special', 'Demeter_Cast', 'Demeter_Dash', 'Demeter_Aid' ]),
        ]),
        iconPath: './BoonIcons/Duo/Duo_Athena_Demeter.webp',
    },
    Duo_Athena_Dionysus: {
        id: 'Duo_Athena_Dionysus',
        name: 'Calculated Risk',
        description: 'Your foes\' ranged-attack projectiles are slower.',
        rarityType: BoonRarityType.Duo,
        god: [ God.Athena, God.Dionysus ],
        pommable: false,
        requirementTest: satisfiesAllOf([
            hasAtLeastOneOf([ 'Athena_Attack', 'Athena_Special', 'Athena_Dash', 'Athena_Aid' ]),
            hasAtLeastOneOf([ 'Dionysus_Attack', 'Dionysus_Special', 'Dionysus_Dash', 'Dionysus_Aid' ]),
        ]),
        iconPath: './BoonIcons/Duo/Duo_Athena_Dionysus.webp',
    },
    Duo_Athena_Poseidon: {
        id: 'Duo_Athena_Poseidon',
        name: 'Unshakable Mettle',
        description: 'You cannot be stunned, and resist some damage from Bosses.',
        rarityType: BoonRarityType.Duo,
        god: [ God.Athena, God.Poseidon ],
        pommable: false,
        requirementTest: satisfiesAllOf([
            hasAtLeastOneOf([ 'Athena_Attack', 'Athena_Special', 'Athena_Cast', 'Athena_Dash', 'Athena_Aid' ]),
            hasAtLeastOneOf([ 'Poseidon_Attack', 'Poseidon_Special', 'Poseidon_Cast', 'Poseidon_Aid' ]),
        ]),
        iconPath: './BoonIcons/Duo/Duo_Athena_Poseidon.webp',
    },
    Duo_Athena_Zeus: {
        id: 'Duo_Athena_Zeus',
        name: 'Lightning Phalanx',
        description: 'Your Phalanx Shot Cast bounces between nearby foes.',
        rarityType: BoonRarityType.Duo,
        god: [ God.Athena, God.Zeus ],
        pommable: false,
        requirementTest: satisfiesAllOf([
            hasAtLeastOneOf([ 'Athena_Cast' ]),
            hasAtLeastOneOf([ 'Zeus_Attack', 'Zeus_Special', 'Zeus_Dash', 'Zeus_Aid' ]),
        ]),
        testRunAvailability: (runState: RunState) => {
            return runState.aspectId !== AspectId.Shield_Beowulf;
        },
        iconPath: './BoonIcons/Duo/Duo_Athena_Zeus.webp',
    },
    Duo_Demeter_Dionysus: {
        id: 'Duo_Demeter_Dionysus',
        name: 'Ice Wine',
        description: 'Your Cast blasts an area with freezing Festive Fog that inflicts Chill.',
        rarityType: BoonRarityType.Duo,
        god: [ God.Demeter, God.Dionysus ],
        pommable: false,
        requirementTest: satisfiesAllOf([
            doesNotHaveAnyOf([ 'Duo_Demeter_Poseidon' ]),
            hasAtLeastOneOf([ 'Demeter_Attack', 'Demeter_Special', 'Demeter_Dash', 'Demeter_Aid' ]),
            hasAtLeastOneOf([ 'Dionysus_Cast' ]),
        ]),
        iconPath: './BoonIcons/Duo/Duo_Demeter_Dionysus.webp',
    },
    Duo_Demeter_Poseidon: {
        id: 'Duo_Demeter_Poseidon',
        name: 'Blizzard Shot',
        description: 'Your Cast moves slowly, piercing foes and firing shards around it.',
        rarityType: BoonRarityType.Duo,
        god: [ God.Demeter, God.Poseidon ],
        pommable: false,
        requirementTest: satisfiesAllOf([
            doesNotHaveAnyOf([ 'Duo_Ares_Poseidon', 'Duo_Demeter_Dionysus' ]),
            hasAtLeastOneOf([ 'Demeter_Attack', 'Demeter_Special', 'Demeter_Dash', 'Demeter_Aid' ]),
            hasAtLeastOneOf([ 'Poseidon_Cast' ]),
        ]),
        testRunAvailability: (runState: RunState) => {
            return runState.aspectId !== AspectId.Shield_Beowulf;
        },
        iconPath: './BoonIcons/Duo/Duo_Demeter_Poseidon.webp',
    },
    Duo_Demeter_Zeus: {
        id: 'Duo_Demeter_Zeus',
        name: 'Cold Fusion',
        description: 'Jolted status does not expire on your enemies\' attacks.',
        rarityType: BoonRarityType.Duo,
        god: [ God.Demeter, God.Zeus ],
        pommable: false,
        requirementTest: satisfiesAllOf([
            hasAtLeastOneOf([ 'Demeter_Attack', 'Demeter_Special', 'Demeter_Dash', 'Demeter_Aid' ]),
            hasAtLeastOneOf([ 'Zeus_StaticDischarge' ]),
        ]),
        iconPath: './BoonIcons/Duo/Duo_Demeter_Zeus.webp',
    },
    Duo_Dionysus_Poseidon: {
        id: 'Duo_Dionysus_Poseidon',
        name: 'Exclusive Access',
        description: 'Any Boons you find have superior effects.',
        rarityType: BoonRarityType.Duo,
        god: [ God.Dionysus, God.Poseidon ],
        pommable: false,
        requirementTest: satisfiesAllOf([
            hasAtLeastOneOf([ 'Dionysus_Attack', 'Dionysus_Special', 'Dionysus_Cast', 'Dionysus_Dash', 'Dionysus_Aid' ]),
            hasAtLeastOneOf([ 'Poseidon_Attack', 'Poseidon_Special', 'Poseidon_Cast', 'Poseidon_Dash', 'Poseidon_Aid' ]),
        ]),
        iconPath: './BoonIcons/Duo/Duo_Dionysus_Poseidon.webp',
    },
    Duo_Dionysus_Zeus: {
        id: 'Duo_Dionysus_Zeus',
        name: 'Scintillating Feast',
        description: 'Your Festive Fog effects also deal lightning damage periodically.',
        rarityType: BoonRarityType.Duo,
        god: [ God.Dionysus, God.Zeus ],
        pommable: false,
        requirementTest: satisfiesAllOf([
            hasAtLeastOneOf([ 'Dionysus_Cast' ]),
            hasAtLeastOneOf([ 'Zeus_Attack', 'Zeus_Special', 'Zeus_Dash', 'Zeus_Aid' ]),
        ]),
        iconPath: './BoonIcons/Duo/Duo_Dionysus_Zeus.webp',
    },
    Duo_Poseidon_Zeus: {
        id: 'Duo_Poseidon_Zeus',
        name: 'Sea Storm',
        description: 'Your knock-away effects also cause foes to be struck by lightning.',
        rarityType: BoonRarityType.Duo,
        god: [ God.Poseidon, God.Zeus ],
        pommable: false,
        requirementTest: satisfiesAllOf([
            hasAtLeastOneOf([ 'Poseidon_Attack', 'Poseidon_Special', 'Poseidon_Cast', 'Poseidon_Aid' ]),
            hasAtLeastOneOf([ 'Zeus_Attack', 'Zeus_Special', 'Zeus_Cast', 'Zeus_Dash', 'Zeus_Aid' ]),
        ]),
        iconPath: './BoonIcons/Duo/Duo_Poseidon_Zeus.webp',
    },
};
