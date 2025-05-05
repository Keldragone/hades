import { BoonId } from './Boon/types';
import { HammerId } from './Hammer/types';
import { KeepsakeId } from './keepsake';
import { MirrorTalentId } from './mirror';
import { AspectId } from './weapon'

export interface RunState {
    aspectId: AspectId;
    keepsakeId: KeepsakeId;
    mirrorTalentIds: Array<MirrorTalentId>;
    collectedBoonIds: Array<BoonId>;
    collectedHammerIds: Array<HammerId>;
};
