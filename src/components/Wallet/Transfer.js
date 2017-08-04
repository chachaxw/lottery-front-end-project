import React, { Component } from 'react';
import { NavBar, Icon, List, InputItem, Button } from 'antd-mobile';
import { Link } from 'react-router';
import { createForm } from 'rc-form';

import './style.scss';

const Item = List.Item;

class Transfer extends Component {

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
      <div className="container transfer">
        <NavBar iconName={false} leftContent={<Link to="/wallet">
            <i className="iconfont left-icon">&#xe69f;</i>
        </Link>} rightContent={<Link to="">转账记录</Link>}>转账</NavBar>
        <List style={{marginTop: 30}}>
          <InputItem
            labelNumber={1}
            autoComplete="off"
            {...getFieldProps('banlance',{
              initialValue: '150,000.00'
            })}
            editable={false}>
            可用余额:
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
            placeholder="">
            对方邮箱:
          </InputItem>
        </List>
        <List style={{marginTop: 30}}>
          <InputItem
            type="number"
            labelNumber={1}
            autoComplete="off"
            {...getFieldProps('moneyNumber',{
              trigger: 'onBlur',
              rules: [{
                required: true,
                message: '金额不能为空'
              }],
            })}
            max={500000} min={100}>
            金&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;额:
          </InputItem>
        </List>
        <p className="tips">转账限额，最低100元，最高500,000元</p>
        <List style={{marginTop: 15}}>
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
            placeholder="">
            安全密码:
          </InputItem>
        </List>
        <Link className="forget-password" to="/">忘记安全密码？</Link>
        <div style={{textAlign: 'center'}}>
          <Button className="confirm-btn" onClick={this.onSubmit}>申请提现</Button>
        </div>
      </div>
    )
  }
}

export default Transfer = createForm()(Transfer);
