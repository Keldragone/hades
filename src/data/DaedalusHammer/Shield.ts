import { Aspect } from "../weapon";

export const DaedalusHammers_Shield = [
    {
        id: 'DreadFlight',
        name: 'Dread Flight',
        description: 'Your Special can strike up to 4 additional foes before returning.',
        availabilityTest: () => {
            // Can't be taken with Zeus
        },
        aspects: [ Aspect.Shield_Zagreus, Aspect.Shield_Chaos, Aspect.Shield_Beowulf ],
        iconPath: './Icons/DaedalusHammer/Shield/DreadFlight.webp',
    },
    {
        id: 'SuddenRush',
        name: 'Sudden Rush',
        description: 'Your Bull Rush charges much faster.',
        aspects: [ Aspect.Shield_Zagreus, Aspect.Shield_Chaos, Aspect.Shield_Zeus, Aspect.Shield_Beowulf ],
        iconPath: './Icons/DaedalusHammer/Shield/SuddenRush.webp',
    },
    {
        id: 'PulverizingBlow',
        name: 'Pulverizing Blow',
        description: 'Your Attack hits twice, but does not knock foes away.',
        aspects: [ Aspect.Shield_Zagreus, Aspect.Shield_Chaos, Aspect.Shield_Zeus, Aspect.Shield_Beowulf ],
        iconPath: './Icons/DaedalusHammer/Shield/PulverizingBlow.webp',
    },
    {
        id: 'DashingWallop',
        name: 'Dashing Wallop',
        description: 'Your Dash-Strike deals +50% damage in a larger area.',
        aspects: [ Aspect.Shield_Zagreus, Aspect.Shield_Chaos, Aspect.Shield_Zeus, Aspect.Shield_Beowulf ],
        iconPath: './Icons/DaedalusHammer/Shield/DashingWallop.webp',
    },
    {
        id: 'ExplosiveReturn',
        name: 'Explosive Return',
        description: 'Your Special deals 50 damage to nearby foes when you catch it.',
        aspects: [ Aspect.Shield_Zagreus, Aspect.Shield_Chaos, Aspect.Shield_Zeus, Aspect.Shield_Beowulf ],
        iconPath: './Icons/DaedalusHammer/Shield/ExplosiveReturn.webp',
    },
    {
        id: 'MinotaurRush',
        name: 'Minotaur Rush',
        description: 'Your Bull Rush gains a Power Rush that does +500% damage.',
        aspects: [ Aspect.Shield_Zagreus, Aspect.Shield_Chaos, Aspect.Shield_Zeus, Aspect.Shield_Beowulf ],
        iconPath: './Icons/DaedalusHammer/Shield/MinotaurRush.webp',
    },
    {
        id: 'BreachingRush',
        name: 'Breaching Rush',
        description: 'Your Bull Rush deals +400% damage to Armor.',
        aspects: [ Aspect.Shield_Zagreus, Aspect.Shield_Chaos, Aspect.Shield_Zeus, Aspect.Shield_Beowulf ],
        iconPath: './Icons/DaedalusHammer/Shield/BreachingRush.webp',
    },
    {
        id: 'ChargedShot',
        name: 'Charged Shot',
        description: 'Your Bull Rush instead fires a piercing shot that deals 80 base damage.',
        aspects: [ Aspect.Shield_Zagreus, Aspect.Shield_Chaos, Aspect.Shield_Zeus, Aspect.Shield_Beowulf ],
        iconPath: './Icons/DaedalusHammer/Shield/ChargedShot.webp',
    },
    {
        id: 'ChargedFlight',
        name: 'Charged Flight',
        description: 'Hold Special to charge your throw for up to +200% base damage.',
        availabilityTest: () => {
            // Can't be combined with Dashing Flight
            // Can't be taken with Zeus
        },
        aspects: [ Aspect.Shield_Zagreus, Aspect.Shield_Chaos, Aspect.Shield_Beowulf ],
        iconPath: './Icons/DaedalusHammer/Shield/ChargedFlight.webp',
    },
    {
        id: 'EmpoweringFlight',
        name: 'Empowering Flight',
        description: 'After your Special hits, your next 2 Attacks deal +80% damage.',
        aspects: [ Aspect.Shield_Zagreus, Aspect.Shield_Chaos, Aspect.Shield_Zeus, Aspect.Shield_Beowulf ],
        iconPath: './Icons/DaedalusHammer/Shield/EmpoweringFlight.webp',
    },
    {
        id: 'DashingFlight',
        name: 'Dashing Flight',
        description: 'While you Dash, your Special is faster and deals +200% damage.',
        availabilityTest: () => {
            // Can't be combined with Charged Flight
            // Can't be taken with Zeus
        },
        aspects: [ Aspect.Shield_Zagreus, Aspect.Shield_Chaos, Aspect.Shield_Beowulf ],
        iconPath: './Icons/DaedalusHammer/Shield/DashingFlight.webp',
    },
    {
        id: 'FerociousGuard',
        name: 'Ferocious Guard',
        description: 'After blocking a foe, gain +20% damage and move speed for 10 Sec.',
        aspects: [ Aspect.Shield_Zagreus, Aspect.Shield_Chaos, Aspect.Shield_Zeus, Aspect.Shield_Beowulf ],
        iconPath: './Icons/DaedalusHammer/Shield/FerociousGuard.webp',
    },
    {
        id: 'UnyieldingDefense',
        name: 'Unyielding Defense',
        description: 'After using your Naegling\'s Board Cast, you are Sturdy for 3 Sec.',
        availabilityTest: () => {
            // Can ONLY be taken with Beowulf
        },
        aspects: [ Aspect.Shield_Beowulf ],
        iconPath: './Icons/DaedalusHammer/Shield/UnyieldingDefense.webp',
    },
]