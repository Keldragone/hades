import { useState } from 'react';

import { getAllGods } from './data/god';

import BoonLine from './BoonLine';
import BoonIcon from './BoonIcon';

import './App.css'
import { getSingleGodBoonIds } from './data/boon';

const boonClicked = (boonId: string): void => {
    console.log(boonId);
};

function App() {
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
            {getAllGods().map(god => (
                <BoonLine
                    boonIds={getSingleGodBoonIds(god)}
                    collectedBoonIds={collectedBoonIds}
                    onClick={boonClicked}
                />
            ))}
        </div>
        </div>
    )
}

export default App
