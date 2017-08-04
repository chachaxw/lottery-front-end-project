import React, { Component } from 'react';
import { NavBar, Icon, Flex, List } from 'antd-mobile';
import { Link } from 'react-router';

import './style.scss';

const Item = List.Item;

export default class PersonPage extends Component {

  render() {
    const userInfo = {
      userName: 'Fance.Pe',
      qq: '474300470',
      level: 100,
      mobile: '13429604999',
      balance: 9999.00,
      total: 10000.00,
      withdraw: 15000.00,
      profit: 5000.00,
      bonus: 300.00,
      commission: 500.00,
      userAvatar: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=386386595,4053018748&fm=21&gp=0.jpg',
    };

    return (
      <div className="container person">
        <NavBar iconName={false} rightContent={<Link to="/profile">
            <i className="iconfont edit-icon">&#xe672;</i>
          </Link>}></NavBar>
        <header>
          <div className="user-avatar" style={{backgroundImage: `url(${userInfo.userAvatar})`}}></div>
          <div className="level">Lv{userInfo.level}</div>
          <Link to="/topup" className="top-up">充</Link>
        </header>
        <div className="user-profile">
          <div className="user-name">{userInfo.userName}</div>
          <Flex className="user-contact">
            <Flex.Item><i className="iconfont">&#xe617;</i>QQ: {userInfo.qq}</Flex.Item>
            <Flex.Item><i className="iconfont">&#xe626;</i>电话: {userInfo.mobile}</Flex.Item>
          </Flex>
          <div className="user-assets">
            <div className="short-line"></div>
            <Flex>
              <Flex.Item>账户余额<span className="price">{userInfo.balance}</span></Flex.Item>
              <Flex.Item>总充值<span>{userInfo.total}</span></Flex.Item>
            </Flex>
            <div className="middle-line"></div>
            <Flex className="assets-list">
              <Flex.Item><p>{userInfo.withdraw}</p><span>总提现</span></Flex.Item>
              <Flex.Item><p>{userInfo.profit}</p><span>盈亏</span></Flex.Item>
              <Flex.Item><p>{userInfo.bonus}</p><span>红利</span></Flex.Item>
              <Flex.Item><p>{userInfo.commission}</p><span>佣金</span></Flex.Item>
            </Flex>
          </div>
        </div>
        <List style={{marginTop: 20}} className="menu-list">
          <Link to="/profit">
            <Item thumb={<i className="iconfont">&#xe627;</i>}
            arrow="horizontal">收益统计</Item>
          </Link>
          <Link to="/record">
            <Item thumb={<i className="iconfont">&#xe6c2;</i>}
            arrow="horizontal">投注记录</Item>
          </Link>
          <Link to="/manage">
            <Item thumb={<i className="iconfont">&#xe602;</i>}
            arrow="horizontal">下级管理</Item>
          </Link>
        </List>
        <List style={{marginTop: 20}} className="menu-list">
          <Link to="/setting">
            <Item thumb={<i className="iconfont">&#xe62a;</i>}
            arrow="horizontal">设置</Item>
          </Link>
        </List>
      </div>
    )
  }
}
