export enum Weapon { Sword, Spear, Shield, Bow, Fists, Rail };

export enum Aspect_Sword { Zagreus, Nemesis, Poseidon, Arthur };
export enum Aspect_Spear { Zagreus, Achilles, Hades, GuanYu };
export enum Aspect_Shield { Zagreus, Chaos, Zeus, Beowulf };
export enum Aspect_Bow { Zagreus, Chiron, Hera, Rama };
export enum Aspect_Fists { Zagreus, Talos, Demeter, Gilgamesh };
export enum Aspect_Rail { Zagreus, Eris, Hestia, Lucifer };

const weapons = {
    Sword: {
        id: 'Sword',
        name: 'Stygian Blade',
        loreName: 'Stygius',
        aspects: [
            { id: Aspect_Sword.Zagreus, name: 'Zagreus', iconPath: './Icons/Aspect/Sword/Zagreus.webp' },
            { id: Aspect_Sword.Nemesis, name: 'Nemesis', iconPath: './Icons/Aspect/Sword/Nemesis.webp' },
            { id: Aspect_Sword.Poseidon, name: 'Poseidon', iconPath: './Icons/Aspect/Sword/Poseidon.webp' },
            { id: Aspect_Sword.Arthur, name: 'Arthur', iconPath: './Icons/Aspect/Sword/Arthur.webp' },
        ],
    },
    Spear: {
        id: 'Spear',
        name: 'Eternal Spear',
        loreName: 'Varatha',
        aspects: [ 
            { id: Aspect_Spear.Zagreus, name: 'Zagreus', iconPath: './Icons/Aspect/Spear/Zagreus.webp' },
            { id: Aspect_Spear.Achilles, name: 'Achilles', iconPath: './Icons/Aspect/Spear/Achilles.webp' },
            { id: Aspect_Spear.Hades, name: 'Hades', iconPath: './Icons/Aspect/Spear/Hades.webp' },
            { id: Aspect_Spear.GuanYu, name: 'Guan Yu', iconPath: './Icons/Aspect/Spear/GuanYu.webp' },
        ],
    },
    Shield: {
        id: 'Shield',
        name: 'Shield of Chaos',
        loreName: 'Aegis',
        aspects: [
            { id: Aspect_Shield.Zagreus, name: 'Zagreus', iconPath: './Icons/Aspect/Shield/Zagreus.webp' },
            { id: Aspect_Shield.Chaos, name: 'Chaos', iconPath: './Icons/Aspect/Shield/Chaos.webp' },
            { id: Aspect_Shield.Zeus, name: 'Zeus', iconPath: './Icons/Aspect/Shield/Zeus.webp' },
            { id: Aspect_Shield.Beowulf, name: 'Beowulf', iconPath: './Icons/Aspect/Shield/Beowulf.webp' },
        ],
    },
    Bow: {
        id: 'Bow',
        name: 'Heart-Seeking Bow',
        loreName: 'Coronacht',
        aspects: [
            { id: Aspect_Bow.Zagreus, name: 'Zagreus', iconPath: './Icons/Aspect/Bow/Zagreus.webp' },
            { id: Aspect_Bow.Chiron, name: 'Chiron', iconPath: './Icons/Aspect/Bow/Chiron.webp' },
            { id: Aspect_Bow.Hera, name: 'Hera', iconPath: './Icons/Aspect/Bow/Hera.webp' },
            { id: Aspect_Bow.Rama, name: 'Rama', iconPath: './Icons/Aspect/Bow/Rama.webp' },
        ],
    },
    Fists: {
        id: 'Fists',
        name: 'Twin Fists',
        loreName: 'Malphon',
        aspects: [
            { id: Aspect_Fists.Zagreus, name: 'Zagreus', iconPath: './Icons/Aspect/Fists/Zagreus.webp' },
            { id: Aspect_Fists.Talos, name: 'Talos', iconPath: './Icons/Aspect/Fists/Talos.webp' },
            { id: Aspect_Fists.Demeter, name: 'Demeter', iconPath: './Icons/Aspect/Fists/Demeter.webp' },
            { id: Aspect_Fists.Gilgamesh, name: 'Gilgamesh', iconPath: './Icons/Aspect/Fists/Gilgamesh.webp' },
        ],
    },
    Rail: {
        id: 'Rail',
        name: 'Adamant Rail',
        loreName: 'Exagryph',
        aspects: [
            { id: Aspect_Rail.Zagreus, name: 'Zagreus', iconPath: './Icons/Aspect/Rail/Zagreus.webp' },
            { id: Aspect_Rail.Eris, name: 'Eris', iconPath: './Icons/Aspect/Rail/Eris.webp' },
            { id: Aspect_Rail.Hestia, name: 'Hestia', iconPath: './Icons/Aspect/Rail/Hestia.webp' },
            { id: Aspect_Rail.Lucifer, name: 'Lucifer', iconPath: './Icons/Aspect/Rail/Lucifer.webp' },
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
