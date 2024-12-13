import { useState } from "react";

import Button from "../../components/button/button";
import Inventory from "../../components/inventory/inventory.component";
import BackButton from "../../components/back_button/back_button.component";

import charactersData from "../../data/characters/characters.data.json";
import shieldsData from "../../data/shields/shields.data.json";
import weaponsData from "../../data/weapons/weapons.data.json";

import "./character.styles.css";

const CharacterRoute = () => {
    const [user, setUser] = useState(() => {
        const user = localStorage.getItem("user");
        return user ? JSON.parse(user) : null; // Ha nincs adat, null-t ad vissza
    });

    const { name, characterID, gold, weaponID, shieldID } = user;

    const buyWeapon = (newWeaponID, cost) => {
        if (weaponsData[newWeaponID - 1].price > gold) {
            alert("Nincs elég aranyad!");
            return;
        }

        if (newWeaponID == weaponID) {
            alert("Már rendelkezel ezzel a fegyverrel!");
            return;
        }

        const updatedUser = { ...user, weaponID: newWeaponID, gold: gold - cost };
        setUser(updatedUser);
      
        // Szinkronizáld a localStorage-szal
        localStorage.setItem("user", JSON.stringify(updatedUser));
    }

    const buyShield = (newShieldID, cost) => {
        if (shieldsData[newShieldID - 1].price > gold) {
            alert("Nincs elég aranyad!");
            return;
        }

        if (newShieldID == shieldID) {
            alert("Már rendelkezel ezzel a pajzssal!");
            return;
        }
        const updatedUser = { ...user, shieldID: newShieldID, gold: gold - cost };
        setUser(updatedUser);
      
        // Szinkronizáld a localStorage-szal
        localStorage.setItem("user", JSON.stringify(updatedUser));
    }

    return (
        <div className="character-route-container">
            <BackButton />
            <p>{name}</p>
            <p>Arany: {gold}</p>
            <img className="characters-img character-route-img" src={charactersData[characterID - 1].image} alt="character"/>

            <Inventory user={user}/>

            <h1>Bolt:</h1>
            <div className="shop-container">
                <div className="weapon-shop">
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <img className="weapon-image" src={weaponsData[1].image}/>
                        <p>Sebzés: {weaponsData[1].damage}</p>
                        <p style={{marginTop: '-10px'}}>Ár: {weaponsData[1].price} arany</p>
                        <Button style="selector" title="vásárlás" onClickHandler={() => {buyWeapon(2, 10)}}/>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <img className="weapon-image" src={weaponsData[2].image}/>
                        <p>Sebzés: {weaponsData[2].damage}</p>
                        <p style={{marginTop: '-10px'}}>Ár: {weaponsData[2].price}</p>
                        <Button style="selector" title="vásárlás" onClickHandler={() => {buyWeapon(3, 20)}}/>
                    </div>
                </div>
                <div className="shield-shop">
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <img className="shield-image" src={shieldsData[1].image}/>
                        <p>Védelem: {shieldsData[1].protection}</p>
                        <p style={{marginTop: '-10px'}}>Ár: {shieldsData[1].price}</p>
                        <Button style="selector" title="vásárlás" onClickHandler={() => {buyShield(2, 20)}}/>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <img className="shield-image" src={shieldsData[2].image}/>
                        <p>Védelem: {shieldsData[2].protection}</p>
                        <p style={{marginTop: '-10px'}}>Ár: {shieldsData[2].price}</p>
                        <Button style="selector" title="vásárlás" onClickHandler={() => {buyShield(3, 30)}}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CharacterRoute;