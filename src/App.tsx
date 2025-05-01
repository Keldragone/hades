import { useState } from 'react';

import { God, getAllGods } from './data/god';


import BoonLine from './BoonLine';
import BoonIcon from './BoonIcon';

import './App.css'
import { getSingleGodBoonIds, getDuoBoonIds } from './data/boon';
import { getAllKeepsakes } from './data/keepsake';
import { getAllMirrorTalents } from './data/mirror';

const boonClicked = (boonId: string): void => {
    console.log(boonId);
};

const App_Weapon = () => {
    const weapons = {
        Sword: {
            id: 'Sword',
            name: 'Stygian Blade',
            loreName: 'Stygius',
            aspects: [ 'Zagreus', 'Nemesis', 'Poseidon', 'Arthur' ],
        },
        Spear: {
            id: 'Spear',
            name: 'Eternal Spear',
            loreName: 'Varatha',
            aspects: [ 'Zagreus', 'Achilles', 'Hades', 'Guan Yu' ],
        },
        Shield: {
            id: 'Shield',
            name: 'Shield of Chaos',
            loreName: 'Aegis',
            aspects: [ 'Zagreus', 'Chaos', 'Zeus', 'Beowulf' ],
        },
        Bow: {
            id: 'Bow',
            name: 'Heart-Seeking Bow',
            loreName: 'Coronacht',
            aspects: [ 'Zagreus', 'Chiron', 'Hera', 'Rama' ],
        },
        Fists: {
            id: 'Fists',
            name: 'Twin Fists',
            loreName: 'Malphon',
            aspects: [ 'Zagreus', 'Talos', 'Demeter', 'Gilgamesh' ],
        },
        Rail: {
            id: 'Rail',
            name: 'Adamant Rail',
            loreName: 'Exagryph',
            aspects: [ 'Zagreus', 'Eris', 'Hestia', 'Lucifer' ],
        },
    }

    const chosenWeaponId = 'Rail';
    const chosenAspectId = 1;

    const chosenWeapon = weapons[chosenWeaponId];

    return (
        <h2>{chosenWeapon.name}, Aspect of {chosenWeapon.aspects[chosenAspectId]}</h2>
    )    
};

const App_Keepsakes = () => {
    const keepsakes = getAllKeepsakes();

    const chosenKeepsakeId = 'Sisyphus';

    const chosenKeepsake = keepsakes.find(keepsake => keepsake.id === chosenKeepsakeId);

    return (
        <h2>Keepsake: {chosenKeepsake?.name} <img style={{ width: 32 }} src={chosenKeepsake?.iconPath}></img></h2>
    )    
};

const App_MirrorTalents = () => {
    const talentLines = getAllMirrorTalents();

    const talentConfig = [1, 1, 2, 1, 1, 2, 1, 1, 2, 0, 0, 0];

    return (
        <>
            <h2>Mirror talents</h2>
            {talentLines.map((talentLine, talentLineIndex) => {
                if (talentConfig[talentLineIndex] === 1) {
                    return <p key={talentLineIndex}><b>{talentLine[0].name}</b> - {talentLine[1].name}</p>
                }
                else if (talentConfig[talentLineIndex] === 2) {
                    return <p key={talentLineIndex}>{talentLine[0].name} - <b>{talentLine[1].name}</b></p>
                }
                
                return <p key={talentLineIndex}>{talentLine[0].name} - {talentLine[1].name}</p>
            })}
        </>
    );
};

const App = () => {
    const [ collectedBoonIds, setCollectedBoonIds ] = useState([]);

    return (
        <div className="App">
        <div className="App_Sidebar">
            <BoonIcon boonId="Dionysus_Attack" iconSizePx={120} />
            <BoonIcon boonId="Dionysus_Special" iconSizePx={120} />
            <BoonIcon boonId="Dionysus_Cast" iconSizePx={120} />
            <BoonIcon boonId="Dionysus_Dash" iconSizePx={120} />
            <BoonIcon boonId="Dionysus_Aid" iconSizePx={120} />
            <BoonLine boonIds={collectedBoonIds} collectedBoonIds={[]} />
            <p>Collected Boon IDs: {collectedBoonIds.join(' | ')}</p>

        </div>
        <div className="App_Content">
            <App_Weapon />
            <App_Keepsakes />
            <App_MirrorTalents />
            <h2>Collected boons</h2>
            <h2>Boon Dictionary</h2>

            {getAllGods().map(god => (
                <BoonLine
                    boonIds={getSingleGodBoonIds(god)}
                    collectedBoonIds={collectedBoonIds}
                    onClick={boonClicked}
                />
            ))}
            <BoonLine
                boonIds={getSingleGodBoonIds(God.Hermes)}
                collectedBoonIds={collectedBoonIds}
                onClick={boonClicked}
            />
            <BoonLine
                boonIds={getDuoBoonIds()}
                collectedBoonIds={collectedBoonIds}
                onClick={boonClicked}
            />
        </div>
        </div>
    )
};

export default App;
