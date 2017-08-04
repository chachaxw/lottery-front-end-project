import React, { Component } from 'react';
import { NavBar, Icon, List, Button, InputItem, Flex, Picker } from 'antd-mobile';
import { Link } from 'react-router';
import { createForm } from 'rc-form';

import './style.scss';

const Item = List.Item;

class WithDraw extends Component {

  render() {
    const { getFieldProps } = this.props.form;
    const bankData = [];
    return (
      <div className="container withdraw">
        <NavBar iconName={false} leftContent={<Link to="/wallet">
            <i className="iconfont left-icon">&#xe69f;</i>
        </Link>} rightContent={<Link to="">提现记录</Link>}>提现</NavBar>
        <List style={{marginTop: 30}}>
          <Flex className="input-group">
            <Flex.Item>
              <InputItem
                labelNumber={1}
                autoComplete="off"
                {...getFieldProps('banlance')}
                placeholder="">
                可用余额:
              </InputItem>
            </Flex.Item>
            <Flex.Item>
              <InputItem
                disabled
                labelNumber={1}
                autoComplete="off"
                {...getFieldProps('maxNum',{
                  initialValue: '12,342.00'
                })}
                placeholder="">
                可提现额度:
              </InputItem>
            </Flex.Item>
          </Flex>
          <Picker data={bankData} {...getFieldProps('bankCard')}>
            <Item arrow="down">提现银行:</Item>
          </Picker>
          <InputItem
            type="number"
            labelNumber={1}
            autoComplete="off"
            {...getFieldProps('moneyNumber')}
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
            {...getFieldProps('password')}
            placeholder="">
            安全密码:
          </InputItem>
        </List>
        <Link className="forget-password" to="/">忘记安全密码？</Link>
        <div style={{textAlign: 'center'}}>
          <Button className="confirm-btn">申请提现</Button>
        </div>
      </div>
    )
  }
}

export default WithDraw = createForm()(WithDraw);
