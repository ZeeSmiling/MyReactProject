import React from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";

import Main from "./Main";
import Home from "./Home";
import Topics from "./topic";
import About from "./about";
import Info from "./Info";
import NoMatch from "./NoMatch";

export default class IRouter extends React.Component {
    render() {
        return (
            <Router>
                <Home>
                    <Switch>
                        <Route path="/main" render={() =>
                            <Main><Route path="/main/:id" component={Info}/></Main>}/>
                        <Route path="/about" component={About}/>
                        <Route path="/topic" component={Topics}/>
                        <Route component={NoMatch}/>
                    </Switch>
                </Home>
            </Router>
        );
    }
}
