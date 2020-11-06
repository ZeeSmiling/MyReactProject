import React from "react";
import {Button, Card, Radio} from 'antd';
import { SearchOutlined, DeleteOutlined, EditOutlined, CreditCardOutlined, DownloadOutlined } from '@ant-design/icons';

import './ui.less'

export default class Buttons extends React.Component {

    state = {
        loading: true,
        size: 'default' ,
    }

    handleCloseLoading=()=> {
        this.setState({
            loading: !this.state.loading,
        })
    }

    handleChange=(e: any)=>{
        this.setState({
            size: e.target.value,
        })
    }

    render() {
        return (
            <div style={{width: '100%'}}>
                <Card title="基础按钮" style={{marginBottom: 20}} className="wrap-card">
                    <Button type="primary">Imooc</Button>
                    <Button>imooc</Button>
                    <Button type="dashed">Imooc</Button>
                    <Button disabled>imooc</Button>
                </Card>
                <Card title="图形按钮" style={{marginBottom: 20}} className="wrap-card">
                    <Button icon={<CreditCardOutlined />}>创建</Button>
                    <Button icon={<EditOutlined />}>编辑</Button>
                    <Button icon={<DeleteOutlined />}>删除</Button>
                    <Button shape="circle" icon={<SearchOutlined />}>搜索</Button>
                    <Button type="primary" icon={<SearchOutlined />}>搜索</Button>
                    <Button type="primary" icon={<DownloadOutlined />}>下载</Button>
                </Card>
                <Card title="loading按钮" style={{marginBottom: 20}} className="wrap-card">
                    <Button type="primary" loading={this.state.loading}>确定</Button>
                    <Button type="primary" loading={this.state.loading}>编辑</Button>
                    <Button type="primary" icon={<DownloadOutlined />} onClick={this.handleCloseLoading}>下载</Button>
                </Card>
                <Card title="loading按钮" style={{marginBottom: 20}}>
                    <Button.Group>
                        <Button type="primary">确定</Button>
                        <Button type="primary">编辑</Button>
                    </Button.Group>
                </Card>
                <Card title="按钮尺寸" style={{marginBottom: 20}} className="wrap-card">
                    <Radio.Group value={this.state.size} onChange={this.handleChange}>
                        <Radio value="large">大</Radio>
                        <Radio value="default">中</Radio>
                        <Radio value="small">小</Radio>
                    </Radio.Group>
                </Card>
            </div>
        );
    }
}
