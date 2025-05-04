export enum Weapon { Sword, Spear, Shield, Bow, Fists, Rail };

export enum Aspect {
    Sword_Zagreus, Sword_Nemesis, Sword_Poseidon, Sword_Arthur,
    Spear_Zagreus, Spear_Achilles, Spear_Hades, Spear_GuanYu,
    Shield_Zagreus, Shield_Chaos, Shield_Zeus, Shield_Beowulf,
    Bow_Zagreus, Bow_Chiron, Bow_Hera, Bow_Rama,
    Fists_Zagreus, Fists_Talos, Fists_Demeter, Fists_Gilgamesh,
    Rail_Zagreus, Rail_Eris, Rail_Hestia, Rail_Lucifer,
};

const weapons = {
    Sword: {
        id: 'Sword',
        name: 'Stygian Blade',
        loreName: 'Stygius',
        aspects: [
            { id: Aspect.Sword_Zagreus, name: 'Zagreus', iconPath: './Icons/Aspect/Sword/Zagreus.webp' },
            { id: Aspect.Sword_Nemesis, name: 'Nemesis', iconPath: './Icons/Aspect/Sword/Nemesis.webp' },
            { id: Aspect.Sword_Poseidon, name: 'Poseidon', iconPath: './Icons/Aspect/Sword/Poseidon.webp' },
            { id: Aspect.Sword_Arthur, name: 'Arthur', iconPath: './Icons/Aspect/Sword/Arthur.webp' },
        ],
    },
    Spear: {
        id: 'Spear',
        name: 'Eternal Spear',
        loreName: 'Varatha',
        aspects: [ 
            { id: Aspect.Spear_Zagreus, name: 'Zagreus', iconPath: './Icons/Aspect/Spear/Zagreus.webp' },
            { id: Aspect.Spear_Achilles, name: 'Achilles', iconPath: './Icons/Aspect/Spear/Achilles.webp' },
            { id: Aspect.Spear_Hades, name: 'Hades', iconPath: './Icons/Aspect/Spear/Hades.webp' },
            { id: Aspect.Spear_GuanYu, name: 'Guan Yu', iconPath: './Icons/Aspect/Spear/GuanYu.webp' },
        ],
    },
    Shield: {
        id: 'Shield',
        name: 'Shield of Chaos',
        loreName: 'Aegis',
        aspects: [
            { id: Aspect.Shield_Zagreus, name: 'Zagreus', iconPath: './Icons/Aspect/Shield/Zagreus.webp' },
            { id: Aspect.Shield_Chaos, name: 'Chaos', iconPath: './Icons/Aspect/Shield/Chaos.webp' },
            { id: Aspect.Shield_Zeus, name: 'Zeus', iconPath: './Icons/Aspect/Shield/Zeus.webp' },
            { id: Aspect.Shield_Beowulf, name: 'Beowulf', iconPath: './Icons/Aspect/Shield/Beowulf.webp' },
        ],
    },
    Bow: {
        id: 'Bow',
        name: 'Heart-Seeking Bow',
        loreName: 'Coronacht',
        aspects: [
            { id: Aspect.Bow_Zagreus, name: 'Zagreus', iconPath: './Icons/Aspect/Bow/Zagreus.webp' },
            { id: Aspect.Bow_Chiron, name: 'Chiron', iconPath: './Icons/Aspect/Bow/Chiron.webp' },
            { id: Aspect.Bow_Hera, name: 'Hera', iconPath: './Icons/Aspect/Bow/Hera.webp' },
            { id: Aspect.Bow_Rama, name: 'Rama', iconPath: './Icons/Aspect/Bow/Rama.webp' },
        ],
    },
    Fists: {
        id: 'Fists',
        name: 'Twin Fists',
        loreName: 'Malphon',
        aspects: [
            { id: Aspect.Fists_Zagreus, name: 'Zagreus', iconPath: './Icons/Aspect/Fists/Zagreus.webp' },
            { id: Aspect.Fists_Talos, name: 'Talos', iconPath: './Icons/Aspect/Fists/Talos.webp' },
            { id: Aspect.Fists_Demeter, name: 'Demeter', iconPath: './Icons/Aspect/Fists/Demeter.webp' },
            { id: Aspect.Fists_Gilgamesh, name: 'Gilgamesh', iconPath: './Icons/Aspect/Fists/Gilgamesh.webp' },
        ],
    },
    Rail: {
        id: 'Rail',
        name: 'Adamant Rail',
        loreName: 'Exagryph',
        aspects: [
            { id: Aspect.Rail_Zagreus, name: 'Zagreus', iconPath: './Icons/Aspect/Rail/Zagreus.webp' },
            { id: Aspect.Rail_Eris, name: 'Eris', iconPath: './Icons/Aspect/Rail/Eris.webp' },
            { id: Aspect.Rail_Hestia, name: 'Hestia', iconPath: './Icons/Aspect/Rail/Hestia.webp' },
            { id: Aspect.Rail_Lucifer, name: 'Lucifer', iconPath: './Icons/Aspect/Rail/Lucifer.webp' },
        ],
    },
};

export const getWeaponFromId = (id: Weapon) => {
    if (id === Weapon.Sword) {
        return weapons.Sword;
    }
    else if (id === Weapon.Spear) {
        return weapons.Spear;
    }
    else if (id === Weapon.Shield) {
        return weapons.Shield;
    }
    else if (id === Weapon.Bow) {
        return weapons.Bow;
    }
    else if (id === Weapon.Fists) {
        return weapons.Fists;
    }
    else if (id === Weapon.Rail) {
        return weapons.Rail;
    }
};
