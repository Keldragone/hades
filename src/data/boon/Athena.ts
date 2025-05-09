import { hasBoon, hasBoonInSlot, notUsingAspect, oneOrMoreOf, usingAspect, usingKeepsake } from './requirementsTests';

import { Boon, BoonId } from './types';

import { BoonRarityType } from '../boonRarityType';
import { BoonSlot } from '../boonSlot';
import { GodId } from '../god';
import { AspectId } from '../weapon';
import { KeepsakeId } from '../keepsake';

const Boons_Athena: Array<Boon> = [
    {
        id: BoonId.Athena_Attack,
        name: 'Divine Strike',
        description: 'Your Attack is stronger, and can Deflect.',
        godId: GodId.Athena,
        slot: BoonSlot.Attack,
        iconPath: './Icons/Boon/Athena/Athena_Attack.webp',
    },
    {
        id: BoonId.Athena_Special,
        name: 'Divine Flourish',
        description: 'Your Special is stronger, and can Deflect.',
        godId: GodId.Athena,
        slot: BoonSlot.Special,
        iconPath: './Icons/Boon/Athena/Athena_Special.webp',
    },
    {
        id: BoonId.Athena_Cast,
        name: 'Phalanx Shot',
        description: 'Your Cast damages foes in a small area, and can Deflect.',
        godId: GodId.Athena,
        slot: BoonSlot.Cast,
        testRunAvailability: notUsingAspect(AspectId.Shield_Beowulf),
        iconPath: './Icons/Boon/Athena/Athena_Cast.webp',
    },
    {
        id: BoonId.Athena_CastAlternate,
        name: 'Phalanx Flare',
        description: 'Your Cast damages foes around you, and can Deflect.',
        godId: GodId.Athena,
        slot: BoonSlot.Cast,
        testRunAvailability: usingAspect(AspectId.Shield_Beowulf),
        iconPath: './Icons/Boon/Athena/Athena_Cast.webp',
    },
    {
        id: BoonId.Athena_Dash,
        name: 'Divine Dash',
        description: 'Your Dash deals damage and can Deflect.',
        godId: GodId.Athena,
        slot: BoonSlot.Dash,
        iconPath: './Icons/Boon/Athena/Athena_Dash.webp',
    },
    {
        id: BoonId.Athena_Aid,
        name: 'Athena\'s Aid',
        description: 'Your Call briefly makes you Invulnerable and Deflect all attacks.',
        godId: GodId.Athena,
        slot: BoonSlot.Aid,
        iconPath: './Icons/Boon/Athena/Athena_Aid.webp',
    },
    {
        id: BoonId.Athena_HolyShield,
        name: 'Holy Shield',
        description: 'After you take damage, damage nearby foes and briefly Deflect.',
        godId: GodId.Athena,
        iconPath: './Icons/Boon/Athena/Athena_HolyShield.webp',
    },
    {
        id: BoonId.Athena_BronzeSkin,
        name: 'Bronze Skin',
        description: 'Resist damage from foes\' attacks.',
        godId: GodId.Athena,
        iconPath: './Icons/Boon/Athena/Athena_BronzeSkin.webp',
    },
    {
        id: BoonId.Athena_DeathlessStand,
        name: 'Deathless Stand',
        description: 'Death Defiance makes you Impervious longer. Replenish 1 charge now.',
        godId: GodId.Athena,
        testRequirements: oneOrMoreOf([
            hasBoon(BoonId.Athena_Attack),
            hasBoon(BoonId.Athena_Cast),
            hasBoon(BoonId.Athena_Dash),
            hasBoon(BoonId.Athena_Special),
        ]),
        iconPath: './Icons/Boon/Athena/Athena_DeathlessStand.webp',
    },
    {
        id: BoonId.Athena_LastStand,
        name: 'Last Stand',
        description: 'Death Defiance restores more [Health] than usual. Replenish 1 charge now.',
        godId: GodId.Athena,
        testRequirements: oneOrMoreOf([
            hasBoon(BoonId.Athena_Attack),
            hasBoon(BoonId.Athena_Cast),
            hasBoon(BoonId.Athena_Dash),
            hasBoon(BoonId.Athena_Special),
        ]),
        iconPath: './Icons/Boon/Athena/Athena_LastStand.webp',
    },
    {
        id: BoonId.Athena_ProudBearing,
        name: 'Proud Bearing',
        description: 'You begin each Encounter with your GodId Gauge partly full.',
        godId: GodId.Athena,
        iconPath: './Icons/Boon/Athena/Athena_ProudBearing.webp',
        testRequirements: oneOrMoreOf([
            hasBoonInSlot(BoonSlot.Aid),
            usingKeepsake(KeepsakeId.Hades),
        ]),
    },
    {
        id: BoonId.Athena_SureFooting,
        name: 'Sure Footing',
        description: 'Resist damage from Traps.',
        godId: GodId.Athena,
        pommable: false,
        iconPath: './Icons/Boon/Athena/Athena_SureFooting.webp',
    },
    {
        id: BoonId.Athena_BlindingFlash,
        name: 'Blinding Flash',
        description: 'Your abilities that can Deflect also make foes Exposed.',
        godId: GodId.Athena,
        testRequirements: oneOrMoreOf([
            hasBoon(BoonId.Athena_Attack),
            hasBoon(BoonId.Athena_Cast),
            hasBoon(BoonId.Athena_CastAlternate),
            hasBoon(BoonId.Athena_Dash),
            hasBoon(BoonId.Athena_Special),
        ]),
        iconPath: './Icons/Boon/Athena/Athena_BlindingFlash.webp',
    },
    {
        id: BoonId.Athena_BrilliantRiposte,
        name: 'Brilliant Riposte',
        description: 'When you Deflect attacks, they deal more damage.',
        godId: GodId.Athena,
        testRequirements: oneOrMoreOf([
            hasBoon(BoonId.Athena_Attack),
            hasBoon(BoonId.Athena_Dash),
            hasBoon(BoonId.Athena_HolyShield),
            hasBoon(BoonId.Athena_Special),
        ]),
        iconPath: './Icons/Boon/Athena/Athena_BrilliantRiposte.webp',
    },
    {
        id: BoonId.Athena_Legendary,
        name: 'Divine Protection',
        description: 'You have a barrier that negates incoming damage.',
        godId: GodId.Athena,
        rarityType: BoonRarityType.Legendary,
        pommable: false,
        testRequirements: hasBoon(BoonId.Athena_BrilliantRiposte),
        iconPath: './Icons/Boon/Athena/Athena_Legendary.webp',
    },
];

export default Boons_Athena;
