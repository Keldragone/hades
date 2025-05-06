export enum KeepsakeId {
    Cerberus,
    Achilles,
    Nyx,
    Thanatos,
    Charon,
    Hypnos,
    Megaera,
    Orpheus,
    Dusa,
    Skelly,
    Zeus,
    Poseidon,
    Athena,
    Aphrodite,
    Ares,
    Artemis,
    Dionysus,
    Hermes,
    Demeter,
    Chaos,
    Sisyphus,
    Eurydice,
    Patroclus,
    Persephone,
    Hades,
};

export interface Keepsake {
    id: KeepsakeId;
    name: string;
    iconPath: string;
};

const Keepsakes: Array<Keepsake> = [
    {
        id: KeepsakeId.Cerberus,
        name: 'Old Spiked Collar',
        iconPath: './Icons/Keepsake/Cerberus.webp',
    },
    {
        id: KeepsakeId.Achilles,
        name: 'Myrmidon Bracer',
        iconPath: './Icons/Keepsake/Achilles.webp',
    },
    {
        id: KeepsakeId.Nyx,
        name: 'Black Shawl',
        iconPath: './Icons/Keepsake/Nyx.webp',
    },
    {
        id: KeepsakeId.Thanatos,
        name: 'Pierced Butterfly',
        iconPath: './Icons/Keepsake/Thanatos.webp',
    },
    {
        id: KeepsakeId.Charon,
        name: 'Bone Hourglass',
        iconPath: './Icons/Keepsake/Charon.webp',
    },
    {
        id: KeepsakeId.Hypnos,
        name: 'Chthonic Coin Purse',
        iconPath: './Icons/Keepsake/Hypnos.webp',
    },
    {
        id: KeepsakeId.Megaera,
        name: 'Skull Earring',
        iconPath: './Icons/Keepsake/Megaera.webp',
    },
    {
        id: KeepsakeId.Orpheus,
        name: 'Distant Memory',
        iconPath: './Icons/Keepsake/Orpheus.webp',
    },
    {
        id: KeepsakeId.Dusa,
        name: 'Harpy Feather Duster',
        iconPath: './Icons/Keepsake/Dusa.webp',
    },
    {
        id: KeepsakeId.Skelly,
        name: 'Lucky Tooth',
        iconPath: './Icons/Keepsake/Skelly.webp',
    },
    {
        id: KeepsakeId.Zeus,
        name: 'Thunder Signet',
        iconPath: './Icons/Keepsake/Zeus.webp',
    },
    {
        id: KeepsakeId.Poseidon,
        name: 'Conch Shell',
        iconPath: './Icons/Keepsake/Poseidon.webp',
    },
    {
        id: KeepsakeId.Athena,
        name: 'Owl Pendant',
        iconPath: './Icons/Keepsake/Athena.webp',
    },
    {
        id: KeepsakeId.Aphrodite,
        name: 'Eternal Rose',
        iconPath: './Icons/Keepsake/Aphrodite.webp',
    },
    {
        id: KeepsakeId.Ares,
        name: 'Blood-filled Vial',
        iconPath: './Icons/Keepsake/Ares.webp',
    },
    {
        id: KeepsakeId.Artemis,
        name: 'Adamant Arrowhead',
        iconPath: './Icons/Keepsake/Artemis.webp',
    },
    {
        id: KeepsakeId.Dionysus,
        name: 'Overflowing Cup',
        iconPath: './Icons/Keepsake/Dionysus.webp',
    },
    {
        id: KeepsakeId.Hermes,
        name: 'Lambent Plume',
        iconPath: './Icons/Keepsake/Hermes.webp',
    },
    {
        id: KeepsakeId.Demeter,
        name: 'Frostbitten Horn',
        iconPath: './Icons/Keepsake/Demeter.webp',
    },
    {
        id: KeepsakeId.Chaos,
        name: 'Cosmic Egg',
        iconPath: './Icons/Keepsake/Chaos.webp',
    },
    {
        id: KeepsakeId.Sisyphus,
        name: 'Shattered Shackle',
        iconPath: './Icons/Keepsake/Sisyphus.webp',
    },
    {
        id: KeepsakeId.Eurydice,
        name: 'Evergreen Acorn',
        iconPath: './Icons/Keepsake/Eurydice.webp',
    },
    {
        id: KeepsakeId.Patroclus,
        name: 'Broken Spearpoint',
        iconPath: './Icons/Keepsake/Patroclus.webp',
    },
    {
        id: KeepsakeId.Persephone,
        name: 'Pom Blossom',
        iconPath: './Icons/Keepsake/Persephone.webp',
    },
    {
        id: KeepsakeId.Hades,
        name: 'Sigil of the Dead',
        iconPath: './Icons/Keepsake/Hades.webp',
    },
];

export const getKeepsakeFromId = (keepsakeId: KeepsakeId): Keepsake => {
    return Keepsakes.find(keepsake => keepsake.id === keepsakeId);
}

export const getAllKeepsakes = () => {
    return Keepsakes;
};
