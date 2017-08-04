import React, { Component } from 'react';
import { NavBar, List, SearchBar, Flex, Menu, Popup } from 'antd-mobile';
import { Link } from 'react-router';
import { createForm } from 'rc-form';

import './style.scss';

const Item = List.Item;

export default class BetRecord extends Component {

  render() {
    const data = [
      {
        title: '双色球，６＋１',
        date: '2016021231',
        content: '1、2、3、5、6、9、10、15、21、33、16、32、77、21、1、2、3、5、6、9、10、15、21、33、16、32、77、21',
        money: '3260.00',
      }, {
        title: '双色球，６＋１',
        date: '2016021231',
        content: '1、2、3、5、6、9、10、15、21、33、16、32、77、21、1、2、3、5、6、9、10、15、21、33、16、32、77、21',
        money: '3260.00',
      }, {
        title: '双色球，６＋１',
        date: '2016021231',
        content: '1、2、3、5、6、9、10、15、21、33、16、32、77、21、1、2、3、5、6、9、10、15、21、33、16、32、77、21',
        money: '3260.00',
      }, {
        title: '双色球，６＋１',
        date: '2016021231',
        content: '1、2、3、5、6、9、10、15、21、33、16、32、77、21、1、2、3、5、6、9、10、15、21、33、16、32、77、21',
        money: '3260.00',
      },
    ];

    return (
      <div className="container bet-record">
        <NavBar iconName={false} leftContent={<Link to="/person">
            <i className="iconfont left-icon">&#xe69f;</i>
        </Link>}>投注记录</NavBar>
        <SearchBar placeholder="期号搜索"></SearchBar>
        <Flex className="select-group">
          <Flex.Item><List>
            <Item arrow="down">彩种:</Item>
          </List></Flex.Item>
          <Flex.Item><List>
            <Item arrow="down">玩法:</Item>
          </List></Flex.Item>
        </Flex>
        <Flex className="select-group">
          <Flex.Item><List>
            <Item arrow="down">盈利:</Item>
          </List></Flex.Item>
          <Flex.Item><List>
            <Item arrow="down">日期:</Item>
          </List></Flex.Item>
        </Flex>
        <div className="lottery-list">
          <div className="lottery-title"><span>彩种</span><span>期号</span></div>
          <ul>
            {data.map((item, i) => (
              <li key={i}>
                <Flex>
                  <Flex.Item className="title">{item.title}</Flex.Item>
                  <div className="message-date">{item.date}</div>
                </Flex>
                <div className="message-content">{item.content}</div>
                <div className="money">投注金额：<span>{item.money}</span></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
