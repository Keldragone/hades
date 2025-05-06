export enum GodId {
    Aphrodite, Ares, Artemis, Athena, Demeter, Dionysus, Hermes, Poseidon, Zeus
};

interface God {
    id: GodId;
    name: string;
    color: string;
    iconPath: string;
}

const Gods: Array<God> = [
    {
        id: GodId.Aphrodite,
        name: 'Aphrodite',
        color: '#d66cc7',
        iconPath: './Icons/God/Aphrodite_2.webp',
    },
    {
        id: GodId.Ares,
        name: 'Ares',
        color: '#e4667a',
        iconPath: './Icons/God/Ares_2.webp',
    },
    {
        id: GodId.Artemis,
        name: 'Artemis',
        color: '#7dc339',
        iconPath: './Icons/God/Artemis_2.webp',
    },
    {
        id: GodId.Athena,
        name: 'Athena',
        color: '#b9ad5f',
        iconPath: './Icons/God/Athena_2.webp',
    },
    {
        id: GodId.Demeter,
        name: 'Demeter',
        color: '#e6fcff',
        iconPath: './Icons/God/Demeter_2.webp',
    },
    {
        id: GodId.Dionysus,
        name: 'Dionysus',
        color: '#807fcb',
        iconPath: './Icons/God/Dionysus_2.webp',
    },
    {
        id: GodId.Poseidon,
        name: 'Poseidon',
        color: '#2cc1e5',
        iconPath: './Icons/God/Poseidon_2.webp',
    },
    {
        id: GodId.Zeus,
        name: 'Zeus',
        color: '#fbea30',
        iconPath: './Icons/God/Zeus_2.webp',
    },
    {
        id: GodId.Hermes,
        name: 'Hermes',
        color: '#efa15e',
        iconPath: './Icons/God/Hermes_2.webp',
    },
];

export const getGodFromId = (godId: GodId): God => {
    return Gods.find(god => god.id === godId);
};
