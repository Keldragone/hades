import { AspectId, WeaponId } from '@/data/weapon';
import { Hammer } from './types';

import Hammers_Sword from './Sword';
import Hammers_Spear from './Spear';
import Hammers_Shield from './Shield';
import Hammers_Bow from './Bow';
import Hammers_Fists from './Fists';
import Hammers_Rail from './Rail';

export const getHammersForWeapon = (weaponId: WeaponId, aspectId: AspectId) => {
    let hammerLibrary: Array<Hammer> = [];

    if (weaponId === WeaponId.Sword) {
        hammerLibrary = Hammers_Sword;
    }
    else if (weaponId === WeaponId.Spear) {
        hammerLibrary = Hammers_Spear;
    }
    else if (weaponId === WeaponId.Shield) {
        hammerLibrary = Hammers_Shield;
    }
    else if (weaponId === WeaponId.Bow) {
        hammerLibrary = Hammers_Bow;
    }
    else if (weaponId === WeaponId.Fists) {
        hammerLibrary = Hammers_Fists;
    }
    else if (weaponId === WeaponId.Rail) {
        hammerLibrary = Hammers_Rail;
    }
    
    const aspectFilteredHammerLibrary = hammerLibrary.filter(hammer => hammer.aspectIds.includes(aspectId));

    return aspectFilteredHammerLibrary;
};
