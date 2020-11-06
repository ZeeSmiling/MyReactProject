import React from "react";

interface IProps {
    name: number, // 父组件传递的数值
}



export default class Child extends React.Component<IProps>{

    constructor(props: IProps) {
        super(props);
        this.setState({
        });
    }

    render() {
        return <div>
            <p>Child页面</p>
            <p>{this.props.name}</p>
        </div>
    }
}
