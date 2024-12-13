import BackButton from "../../components/back_button/back_button.component";

import "./help.styles.css";

const Help = () => {

    return(
        <div className="help-section">
            <BackButton />
            <h1>Játék Súgó</h1>
            <p style={{textAlign: 'center'}}>A játék célja, hogy legyőzd az ellenfeledet, miközben megőrzöd az életerődet.</p>
            <ul>
                <li>Használhatod a "Támadás" gombot, hogy megtámadd az ellenfeledet.</li>
                <li>Az ellenfél is visszatámad, ezért figyeld az életerődet.</li>
                <li>Ha az ellenfeled életereje 0-ra csökken, nyersz, és aranyat kapsz jutalmul.</li>
                <li>Ha az életerőd 0-ra csökken, elvesztetted a csatát.</li>
            </ul>
            <p>Jó szórakozást és sok sikert!</p>
        </div>

    );
};

export default Help;