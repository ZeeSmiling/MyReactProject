import React from "react";
import {Button, Card, Modal} from 'antd';

import './ui.less'

export default class Modals extends React.Component {

    state = {
        showModel1: false,
        showModel2: false,
        showModel3: false,
        showModel4: false,
    }

    handleOpen = (type: string) => {
        this.setState({
            [type]: true,
        })
    }

    handleConfirm = (type: string) => {
        // 编程小技巧
        // var a = {
        //    confirm: function(){};
        // }
        //
        // a.confirm 与 a[confirm]等价
        switch(type){
            case 'info':
                Modal.info({
                    title: '确认?',
                    content: '你确定你学会了React了吗?',
                    onOk(){
                        console.log('OK');
                    },
                    onCancel(){
                        console.log('Cancel');
                    }
                })
        }
    }

    render() {
        return (
            <div style={{width: '100%'}}>
                <Card title="基础模态框" style={{marginBottom: 20}} className="wrap-card">
                    <Button type="primary" onClick={() => this.handleOpen('showModel1')}>Open</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModel2')}>自定义页脚</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModel3')}>顶部20px弹框</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModel4')}>水平垂直居中</Button>
                </Card>
                <Modal title="React" visible={this.state.showModel1} onCancel={() => {
                    this.setState({
                        showModel1: false
                    })
                }}><p>张程是超级大帅哥，我哈哈哈哈哈哈哈！</p></Modal>
                <Modal title="React" visible={this.state.showModel2} okText="来吧宝贝" cancelText="滚吧贱人" onCancel={() => {
                           this.setState({
                               showModel2: false
                           })
                       }}><p>张程是安静的美男子，我哈哈哈哈哈哈哈！</p></Modal>
                <Modal title="React" visible={this.state.showModel3} okText="来吧宝贝" cancelText="滚吧贱人" onCancel={() => {
                           this.setState({
                               showModel3: false
                           })
                       }} style={{top: 20}}>
                    <p>张程是安静的美男子，我哈哈哈哈哈哈哈！</p>
                </Modal>
                <Modal title="React" visible={this.state.showModel4} okText="宝贝" cancelText="贱人" wrapClassName="vertical-center-modal" onCancel={() => {
                           this.setState({
                               showModel4: false
                           })
                       }}>
                    <p>张程是安静的美男子，我哈哈哈哈哈哈哈！</p>
                </Modal>
                <Card title="信息确认框" style={{marginBottom: 20}}  className="wrap-card">
                    <Button type="primary" onClick={() => this.handleConfirm('confirm')}>Open</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('info')}>自定义页脚</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('success')}>顶部20px弹框</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('warning')}>水平垂直居中</Button>
                </Card>
            </div>
        )
    }
}