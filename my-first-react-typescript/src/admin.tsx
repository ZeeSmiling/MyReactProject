import React from "react";
import {Row, Col} from "antd";
import {Header} from "./components/header/header";
import {Footer} from "./components/footer/footer";
import {NavLeft} from "./components/nav-left/nav-left";
import "./style/admin.less"

export default class Admin extends React.Component {
    render() {
        return (
            <Row className="admin">
                {/* 侧边菜单组件 */}
                <Col span="3" className="admin-left">
                    <NavLeft/>
                </Col>
                <Col span="21" className="admin-right">
                    <Header/>
                    <Row className="admin-right-content">
                        {this.props.children}
                    </Row>
                    <Footer/>
                </Col>
            </Row>
        );
    }
}
