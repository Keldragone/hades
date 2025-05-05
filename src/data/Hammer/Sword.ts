import { AspectId } from '@/data/weapon';
import { Hammer, HammerId } from './types';

const Hammers_Sword: Array<Hammer> = [
    {
        id: HammerId.Sword_BreachingSlash,
        name: 'Breaching Slash',
        description: 'Your Attack deals +300% damage to Armor.',
        aspectIds: [ AspectId.Sword_Zagreus, AspectId.Sword_Nemesis, AspectId.Sword_Poseidon, AspectId.Sword_Arthur ],
        iconPath: './Icons/Hammer/Sword/BreachingSlash.webp',
    },
    {
        id: HammerId.Sword_CruelThrust,
        name: 'Cruel Thrust',
        description: 'Your Thrust deals +200% damage and has a +40% Critical chance.',
        incompatible: [ HammerId.Sword_WorldSplitter, HammerId.Sword_FlurrySlash ],
        aspectIds: [ AspectId.Sword_Zagreus, AspectId.Sword_Nemesis, AspectId.Sword_Poseidon ],
        iconPath: './Icons/Hammer/Sword/CruelThrust.webp',
    },
    {
        id: HammerId.Sword_CursedSlash,
        name: 'Cursed Slash',
        description: 'Your Attack restores 2 [Health], but you have -60% [Max Health].',
        aspectIds: [ AspectId.Sword_Zagreus, AspectId.Sword_Nemesis, AspectId.Sword_Poseidon, AspectId.Sword_Arthur ],
        iconPath: './Icons/Hammer/Sword/CursedSlash.webp',
    },
    {
        id: HammerId.Sword_DashNova,
        name: 'Dash Nova',
        description: 'Your Special makes you lunge ahead, then become Sturdy for 0.8 Sec.',
        aspectIds: [ AspectId.Sword_Zagreus, AspectId.Sword_Nemesis, AspectId.Sword_Poseidon, AspectId.Sword_Arthur ],
        iconPath: './Icons/Hammer/Sword/DashNova.webp',
    },
    {
        id: HammerId.Sword_DoubleEdge,
        name: 'Double Edge',
        description: 'Your Dash-Strike hits twice and deals +20% damage.',
        aspectIds: [ AspectId.Sword_Zagreus, AspectId.Sword_Nemesis, AspectId.Sword_Poseidon, AspectId.Sword_Arthur ],
        iconPath: './Icons/Hammer/Sword/DoubleEdge.webp',
    },
    {
        id: HammerId.Sword_DoubleNova,
        name: 'Double Nova',
        description: 'Your Special hits twice but no longer knocks foes away.',
        aspectIds: [ AspectId.Sword_Zagreus, AspectId.Sword_Nemesis, AspectId.Sword_Poseidon, AspectId.Sword_Arthur ],
        iconPath: './Icons/Hammer/Sword/DoubleNova.webp',
    },
    {
        id: HammerId.Sword_FlurrySlash,
        name: 'Flurry Slash',
        description: 'Hold Attack to strike rapidly, dealing 25 base damage per hit.',
        incompatible: [ HammerId.Sword_WorldSplitter, HammerId.Sword_CruelThrust ],
        aspectIds: [ AspectId.Sword_Zagreus, AspectId.Sword_Nemesis, AspectId.Sword_Poseidon ],
        iconPath: './Icons/Hammer/Sword/FlurrySlash.webp',
    },
    {
        id: HammerId.Sword_HoardingSlash,
        name: 'Hoarding Slash',
        description: 'Your Attack deals bonus damage equal to 5% of your current [Obols].',
        aspectIds: [ AspectId.Sword_Zagreus, AspectId.Sword_Nemesis, AspectId.Sword_Poseidon, AspectId.Sword_Arthur ],
        iconPath: './Icons/Hammer/Sword/HoardingSlash.webp',
    },
    {
        id: HammerId.Sword_PiercingWave,
        name: 'Piercing Wave',
        description: 'Your Attack fires a wave that pierces foes, dealing 30 damage.',
        aspectIds: [ AspectId.Sword_Zagreus, AspectId.Sword_Nemesis, AspectId.Sword_Poseidon, AspectId.Sword_Arthur ],
        iconPath: './Icons/Hammer/Sword/PiercingWave.webp',
    },
    {
        id: HammerId.Sword_ShadowSlash,
        name: 'Shadow Slash',
        description: 'Your Attack deals +200% damage when striking foes from behind.',
        aspectIds: [ AspectId.Sword_Zagreus, AspectId.Sword_Nemesis, AspectId.Sword_Poseidon, AspectId.Sword_Arthur ],
        iconPath: './Icons/Hammer/Sword/ShadowSlash.webp',
    },
    {
        id: HammerId.Sword_SuperNova,
        name: 'Super Nova',
        description: 'Your Special hits a wider area and deals +20% damage.',
        aspectIds: [ AspectId.Sword_Zagreus, AspectId.Sword_Nemesis, AspectId.Sword_Poseidon, AspectId.Sword_Arthur ],
        iconPath: './Icons/Hammer/Sword/SuperNova.webp',
    },
    {
        id: HammerId.Sword_WorldSplitter,
        name: 'World Splitter',
        description: 'Your Attack is replaced with a big chop that deals 90 base damage.',
        incompatible: [ HammerId.Sword_CruelThrust, HammerId.Sword_FlurrySlash ],
        aspectIds: [ AspectId.Sword_Zagreus, AspectId.Sword_Nemesis, AspectId.Sword_Poseidon ],
        iconPath: './Icons/Hammer/Sword/WorldSplitter.webp',
    },
    {
        id: HammerId.Sword_GreaterConsecration,
        name: 'Greater Consecration',
        description: 'Your Holy Excalibur aura is +45% larger; makes foes +10% slower.',
        aspectIds: [ AspectId.Sword_Arthur ],
        iconPath: './Icons/Hammer/Sword/GreaterConsecration.webp',
    },
];

export default Hammers_Sword;
