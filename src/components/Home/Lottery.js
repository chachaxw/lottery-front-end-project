import React, { Component } from 'react';
import { NavBar, Icon, Flex, Popover, Tag, List, InputItem, Menu, Popup,
  WingBlank, SegmentedControl, Button, Tabs, Picker, Checkbox } from 'antd-mobile';
import { Link } from 'react-router';
import moment from 'moment';
import { createForm } from 'rc-form';

import './style.scss';

const Item = List.Item;
const data = [
  {
    value: '1',
    label: '时时彩',
    children: [
      {
        label: '重庆时时彩',
        value: '1',
      },
      {
        label: '山东时时彩',
        value: '2',
      }, {
        label: '广东时时彩',
        value: '3',
      },
    ]
  }, {
    value: '2',
    label: '11选5',
    children: [
      {
        label: '重庆11选5',
        value: '1',
      },
      {
        label: '山东11选5',
        value: '2',
      }, {
        label: '广东11选5',
        value: '3',
      },
    ]
  }, {
    value: '3',
    label: '时时彩',
    children: [
      {
        label: '重庆时时彩',
        value: '1',
      },
      {
        label: '山东时时彩',
        value: '2',
      }, {
        label: '广东时时彩',
        value: '3',
      },
    ]
  },
];
const numberList = [
  ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
    '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23',
    '24', '25', '26', '27', '28', '29', '30'],
  ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
    '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23',
    '24', '25', '26', '27', '28', '29', '30'],
  ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
    '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23',
    '24', '25', '26', '27', '28', '29', '30']
];

class Lottery extends Component{
  state = {
    timer: 10000,
    index: 0,
    visible: false,
    toggled: false,
    tips: false,
    toggleMenu: false,
    menuVal: '重庆时时彩',
  }

  onChange = (e) => {
    this.setState({
      index: e.nativeEvent.selectedSegmentIndex,
    });
  }

  handleVisibleChange = () => {
    this.setState({
      visible: !this.state.visible,
    });
  }

  handleToggle = (i) => {
    console.log(i);
  }

  onMenuChange = (value) => {
    let label = '';
    data.forEach(dataItem => {
      if (dataItem.value === value[0]) {
        if (dataItem.children && value[1]) {
          dataItem.children.forEach(cItem => {
            if (cItem.value === value[1]) {
              label = cItem.label;
            }
          });
        }
      }
    });
    Popup.hide();
    this.setState({
      menuVal: label,
    });
  }

  /* navbar 菜单 */
  handleToggleMenu = (e) => {
    e.preventDefault();
    Popup.show(<Menu data={data} onChange={this.onMenuChange}/>);
  }

  checkBoxChange = (index) => {
    console.log('checkbox', index);
  }

  /* 冷热/遗漏 切换 */
  switchWay = (e) => {
    console.log(e.nativeEvent.selectedSegmentIndex);
  }

  /* 清除重复号 */
  deleteRepeatNumber = () => {
    console.log("删除重复号");
  }

  clearAll = () => {
    console.log("清空");
  }

  /* 加入订单 */
  addToOrder = () => {
    console.log('加入订单');
  }

  /* 选择好了 */
  selectOk = () => {
    console.log('选择好了');
  }

  componentDidMount = () => {
    this.timeCounter();
  }

  /* 开奖倒计时 */
  timeCounter = () => {
    const time = setInterval(() => {
      if (!this.state.timer <= 0) {
        this.setState({
          timer: this.state.timer - 1000,
        });
        return;
      }
      return clearInterval(time);
    }, 1000);
  }

  render() {
    const { getFieldProps } = this.props.form;
    const money = '121,698,111';
    const term = '1920';
    const result = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];
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
    const checkboxGroup = [
      {
        label: '万位',
        value: 'myriabit',
      },
      {
        label: '千位',
        value: 'thousand',
      },
      {
        label: '百位',
        value: 'hundreds',
      },
      {
        label: '十位',
        value: 'decade',
      },
      {
        label: '个位',
        value: 'unit',
      },
    ];

