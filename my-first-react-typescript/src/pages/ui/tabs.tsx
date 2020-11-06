import React from "react";
import {Card, message, Tabs} from 'antd';

import './ui.less'
import {AccountBookFilled, AndroidOutlined, AppleOutlined} from '@ant-design/icons';

const {TabPane} = Tabs;

const initialPanes = [
    { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
    { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
    { title: 'Tab 3', content: 'Content of Tab 3', key: '3', closable: false },
];

export declare type Action = 'add' | 'remove';

export default class Tab extends React.Component {

    handleCallback = (key: string) => {
        message.info("Hi,您选择了页签" + key);
    }

    newTabIndex = 0;

    state = {
        activeKey: initialPanes[0].key,
        panes: initialPanes,
    };

    // onChange = (activeKey: string) => {
    //     this.setState({ activeKey });
    // };

    // onEdit = (targetKey: string, action: Action) => {
    //     this[action](targetKey);
    // };

    add = () => {
        const { panes } = this.state;
        const activeKey = `newTab${this.newTabIndex++}`;
        const newPanes = [...panes];
        newPanes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
        this.setState({
            panes: newPanes,
            activeKey,
        });
    };

    remove = (targetKey: string) => {
        const { panes, activeKey } = this.state;
        let newActiveKey = activeKey;
        let lastIndex = 0;
        panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const newPanes = panes.filter(pane => pane.key !== targetKey);
        if (newPanes.length && newActiveKey === targetKey && lastIndex!=null) {
            if (lastIndex >= 0) {
                newActiveKey = newPanes[lastIndex].key;
            } else {
                newActiveKey = newPanes[0].key;
            }
        }
        this.setState({
            panes: newPanes,
            activeKey: newActiveKey,
        });
    };

    render() {
        // const { panes, activeKey } = this.state;
        return (
            <div style={{width: '100%'}}>
                <Card title="Tab页签" className="card-wrap" style={{marginBottom: 20}}>
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        <TabPane tab="Tab1" key="1">Content of Tab Pane 1</TabPane>
                        <TabPane tab="Tab2" key="2">Content of Tab Pane 2</TabPane>
                        <TabPane tab="Tab3" key="3">Content of Tab Pane 3</TabPane>
                    </Tabs>
                </Card>
                <Card title="带图标Tab页签" className="card-wrap" style={{marginBottom: 20}}>
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        <TabPane tab={<span><AppleOutlined/>Tab 1</span>} key="1">Content of Tab Pane 1</TabPane>
                        <TabPane tab={<span><AndroidOutlined/>Tab 2</span>} key="2">Content of Tab Pane 2</TabPane>
                        <TabPane tab={<span><AccountBookFilled/>Tab 3</span>} key="3">Content of Tab Pane 3</TabPane>
                    </Tabs>
                </Card>
                {/*<Card title="Tab页签" className="card-wrap">*/}
                {/*    <Tabs onChange={this.onChange}*/}
                {/*          activeKey={activeKey}*/}
                {/*          onEdit={this.onEdit}*/}
                {/*          type="editable-card">*/}
                {/*        {*/}
                {/*            panes.map((pane) => {*/}
                {/*                return <TabPane tab={pane.title} key={pane.key} closable={pane.closable}> {pane.content} </TabPane>*/}
                {/*            })*/}
                {/*        }*/}
                {/*    </Tabs>*/}
                {/*</Card>*/}
            </div>
        );
    }
}