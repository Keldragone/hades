import { Aspect } from "../weapon";

export const DaedalusHammers_Sword = [
    {
        id: 'BreachingSlash',
        name: 'Breaching Slash',
        description: 'Your Attack deals +300% damage to Armor.',
        aspects: [ Aspect.Sword_Zagreus, Aspect.Sword_Nemesis, Aspect.Sword_Poseidon, Aspect.Sword_Arthur ],
        iconPath: './Icons/DaedalusHammer/Sword/BreachingSlash.webp',
    },
    {
        id: 'CruelThrust',
        name: 'Cruel Thrust',
        description: 'Your Thrust deals +200% damage and has a +40% Critical chance.',
        availabilityTest: () => {
            // Can't combine with World Splitter or Flurry Slash
            // Can't be taken with Arthur
        },
        aspects: [ Aspect.Sword_Zagreus, Aspect.Sword_Nemesis, Aspect.Sword_Poseidon ],
        iconPath: './Icons/DaedalusHammer/Sword/CruelThrust.webp',
    },
    {
        id: 'CursedSlash',
        name: 'Cursed Slash',
        description: 'Your Attack restores 2 [Health], but you have -60% [Max Health].',
        aspects: [ Aspect.Sword_Zagreus, Aspect.Sword_Nemesis, Aspect.Sword_Poseidon, Aspect.Sword_Arthur ],
        iconPath: './Icons/DaedalusHammer/Sword/CursedSlash.webp',
    },
    {
        id: 'DashNova',
        name: 'Dash Nova',
        description: 'Your Special makes you lunge ahead, then become Sturdy for 0.8 Sec.',
        aspects: [ Aspect.Sword_Zagreus, Aspect.Sword_Nemesis, Aspect.Sword_Poseidon, Aspect.Sword_Arthur ],
        iconPath: './Icons/DaedalusHammer/Sword/DashNova.webp',
    },
    {
        id: 'DoubleEdge',
        name: 'Double Edge',
        description: 'Your Dash-Strike hits twice and deals +20% damage.',
        aspects: [ Aspect.Sword_Zagreus, Aspect.Sword_Nemesis, Aspect.Sword_Poseidon, Aspect.Sword_Arthur ],
        iconPath: './Icons/DaedalusHammer/Sword/DoubleEdge.webp',
    },
    {
        id: 'DoubleNova',
        name: 'Double Nova',
        description: 'Your Special hits twice but no longer knocks foes away.',
        aspects: [ Aspect.Sword_Zagreus, Aspect.Sword_Nemesis, Aspect.Sword_Poseidon, Aspect.Sword_Arthur ],
        iconPath: './Icons/DaedalusHammer/Sword/DoubleNova.webp',
    },
    {
        id: 'FlurrySlash',
        name: 'Flurry Slash',
        description: 'Hold Attack to strike rapidly, dealing 25 base damage per hit.',
        availabilityTest: () => {
            // Can't combine with World Splitter or Cruel Thrust
            // Can't be taken with Arthur
        },
        aspects: [ Aspect.Sword_Zagreus, Aspect.Sword_Nemesis, Aspect.Sword_Poseidon ],
        iconPath: './Icons/DaedalusHammer/Sword/FlurrySlash.webp',
    },
    {
        id: 'HoardingSlash',
        name: 'Hoarding Slash',
        description: 'Your Attack deals bonus damage equal to 5% of your current [Obols].',
        aspects: [ Aspect.Sword_Zagreus, Aspect.Sword_Nemesis, Aspect.Sword_Poseidon, Aspect.Sword_Arthur ],
        iconPath: './Icons/DaedalusHammer/Sword/HoardingSlash.webp',
    },
    {
        id: 'PiercingWave',
        name: 'Piercing Wave',
        description: 'Your Attack fires a wave that pierces foes, dealing 30 damage.',
        aspects: [ Aspect.Sword_Zagreus, Aspect.Sword_Nemesis, Aspect.Sword_Poseidon, Aspect.Sword_Arthur ],
        iconPath: './Icons/DaedalusHammer/Sword/PiercingWave.webp',
    },
    {
        id: 'ShadowSlash',
        name: 'Shadow Slash',
        description: 'Your Attack deals +200% damage when striking foes from behind.',
        aspects: [ Aspect.Sword_Zagreus, Aspect.Sword_Nemesis, Aspect.Sword_Poseidon, Aspect.Sword_Arthur ],
        iconPath: './Icons/DaedalusHammer/Sword/ShadowSlash.webp',
    },
    {
        id: 'SuperNova',
        name: 'Super Nova',
        description: 'Your Special hits a wider area and deals +20% damage.',
        aspects: [ Aspect.Sword_Zagreus, Aspect.Sword_Nemesis, Aspect.Sword_Poseidon, Aspect.Sword_Arthur ],
        iconPath: './Icons/DaedalusHammer/Sword/SuperNova.webp',
    },
    {
        id: 'WorldSplitter',
        name: 'World Splitter',
        description: 'Your Attack is replaced with a big chop that deals 90 base damage.',
        availabilityTest: () => {
            // Can't combine with Cruel Thrust or Flurry Slash
            // Can't be taken with Arthur
        },
        aspects: [ Aspect.Sword_Zagreus, Aspect.Sword_Nemesis, Aspect.Sword_Poseidon ],
        iconPath: './Icons/DaedalusHammer/Sword/WorldSplitter.webp',
    },
    {
        id: 'GreaterConsecration',
        name: 'Greater Consecration',
        description: 'Your Holy Excalibur aura is +45% larger; makes foes +10% slower.',
        availabilityTest: () => {
            // Can ONLY be taken with Arthur
        },
        aspects: [ Aspect.Sword_Arthur ],
        iconPath: './Icons/DaedalusHammer/Sword/GreaterConsecration.webp',
    },
]