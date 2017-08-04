import React, { Component } from 'react';
import { NavBar, List } from 'antd-mobile';
import { Link } from 'react-router';

import './style.scss';

const Item = List.Item;

export default class Setting extends Component {

  logout = () => {
    console.log('退出登录');
  }

  render() {

    return (
      <div className="container setting">
        <NavBar iconName={false} leftContent={<Link to="/person">
            <i className="iconfont left-icon">&#xe69f;</i>
        </Link>}>设置</NavBar>
        <List style={{marginTop: 20}} className="menu-list">
          <Item arrow="horizontal" onClick={() => {}}>修改密码</Item>
          <Item arrow="horizontal" onClick={() => {}}>修改安全码</Item>
          <Item arrow="horizontal" onClick={() => {}}>忘记密码</Item>
          <Item arrow="horizontal" onClick={() => {}}>忘记安全码</Item>
        </List>
        <List style={{marginTop: 20}} className="menu-list">
          <Item arrow="horizontal" onClick={() => {}}>平台条款</Item>
          <Item arrow="horizontal" onClick={() => {}}>安全帮助</Item>
        </List>
        <button className="logout-btn" onClick={this.logout}>退出登录</button>
      </div>
    )
  }
}
