import { AspectId } from '@/data/weapon';
import { Hammer, HammerId } from './types';

const Hammers_Spear: Array<Hammer> = [
    {
        id: HammerId.Spear_ExtendingJab,
        name: 'Extending Jab',
        description: 'Your Attack has more range and deals +40% damage to distant foes.',
        aspectIds: [ AspectId.Spear_Zagreus, AspectId.Spear_Achilles, AspectId.Spear_Hades, AspectId.Spear_GuanYu ],
        iconPath: './Icons/Hammer/Spear/ExtendingJab.webp',
    },
    {
        id: HammerId.Spear_ChainSkewer,
        name: 'Chain Skewer',
        description: 'Your Special bounces to up to 7 foes, dealing +30% damage for each.',
        incompatible: [ HammerId.Spear_ExplodingLauncher ],
        aspectIds: [ AspectId.Spear_Zagreus, AspectId.Spear_Hades ],
        iconPath: './Icons/Hammer/Spear/ChainSkewer.webp',
    },
    {
        id: HammerId.Spear_BreachingSkewer,
        name: 'Breaching Skewer',
        description: 'Your Special deals +400% damage to Armor.',
        aspectIds: [ AspectId.Spear_Zagreus, AspectId.Spear_Achilles, AspectId.Spear_Hades, AspectId.Spear_GuanYu ],
        iconPath: './Icons/Hammer/Spear/BreachingSkewer.webp',
    },
    {
        id: HammerId.Spear_ViciousSkewer,
        name: 'Vicious Skewer',
        description: 'Your Special deals +50% damage; +50% Critical chance on recovery.',
        incompatible: [ HammerId.Spear_ExplodingLauncher ],
        aspectIds: [ AspectId.Spear_Zagreus, AspectId.Spear_Achilles, AspectId.Spear_Hades ],
        iconPath: './Icons/Hammer/Spear/ViciousSkewer.webp',
    },
    {
        id: HammerId.Spear_ExplodingLauncher,
        name: 'Exploding Launcher',
        description: 'Your Special is replaced with a shot that deals 50 damage in an area.',
        incompatible: [ HammerId.Spear_ChainSkewer, HammerId.Spear_ViciousSkewer ],
        aspectIds: [ AspectId.Spear_Zagreus, AspectId.Spear_Hades ],
        iconPath: './Icons/Hammer/Spear/ExplodingLauncher.webp',
    },
    {
        id: HammerId.Spear_MassiveSpin,
        name: 'Massive Spin',
        description: 'Your Spin Attack deals +125% damage and hits a larger area.',
        incompatible: [ HammerId.Spear_FlurryJab ],
        aspectIds: [ AspectId.Spear_Zagreus, AspectId.Spear_Achilles, AspectId.Spear_Hades, AspectId.Spear_GuanYu ],
        iconPath: './Icons/Hammer/Spear/MassiveSpin.webp',
    },
    {
        id: HammerId.Spear_QuickSpin,
        name: 'Quick Spin',
        description: 'Your Spin Attack charges and recovers much faster.',
        incompatible: [ HammerId.Spear_FlurryJab ],
        aspectIds: [ AspectId.Spear_Zagreus, AspectId.Spear_Achilles, AspectId.Spear_Hades, AspectId.Spear_GuanYu ],
        iconPath: './Icons/Hammer/Spear/QuickSpin.webp',
    },
    {
        id: HammerId.Spear_FlurryJab,
        name: 'Flurry Jab',
        description: 'Hold Attack to strike rapidly, but you cannot Spin Attack.',
        incompatible: [ HammerId.Spear_FlaringSpin, HammerId.Spear_MassiveSpin, HammerId.Spear_QuickSpin ],
        aspectIds: [ AspectId.Spear_Zagreus, AspectId.Spear_Achilles ],
        iconPath: './Icons/Hammer/Spear/FlurryJab.webp',
    },
    {
        id: HammerId.Spear_ChargedSkewer,
        name: 'Charged Skewer',
        description: 'Hold Special to charge your skewer for up to +200% base damage. Minimum range reduced.',
        aspectIds: [ AspectId.Spear_Zagreus, AspectId.Spear_Hades, AspectId.Spear_GuanYu ],
        iconPath: './Icons/Hammer/Spear/ChargedSkewer.webp',
    },
    {
        id: HammerId.Spear_SerratedPoint,
        name: 'Serrated Point',
        description: 'Your Dash-Strike hits 3 times, but your dash has -25% range.',
        // qq TEST WHETHER THIS IS INCOMPATIBLE WITH FLURRY JAB!! I DONT THINK IT IS...
        aspectIds: [ AspectId.Spear_Zagreus, AspectId.Spear_Achilles, AspectId.Spear_Hades, AspectId.Spear_GuanYu ],
        iconPath: './Icons/Hammer/Spear/SerratedPoint.webp',
    },
    {
        id: HammerId.Spear_FlaringSpin,
        name: 'Flaring Spin',
        description: 'Charging your Spin Attack makes you Sturdy and pulse 40 damage.',
        incompatible: [ HammerId.Spear_FlurryJab ],
        aspectIds: [ AspectId.Spear_Zagreus, AspectId.Spear_Achilles, AspectId.Spear_Hades, AspectId.Spear_GuanYu ],
        iconPath: './Icons/Hammer/Spear/FlaringSpin.webp',
    },
    {
        id: HammerId.Spear_TripleJab,
        name: 'Triple Jab',
        description: 'Your Attack strikes 3 times in a spread pattern.',
        aspectIds: [ AspectId.Spear_Zagreus, AspectId.Spear_Achilles, AspectId.Spear_Hades, AspectId.Spear_GuanYu ],
        iconPath: './Icons/Hammer/Spear/TripleJab.webp',
    },
    {
        id: HammerId.Spear_WingedSerpent,
        name: 'Winged Serpent',
        description: 'Your Frost Fair Blade Spin Attack travels for +80% longer.',
        aspectIds: [ AspectId.Spear_GuanYu ],
        iconPath: './Icons/Hammer/Spear/WingedSerpent.webp',
    },
];

export default Hammers_Spear;
