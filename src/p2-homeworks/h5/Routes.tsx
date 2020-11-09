import React from "react";
import {Switch, Redirect, Route} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import Jun from "./pages/Jun";
import JunPlus from "./pages/JunPlus";

export const PATH = {
    PRE_JUNIOR: "/pre-junior",
    JUN: "/Jun",
    JUN_PLUS: "/JunPlus"
    // add paths
}

function Routes() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            <Switch>
                {/*в начале мы попадаем на страницу "/" и переходим сразу на страницу PRE_JUNIOR*/}
                {/*exact нужен чтоб указать полное совподение (что после "/" ничего не будет)*/}
                <Route path={"/"} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>

                <Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>
                // add routes
                <Route path={PATH.JUN} render={() => <Jun/>}/>
                <Route path={PATH.JUN_PLUS} render={() => <JunPlus/>}/>

                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route render={() => <Error404/>}/>

            </Switch>
        </div>
    );
}

export default Routes;
