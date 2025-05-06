import './Keepsake.css'
import { getKeepsakeFromId, KeepsakeId } from '@/data/keepsake';

interface Component_Keepsake_Props {
    chosenKeepsakeId: KeepsakeId;
}

const Component_Keepsake = (props: Component_Keepsake_Props) => {
    const { chosenKeepsakeId } = props;

    const chosenKeepsake = getKeepsakeFromId(chosenKeepsakeId);

    return (
        <button className="Keepsake">
            <img className="Keepsake_Icon" src={chosenKeepsake.iconPath} />
        </button>
    )    
};

export default Component_Keepsake;
