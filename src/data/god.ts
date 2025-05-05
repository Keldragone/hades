export enum GodId {
    Aphrodite, Ares, Artemis, Athena, Demeter, Dionysus, Hermes, Poseidon, Zeus
};

export const getAllGodIds = (): Array<GodId> => {
    // this feels... wrong
    return [
        GodId.Aphrodite,
        GodId.Ares,
        GodId.Artemis,
        GodId.Athena,
        GodId.Demeter,
        GodId.Dionysus,
        GodId.Poseidon,
        GodId.Zeus,
    ];
};
