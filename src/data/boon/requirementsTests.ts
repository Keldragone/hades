export type BoonRequirementsTest = ( currentBoonIds: Array<string> ) => boolean;

export const hasAtLeastOneOf = ( requiredBoonIds: Array<string> ): BoonRequirementsTest => {
    return ( currentBoonIds: Array<string> ) => (
        currentBoonIds.some( currentBoonId => (
            requiredBoonIds.includes(currentBoonId)
        ))
    );
};

export const hasAtLeastXOf = ( x: number, requiredBoonIds: Array<string> ): BoonRequirementsTest => {
    return ( currentBoonIds: Array<string> ) => {
        // Test each required boon ID, to see whether it is collected (maps ID to true/false).
        const requiredBoonTests = requiredBoonIds.map(requiredBoonId => currentBoonIds.includes(requiredBoonId));

        // Count the number of true values.
        const numberOfRequiredBoonsCollected = requiredBoonTests.filter(x => x).length;

        // If the number of true values is greater than or equal to the given X, return true.
        return numberOfRequiredBoonsCollected >= x;
    };
};

export const doesNotHaveAnyOf = ( incompatibleBoonIds: Array<string> ): BoonRequirementsTest => {
    return ( currentBoonIds: Array<string> ) => (
        !currentBoonIds.some( currentBoonId => (
            incompatibleBoonIds.includes(currentBoonId)
        ))
    );
};

export const satisfiesAllOf = ( requirementsTests: Array<BoonRequirementsTest> ): BoonRequirementsTest => {
    return ( currentBoonIds: Array<string> ) => (
        requirementsTests.every(requirementsTest => requirementsTest(currentBoonIds))
    );
};
