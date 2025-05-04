import { Aspect } from "../weapon";

export const DaedalusHammers_Bow = [
    {
        id: 'TwinShot',
        name: 'Twin Shot',
        description: 'Your Attack fires 2 shots side-by-side, but has reduced range.',
        availabilityTest: () => {
            // Can't be combined with Triple Shot or Sniper Shot.
        },
        aspects: [ Aspect.Bow_Zagreus, Aspect.Bow_Chiron, Aspect.Bow_Hera, Aspect.Bow_Rama ], 
        iconPath: './Icons/DaedalusHammer/Bow/TwinShot.webp',
    },
    {
        id: 'SniperShot',
        name: 'Sniper Shot',
        description: 'Your Attack deals +200% damage to distant foes.',
        availabilityTest: () => {
            // Can't be combined with Point-Blank Shot or Twin Shot.
        },
        aspects: [ Aspect.Bow_Zagreus, Aspect.Bow_Chiron, Aspect.Bow_Hera, Aspect.Bow_Rama ],
        iconPath: './Icons/DaedalusHammer/Bow/SniperShot.webp',
    },
    {
        id: 'ExplosiveShot',
        name: 'Explosive Shot',
        description: 'Your Attack deals +300% damage in an area, but charges slower.',
        availabilityTest: () => {
            // Can't be combined with Flurry Shot or Chain Shot.
        },
        aspects: [ Aspect.Bow_Zagreus, Aspect.Bow_Chiron, Aspect.Bow_Hera, Aspect.Bow_Rama ],
        iconPath: './Icons/DaedalusHammer/Bow/ExplosiveShot.webp',
    },
    {
        id: 'FlurryShot',
        name: 'Flurry Shot',
        description: 'Hold Attack to shoot rapidly, but you cannot Power Shot.',
        availabilityTest: () => {
            // Can't be combined with Perfect Shot or Explosive Shot.
            // Can't be taken with Rama.
        },
        aspects: [ Aspect.Bow_Zagreus, Aspect.Bow_Chiron, Aspect.Bow_Hera ],
        iconPath: './Icons/DaedalusHammer/Bow/FlurryShot.webp',
    },
    {
        id: 'PiercingVolley',
        name: 'Piercing Volley',
        description: 'Your Special pierces foes and deals +400% damage to Armor.',
        availabilityTest: () => {
            // Can't be taken with Rama.
        },
        aspects: [ Aspect.Bow_Zagreus, Aspect.Bow_Chiron, Aspect.Bow_Hera ],
        iconPath: './Icons/DaedalusHammer/Bow/PiercingVolley.webp',
    },
    {
        id: 'PerfectShot',
        name: 'Perfect Shot',
        description: 'Your Power Shot is easier to execute and deals +150% damage.',
        availabilityTest: () => {
            // Can't be combined with Flurry Shot.
        },
        aspects: [ Aspect.Bow_Zagreus, Aspect.Bow_Chiron, Aspect.Bow_Hera, Aspect.Bow_Rama ],
        iconPath: './Icons/DaedalusHammer/Bow/PerfectShot.webp',
    },
    {
        id: 'RelentlessVolley',
        name: 'Relentless Volley',
        description: 'Your Special shoots +4 shots.',
        availabilityTest: () => {
            // Can't be combined with Charged Volley.
        },
        aspects: [ Aspect.Bow_Zagreus, Aspect.Bow_Chiron, Aspect.Bow_Hera, Aspect.Bow_Rama ],
        iconPath: './Icons/DaedalusHammer/Bow/RelentlessVolley.webp',
    },
    {
        id: 'TripleShot',
        name: 'Triple Shot',
        description: 'Your Attack fires 3 shots in a spread pattern.',
        availabilityTest: () => {
            // Can't be combined with Twin Shot.
        },
        aspects: [ Aspect.Bow_Zagreus, Aspect.Bow_Chiron, Aspect.Bow_Hera, Aspect.Bow_Rama ],
        iconPath: './Icons/DaedalusHammer/Bow/TripleShot.webp',
    },
    {
        id: 'ChargedVolley',
        name: 'Charged Volley',
        description: 'Hold Special for up to 250% base damage; minimum range is reduced.',
        availabilityTest: () => {
            // Can't be combined with Relentless Volley.
            // Can't be taken with Chiron or Rama.
        },
        aspects: [ Aspect.Bow_Zagreus, Aspect.Bow_Hera ],
        iconPath: './Icons/DaedalusHammer/Bow/ChargedVolley.webp',
    },
    {
        id: 'ChainShot',
        name: 'Chain Shot',
        description: 'Your Attack bounces to up to 3 foes, dealing +15% damage for each.',
        availabilityTest: () => {
            // Can't be combined with Explosive Shot.
        },
        aspects: [ Aspect.Bow_Zagreus, Aspect.Bow_Chiron, Aspect.Bow_Hera, Aspect.Bow_Rama ],
        iconPath: './Icons/DaedalusHammer/Bow/ChainShot.webp',
    },
    {
        id: 'PointBlankShot',
        name: 'Point-Blank Shot',
        description: 'Your Attack deals +150% damage to nearby foes.',
        availabilityTest: () => {
            // Can't be combined with Sniper Shot.
        },
        aspects: [ Aspect.Bow_Zagreus, Aspect.Bow_Chiron, Aspect.Bow_Hera, Aspect.Bow_Rama ],
        iconPath: './Icons/DaedalusHammer/Bow/PointBlankShot.webp',
    },
    {
        id: 'ConcentratedVolley',
        name: 'Concentrated Volley',
        description: 'Your Special deals +3 base damage for each consecutive hit to a foe.',
        availabilityTest: () => {
            // Can't be taken with Rama.
        },
        aspects: [ Aspect.Bow_Zagreus, Aspect.Bow_Chiron, Aspect.Bow_Hera ],
        iconPath: './Icons/DaedalusHammer/Bow/ConcentratedVolley.webp',
    },
    {
        id: 'RepulseShot',
        name: 'Repulse Shot',
        description: 'Your Celestial Sharanga Attack creates a Blast Wave around you.',
        availabilityTest: () => {
            // Can ONLY be taken with Rama.
        },
        aspects: [ Aspect.Bow_Rama ],
        iconPath: './Icons/DaedalusHammer/Bow/RepulseShot.webp',
    },
]