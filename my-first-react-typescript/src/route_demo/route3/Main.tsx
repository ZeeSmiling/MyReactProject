import React from "react";
import {Link} from "react-router-dom";

export default class Main extends React.Component {
    render() {
        return (
            <div>
                This is Main.
                <br/>
                <Link to="/main/child">嵌套路由1</Link>
                <br/>
                <Link to="/main/1234">嵌套路由2</Link>
                <hr/>
                {this.props.children}
            </div>
        )
    };
}

