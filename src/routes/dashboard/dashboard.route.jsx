import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

import Button from "../../components/button/button";
import BackButton from "../../components/back_button/back_button.component";

import "./dashboard.styles.css";

const Dashboard = () => {
    const [userName, setUserName] = useState("");
    const [loading, setLoading] = useState(true); // Állapot a betöltéshez
    const navigate = useNavigate();

    const deleteUser = () => {
        localStorage.clear();
        navigate('/');
        window.location.reload();
    }

    useEffect(() => {
        // Ellenőrizzük, hogy a localStorage-ban található-e a bejelentkezett felhasználó adatai
        const userData = JSON.parse(localStorage.getItem("user"));
        
        if (userData) {
            setUserName(userData.name); // Beállítjuk a felhasználó nevét
        }

        setLoading(false); // Betöltés befejezése
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Tölthető állapot, amíg betölt a név
    }

    return (
        <div className="dashboard-container">
            <BackButton />
            <h1>Üdvözöllek, {userName}!</h1>
            <Link to='/monsters'><Button style="primary" title="Szörnyek"/></Link>
            <Link to="/character"><Button style="primary" title="Karakter"/></Link>
            <Button style="primary" title="Karakter törlése" onClickHandler={deleteUser}/>
        </div>
    );
};

export default Dashboard;
