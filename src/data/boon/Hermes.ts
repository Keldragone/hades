import { allOf, hasBoon, usingKeepsake, hasMirrorTalent, noneOf, notUsingAspect, oneOrMoreOf, usingAspect } from './requirementsTests';
import { Boon, BoonId } from './types';

import { BoonRarityType } from '../boonRarityType';
import { GodId } from '../god';
import { AspectId } from '../weapon';
import { MirrorTalentId } from '../mirror';
import { KeepsakeId } from '../keepsake';

const Boons_Hermes: Array<Boon> = [
    {
        id: BoonId.Hermes_QuickReload,
        name: 'Quick Reload',
        description: 'Foes drop [Cast] stuck in them faster.',
        godId: GodId.Hermes,
        pommable: false,
        // requirementTest: doesNotHaveAnyOf([ 'Demeter_Cast', 'Duo_Ares_Poseidon', 'Ares_Cast', 'Dionysus_Cast' ]),
        // qq can we still get this if we take incompatible casts?
        testRunAvailability: allOf([
            notUsingAspect(AspectId.Shield_Beowulf),
            hasMirrorTalent(MirrorTalentId.InfernalSoul) // qq what if this talent is disabled (i.e. not taken or removed by heat)?
        ]),
        iconPath: './Icons/Boon/Hermes/Hermes_QuickReload.webp',
    },
    {
        id: BoonId.Hermes_AutoReload,
        name: 'Auto Reload',
        description: 'You regenerate [Cast] faster.',
        godId: GodId.Hermes,
        pommable: false,
        testRunAvailability: hasMirrorTalent(MirrorTalentId.StygianSoul), // qq what if this talent is disabled (i.e. not taken or removed by heat)?
        iconPath: './Icons/Boon/Hermes/Hermes_AutoReload.webp',
    },
    {
        id: BoonId.Hermes_GreatestReflex,
        name: 'Greatest Reflex',
        description: 'You can Dash +X more time(s) in a row.',
        godId: GodId.Hermes,
        pommable: false,
        iconPath: './Icons/Boon/Hermes/Hermes_GreatestReflex.webp',
    },
    {
        id: BoonId.Hermes_SideHustle,
        name: 'Side Hustle',
        description: 'Each time you enter a Chamber, gain a bit of wealth.',
        godId: GodId.Hermes,
        pommable: false,
        iconPath: './Icons/Boon/Hermes/Hermes_SideHustle.webp',
    },
    {
        id: BoonId.Hermes_GreaterEvasion,
        name: 'Greater Evasion',
        description: 'You have +X% chance to Dodge.',
        godId: GodId.Hermes,
        pommable: false,
        iconPath: './Icons/Boon/Hermes/Hermes_GreaterEvasion.webp',
    },
    {
        id: BoonId.Hermes_SwiftFlourish,
        name: 'Swift Flourish',
        description: 'Your Special is +X% faster.',
        godId: GodId.Hermes,
        pommable: false,
        iconPath: './Icons/Boon/Hermes/Hermes_SwiftFlourish.webp',
    },
    {
        id: BoonId.Hermes_SecondWind,
        name: 'Second Wind',
        description: 'After using Call, gain Dodge chance and move speed for 10 Sec.',
        godId: GodId.Hermes,
        pommable: false,
        // requirementTest: hasAtLeastOneOf([ 'Aphrodite_Aid', 'Ares_Aid', 'Artemis_Aid', 'Athena_Aid', 'Demeter_Aid', 'Dionysus_Aid', 'Poseidon_Aid', 'Zeus_Aid' ]), // AND HADES AID!!!!!
        // qq do we need aid?
        iconPath: './Icons/Boon/Hermes/Hermes_SecondWind.webp',
    },
    {
        id: BoonId.Hermes_SwiftStrike,
        name: 'Swift Strike',
        description: 'Your Attack is +X% faster.',
        godId: GodId.Hermes,
        pommable: false,
        iconPath: './Icons/Boon/Hermes/Hermes_SwiftStrike.webp',
    },
    {
        id: BoonId.Hermes_GreaterHaste,
        name: 'Greater Haste',
        description: 'You move X% faster.',
        godId: GodId.Hermes,
        pommable: false,
        iconPath: './Icons/Boon/Hermes/Hermes_GreaterHaste.webp',
    },
    {
        id: BoonId.Hermes_FlurryCast,
        name: 'Flurry Cast',
        description: 'Your Cast is +X% faster and fully automatic.',
        godId: GodId.Hermes,
        pommable: false, 
        testRunAvailability: allOf([
            noneOf([
                usingAspect(AspectId.Shield_Beowulf),
                usingAspect(AspectId.Bow_Hera),
            ]),
            hasMirrorTalent(MirrorTalentId.InfernalSoul) // qq what if this talent is disabled (i.e. not taken or removed by heat)?
        ]),
        iconPath: './Icons/Boon/Hermes/Hermes_FlurryCast.webp',
    },
    {
        id: BoonId.Hermes_QuickFavor,
        name: 'Quick Favor',
        description: 'Your Call charges up automatically.',
        godId: GodId.Hermes,
        pommable: false,
        // requirementTest: hasAtLeastOneOf([ 'Aphrodite_Aid', 'Ares_Aid', 'Artemis_Aid', 'Athena_Aid', 'Demeter_Aid', 'Dionysus_Aid', 'Poseidon_Aid', 'Zeus_Aid' ]), // AND HADES AID!!!!!
        // qq do we need aid?
        iconPath: './Icons/Boon/Hermes/Hermes_QuickFavor.webp',
    },
    {
        id: BoonId.Hermes_QuickRecovery,
        name: 'Quick Recovery',
        description: 'After you take damage, quickly Dash to recover up to X% [Health] lost.',
        godId: GodId.Hermes,
        pommable: false,
        iconPath: './Icons/Boon/Hermes/Hermes_QuickRecovery.webp',
    },
    {
        id: BoonId.Hermes_HyperSprint,
        name: 'Hyper Sprint',
        description: 'For X seconds after you Dash, become Sturdy and run +100% faster.',
        godId: GodId.Hermes,
        pommable: false,
        iconPath: './Icons/Boon/Hermes/Hermes_HyperSprint.webp',
    },
    {
        id: BoonId.Hermes_RushDelivery,
        name: 'Rush Delivery',
        description: 'You deal bonus damage based on any bonus move speed.',
        godId: GodId.Hermes,
        pommable: false,
        testRequirements: oneOrMoreOf([
            hasBoon(BoonId.Hermes_GreaterHaste),
            hasBoon(BoonId.Hermes_HyperSprint),
            usingKeepsake(KeepsakeId.Hermes),
        ]),
        iconPath: './Icons/Boon/Hermes/Hermes_RushDelivery.webp',
    },
    {
        id: BoonId.Hermes_Legendary_GreaterRecall,
        name: 'Greater Recall',
        description: 'Your [Cast] automatically return to you.',
        godId: GodId.Hermes,
        rarityType: BoonRarityType.Legendary,
        pommable: false,
        testRunAvailability: hasMirrorTalent(MirrorTalentId.InfernalSoul), // qq what if this talent is disabled (i.e. not taken or removed by heat)?
        testRequirements: oneOrMoreOf([
            hasBoon(BoonId.Hermes_FlurryCast),
            hasBoon(BoonId.Hermes_QuickReload),
            usingKeepsake(KeepsakeId.Hermes),
        ]),
        iconPath: './Icons/Boon/Hermes/Hermes_Legendary_GreaterRecall.webp',
    },
    {
        id: BoonId.Hermes_Legendary_BadNews,
        name: 'Bad News',
        description: 'Your cast deals more damage to foes without [Cast] on them.',
        godId: GodId.Hermes,
        rarityType: BoonRarityType.Legendary,
        pommable: false,
        testRunAvailability: hasMirrorTalent(MirrorTalentId.StygianSoul), // qq what if this talent is disabled (i.e. not taken or removed by heat)?
        testRequirements: oneOrMoreOf([
            hasBoon(BoonId.Hermes_AutoReload),
            usingKeepsake(KeepsakeId.Hermes),
        ]),
        iconPath: './Icons/Boon/Hermes/Hermes_Legendary_BadNews.webp',
    },
];

export default Boons_Hermes;
