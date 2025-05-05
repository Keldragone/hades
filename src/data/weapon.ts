export enum WeaponId { Sword, Spear, Shield, Bow, Fists, Rail };

export enum AspectId {
    Sword_Zagreus, Sword_Nemesis, Sword_Poseidon, Sword_Arthur,
    Spear_Zagreus, Spear_Achilles, Spear_Hades, Spear_GuanYu,
    Shield_Zagreus, Shield_Chaos, Shield_Zeus, Shield_Beowulf,
    Bow_Zagreus, Bow_Chiron, Bow_Hera, Bow_Rama,
    Fists_Zagreus, Fists_Talos, Fists_Demeter, Fists_Gilgamesh,
    Rail_Zagreus, Rail_Eris, Rail_Hestia, Rail_Lucifer,
};

interface Aspect {
    id: AspectId;
    name: string;
    weaponId: WeaponId;
    iconPath: string;
};

interface Weapon {
    id: WeaponId;
    name: string;
    loreName: string;
    aspectIds: Array<AspectId>;
}

const aspects: Array<Aspect> = [
    {
        id: AspectId.Sword_Zagreus,
        name: 'Zagreus',
        weaponId: WeaponId.Sword,
        iconPath: './Icons/Aspect/Sword/Zagreus.webp',
    },
    {
        id: AspectId.Sword_Nemesis,
        name: 'Nemesis',
        weaponId: WeaponId.Sword,
        iconPath: './Icons/Aspect/Sword/Nemesis.webp',
    },
    {
        id: AspectId.Sword_Poseidon,
        name: 'Poseidon',
        weaponId: WeaponId.Sword,
        iconPath: './Icons/Aspect/Sword/Poseidon.webp',
    },
    {
        id: AspectId.Sword_Arthur,
        name: 'Arthur',
        weaponId: WeaponId.Sword,
        iconPath: './Icons/Aspect/Sword/Arthur.webp',
    },
    {
        id: AspectId.Spear_Zagreus,
        name: 'Zagreus',
        weaponId: WeaponId.Spear,
        iconPath: './Icons/Aspect/Spear/Zagreus.webp',
    },
    {
        id: AspectId.Spear_Achilles,
        name: 'Achilles',
        weaponId: WeaponId.Spear,
        iconPath: './Icons/Aspect/Spear/Achilles.webp',
    },
    {
        id: AspectId.Spear_Hades,
        name: 'Hades',
        weaponId: WeaponId.Spear,
        iconPath: './Icons/Aspect/Spear/Hades.webp',
    },
    {
        id: AspectId.Spear_GuanYu,
        name: 'Guan Yu',
        weaponId: WeaponId.Spear,
        iconPath: './Icons/Aspect/Spear/GuanYu.webp',
    },
    {
        id: AspectId.Shield_Zagreus,
        name: 'Zagreus',
        weaponId: WeaponId.Shield,
        iconPath: './Icons/Aspect/Shield/Zagreus.webp',
    },
    {
        id: AspectId.Shield_Chaos,
        name: 'Chaos',
        weaponId: WeaponId.Shield,
        iconPath: './Icons/Aspect/Shield/Chaos.webp',
    },
    {
        id: AspectId.Shield_Zeus,
        name: 'Zeus',
        weaponId: WeaponId.Shield,
        iconPath: './Icons/Aspect/Shield/Zeus.webp',
    },
    {
        id: AspectId.Shield_Beowulf,
        name: 'Beowulf',
        weaponId: WeaponId.Shield,
        iconPath: './Icons/Aspect/Shield/Beowulf.webp',
    },
    {
        id: AspectId.Bow_Zagreus,
        name: 'Zagreus',
        weaponId: WeaponId.Bow,
        iconPath: './Icons/Aspect/Bow/Zagreus.webp',
    },
    {
        id: AspectId.Bow_Chiron,
        name: 'Chiron',
        weaponId: WeaponId.Bow,
        iconPath: './Icons/Aspect/Bow/Chiron.webp',
    },
    {
        id: AspectId.Bow_Hera,
        name: 'Hera',
        weaponId: WeaponId.Bow,
        iconPath: './Icons/Aspect/Bow/Hera.webp',
    },
    {
        id: AspectId.Bow_Rama,
        name: 'Rama',
        weaponId: WeaponId.Bow,
        iconPath: './Icons/Aspect/Bow/Rama.webp',
    },
    {
        id: AspectId.Fists_Zagreus,
        name: 'Zagreus',
        weaponId: WeaponId.Fists,
        iconPath: './Icons/Aspect/Fists/Zagreus.webp',
    },
    {
        id: AspectId.Fists_Talos,
        name: 'Talos',
        weaponId: WeaponId.Fists,
        iconPath: './Icons/Aspect/Fists/Talos.webp',
    },
    {
        id: AspectId.Fists_Demeter,
        name: 'Demeter',
        weaponId: WeaponId.Fists,
        iconPath: './Icons/Aspect/Fists/Demeter.webp',
    },
    {
        id: AspectId.Fists_Gilgamesh,
        name: 'Gilgamesh',
        weaponId: WeaponId.Fists,
        iconPath: './Icons/Aspect/Fists/Gilgamesh.webp',
    },
    {
        id: AspectId.Rail_Zagreus,
        name: 'Zagreus',
        weaponId: WeaponId.Rail,
        iconPath: './Icons/Aspect/Rail/Zagreus.webp',
    },
    {
        id: AspectId.Rail_Eris,
        name: 'Eris',
        weaponId: WeaponId.Rail,
        iconPath: './Icons/Aspect/Rail/Eris.webp',
    },
    {
        id: AspectId.Rail_Hestia,
        name: 'Hestia',
        weaponId: WeaponId.Rail,
        iconPath: './Icons/Aspect/Rail/Hestia.webp',
    },
    {
        id: AspectId.Rail_Lucifer,
        name: 'Lucifer',
        weaponId: WeaponId.Rail,
        iconPath: './Icons/Aspect/Rail/Lucifer.webp',
    },
];

