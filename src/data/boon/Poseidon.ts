import { allOf, hasBoon, usingKeepsake, notUsingAspect, oneOrMoreOf, usingAspect, xOrMoreOf, hasBoonInSlot } from './requirementsTests';

import { Boon, BoonId } from './types';

import { BoonRarityType } from '@/data/boonRarityType';
import { BoonSlot } from '@/data/boonSlot';
import { GodId } from '@/data/god';
import { AspectId } from '@/data/weapon';
import { KeepsakeId } from '@/data/keepsake';

const Boons_Poseidon: Array<Boon> = [
    {
        id: BoonId.Poseidon_Attack,
        name: 'Tempest Strike',
        description: 'Your Attack deals more damage and knocks foes away.',
        godId: GodId.Poseidon,
        slot: BoonSlot.Attack,
        iconPath: './Icons/Boon/Poseidon/Poseidon_Attack.webp',
    },
    {
        id: BoonId.Poseidon_Special,
        name: 'Tempest Flourish',
        description: 'Your Special deals more damage and knocks foes away.',
        godId: GodId.Poseidon,
        slot: BoonSlot.Special,
        iconPath: './Icons/Boon/Poseidon/Poseidon_Special.webp',
    },
    {
        id: BoonId.Poseidon_Cast,
        name: 'Flood Shot',
        description: 'Your Cast damages foes in an area and knocks them away.',
        godId: GodId.Poseidon,
        slot: BoonSlot.Cast,
        testRunAvailability: notUsingAspect(AspectId.Shield_Beowulf),
        iconPath: './Icons/Boon/Poseidon/Poseidon_Cast.webp',
    },
    {
        id: BoonId.Poseidon_CastAlternate,
        name: 'Flood Flare',
        description: 'Your Cast damages foes around you and knocks them away.',
        godId: GodId.Poseidon,
        slot: BoonSlot.Cast,
        testRunAvailability: usingAspect(AspectId.Shield_Beowulf),
        iconPath: './Icons/Boon/Poseidon/Poseidon_Cast.webp',
    },
    {
        id: BoonId.Poseidon_Dash,
        name: 'Tidal Dash',
        description: 'Your Dash damages foes in an area and knocks them away.',
        godId: GodId.Poseidon,
        slot: BoonSlot.Dash,
        iconPath: './Icons/Boon/Poseidon/Poseidon_Dash.webp',
    },
    {
        id: BoonId.Poseidon_Aid,
        name: 'Poseidon\'s Aid',
        description: 'Your Call makes you surge into foes while Impervious for 1.2 Sec.',
        godId: GodId.Poseidon,
        slot: BoonSlot.Aid,
        iconPath: './Icons/Boon/Poseidon/Poseidon_Aid.webp',
    },
    {
        id: BoonId.Poseidon_BoilingPoint,
        name: 'Boiling Point',
        description: 'Your God Gauge charges faster when you take damage.',
        godId: GodId.Poseidon,
        testRequirements: oneOrMoreOf([
            hasBoonInSlot(BoonSlot.Aid),
            usingKeepsake(KeepsakeId.Hades),
        ]),
        iconPath: './Icons/Boon/Poseidon/Poseidon_BoilingPoint.webp',
    },
    {
        id: BoonId.Poseidon_HydraulicMight,
        name: 'Hydraulic Might',
        description: 'Your Attack and Special are stronger the first 10 Sec. in Encounter(s).',
        godId: GodId.Poseidon,
        iconPath: './Icons/Boon/Poseidon/Poseidon_HydraulicMight.webp',
    },
    {
        id: BoonId.Poseidon_SunkenTreasure,
        name: 'Sunken Treasure',
        description: 'Gain an assortment of [Gemstone], [Darkness], [Obols] and [Heal].',
        godId: GodId.Poseidon,
        pommable: false,
        iconPath: './Icons/Boon/Poseidon/Poseidon_SunkenTreasure.webp',
        // Can get this MULTIPLE TIMES?!?!
    },
    {
        id: BoonId.Poseidon_OceansBounty,
        name: 'Ocean\'s Bounty',
        description: 'Any [Gemstone], [Darkness] or [Obols] chamber rewards are worth more.',
        godId: GodId.Poseidon,
        pommable: false,
        iconPath: './Icons/Boon/Poseidon/Poseidon_OceansBounty.webp',
    },
    {
        id: BoonId.Poseidon_TyphoonsFury,
        name: 'Typhoon\'s Fury',
        description: 'You deal more damage when slamming foes into barriers.',
        godId: GodId.Poseidon,
        testRequirements: oneOrMoreOf([
            hasBoon(BoonId.Poseidon_Attack),
            hasBoon(BoonId.Poseidon_Dash),
            hasBoon(BoonId.Poseidon_Cast),
            hasBoon(BoonId.Poseidon_CastAlternate),
            hasBoon(BoonId.Poseidon_Special),
            hasBoon(BoonId.Poseidon_Aid),
        ]),
        iconPath: './Icons/Boon/Poseidon/Poseidon_TyphoonsFury.webp',
    },
    {
        id: BoonId.Poseidon_WavePounding,
        name: 'Wave Pounding',
        description: 'Your boons with Knock-Away effects deal bonus damage to bosses.',
        godId: GodId.Poseidon,
        testRequirements: oneOrMoreOf([
            hasBoon(BoonId.Poseidon_Attack),
            hasBoon(BoonId.Poseidon_Dash),
            hasBoon(BoonId.Poseidon_Cast),
            hasBoon(BoonId.Poseidon_CastAlternate),
            hasBoon(BoonId.Poseidon_Special),
            hasBoon(BoonId.Poseidon_Aid),
        ]),
        iconPath: './Icons/Boon/Poseidon/Poseidon_WavePounding.webp',
    },
    {
        id: BoonId.Poseidon_RipCurrent,
        name: 'Rip Current',
        description: 'Your Call pulls in foes and the effect lasts longer.',
        godId: GodId.Poseidon,
        testRequirements: hasBoon(BoonId.Poseidon_Aid),
        iconPath: './Icons/Boon/Poseidon/Poseidon_RipCurrent.webp',
    },
    {
        id: BoonId.Poseidon_BreakingWave,
        name: 'Breaking Wave',
        description: 'Slamming foes into walls or corners creates a watery blast in the area.',
        godId: GodId.Poseidon,
        testRequirements: oneOrMoreOf([
            hasBoon(BoonId.Poseidon_Attack),
            hasBoon(BoonId.Poseidon_Dash),
            hasBoon(BoonId.Poseidon_Cast),
            hasBoon(BoonId.Poseidon_CastAlternate),
            hasBoon(BoonId.Poseidon_Special),
            hasBoon(BoonId.Poseidon_Aid),
        ]),
        iconPath: './Icons/Boon/Poseidon/Poseidon_BreakingWave.webp',
    },
    {
        id: BoonId.Poseidon_RazorShoals,
        name: 'Razor Shoals',
        description: 'Using knock-away effects also Rupture foes.',
        godId: GodId.Poseidon,
        testRequirements: oneOrMoreOf([
            hasBoon(BoonId.Poseidon_Attack),
            hasBoon(BoonId.Poseidon_Dash),
            hasBoon(BoonId.Poseidon_Cast),
            hasBoon(BoonId.Poseidon_CastAlternate),
            hasBoon(BoonId.Poseidon_Special),
            hasBoon(BoonId.Poseidon_Aid),
        ]),
        iconPath: './Icons/Boon/Poseidon/Poseidon_RazorShoals.webp',
    },
    {
        id: BoonId.Poseidon_Legendary_SecondWave,
        name: 'Second Wave',
        description: 'Your knock-away effects shove foes a second time after the first.',
        godId: GodId.Poseidon,
        rarityType: BoonRarityType.Legendary,
        pommable: false,
        testRequirements: allOf([
            oneOrMoreOf([
                hasBoon(BoonId.Poseidon_TyphoonsFury),
                hasBoon(BoonId.Poseidon_BreakingWave),
            ]),
            oneOrMoreOf([
                hasBoon(BoonId.Poseidon_Attack),
                hasBoon(BoonId.Poseidon_Dash),
                hasBoon(BoonId.Poseidon_Cast),
                hasBoon(BoonId.Poseidon_Special),
                hasBoon(BoonId.Poseidon_Aid),
            ]),
        ]),
        iconPath: './Icons/Boon/Poseidon/Poseidon_Legendary_SecondWave.webp',
    },
    {
        id: BoonId.Poseidon_Legendary_HugeCatch,
        name: 'Huge Catch',
        description: 'You have a greater chance to find Fishing Point in each Chamber.',
        godId: GodId.Poseidon,
        rarityType: BoonRarityType.Legendary,
        pommable: false,
        testRequirements: xOrMoreOf(2, [
            usingKeepsake(KeepsakeId.Poseidon),
            hasBoon(BoonId.Poseidon_OceansBounty),
            hasBoon(BoonId.Poseidon_SunkenTreasure),
        ]),
        iconPath: './Icons/Boon/Poseidon/Poseidon_Legendary_HugeCatch.webp',
    },
];

export default Boons_Poseidon;
