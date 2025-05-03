import { Aspect_Rail } from "../weapon";

export const DaedalusHammers_Rail = [
    {
        id: 'FlurryFire',
        name: 'Flurry Fire',
        description: 'Your Attack is faster and more accurate; gain +6 ammo capacity.',
        availabilityTest: () => {
            // Can't be combined with Spread Fire or Delta Chamber.
            // Can't be taken with Lucifer.
        },
        aspects: [ Aspect_Rail.Zagreus, Aspect_Rail.Eris, Aspect_Rail.Hestia ],
        iconPath: './Icons/DaedalusHammer/Rail/FlurryFire.webp',
    },
    {
        id: 'RicochetFire',
        name: 'Ricochet Fire',
        description: 'Your Attack bounces to +1 other foe.',
        availabilityTest: () => {
            // Can't be combined with Explosive Fire, Spread Fire, or Seeking Fire.
            // Can't be taken with Lucifer.
        },
        aspects: [ Aspect_Rail.Zagreus, Aspect_Rail.Eris, Aspect_Rail.Hestia ],
        iconPath: './Icons/DaedalusHammer/Rail/RicochetFire.webp',
    },
    {
        id: 'SpreadFire',
        name: 'Spread Fire',
        description: 'Your Attack becomes a short spread that deals 40 base damage; lose -6 ammo capacity.',
        availabilityTest: () => {
            // Can't be combined with Flurry Fire, Delta Chamber, Ricochet Fire, or Seeking Fire.
            // Can't be taken with Lucifer.
        },
        aspects: [ Aspect_Rail.Zagreus, Aspect_Rail.Eris, Aspect_Rail.Hestia ],
        iconPath: './Icons/DaedalusHammer/Rail/SpreadFire.webp',
    },
    {
        id: 'ExplosiveFire',
        name: 'Explosive Fire',
        description: 'Your Attack deals damage in an area and briefly slows foes.',
        availabilityTest: () => {
            // Can't be combined with Ricochet Fire or Piercing Fire.
            // Can't be taken with Lucifer.
        },
        aspects: [ Aspect_Rail.Zagreus, Aspect_Rail.Eris, Aspect_Rail.Hestia ],
        iconPath: './Icons/DaedalusHammer/Rail/ExplosiveFire.webp',
    },
    {
        id: 'DeltaChamber',
        name: 'Delta Chamber',
        description: 'Your Attack is a 3-round burst; you never have to Reload.',
        availabilityTest: () => {
            // Can't be combined with Spread Fire or Flurry Fire.
            // Can't be taken with Lucifer.
        },
        aspects: [ Aspect_Rail.Zagreus, Aspect_Rail.Eris, Aspect_Rail.Hestia ],
        iconPath: './Icons/DaedalusHammer/Rail/DeltaChamber.webp',
    },
    {
        id: 'PiercingFire',
        name: 'Piercing Fire',
        description: 'Your Attack pierces foes and deals +50% damage to Armor.',
        availabilityTest: () => {
            // Can't be combined with Explosive Fire or Seeking Fire.
        },
        aspects: [ Aspect_Rail.Zagreus, Aspect_Rail.Eris, Aspect_Rail.Hestia, Aspect_Rail.Lucifer ],
        iconPath: './Icons/DaedalusHammer/Rail/PiercingFire.webp',
    },
    {
        id: 'TripleBomb',
        name: 'Triple Bomb',
        description: 'You can use your Special 3 times in rapid succession.',
        availabilityTest: () => {
            // Can't be combined with Cluster Bomb or Hazard Bomb.
        },
        aspects: [ Aspect_Rail.Zagreus, Aspect_Rail.Eris, Aspect_Rail.Hestia, Aspect_Rail.Lucifer ],
        iconPath: './Icons/DaedalusHammer/Rail/TripleBomb.webp',
    },
    {
        id: 'RocketBomb',
        name: 'Rocket Bomb',
        description: 'Your Special is replaced with a rocket that deals 80 base damage.',
        availabilityTest: () => {
            // Can't be combined with Hazard Bomb.
            // Can't be taken with Lucifer.
        },
        aspects: [ Aspect_Rail.Zagreus, Aspect_Rail.Eris, Aspect_Rail.Hestia ],
        iconPath: './Icons/DaedalusHammer/Rail/RocketBomb.webp',
    },
    {
        id: 'TargetingSystem',
        name: 'Targeting System',
        description: 'Foes targeted by your Special move slower and take +30% damage.',
        aspects: [ Aspect_Rail.Zagreus, Aspect_Rail.Eris, Aspect_Rail.Hestia, Aspect_Rail.Lucifer ],
        iconPath: './Icons/DaedalusHammer/Rail/TargetingSystem.webp',
    },
    {
        id: 'HazardBomb',
        name: 'Hazard Bomb',
        description: 'Your Special deals +300% base damage in a large area, but can hurt you.',
        availabilityTest: () => {
            // Can't be combined with Rocket Bomb, Cluster Bomb, or Triple Bomb.
            // Can't be taken with Lucifer.
            // (and eris??? lies)
        },
        aspects: [ Aspect_Rail.Zagreus, Aspect_Rail.Eris, Aspect_Rail.Hestia ],
        iconPath: './Icons/DaedalusHammer/Rail/HazardBomb.webp',
    },
    {
        id: 'ClusterBomb',
        name: 'Cluster Bomb',
        description: 'Your Special fires a spread of 5 bombs, but each deals -30% damage.',
        availabilityTest: () => {
            // Can't be combined with Hazard Bomb or Triple Bomb.
            // Can't be taken with Lucifer.
        },
        aspects: [ Aspect_Rail.Zagreus, Aspect_Rail.Eris, Aspect_Rail.Hestia ],
        iconPath: './Icons/DaedalusHammer/Rail/ClusterBomb.webp',
    },
    {
        id: 'SeekingFire',
        name: 'Seeking Fire',
        description: 'Your Attack seeks the nearest foe and deals +10% damage.',
        availabilityTest: () => {
            // Can't be combined with Piercing Fire, Ricochet Fire, or Spread Fire.
            // Can't be taken with Lucifer.
        },
        aspects: [ Aspect_Rail.Zagreus, Aspect_Rail.Eris, Aspect_Rail.Hestia ],
        iconPath: './Icons/DaedalusHammer/Rail/SeekingFire.webp',
    },
    {
        id: 'ConcentratedBeam',
        name: 'Concentrated Beam',
        description: 'Your Igneus Eden Attack damage to a foe ramps up +100% faster.',
        availabilityTest: () => {
            // Can't be combined with Eternal Chamber.
            // Can ONLY be taken with Lucifer.
        },
        aspects: [ Aspect_Rail.Lucifer ],
        iconPath: './Icons/DaedalusHammer/Rail/ConcentratedBeam.webp',
    },
    {
        id: 'FlashFire',
        name: 'Flash Fire',
        description: 'Your Igneus Eden Attack starts firing and fires +50% faster with +15% range.',
        availabilityTest: () => {
            // Can ONLY be taken with Lucifer.
        },
        aspects: [ Aspect_Rail.Lucifer ],
        iconPath: './Icons/DaedalusHammer/Rail/FlashFire.webp',
    },
    {
        id: 'TripleBeam',
        name: 'Triple Beam',
        description: 'Your Igneus Eden Attack fires 3 beams in a spread pattern.',
        availabilityTest: () => {
            // Can ONLY be taken with Lucifer.
        },
        aspects: [ Aspect_Rail.Lucifer ],
        iconPath: './Icons/DaedalusHammer/Rail/TripleBeam.webp',
    },
    {
        id: 'EternalChamber',
        name: 'Eternal Chamber',
        description: 'Your Igneus Eden has ∞ ammo, but its damage no longer ramps.',
        availabilityTest: () => {
            // Can't be combined with Concentrated Beam.
            // Can ONLY be taken with Lucifer.
        },
        aspects: [ Aspect_Rail.Lucifer ],
        iconPath: './Icons/DaedalusHammer/Rail/EternalChamber.webp',
    },
    {
        id: 'GreaterInferno',
        name: 'Greater Inferno',
        description: 'Your Igneus Eden Hellfire radiates +250% damage in a larger area.',
        availabilityTest: () => {
            // Can ONLY be taken with Lucifer.
        },
        aspects: [ Aspect_Rail.Lucifer ],
        iconPath: './Icons/DaedalusHammer/Rail/GreaterInferno.webp',
    },
]