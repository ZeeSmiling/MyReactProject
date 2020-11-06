import React from 'react';
import {
    Button,
    Card,
    Checkbox,
    Form,
    Input,
    Radio,
    InputNumber,
    Select,
    Switch,
    DatePicker,
    TimePicker,
    Upload,
} from 'antd';
import {UserOutlined, LockOutlined, LoadingOutlined, PlusOutlined} from '@ant-design/icons';
import {FormInstance} from "antd/es/form";
import moment from "moment";

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const dateFormat = "YYYY/MM/DD";
const TextArea = Input.TextArea;

export default class Register extends React.Component {

    formRef = React.createRef<FormInstance>();

    handleSubmit = () => {
        let userInfo = this.formRef.current!.getFieldsValue();
        console.log(userInfo);
        console.log(JSON.stringify(userInfo));
    }

    render() {

        const formItemLayout = {
            labelCol: {
                xs: 24,
                sm: 4,
            },
            wrapperCol: {
                xs: 24,
                sm: 12,
            },
        }

        const offSetLayout = {
            wrapperCol: {
                xs: 24,
                sm: {
                    span: 12,
                    offset: 4
                },
            },
        }

        return (
            <div style={{width: '100%'}}>
                <Card title="注册表单">
                    <Form ref={this.formRef} layout="horizontal">
                        <FormItem {...formItemLayout}
                                  label="Username"
                                  name="username"
                                  rules={[
                                      {
                                          required: true,
                                          message: "Please input your username!",
                                      },
                                  ]}>
                            <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="请输入用户名"/>
                        </FormItem>
                        <FormItem {...formItemLayout}
                                  label="Password"
                                  name="password"
                                  initialValue=""
                                  rules={[
                                      {
                                          required: true,
                                          message: "Please input your password!",
                                      },
                                      {
                                          min: 3, max: 5,
                                          message: "长度不在范围内",
                                      },
                                      {
                                          pattern: new RegExp('^\\w+$', 'g'),
                                          message: "用户名必须为字母",
                                      }
                                  ]}>
                            <Input prefix={<LockOutlined className="site-form-item-icon"/>} placeholder="请输入密码"/>
                        </FormItem>
                        <FormItem {...formItemLayout}
                                  initialValue="1"
                                  label="性别"
                                  name="sex">
                            <RadioGroup>
                                <Radio value="1">男</Radio>
                                <Radio value="2">女</Radio>
                            </RadioGroup>
                        </FormItem>
                        <FormItem {...formItemLayout}
                                  initialValue="18"
                                  label="年龄"
                                  name="age">
                            <InputNumber min={0} max={150}/>
                        </FormItem>
                        <FormItem {...formItemLayout}
                                  initialValue="1"
                                  label="当前状态"
                                  name="currentState">
                            <Select>
                                <Option value="1">咸鱼一条</Option>
                                <Option value="2">风华浪子</Option>
                                <Option value="3">北大才子一枚</Option>
                            </Select>
                        </FormItem>
                        <FormItem {...formItemLayout}
                                  label="爱好"
                                  name="hobby">
                            <Select mode="multiple" defaultValue={["1", "2"]} allowClear>
                                <Option value="1">游泳</Option>
                                <Option value="2">网球</Option>
                                <Option value="3">音乐</Option>
                                <Option value="4">泡妞</Option>
                            </Select>
                        </FormItem>
                        <FormItem {...formItemLayout}
                                  label="是否已婚"
                                  name="isMarried">
                            <Switch defaultChecked={true}/>
                        </FormItem>
                        <FormItem {...formItemLayout}
                                  label="生日"
                                  name="birthday">
                            <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat}/>
                        </FormItem>
                        <FormItem {...formItemLayout}
                                  label="地址"
                                  name="address">
                            <TextArea autoSize={{minRows: 2, maxRows: 5}}/>
                        </FormItem>
                        <FormItem {...formItemLayout}
                                  label="早起时间"
                                  name="getUpTime">
                            <TimePicker/>
                        </FormItem>
                        {/*<TODO 上传功能待续...>*/}
                        <FormItem {...offSetLayout}>
                            <FormItem name="remember" valuePropName="checked" initialValue={true} noStyle>
                                <Checkbox>已阅读<a href="">张氏协议</a></Checkbox>
                            </FormItem>
                        </FormItem>
                        <FormItem {...offSetLayout}>
                            <Button type="primary"
                                    onClick={this.handleSubmit.bind(this)}>注册</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        );
    }
}