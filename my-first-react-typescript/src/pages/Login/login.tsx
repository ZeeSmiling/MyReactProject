import React from "react";
import {Button, Card, Checkbox, Form, Input,} from "antd";
import {InternalNamePath, StoreValue} from "rc-field-form/lib/interface";
import {FormInstance} from "antd/es/form";
import {message} from "antd/es";
import {UserOutlined, LockOutlined} from '@ant-design/icons';

const FormItem = Form.Item;


export interface Store {
    [name: string]: StoreValue;
}

export interface ValidateErrorEntity {
    values: Store;
    errorFields: {
        name: InternalNamePath;
        errors: string[];
    }[];
    outOfDate: boolean;
}

export default class FormLogin extends React.Component {

    formRef = React.createRef<FormInstance>();

    handleSubmit = () => {
        let userInfo = this.formRef.current!.getFieldsValue();
        console.log(userInfo);
        let Validate = this.formRef.current!.validateFields();
        Validate.then((resolve) => {
            message.success(`${userInfo['username']}恭喜你成为年轻有为的高富帅，当前的密码:${userInfo['password']}`);
        })
    }

    render() {
        const onFinish = (values: Store) => {
            console.log('Success:', values);
            console.log(this);
        };

        const onFinishFailed = (errorInfo: ValidateErrorEntity) => {
            console.log('Failed:', errorInfo);
        };

        return (
            <div>
                <Card title="登录组件">
                    <Form ref={this.formRef} layout="horizontal" onFinish={onFinish} onFinishFailed={onFinishFailed}>
                        <FormItem label="Username" name="username"
                                  initialValue=""
                                  rules={[
                                      {
                                          required: true,
                                          message: "Please input your username!",
                                      }
                                  ]}>
                            <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="请输入用户名"/>
                        </FormItem>
                        <FormItem label="Password" name="password"
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
                        <FormItem>
                            <FormItem name="remember" valuePropName="checked" initialValue={true} noStyle>
                                <Checkbox>记住密码</Checkbox>
                            </FormItem>
                            <a style={{float: 'right'}} href="#">忘记密码</a>
                        </FormItem>
                        <FormItem>
                            <Button style={{width: '100%'}} type="primary" onClick={this.handleSubmit.bind(this)}>登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        );
    }
}

