import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Header.module.css"

function Header() {
    return (

        <div className={s.item}>
            <div>
                <NavLink to="/pre-junior" activeClassName={s.activeLink}>Домашки</NavLink>
            </div>
            <div>
                <NavLink to="/Jun" activeClassName={s.activeLink}>Джун</NavLink>
            </div>
            <div>
                <NavLink to="/JunPlus" activeClassName={s.activeLink}>Джун ПЛЮС</NavLink>
            </div>
        </div>


    );
}

export default Header;
