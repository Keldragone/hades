import { useState } from 'react';

import './Weapon.css'
import { AspectId, getAllWeapons, getAspectFromId, getWeaponFromId, WeaponId } from '@/data/weapon';

interface Component_Weapon_Props {
    chosenWeaponId: WeaponId;
    chosenAspectId: AspectId;
    onClickAspect: (aspectId: AspectId) => void;
};

const Component_Weapon = (props: Component_Weapon_Props) => {
    const [ dropdownOpen, setDropdownOpen ] = useState(false);

    const { chosenWeaponId, chosenAspectId, onClickAspect } = props;
    
    const chosenWeapon = getWeaponFromId(chosenWeaponId);
    const chosenAspect = getAspectFromId(chosenAspectId);

    const toggleDropdownOpen = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className="Weapon">
            <button className="Weapon_Content" onClick={toggleDropdownOpen}>
                <img className="Weapon_Icon" src={chosenAspect?.iconPath} />
                <div className="Weapon_Right">
                    <div className="Weapon_Name">{chosenWeapon.name}</div>
                    <div className="Weapon_Aspect">Aspect of {chosenAspect.name}</div>
                </div>
            </button>
            {dropdownOpen && <div className="Weapon_Dropdown">
                {getAllWeapons().map(weapon => (
                    <div className="Weapon_Dropdown_Row">
                        <div className="Weapon_Dropdown_Row_WeaponName">{weapon.name}</div>
                        {weapon.aspectIds.map(aspectId => {
                            const aspect = getAspectFromId(aspectId);

                            let aspectClassName = "Weapon_Dropdown_Row_Aspect";

                            if (aspectId === chosenAspectId) {
                                aspectClassName += " Weapon_Dropdown_Row_Aspect--Selected"
                            }

                            return (
                                <button className={aspectClassName} onClick={() => onClickAspect(aspectId)}>
                                    <img className="Weapon_Dropdown_Row_Aspect_BorderIcon" src="./Icons/Boon/border_hollow.png" />
                                    <img className="Weapon_Dropdown_Row_Aspect_Icon" src={aspect.iconPath} />
                                    <div className="Weapon_Dropdown_Row_Aspect_Name">{aspect.name}</div>
                                </button>
                            );
                        })}
                    </div>
                ))}
            </div>}
        </div>
    )    
};

export default Component_Weapon;
