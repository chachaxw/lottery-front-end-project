import React, { Component } from 'react';
import { NavBar, Icon, Flex, SearchBar, List, Checkbox} from 'antd-mobile';
import { Link } from 'react-router';
import { createForm } from 'rc-form';

import './style.scss';

const Item = Flex.Item;
const CheckboxItem = Checkbox.CheckboxItem;

class TopupRecord extends Component {
  state = {
    visible: false,
  }

  onChange = (val) => {
    console.log(val);
  }

  deleteRecord = (index) => {
    console.log(index);
  }

  handleMenuVisible = () => {
    this.setState({
      visible: !this.state.visible,
    });
  }

  render() {
    const { getFieldProps } = this.props.form;
    const data = [
      {
        id: 0,
        date: '2016-10-11',
        money: '3260.00',
        status: '已完成',
      }, {
        id: 1,
        date: '2016-10-11',
        money: '3260.00',
        status: '已完成',
      }, {
        id: 2,
        date: '2016-10-11',
        money: '3260.00',
        status: '已完成',
      }, {
        id: 3,
        date: '2016-10-11',
        money: '3260.00',
        status: '已完成',
      }, {
        id: 4,
        date: '2016-10-11',
        money: '3260.00',
        status: '已完成',
      }, {
        id: 5,
        date: '2016-10-11',
        money: '3260.00',
        status: '已完成',
      },
    ];

    return (
      <div className="container topup-record">
        <NavBar iconName={false} leftContent={<Link to="/wallet">
            <i className="iconfont left-icon">&#xe69f;</i>
        </Link>} rightContent={<Icon type="ellipsis" />}>充值记录</NavBar>
        <SearchBar placeholder="期号搜索"></SearchBar>
        <List>
          <Flex className="list-title">
            <Item className="select-all"><span>全选</span>取消</Item>
            <Item className="date">时间</Item>
            <Item className="money">具体金额</Item>
            <Item className="status">
              <span onClick={this.handleMenuVisible}>状态<Icon type="down"/></span>
              <ul className="status-menu-list"
                style={{display: this.state.visible ? 'block':'none'}}>
                <li><Checkbox {...getFieldProps('all')}/>全&nbsp;&nbsp;&nbsp;&nbsp;部</li>
                <li><Checkbox {...getFieldProps('successed')}/>已成功</li>
                <li><Checkbox {...getFieldProps('canceled')}/>已取消</li>
                <li><Checkbox {...getFieldProps('transfered')}/>转&nbsp;&nbsp;&nbsp;&nbsp;账</li>
                <li className="button-group">
                  <Flex>
                    <Item className="confirm-btn" onClick={this.handleMenuVisible}>确认</Item>
                    <Item onClick={this.handleMenuVisible}>取消</Item>
                  </Flex>
                </li>
              </ul>
            </Item>
            <Item className="operation">操作</Item>
          </Flex>
          {
            data.map((item, i) => (
              <Flex className="list-item" key={i}>
                <Item className="select"><Checkbox onChange={(e) => this.onChange(e.target.checked)} /></Item>
                <Item className="date">{item.date}</Item>
                <Item className="money">{item.money}</Item>
                <Item className="status"><span className="badge"></span>{item.status}</Item>
                <Item className="operation" onClick={() => this.deleteRecord(i)}>删除</Item>
              </Flex>
            ))
          }
        </List>
      </div>
    )
  }
}
export default TopupRecord = createForm()(TopupRecord);
