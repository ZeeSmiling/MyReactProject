import React from "react";
import {Card} from "antd";
import './order.less'
import httpUtils from '../../utils/http/axois'
import {Interface} from "readline";
import {win32} from "path";

interface OrderDetailInfo {
    "status": number,
    "order_sn": string,
    "bike_sn": string,
    "mode": number,
    "start_location": string,
    "end_location": string,
    "city_id": number,
    "mobile": string,
    "user_name": string,
    "distance": number,
    "bike_gps": string,
    "start_time": number,
    "end_time": number,
    "total_time": number,
    "position_list": PositionList[],
    "area": Area[],
    "area_list": [],
    "npl_list": NplList[],

}

interface PositionList {
    "lon": number,
    "lat": number,
}

interface Area {
    "lon": string,
    "lat": string,
    "ts": any
}

interface NplList {
    "id": number,
    "name": string,
    "city_id": number,
    "type": number,
    "status": number,
    "map_point": string,
    "map_point_array": string[],
    "map_status": number,
    "creator_name": string,
    "create_time": number
}

export default class OrderDetail extends React.Component {

    state = {
        orderInfo: {} as OrderDetailInfo
    }

    constructor(props: any) {
        super(props);
        const orderId = props.match.params?.orderId;
        if(orderId) {
            this.getDetailInfo(orderId);
        }
    }

    getDetailInfo = (orderId: number | string) => {
        console.log('获取订单详情数据：');
        httpUtils.ajax({
            url: 'order/detail',
            data: {
                param: {
                    orderId: orderId
                }
            }
        }).then((res: any) => {
            console.log('res');
            console.log(res);
            if(res.code === 0) {
                this.setState({
                    orderInfo: {...res.result}
                })
            }
            console.log('state.orderInfo：');
            console.log(this.state.orderInfo);
        });
    }


    renderMap = ()=> {
        const map = new BMap.Map('orderDetailMap');
    }


    render() {
        const info = this.state.orderInfo;

        return (
            <div style={{width: '100%'}}>
                <Card bordered={true}>
                    <div className="OrderDetailMap">地图</div>
                    <div className="detail-items">
                        <div className="item-title">基础信息</div>
                        <ul className="detail-form">
                            <li>
                                <div className="detail-form-left">用车模式</div>
                                <div className="detail-form-content">{info.mode === 1? '服务区' : '停车点'}</div>
                            </li>
                            <li>
                                <div className="detail-form-left">订单编号</div>
                                <div className="detail-form-content">{info.order_sn}</div>
                            </li>
                            <li>
                                <div className="detail-form-left">车辆编号</div>
                                <div className="detail-form-content">{info.bike_sn}</div>
                            </li>
                            <li>
                                <div className="detail-form-left">用户姓名</div>
                                <div className="detail-form-content">{info.user_name}</div>
                            </li>
                            <li>
                                <div className="detail-form-left">手机号码</div>
                                <div className="detail-form-content">{info.mobile}</div>
                            </li>
                        </ul>

                        <div className="item-title">行车轨迹</div>
                        <ul className="detail-form">
                            <li>
                                <div className="detail-form-left">行程起点</div>
                                <div className="detail-form-content">{info.start_location}</div>
                            </li>
                            <li>
                                <div className="detail-form-left">行程终点</div>
                                <div className="detail-form-content">{info.end_location}</div>
                            </li>
                            <li>
                                <div className="detail-form-left">行驶里程</div>
                                <div className="detail-form-content">{info.distance/1000}公里</div>
                            </li>
                        </ul>
                    </div>
                </Card>
            </div>
        );
    }
}
