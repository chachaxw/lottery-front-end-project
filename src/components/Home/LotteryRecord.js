import React, { Component } from 'react';
import { NavBar, Icon, Flex, List} from 'antd-mobile';
import { Link } from 'react-router';
import { createForm } from 'rc-form';

import './style.scss';

export default class LotteryRecord extends Component {

  render() {
    const lotteryList = [
      {
        termNum: '151211',
        date: '2017-1-7',
        lotteryNumber: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
        '11', '12', '14', '15', '16', '17', '18', '19', '20'],
      }, {
        termNum: '151211',
        date: '2017-1-7',
        lotteryNumber: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
        '11', '12', '14', '15', '16', '17', '18', '19', '20'],
      }, {
        termNum: '151211',
        date: '2017-1-7',
        lotteryNumber: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
        '11', '12', '14', '15', '16', '17', '18', '19', '20'],
      },
    ];

    return (
      <div className="container lottery-record">
        <NavBar iconName={false} leftContent={<Link to="/">
          <i className="iconfont left-icon">&#xe69f;</i>
        </Link>}>开奖记录</NavBar>
        <ul>
          {
            lotteryList.map((item, i) => (
              <li key={i}>
                <Flex className="lottery-info">
                  <Flex.Item>第 <span>{item.termNum}</span> 期</Flex.Item>
                  <div className="lottery-date">{item.date}</div>
                </Flex>
                <div className="lottery-list">
                  <div className="lottery-number">中奖号码：</div>
                  <div className="number-list">
                    {
                      item.lotteryNumber.map((j, k) => (
                        <span key={k} className="number-item">{j}</span>
                      ))
                    }
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}
