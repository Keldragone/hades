import './Keepsake.css'
import { getAllKeepsakes } from '@/data/keepsake';

const Component_Keepsakes = () => {
    const keepsakes = getAllKeepsakes();

    const chosenKeepsakeId = 'Sisyphus';

    const chosenKeepsake = keepsakes.find(keepsake => keepsake.id === chosenKeepsakeId);

    return (
        <button className="Keepsake">
            <img className="Keepsake_Icon" src={chosenKeepsake?.iconPath} />
        </button>
    )    
};

export default Component_Keepsakes;
