import React, { Component } from 'react';
import { NavBar, Flex } from 'antd-mobile';
import { Link } from 'react-router';

import './style.scss';

export default class Message extends Component {

  render() {
    const messageList = [{
      title: '系统公告',
      date: '2017-01-07',
      content: '当前平台即将推出新功能，欢迎使用',
    }, {
      title: '系统公告',
      date: '2017-01-07',
      content: '当前平台即将推出新功能，欢迎使用',
    }, {
      title: '系统公告',
      date: '2017-01-07',
      content: '当前平台即将推出新功能，欢迎使用',
    }, {
      title: '系统公告',
      date: '2017-01-07',
      content: '当前平台即将推出新功能，欢迎使用',
    }, {
      title: '系统公告',
      date: '2017-01-07',
      content: '当前平台即将推出新功能，欢迎使用',
    }, {
      title: '系统公告',
      date: '2017-01-07',
      content: '当前平台即将推出新功能，欢迎使用',
    }, {
      title: '系统公告',
      date: '2017-01-07',
      content: '当前平台即将推出新功能，欢迎使用',
    }];

    return (
      <div className="container message-list">
        <NavBar iconName={false} leftContent={<Link to="/">
            <i className="iconfont left-icon">&#xe69f;</i>
        </Link>}>消息通知</NavBar>
        <ul>
          {
            messageList.map((item, i) => (
              <li key={i}>
                <Flex className="message-info">
                  <Flex.Item>{item.title}</Flex.Item>
                  <div className="message-date">{item.date}</div>
                </Flex>
                <div className="message-content">{item.content}</div>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}
