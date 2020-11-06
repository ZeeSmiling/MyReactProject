import React from "react";
import FilterForm from "./filterform";
import {Card, Button, Table} from "antd";
import httputils from "../../utils/http/axois";


export interface City_Admins {
    user_name: string,
    user_id: string,
}

export default class City extends React.Component {

    state = {
        list: [], // 表格数据源
        isShowOpenCity: false //默认隐藏弹框
    }

    getSoureceData() {
        console.log("开始获取表格数据");
        httputils.ajax({
            url: '/city/manage',
            data: {
                param: {
                    page: 1,
                },
                isShowLoading: false,
            }
        }).then((res: any) => {
            if (res.code === 0) {
                console.log(res);
                // 为每一条表格数据添加唯一标识符key
                res.list.item_list.forEach((item: any, index: number) => {
                    item.key = index;
                });
                console.log(res.list.item_list);
                this.setState({
                    list: res.list.item_list,
                });
            }
        });
    }

    render() {
        const columns = [
            {
                title: '城市ID',
                dataIndex: 'id'
            }, {
                title: '城市名称',
                dataIndex: 'name'
            }, {
                title: '用车模式',
                dataIndex: 'mode',
                render: (mode: number) => {
                    switch (mode){
                        case 0:
                            return '全部';
                        case 1:
                            return '指定停车点模式';
                        case 2:
                            return '禁停区模式';
                        default:
                            return '';
                    }
                }
            }, {
                title: '营运模式',
                dataIndex: 'op_mode',
                render: (op_mode: number) => {
                    switch (op_mode){
                        case 0:
                            return '全部';
                        case 1:
                            return '自营';
                        case 2:
                            return '加盟';
                        default:
                            return '';
                    }
                }
            }, {
                title: '授权加盟商',
                dataIndex: 'franchisee_name'
            }, {
                title: '城市管理员',
                dataIndex: 'city_admins',
                render: (city_admins: City_Admins[]) => {
                    let temp_username = [] as string[];
                    let city_admins_string = '';
                    city_admins.forEach((item) => {
                        temp_username.push(item.user_name);
                    });
                    city_admins_string = temp_username.join(",").toString();
                    return city_admins_string;
                }
            }, {
                title: '城市开通时间',
                dataIndex: 'open_time'
            }, {
                title: '操作时间',
                dataIndex: 'update_time',
            }, {
                title: '操作人',
                dataIndex: 'sys_user_name'
            },
        ]

        return (
            <div style={{width: '100%'}}>
                <Card>
                    <FilterForm/>
                </Card>
                <Card style={{marginTop: 10}}>
                    <Button type="primary">开通城市</Button>
                    <Button type="primary" onClick={this.getSoureceData.bind(this)}>获取表格数据</Button>
                    <Table bordered columns={columns}
                           dataSource={this.state.list}/>
                </Card>
            </div>
        );
    };
}
/*
  <Button type="primary" onClick={this.handleOpenCity}>开通城市</Button>
  <Card>
    <OpenCityForm/>
  </Card>
*/
