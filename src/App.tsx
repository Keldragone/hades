import { useState } from 'react';

import { God, getAllGods } from './data/god';


import BoonLine from './BoonLine';
import BoonIcon from './BoonIcon';

import './App.css'
import { getSingleGodBoonIds, getDuoBoonIds } from './data/boon';
import { getAllKeepsakes } from './data/keepsake';
import { getAllMirrorTalents } from './data/mirror';
import { Aspect_Rail, getWeaponFromId, Weapon } from './data/weapon';
import { getHammersForWeapon } from './data/DaedalusHammer';

const boonClicked = (boonId: string): void => {
    console.log(boonId);
};

const App_Weapon = (props) => {
    const { chosenWeaponId, chosenAspectId } = props;
    
    const chosenWeapon = getWeaponFromId(chosenWeaponId);
    const chosenAspect = chosenWeapon.aspects.find(x => x.id === chosenAspectId);

    return (
        <div className="App_Weapon">
            <img className="App_Weapon_Icon" src={chosenAspect?.iconPath} />
            <div className="App_Weapon_Right">
                <div className="App_Weapon_Name">{chosenWeapon.name}</div>
                <div className="App_Weapon_Aspect">Aspect of {chosenAspect.name}</div>
            </div>
        </div>
    )    
};

const App_Keepsakes = () => {
    const keepsakes = getAllKeepsakes();

    const chosenKeepsakeId = 'Sisyphus';

    const chosenKeepsake = keepsakes.find(keepsake => keepsake.id === chosenKeepsakeId);

    return (
        <div className="App_Keepsake">
            <img className="App_Keepsake_Icon" src={chosenKeepsake?.iconPath} />
        </div>
    )    
};

const App_MirrorTalents = () => {
    const talentLines = getAllMirrorTalents();

    const talentConfig = [1, 1, 2, 1, 1, 2, 1, 1, 2, 0, 0, 0];

    return (
        <div className="App_MirrorTalents">
            {talentLines.map((talentLine, talentLineIndex) => {
                if (talentConfig[talentLineIndex] === 1) {
                    return <p key={talentLineIndex}><b>{talentLine[0].name}</b> - {talentLine[1].name}</p>
                }
                else if (talentConfig[talentLineIndex] === 2) {
                    return <p key={talentLineIndex}>{talentLine[0].name} - <b>{talentLine[1].name}</b></p>
                }
                
                return <p key={talentLineIndex}>{talentLine[0].name} - {talentLine[1].name}</p>
            })}
        </div>
    );
};

const App = () => {
    const chosenWeaponId = Weapon.Rail;
    const chosenAspectId = Aspect_Rail.Eris;

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
            <div className="App_TopBar">
                <App_Weapon chosenWeaponId={chosenWeaponId} chosenAspectId={chosenAspectId} />
                <App_Keepsakes />
                <App_MirrorTalents />
            </div>

            <h2>Daedalus Hammers</h2>
            <div>
                {getHammersForWeapon(chosenWeaponId, chosenAspectId).map(hammer => (
                    <span><img style={{ width: 24 }} src={hammer.iconPath} /> {hammer.name} - </span>
                ))}
            </div>
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
