import Component_BoonLibrary_Group from './Group';
import './BoonLibrary.css';
import { BoonId } from '@/data/Boon/types';

export enum BoonLibrary_BoonData_Status {
    Collected,
    Available,
    Unavailable,
};

export interface BoonLibrary_BoonData {
    id: BoonId;
    status: BoonLibrary_BoonData_Status;
};

export interface BoonLibrary_BoonGroup {
    heading: string;
    headingColor: string;
    headingIconPath: string;
    boonData: Array<BoonLibrary_BoonData>;
};

interface Component_BoonLibrary_Props {
    boonGroups: Array<BoonLibrary_BoonGroup>;
    onClick: (boonId: BoonId) => void;
};

const Component_BoonLibrary = (props: Component_BoonLibrary_Props) => {
    const { boonGroups, onClick } = props;

    return (
        <div className="BoonLibrary">
            {boonGroups.map(boonGroup => (
                <Component_BoonLibrary_Group
                    heading={boonGroup.heading}
                    headingColor={boonGroup.headingColor}
                    headingIconPath={boonGroup.headingIconPath}
                    boonData={boonGroup.boonData}
                    onClick={onClick}
                />
            ))}
        </div>
    );
};

export default Component_BoonLibrary;
