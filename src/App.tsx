import { useMemo, useState } from 'react';

import { getAllGodIds } from './data/god';

import './App.css'
import { getBoonLibrary } from './data/Boon';
import { AspectId, getAspectFromId, getWeaponFromId } from './data/weapon';
import { getHammersForWeapon } from './data/Hammer';
import { RunState } from './data/runState';

import Component_Hammer from './components/Hammer';
import Component_Keepsake from './components/Keepsake';
import Component_MirrorTalents from './components/MirrorTalents';
import Component_Weapon from './components/Weapon';

const App = () => {
    const [ chosenAspectId, setChosenAspectId ] = useState(AspectId.Shield_Beowulf);
    const [ chosenMirrorTalentIds, setChosenMirrorTalentIds ] = useState(['InfernalSoul']);

    const [ collectedHammerIds, setCollectedHammerIds ] = useState([]);
    const [ collectedBoonIds, setCollectedBoonIds ] = useState([]);

    const chosenAspect = useMemo(() => {
        return getAspectFromId(chosenAspectId);
    }, [ chosenAspectId ]);

    const chosenWeaponId = useMemo(() => {
        return chosenAspect?.weaponId;
    }, [ chosenAspectId ])

    const chosenWeapon = useMemo(() => {
        return getWeaponFromId(chosenWeaponId);
    }, [ chosenWeaponId ]);

    const runState: RunState = {
        aspectId: chosenAspectId,
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

    const onMirrorClick = (mirrorTalentId: string): void => {
        if (chosenMirrorTalentIds.includes(mirrorTalentId)) {
            console.log(`Clicked selected mirror talent ${mirrorTalentId}`);
            setChosenMirrorTalentIds(chosenMirrorTalentIds.filter(chosenMirrorTalentId => chosenMirrorTalentId !== mirrorTalentId));
        } else {
            console.log(`Clicked unselected mirror talent ${mirrorTalentId}`);
            setChosenMirrorTalentIds([mirrorTalentId, ...chosenMirrorTalentIds]);
        }
    };

    const onHammerClick = (hammerId: string): void => {
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

    const onClickAspect = (aspectId: AspectId): void => {
        console.log(`Clicked aspect ${aspectId}`);
        setChosenAspectId(aspectId);
    };

    const iconSizePx = 64;
    const iconSpacingPx = 2;

    console.log(boonLibrary);

    return (
        <div className="App">
            <div className="App_Content">
                <div className="App_TopBar">
                    <Component_Weapon
                        chosenWeaponId={chosenWeaponId}
                        chosenAspectId={chosenAspectId}
                        onClickAspect={onClickAspect}
                    />
                    <Component_Keepsake />
                    <Component_MirrorTalents
                        chosenMirrorTalentIds={chosenMirrorTalentIds}
                        onClick={onMirrorClick}
                    />
                </div>
                <div className="App_Lower">
                    <Component_Hammer
                        hammerLibrary={hammerLibrary}
                        collectedHammerIds={collectedHammerIds}
                        incompatibleHammerIds={incompatibleHammerIds}
                        onClick={onHammerClick}
                    />
                    <div className="App_Right">
                        {getAllGodIds().map(godId => (
                            <div className="App_GodBoons">
                                {boonLibrary.filter(boon => boon.godId === godId).map(boon => (
                                    <button className="App_GodBoons_Item">{boon.name}</button>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default App;
