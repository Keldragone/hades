import { God } from "../god";

import { BoonData_Aphrodite } from "./Aphrodite";
import { BoonData_Ares } from "./Ares";
import { BoonData_Artemis } from "./Artemis";
import { BoonData_Athena } from "./Athena";
import { BoonData_Demeter } from "./Demeter";
import { BoonData_Dionysus } from "./Dionysus";
import { BoonData_Duo } from "./Duo";
import { BoonData_Hermes } from "./Hermes";
import { BoonData_Poseidon } from "./Poseidon";
import { BoonData_Zeus } from "./Zeus";

import { BoonInfo } from "./types";

export const BoonData: { [ id: string ]: BoonInfo } = {
    ...BoonData_Aphrodite,
    ...BoonData_Ares,
    ...BoonData_Artemis,
    ...BoonData_Athena,
    ...BoonData_Demeter,
    ...BoonData_Dionysus,
    ...BoonData_Hermes,
    ...BoonData_Poseidon,
    ...BoonData_Zeus,
    ...BoonData_Duo,
};

const getBoonData = (god: God) => {
    if (god === God.Aphrodite) {
        return BoonData_Aphrodite;
    }
    else if (god === God.Ares) {
        return BoonData_Ares;
    }
    else if (god === God.Artemis) {
        return BoonData_Artemis;
    }
    else if (god === God.Athena) {
        return BoonData_Athena;
    }
    else if (god === God.Demeter) {
        return BoonData_Demeter;
    }
    else if (god === God.Dionysus) {
        return BoonData_Dionysus;
    }
    else if (god === God.Hermes) {
        return BoonData_Hermes;
    }
    else if (god === God.Poseidon) {
        return BoonData_Poseidon;
    }
    else if (god === God.Zeus) {
        return BoonData_Zeus;
    }
    
    return [];
}

export const getSingleGodBoons = (god: God) => {
    const boonData = getBoonData(god);

    return Object.entries(boonData).map(([boonDataId, boonDataValue]) => ({
        id: boonDataId,
        ...boonDataValue,
    }));
};

export const getSingleGodBoonIds = (god: God) => {
    const boonData = getBoonData(god);

    console.log(boonData);

    return Object.keys(boonData);
};

export const getDuoBoonIds = () => {
    const boonData = BoonData_Duo;
    
    return Object.keys(boonData);
};
