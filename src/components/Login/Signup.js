import React, { Component } from 'react';
import { NavBar, List, InputItem, Button, Checkbox } from 'antd-mobile';
import { createForm } from 'rc-form';
import { Link } from 'react-router';

import './style.scss';

class Signup extends Component {

  state = {
    disabled: true,
  }

  onChange = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  }

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
      <div className="signup">
        <NavBar iconName={false} leftContent={<Link to="/">
            <i className="iconfont left-icon">&#xe69f;</i>
            </Link>}>
          注册
        </NavBar>
        <List style={{marginTop: 20}}>
          <InputItem
            labelNumber={1}
            autoComplete="off"
            {...getFieldProps('username',{
              trigger: 'onBlur',
              rules: [{
                required: true,
                type: 'string',
                message: '用户名不能为空'
              }],
            })}
            placeholder="请输入您的用户名">
          </InputItem>
          <InputItem
            labelNumber={1}
            autoComplete="off"
            {...getFieldProps('email',{
              trigger: 'onBlur',
              rules: [{
                required: true,
                type: 'email',
                message: '邮箱不能为空'
              }],
            })}
            placeholder="请输入您的邮箱">
          </InputItem>
          <InputItem
            type="password"
            labelNumber={1}
            autoComplete="off"
            {...getFieldProps('password',{
              trigger: 'onBlur',
              rules: [{
                required: true,
                message: '密码不能为空'
              }],
            })}
            placeholder="请输入您的密码">
          </InputItem>
          <InputItem
            type="password"
            labelNumber={1}
            autoComplete="off"
            {...getFieldProps('repassword',{
              trigger: 'onBlur',
              rules: [{
                required: true,
                message: '密码不能为空'
              }],
            })}
            placeholder="请确认您的密码">
          </InputItem>
        </List>
        <List style={{marginTop: 20}}>
          <InputItem
            labelNumber={1}
            autoComplete="off"
            {...getFieldProps('mobile',{
              trigger: 'onBlur',
              rules: [{
                required: true,
                message: '手机号不能为空'
              }],
            })}
            placeholder="请输入您的手机号">
          </InputItem>
          <InputItem
            labelNumber={1}
            autoComplete="off"
            {...getFieldProps('qq',{
              trigger: 'onBlur',
              rules: [{
                required: true,
                message: 'QQ号不能为空',
              }],
            })}
            placeholder="请输入您的QQ号">
          </InputItem>
        </List>
        <div className="aggrement"><Checkbox onChange={this.onChange} />阅读并同意《服务条款》与《免费条约》</div>
        <div style={{textAlign: 'center'}}>
          <Button disabled={this.state.disabled} onClick={this.onSubmit} className="signup-btn">提交注册</Button>
        </div>
      </div>
    )
  }
};
export default Signup = createForm()(Signup);
