import { BoonData_Artemis } from "./Artemis";
import { BoonData_Dionysus } from "./Dionysus";
import { BoonData_Duo } from "./Duo";

import { BoonInfo } from "./types";

export const BoonData: { [ id: string ]: BoonInfo } = {
    ...BoonData_Artemis,
    ...BoonData_Dionysus,
    ...BoonData_Duo,
};
