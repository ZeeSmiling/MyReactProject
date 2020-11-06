import React from 'react';
import {Card, Table, Button, Modal} from "antd";
import axios from 'axios';
import httputils from './../../utils/http/axois';
import paginationutil from './../../utils/utils/utils';
import {TableRowSelection} from "antd/es/table/interface";
import {TablePaginationConfig} from "antd/lib/table/interface";

export default class Basic extends React.Component {

    /**
     * 初始化测试数据
     */
    staticData = [{
        "key": 0,
        "id": 1,
        "username": "魏伟",
        "sex": 2,
        "state": 4,
        "interest": 7,
        "birthday": "2020-05-03",
        "address": "北京市海淀区奥林匹克公园",
        "time": "09:00:00"
    }, {
        "key": 0,
        "id": 2,
        "username": "万强",
        "sex": 2,
        "state": 2,
        "interest": 2,
        "birthday": "2020-05-03",
        "address": "北京市海淀区奥林匹克公园",
        "time": "09:00:00"
    },];

    /**
     * 动态获取mock数据（未封装的请求方式）
     */
    request = () => {
        let baseUrl = 'https://www.easy-mock.com/mock/5f4efbb77e1a7f3146e31852/mockApi';
        axios.get(baseUrl + '/table/list').then((res) => {
            if (res.status === 200) {
                this.setState({
                    dynamicDataSource: res.data.result,
                });
            }
        })
    }

    /**
     * 动态获取mock数据（封装的请求方式）
     */
    request_axios_normal = () => {
        httputils.ajax({
            url: '/table/list',
            data: {
                param: {
                    page: 1,
                },
                isShowLoading: false,
            }
        }).then((res: any) => {
            if (res.code === 0) {
                res.result.forEach((item: any, index: number) => {
                    item.key = index;
                })
                this.setState({
                    dynamicDataSource: res.result,
                })
            }
        });
    }

    /**
     * 动态获取mock数据（封装的请求方式，返回包含分页信息的数据）
     */
    request_axios_pagination = () => {
        httputils.ajax({
            url: '/table/pagelist',
            data: {
                param: {
                    page: 1,
                },
                isShowLoading: false,
            }
        }).then((res: any) => {
            if (res.code === 0) {
                console.log('res');
                console.log(res);
                console.log('res.result:');
                console.log(res.result);
                let temp: any = [];
                res.result.list.forEach((item: any, index: number) => {
                    item.key = index;
                    temp.push(item);
                })
                console.log('temp:');
                console.log(temp);
                this.setState({
                    dynamicPaginationDataSource: temp,
                    pagiantion: paginationutil.pagination(res, (current: any) => {}),
                });
                console.log(this.state.dynamicPaginationDataSource);
                console.log(this.state.pagination);
            }
        });
    }

    /**
     *  获取数据总入口
     */
    getTableData() {
        // TODO 获取表格数据的每行数据添加唯一表示Key;项目所有表格都是如此，可以将此功能项目功能项目工程化;目前先添加实现的功能;
        this.staticData.forEach((item, index) => {
            item.key = index;
        });
        this.setState({
            dataSource: this.staticData,
        });
        this.request_axios_normal();
        this.request_axios_pagination();
    }

    onRowClick(record: any, index: number | undefined) {
        let selectRowkeys = [index];
        Modal.info({
            title: '信息',
            content: `用户名：${record.username}`
        });
        this.setState({
            selectRowkeys: selectRowkeys,
            selectedItem: record,
        });
        this.rowSelection.selectedRowKeys = selectRowkeys as number[];
        console.log('this.rowSelection.selectedRowKeys:' + this.rowSelection.selectedRowKeys);
    }

    rowSelection: TableRowSelection<any> = {
        type: 'radio',
        selectedRowKeys: [],
        onChange: (selectedRowKeys, selectedRows) => {
            this.rowSelection.selectedRowKeys = selectedRowKeys;
            console.log('selectedRowKeys:' + selectedRowKeys + '; selectedRows:' + selectedRows);
        }
    };
    rowCheckSelection: TableRowSelection<any> = {
        type: 'checkbox',
        selectedRowKeys: [],
        onChange: (selectedRowKeys, selectedRows) => {
            let ids = [];
            selectedRows.forEach((item) => {
                ids.push(item.id);
            });
            this.setState({
                selectedCheckedKeys: selectedRowKeys,
                selectRows: selectedRows,
            })
            this.rowCheckSelection.selectedRowKeys = selectedRowKeys;
        }
    }

    /**
     * state状态初始化
     */
    state = {
        // 数据源
        dataSource: [],
        dynamicDataSource: [],
        // 单选框
        selectedRowKeys: [],
        // 复选框
        selectedCheckedKeys: [],
        selectRows: [],
        // 分页数据数据源
        pagination: {} as false | TablePaginationConfig | undefined,
        dynamicPaginationDataSource: [],
    }

    render() {
        // 表格列信息
        const columns = [
            {
                title: 'id',
                dataIndex: 'id',
            }, {
                title: '用户名',
                dataIndex: 'username',
            }, {
                title: '性别',
                dataIndex: 'sex',
                render(sex: string | number) {
                    if (sex === '1' || sex === 1) {
                        return '男';
                    } else {
                        return '女';
                    }
                }
            }, {
                title: '状态',
                dataIndex: 'state',
                render(state: number) {
                    let config = new Map<number, string>();
                    config.set(1, '智慧张程');
                    config.set(2, '帅气张程');
                    config.set(3, '健康张程');
                    config.set(4, '富有张程');
                    config.set(5, '权力张程');
                    return config.get(state);
                }
            }, {
                title: '爱好',
                dataIndex: 'interest',
            }, {
                title: '生日',
                dataIndex: 'birthday',
            }, {
                title: '地址',
                dataIndex: 'address',
            }, {
                title: '时间',
                dataIndex: 'time',
            }
        ];

        return (
            <div style={{width: '100%'}}>
                <Card title="基础表格">
                    <Table bordered
                           columns={columns}
                           dataSource={this.state.dataSource}>
                    </Table>
                </Card>
                <Card title="动态数据渲染表格">
                    <Table bordered
                           columns={columns}
                           dataSource={this.state.dynamicDataSource}>
                    </Table>
                </Card>
                <Card title="单选—动态数据渲染表格">
                    <Table bordered
                           rowSelection={this.rowSelection}
                           onRow={(record: any, index: number | undefined) => {
                               return {
                                   onClick: event => {
                                       this.onRowClick(record, index);
                                   },
                               }
                           }}
                           columns={columns}
                           dataSource={this.state.dataSource}>
                    </Table>
                </Card>
                <Card title="复选框—动态数据渲染表格">
                    <Table bordered
                           rowSelection={this.rowCheckSelection}
                           columns={columns}
                           dataSource={this.state.dataSource}>
                    </Table>
                </Card>
                <Card title="Mock动态数据渲染表格—分页">
                    <Table bordered
                           columns={columns}
                           dataSource={this.state.dynamicPaginationDataSource}
                           pagination={{showTotal: ()=>`共5页`, defaultPageSize: 5}}>
                           {/*pagination={this.state.pagination}>*/}
                    </Table>
                </Card>
                <Button type="primary" onClick={this.getTableData.bind(this)}>获取表格数据</Button>
            </div>
        )
    }
}
