import weaponsData from "../../data/weapons/weapons.data.json";
import shieldsData from "../../data/shields/shields.data.json";

import "./inventory.styles.css";

const Inventory = ({ user }) => {

    return (
    <>
        <h1>Inventory:</h1>
        <div className="invetory-container">
            <div className="weapon-inventory">
                <img className="weapon-image" src={weaponsData[user.weaponID - 1].image}/>
                <p>Sebzés: {weaponsData[user.weaponID - 1].damage}</p>
            </div>
            <div className="shield-inventory">
                <img className="shield-image" src={shieldsData[user.shieldID - 1].image}/>
                <p>Védelem: {shieldsData[user.shieldID - 1].protection}</p>
            </div>
        </div>
    </>
    );
};

export default Inventory;
