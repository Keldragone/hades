import { KeepsakeId } from '@/data/keepsake';
import { RunState } from '@/data/runState';
import { BoonId } from './types';
import { MirrorTalentId } from '@/data/mirror';
import { AspectId } from '@/data/weapon';
import { BoonSlot } from '../boonSlot';
import { getBoonFromId } from '.';

export type BoonRequirementsTest = (runState: RunState) => boolean;

export const hasBoon = (boonId: BoonId): BoonRequirementsTest => {
    return (runState: RunState) => runState.collectedBoonIds.includes(boonId);
};

export const doesNotHaveBoon = (boonId: BoonId): BoonRequirementsTest => {
    return (runState: RunState) => !runState.collectedBoonIds.includes(boonId);
};

export const hasBoonInSlot = (boonSlot: BoonSlot): BoonRequirementsTest => {
    return (runState: RunState) => runState.collectedBoonIds.some(collectedBoonId => getBoonFromId(collectedBoonId).slot === boonSlot);
};

export const usingKeepsake = (keepsakeId: KeepsakeId): BoonRequirementsTest => {
    return (runState: RunState) => runState.keepsakeId === keepsakeId;
};

export const notUsingKeepsake = (keepsakeId: KeepsakeId): BoonRequirementsTest => {
    return (runState: RunState) => runState.keepsakeId !== keepsakeId;
};

export const hasMirrorTalent = (mirrorTalentId: MirrorTalentId): BoonRequirementsTest => {
    return (runState: RunState) => runState.mirrorTalentIds.includes(mirrorTalentId);
};

export const usingAspect = (aspectId: AspectId): BoonRequirementsTest => {
    return (runState: RunState) => runState.aspectId === aspectId;
};

export const notUsingAspect = (aspectId: AspectId): BoonRequirementsTest => {
    return (runState: RunState) => runState.aspectId !== aspectId;
};

export const oneOrMoreOf = (tests: Array<BoonRequirementsTest>): BoonRequirementsTest => {
    return (runState: RunState) => tests.some(test => test(runState));
};

export const xOrMoreOf = (x: number, tests: Array<BoonRequirementsTest>): BoonRequirementsTest => {
    return (runState: RunState) => {
        const testResults = tests.map(test => test(runState));

        const numberOfPassedTests = testResults.filter(testResult => testResult).length;
    
        return numberOfPassedTests >= x;
    };
};

export const allOf = (tests: Array<BoonRequirementsTest>): BoonRequirementsTest => {
    return (runState: RunState) => tests.every(test => test(runState));
};

export const noneOf = (tests: Array<BoonRequirementsTest>): BoonRequirementsTest => {
    return (runState: RunState) => !tests.some(test => test(runState));
};
