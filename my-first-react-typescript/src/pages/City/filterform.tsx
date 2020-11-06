import React from "react";
import {Form, Select, Button} from "antd";

const FormItem = Form.Item;
const {Option} = Select;

export default class FilterForm extends React.Component {

    render() {

        const fromItemLayout = {
            labelCol: {
                xs: 24,
                sm: 3,
            },
            wrapperCol: {
                xs: 24,
                sm: 15,
            }
        }

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
                    <FormItem name="usecarmode" label="用车模式">
                        <Select style={{width: 180}} placeholder="全部">
                            <Option value="">全部</Option>
                            <Option value="1">指定停车点模式</Option>
                            <Option value="2">禁停区模式</Option>
                        </Select>
                    </FormItem>
                    <FormItem name="servicemode" label="营运模式">
                        <Select style={{width: 80}} placeholder="全部">
                            <Option value="">全部</Option>
                            <Option value="1">自营</Option>
                            <Option value="2">加盟</Option>
                        </Select>
                    </FormItem>
                    <FormItem name="franchiseeauthorizestatus" label="加盟商授权状态">
                        <Select style={{width: 180}} placeholder="全部">
                            <Option value="">全部</Option>
                            <Option value="1">已授权</Option>
                            <Option value="2">未授权</Option>
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