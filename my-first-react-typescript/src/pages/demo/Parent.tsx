
import Child from "./Child";
import {Button} from "antd";
import "./ParentStyle.less"
import React from "react";

interface IState{
    count: number
}

interface IProps {
    name: string,
    age: number,
}

export default class Parent extends React.Component<IProps,IState>{

    constructor(props: IProps) {
        super(props);
        this.state ={
            count: 0
        };
    }

    handleClick(){
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        return <div className="content">
            <p>Parent页面</p>
            <p>{this.state.count}</p>
            <button onClick={()=>this.handleClick()}>点击一下</button>
            <Button onClick={()=>this.handleClick()}>AntD点击一下</Button>
            <Child name={this.state.count}>
            </Child>
        </div>
    }
}
