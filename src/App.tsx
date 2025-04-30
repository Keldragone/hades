import { BoonState } from './logic/boon';

import BoonLine from './BoonLine';
import BoonIcon from './BoonIcon';

import './App.css'
import { BoonData } from './data/boon';

const boonState = new BoonState();

function App() {
  return (
    <div className="App">
      <div className="App_Sidebar">
        <BoonIcon boonId="Dionysus_Attack" iconSizePx={120} />
        guh
        <BoonLine boonIds={boonState.collectedBoonIds} collectedBoonIds={[]} />
        <p>Collected Boon IDs: {boonState.collectedBoonIds.join(' | ')}</p>

      </div>
      <div className="App_Content">
        {["Artemis", "Dionysus"].map(god => (
          <BoonLine
            boonIds={Object.entries(BoonData).filter(([key, value]) => value.god === god).map(([key, value]) => key)}
            collectedBoonIds={boonState.collectedBoonIds}
          />
        ))}
      </div>
    </div>
  )
}

export default App
