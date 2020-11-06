import React from "react";
import {Form, Select} from "antd";

const FormItem = Form.Item;
const Option = Select.Option;

export default class OpenCityForm extends React.Component {

    render() {

        const formItemLayout = {
            labelCol: {   //label标签占据列数
                span: 5
            },
            wrapperCol: { //Form表单占据列数
                span: 19
            }
        }

        return (<div>
            <Form layout="horizontal" initialValues={{'city': "", "servicemode": "1", "usecarmode": "1"}}>
                <FormItem name="city" label="选择城市" {...formItemLayout}>
                    <Select style={{width: 100}}>
                        <Option value="">全部</Option>
                        <Option value="1">北京市</Option>
                        <Option value="2">天津市</Option>
                    </Select>
                </FormItem>
                <FormItem name="servicemode" label="营运模式" {...formItemLayout}>
                    <Select style={{width: 100}}>
                        <Option value="1">自营</Option>
                        <Option value="2">加盟</Option>
                    </Select>
                </FormItem>
                <FormItem name="usecarmode" label="用车模式" {...formItemLayout}>
                    <Select style={{width: 100}}>
                        <Option value="1">指定停车点</Option>
                        <Option value="2">禁停区</Option>
                    </Select>
                </FormItem>
            </Form>
        </div>);
    }
}
