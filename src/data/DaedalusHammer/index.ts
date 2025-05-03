import { DaedalusHammers_Bow } from "./Bow";
import { DaedalusHammers_Fists } from "./Fists";
import { DaedalusHammers_Rail } from "./Rail";
import { DaedalusHammers_Shield } from "./Shield";
import { DaedalusHammers_Spear } from "./Spear";
import { DaedalusHammers_Sword } from "./Sword";

export enum Weapon { Sword, Spear, Shield, Bow, Fists, Rail };

export enum Aspect_Sword { Zagreus, Nemesis, Poseidon, Arthur };
export enum Aspect_Spear { Zagreus, Achilles, Hades, GuanYu };
export enum Aspect_Shield { Zagreus, Chaos, Zeus, Beowulf };
export enum Aspect_Bow { Zagreus, Chiron, Hera, Rama };
export enum Aspect_Fists { Zagreus, Talos, Demeter, Gilgamesh };
export enum Aspect_Rail { Zagreus, Eris, Hestia, Lucifer };

export const getHammersForWeapon = (weapon: Weapon, aspect: any) => {
    let hammerLibrary = [];

    if (weapon === Weapon.Sword) {
        hammerLibrary = DaedalusHammers_Sword;
    }
    else if (weapon === Weapon.Spear) {
        hammerLibrary = DaedalusHammers_Spear;
    }
    else if (weapon === Weapon.Shield) {
        hammerLibrary = DaedalusHammers_Shield;
    }
    else if (weapon === Weapon.Bow) {
        hammerLibrary = DaedalusHammers_Bow;
    }
    else if (weapon === Weapon.Fists) {
        hammerLibrary = DaedalusHammers_Fists;
    }
    else if (weapon === Weapon.Rail) {
        hammerLibrary = DaedalusHammers_Rail;
    }
    
    const aspectFilteredHammerLibrary = hammerLibrary.filter(hammer => hammer.aspects.includes(aspect));

    return aspectFilteredHammerLibrary;
};
