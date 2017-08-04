import React, { Component } from 'react';
import { NavBar, Flex } from 'antd-mobile';
import { Link } from 'react-router';

import './style.scss';

export default class Profit extends Component {

  render() {
    const profitList = [{
      title: '利润报告1',
      date: '2017-01-07',
      content: '24日收益统计，盈利¥2,500',
    }, {
      title: '利润报告2',
      date: '2017-01-07',
      content: '24日收益统计，盈利¥2,500',
    }, {
      title: '利润报告3',
      date: '2017-01-07',
      content: '24日收益统计，盈利¥2,500',
    }, {
      title: '利润报告4',
      date: '2017-01-07',
      content: '24日收益统计，盈利¥2,500',
    }, {
      title: '利润报告5',
      date: '2017-01-07',
      content: '24日收益统计，盈利¥2,500',
    }, {
      title: '利润报告6',
      date: '2017-01-07',
      content: '24日收益统计，盈利¥2,500',
    }];

    return (
      <div className="container profit-list">
        <NavBar iconName={false} leftContent={<Link to="/person">
            <i className="iconfont left-icon">&#xe69f;</i>
        </Link>}>收益统计</NavBar>
        <ul>
          {
            profitList.map((item, i) => (
              <li key={i}>
                <Flex className="profit-info">
                  <Flex.Item>{item.title}</Flex.Item>
                  <div className="profit-date">{item.date}</div>
                </Flex>
                <div className="profit-content">{item.content}</div>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}
