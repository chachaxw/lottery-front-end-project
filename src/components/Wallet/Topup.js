import React, { Component } from 'react';
import { NavBar, Icon, List, Tabs, Button, Modal,
  SegmentedControl, WingBlank, InputItem, Picker } from 'antd-mobile';
import { Link } from 'react-router';
import { createForm } from 'rc-form';

import './style.scss';

const Item = List.Item;
const alert = Modal.alert;
const TabPane = Tabs.TabPane;

class Topup extends Component {

  state = {
    index: 0,
    visible: false,
    visible1: false,
  }

  onChange = (e) => {
    this.setState({
      index: e.nativeEvent.selectedSegmentIndex,
    });
  }

  onValueChange = (value) => {
    console.log(value);
  }

  close = () => {
    this.setState({
      visible: false,
      visible1: false,
    });
  }

  confirm = () => {
    console.log("确认充值");
    this.setState({
      visible: false,
    });
  }

  successed =() => {
    this.setState({
      visible1: false,
    });
  }

  render() {
    const { getFieldProps, getFieldValue } = this.props.form;
    const bankList = [
      {
        label: '中国银行',
        value: 0,
      }, {
        label: '工商银行',
        value: 1,
      }, {
        label: '招商银行',
        value: 2,
      }, {
        label: '平安银行',
        value: 3,
      },
    ];

    return (
      <div className="container topup">
        <NavBar iconName={false} leftContent={<Link to={`/wallet`}>
            <i className="iconfont left-icon">&#xe69f;</i>
        </Link>} rightContent={<Link to={`/topuprecord`}>充值记录</Link>}>充值</NavBar>
        <Tabs>
          <TabPane tab="网银充值" key="1">
            <List style={{marginTop: 30}}>
              <Picker extra="选择银行" data={bankList} cols={1}
                {...getFieldProps('bankName')}>
                <Item arrow="down">开户银行:</Item>
              </Picker>
              <InputItem
                labelNumber={1}
                autoComplete="off"
                {...getFieldProps('money',{
                  trigger: 'onBlur',
                  rules: [{
                    required: true,
                    message: '金额不能为空'
                  }],
                })}>
                充值金额:
              </InputItem>
            </List>
            <List style={{marginTop: 15}}>
              <InputItem
                type="password"
                labelNumber={1}
                autoComplete="off"
                {...getFieldProps('password',{
                  trigger: 'onBlur',
                  rules: [{
                    required: true,
                    message: '密码不能为空'
                  }],
                })}
                placeholder="">
                安全密码:
              </InputItem>
            </List>
            <div style={{textAlign: 'center'}}>
              <Button className="confirm-btn">提交</Button>
            </div>
          </TabPane>
          <TabPane tab="网银转账" key="2">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '2rem' }}>
              网银转账内容
            </div>
          </TabPane>
          <TabPane tab="微信/支付宝" key="3">
            <WingBlank style={{marginTop: 40}}>
              <SegmentedControl values={['支付宝', '微信']}
                onChange={this.onChange}
                onValueChange={this.onValueChange}/>
            </WingBlank>
            { this.state.index == 0 &&
              <div className="qrcode-img">
                <p>扫一扫，完成支付</p>
                <img src={require('../../static/images/wallet/qrcode.jpg')} />
              </div>
              ||
              <div className="qrcode-img">
                <p>扫一扫，完成支付</p>
                <img src={require('../../static/images/wallet/qrcode.jpg')} />
              </div>
            }
          </TabPane>
        </Tabs>
        <div className="mask" style={{display: this.state.visible ? 'block':'none'}}>
          <div className="alert-modal">
            <div className="alert-modal-head">充值确认</div>
            <div className="alert-modal-body">
              <p className="content">充值银行：<span>中国工商银行</span></p>
              <p className="content">充值金额：
                <span className="orange-text">{getFieldValue('money')}</span>
              </p>
              <p className="tips">需要银行卡：可使用任何一张中国银行卡进行汇款</p>
            </div>
            <div className="alert-button-group">
              <button onClick={() => this.close()}>取&nbsp;&nbsp;&nbsp;&nbsp;消</button>
              <button className="primary" onClick={this.confirm}>确认充值</button>
            </div>
          </div>
        </div>
        <div className="mask" style={{display: this.state.visible1 ? 'block':'none'}}>
          <div className="alert-modal">
            <div className="alert-modal-head">是否成功充值</div>
            <div className="alert-modal-body">
              <p className="content" style={{textAlign: 'center'}}>如果没有成功，则再重试一次</p>
            </div>
            <div className="alert-button-group">
              <button onClick={() => this.close()}>失败了</button>
              <button className="primary" onClick={this.successed}>已成功</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Topup = createForm()(Topup);
