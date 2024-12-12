import "./weapon_animation.styles.css";

const WeaponAnimation = ({ weaponImage }) => {
    return (
        <div 
            className="weapon-animation" 
            style={{ backgroundImage: `url(${weaponImage})` }}
            
        ></div>
    );
};

export default WeaponAnimation;
