import { Hammer, HammerId } from '@/data/Hammer/types';
import './Hammer.css'

interface Component_Hammer_Props {
    hammerLibrary: Array<Hammer>;
    collectedHammerIds: Array<HammerId>;
    incompatibleHammerIds: Array<HammerId>;
    onClick: (hammerId: HammerId) => void;
};

const Component_Hammer = (props: Component_Hammer_Props) => {
    const { hammerLibrary, collectedHammerIds, incompatibleHammerIds, onClick } = props;

    const collectibleHammerIds = hammerLibrary.filter(hammer => !collectedHammerIds.includes(hammer.id) && !incompatibleHammerIds.includes(hammer.id))
    
    const probability = collectibleHammerIds.length <= 3 ? 1 : 3 / collectibleHammerIds.length;

    return (
        <div className="Hammer">
            {hammerLibrary.map(hammer => {
                const hammerIsCollected = collectedHammerIds.includes(hammer.id);
                const hammerIsIncompatible = incompatibleHammerIds.includes(hammer.id);

                let className = 'Hammer_Item';
                
                if (hammerIsCollected) {
                    className += ' Hammer_Item--Collected';
                }
                else if (hammerIsIncompatible) {
                    className += ' Hammer_Item--Incompatible';
                }
                else {
                    className += ' Hammer_Item--Collectable';
                }
                return (
                    <button className={className} disabled={hammerIsIncompatible} onClick={() => onClick(hammer.id)}>
                        <img className="Hammer_Item_Icon" src={hammer.iconPath} />
                        <div className="Hammer_Item_Text">
                            {hammer.name}
                        </div>
                    </button>
                );
            })}
            <p>Pool {collectibleHammerIds.length} - p{Math.trunc(probability * 100)}%</p>
        </div>
    );
};

export default Component_Hammer;
