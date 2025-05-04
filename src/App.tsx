import { useMemo, useState } from 'react';

import { God, getAllGods } from './data/god';

import BoonLine from './BoonLine';
import BoonIcon from './BoonIcon';

import './App.css'
import { getSingleGodBoonIds, getDuoBoonIds, getBoonLibrary } from './data/boon';
import { getAllKeepsakes } from './data/keepsake';
import { getAllMirrorTalents } from './data/mirror';
import { Aspect, getWeaponFromId, Weapon } from './data/weapon';
import { getHammersForWeapon } from './data/DaedalusHammer';
import { RunState } from './data/runState';
import { BoonRarityType } from './data/boonRarityType';

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

const App_MirrorTalents = (props) => {
    const { chosenMirrorTalentIds, onClick } = props;

    const talentLines = getAllMirrorTalents();

    return (
        <div className="App_MirrorTalents">
            {talentLines.map(talentLine => {
                const firstSelected = chosenMirrorTalentIds.includes(talentLine[0].id);
                const secondSelected = chosenMirrorTalentIds.includes(talentLine[1].id);

                let firstClassName = "App_MirrorTalents_Line_Item App_MirrorTalents_Line_ItemFirst";
                let secondClassName = "App_MirrorTalents_Line_Item App_MirrorTalents_Line_ItemSecond";
                
                if (firstSelected) {
                    firstClassName += " App_MirrorTalents_Line_ItemFirst--Selected";
                }

                if (secondSelected) {
                    secondClassName += " App_MirrorTalents_Line_ItemSecond--Selected";
                }

                return (
                    <div className="App_MirrorTalents_Line">
                        <button className={firstClassName} onClick={() => onClick(talentLine[0].id)} />
                        <button className={secondClassName} onClick={() => onClick(talentLine[1].id)} />
                    </div>
                );
            })}
        </div>
    );
};

const App_DaedalusHammer = (props) => {
    const { hammerLibrary, collectedHammerIds, incompatibleHammerIds, onClick } = props;

    const collectibleHammerIds = hammerLibrary.filter(hammer => !collectedHammerIds.includes(hammer.id) && !incompatibleHammerIds.includes(hammer.id))
    
    const probability = collectibleHammerIds.length <= 3 ? 1 : 3 / collectibleHammerIds.length;

    return (
        <div className="App_DaedalusHammer">
            <p>Pool {collectibleHammerIds.length}</p>
            <p>Probability {Math.trunc(probability * 100)}%</p>
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
    const [ chosenWeaponId, setChosenWeaponId ] = useState(Weapon.Shield);
    const [ chosenAspectId, setChosenAspectId ] = useState(Aspect.Shield_Beowulf);
    const [ chosenMirrorTalentIds, setChosenMirrorTalentIds ] = useState(['InfernalSoul']);

    const [ collectedHammerIds, setCollectedHammerIds ] = useState([]);
    const [ collectedBoonIds, setCollectedBoonIds ] = useState([]);

    const chosenWeapon = useMemo(() => {
        return getWeaponFromId(chosenWeaponId);
    }, [ chosenWeaponId ]);

    const chosenAspect = useMemo(() => {
        if (chosenWeapon === undefined) {
            return undefined;
        }

        return chosenWeapon.aspects.find(aspect => aspect.id === chosenAspectId);
    }, [ chosenWeaponId, chosenAspectId ]);

    const runState: RunState = {
        weapon: chosenWeaponId,
        aspect: chosenAspectId,
        keepsake: 'Sisyphus',
        mirror: chosenMirrorTalentIds,
        collectedBoonIds: collectedBoonIds,
        collectedHammerIds: collectedHammerIds,
    };

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

    const incompatibleBoonIds = useMemo(() => {
        return [];
    }, [ collectedBoonIds ]);

    const boonLibrary = useMemo(() => {
        return getBoonLibrary(runState);
    }, [ chosenWeaponId, chosenAspectId, chosenMirrorTalentIds ]);

    const onMirrorClick = (mirrorTalentId: string) => {
        if (chosenMirrorTalentIds.includes(mirrorTalentId)) {
            console.log(`Clicked selected mirror talent ${mirrorTalentId}`);
            setChosenMirrorTalentIds(chosenMirrorTalentIds.filter(chosenMirrorTalentId => chosenMirrorTalentId !== mirrorTalentId));
        } else {
            console.log(`Clicked unselected mirror talent ${mirrorTalentId}`);
            setChosenMirrorTalentIds([mirrorTalentId, ...chosenMirrorTalentIds]);
        }
    };

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

    const onBoonClick = (boonId: string): void => {
        console.log(boonId);

        if (collectedBoonIds.includes(boonId)) {
            console.log(`Clicked collected boon ${boonId}`);
            setCollectedBoonIds(collectedBoonIds.filter(collectedBoonId => collectedBoonId !== boonId));
        } else {
            console.log(`Clicked uncollected boon ${boonId}`);
            setCollectedBoonIds([boonId, ...collectedBoonIds]);
        }
    };

    const iconSizePx = 64;
    const iconSpacingPx = 2;

    console.log(boonLibrary);

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
                    <App_MirrorTalents chosenMirrorTalentIds={chosenMirrorTalentIds} onClick={onMirrorClick} />
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
                                boons={boonLibrary.filter(boon => boon.god === god)}
                                collectedBoonIds={collectedBoonIds}
                                incompatibleBoonIds={incompatibleBoonIds}
                                onClick={onBoonClick}
                                iconSizePx={iconSizePx}
                                iconSpacingPx={iconSpacingPx}
                            />
                        ))}
                        <BoonLine
                            boons={boonLibrary.filter(boon => boon.god === God.Hermes)}
                            collectedBoonIds={collectedBoonIds}
                            incompatibleBoonIds={incompatibleBoonIds}
                            onClick={onBoonClick}
                            iconSizePx={iconSizePx}
                            iconSpacingPx={iconSpacingPx}
                        />
                        <BoonLine
                            boons={boonLibrary.filter(boon => boon.rarityType === BoonRarityType.Duo)}
                            collectedBoonIds={collectedBoonIds}
                            incompatibleBoonIds={incompatibleBoonIds}
                            onClick={onBoonClick}
                            iconSizePx={iconSizePx}
                            iconSpacingPx={iconSpacingPx}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default App;
