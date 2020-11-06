import React from "react";

import './css-demo.less'


export default class CSSDemo extends React.Component {

    main = {
        "display": "flex",
        "flex-flow": "row wrap",
        "justify-content": "space-around",
        // "flex-wrap": "wrap",
        // "justify-content": "space-between",
    }

    render() {
        return(
            <div className="css-demo" style={this.main}>
                <div style={{width: '10%', height: 50}} className="demo1">demo1</div>
                <div style={{width: '10%', height: 50}} className="demo2">demo2</div>
                <div style={{width: '10%', height: 50}} className="demo3">demo3</div>
                <div style={{width: '10%', height: 50}} className="demo4">demo4</div>
            </div>
        );
    }
}

