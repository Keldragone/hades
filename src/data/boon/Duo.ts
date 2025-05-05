import { doesNotHaveAnyOf, hasAtLeastOneOf, satisfiesAllOf } from './requirementsTests';
import { Boon, BoonId } from './types';

import { BoonRarityType } from '../boonRarityType';
import { GodId } from '../god';
import { RunState } from '../runState';
import { AspectId } from '../weapon';

const Boons_Duo: Array<Boon> = [
    {
        id: BoonId.Duo_Aphrodite_Ares,
        name: 'Curse of Longing',
        description: 'Your Doom effects continuously strike Weak foes.',
        rarityType: BoonRarityType.Duo,
        godId: [ GodId.Aphrodite, GodId.Ares ],
        pommable: false,
        requirementTest: satisfiesAllOf([
            hasAtLeastOneOf([ 'Aphrodite_Attack', 'Aphrodite_Special', 'Aphrodite_Cast', 'Aphrodite_Dash' ]),
            hasAtLeastOneOf([ 'Ares_Attack', 'Ares_Special' ]),
        ]),
        iconPath: './Icons/Boon/Duo/Duo_Aphrodite_Ares.webp',
    },
    {
        id: BoonId.Duo_Aphrodite_Artemis,
        name: 'Heart Rend',
        description: 'Your Critical effects deal even more damage to Weak foes.',
        rarityType: BoonRarityType.Duo,
        godId: [ GodId.Aphrodite, GodId.Artemis ],
        pommable: false,
        requirementTest: satisfiesAllOf([
            hasAtLeastOneOf([ 'Aphrodite_Attack', 'Aphrodite_Special', 'Aphrodite_Cast', 'Aphrodite_Dash' ]),
            hasAtLeastOneOf([ 'Artemis_Attack', 'Artemis_Special', 'Artemis_Cast' ]),
        ]),
        iconPath: './Icons/Boon/Duo/Duo_Aphrodite_Artemis.webp',
    },
    {
        id: BoonId.Duo_Aphrodite_Athena,
        name: 'Parting Shot',
        description: 'Your Cast gains any bonuses you have for striking foes from behind.',
        rarityType: BoonRarityType.Duo,
        godId: [ GodId.Aphrodite, GodId.Athena ],
        pommable: false,
        requirementTest: satisfiesAllOf([
            doesNotHaveAnyOf([ 'Dionysus_Cast' ]),
            hasAtLeastOneOf([ 'Aphrodite_Attack', 'Aphrodite_Special', 'Aphrodite_Cast', 'Aphrodite_Dash', 'Aphrodite_Aid' ]),
            hasAtLeastOneOf([ 'Athena_Attack', 'Athena_Special', 'Athena_Cast', 'Athena_Dash', 'Athena_Aid' ]),
        ]),
        testRunAvailability: (runState: RunState) => {
            return runState.aspectId !== AspectId.Shield_Beowulf;
        },
        iconPath: './Icons/Boon/Duo/Duo_Aphrodite_Athena.webp',
    },
    {
        id: BoonId.Duo_Aphrodite_Demeter,
        name: 'Cold Embrace',
        description: 'Your Cast crystal fires its beam directly at you for +4 seconds.',
        rarityType: BoonRarityType.Duo,
        godId: [ GodId.Aphrodite, GodId.Demeter ],
        pommable: false,
        requirementTest: satisfiesAllOf([
            doesNotHaveAnyOf([ 'Duo_Artemis_Demeter' ]),
            hasAtLeastOneOf([ 'Aphrodite_Attack', 'Aphrodite_Special', 'Aphrodite_Dash', 'Aphrodite_Aid' ]),
            hasAtLeastOneOf([ 'Demeter_Cast' ]),
        ]),
        testRunAvailability: (runState: RunState) => {
            return runState.aspectId !== AspectId.Shield_Beowulf;
        },
        iconPath: './Icons/Boon/Duo/Duo_Aphrodite_Demeter.webp',
    },
    {
        id: BoonId.Duo_Aphrodite_Dionysus,
        name: 'Low Tolerance',
        description: 'Your Hangover effects stack even more times against Weak foes.',
        rarityType: BoonRarityType.Duo,
        godId: [ GodId.Aphrodite, GodId.Dionysus ],
        pommable: false,
        requirementTest: satisfiesAllOf([
            hasAtLeastOneOf([ 'Aphrodite_Attack', 'Aphrodite_Special', 'Aphrodite_Cast', 'Aphrodite_Dash' ]),
            hasAtLeastOneOf([ 'Dionysus_Attack', 'Dionysus_Special', 'Dionysus_Dash', 'Dionysus_Aid' ]),
        ]),
        iconPath: './Icons/Boon/Duo/Duo_Aphrodite_Dionysus.webp',
    },
    {
        id: BoonId.Duo_Aphrodite_Poseidon,
        name: 'Sweet Nectar',
        description: 'Any Poms of Power you find are more effective.',
        rarityType: BoonRarityType.Duo,
        godId: [ GodId.Aphrodite, GodId.Poseidon ],
        pommable: false,
        requirementTest: satisfiesAllOf([
            hasAtLeastOneOf([ 'Aphrodite_Attack', 'Aphrodite_Special', 'Aphrodite_Cast', 'Aphrodite_Dash', 'Aphrodite_Aid' ]),
            hasAtLeastOneOf([ 'Poseidon_Attack', 'Poseidon_Special', 'Poseidon_Cast', 'Poseidon_Dash', 'Poseidon_Aid' ]),
        ]),
        iconPath: './Icons/Boon/Duo/Duo_Aphrodite_Poseidon.webp',
    },
    {
        id: BoonId.Duo_Aphrodite_Zeus,
        name: 'Smoldering Air',
        description: 'Your Call charges up automatically, but is capped at 25%.',
        rarityType: BoonRarityType.Duo,
        godId: [ GodId.Aphrodite, GodId.Zeus ],
        pommable: false,
        requirementTest: satisfiesAllOf([
            hasAtLeastOneOf([ 'Aphrodite_Attack', 'Aphrodite_Special', 'Aphrodite_Cast', 'Aphrodite_Dash', 'Aphrodite_Aid' ]),
            hasAtLeastOneOf([ 'Zeus_Attack', 'Zeus_Special', 'Zeus_Cast', 'Zeus_Dash', 'Zeus_Aid' ]),
        ]), // BUT NOT SIGIL OF THE DEAD (HADES KEEPSAKE)
        iconPath: './Icons/Boon/Duo/Duo_Aphrodite_Zeus.webp',
    },
    {
        id: BoonId.Duo_Ares_Artemis,
        name: 'Hunting Blades',
        description: 'Your Cast creates a faster Blade Rift that seeks the nearest foe.',
        rarityType: BoonRarityType.Duo,
        godId: [ GodId.Ares, GodId.Artemis ],
        pommable: false,
        requirementTest: satisfiesAllOf([
            doesNotHaveAnyOf([ 'Duo_Ares_Demeter' ]),
            hasAtLeastOneOf([ 'Ares_Cast' ]),
            hasAtLeastOneOf([ 'Artemis_Attack', 'Artemis_Special', 'Artemis_Dash', 'Artemis_Aid' ]),
        ]),
        testRunAvailability: (runState: RunState) => {
            return runState.aspectId !== AspectId.Shield_Beowulf;
        },
        iconPath: './Icons/Boon/Duo/Duo_Ares_Artemis.webp',
    },
    {
        id: BoonId.Duo_Ares_Athena,
        name: 'Merciful End',
        description: 'Your attacks that can Deflect immediately activate Doom effects.',
        rarityType: BoonRarityType.Duo,
        godId: [ GodId.Ares, GodId.Athena ],
        pommable: false,
        requirementTest: satisfiesAllOf([
            hasAtLeastOneOf([ 'Ares_Attack', 'Ares_Special' ]),
            hasAtLeastOneOf([ 'Athena_Attack', 'Athena_Special' ]),
        ]),
        iconPath: './Icons/Boon/Duo/Duo_Ares_Athena.webp',
    },
    {
        id: BoonId.Duo_Ares_Demeter,
        name: 'Freezing Vortex',
        description: 'Your Cast inflicts Chill, but is smaller and moves slower.',
        rarityType: BoonRarityType.Duo,
        godId: [ GodId.Ares, GodId.Demeter ],
        pommable: false,
        requirementTest: satisfiesAllOf([
            doesNotHaveAnyOf([ 'Duo_Ares_Artemis' ]),
            hasAtLeastOneOf([ 'Ares_Cast' ]),
            hasAtLeastOneOf([ 'Demeter_Attack', 'Demeter_Special', 'Demeter_Dash', 'Demeter_Aid' ]),
        ]),
        iconPath: './Icons/Boon/Duo/Duo_Ares_Demeter.webp',
    },
    {
        id: BoonId.Duo_Ares_Dionysus,
        name: 'Curse of Nausea',
        description: 'Your Hangover effects deal damage faster.',
        rarityType: BoonRarityType.Duo,
        godId: [ GodId.Ares, GodId.Dionysus ],
        pommable: false,
        requirementTest: satisfiesAllOf([
            hasAtLeastOneOf([ 'Ares_Attack', 'Ares_Special', 'Ares_CurseOfVengeance' ]),
            hasAtLeastOneOf([ 'Dionysus_Attack', 'Dionysus_Special', 'Dionysus_Dash', 'Dionysus_Aid' ]),
        ]),
        iconPath: './Icons/Boon/Duo/Duo_Ares_Dionysus.webp',
    },
    {
        id: BoonId.Duo_Ares_Poseidon,
        name: 'Curse of Drowning',
        description: 'Your Cast is a pulse that deals damage to foes around you.',
        rarityType: BoonRarityType.Duo,
        godId: [ GodId.Ares, GodId.Poseidon ],
        pommable: false,
        requirementTest: satisfiesAllOf([
            doesNotHaveAnyOf([ 'Duo_Artemis_Poseidon', 'Duo_Demeter_Poseidon' ]),
            hasAtLeastOneOf([ 'Ares_Attack', 'Ares_Special', 'Ares_Dash', 'Ares_Aid' ]),
            hasAtLeastOneOf([ 'Poseidon_Cast' ]),
        ]),
        testRunAvailability: (runState: RunState) => {
            return runState.aspectId !== AspectId.Bow_Hera;
        },
        iconPath: './Icons/Boon/Duo/Duo_Ares_Poseidon.webp',
    },
    {
        id: BoonId.Duo_Ares_Zeus,
        name: 'Vengeful Mood',
        description: 'Your Revenge attacks sometimes occur without taking damage.',
        rarityType: BoonRarityType.Duo,
        godId: [ GodId.Ares, GodId.Zeus ],
        pommable: false,
        requirementTest: satisfiesAllOf([
            hasAtLeastOneOf([ 'Ares_Attack', 'Ares_Special', 'Ares_Cast', 'Ares_Dash', 'Ares_Aid' ]),
            hasAtLeastOneOf([ 'Zeus_Attack', 'Zeus_Special', 'Zeus_Cast', 'Zeus_Dash', 'Zeus_Aid' ]),
            hasAtLeastOneOf([ 'Aphrodite_WaveOfDespair', 'Ares_CurseOfVengeance', 'Athena_HolyShield', 'Demeter_FrozenTouch', 'Zeus_HeavensVengeance' ]),
        ]),
        iconPath: './Icons/Boon/Duo/Duo_Ares_Zeus.webp',
    },
    {
        id: BoonId.Duo_Artemis_Athena,
        name: 'Deadly Reversal',
        description: 'After you Deflect, briefly gain +20% chance to deal Critical damage.',
        rarityType: BoonRarityType.Duo,
        godId: [ GodId.Artemis, GodId.Athena ],
        pommable: false,
        requirementTest: satisfiesAllOf([
            hasAtLeastOneOf([ 'Artemis_Attack', 'Artemis_Special', 'Artemis_Cast', 'Artemis_Aid' ]),
            hasAtLeastOneOf([ 'Athena_Attack', 'Athena_Special' ]),
        ]),
        iconPath: './Icons/Boon/Duo/Duo_Artemis_Athena.webp',
    },
    {
        id: BoonId.Duo_Artemis_Demeter,
        name: 'Crystal Clarity',
        description: 'Your Cast is stronger and tracks foes more effectively.',
        rarityType: BoonRarityType.Duo,
        godId: [ GodId.Artemis, GodId.Demeter ],
        pommable: false,
        requirementTest: satisfiesAllOf([
            doesNotHaveAnyOf([ 'Duo_Aphrodite_Demeter' ]),
            hasAtLeastOneOf([ 'Artemis_Attack', 'Artemis_Special', 'Artemis_Dash', 'Artemis_Aid' ]),
            hasAtLeastOneOf([ 'Demeter_Cast' ]),
        ]),
        testRunAvailability: (runState: RunState) => {
            return runState.aspectId !== AspectId.Shield_Beowulf;
        },
        iconPath: './Icons/Boon/Duo/Duo_Artemis_Demeter.webp',
    },
    {
        id: BoonId.Duo_Artemis_Dionysus,
        name: 'Splitting Headache',
        description: 'Hangover-afflicted foes are more likely to take Critical damage.',
        rarityType: BoonRarityType.Duo,
        godId: [ GodId.Artemis, GodId.Dionysus ],
        pommable: false,
        requirementTest: satisfiesAllOf([
            hasAtLeastOneOf([ 'Artemis_Attack', 'Artemis_Special', 'Artemis_Cast', 'Artemis_Aid' ]),
            hasAtLeastOneOf([ 'Dionysus_Attack', 'Dionysus_Special', 'Dionysus_Dash', 'Dionysus_Aid' ]),
        ]),
        iconPath: './Icons/Boon/Duo/Duo_Artemis_Dionysus.webp',
    },
    {
        id: BoonId.Duo_Artemis_Poseidon,
        name: 'Mirage Shot',
        description: 'Your Cast fires a second projectile, though it has reduced damage.',
        rarityType: BoonRarityType.Duo,
        godId: [ GodId.Artemis, GodId.Poseidon ],
        pommable: false,
        requirementTest: satisfiesAllOf([
            doesNotHaveAnyOf([ 'Duo_Ares_Poseidon' ]),
            hasAtLeastOneOf([ 'Artemis_Attack', 'Artemis_Special', 'Artemis_Cast', 'Artemis_Aid' ]),
            hasAtLeastOneOf([ 'Poseidon_Attack', 'Poseidon_Special', 'Poseidon_Cast', 'Poseidon_Dash', 'Poseidon_Aid' ]),
        ]),
        iconPath: './Icons/Boon/Duo/Duo_Artemis_Poseidon.webp',
    },
    {
        id: BoonId.Duo_Artemis_Zeus,
        name: 'Lightning Rod',
        description: 'Your collectible [Cast] strike nearby foes with lightning every 1 Sec.',
        rarityType: BoonRarityType.Duo,
        godId: [ GodId.Artemis, GodId.Zeus ],
        pommable: false,
        requirementTest: satisfiesAllOf([
            hasAtLeastOneOf([ 'Artemis_Attack', 'Artemis_Special', 'Artemis_Cast', 'Artemis_Dash', 'Artemis_Aid' ]),
            hasAtLeastOneOf([ 'Zeus_Attack', 'Zeus_Special', 'Zeus_Cast', 'Zeus_Dash', 'Zeus_Aid' ]),
        ]),
        testRunAvailability: (runState: RunState) => {
            return runState.mirror.includes('InfernalSoul');
        },
        iconPath: './Icons/Boon/Duo/Duo_Artemis_Zeus.webp',
    },
    {
        id: BoonId.Duo_Athena_Demeter,
        name: 'Stubborn Roots',
        description: 'While you have no Death/Stubborn Defiance your [Health] slowly recovers.',
        rarityType: BoonRarityType.Duo,
        godId: [ GodId.Athena, GodId.Demeter ],
        pommable: false,
        requirementTest: satisfiesAllOf([
            hasAtLeastOneOf([ 'Athena_Attack', 'Athena_Special', 'Athena_Cast', 'Athena_Dash', 'Athena_Aid' ]),
            hasAtLeastOneOf([ 'Demeter_Attack', 'Demeter_Special', 'Demeter_Cast', 'Demeter_Dash', 'Demeter_Aid' ]),
        ]),
        iconPath: './Icons/Boon/Duo/Duo_Athena_Demeter.webp',
    },
    {
        id: BoonId.Duo_Athena_Dionysus,
        name: 'Calculated Risk',
        description: 'Your foes\' ranged-attack projectiles are slower.',
        rarityType: BoonRarityType.Duo,
        godId: [ GodId.Athena, GodId.Dionysus ],
        pommable: false,
        requirementTest: satisfiesAllOf([
            hasAtLeastOneOf([ 'Athena_Attack', 'Athena_Special', 'Athena_Dash', 'Athena_Aid' ]),
            hasAtLeastOneOf([ 'Dionysus_Attack', 'Dionysus_Special', 'Dionysus_Dash', 'Dionysus_Aid' ]),
        ]),
        iconPath: './Icons/Boon/Duo/Duo_Athena_Dionysus.webp',
    },
    {
        id: BoonId.Duo_Athena_Poseidon,
        name: 'Unshakable Mettle',
        description: 'You cannot be stunned, and resist some damage from Bosses.',
        rarityType: BoonRarityType.Duo,
        godId: [ GodId.Athena, GodId.Poseidon ],
        pommable: false,
        requirementTest: satisfiesAllOf([
            hasAtLeastOneOf([ 'Athena_Attack', 'Athena_Special', 'Athena_Cast', 'Athena_Dash', 'Athena_Aid' ]),
            hasAtLeastOneOf([ 'Poseidon_Attack', 'Poseidon_Special', 'Poseidon_Cast', 'Poseidon_Aid' ]),
        ]),
        iconPath: './Icons/Boon/Duo/Duo_Athena_Poseidon.webp',
    },
    {
        id: BoonId.Duo_Athena_Zeus,
        name: 'Lightning Phalanx',
        description: 'Your Phalanx Shot Cast bounces between nearby foes.',
        rarityType: BoonRarityType.Duo,
        godId: [ GodId.Athena, GodId.Zeus ],
        pommable: false,
        requirementTest: satisfiesAllOf([
            hasAtLeastOneOf([ 'Athena_Cast' ]),
            hasAtLeastOneOf([ 'Zeus_Attack', 'Zeus_Special', 'Zeus_Dash', 'Zeus_Aid' ]),
        ]),
        testRunAvailability: (runState: RunState) => {
            return runState.aspectId !== AspectId.Shield_Beowulf;
        },
        iconPath: './Icons/Boon/Duo/Duo_Athena_Zeus.webp',
    },
    {
        id: BoonId.Duo_Demeter_Dionysus,
        name: 'Ice Wine',
        description: 'Your Cast blasts an area with freezing Festive Fog that inflicts Chill.',
        rarityType: BoonRarityType.Duo,
        godId: [ GodId.Demeter, GodId.Dionysus ],
        pommable: false,
        requirementTest: satisfiesAllOf([
            doesNotHaveAnyOf([ 'Duo_Demeter_Poseidon' ]),
            hasAtLeastOneOf([ 'Demeter_Attack', 'Demeter_Special', 'Demeter_Dash', 'Demeter_Aid' ]),
            hasAtLeastOneOf([ 'Dionysus_Cast' ]),
        ]),
        iconPath: './Icons/Boon/Duo/Duo_Demeter_Dionysus.webp',
    },
    {
        id: BoonId.Duo_Demeter_Poseidon,
        name: 'Blizzard Shot',
        description: 'Your Cast moves slowly, piercing foes and firing shards around it.',
        rarityType: BoonRarityType.Duo,
        godId: [ GodId.Demeter, GodId.Poseidon ],
        pommable: false,
        requirementTest: satisfiesAllOf([
            doesNotHaveAnyOf([ 'Duo_Ares_Poseidon', 'Duo_Demeter_Dionysus' ]),
            hasAtLeastOneOf([ 'Demeter_Attack', 'Demeter_Special', 'Demeter_Dash', 'Demeter_Aid' ]),
            hasAtLeastOneOf([ 'Poseidon_Cast' ]),
        ]),
        testRunAvailability: (runState: RunState) => {
            return runState.aspectId !== AspectId.Shield_Beowulf;
        },
        iconPath: './Icons/Boon/Duo/Duo_Demeter_Poseidon.webp',
    },
    {
        id: BoonId.Duo_Demeter_Zeus,
        name: 'Cold Fusion',
        description: 'Jolted status does not expire on your enemies\' attacks.',
        rarityType: BoonRarityType.Duo,
        godId: [ GodId.Demeter, GodId.Zeus ],
        pommable: false,
        requirementTest: satisfiesAllOf([
            hasAtLeastOneOf([ 'Demeter_Attack', 'Demeter_Special', 'Demeter_Dash', 'Demeter_Aid' ]),
            hasAtLeastOneOf([ 'Zeus_StaticDischarge' ]),
        ]),
        iconPath: './Icons/Boon/Duo/Duo_Demeter_Zeus.webp',
    },
    {
        id: BoonId.Duo_Dionysus_Poseidon,
        name: 'Exclusive Access',
        description: 'Any Boons you find have superior effects.',
        rarityType: BoonRarityType.Duo,
        godId: [ GodId.Dionysus, GodId.Poseidon ],
        pommable: false,
        requirementTest: satisfiesAllOf([
            hasAtLeastOneOf([ 'Dionysus_Attack', 'Dionysus_Special', 'Dionysus_Cast', 'Dionysus_Dash', 'Dionysus_Aid' ]),
            hasAtLeastOneOf([ 'Poseidon_Attack', 'Poseidon_Special', 'Poseidon_Cast', 'Poseidon_Dash', 'Poseidon_Aid' ]),
        ]),
        iconPath: './Icons/Boon/Duo/Duo_Dionysus_Poseidon.webp',
    },
    {
        id: BoonId.Duo_Dionysus_Zeus,
        name: 'Scintillating Feast',
        description: 'Your Festive Fog effects also deal lightning damage periodically.',
        rarityType: BoonRarityType.Duo,
        godId: [ GodId.Dionysus, GodId.Zeus ],
        pommable: false,
        requirementTest: satisfiesAllOf([
            hasAtLeastOneOf([ 'Dionysus_Cast' ]),
            hasAtLeastOneOf([ 'Zeus_Attack', 'Zeus_Special', 'Zeus_Dash', 'Zeus_Aid' ]),
        ]),
        iconPath: './Icons/Boon/Duo/Duo_Dionysus_Zeus.webp',
    },
    {
        id: BoonId.Duo_Poseidon_Zeus,
        name: 'Sea Storm',
        description: 'Your knock-away effects also cause foes to be struck by lightning.',
        rarityType: BoonRarityType.Duo,
        godId: [ GodId.Poseidon, GodId.Zeus ],
        pommable: false,
        requirementTest: satisfiesAllOf([
            hasAtLeastOneOf([ 'Poseidon_Attack', 'Poseidon_Special', 'Poseidon_Cast', 'Poseidon_Aid' ]),
            hasAtLeastOneOf([ 'Zeus_Attack', 'Zeus_Special', 'Zeus_Cast', 'Zeus_Dash', 'Zeus_Aid' ]),
        ]),
        iconPath: './Icons/Boon/Duo/Duo_Poseidon_Zeus.webp',
    },
];

export default Boons_Duo;
