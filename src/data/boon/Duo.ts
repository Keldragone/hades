import { hasAtLeastOneOf, satisfiesAllOf } from "./requirementsTests";
import { BoonInfo } from "./types";

export const BoonData_Duo: { [ id: string ]: BoonInfo } = {
    Duo_Artemis_Dionysus: {
        name: "Splitting Headache",
        description: "Hangover-afflicted foes are more likely to take Critical damage.",
        rarityType: "Duo",
        god: [ "Artemis", "Dionysus" ],
        requirementTest: satisfiesAllOf([
            hasAtLeastOneOf([ "Artemis_Attack", "Artemis_Special", "Artemis_Cast", "Artemis_Aid" ]),
            hasAtLeastOneOf([ "Dionysus_Attack", "Dionysus_Special", "Dionysus_Dash", "Dionysus_Aid" ]),
        ]),
        iconPath: "./BoonIcons/Duo/Duo_Artemis_Dionysus.webp",
    },
};
