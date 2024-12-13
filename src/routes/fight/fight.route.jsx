import { useState } from "react";
import { useNavigate } from "react-router-dom";

import HealthBar from "../../components/health_bar/health_bar.component";
import Button from "../../components/button/button";
import WeaponAnimation from "../../components/weapon_animation/weapon_animation.component";
import MonsterWeaponAnimation from "../../components/monster_weapon_animation/monster_weapon_anim.component";

import charactersData from "../../data/characters/characters.data.json";
import monstersData from "../../data/monsters/monsters.data.json";
import weaponsData from "../../data/weapons/weapons.data.json";
import shieldsData from "../../data/shields/shields.data.json";

import "./fight.styles.css";

const FightRoute = () => {
    const navigate = useNavigate();

    const monsterIDStorage = Number(localStorage.getItem("selectedMonster"));
    const selectedMonster = monstersData.find((monster) => monster.id === monsterIDStorage);

    // Monster
    const monsterImage = selectedMonster.image;
    const monsterName = selectedMonster.name;
    const monsterHealth = selectedMonster.health;
    const monsterAttack = selectedMonster.attack;
    const monsterAward = selectedMonster.award;
    const monsterWeaponImage = selectedMonster.weapon;
    const monsterAttackSound = new Audio(selectedMonster.sound);
    const [currentMonsterHealth, setCurrentMonsterHealth] = useState(selectedMonster.health);

    // User
    const user = JSON.parse(localStorage.getItem("user"));
    const { name, characterID, gold, weaponID, shieldID, health } = user;
    const [currentUserHealth, setCurrentUserHealth] = useState(health);
    const userAttack = weaponsData[weaponID - 1].damage;
    const userShield = shieldsData[shieldID - 1].protection;
    const attackSound = new Audio(weaponsData[weaponID - 1].sound);

    // Animáció állapota
    const [isAttacking, setIsAttacking] = useState(false);
    const [isMonsterAttacking, setIsMonsterAttacking] = useState(false);

    const attackHandler = () => {
        if (isAttacking) return; // Ha már támadás folyik, ne csinálj semmit
    
        setIsAttacking(true);
        console.log('attack');
        attackSound.play();
        
        // Állapot visszaállítása a támadás végén
        setTimeout(() => {
            
            console.log('end of the attack');
            setCurrentMonsterHealth(currentMonsterHealth - userAttack);
            monsterAttackHandler();
        }, 800); // Az animáció időtartam + kis tartalék
    };

    const monsterAttackHandler = () => {
        setIsMonsterAttacking(true);
        monsterAttackSound.play();
        console.log('monster attack');


        setTimeout(() => {
            console.log('end of the monster attack');
            setCurrentUserHealth(currentUserHealth - (monsterAttack - userShield));
            setIsMonsterAttacking(false);
            setIsAttacking(false);
        }, 800);
    };

    // Játék menet

    const [gameEnded, setGameEnded] = useState(false);

    if (currentUserHealth <= 0 && !gameEnded) {
        alert("Vesztettél!");
        setGameEnded(true); // Jelzi, hogy a játék véget ért
        navigate("/dashboard");
    }
    
    if (currentMonsterHealth <= 0 && !gameEnded) {
        alert(`Nyertél! A nyereményed: ${monsterAward} arany!`);
        setGameEnded(true); // Jelzi, hogy a játék véget ért
        const updatedUser = { ...user, gold: gold + monsterAward };
        localStorage.setItem("user", JSON.stringify(updatedUser));
        navigate("/dashboard");
    }

    return (
        <div className="fight-route-container">
            <div className="user-fight-container">
                <div className="user-fight-image-container">
                    <img
                        src={charactersData[characterID - 1].image}
                        className="character-fight-image"
                        alt="character"
                    />
                </div>

                <p style={{ fontWeight: "bold" }}>{name}</p>
                <HealthBar currentHealth={currentUserHealth} maxHealth={health} />
            </div>

            <div className="attack-button">
                {isAttacking && <WeaponAnimation weaponImage={weaponsData[weaponID - 1].image} />}
                {isMonsterAttacking && <MonsterWeaponAnimation weaponImage={monsterWeaponImage} />}

                <Button style="primary" title="Támadás" onClickHandler={attackHandler} />
            </div>

            <div className="monster-fight-container">
                <img
                    className={monsterName === "Ogre" ? "monster-fight-reverse-image" : "monster-fight-image"}
                    src={monsterImage}
                    alt={monsterName}
                />

                <p style={{ fontWeight: "bold" }}>{monsterName}</p>
                <HealthBar currentHealth={currentMonsterHealth} maxHealth={monsterHealth} />
            </div>
        </div>
    );
};

export default FightRoute;
