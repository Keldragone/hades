export interface Keepsake {
    id: string;
    name: string;
    iconPath: string;
};

const Keepsakes: { [id: string]: Keepsake }  = {
    Cerberus: {
        id: 'Cerberus',
        name: 'Old Spiked Collar',
        iconPath: './Icons/Keepsakes/Cerberus.webp',
    },
    Achilles: {
        id: 'Achilles',
        name: 'Myrmidon Bracer',
        iconPath: './Icons/Keepsakes/Achilles.webp',
    },
    Nyx: {
        id: 'Nyx',
        name: 'Black Shawl',
        iconPath: './Icons/Keepsakes/Nyx.webp',
    },
    Thanatos: {
        id: 'Thanatos',
        name: 'Pierced Butterfly',
        iconPath: './Icons/Keepsakes/Thanatos.webp',
    },
    Charon: {
        id: 'Charon',
        name: 'Bone Hourglass',
        iconPath: './Icons/Keepsakes/Charon.webp',
    },
    Hypnos: {
        id: 'Hypnos',
        name: 'Chthonic Coin Purse',
        iconPath: './Icons/Keepsakes/Hypnos.webp',
    },
    Megaera: {
        id: 'Megaera',
        name: 'Skull Earring',
        iconPath: './Icons/Keepsakes/Megaera.webp',
    },
    Orpheus: {
        id: 'Orpheus',
        name: 'Distant Memory',
        iconPath: './Icons/Keepsakes/Orpheus.webp',
    },
    Dusa: {
        id: 'Dusa',
        name: 'Harpy Feather Duster',
        iconPath: './Icons/Keepsakes/Dusa.webp',
    },
    Skelly: {
        id: 'Skelly',
        name: 'Lucky Tooth',
        iconPath: './Icons/Keepsakes/Skelly.webp',
    },
    Zeus: {
        id: 'Zeus',
        name: 'Thunder Signet',
        iconPath: './Icons/Keepsakes/Zeus.webp',
    },
    Poseidon: {
        id: 'Poseidon',
        name: 'Conch Shell',
        iconPath: './Icons/Keepsakes/Poseidon.webp',
    },
    Athena: {
        id: 'Athena',
        name: 'Owl Pendant',
        iconPath: './Icons/Keepsakes/Athena.webp',
    },
    Aphrodite: {
        id: 'Aphrodite',
        name: 'Eternal Rose',
        iconPath: './Icons/Keepsakes/Aphrodite.webp',
    },
    Ares: {
        id: 'Ares',
        name: 'Blood-filled Vial',
        iconPath: './Icons/Keepsakes/Ares.webp',
    },
    Artemis: {
        id: 'Artemis',
        name: 'Adamant Arrowhead',
        iconPath: './Icons/Keepsakes/Artemis.webp',
    },
    Dionysus: {
        id: 'Dionysus',
        name: 'Overflowing Cup',
        iconPath: './Icons/Keepsakes/Dionysus.webp',
    },
    Hermes: {
        id: 'Hermes',
        name: 'Lambent Plume',
        iconPath: './Icons/Keepsakes/Hermes.webp',
    },
    Demeter: {
        id: 'Demeter',
        name: 'Frostbitten Horn',
        iconPath: './Icons/Keepsakes/Demeter.webp',
    },
    Chaos: {
        id: 'Chaos',
        name: 'Cosmic Egg',
        iconPath: './Icons/Keepsakes/Chaos.webp',
    },
    Sisyphus: {
        id: 'Sisyphus',
        name: 'Shattered Shackle',
        iconPath: './Icons/Keepsakes/Sisyphus.webp',
    },
    Eurydice: {
        id: 'Eurydice',
        name: 'Evergreen Acorn',
        iconPath: './Icons/Keepsakes/Eurydice.webp',
    },
    Patroclus: {
        id: 'Patroclus',
        name: 'Broken Spearpoint',
        iconPath: './Icons/Keepsakes/Patroclus.webp',
    },
    Persephone: {
        id: 'Persephone',
        name: 'Pom Blossom',
        iconPath: './Icons/Keepsakes/Persephone.webp',
    },
    Hades: {
        id: 'Hades',
        name: 'Sigil of the Dead',
        iconPath: './Icons/Keepsakes/Hades.webp',
    },
};

export const getKeepsake = (id: string) => {
    return Keepsakes[id];
}

export const getAllKeepsakes = () => {
    return Object.values(Keepsakes);
};
