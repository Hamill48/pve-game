import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../../components/input/input.component";
import Button from "../../components/button/button";
import charactersData from '../../data/characters/characters.data.json';
import BackButton from "../../components/back_button/back_button.component";

import "./host.styles.css";

const Host = () => {
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
    const navigate = useNavigate();

    const handleCharacterSelect = (character) => {
        setSelectedCharacter(character);
        console.log(character);
    };

    const handleNextCharacter = () => {
        if (currentCharacterIndex < charactersData.length - 2) {
            setCurrentCharacterIndex(currentCharacterIndex + 1);
        }
    };

    const handlePreviousCharacter = () => {
        if (currentCharacterIndex > 0) {
            setCurrentCharacterIndex(currentCharacterIndex - 1);
        }
    };

    const handleLogin = () => {
        const name = document.getElementById("name").value; // Az input mező értéke
        const selectedCharacterId = charactersData[currentCharacterIndex].id; // Kiválasztott karakter ID
      
        if (!name) {
            alert("Kérlek, add meg a nevedet!");
            return;
        }
      
        // Ha nem létezik, bejelentkezés és adat mentés localStorage-ba
        const playerData = {
            name: name,
            characterID: selectedCharacterId,
            health: 100,
            weaponID: 1,
            shieldID: 1,
            gold: 0
        };

        localStorage.setItem("user", JSON.stringify(playerData));  // Mentés a localStorage-ba
        localStorage.setItem("characterId", selectedCharacterId);  // Karakter ID mentése

        alert(`Üdvözlünk, ${name}! Sikeresen bejelentkeztél.`);
        navigate('/dashboard');  // Átirányítás a főoldalra
        window.location.reload();
    };

    return (
        <div className="host-container">
            <BackButton />
            <Input id="name" labelTitle="Add meg a nevedet:" type="text"/>
            <h3>Válassz karaktert:</h3>

            <div className="character-selector-container">
                <Button style="selector" title="Előző" onClickHandler={handlePreviousCharacter} className="character-selector-button"></Button>
                <img className="characters-img" src={charactersData[currentCharacterIndex].image} alt="character"/>
                <Button style="selector" title="Következő" onClickHandler={handleNextCharacter} className="character-selector-button"></Button>
            </div>

            <Button 
                style="primary" 
                title="Bejelentkezés" 
                onClickHandler={handleLogin}
            />
        </div>
    );
};

export default Host;
