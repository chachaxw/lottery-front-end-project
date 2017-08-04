import React, { Component } from 'react';
import { TabBar, Icon } from 'antd-mobile';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import HomePage from '../Home/HomePage';
import DataPage from '../Data/DataPage';
import PersonPage from '../Person/PersonPage';
import WalletPage from '../Wallet/WalletPage';

import './style.scss';

class LayoutFrame extends Component {

  state = {
    selectedTab: this.getLink()||'home',
    hidden: false,
  }

  getLink(){
    let links = window.location.hash.match(/(\w+)/g);
    if (!links) return null;
    return links[0].toLowerCase();
  }

  linkTo(link) {
    this.context.router.push(link);
    this.setState({
      selectedTab: link
    });
  }

  renderContent(page) {
    switch (page) {
      case 'home':
        return (
          <HomePage></HomePage>
        );
        break;
      case 'data':
        return (
          <DataPage></DataPage>
        );
        break;
      case 'person':
        return (
          <PersonPage></PersonPage>
        );
        break;
      case 'wallet':
        return (
          <WalletPage></WalletPage>
        );
        break;
      default:
        return (
          <HomePage></HomePage>
        );

    };
  }

  render() {

    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        hidden={this.state.hidden}
      >
        <TabBar.Item
          title="首页"
          key="home"
          icon={<Icon type="home" />}
          selectedIcon={<Icon type="home" />}
          selected={this.state.selectedTab === 'home'}
          onPress={() => {
            this.linkTo('home')
          }}
          data-seed="logId"
        >
          {this.renderContent('home')}
        </TabBar.Item>
        <TabBar.Item
          icon={<i className="iconfont" style={{fontSize: '38px'}}>&#xe64e;</i>}
          selectedIcon={<i className="iconfont" style={{fontSize: '38px',color: '#33a3f4'}}>&#xe64e;</i>}
          title="数据统计"
          key="data"
          selected={this.state.selectedTab === 'data'}
          onPress={() => {
            this.linkTo('data')
          }}
          data-seed="logId1"
        >
          {this.renderContent('data')}
        </TabBar.Item>
        <TabBar.Item
          icon={<i className="iconfont" style={{fontSize: '38px'}}>&#xe63b;</i>}
          selectedIcon={<i className="iconfont" style={{fontSize: '38px', color: '#33a3f4'}}>&#xe63b;</i>}
          title="个人管理"
          key="person"
          selected={this.state.selectedTab === 'person'}
          onPress={() => {
            this.linkTo('person')
          }}
        >
          {this.renderContent('person')}
        </TabBar.Item>
        <TabBar.Item
          icon={<i className="iconfont" style={{fontSize: '38px'}}>&#xe665;</i>}
          selectedIcon={<i className="iconfont" style={{fontSize: '38px',color: '#33a3f4'}}>&#xe665;</i>}
          title="我的钱包"
          key="wallet"
          selected={this.state.selectedTab === 'wallet'}
          onPress={() => {
            this.linkTo('wallet')
          }}
        >
          {this.renderContent('wallet')}
        </TabBar.Item>
      </TabBar>
    )
  }
}
LayoutFrame.contextTypes = {
  router: React.PropTypes.object,
}
export default LayoutFrame;
