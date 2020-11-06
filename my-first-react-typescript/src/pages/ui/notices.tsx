import React from "react";
import {Button, Card, notification} from 'antd';

import './ui.less'

export declare type NotificationPlacement = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';

export default class Notices extends React.Component {

    openNotification = (type: string, direction: NotificationPlacement) => {

        if(direction){
            notification.config({
                placement: direction,
            })
        }

        switch(type){
            case 'success':
                notification.success({
                    message: '发工资了',
                    description: '上个月考勤22天，迟到12天，看你张程长得帅，不要扣工资'
                })
        }
    }

    render() {
        return (
            <div style={{width: '100%'}}>
                <Card title="通知提醒框" style={{marginBottom: 20}}>
                    <Button style={{marginRight: 10}} type="primary" onClick={()=>this.openNotification('success','topLeft')}>Success</Button>
                    <Button style={{marginRight: 10}} type="primary" onClick={()=>this.openNotification('info','topRight')}>Info</Button>
                    <Button style={{marginRight: 10}} type="primary" onClick={()=>this.openNotification('warning','bottomLeft')}>Warning</Button>
                    <Button style={{marginRight: 10}} type="primary" onClick={()=>this.openNotification('error','bottomRight')}>Error</Button>
                </Card>

                <Card title="通知提醒框包含方向" style={{marginBottom: 20}}>
                    <Button style={{marginRight: 10}} type="primary" onClick={()=>this.openNotification('success','topLeft')}>Success</Button>
                    <Button style={{marginRight: 10}} type="primary" onClick={()=>this.openNotification('info', 'topRight')}>Info</Button>
                    <Button style={{marginRight: 10}} type="primary" onClick={()=>this.openNotification('warning', 'bottomLeft')}>Warning</Button>
                    <Button style={{marginRight: 10}} type="primary" onClick={()=>this.openNotification('error', 'bottomRight')}>Error</Button>
                </Card>
            </div>
        );
    }
}