export enum God {
    Aphrodite, Ares, Artemis, Athena, Demeter, Dionysus, Poseidon, Zeus
};

export const getAllGods = (): Array<God> => {
    // this feels... wrong
    return [
        God.Aphrodite,
        God.Ares,
        God.Artemis,
        God.Athena,
        God.Demeter,
        God.Dionysus,
        God.Poseidon,
        God.Zeus,
    ];
};
