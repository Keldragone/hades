import { BoonData } from "../data/boon";

export class BoonState {
    collectedBoonIds: Array<string> = [ "Artemis_Attack", "Dionysus_Special", "Artemis_PressurePoints" ];

    addBoon (addBoonId: string): void {
        // Check that the boon actually exists in data.
        const boonInfo = BoonData[addBoonId];

        if (boonInfo === undefined) {
            return;
        }

        // Check that the boon is not already collected.
        if (this.collectedBoonIds.includes(addBoonId)) {
            return;
        }

        // Check that the boon is collectable.
        const boonRequirementsSatisfied = boonInfo.requirementTest === undefined || boonInfo.requirementTest(this.collectedBoonIds);
        const boonSlotAvailable = boonInfo.slot === undefined || this.collectedBoonIds.map(collectedBoonId => BoonData[collectedBoonId].slot).some(slot => boonInfo.slot === slot);

        if (!boonRequirementsSatisfied || !boonSlotAvailable) {
            return;
        }

        // Register the new boon.
        this.collectedBoonIds.push(addBoonId);

        // Trigger updates? Somehow?
    }

    removeBoon (removeBoonId: string): void {
        // Check that the boon actually exists in data.
        const boonInfo = BoonData[removeBoonId];

        if (boonInfo === undefined) {
            return;
        }

        // Check that the boon is already collected.
        if (!this.collectedBoonIds.includes(removeBoonId)) {
            return;
        }

        // Remove the boon.
        this.collectedBoonIds = this.collectedBoonIds.filter(collectedBoonId => collectedBoonId !== removeBoonId);

        // Trigger updates? Somehow?
    }

    clearBoons (): void {
        this.collectedBoonIds = [];

        // Trigger updates? Somehow?
    }

    getPossibleBoonIds (): Array<string> {
        return Object.entries(BoonData).filter(
            ([boonId, boonInfo]) => {
                const boonRequirementsSatisfied = boonInfo.requirementTest === undefined || boonInfo.requirementTest(this.collectedBoonIds);
                const boonSlotAvailable = boonInfo.slot === undefined || this.collectedBoonIds.map(collectedBoonId => BoonData[collectedBoonId].slot).every(slot => boonInfo.slot !== slot);
        
                return boonRequirementsSatisfied && boonSlotAvailable;
            }
        ).map(
            ([boonId, boonInfo]) => boonId
        );
    }

    getPossibleBoonIdsForGod (god: string): Array<string> {
        return Object.entries(BoonData).filter(
            ([boonId, boonInfo]) => boonInfo.god === god
        ).filter(
            ([boonId, boonInfo]) => {
                const boonRequirementsSatisfied = boonInfo.requirementTest === undefined || boonInfo.requirementTest(this.collectedBoonIds);
                const boonSlotAvailable = boonInfo.slot === undefined || this.collectedBoonIds.map(collectedBoonId => BoonData[collectedBoonId].slot).every(slot => boonInfo.slot !== slot);
        
                return boonRequirementsSatisfied && boonSlotAvailable;
            }
        ).map(
            ([boonId, boonInfo]) => boonId
        );
    }
};
