import { getBoonFromId } from '@/data/Boon';
import './BoonLibrary.css'
import { BoonId } from '@/data/Boon/types';
import { BoonRarityType } from '@/data/boonRarityType';
import { BoonLibrary_BoonData, BoonLibrary_BoonData_Status } from '.';

interface Component_BoonLibrary_Group_Props {
    heading: string;
    headingColor: string;
    headingIconPath: string;
    boonData: Array<BoonLibrary_BoonData>;
    onClick: (boonId: BoonId) => void;
};

const Component_BoonLibrary_Group = (props: Component_BoonLibrary_Group_Props) => {
    const { heading, headingColor, headingIconPath, boonData, onClick } = props;

    return (
        <div className="BoonLibrary_Group">
            <div className="BoonLibrary_Group_Heading" style={{ backgroundColor: headingColor }}>
                <div className="BoonLibrary_Group_Heading_Text">
                    {heading}
                </div>
                <img className="BoonLibrary_Group_Heading_Icon" src={headingIconPath} />
            </div>
            <div className="BoonLibrary_Group_Items">
                {boonData.map(boonDataItem => {
                    const boon = getBoonFromId(boonDataItem.id);

                    let className = 'BoonLibrary_Group_Item';

                    if (boon.rarityType === BoonRarityType.Legendary) {
                        className += ' BoonLibrary_Group_Item--Legendary';
                    }
                    else if (boon.rarityType === BoonRarityType.Duo) {
                        className += ' BoonLibrary_Group_Item--Duo';
                    }
                    
                    if (boonDataItem.status === BoonLibrary_BoonData_Status.Collected) {
                        className += ' BoonLibrary_Group_Item--Collected';
                    }

                    return (
                        <button
                            className={className}
                            disabled={boonDataItem.status === BoonLibrary_BoonData_Status.Unavailable}
                            onClick={() => onClick(boonDataItem.id)}
                        >
                            {boon.name} 
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default Component_BoonLibrary_Group;
