import React, { Component } from 'react';
import { List, InputItem, Button, Checkbox } from 'antd-mobile';
import { createForm } from 'rc-form';
import { Link } from 'react-router';

import './style.scss';

class LoginPage extends Component {

  onSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((error, values) => {
      if (!error) {
        console.log('ok', values);
      } else {
        console.log('error', error, values);
      }
    });
  }

  render() {
    const { getFieldProps } = this.props.form;

    return (
      <div className="login">
        <div className="logo">Logo</div>
          <List>
            <InputItem
              type="phone"
              labelNumber={1}
              autoComplete="off"
              {...getFieldProps('phone',{
                trigger: 'onBlur',
                rules: [{
                  required: true,
                  message: '手机号不能为空'
                }],
              })}
              placeholder="手机号"
            >
              <i className="iconfont">&#xe63b;</i>
            </InputItem>
            <InputItem
              type="password"
              labelNumber={1}
              autoComplete="off"
              extra={
                <Link to="/home" className="forget-tips">忘记密码?</Link>
              }
              {...getFieldProps('password',{
                trigger: 'onBlur',
                rules: [{
                  required: true,
                  message: '密码不能为空'
                }],
              })}
              placeholder="密码"
            >
              <i className="iconfont">&#xe603;</i>
            </InputItem>
            <InputItem
              type="number"
              labelNumber={1}
              autoComplete="off"
              extra={<Button size="small" inline type="primary">发送</Button>}
              {...getFieldProps('code',{
                trigger: 'onBlur',
                rules: [{
                  required: true,
                  message: '验证码不能为空'
                }],
              })}
              placeholder="请输入验证码"
            >
              <i className="iconfont">&#xe641;</i>
            </InputItem>
            <div className="aggrement"><Checkbox />阅读并同意《服务条款》与《免费条约》</div>
            <Button className="login-btn" onClick={this.onSubmit} >登录</Button>
          </List>
          <Link to="/home" className="skip-login">跳过登录，随便看看</Link>
          <div className="other-info">
            <Link>《XXX新平台介绍》</Link>
            <Link to="/signup">新用户注册</Link>
          </div>
      </div>
    )
  }
};
LoginPage = createForm()(LoginPage);
export default LoginPage;
