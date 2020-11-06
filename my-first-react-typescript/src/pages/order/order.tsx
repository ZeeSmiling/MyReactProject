import React from 'react';
import {Button, Card, message, Modal, Table} from 'antd';
import FilterForm from "./filterform";
import httputils from "../../utils/http/axois";
import utils from "../../utils/utils/utils";
import {PaginationProps} from "antd/es/pagination";
import {Key, TableRowSelection} from "antd/lib/table/interface";
import axois from "../../utils/http/axois";

/*{
   "code": 0,
   "msg": "数据获取异常",
   "result": {
       "page|1-9": 1,
       "page_size": 10,
       "total_count": 85,
       "page_count": 9,
       "item_list|10": [{
           "id": 2959165,
           "order_sn": /T180[0-9]{6}/,
           "bike_sn": "800116090",
           "user_id": 908352,
           "user_name": "@cname",
           "mobile": /1[0-9]{10}/,
           "distance": 2000,
           "total_time": 4000,
           "status|1-2": 1,
           "start_time": "@datetime",
           "end_time": "@datetime",
           "total_fee": 1000,
           "user_pay": 300 }]
      }
   }*/

interface OrderListEntity {
    "id": number;
    "order_sn": number;
    "bike_sn": string,
    "user_id": number,
    "user_name": string,
    "mobile": number,
    "distance": number,
    "total_time": number,
    "status|1-2": number,
    "start_time": Date,
    "end_time": Date,
    "total_fee": number,
    "user_pay": number
}


export default class Order extends React.Component {

    state = {
        list: [], // 订单表格的数据结构
        pagiantion: {} as PaginationProps, // 分页的数据结构
        selectedItem: {} as OrderListEntity, // 单选每行的详细数据
        selectedRowKeys: [], // 单选框每行key值
        orderConfirmVisble: true
    }

    params = {
        page: 1
    }

    rowSelection: TableRowSelection<any> = {
        type: 'radio',
        selectedRowKeys: [] as Key[],
        onChange: (selectedRowKeys, selectedRows) => {
            this.rowSelection.selectedRowKeys = selectedRowKeys;
            this.setState({
                selectRowkeys: selectedRowKeys,
                selectedItem: selectedRows,
            });
            console.log('selectedRowKeys:' + selectedRowKeys + '; selectedRows:' + selectedRows);
        }
    }

    /**
     * 获取订单管理表格的数据源
     */
    requestList = () => {
        httputils.ajax({
            url: '/order/list',
            data: {
                params: {
                    page: this.params.page,
                },
                isShowLoading: false
            }
        }).then((res: any) => {
            // 返回的数据中code自定义，0表示正常返回数据
            if (res.code === 0) {
                console.log(res);
                // Array.map()会返回新的数组
                let list = res.result.item_list.map((item: any, index: number) => {
                    item.key = index;
                    return item;
                });
                console.log(res);
                this.setState({
                    list: list, // 修改表格数据源的变量
                    pagiantion: utils.pagination(res, this.onChangePagination.bind(this))
                });
            }
        });
    }

    /**
     * 结束订单获取数据
     */
    handleFinishOrder = () => {
        // TODO 由于视频存在问题无法确定具体业务是什么
        /*        let item = this.state.selectedItem;
        axois.ajax({
            url: 'order/finish_order',
            data: {
                params: {
                    orderId: item.id
                }
            }
        }).then((res: any) => {
            if (res.code === 0) {
                message.success('订单结束成功');
                this.setState({
                    orderConfirmVisble: false
                })
                this.requestList();
            }
        });*/
    }

    /**
     * 订单详情表格每行的点击事件触发
     * @param record
     * @param index
     */
    onRowClick(record: any, index: number | undefined) {
        let selectRowkeys = [index];
        Modal.info({
            title: '信息',
            content: `用户名：${record.user_name}`
        });
        this.setState({
            selectRowkeys: selectRowkeys,
            selectedItem: record,
        });
        this.rowSelection.selectedRowKeys = selectRowkeys as number[];
        console.log('[index]:' + this.rowSelection.selectedRowKeys);
        console.log('record:' + record);
    }

    openOrderDetailClick = () => {
        let item = this.state.selectedItem;
        if (!item) {
            Modal.info({
                title: '信息',
                content: '请选择一条订单信息'
            });
        }
        window.open(`/#/common/order/detail/${item.id}`, '_blank')
    }

    /**
     * 对应分页组件回调函数onChange()
     * @param page
     * @param pageSize
     */
    onChangePagination = (page: number, pageSize?: number) => {
        console.log('onChange回调函数，当前页数:');
        console.log('onChange回调函数:');
        console.log('Page: ', page);
        this.params.page = page;
        this.requestList();
    }

    render() {
        const columns = [
            {
                title: '订单编号',
                dataIndex: 'order_sn'
            }, {
                title: '车辆编号',
                dataIndex: 'bike_sn'
            }, {
                title: '用户名',
                dataIndex: 'user_name',
            }, {
                title: '手机号',
                dataIndex: 'mobile',
            }, {
                title: '里程',
                dataIndex: 'distance',
            }, {
                title: '行驶时长',
                dataIndex: 'total_time',
            }, {
                title: '状态',
                dataIndex: 'status'
            }, {
                title: '开始时间',
                dataIndex: 'start_time',
            }, {
                title: '结束时间',
                dataIndex: 'end_time'
            }, {
                title: '订单金额',
                dataIndex: 'total_fee'
            }, {
                title: '实付金额',
                dataIndex: 'user_pay'
            },
        ]

        return (
            <div style={{width: '100%'}}>
                <Card>
                    <FilterForm/>
                </Card>
                <Card>
                    <Button style={{marginRight: '2px'}} type='primary'
                            onClick={this.requestList.bind(this)}>获取数据</Button>
                    <Button style={{marginRight: '2px'}} type='primary'
                            onClick={this.openOrderDetailClick.bind(this)}>订单详情</Button>
                    <Button type='primary' onClick={this.handleFinishOrder.bind(this)}>结束订单</Button>
                </Card>
                <div className="content-wrap">
                    <Table bordered
                           columns={columns}
                           dataSource={this.state.list}
                           pagination={this.state.pagiantion}
                           rowSelection={this.rowSelection}
                           onRow={(record: any, index: number | undefined) => {
                               return {
                                   onClick: event => {
                                       this.onRowClick(record, index);
                                   },
                               }
                           }}/>
                </div>
            </div>
        );
    }
}
