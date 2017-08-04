import React, { Component } from 'react';
import { NavBar, Icon, Flex, List, Checkbox, DatePicker, Table, Menu, Picker } from 'antd-mobile';
import { Link } from 'react-router';
import { createForm } from 'rc-form';

import './style.scss';

const Item = List.Item;

const data = [
  { termNum: '123123110-081', lotteryNum: '15015', thousand: '1 21 35 41 15 16 17 18 9 0',
    myriabit: '1 21 35 41 15 16 17 18 9 0', hundreds: '1 21 35 41 15 16 17 18 9 0',
    decade: '1 21 35 41 15 16 17 18 9 0', unit: '1 21 35 41 15 16 17 18 9 0',
    number: '1 21 35 41 15 16 17 18 9 0'
  }, { termNum: '123123110-081', lotteryNum: '15015', thousand: '1 21 35 41 15 16 17 18 9 0',
    myriabit: '1 21 35 41 15 16 17 18 9 0', hundreds: '1 21 35 41 15 16 17 18 9 0',
    decade: '1 21 35 41 15 16 17 18 9 0', unit: '1 21 35 41 15 16 17 18 9 0',
    number: '1 21 35 41 15 16 17 18 9 0'
  }, { termNum: '123123110-081', lotteryNum: '15015', thousand: '1 21 35 41 15 16 17 18 9 0',
    myriabit: '1 21 35 41 15 16 17 18 9 0', hundreds: '1 21 35 41 15 16 17 18 9 0',
    decade: '1 21 35 41 15 16 17 18 9 0', unit: '1 21 35 41 15 16 17 18 9 0',
    number: '1 21 35 41 15 16 17 18 9 0'
  }, { termNum: '123123110-081', lotteryNum: '15015', thousand: '1 21 35 41 15 16 17 18 9 0',
    myriabit: '1 21 35 41 15 16 17 18 9 0', hundreds: '1 21 35 41 15 16 17 18 9 0',
    decade: '1 21 35 41 15 16 17 18 9 0', unit: '1 21 35 41 15 16 17 18 9 0',
    number: '1 21 35 41 15 16 17 18 9 0'
  }, { termNum: '123123110-081', lotteryNum: '15015', thousand: '1 21 35 41 15 16 17 18 9 0',
    myriabit: '1 21 35 41 15 16 17 18 9 0', hundreds: '1 21 35 41 15 16 17 18 9 0',
    decade: '1 21 35 41 15 16 17 18 9 0', unit: '1 21 35 41 15 16 17 18 9 0',
    number: '1 21 35 41 15 16 17 18 9 0'
  }, { termNum: '123123110-081', lotteryNum: '15015', thousand: '1 21 35 41 15 16 17 18 9 0',
    myriabit: '1 21 35 41 15 16 17 18 9 0', hundreds: '1 21 35 41 15 16 17 18 9 0',
    decade: '1 21 35 41 15 16 17 18 9 0', unit: '1 21 35 41 15 16 17 18 9 0',
    number: '1 21 35 41 15 16 17 18 9 0'
  },
];

class DataPage extends Component {

  render() {
    const { getFieldProps } = this.props.form;
    const lotteryList = [
      {
        label: '一星',
        value: 0,
      }, {
        label: '二星',
        value: 1,
      }, {
        label: '三星',
        value: 2,
      }, {
        label: '四星',
        value: 3,
      },
    ];
    const playList = [
      {
        label: '直选复式1',
        value: 0,
      }, {
        label: '直选复式2',
        value: 1,
      }, {
        label: '直选复式3',
        value: 2,
      }, {
        label: '直选复式4',
        value: 3,
      },
    ];

    return (
      <div className="container data">
        <NavBar iconName={false} rightContent={<Icon type="ellipsis" />}>数据统计</NavBar>
        <Flex className="select-group">
          <Flex.Item>
            <List>
              <Picker extra="全部" data={lotteryList} cols={1}
                {...getFieldProps('lotteryType')}>
                <Item arrow="down">彩种:</Item>
              </Picker>
            </List>
          </Flex.Item>
          <Flex.Item>
            <List>
              <Picker extra="全部" data={playList} cols={1}
                {...getFieldProps('playWay')}>
                <Item arrow="down">玩法:</Item>
              </Picker>
            </List>
          </Flex.Item>
        </Flex>
        <List className="checkbox-list">
          <Item>
            走势图：
            <span><Checkbox {...getFieldProps('guide')}/>辅助线</span>
            <span><Checkbox {...getFieldProps('drop')}/>遗漏</span>
            <span><Checkbox {...getFieldProps('drop1')}/>遗漏条</span>
            <span><Checkbox {...getFieldProps('trend')}/>走势</span>
            <span><Checkbox {...getFieldProps('temperature')}/>温号</span>
          </Item>
        </List>
        <Flex className="select-group">
          <Flex.Item><List className="picker1">
            <DatePicker mode="date" {...getFieldProps('date1')}>
              <Item arrow="down">时间范围:</Item>
            </DatePicker>
          </List></Flex.Item>
          <Flex.Item><List className="picker2">
            <DatePicker mode="date" {...getFieldProps('date2')}>
              <Item arrow="down">至:</Item>
            </DatePicker>
          </List></Flex.Item>
        </Flex>
        <div className="table">
          <Flex className="table-head">
            <Flex.Item>期号</Flex.Item>
            <Flex.Item>开奖号码<br/><Checkbox {...getFieldProps('allNumber')}/>全部</Flex.Item>
            <Flex.Item>万位<br/>0 1 2 3 4 5 6 7 8 9</Flex.Item>
            <Flex.Item>千位<br/>0 1 2 3 4 5 6 7 8 9</Flex.Item>
            <Flex.Item>百位<br/>0 1 2 3 4 5 6 7 8 9</Flex.Item>
            <Flex.Item>十位<br/>0 1 2 3 4 5 6 7 8 9</Flex.Item>
            <Flex.Item>个位<br/>0 1 2 3 4 5 6 7 8 9</Flex.Item>
            <Flex.Item>号码分布</Flex.Item>
          </Flex>
          <div className="table-body">
            {
              data.map((d, i) => (
                <Flex key={i}>
                  <Flex.Item>{d.termNum}</Flex.Item>
                  <Flex.Item>{d.lotteryNum}</Flex.Item>
                  <Flex.Item>{d.myriabit}</Flex.Item>
                  <Flex.Item>{d.thousand}</Flex.Item>
                  <Flex.Item>{d.hundreds}</Flex.Item>
                  <Flex.Item>{d.decade}</Flex.Item>
                  <Flex.Item>{d.unit}</Flex.Item>
                  <Flex.Item>{d.number}</Flex.Item>
                </Flex>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}
export default DataPage = createForm()(DataPage);
