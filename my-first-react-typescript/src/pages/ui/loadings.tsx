import React from "react";
import {Card, Spin, Alert} from 'antd';

import './ui.less'

export default class Loadings extends React.Component {
    render() {
        // const icon = <Icon type="loading" style={{fontSize: 24}}/>;
        return (
            <div style={{width: '100%'}} className="wrap-card">
                <Card title="Spin用法" style={{marginBottom: 20}}>
                    <Spin style={{marginRight: '20px'}} size="small"/>
                    <Spin style={{marginRight: '20px'}}/>
                    <Spin size="large" style={{marginRight: '20px'}}/>
                    {/*<Spin indicator={icon}/>存在疑问*/}
                </Card>

                <Card title="内容遮罩" className="wrap-card">
                    <Alert message="Reac"
                           description="欢迎来到张程家中我要开始图谋不轨"
                           type="info">
                    </Alert>
                    <Spin tip="加载中...">
                        <Alert message="Reac"
                               description="欢迎来到张程家中我要开始图谋不轨"
                               type="warning">
                        </Alert>
                    </Spin>
                </Card>
            </div>
        );
    }
}