import React, { Component } from 'react';
import { NavBar, Icon, Flex, List, SearchBar, DatePicker, Picker } from 'antd-mobile';
import { Link } from 'react-router';
import { createForm } from 'rc-form';

import './style.scss';

const Item = List.Item;

class Manage extends Component {

  render() {
    const { getFieldProps } = this.props.form;
    const userTypeList = [];
    const onlineStatusList = [];
    const data = [
      {
        userName: '幸福中奖者',
        desc: 'CD',
        balance: 3124.00,
        teamBanlance: '******',
        rebate: '3.4%',
        status: '在线',
        lastLogin: '2016/10/14, 08:23',
        loginIP: 'ip:21141564',
      }, {
        userName: '幸福中奖者',
        desc: 'CD',
        balance: 3124.00,
        teamBanlance: '******',
        rebate: '3.4%',
        status: '在线',
        lastLogin: '2016/10/14, 08:23',
        loginIP: 'ip:21141564',
      }, {
        userName: '幸福中奖者',
        desc: 'CD',
        balance: 3124.00,
        teamBanlance: '******',
        rebate: '3.4%',
        status: '在线',
        lastLogin: '2016/10/14, 08:23',
        loginIP: 'ip:21141564',
      }, {
        userName: '幸福中奖者',
        desc: 'CD',
        balance: 3124.00,
        teamBanlance: '******',
        rebate: '3.4%',
        status: '在线',
        lastLogin: '2016/10/14, 08:23',
        loginIP: 'ip:21141564',
      }, {
        userName: '幸福中奖者',
        desc: 'CD',
        balance: 3124.00,
        teamBanlance: '******',
        rebate: '3.4%',
        status: '在线',
        lastLogin: '2016/10/14, 08:23',
        loginIP: 'ip:21141564',
      }, {
        userName: '幸福中奖者',
        desc: 'CD',
        balance: 3124.00,
        teamBanlance: '******',
        rebate: '3.4%',
        status: '在线',
        lastLogin: '2016/10/14, 08:23',
        loginIP: 'ip:21141564',
      }, {
        userName: '幸福中奖者',
        desc: 'CD',
        balance: 3124.00,
        teamBanlance: '******',
        rebate: '3.4%',
        status: '在线',
        lastLogin: '2016/10/14, 08:23',
        loginIP: 'ip:21141564',
      }, {
        userName: '幸福中奖者',
        desc: 'CD',
        balance: 3124.00,
        teamBanlance: '******',
        rebate: '3.4%',
        status: '在线',
        lastLogin: '2016/10/14, 08:23',
        loginIP: 'ip:21141564',
      },
    ];

    return (
      <div className="container manage">
        <NavBar iconName={false} leftContent={<Link to="/">
            <i className="iconfont left-icon">&#xe69f;</i>
        </Link>}
          rightContent={<Link to="/addlevel">添加下级</Link>}>下级管理</NavBar>
        <SearchBar placeholder="搜索用户名"></SearchBar>
          <Flex className="select-group">
            <Flex.Item>
              <List>
                <Picker extra="全部" data={userTypeList}
                  {...getFieldProps('userType')}>
                  <Item arrow="down">用户类型:</Item>
                </Picker>
              </List>
            </Flex.Item>
            <Flex.Item>
              <List>
                <Picker extra="全部" data={onlineStatusList}
                  {...getFieldProps('onlineStatus')}>
                  <Item arrow="down">在线状态:</Item>
                </Picker>
              </List>
            </Flex.Item>
          </Flex>
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
        <div className="user-list">
          <Flex className="table-head">
            <Flex.Item>用户名</Flex.Item>
            <Flex.Item>备注</Flex.Item>
            <Flex.Item>余额</Flex.Item>
            <Flex.Item>团队余额</Flex.Item>
            <Flex.Item>返点</Flex.Item>
            <Flex.Item>状态</Flex.Item>
            <Flex.Item>注册时间<br/>上次登录时间</Flex.Item>
            <Flex.Item>注册IP<br/>登录IP</Flex.Item>
            <Flex.Item>操作</Flex.Item>
          </Flex>
          <div className="table-body">
            {
              data.map((d, i) => (
                <Flex key={i}>
                  <Flex.Item>{d.userName}</Flex.Item>
                  <Flex.Item>{d.desc}</Flex.Item>
                  <Flex.Item>{d.balance}</Flex.Item>
                  <Flex.Item>{d.teamBanlance}</Flex.Item>
                  <Flex.Item>{d.rebate}</Flex.Item>
                  <Flex.Item>{d.status}</Flex.Item>
                  <Flex.Item>{d.lastLogin}</Flex.Item>
                  <Flex.Item>{d.loginIP}</Flex.Item>
                  <Flex.Item className="operation">调整</Flex.Item>
                </Flex>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}
export default Manage = createForm()(Manage);
