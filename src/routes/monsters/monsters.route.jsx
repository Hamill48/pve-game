import { useNavigate } from "react-router-dom";

import monstersData from "../../data/monsters/monsters.data.json";
import BackButton from "../../components/back_button/back_button.component";

import "./monsters.styles.css";

const MonstersRoute = () => {
    const navigate = useNavigate();

    const onClickHandler = (monsterID) => {
        localStorage.setItem("selectedMonster", monsterID);
        navigate('/fight');
    }

    return(
        <div className="monsters-route-container">
            <BackButton />
            <h1 className="monsters-route-h1">Válaszd ki melyik szörnyet szeretnéd megtámadni!</h1>
            <div className="monsters-container">
                {monstersData.map((monster) => {
                    const monsterID = monster.id;
                    return(
                        <div className="monster-container" key={monster.id} onClick={() => {onClickHandler(monsterID)}}>
                            <img className="monster-image" src={monster.image} alt={monster.name}/>
                            <p style={{fontWeight: 'bold'}}>{monster.name}</p>
                            <p style={{margin: '-10px'}}>Életerő: {monster.health}</p>
                            <p>Támadás: {monster.attack}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MonstersRoute;