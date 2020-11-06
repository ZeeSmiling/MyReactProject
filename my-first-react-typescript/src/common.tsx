import React from "react";
import {Row} from "antd";
import {Header} from "./components/header/header";
import "./components/header/header.less";

export default class Common extends React.Component {
    // Common组件嵌套加载详情页面
    render() {
        return (
            <div>
                <Row className="simple-page">
                    <Header menuType="second"/>
                </Row>
                <Row className="content">
                    {this.props.children}
                </Row>
            </div>
        );
    }
}