const weapons: Array<Weapon> = [
    {
        id: WeaponId.Sword,
        name: 'Stygian Blade',
        loreName: 'Stygius',
        aspectIds: [
            AspectId.Sword_Zagreus,
            AspectId.Sword_Nemesis,
            AspectId.Sword_Poseidon,
            AspectId.Sword_Arthur,
        ],
    },
    {
        id: WeaponId.Spear,
        name: 'Eternal Spear',
        loreName: 'Varatha',
        aspectIds: [
            AspectId.Spear_Zagreus,
            AspectId.Spear_Achilles,
            AspectId.Spear_Hades,
            AspectId.Spear_GuanYu,
        ],
    },
    {
        id: WeaponId.Shield,
        name: 'Shield of Chaos',
        loreName: 'Aegis',
        aspectIds: [
            AspectId.Shield_Zagreus,
            AspectId.Shield_Chaos,
            AspectId.Shield_Zeus,
            AspectId.Shield_Beowulf,
        ],
    },
    {
        id: WeaponId.Bow,
        name: 'Heart-Seeking Bow',
        loreName: 'Coronacht',
        aspectIds: [
            AspectId.Bow_Zagreus,
            AspectId.Bow_Chiron,
            AspectId.Bow_Hera,
            AspectId.Bow_Rama,
        ],
    },
    {
        id: WeaponId.Fists,
        name: 'Twin Fists',
        loreName: 'Malphon',
        aspectIds: [
            AspectId.Fists_Zagreus,
            AspectId.Fists_Talos,
            AspectId.Fists_Demeter,
            AspectId.Fists_Gilgamesh,
        ],
    },
    {
        id: WeaponId.Rail,
        name: 'Adamant Rail',
        loreName: 'Exagryph',
        aspectIds: [
            AspectId.Rail_Zagreus,
            AspectId.Rail_Eris,
            AspectId.Rail_Hestia,
            AspectId.Rail_Lucifer
        ],
    },
];

export const getWeaponFromId = (weaponId: WeaponId) => {
    return weapons.find(weapon => weapon.id === weaponId);
};

export const getAllWeapons = () => {
    return Object.values(weapons);
};

export const getAspectFromId = (aspectId: AspectId) => {
    return aspects.find(aspect => aspect.id === aspectId);
};
