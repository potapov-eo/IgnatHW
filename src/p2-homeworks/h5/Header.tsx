import React from "react";
import {BrowserRouter, NavLink} from "react-router-dom";

function Header() {
    return (

        <div>
            <div>
            <NavLink to={"/PRE_JUNIOR"}>// add PRE_JUNIOR</NavLink>
            </div>
            <NavLink to={"/PreJunior"}>// add PreJunior</NavLink>
        </div>

    );
}

export default Header;
