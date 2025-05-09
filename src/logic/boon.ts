import { getBoonFromId } from '@/data/Boon';
import { hasBoonInSlot } from '@/data/Boon/requirementsTests';
import { BoonId } from '@/data/Boon/types';
import { BoonSlot } from '@/data/boonSlot';
import { RunState } from '@/data/runState';

const Probability = {
    Boon_ReplaceChance: 0.10,
    Boon_RareChance: 0.10,
    Boon_EpicChance: 0.05,
    Boon_LegendaryChance: 0.12,
};

const roll = (successProbability: number): boolean => {
    return Math.random() < successProbability;
};

const getReplacementBoons = (boonIds: Array<BoonId>) => {
    // In Hades' code, this will then call GetReplacementTraits(lootData.PriorityUpgrades).

    // First, get list of currently taken core boons (atk spc cast dash aid)

    const priorityOptions = [];
    const occupiedSlots = [];

    hasBoonInSlot(BoonSlot.Attack)

    // Then, for every boonId given, if:
    // >   that boon is eligible to be taken
    // >   and is not already taken
    // >   and there is a boon taken in its slot
    // >   and the taken boon has rarity that can be upgraded (i.e. not heroic)
    // Register that boonId with a rarity one above the already slotted boon

    // Then pick a random one
};

const generateLoot = (runState: RunState) => {
    // ZeusUpgrade
    const upgradeName = 'ZeusUpgrade';

    const upgradeChoiceData = {
        PriorityUpgrades: [ BoonId.Zeus_Attack, BoonId.Zeus_Special, BoonId.Zeus_Dash, BoonId.Zeus_Cast, BoonId.Zeus_CastAlternate ], // Priority boons
        WeaponUpgrades: [ BoonId.Zeus_Attack, BoonId.Zeus_Dash, BoonId.Zeus_Cast, BoonId.Zeus_CastAlternate, BoonId.Zeus_Special, BoonId.Zeus_Aid ], // I think this means any trait that is shown on the left of the screen, i.e. atk spc cast dash aid
        Traits: [ BoonId.Zeus_HeavensVengeance, BoonId.Zeus_CloudedJudgment, BoonId.Zeus_BillowingStrength, BoonId.Zeus_LightningReflexes ], // idk what this is; probably boons that have no requirements
        Consumables: [], // Can be stuff like Demeter's Nourished Soul or Poseidon's Sunken Treasure
        LinkedUpgrades: [], // Anything that has requirements
    };

    const upgradeOptions = [];

    // If Chaos boon, do that instead

    const chosenPriorityTraits = upgradeChoiceData.PriorityUpgrades;

    // If it's your first run, and the current room has ForceLootTableFirstRun, do
    // upgradeOptions = GetPriorityTraits(CurrentRun.CurrentRoom.ForceLootTableFirstRun)
    // PRACTICALLY, this means if it's your first run, and you're in the first room,
    // upgradeOptions = [ 'AthenaWeaponTrait', 'AthenaRushTrait', 'AthenaRangedTrait' ]
    // But we'll ignore this for now

    // If you've already done two runs, then replacement boons are eligible (provided not forcecommon)
    // We will assume they are eligible.

    // Roll to see if replacement boon is given
    const replacementRoll = roll(Probability.Boon_ReplaceChance);

    if (replacementRoll) {
        // In Hades' code, this will then call GetReplacementTraits(lootData.PriorityUpgrades).
        // What this essentially means is that we will offer one random valid priority boon upgrade exchange.

        const collectedBoons = runState.collectedBoonIds.map(collectedBoonId => getBoonFromId(collectedBoonId));
        const collectedSlottedBoons = collectedBoons.filter(collectedBoon => collectedBoon.slot !== undefined);

        upgradeChoiceData.PriorityUpgrades.filter(priorityBoonId => {
            const priorityBoon = getBoonFromId(priorityBoonId);

            const isEligible = priorityBoon.testRequirements ? priorityBoon.testRequirements(runState) : true; // I mean practically this will always be true; I don't think there are any priority boons with requirements
            const isSameSlotAsCollectedBoon = collectedSlottedBoons.some(collectedSlottedBoon => collectedSlottedBoon.slot === priorityBoon.slot);
            const isPossibleToUpgrade = true; // qq need to check rarity

        })
    }

};

