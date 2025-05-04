import { useMemo, useState } from 'react';

import { God, getAllGods } from './data/god';


import BoonLine from './BoonLine';
import BoonIcon from './BoonIcon';

import './App.css'
import { getSingleGodBoonIds, getDuoBoonIds } from './data/boon';
import { getAllKeepsakes } from './data/keepsake';
import { getAllMirrorTalents } from './data/mirror';
import { Aspect_Rail, getWeaponFromId, Weapon } from './data/weapon';
import { getHammersForWeapon } from './data/DaedalusHammer';
import { DaedalusHammers_Rail_Incompatible } from './data/DaedalusHammer/Rail';

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

const App_DaedalusHammer = (props) => {
    const { hammerLibrary, collectedHammerIds, incompatibleHammerIds, onClick } = props;

    return (
        <div className="App_DaedalusHammer">
            {hammerLibrary.map(hammer => {
                const hammerIsCollected = collectedHammerIds.includes(hammer.id);
                const hammerIsIncompatible = incompatibleHammerIds.includes(hammer.id);

                let className = 'App_DaedalusHammer_Item';
                
                if (hammerIsCollected) {
                    className += ' App_DaedalusHammer_Item--Collected';
                }
                else if (hammerIsIncompatible) {
                    className += ' App_DaedalusHammer_Item--Incompatible';
                }
                else {
                    className += ' App_DaedalusHammer_Item--Collectable';
                }
                return (
                    <button className={className} disabled={hammerIsIncompatible} onClick={() => onClick(hammer.id)}>
                        <img className="App_DaedalusHammer_Item_Icon" src={hammer.iconPath} />
                        <div className="App_DaedalusHammer_Item_Text">
                            {hammer.name}
                        </div>
                    </button>
                );
            })}
        </div>
    );
};

const App = () => {
    const [ chosenWeaponId, setChosenWeaponId ] = useState(Weapon.Rail);
    const [ chosenAspectId, setChosenAspectId ] = useState(Aspect_Rail.Eris);

    const [ collectedHammerIds, setCollectedHammerIds ] = useState([]);

    const chosenWeapon = useMemo(() => {
        return getWeaponFromId(chosenWeaponId);
    }, [ chosenWeaponId ]);

    const chosenAspect = useMemo(() => {
        if (chosenWeapon === undefined) {
            return undefined;
        }

        return chosenWeapon.aspects.find(aspect => aspect.id === chosenAspectId);
    }, [ chosenWeaponId, chosenAspectId ]);

    const hammerLibrary = useMemo(() => {
        if (chosenWeapon === undefined || chosenAspect === undefined) {
            return [];
        }

        return getHammersForWeapon(chosenWeaponId, chosenAspectId);
    }, [ chosenWeaponId, chosenAspectId ]);

    const incompatibleHammerIds = useMemo(() => {
        const collectedHammers = hammerLibrary.filter(hammer => collectedHammerIds.includes(hammer.id));
        
        return [...new Set(collectedHammers.flatMap(hammer => hammer.incompatible))];
    }, [ collectedHammerIds ]);

    const [ collectedBoonIds, setCollectedBoonIds ] = useState([]);

    const onDaedalusHammerClick = (hammerId: string) => {
        if (incompatibleHammerIds.includes(hammerId)) {
            console.log(`Clicked incompatible hammer ${hammerId}`);
        } else if (collectedHammerIds.includes(hammerId)) {
            console.log(`Clicked collected hammer ${hammerId}`);
            setCollectedHammerIds(collectedHammerIds.filter(collectedHammerId => collectedHammerId !== hammerId));
        } else {
            console.log(`Clicked uncollected hammer ${hammerId}`);
            setCollectedHammerIds([hammerId, ...collectedHammerIds]);
        }
    };

    return (
        <div className="App">
            {/* <div className="App_Sidebar">
                <BoonIcon boonId="Dionysus_Attack" iconSizePx={120} />
                <BoonIcon boonId="Dionysus_Special" iconSizePx={120} />
                <BoonIcon boonId="Dionysus_Cast" iconSizePx={120} />
                <BoonIcon boonId="Dionysus_Dash" iconSizePx={120} />
                <BoonIcon boonId="Dionysus_Aid" iconSizePx={120} />
                <BoonLine boonIds={collectedBoonIds} collectedBoonIds={[]} />
                <p>Collected Boon IDs: {collectedBoonIds.join(' | ')}</p>
            </div> */}
            <div className="App_Content">
                <div className="App_TopBar">
                    <App_Weapon chosenWeaponId={chosenWeaponId} chosenAspectId={chosenAspectId} />
                    <App_Keepsakes />
                    <App_MirrorTalents />
                </div>
                <div className="App_Lower">
                    <App_DaedalusHammer
                        hammerLibrary={hammerLibrary}
                        collectedHammerIds={collectedHammerIds}
                        incompatibleHammerIds={incompatibleHammerIds}
                        onClick={onDaedalusHammerClick}
                    />
                    <div className="App_Right">
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
            </div>
        </div>
    )
};

export default App;
