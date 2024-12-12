import { Outlet, Link } from "react-router-dom";

import Button from '../../components/button/button';



import "./menu.styles.css";

const Menu = () => {

    return(
        <div className='menu-container'>
            <h1 className="menu-title">PVP Game</h1>
            <Link to='/host'><Button style="primary" title="Belépés" /></Link>
            <Button style="primary" title="Súgó"></Button>
        </div>
    );
};

export default Menu;