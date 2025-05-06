import { useEffect, useMemo, useState } from 'react';

import { getGodFromId, GodId } from './data/god';

import './App.css'
import { getBoonLibrary } from './data/Boon';
import { AspectId, getAspectFromId, getWeaponFromId } from './data/weapon';
import { getHammersForWeapon } from './data/Hammer';
import { RunState } from './data/runState';

import Component_Hammer from './components/Hammer';
import Component_Keepsake from './components/Keepsake';
import Component_MirrorTalents from './components/MirrorTalents';
import Component_Weapon from './components/Weapon';
import { KeepsakeId } from './data/keepsake';
import { MirrorTalentId } from './data/mirror';
import { HammerId } from './data/Hammer/types';
import { Boon, BoonId } from './data/Boon/types';
import Component_BoonLibrary, { BoonLibrary_BoonData_Status } from './components/BoonLibrary';
import { BoonRarityType } from './data/boonRarityType';
import { hasBoon } from './data/Boon/requirementsTests';

const App = () => {
    const [ chosenAspectId, setChosenAspectId ] = useState<AspectId>(AspectId.Shield_Beowulf);
    const [ chosenMirrorTalentIds, setChosenMirrorTalentIds ] = useState<Array<MirrorTalentId>>([ MirrorTalentId.InfernalSoul ]);
    const [ chosenKeepsakeId, setChosenKeepsakeId ] = useState<KeepsakeId>(KeepsakeId.Cerberus);
    const [ collectedHammerIds, setCollectedHammerIds ] = useState<Array<HammerId>>([]);
    const [ collectedBoonIds, setCollectedBoonIds ] = useState<Array<BoonId>>([]);

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
        keepsakeId: KeepsakeId.Sisyphus,
        mirrorTalentIds: chosenMirrorTalentIds,
        collectedBoonIds: collectedBoonIds,
        collectedHammerIds: collectedHammerIds,
    };

    useEffect(() => {
        setCollectedBoonIds([]);
    }, [ chosenAspectId, chosenMirrorTalentIds ]);

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

    const onMirrorClick = (mirrorTalentId: MirrorTalentId): void => {
        if (chosenMirrorTalentIds.includes(mirrorTalentId)) {
            console.log(`Clicked selected mirror talent ${mirrorTalentId}`);
            setChosenMirrorTalentIds(chosenMirrorTalentIds.filter(chosenMirrorTalentId => chosenMirrorTalentId !== mirrorTalentId));
        } else {
            console.log(`Clicked unselected mirror talent ${mirrorTalentId}`);
            setChosenMirrorTalentIds([mirrorTalentId, ...chosenMirrorTalentIds]);
        }
    };

    const onHammerClick = (hammerId: HammerId): void => {
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

    const onBoonClick = (boonId: BoonId): void => {
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

    const boonGroups = [ GodId.Aphrodite, GodId.Ares, GodId.Artemis, GodId.Athena, GodId.Demeter, GodId.Dionysus, GodId.Poseidon, GodId.Zeus, GodId.Hermes ].map(godId => {
        const god = getGodFromId(godId);

        return {
            heading: god.name,
            headingColor: god.color,
            headingIconPath: god.iconPath,
            boonData: boonLibrary.filter(boon => boon.godId === godId).map(boon => {
                let status = BoonLibrary_BoonData_Status.Available;
    
                if (collectedBoonIds.includes(boon.id)) {
                    status = BoonLibrary_BoonData_Status.Collected;    
                }
                else if (boon.testRequirements !== undefined && !boon.testRequirements(runState)) {
                    status = BoonLibrary_BoonData_Status.Unavailable;
                }
    
                return {
                    id: boon.id,
                    status: status,
                };
            }),
        };
    });

    boonGroups.push({
        heading: 'Duo',
        headingColor: '#888888',
        headingIconPath: '',
        boonData: boonLibrary.filter(boon => boon.rarityType === BoonRarityType.Duo).map(boon => {
            let status = BoonLibrary_BoonData_Status.Available;

            if (collectedBoonIds.includes(boon.id)) {
                status = BoonLibrary_BoonData_Status.Collected;    
            }
            else if (boon.testRequirements !== undefined && !boon.testRequirements(runState)) {
                status = BoonLibrary_BoonData_Status.Unavailable;
            }

            return {
                id: boon.id,
                status: status,
            };
        }),
    });

    return (
        <div className="App">
            <div className="App_Nav">Keldragone was here</div>
            <div className="App_Content">
                <div className="App_TopBar">
                    <Component_Weapon
                        chosenWeaponId={chosenWeaponId}
                        chosenAspectId={chosenAspectId}
                        onClickAspect={onClickAspect}
                    />
                    <Component_Keepsake
                        chosenKeepsakeId={chosenKeepsakeId}
                    />
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
                        <Component_BoonLibrary boonGroups={boonGroups} onClick={onBoonClick} />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default App;
