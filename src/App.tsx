import { useMemo, useState } from 'react';

import { God, getAllGods } from './data/god';

import BoonLine from './BoonLine';
import BoonIcon from './BoonIcon';

import './App.css'
import { getSingleGodBoonIds, getDuoBoonIds, getBoonLibrary } from './data/Boon';
import { getAllKeepsakes } from './data/keepsake';
import { getAllMirrorTalents } from './data/mirror';
import { AspectId, getAllWeapons, getAspectFromId, getWeaponFromId, WeaponId } from './data/weapon';
import { getHammersForWeapon } from './data/Hammer';
import { RunState } from './data/runState';
import { BoonRarityType } from './data/boonRarityType';

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
