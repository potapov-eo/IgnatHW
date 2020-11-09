import React from "react";
import s from "./Error404.module.css"

function Error404() {
    return (
        <div className={s.error}>
            <div>404</div>
            <img src="https://programmist1s.ru/wp-content/uploads/2013/09/Pole-ob'ekta-nedostupno-dlya-zapisi-1S.jpg"
                 alt="альтернативный текст"/>
            <div>Page not found!</div>
        </div>
    );
}

export default Error404;
