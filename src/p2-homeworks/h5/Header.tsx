import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Header.module.css"
import {PATH} from "./Routes";

function Header() {
    return (

        <div className={s.item}>
            <div>
                <NavLink to={PATH.PRE_JUNIOR} activeClassName={s.activeLink}>Домашки</NavLink>
            </div>
            <div>
                <NavLink to={PATH.JUN} activeClassName={s.activeLink}>Джун</NavLink>
            </div>
            <div>
                <NavLink to={PATH.JUN_PLUS} activeClassName={s.activeLink}>Джун ПЛЮС</NavLink>
            </div>
        </div>


    );
}

export default Header;
