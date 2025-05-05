export enum MirrorTalentId {
    ShadowPresence,
    FieryPresence,
    ChthonicVitality,
    DarkRegeneration,
    DeathDefiance,
    StubbornDefiance,
    GreaterReflex,
    RuthlessReflex,
    BoilingBlood,
    AbyssalBlood,
    InfernalSoul,
    StygianSoul,
    DeepPockets,
    GoldenTouch,
    ThickSkin,
    HighConfidence,
    PrivilegedStatus,
    FamilyFavorite,
    OlympianFavor,
    DarkForesight,
    GodsPride,
    GodsLegacy,
    FatedAuthority,
    FatedPersuasion,
};

export interface MirrorTalent {
    id: MirrorTalentId;
    name: string;
    description: string;
    iconPath: string;
};

const MirrorTalents: Array<Array<MirrorTalent>> = [
    [
        {
            id: MirrorTalentId.ShadowPresence,
            name: 'Shadow Presence',
            description: 'Attack and Special gain +10% damage per rank when striking foes from behind.',
            iconPath: './BoonIcons/Hermes/Hermes_RushDelivery.webp',
        },
        {
            id: MirrorTalentId.FieryPresence,
            name: 'Fiery Presence',
            description: 'Attack and Special gain +10% damage per rank when striking undamaged foes.',
            iconPath: './BoonIcons/Hermes/Hermes_RushDelivery.webp',
        },
    ],
    [
        {
            id: MirrorTalentId.ChthonicVitality,
            name: 'Chthonic Vitality',
            description: 'Each rank restores 1 [Health] when you exit each chamber.',
            iconPath: './BoonIcons/Hermes/Hermes_RushDelivery.webp',
        },
        {
            id: MirrorTalentId.DarkRegeneration,
            name: 'Dark Regeneration',
            description: 'Each rank makes +30% of any [Darkness] you collect restore your [Health] by that much.',
            iconPath: './BoonIcons/Hermes/Hermes_RushDelivery.webp',
        },
    ],
    [
        {
            id: MirrorTalentId.DeathDefiance,
            name: 'Death Defiance',
            description: 'Each rank restores you for 50% [Health] 1 time when your Life Total is depleted.',
            iconPath: './BoonIcons/Hermes/Hermes_RushDelivery.webp',
        },
        {
            id: MirrorTalentId.StubbornDefiance,
            name: 'Stubborn Defiance',
            description: 'This restores you to 30% [Health] 1 time per chamber when your Life Total is depleted.',
            iconPath: './BoonIcons/Hermes/Hermes_RushDelivery.webp',
        },
    ],
    [
        {
            id: MirrorTalentId.GreaterReflex,
            name: 'Greater Reflex',
            description: 'Each rank lets you chain +1 Dash before briefly recovering.',
            iconPath: './BoonIcons/Hermes/Hermes_RushDelivery.webp',
        },
        {
            id: MirrorTalentId.RuthlessReflex,
            name: 'Ruthless Reflex',
            description: 'If you Dash just before getting hit, gain +50% damage and dodge chance for 2 Sec.',
            iconPath: './BoonIcons/Hermes/Hermes_RushDelivery.webp',
        },
    ],
    [
        {
            id: MirrorTalentId.BoilingBlood,
            name: 'Boiling Blood',
            description: 'Each rank gives you +10% Attack & Special damage to foes with [Cast] in them.',
            iconPath: './BoonIcons/Hermes/Hermes_RushDelivery.webp',
        },
        {
            id: MirrorTalentId.AbyssalBlood,
            name: 'Abyssal Blood',
            description: 'Each rank reduces foes\' speed and damage by -6% while they have [Cast] in them.',
            iconPath: './BoonIcons/Hermes/Hermes_RushDelivery.webp',
        },
    ],
    [
        {
            id: MirrorTalentId.InfernalSoul,
            name: 'Infernal Soul',
            description: 'Each rank gives you +1 [Cast] for your Cast.',
            iconPath: './BoonIcons/Hermes/Hermes_RushDelivery.webp',
        },
        {
            id: MirrorTalentId.StygianSoul,
            name: 'Stygian Soul',
            description: 'Your [Cast] regenerates, but no longer drops. Each rank makes this 1 Sec. faster.',
            iconPath: './BoonIcons/Hermes/Hermes_RushDelivery.webp',
        },
    ],
    [
        {
            id: MirrorTalentId.DeepPockets,
            name: 'Deep Pockets',
            description: 'Each rank grants you 10 [Obols] at the start of each escape from the House of Hades.',
            iconPath: './BoonIcons/Hermes/Hermes_RushDelivery.webp',
        },
        {
            id: MirrorTalentId.GoldenTouch,
            name: 'Golden Touch',
            description: 'Each rank grants you +5% [Obols] of your total each time you clear an Underworld region.',
            iconPath: './BoonIcons/Hermes/Hermes_RushDelivery.webp',
        },
    ],
    [
        {
            id: MirrorTalentId.ThickSkin,
            name: 'Thick Skin',
            description: 'Each rank adds +5 [Health] to your Life Total.',
            iconPath: './BoonIcons/Hermes/Hermes_RushDelivery.webp',
        },
        {
            id: MirrorTalentId.HighConfidence,
            name: 'High Confidence',
            description: 'Each rank gives you +5% damage, while you have 80% [Health] or greater.',
            iconPath: './BoonIcons/Hermes/Hermes_RushDelivery.webp',
        },
    ],
    [
        {
            id: MirrorTalentId.PrivilegedStatus,
            name: 'Privileged Status',
            description: 'Each rank gives you +20% damage vs. foes afflicted by at least two Status Curse effects.',
            iconPath: './BoonIcons/Hermes/Hermes_RushDelivery.webp',
        },
        {
            id: MirrorTalentId.FamilyFavorite,
            name: 'Family Favorite',
            description: 'Each rank gives you +2.5% damage for each different Olympian whose Boons you have.',
            iconPath: './BoonIcons/Hermes/Hermes_RushDelivery.webp',
        },
    ],
    [
        {
            id: MirrorTalentId.OlympianFavor,
            name: 'Olympian Favor',
            description: 'Each rank adds a 1% bonus chance for a Boon to be Rare.',
            iconPath: './BoonIcons/Hermes/Hermes_RushDelivery.webp',
        },
        {
            id: MirrorTalentId.DarkForesight,
            name: 'Dark Foresight',
            description: 'Each rank gives you +2% greater chance for Gold Laurel rewards (Boons, Hammers, Obol and Poms).',
            iconPath: './BoonIcons/Hermes/Hermes_RushDelivery.webp',
        },
    ],
    [
        {
            id: MirrorTalentId.GodsPride,
            name: 'Gods\' Pride',
            description: 'Each rank adds a 1% bonus chance for a Boon to be Epic.',
            iconPath: './BoonIcons/Hermes/Hermes_RushDelivery.webp',
        },
        {
            id: MirrorTalentId.GodsLegacy,
            name: 'Gods\' Legacy',
            description: 'Each rank gives you +1% greater chance for a Boon to be Legendary or a Duo (if possible).',
            iconPath: './BoonIcons/Hermes/Hermes_RushDelivery.webp',
        },
    ],
    [
        {
            id: MirrorTalentId.FatedAuthority,
            name: 'Fated Authority',
            description: 'Each rank gives you 1 dice, used to randomly alter the reward for the next chamber.',
            iconPath: './BoonIcons/Hermes/Hermes_RushDelivery.webp',
        },
        {
            id: MirrorTalentId.FatedPersuasion,
            name: 'Fated Persuasion',
            description: 'Each rank gives you 1 dice, used to randomly alter Boon and Well of Charon choices.',
            iconPath: './BoonIcons/Hermes/Hermes_RushDelivery.webp',
        },
    ],
];

export const getAllMirrorTalents = (): Array<Array<MirrorTalent>> => {
    return MirrorTalents;
};
