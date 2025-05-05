import { AspectId } from '@/data/weapon';
import { Hammer, HammerId } from './types';

const Hammers_Shield: Array<Hammer> = [
    {
        id: HammerId.Shield_DreadFlight,
        name: 'Dread Flight',
        description: 'Your Special can strike up to 4 additional foes before returning.',
        aspectIds: [ AspectId.Shield_Zagreus, AspectId.Shield_Chaos, AspectId.Shield_Beowulf ],
        iconPath: './Icons/Hammer/Shield/DreadFlight.webp',
    },
    {
        id: HammerId.Shield_SuddenRush,
        name: 'Sudden Rush',
        description: 'Your Bull Rush charges much faster.',
        aspectIds: [ AspectId.Shield_Zagreus, AspectId.Shield_Chaos, AspectId.Shield_Zeus, AspectId.Shield_Beowulf ],
        iconPath: './Icons/Hammer/Shield/SuddenRush.webp',
    },
    {
        id: HammerId.Shield_PulverizingBlow,
        name: 'Pulverizing Blow',
        description: 'Your Attack hits twice, but does not knock foes away.',
        aspectIds: [ AspectId.Shield_Zagreus, AspectId.Shield_Chaos, AspectId.Shield_Zeus, AspectId.Shield_Beowulf ],
        iconPath: './Icons/Hammer/Shield/PulverizingBlow.webp',
    },
    {
        id: HammerId.Shield_DashingWallop,
        name: 'Dashing Wallop',
        description: 'Your Dash-Strike deals +50% damage in a larger area.',
        aspectIds: [ AspectId.Shield_Zagreus, AspectId.Shield_Chaos, AspectId.Shield_Zeus, AspectId.Shield_Beowulf ],
        iconPath: './Icons/Hammer/Shield/DashingWallop.webp',
    },
    {
        id: HammerId.Shield_ExplosiveReturn,
        name: 'Explosive Return',
        description: 'Your Special deals 50 damage to nearby foes when you catch it.',
        aspectIds: [ AspectId.Shield_Zagreus, AspectId.Shield_Chaos, AspectId.Shield_Zeus, AspectId.Shield_Beowulf ],
        iconPath: './Icons/Hammer/Shield/ExplosiveReturn.webp',
    },
    {
        id: HammerId.Shield_MinotaurRush,
        name: 'Minotaur Rush',
        description: 'Your Bull Rush gains a Power Rush that does +500% damage.',
        aspectIds: [ AspectId.Shield_Zagreus, AspectId.Shield_Chaos, AspectId.Shield_Zeus, AspectId.Shield_Beowulf ],
        iconPath: './Icons/Hammer/Shield/MinotaurRush.webp',
    },
    {
        id: HammerId.Shield_BreachingRush,
        name: 'Breaching Rush',
        description: 'Your Bull Rush deals +400% damage to Armor.',
        aspectIds: [ AspectId.Shield_Zagreus, AspectId.Shield_Chaos, AspectId.Shield_Zeus, AspectId.Shield_Beowulf ],
        iconPath: './Icons/Hammer/Shield/BreachingRush.webp',
    },
    {
        id: HammerId.Shield_ChargedShot,
        name: 'Charged Shot',
        description: 'Your Bull Rush instead fires a piercing shot that deals 80 base damage.',
        aspectIds: [ AspectId.Shield_Zagreus, AspectId.Shield_Chaos, AspectId.Shield_Zeus, AspectId.Shield_Beowulf ],
        iconPath: './Icons/Hammer/Shield/ChargedShot.webp',
    },
    {
        id: HammerId.Shield_ChargedFlight,
        name: 'Charged Flight',
        description: 'Hold Special to charge your throw for up to +200% base damage.',
        incompatible: [ HammerId.Shield_DashingFlight ],
        aspectIds: [ AspectId.Shield_Zagreus, AspectId.Shield_Chaos, AspectId.Shield_Beowulf ],
        iconPath: './Icons/Hammer/Shield/ChargedFlight.webp',
    },
    {
        id: HammerId.Shield_EmpoweringFlight,
        name: 'Empowering Flight',
        description: 'After your Special hits, your next 2 Attacks deal +80% damage.',
        aspectIds: [ AspectId.Shield_Zagreus, AspectId.Shield_Chaos, AspectId.Shield_Zeus, AspectId.Shield_Beowulf ],
        iconPath: './Icons/Hammer/Shield/EmpoweringFlight.webp',
    },
    {
        id: HammerId.Shield_DashingFlight,
        name: 'Dashing Flight',
        description: 'While you Dash, your Special is faster and deals +200% damage.',
        incompatible: [ HammerId.Shield_ChargedFlight ],
        aspectIds: [ AspectId.Shield_Zagreus, AspectId.Shield_Chaos, AspectId.Shield_Beowulf ],
        iconPath: './Icons/Hammer/Shield/DashingFlight.webp',
    },
    {
        id: HammerId.Shield_FerociousGuard,
        name: 'Ferocious Guard',
        description: 'After blocking a foe, gain +20% damage and move speed for 10 Sec.',
        aspectIds: [ AspectId.Shield_Zagreus, AspectId.Shield_Chaos, AspectId.Shield_Zeus, AspectId.Shield_Beowulf ],
        iconPath: './Icons/Hammer/Shield/FerociousGuard.webp',
    },
    {
        id: HammerId.Shield_UnyieldingDefense,
        name: 'Unyielding Defense',
        description: 'After using your Naegling\'s Board Cast, you are Sturdy for 3 Sec.',
        aspectIds: [ AspectId.Shield_Beowulf ],
        iconPath: './Icons/Hammer/Shield/UnyieldingDefense.webp',
    },
];

export default Hammers_Shield;