    return (
      <div className="container lottery">
        <NavBar iconName={false} leftContent={<Link to="/">
          <i className="iconfont left-icon">&#xe69f;</i>
        </Link>} rightContent={
            <div className="popover-menu">
              <Icon type="ellipsis" onClick={this.handleVisibleChange}/>
              <ul className="menu-list" style={{display: this.state.visible ? 'block':'none'}}>
                <li><Link to="/">玩法介绍</Link></li>
                <li><Link to="/lotteryrecord">历史开奖</Link></li>
                <li><Link to="/topup">充值</Link></li>
                <li><Link to="/transfer">转账</Link></li>
                <li><Link to="/withdraw">提现</Link></li>
              </ul>
            </div>
            }>
          <div onClick={this.handleToggleMenu}>{this.state.menuVal}<Icon type="down" /></div>
          <span>{term}期</span>
        </NavBar>
        <List className="order-info">
          <Flex>
            <Flex.Item>
              <Item>开奖倒计时:
                <span className="time">
                  {moment(this.state.timer).format('mm:ss')}
                </span>
              </Item>
            </Flex.Item>
            <Flex.Item>
              <Item>奖金池余额: <span>¥ {money}</span></Item>
            </Flex.Item>
          </Flex>
        </List>
        <Flex className="history-lottery" align="top">
          <Flex.Item style={{maxWidth: 150, marginTop: 8}}>上期开奖号码:</Flex.Item>
          <Flex.Item className="number-list">
            {
              result.map((d, i) => (
                <span key={i} className="number-item">{d}</span>
              ))
            }
          </Flex.Item>
        </Flex>
        <WingBlank>
          <SegmentedControl style={{marginTop: 20, marginBottom: 20}}
            values={['常规玩法', '任选玩法']}
            onChange={this.onChange}
            selectedIndex={this.state.index}
          />
        </WingBlank>
        { this.state.index == 0 &&
          <div className="play1">
            <Flex className="select-group">
              <Flex.Item style={{maxWidth: 280}}>
                <List>
                  <Picker extra="四星" data={lotteryList} cols={1}
                    {...getFieldProps('lotteryType')}>
                    <Item arrow="down"></Item>
                  </Picker>
                </List>
              </Flex.Item>
              <Flex.Item>
                <List>
                  <Picker extra="直选复式" data={playList} cols={1}
                    {...getFieldProps('playWay')}>
                    <Item arrow="down"></Item>
                  </Picker>
                </List>
              </Flex.Item>
            </Flex>
            <Flex className="lottery-tips">
              <Flex.Item style={{paddingLeft: 8,paddingRight: 8}}>
                从万位，千位，百位，个位选一个号码组成一注
                <Tag small className="tag">范例</Tag>
              </Flex.Item>
              <Flex.Item style={{maxWidth: 160}}>
                <SegmentedControl values={['冷热', '遗漏']} onChange={this.switchWay}/>
              </Flex.Item>
            </Flex>
            <List className="group-list">
              {
                numberList.map((d, i) => (
                  <Flex align="start" className="group-item" key={i}>
                    <div className="item-left">单式组选<br/>95120</div>
                    <Flex.Item className="item-middle">
                      {
                        d.map((k, j) => (
                          <span className="number" key={j}>{k}</span>
                        ))
                      }
                    </Flex.Item>
                    <div className="item-right">
                      <span className="toggle-btn" onClick={() => this.handleToggle(i)}>+</span>
                      <ul>
                        <li>大</li>
                        <li>小</li>
                        <li>全</li>
                        <li>奇</li>
                        <li>偶</li>
                        <li>清</li>
                      </ul>
                    </div>
                  </Flex>
                ))
              }
            </List>
          </div>
          ||
          <div className="play2">
            <Flex className="select-group">
              <Flex.Item style={{maxWidth: 280}}>
                <List>
                  <Picker extra="四星" data={lotteryList} cols={1}
                    {...getFieldProps('lotteryType1')}>
                    <Item arrow="down"></Item>
                  </Picker>
                </List>
              </Flex.Item>
              <Flex.Item>
                <List>
                  <Picker extra="直选复式" data={playList} cols={1}
                    {...getFieldProps('playWay1')}>
                    <Item arrow="down"></Item>
                  </Picker>
                </List>
              </Flex.Item>
            </Flex>
            <Flex className="lottery-tips">
              <Flex.Item style={{paddingLeft: 8,paddingRight: 8}}>
                从万位，千位，百位，个位选一个号码组成一注
                <Tag small className="tag">范例</Tag>
              </Flex.Item>
              <Flex.Item style={{maxWidth: 160}}>
                <SegmentedControl values={['冷热', '遗漏']} onChange={this.switchWay}/>
              </Flex.Item>
            </Flex>
            <Flex className="checkbox-list">
              {
                checkboxGroup.map((d, i) => (
                  <Checkbox {...getFieldProps(d.value)} onChange={() => this.checkBoxChange(i)} key={i}>{d.label}</Checkbox>
                ))
              }
            </Flex>
            <Flex className="tips">
              温馨提示：你选择了2个位置，系统自动根据位置组成1个方案
            </Flex>
            <div className="textarea">
              <textarea {...getFieldProps('number')}></textarea>
              <Flex>
                <Flex.Item>每一个号码之间请用一个空格[ ]，逗号[,]或者分号[;]隔开。</Flex.Item>
                <Flex.Item className="button-group">
                  <Button inline onClick={this.deleteRepeatNumber}>删除重复号</Button>
                  <Button inline onClick={this.clearAll}>清空</Button>
                </Flex.Item>
              </Flex>
            </div>
          </div>
        }
        <Flex className="lottery-bottom">
          <Flex.Item className="lottery-money">
            投注金额
            <InputItem labelNumber={1} {...getFieldProps('money')}>¥</InputItem>
          </Flex.Item>
          <Flex.Item className="button-group">
            <button onClick={this.addToOrder}>加入订单</button>
            <button onClick={this.selectOk}>选好了</button>
          </Flex.Item>
        </Flex>
      </div>
    )
  }
}
export default createForm()(Lottery);
