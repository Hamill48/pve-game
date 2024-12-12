import "./monster_weapon_anim.styles.css";

const MonsterWeaponAnimation = ({ weaponImage }) => {
    return (
        <div 
            className="monster-weapon-animation" 
            style={{ backgroundImage: `url(${weaponImage})` }}
            
        ></div>
    );
};

export default MonsterWeaponAnimation;
