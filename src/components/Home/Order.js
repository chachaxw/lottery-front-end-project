import React, { Component } from 'react';
import { NavBar, Icon, Flex, List, InputItem, SwipeAction, Button, Tabs, Checkbox} from 'antd-mobile';
import { Link } from 'react-router';
import moment from 'moment';
import { createForm } from 'rc-form';

import './style.scss';

const Item = List.Item;
const TabPane = Tabs.TabPane;
const orderList = [
  {
    id: 1,
    orderType: '五星，直选复式',
    orderPrice: 100,
    noteNum: 5,
    times: 1,
    numberList: ['07', '08', '10', '15', '20', '22', '07', '15', '21', '26', '30'],
  }, {
    id: 2,
    orderType: '五星，直选复式',
    orderPrice: 100,
    noteNum: 5,
    times: 1,
    numberList: ['07', '08', '10', '15', '20', '22', '07', '15', '21', '26', '30'],
  }, {
    id: 3,
    orderType: '五星，直选复式',
    orderPrice: 100,
    noteNum: 5,
    times: 1,
    numberList: ['07', '08', '10', '15', '20', '22', '07', '15', '21', '26', '30'],
  }, {
    id: 4,
    orderType: '五星，直选复式',
    orderPrice: 100,
    noteNum: 5,
    times: 1,
    numberList: ['07', '08', '10', '15', '20', '22', '07', '15', '21', '26', '30'],
  }, {
    id: 5,
    orderType: '五星，直选复式',
    orderPrice: 100,
    noteNum: 5,
    times: 1,
    numberList: ['07', '08', '10', '15', '20', '22', '07', '15', '21', '26', '30'],
  }, {
    id: 6,
    orderType: '五星，直选复式',
    orderPrice: 100,
    noteNum: 5,
    times: 1,
    numberList: ['07', '08', '10', '15', '20', '22', '07', '15', '21', '26', '30'],
  }, {
    id: 7,
    orderType: '五星，直选复式',
    orderPrice: 100,
    noteNum: 5,
    times: 1,
    numberList: ['07', '08', '10', '15', '20', '22', '07', '15', '21', '26', '30'],
  },
];
const addList = [
  {
    number: 12814512,
    price: '12.00',
    date: '2017-01-01  13:00:00',
  }, {
    number: 12814512,
    price: '12.00',
    date: '2017-01-01  13:00:00',
  }, {
    number: 12814512,
    price: '12.00',
    date: '2017-01-01  13:00:00',
  }, {
    number: 12814512,
    price: '12.00',
    date: '2017-01-01  13:00:00',
  }, {
    number: 12814512,
    price: '12.00',
    date: '2017-01-01  13:00:00',
  }, {
    number: 12814512,
    price: '12.00',
    date: '2017-01-01  13:00:00',
  }, {
    number: 12814512,
    price: '12.00',
    date: '2017-01-01  13:00:00',
  }, {
    number: 12814512,
    price: '12.00',
    date: '2017-01-01  13:00:00',
  }, {
    number: 12814512,
    price: '12.00',
    date: '2017-01-01  13:00:00',
  }, {
    number: 12814512,
    price: '12.00',
    date: '2017-01-01  13:00:00',
  }, {
    number: 12814512,
    price: '12.00',
    date: '2017-01-01  13:00:00',
  }, {
    number: 12814512,
    price: '12.00',
    date: '2017-01-01  13:00:00',
  }, {
    number: 12814512,
    price: '12.00',
    date: '2017-01-01  13:00:00',
  }, {
    number: 12814512,
    price: '12.00',
    date: '2017-01-01  13:00:00',
  }, {
    number: 12814512,
    price: '12.00',
    date: '2017-01-01  13:00:00',
  }, {
    number: 12814512,
    price: '12.00',
    date: '2017-01-01  13:00:00',
  }, {
    number: 12814512,
    price: '12.00',
    date: '2017-01-01  13:00:00',
  }, {
    number: 12814512,
    price: '12.00',
    date: '2017-01-01  13:00:00',
  },
];

/* 订单列表数据处理方法，添加toggled属性 */
function handleData(data) {
  for (let i = 0, l = data.length; i < l; i++) {
    data[i].toggled = false;
  }
  return data;
}

const list = handleData(orderList);

class Order extends Component {

  state = {
    toggled: false,
    toggleIndex: '',
    visible: false,
    visibleMenu: false,
    timer: 10000,
  };

  componentDidMount = () => {
    this.timeCounter();
  }

  handleMenuVisible = () => {
    this.setState({
      visibleMenu: !this.state.visibleMenu,
    });
  }

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

  addOrder = () => {
    this.setState({
      toggled: !this.state.toggled,
    });
  }

  moreNumber = (index) => {
    console.log(index);
    list[index].toggled = !list[index].toggled;
    console.log(list[index].toggled);
  }

  randomSelect = () => {
    console.log('机选一注');
  }

  submitOrder = () => {
    this.setState({
      visible: true,
    });
  }

  close = () => {
    this.setState({
      visible: false,
    });
  }

  confirm = () => {
    this.setState({
      visible: false,
    });
    console.log("确认投注");
  }


