import React from "react";
import PreJunior from "./pages/PreJunior";
import {Route, Redirect, Switch, RedirectProps, BrowserRouter} from "react-router-dom";
import Error404 from "./pages/Error404";
import PRE_JUNIOR from "./pages/PRE_JUNIOR";

export const PATH = {
    PRE_JUNIOR: "/pre-junior",
    /*  PreJunior: "PRE_JUNIOR/pre-junior"*/
    // add paths
}

function Routes() {
    return (

        <div>
            {/* Switch выбирает первый подходящий роут*/}
            <Switch>

                {/*в начале мы попадаем на страницу "/" и переходим сразу на страницу PRE_JUNIOR
            exact нужен чтоб указать полное совподение (что после "/" ничего не будет)*/}

                <Route path={"/"} exact render={() => <Redirect to="PRE_JUNIOR"/>}/>
                <Route path="/PreJunior" component={PreJunior}/>
                <Route path="/PRE_JUNIOR" component={PRE_JUNIOR}/>


                // add routes

                {/* у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route render={() => <Error404/>}/>

            </Switch>
            {/*<Route path={"/PRE_JUNIOR"} component={PRE_JUNIOR}/> //proba*/}
        </div>

    );
}

export default Routes;
