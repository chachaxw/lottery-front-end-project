import React, { Component } from 'react';
import { NavBar, List, InputItem, Button, Picker } from 'antd-mobile';
import { Link } from 'react-router';
import { createForm } from 'rc-form';
import { district } from 'antd-mobile-demo-data';

import './style.scss';

const Item = List.Item;

class AddLevel extends Component {

  render() {
    const { getFieldProps } = this.props.form;
    const bankList = [
      {
        label: '中国银行',
        value: 0,
      }, {
        label: '工商银行',
        value: 1,
      }, {
        label: '招商银行',
        value: 2,
      }, {
        label: '平安银行',
        value: 3,
      },
    ];
    const branch = [
      {
        label: '西丽支行',
        value: 0,
      }, {
        label: '民乐支行',
        value: 1,
      }, {
        label: '蛇口支行',
        value: 2,
      }, {
        label: '科技园支行',
        value: 3,
      },
    ];

    return (
      <div className="container add-card">
        <NavBar iconName={false} leftContent={<Link to="/wallet">
            <i className="iconfont left-icon">&#xe69f;</i>
        </Link>}>添加银行卡</NavBar>
        <List style={{marginTop: 20}}>
          <Picker extra="选择您的开户行" data={bankList} cols={1}
            {...getFieldProps('bankName')}>
            <Item arrow="down">开户银行:</Item>
          </Picker>
          <Picker extra="选择您的开户城市" data={district}
            {...getFieldProps('bankAddress')}>
            <Item arrow="down">开户银行所在城市:</Item>
          </Picker>
          <Picker extra="如：招商银行上海支行东大民支行" data={branch} cols={1}
            {...getFieldProps('bankBranch')}>
            <Item arrow="down">支行名称:</Item>
          </Picker>
        </List>
        <p className="tips">需填写开户行具体名，可拨打银行服务热线咨询</p>
        <List style={{marginTop: 20}}>
          <InputItem
            labelNumber={1}
            autoComplete="off"
            {...getFieldProps('owner',{
              trigger: 'onBlur',
              rules: [{
                required: true,
                message: '持卡人不能为空',
              }],
            })}>
            持卡人:
          </InputItem>
        </List>
        <p className="tips">必须于持卡人一致，否则不会成功</p>
        <List style={{marginTop: 20}}>
          <InputItem
            labelNumber={1}
            type="bankCard"
            autoComplete="off"
            {...getFieldProps('cardNumber',{
              trigger: 'onBlur',
              rules: [{
                required: true,
                message: '银行卡号不能为空',
              }],
            })}>
            银行卡号:
          </InputItem>
          <InputItem
            type="password"
            labelNumber={1}
            autoComplete="off"
            {...getFieldProps('password',{
              trigger: 'onBlur',
              rules: [{
                required: true,
                message: '安全密码不能为空',
              }],
            })}>
            安全密码:
          </InputItem>
        </List>
        <div style={{textAlign: 'center'}}>
          <Button className="confirm-btn">提交</Button>
        </div>
      </div>
    )
  }
}
export default AddLevel = createForm()(AddLevel);
