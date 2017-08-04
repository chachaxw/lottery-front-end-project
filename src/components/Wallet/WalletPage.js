import React, { Component } from 'react';
import { NavBar, Icon, Flex } from 'antd-mobile';
import { Link } from 'react-router';

import './style.scss';

const Item = Flex.Item;

export default class WalletPage extends Component {

  render() {
    const balance = '1000,000.00';
    const cardList = [
      {
        bankName: '中国工商银行',
        cardNum: '**** **** **** 7897',
        cardOwner: '**文',
        cardType: '储蓄卡',
        cardPlace: '下沙经济开发区支行',
        cardImage: require('../../static/images/wallet/工商.png'),
      }, {
        bankName: '中国招商银行',
        cardNum: '**** **** **** 5198',
        cardOwner: '**海',
        cardType: '信用卡',
        cardPlace: '下城区朝晖支行',
        cardImage: require('../../static/images/wallet/招商.png'),
      }, {
        bankName: '中国建设银行',
        cardNum: '**** **** **** 1672',
        cardOwner: '**大',
        cardType: '储蓄卡',
        cardPlace: '下城区朝晖支行',
        cardImage: require('../../static/images/wallet/建设.png'),
      },
    ];

    return (
      <div className="container wallet">
        <NavBar iconName={false} rightContent={<Icon key="1" type="ellipsis" />}>我的钱包</NavBar>
        <header>
          <div className="total-balance">
            {balance}
            <div className="text-line">
              <span></span>账户余额<span></span>
            </div>
          </div>
          <Flex className="func-list">
            <Item><Link to="/topup"><i className="iconfont">&#xe61f;</i>我要充值</Link></Item>
            <Item><Link to="/withdraw"><i className="iconfont">&#xe616;</i>我要提现</Link></Item>
            <Item><Link to="/transfer"><i className="iconfont">&#xe69e;</i>我要转账</Link></Item>
          </Flex>
        </header>
        <div className="card-manage">
          <div className="card-title"><i className="iconfont">&#xe685;</i>银行卡管理</div>
          <ul className="card-list clearfix">
            {cardList.map((item, i) => (
              <li className="card-item" key={i}>
                <img src={item.cardImage}/>
                <span className="card-type">{item.cardType}</span>
                <span className="card-owner">{item.cardOwner}</span>
                <div className="card-number">{item.cardNum}</div>
                <div className="card-location"><span></span>{item.cardPlace}<span></span></div>
              </li>
            ))}
          </ul>
          <div className="add-btn">
            <Link to="/addcard"><img src={require('../../static/images/wallet/ADD.png')} /></Link>
          </div>
        </div>
      </div>
    )
  }
}
