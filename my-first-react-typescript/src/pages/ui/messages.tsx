import React from "react";
import {Button, Card, message} from 'antd';

import './ui.less'



export default class Messages extends React.Component {

    handleShowMessage = (type: string)=>{
        switch(type){
            case 'success':
                message.success("恭喜你，找到了身份证！");
                break;
            case 'info':
                message.info("恭喜你，找到了身份证！");
                break;
            case 'warning':
                message.warning("恭喜你，找到了身份证！");
                break;
            case 'error':
                message.error("恭喜你，找到了身份证！");
                break;
            case 'loading':
                message.loading("恭喜你，找到了身份证！");
                break;
        }
    }

    render() {
        return (
            <div style={{width: '100%'}}>
                <Card title="全局提示Message">
                    <Button style={{marginRight: 10}} type="primary" size="large" onClick={()=>this.handleShowMessage('success')} >Success</Button>
                    <Button style={{marginRight: 10}} size="large" onClick={()=>this.handleShowMessage('info')}>Info</Button>
                    <Button style={{marginRight: 10}} type="dashed" size="large" onClick={()=>this.handleShowMessage('warning')}>Warn</Button>
                    <Button style={{marginRight: 10}} type="link"size="large" onClick={()=>this.handleShowMessage('error')}>Error</Button>
                    <Button style={{marginRight: 10}} size="large" onClick={()=>this.handleShowMessage('loading')}>Load</Button>
                </Card>
            </div>
        );
    }
}