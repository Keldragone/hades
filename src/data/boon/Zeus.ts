import { hasBoon, hasBoonInSlot, notUsingAspect, oneOrMoreOf, usingAspect, usingKeepsake } from './requirementsTests';

import { Boon, BoonId } from './types';

import { BoonRarityType } from '../boonRarityType';
import { BoonSlot } from '../boonSlot';
import { GodId } from '../god';
import { AspectId } from '../weapon';
import { KeepsakeId } from '../keepsake';

const Boons_Zeus: Array<Boon> = [
    {
        id: BoonId.Zeus_Attack,
        name: 'Lightning Strike',
        description: 'Your Attack emits chain-lightning when you damage a foe.',
        godId: GodId.Zeus,
        slot: BoonSlot.Attack,
        iconPath: './Icons/Boon/Zeus/Zeus_Attack.webp',
    },
    {
        id: BoonId.Zeus_Special,
        name: 'Thunder Flourish',
        description: 'Your Special causes a lightning bolt to strike nearby foes.',
        godId: GodId.Zeus,
        slot: BoonSlot.Special,
        iconPath: './Icons/Boon/Zeus/Zeus_Special.webp',
    },
    {
        id: BoonId.Zeus_Cast,
        name: 'Electric Shot',
        description: 'Your Cast is a burst of chain-lightning that bounces between foes.',
        godId: GodId.Zeus,
        slot: BoonSlot.Cast,
        testRunAvailability: notUsingAspect(AspectId.Shield_Beowulf),
        iconPath: './Icons/Boon/Zeus/Zeus_Cast.webp',
    },
    {
        id: BoonId.Zeus_CastAlternate,
        name: 'Thunder Flare',
        description: 'Your Cast causes a lightning bolt to strike nearby foes.',
        godId: GodId.Zeus,
        slot: BoonSlot.Cast,
        testRunAvailability: usingAspect(AspectId.Shield_Beowulf),
        iconPath: './Icons/Boon/Zeus/Zeus_Cast.webp',
    },
    {
        id: BoonId.Zeus_Dash,
        name: 'Divine Dash',
        description: 'Your Dash causes a lightning bolt to strike nearby foes.',
        godId: GodId.Zeus,
        slot: BoonSlot.Dash,
        iconPath: './Icons/Boon/Zeus/Zeus_Dash.webp',
    },
    {
        id: BoonId.Zeus_Aid,
        name: 'Zeus\'s Aid',
        description: 'Your Call makes lightning strike nearby foes repeatedly for 1.5 Sec.',
        godId: GodId.Zeus,
        slot: BoonSlot.Aid,
        iconPath: './Icons/Boon/Zeus/Zeus_Aid.webp',
    },
    {
        id: BoonId.Zeus_BillowingStrength,
        name: 'Billowing Strength',
        description: 'After using Call, you deal more damage for 15 Sec.',
        godId: GodId.Zeus,
        testRequirements: oneOrMoreOf([
            hasBoonInSlot(BoonSlot.Aid),
            usingKeepsake(KeepsakeId.Hades),
        ]),
        iconPath: './Icons/Boon/Zeus/Zeus_BillowingStrength.webp',
    },
    {
        id: BoonId.Zeus_LightningReflexes,
        name: 'Lightning Reflexes',
        description: 'After you Dash just before getting hit, a bolt strikes a nearby foes.',
        godId: GodId.Zeus,
        iconPath: './Icons/Boon/Zeus/Zeus_LightningReflexes.webp',
    },
    {
        id: BoonId.Zeus_HeavensVengeance,
        name: 'Heaven\'s Vengeance',
        description: 'After you take damage, your foe is struck by lightning.',
        godId: GodId.Zeus,
        iconPath: './Icons/Boon/Zeus/Zeus_HeavensVengeance.webp',
    },
    {
        id: BoonId.Zeus_CloudedJudgment,
        name: 'Clouded Judgment',
        description: 'Your God Gauge charges faster when you deal or take damage.',
        godId: GodId.Zeus,
        testRequirements: oneOrMoreOf([
            hasBoonInSlot(BoonSlot.Aid),
            usingKeepsake(KeepsakeId.Hades),
        ]),
        iconPath: './Icons/Boon/Zeus/Zeus_CloudedJudgment.webp',
    },
    {
        id: BoonId.Zeus_HighVoltage,
        name: 'High Voltage',
        description: 'Your lightning bolt effects deal damage in a larger area.',
        godId: GodId.Zeus,
        testRequirements: oneOrMoreOf([
            hasBoon(BoonId.Zeus_Special),
            hasBoon(BoonId.Zeus_Aid),
            hasBoon(BoonId.Zeus_Dash),
            hasBoon(BoonId.Zeus_CastAlternate),
        ]),
        iconPath: './Icons/Boon/Zeus/Zeus_HighVoltage.webp',
    },
    {
        id: BoonId.Zeus_DoubleStrike,
        name: 'Double Strike',
        description: 'Your lightning bolt effects have a chance to strike twice.',
        godId: GodId.Zeus,
        testRequirements: oneOrMoreOf([
            hasBoon(BoonId.Zeus_Special),
            hasBoon(BoonId.Zeus_Aid),
            hasBoon(BoonId.Zeus_Dash),
            hasBoon(BoonId.Zeus_CastAlternate),
        ]),
        iconPath: './Icons/Boon/Zeus/Zeus_DoubleStrike.webp',
    },
    {
        id: BoonId.Zeus_StormLightning,
        name: 'Storm Lightning',
        description: 'Your chain-lightning effects bounce more times before expiring.',
        godId: GodId.Zeus,
        testRequirements: oneOrMoreOf([
            hasBoon(BoonId.Zeus_Attack),
            hasBoon(BoonId.Zeus_Cast),
        ]),
        iconPath: './Icons/Boon/Zeus/Zeus_StormLightning.webp',
    },
    {
        id: BoonId.Zeus_StaticDischarge,
        name: 'Static Discharge',
        description: 'Your lightning effects also make foes Jolted.',
        godId: GodId.Zeus,
        testRequirements: oneOrMoreOf([
            hasBoon(BoonId.Zeus_Special),
            hasBoon(BoonId.Zeus_Aid),
            hasBoon(BoonId.Zeus_Dash),
            hasBoon(BoonId.Zeus_HeavensVengeance),
            hasBoon(BoonId.Zeus_Attack),
            hasBoon(BoonId.Zeus_Cast),
            hasBoon(BoonId.Zeus_LightningReflexes),
            hasBoon(BoonId.Zeus_CastAlternate),
        ]),
        iconPath: './Icons/Boon/Zeus/Zeus_StaticDischarge.webp',
    },
    {
        id: BoonId.Zeus_Legendary,
        name: 'Splitting Bolt',
        description: 'All your lightning effects create an additional burst.',
        godId: GodId.Zeus,
        rarityType: BoonRarityType.Legendary,
        pommable: false,
        testRequirements: oneOrMoreOf([
            hasBoon(BoonId.Zeus_StormLightning),
            hasBoon(BoonId.Zeus_HighVoltage),
            hasBoon(BoonId.Zeus_DoubleStrike),
        ]),
        iconPath: './Icons/Boon/Zeus/Zeus_Legendary.webp',
    },
];

export default Boons_Zeus;
