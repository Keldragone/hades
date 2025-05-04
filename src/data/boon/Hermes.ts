import { doesNotHaveAnyOf, hasAtLeastOneOf, satisfiesAllOf } from './requirementsTests';
import { BoonInfo } from './types';

import { BoonRarityType } from '../boonRarityType';
import { BoonSlot } from '../boonSlot';
import { God } from '../god';
import { RunState } from '../runState';
import { Aspect } from '../weapon';

export const BoonData_Hermes: { [ id: string ]: BoonInfo } = {
    Hermes_SwiftStrike: {
        id: 'Hermes_SwiftStrike',
        name: 'Swift Strike',
        description: 'Your Attack is +X% faster.',
        god: God.Hermes,
        pommable: false,
        iconPath: './BoonIcons/Hermes/Hermes_SwiftStrike.webp',
    },
    Hermes_SwiftFlourish: {
        id: 'Hermes_SwiftFlourish',
        name: 'Swift Flourish',
        description: 'Your Special is +X% faster.',
        god: God.Hermes,
        pommable: false,
        iconPath: './BoonIcons/Hermes/Hermes_SwiftFlourish.webp',
    },
    Hermes_FlurryCast: {
        id: 'Hermes_FlurryCast',
        name: 'Flurry Cast',
        description: 'Your Cast is +X% faster and fully automatic.',
        god: God.Hermes,
        pommable: false, 
        testRunAvailability: (runState: RunState) => {
            const aspectCompatabile = (
                runState.aspect !== Aspect.Shield_Beowulf
                && runState.aspect !== Aspect.Bow_Hera
            );

            const mirrorCompatible = (
                runState.mirror.includes('InfernalSoul')
                // qq what if this talent is disabled (i.e. not taken or removed by heat)?
            );

            return aspectCompatabile && mirrorCompatible;
        },
        iconPath: './BoonIcons/Hermes/Hermes_FlurryCast.webp',
    },
    Hermes_QuickFavor: {
        id: 'Hermes_QuickFavor',
        name: 'Quick Favor',
        description: 'Your Call charges up automatically.',
        god: God.Hermes,
        pommable: false,
        requirementTest: hasAtLeastOneOf([ 'Aphrodite_Aid', 'Ares_Aid', 'Artemis_Aid', 'Athena_Aid', 'Demeter_Aid', 'Dionysus_Aid', 'Poseidon_Aid', 'Zeus_Aid' ]), // AND HADES AID!!!!!
        iconPath: './BoonIcons/Hermes/Hermes_QuickFavor.webp',
    },
    Hermes_HyperSprint: {
        id: 'Hermes_HyperSprint',
        name: 'Hyper Sprint',
        description: 'For X seconds after you Dash, become Sturdy and run +100% faster.',
        god: God.Hermes,
        pommable: false,
        iconPath: './BoonIcons/Hermes/Hermes_HyperSprint.webp',
    },
    Hermes_GreaterHaste: {
        id: 'Hermes_GreaterHaste',
        name: 'Greater Haste',
        description: 'You move X% faster.',
        god: God.Hermes,
        pommable: false,
        iconPath: './BoonIcons/Hermes/Hermes_GreaterHaste.webp',
    },
    Hermes_QuickRecovery: {
        id: 'Hermes_QuickRecovery',
        name: 'Quick Recovery',
        description: 'After you take damage, quickly Dash to recover up to X% [Health] lost.',
        god: God.Hermes,
        pommable: false,
        iconPath: './BoonIcons/Hermes/Hermes_QuickRecovery.webp',
    },
    Hermes_GreaterEvasion: {
        id: 'Hermes_GreaterEvasion',
        name: 'Greater Evasion',
        description: 'You have +X% chance to Dodge.',
        god: God.Hermes,
        pommable: false,
        iconPath: './BoonIcons/Hermes/Hermes_GreaterEvasion.webp',
    },
    Hermes_GreatestReflex: {
        id: 'Hermes_GreatestReflex',
        name: 'Greatest Reflex',
        description: 'You can Dash +X more time(s) in a row.',
        god: God.Hermes,
        pommable: false,
        iconPath: './BoonIcons/Hermes/Hermes_GreatestReflex.webp',
    },
    Hermes_SecondWind: {
        id: 'Hermes_SecondWind',
        name: 'Second Wind',
        description: 'After using Call, gain Dodge chance and move speed for 10 Sec.',
        god: God.Hermes,
        pommable: false,
        requirementTest: hasAtLeastOneOf([ 'Aphrodite_Aid', 'Ares_Aid', 'Artemis_Aid', 'Athena_Aid', 'Demeter_Aid', 'Dionysus_Aid', 'Poseidon_Aid', 'Zeus_Aid' ]), // AND HADES AID!!!!!
        iconPath: './BoonIcons/Hermes/Hermes_SecondWind.webp',
    },
    Hermes_QuickReload: {
        id: 'Hermes_QuickReload',
        name: 'Quick Reload',
        description: 'Foes drop [Cast] stuck in them faster.',
        god: God.Hermes,
        pommable: false,
        requirementTest: doesNotHaveAnyOf([ 'Demeter_Cast', 'Duo_Ares_Poseidon', 'Ares_Cast', 'Dionysus_Cast' ]),
        testRunAvailability: (runState: RunState) => {
            const aspectCompatabile = (
                runState.aspect !== Aspect.Shield_Beowulf
            );

            const mirrorCompatible = (
                runState.mirror.includes('InfernalSoul')
                // qq what if this talent is disabled (i.e. not taken or removed by heat)?
            );

            return aspectCompatabile && mirrorCompatible;
        },
        iconPath: './BoonIcons/Hermes/Hermes_QuickReload.webp',
    },
    Hermes_SideHustle: {
        id: 'Hermes_SideHustle',
        name: 'Side Hustle',
        description: 'Each time you enter a Chamber, gain a bit of wealth.',
        god: God.Hermes,
        pommable: false,
        iconPath: './BoonIcons/Hermes/Hermes_SideHustle.webp',
    },
    Hermes_RushDelivery: {
        id: 'Hermes_RushDelivery',
        name: 'Rush Delivery',
        description: 'You deal bonus damage based on any bonus move speed.',
        god: God.Hermes,
        pommable: false,
        requirementTest: hasAtLeastOneOf([ 'Hermes_GreaterHaste', 'Hermes_HyperSprint' ]), // and lambent plume (hermes keepsake)
        iconPath: './BoonIcons/Hermes/Hermes_RushDelivery.webp',
    },
    Hermes_AutoReload: {
        id: 'Hermes_AutoReload',
        name: 'Auto Reload',
        description: 'You regenerate [Cast] faster.',
        god: God.Hermes,
        pommable: false,
        testRunAvailability: (runState: RunState) => {
            return runState.mirror.includes('StygianSoul');
            // qq what if this talent is disabled (i.e. not taken or removed by heat)?
        },
        iconPath: './BoonIcons/Hermes/Hermes_AutoReload.webp',
    },
    Hermes_Legendary_GreaterRecall: {
        id: 'Hermes_Legendary_GreaterRecall',
        name: 'Greater Recall',
        description: 'Your [Cast] automatically return to you.',
        god: God.Hermes,
        rarityType: BoonRarityType.Legendary,
        pommable: false,
        requirementTest: hasAtLeastOneOf([ 'Hermes_FlurryCast', 'Hermes_QuickReload' ]), // and lambent plume (hermes keepsake)
        testRunAvailability: (runState: RunState) => {
            return runState.mirror.includes('InfernalSoul');
            // qq what if this talent is disabled (i.e. not taken or removed by heat)?
        },
        iconPath: './BoonIcons/Hermes/Hermes_Legendary_GreaterRecall.webp',
    },
    Hermes_Legendary_BadNews: {
        id: 'Hermes_Legendary_BadNews',
        name: 'Bad News',
        description: 'Your cast deals more damage to foes without [Cast] on them.',
        god: God.Hermes,
        rarityType: BoonRarityType.Legendary,
        pommable: false,
        requirementTest: hasAtLeastOneOf([ 'Hermes_AutoReload' ]), // and lambent plume (hermes keepsake)
        testRunAvailability: (runState: RunState) => {
            return runState.mirror.includes('StygianSoul');
            // qq what if this talent is disabled (i.e. not taken or removed by heat)?
        },
        iconPath: './BoonIcons/Hermes/Hermes_Legendary_BadNews.webp',
    },
};
