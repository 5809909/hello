import React from "react";
import {Route, Switch} from "react-router-dom";
import {Home} from "./pages/home";
import {Film} from "./pages/film";
import {Search} from "./pages/search";


export const App = () => {

    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/search' component={Search}/>
            <Route path='/film' component={Film}/>
            {/*<Route path='*' component={NotFound}/>*/}
        </Switch>)
};



