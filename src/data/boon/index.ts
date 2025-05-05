import { GodId } from '../god';
import { RunState } from '../runState';

import Boons_Aphrodite from './Aphrodite';
import Boons_Ares from './Ares';
import Boons_Artemis from './Artemis';
import Boons_Athena from './Athena';
import Boons_Demeter from './Demeter';
import Boons_Dionysus from './Dionysus';
import Boons_Duo from './Duo';
import Boons_Hermes from './Hermes';
import Boons_Poseidon from './Poseidon';
import Boons_Zeus from './Zeus';

import { Boon } from './types';

export const Boons: Array<Boon> = [
    ...Boons_Aphrodite,
    ...Boons_Ares,
    ...Boons_Artemis,
    ...Boons_Athena,
    ...Boons_Demeter,
    ...Boons_Dionysus,
    ...Boons_Hermes,
    ...Boons_Poseidon,
    ...Boons_Zeus,
    ...Boons_Duo,
];

const getBoons = (godId: GodId) => {
    if (godId === GodId.Aphrodite) {
        return Boons_Aphrodite;
    }
    else if (godId === GodId.Ares) {
        return Boons_Ares;
    }
    else if (godId === GodId.Artemis) {
        return Boons_Artemis;
    }
    else if (godId === GodId.Athena) {
        return Boons_Athena;
    }
    else if (godId === GodId.Demeter) {
        return Boons_Demeter;
    }
    else if (godId === GodId.Dionysus) {
        return Boons_Dionysus;
    }
    else if (godId === GodId.Hermes) {
        return Boons_Hermes;
    }
    else if (godId === GodId.Poseidon) {
        return Boons_Poseidon;
    }
    else if (godId === GodId.Zeus) {
        return Boons_Zeus;
    }
    
    return [];
}

export const getSingleGodIdBoons = (godId: GodId) => {
    return Boons.filter(boon => boon.godId === godId);
};

export const getSingleGodIdBoonIds = (godId: GodId) => {
    return Boons.filter(boon => boon.godId === godId).map(boon => boon.id);
};

export const getDuoBoonIds = () => {
    return Boons_Duo.map(boon => boon.id);
};

export const getBoonLibrary = (runState: RunState) => {
    return Boons.filter(boon => {
        if (boon.testRunAvailability !== undefined) {
            return boon.testRunAvailability(runState);
        }

        return true;
    });
};
