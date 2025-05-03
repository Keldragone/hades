import { Aspect_Spear } from "../weapon";

export const DaedalusHammers_Spear = [
    {
        id: 'ExtendingJab',
        name: 'Extending Jab',
        description: 'Your Attack has more range and deals +40% damage to distant foes.',
        aspects: [ Aspect_Spear.Zagreus, Aspect_Spear.Achilles, Aspect_Spear.Hades, Aspect_Spear.GuanYu ],
        iconPath: './Icons/DaedalusHammer/Spear/ExtendingJab.webp',
    },
    {
        id: 'ChainSkewer',
        name: 'Chain Skewer',
        description: 'Your Special bounces to up to 7 foes, dealing +30% damage for each.',
        availabilityTest: () => {
            // Can't combine with Exploding Launcher
            // Can't be taken with Achilles or Guan Yu
        },
        aspects: [ Aspect_Spear.Zagreus, Aspect_Spear.Hades ],
        iconPath: './Icons/DaedalusHammer/Spear/ChainSkewer.webp',
    },
    {
        id: 'BreachingSkewer',
        name: 'Breaching Skewer',
        description: 'Your Special deals +400% damage to Armor.',
        aspects: [ Aspect_Spear.Zagreus, Aspect_Spear.Achilles, Aspect_Spear.Hades, Aspect_Spear.GuanYu ],
        iconPath: './Icons/DaedalusHammer/Spear/BreachingSkewer.webp',
    },
    {
        id: 'ViciousSkewer',
        name: 'Vicious Skewer',
        description: 'Your Special deals +50% damage; +50% Critical chance on recovery.',
        availabilityTest: () => {
            // Can't combine with Exploding Launcher
            // Can't be taken with Guan Yu
        },
        aspects: [ Aspect_Spear.Zagreus, Aspect_Spear.Achilles, Aspect_Spear.Hades ],
        iconPath: './Icons/DaedalusHammer/Spear/ViciousSkewer.webp',
    },
    {
        id: 'ExplodingLauncher',
        name: 'Exploding Launcher',
        description: 'Your Special is replaced with a shot that deals 50 damage in an area.',
        availabilityTest: () => {
            // Can't combine with Chain Skewer or Vicious Skewer
            // Can't be taken with Achilles or Guan Yu
        },
        aspects: [ Aspect_Spear.Zagreus, Aspect_Spear.Hades ],
        iconPath: './Icons/DaedalusHammer/Spear/ExplodingLauncher.webp',
    },
    {
        id: 'MassiveSpin',
        name: 'Massive Spin',
        description: 'Your Spin Attack deals +125% damage and hits a larger area.',
        availabilityTest: () => {
            // Can't combine with Flurry Jab
        },
        aspects: [ Aspect_Spear.Zagreus, Aspect_Spear.Achilles, Aspect_Spear.Hades, Aspect_Spear.GuanYu ],
        iconPath: './Icons/DaedalusHammer/Spear/MassiveSpin.webp',
    },
    {
        id: 'QuickSpin',
        name: 'Quick Spin',
        description: 'Your Spin Attack charges and recovers much faster.',
        availabilityTest: () => {
            // Can't combine with Flurry Jab
        },
        aspects: [ Aspect_Spear.Zagreus, Aspect_Spear.Achilles, Aspect_Spear.Hades, Aspect_Spear.GuanYu ],
        iconPath: './Icons/DaedalusHammer/Spear/QuickSpin.webp',
    },
    {
        id: 'FlurryJab',
        name: 'Flurry Jab',
        description: 'Hold Attack to strike rapidly, but you cannot Spin Attack.',
        availabilityTest: () => {
            // Can't combine with Flaring Spin, Massive Spin, or Quick Spin
            // Can't be taken with Hades or Guan Yu
        },
        aspects: [ Aspect_Spear.Zagreus, Aspect_Spear.Achilles ],
        iconPath: './Icons/DaedalusHammer/Spear/FlurryJab.webp',
    },
    {
        id: 'ChargedSkewer',
        name: 'Charged Skewer',
        description: 'Hold Special to charge your skewer for up to +200% base damage. Minimum range reduced.',
        availabilityTest: () => {
            // Can't be taken with Achilles
        },
        aspects: [ Aspect_Spear.Zagreus, Aspect_Spear.Hades, Aspect_Spear.GuanYu ],
        iconPath: './Icons/DaedalusHammer/Spear/ChargedSkewer.webp',
    },
    {
        id: 'SerratedPoint',
        name: 'Serrated Point',
        description: 'Your Dash-Strike hits 3 times, but your dash has -25% range.',
        availabilityTest: () => {
            // Can't combine with Flurry Jab (wait what) I don't think this is true
        },
        aspects: [ Aspect_Spear.Zagreus, Aspect_Spear.Achilles, Aspect_Spear.Hades, Aspect_Spear.GuanYu ],
        iconPath: './Icons/DaedalusHammer/Spear/SerratedPoint.webp',
    },
    {
        id: 'FlaringSpin',
        name: 'Flaring Spin',
        description: 'Charging your Spin Attack makes you Sturdy and pulse 40 damage.',
        availabilityTest: () => {
            // Can't combine with Flurry Jab
        },
        aspects: [ Aspect_Spear.Zagreus, Aspect_Spear.Achilles, Aspect_Spear.Hades, Aspect_Spear.GuanYu ],
        iconPath: './Icons/DaedalusHammer/Spear/Flaring Spin.webp',
    },
    {
        id: 'TripleJab',
        name: 'Triple Jab',
        description: 'Your Attack strikes 3 times in a spread pattern.',
        aspects: [ Aspect_Spear.Zagreus, Aspect_Spear.Achilles, Aspect_Spear.Hades, Aspect_Spear.GuanYu ],
        iconPath: './Icons/DaedalusHammer/Spear/TripleJab.webp',
    },
    {
        id: 'WingedSerpent',
        name: 'Winged Serpent',
        description: 'Your Frost Fair Blade Spin Attack travels for +80% longer.',
        availabilityTest: () => {
            // Can ONLY take with Guan Yu
        },
        aspects: [ Aspect_Spear.GuanYu ],
        iconPath: './Icons/DaedalusHammer/Spear/WingedSerpent.webp',
    },
]