  render() {
    const { getFieldProps } = this.props.form;

    const money = '121,698,111';
    const term = '1920期';
    const totalTerm = 10;
    const sumPrice = '320';
    const surplus = '4471.5';

    return (
      <div className="container order">
        <NavBar iconName={false} leftContent={<Link to="/">
          <i className="iconfont left-icon">&#xe69f;</i>
        </Link>} rightContent={
            <div className="popover-menu">
              <Icon type="ellipsis" onClick={this.handleMenuVisible}/>
              <ul className="menu-list" style={{display: this.state.visibleMenu ? 'block':'none'}}>
                <li><Link to="/">玩法介绍</Link></li>
                <li><Link to="/lotteryrecord">历史开奖</Link></li>
                <li><Link to="/topup">充值</Link></li>
                <li><Link to="/transfer">转账</Link></li>
                <li><Link to="/withdraw">提现</Link></li>
              </ul>
            </div>
            }>重庆时时彩<br/><span>{term}</span></NavBar>
        <List className="order-info">
          <Flex>
            <Flex.Item>
              <Item>开奖倒计时: <span className="time">{moment(this.state.timer).format('mm:ss')}</span></Item>
            </Flex.Item>
            <Flex.Item>
              <Item>奖金池余额: <span>¥ {money}</span></Item>
            </Flex.Item>
          </Flex>
        </List>
        <List className="order-list">
          {
            list.map((d,i) => (
              <SwipeAction style={{ backgroundColor: 'gray' }} autoClose key={i}
                right={[
                {
                  text: '取消',
                  onPress: () => console.log('取消'),
                  style: { backgroundColor: '#ddd', color: 'white' },
                },
                {
                  text: '删除',
                  onPress: () => console.log('删除', i),
                  style: { backgroundColor: '#f00', color: 'white' },
                },
              ]}>
                <Item>
                  <Flex>
                    <Flex.Item className="order-type">{d.orderType}</Flex.Item>
                    <Flex.Item className="order-multiply">
                      <span>{d.noteNum}注</span>
                      <span>{d.times}倍</span>
                      <span>1440/720(18%)</span>
                    </Flex.Item>
                  </Flex>
                  <Flex className="number-list">
                    <Flex.Item onClick={() => this.moreNumber(i)}>
                      {
                        d.numberList.map((j,k) => (
                          <span key={k}>{j}</span>
                        ))
                      }
                      <Icon type="down" />
                    </Flex.Item>
                    <Flex.Item className="price">{d.orderPrice} 元</Flex.Item>
                  </Flex>
                </Item>
                <div className="more-number"
                  style={{display: d.toggled ? 'block' : 'none'}}>
                  <div>07  08  10  15  20  22  07  15  21  26  30</div>
                  <div>07  08  10  15  20  22  07  15  21  26  30</div>
                </div>
              </SwipeAction>
            ))
          }
        </List>
        <div className="order-bottom" style={{height: this.state.toggled ? '100%' : '180px'}}>
          <div className="add-order" onClick={this.addOrder}>
            我要追号
            <Icon style={{float: 'right'}} type="up" />
            <span className="stop-add"><Checkbox>中奖后终止追号</Checkbox></span>
          </div>
          <Flex className="add-order-list" align="start">
            <Tabs defaultActiveKey="1" animated={false} style={{width: '100%'}}>
              <TabPane tab="利润率追号" key="1">
                <div className="tab1-content">
                  <Flex>
                    <Flex.Item>追号期数<InputItem {...getFieldProps('termNumber')}/></Flex.Item>
                    <Flex.Item>总期数<span>{totalTerm}</span>期</Flex.Item>
                    <Flex.Item>追号总金额:<span className="orange-text">¥320.00</span></Flex.Item>
                  </Flex>
                  <Flex style={{paddingTop: 0}}>
                    <Flex.Item>追号计划：起始倍数<InputItem {...getFieldProps('startNumber')}/></Flex.Item>
                    <Flex.Item>最低收益<InputItem {...getFieldProps('minProfit')}/>%</Flex.Item>
                    <Flex.Item>追号期数<InputItem {...getFieldProps('termNumber')}/></Flex.Item>
                  </Flex>
                  <ul className="list">
                    {
                      addList.map((d,i) => (
                        <li key={i}>
                          <Flex>
                            <Flex.Item><Checkbox />{d.number}</Flex.Item>
                            <Flex.Item style={{maxWidth: 140}}><InputItem {...getFieldProps('times')}/>倍</Flex.Item>
                            <Flex.Item style={{maxWidth: 140,textAlign: 'center'}}>¥{d.price}</Flex.Item>
                            <Flex.Item>{d.date}</Flex.Item>
                          </Flex>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </TabPane>
              <TabPane tab="同倍追号" key="2">
                <div>
                   选项卡二内容
                </div>
              </TabPane>
              <TabPane tab="翻倍追号" key="3">
                <div>
                   选项卡三内容
                </div>
              </TabPane>
            </Tabs>
          </Flex>
          <Flex className="add-order-info">
            <Flex.Item>
              <div className="sum-money">总金额 <span>¥{sumPrice}</span></div>
              <div className="surplus-money">账户余额 <span>¥{surplus}</span></div>
            </Flex.Item>
            <Flex.Item className="button-group">
              <Button inline onClick={this.randomSelect}>机选一注</Button>
              <Button inline onClick={this.submitOrder}>投注</Button>
            </Flex.Item>
          </Flex>
        </div>
        <div className="mask" style={{display: this.state.visible ? 'block':'none'}}>
          <div className="alert-modal">
            <div className="alert-modal-head">确认投注</div>
            <div className="alert-modal-body">
              <p className="content">您当前投注25注</p>
              <p className="tips">总金额<span>¥320</span></p>
            </div>
            <div className="alert-button-group">
              <button onClick={this.close}>取&nbsp;&nbsp;&nbsp;&nbsp;消</button>
              <button className="primary" onClick={this.confirm}>确认投注</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default createForm()(Order);
