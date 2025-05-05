export enum GodId {
    Aphrodite, Ares, Artemis, Athena, Demeter, Dionysus, Hermes, Poseidon, Zeus
};

interface God {
    id: GodId;
    name: string;
}

const Gods: Array<God> = [
    {
        id: GodId.Aphrodite,
        name: 'Aphrodite',
    },
    {
        id: GodId.Ares,
        name: 'Ares',
    },
    {
        id: GodId.Artemis,
        name: 'Artemis',
    },
    {
        id: GodId.Athena,
        name: 'Athena',
    },
    {
        id: GodId.Demeter,
        name: 'Demeter',
    },
    {
        id: GodId.Dionysus,
        name: 'Dionysus',
    },
    {
        id: GodId.Poseidon,
        name: 'Poseidon',
    },
    {
        id: GodId.Zeus,
        name: 'Zeus',
    },
    {
        id: GodId.Hermes,
        name: 'Hermes',
    },
];

export const getGodFromId = (godId: GodId): God => {
    return Gods.find(god => god.id === godId);
};
