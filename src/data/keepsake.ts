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
        iconPath: './Icons/Keepsakes/Cerberus.webp',
    },
    {
        id: KeepsakeId.Achilles,
        name: 'Myrmidon Bracer',
        iconPath: './Icons/Keepsakes/Achilles.webp',
    },
    {
        id: KeepsakeId.Nyx,
        name: 'Black Shawl',
        iconPath: './Icons/Keepsakes/Nyx.webp',
    },
    {
        id: KeepsakeId.Thanatos,
        name: 'Pierced Butterfly',
        iconPath: './Icons/Keepsakes/Thanatos.webp',
    },
    {
        id: KeepsakeId.Charon,
        name: 'Bone Hourglass',
        iconPath: './Icons/Keepsakes/Charon.webp',
    },
    {
        id: KeepsakeId.Hypnos,
        name: 'Chthonic Coin Purse',
        iconPath: './Icons/Keepsakes/Hypnos.webp',
    },
    {
        id: KeepsakeId.Megaera,
        name: 'Skull Earring',
        iconPath: './Icons/Keepsakes/Megaera.webp',
    },
    {
        id: KeepsakeId.Orpheus,
        name: 'Distant Memory',
        iconPath: './Icons/Keepsakes/Orpheus.webp',
    },
    {
        id: KeepsakeId.Dusa,
        name: 'Harpy Feather Duster',
        iconPath: './Icons/Keepsakes/Dusa.webp',
    },
    {
        id: KeepsakeId.Skelly,
        name: 'Lucky Tooth',
        iconPath: './Icons/Keepsakes/Skelly.webp',
    },
    {
        id: KeepsakeId.Zeus,
        name: 'Thunder Signet',
        iconPath: './Icons/Keepsakes/Zeus.webp',
    },
    {
        id: KeepsakeId.Poseidon,
        name: 'Conch Shell',
        iconPath: './Icons/Keepsakes/Poseidon.webp',
    },
    {
        id: KeepsakeId.Athena,
        name: 'Owl Pendant',
        iconPath: './Icons/Keepsakes/Athena.webp',
    },
    {
        id: KeepsakeId.Aphrodite,
        name: 'Eternal Rose',
        iconPath: './Icons/Keepsakes/Aphrodite.webp',
    },
    {
        id: KeepsakeId.Ares,
        name: 'Blood-filled Vial',
        iconPath: './Icons/Keepsakes/Ares.webp',
    },
    {
        id: KeepsakeId.Artemis,
        name: 'Adamant Arrowhead',
        iconPath: './Icons/Keepsakes/Artemis.webp',
    },
    {
        id: KeepsakeId.Dionysus,
        name: 'Overflowing Cup',
        iconPath: './Icons/Keepsakes/Dionysus.webp',
    },
    {
        id: KeepsakeId.Hermes,
        name: 'Lambent Plume',
        iconPath: './Icons/Keepsakes/Hermes.webp',
    },
    {
        id: KeepsakeId.Demeter,
        name: 'Frostbitten Horn',
        iconPath: './Icons/Keepsakes/Demeter.webp',
    },
    {
        id: KeepsakeId.Chaos,
        name: 'Cosmic Egg',
        iconPath: './Icons/Keepsakes/Chaos.webp',
    },
    {
        id: KeepsakeId.Sisyphus,
        name: 'Shattered Shackle',
        iconPath: './Icons/Keepsakes/Sisyphus.webp',
    },
    {
        id: KeepsakeId.Eurydice,
        name: 'Evergreen Acorn',
        iconPath: './Icons/Keepsakes/Eurydice.webp',
    },
    {
        id: KeepsakeId.Patroclus,
        name: 'Broken Spearpoint',
        iconPath: './Icons/Keepsakes/Patroclus.webp',
    },
    {
        id: KeepsakeId.Persephone,
        name: 'Pom Blossom',
        iconPath: './Icons/Keepsakes/Persephone.webp',
    },
    {
        id: KeepsakeId.Hades,
        name: 'Sigil of the Dead',
        iconPath: './Icons/Keepsakes/Hades.webp',
    },
];

export const getKeepsakeFromId = (keepsakeId: KeepsakeId): Keepsake => {
    return Keepsakes.find(keepsake => keepsake.id === keepsakeId);
}

export const getAllKeepsakes = () => {
    return Keepsakes;
};
