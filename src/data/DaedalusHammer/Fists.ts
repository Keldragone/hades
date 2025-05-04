import { Aspect } from "../weapon";

export const DaedalusHammers_Fists = [
    {
        id: 'BreachingCross',
        name: 'Breaching Cross',
        description: 'Your Dash-Strike pierces foes and deals +900% damage to Armor.',
        aspects: [ Aspect.Fists_Zagreus, Aspect.Fists_Talos, Aspect.Fists_Demeter, Aspect.Fists_Gilgamesh ],
        iconPath: './Icons/DaedalusHammer/Fists/BreachingCross.webp',
    },
    {
        id: 'RollingKnuckle',
        name: 'Rolling Knuckle',
        description: 'Your Dash-Strike deals +60% damage; added to Attack sequence.',
        availabilityTest: () => {
            // Can't be combined with Heavy Knuckle.
            // Can't be taken with Gilgamesh.
        },
        aspects: [ Aspect.Fists_Zagreus, Aspect.Fists_Talos, Aspect.Fists_Demeter ],
        iconPath: './Icons/DaedalusHammer/Fists/RollingKnuckle.webp',
    },
    {
        id: 'LongKnuckle',
        name: 'Long Knuckle',
        description: 'Your Attack has more range and deals +10% damage.',
        availabilityTest: () => {
            // Can't be taken with Gilgamesh.
        },
        aspects: [ Aspect.Fists_Zagreus, Aspect.Fists_Talos, Aspect.Fists_Demeter ],
        iconPath: './Icons/DaedalusHammer/Fists/LongKnuckle.webp',
    },
    {
        id: 'DrainingCutter',
        name: 'Draining Cutter',
        description: 'Whenever your Special slays foes, restore 2% [Health].',
        aspects: [ Aspect.Fists_Zagreus, Aspect.Fists_Talos, Aspect.Fists_Demeter, Aspect.Fists_Gilgamesh ],
        iconPath: './Icons/DaedalusHammer/Fists/DrainingCutter.webp',
    },
    {
        id: 'ConcentratedKnuckle',
        name: 'Concentrated Knuckle',
        description: 'Your Attack deals +5 base damage for each uninterrupted hit to a foe.',
        aspects: [ Aspect.Fists_Zagreus, Aspect.Fists_Talos, Aspect.Fists_Demeter, Aspect.Fists_Gilgamesh ],
        iconPath: './Icons/DaedalusHammer/Fists/ConcentratedKnuckle.webp',
    },
    {
        id: 'ExplosiveUpper',
        name: 'Explosive Upper',
        description: 'Your Dash-Upper deals +100% damage in an area.',
        availabilityTest: () => {
            // Can't be combined with Kinetic Launcher.
        },
        aspects: [ Aspect.Fists_Zagreus, Aspect.Fists_Talos, Aspect.Fists_Demeter, Aspect.Fists_Gilgamesh ],
        iconPath: './Icons/DaedalusHammer/Fists/ExplosiveUpper.webp',
    },
    {
        id: 'FlyingCutter',
        name: 'Flying Cutter',
        description: 'Hold Special for longer range and up to +100% base damage.',
        availabilityTest: () => {
            // Can't be combined with Rush Kick or Kinetic Launcher.
            // Can't be taken with Talos.
        },
        aspects: [ Aspect.Fists_Zagreus, Aspect.Fists_Demeter, Aspect.Fists_Gilgamesh ],
        iconPath: './Icons/DaedalusHammer/Fists/FlyingCutter.webp',
    },
    {
        id: 'RushKick',
        name: 'Rush Kick',
        description: 'Your Special becomes an advancing kick that also deals 40 base damage twice.',
        availabilityTest: () => {
            // Can't be combined with Flying Cutter or Kinetic Launcher.
            // Can't be taken with Talos.
        },
        aspects: [ Aspect.Fists_Zagreus, Aspect.Fists_Demeter, Aspect.Fists_Gilgamesh ],
        iconPath: './Icons/DaedalusHammer/Fists/RushKick.webp',
    },
    {
        id: 'QuakeCutter',
        name: 'Quake Cutter',
        description: 'After using your Special, deal 90 damage in an area where you land.',
        availabilityTest: () => {
            // Can't be combined with Kinetic Launcher.
            // Can't be taken with Demeter.
        },
        aspects: [ Aspect.Fists_Zagreus, Aspect.Fists_Talos, Aspect.Fists_Gilgamesh ],
        iconPath: './Icons/DaedalusHammer/Fists/QuakeCutter.webp',
    },
    {
        id: 'KineticLauncher',
        name: 'Kinetic Launcher',
        description: 'Your Special becomes a charged ranged attack that deals 50 base damage.',
        availabilityTest: () => {
            // Can't be combined with Rush Kick, Flying Cutter, Explosive Upper, or Quake Cutter.
            // Can't be taken with Talos or Gilgamesh.
        },
        aspects: [ Aspect.Fists_Zagreus, Aspect.Fists_Demeter ],
        iconPath: './Icons/DaedalusHammer/Fists/KineticLauncher.webp',
    },
    {
        id: 'HeavyKnuckle',
        name: 'Heavy Knuckle',
        description: 'Your Attack becomes a slower 3-hit sequence, each deals 40 base damage.',
        availabilityTest: () => {
            // Can't be combined with Rolling Knuckle.
            // Can't be taken with Gilgamesh.
        },
        aspects: [ Aspect.Fists_Zagreus, Aspect.Fists_Talos, Aspect.Fists_Demeter ],
        iconPath: './Icons/DaedalusHammer/Fists/HeavyKnuckle.webp',
    },
    {
        id: 'ColossusKnuckle',
        name: 'Colossus Knuckle',
        description: 'While using your Attack or Special, you are Sturdy.',
        aspects: [ Aspect.Fists_Zagreus, Aspect.Fists_Talos, Aspect.Fists_Demeter, Aspect.Fists_Gilgamesh ],
        iconPath: './Icons/DaedalusHammer/Fists/ColossusKnuckle.webp',
    },
    {
        id: 'RendingClaws',
        name: 'Rending Claws',
        description: 'Maim-afflicted foes take +25% damage and move 30% slower.',
        availabilityTest: () => {
            // Can't ONLY be taken with Gilgamesh.
        },
        aspects: [ Aspect.Fists_Gilgamesh ],
        iconPath: './Icons/DaedalusHammer/Fists/RendingClaws.webp',
    },
]