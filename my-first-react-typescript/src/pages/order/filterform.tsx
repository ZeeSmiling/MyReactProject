import React from "react";
import {Form, Select, Button, TimePicker} from "antd";

const FormItem = Form.Item;
const {Option} = Select;
const { RangePicker } = TimePicker;

export default class FilterForm extends React.Component {

    render() {
        return (
            <div style={{width: '100%'}}>
                <Form layout="inline">
                    <FormItem name="city" label="城市">
                        <Select style={{width: 120}} placeholder="Please select a country">
                            <Option value="0">全部</Option>
                            <Option value="1">北京市</Option>
                            <Option value="2">天津市</Option>
                            <Option value="3">深圳市</Option>
                        </Select>
                    </FormItem>
                    <FormItem name="starttime">
                        <TimePicker/>
                    </FormItem>
                    <FormItem>
                        <span>~</span>
                    </FormItem>
                    <FormItem name="endtime">
                        <TimePicker/>
                    </FormItem>
                    <FormItem name="ordersituation" label="订单情况">
                        <Select style={{width: 80}} placeholder="全部">
                            <Option value="">全部</Option>
                            <Option value="1">自营</Option>
                            <Option value="2">加盟</Option>
                        </Select>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" style={{margin:'0 20px'}}>查询</Button>
                        <Button>重置</Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}