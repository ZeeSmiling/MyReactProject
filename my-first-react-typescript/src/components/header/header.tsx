import React from "react";
import "./header.less";
import {Row, Col} from "antd";
import Utils from "../../utils/utils";

interface HeaderDefaultProps {
    menuType?: string,
}

export class Header extends React.Component<HeaderDefaultProps> {

    state = {
        username: '张程',
        date: '',
    };

    componentDidMount(): void {
        setInterval(() => {
            let systemTime = Utils.formateDate(new Date());
            this.setState({
                date: systemTime,
            })
        });
    }

    render() {
        const menuType = this.props.menuType;
        return (
            <div className="header">
                <Row className="header-top">
                    {
                        menuType ? <Col className="logo" span={6}>
                            <img src="/assets/logo-ant.svg" alt=""/>
                            <span>IMooc通用管理系统</span>
                        </Col> : ''
                    }
                    <Col span={menuType ? 18 : 24}>
                        <span>欢迎，莱德绅华府—{this.state.username}</span>
                        <a href="www.baidu.com">退出</a>
                    </Col>
                </Row>
                {
                    menuType ? '' : <Row className="breadcrumb">
                        <Col className="breadcrumb-title" span={4}>首页</Col>
                        <Col className="weather" span={20}>
                            <span className="date">{this.state.date}</span>
                            <span className="weather-detail">晴转多云</span>
                        </Col>
                    </Row>
                }
            </div>
        );
    }
}
