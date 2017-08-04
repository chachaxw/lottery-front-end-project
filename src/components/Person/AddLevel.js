import React, { Component } from 'react';
import { NavBar, List, InputItem, Button, Slider } from 'antd-mobile';
import { Link } from 'react-router';
import { createForm } from 'rc-form';

import './style.scss';

const Item = List.Item;

class AddLevel extends Component {

  render() {
    const { getFieldProps } = this.props.form;

    return (
      <div className="container add-level">
        <NavBar iconName={false} leftContent={<Link to="/person">
            <i className="iconfont left-icon">&#xe69f;</i>
        </Link>}>添加下级</NavBar>
        <List style={{marginTop: 20}}>
          <InputItem
            labelNumber={1}
            autoComplete="off"
            {...getFieldProps('email')}
            placeholder="填写邮箱">
            邮&nbsp;&nbsp;&nbsp; 箱:
          </InputItem>
          <InputItem
            labelNumber={1}
            autoComplete="off"
            {...getFieldProps('username')}
            placeholder="填写用户名">
            用户名:
          </InputItem>
          <InputItem
            type="password"
            labelNumber={1}
            autoComplete="off"
            {...getFieldProps('password')}
            placeholder="填写密码">
            密&nbsp;&nbsp;&nbsp; 码:
          </InputItem>
        </List>
        <List style={{marginTop: 20}}>
          <Item>
            <div className="ratio">返点比：<span>1400/700(18.0%)</span></div>
            <Slider defaultValue={26} min={0} max={100} />
          </Item>
        </List>
        <List style={{marginTop: 20}}>
          <InputItem
            labelNumber={1}
            autoComplete="off"
            {...getFieldProps('code')}
            placeholder="填写验证码">
            验证码:
          </InputItem>
        </List>
        <div style={{textAlign: 'center'}}>
          <Button className="confirm-btn">确定</Button>
        </div>
      </div>
    )
  }
}
export default AddLevel = createForm()(AddLevel);
