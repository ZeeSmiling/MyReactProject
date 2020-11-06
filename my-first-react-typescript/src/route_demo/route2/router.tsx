import React from "react";
import {HashRouter as Router, Route} from "react-router-dom";

import Main from "./Main";
import Home from "./Home";
import Topics from "./topic";
import About from "./about";
import MainChild from "./MainChild";

export default class IRouter extends React.Component {
    render() {
        return (
            <Router>
                <Home>
                    <Route path="/main" render={() => <Main>
                        <Route path="/main/child" component={MainChild}/>
                    </Main>}/>
                    <Route path="/about" component={About}/>
                    <Route path="/topic" component={Topics}/>
                </Home>
            </Router>
        );
    }
}
