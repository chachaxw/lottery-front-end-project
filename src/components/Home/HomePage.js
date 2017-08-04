import React, { Component } from 'react';
import { Carousel, NavBar, Icon } from 'antd-mobile';
import { Link } from 'react-router';

import './style.scss';

export default class HomePage extends Component {

  render() {
    const lotteryList = [];

    return (
      <div className="container home">
        <NavBar iconName={false} leftContent={<Link to="/info">平台介绍</Link>}
          rightContent={<Link to="/message"><i className="iconfont">&#xe67f;</i></Link>}>
          CAIPIAO
        </NavBar>
        <Carousel className="my-carousel" autoplay swiping={true} infinite>
          <Link to="/">
            <div className="v-item">
              <img src={require('../../static/images/home/banner@750.jpg')} />
            </div>
          </Link>
          <Link to="/">
            <div className="v-item">
              <img src={require('../../static/images/home/banner@750.jpg')} />
            </div>
          </Link>
          <Link to="/">
            <div className="v-item">
              <img src={require('../../static/images/home/banner@750.jpg')} />
            </div>
          </Link>
          <Link to="/">
            <div className="v-item">
              <img src={require('../../static/images/home/banner@750.jpg')} />
            </div>
          </Link>
        </Carousel>
        <div className="message">
          <i className="iconfont"></i>
          <span>公告：</span>
          <Link to="/">重庆时时彩上线</Link>
        </div>
        <div className="lottery-list">
          <ul>
            <li>
              <Link to="/lottery">
                <div className="lottery-icon">
                  <img src={require('../../static/images/home/双色球@2x.png')}/>
                </div>
                <div className="lottery-title">
                  <h3>福彩双色球</h3>
                  <p>支持福彩事业</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/lottery">
                <div className="lottery-icon">
                  <img src={require('../../static/images/home/体彩@2x.png')}/>
                </div>
                <div className="lottery-title">
                  <h3>体彩6+1</h3>
                  <p>2元赢取500万</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/lottery">
                <div className="lottery-icon">
                  <img src={require('../../static/images/home/时时彩@2x.png')}/>
                </div>
                <div className="lottery-title">
                  <h3>时时彩</h3>
                  <p>大奖不停，时时有</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/lottery">
                <div className="lottery-icon">
                  <img src={require('../../static/images/home/11选5@2x.png')}/>
                </div>
                <div className="lottery-title">
                  <h3>十一选五</h3>
                  <p>热门彩钟</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/lottery">
                <div className="lottery-icon">
                  <img src={require('../../static/images/home/快乐十分@2x.png')}/>
                </div>
                <div className="lottery-title">
                  <h3>快乐十分</h3>
                  <p>是火爆的彩种</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/lottery">
                <div className="lottery-icon">
                  <img src={require('../../static/images/home/快乐彩@2x.png')}/>
                </div>
                <div className="lottery-title">
                  <h3>快乐彩</h3>
                  <p>快乐购彩</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/lottery">
                <div className="lottery-icon">
                  <img src={require('../../static/images/home/bingo@2x.png')}/>
                </div>
                <div className="lottery-title">
                  <h3>Bingo</h3>
                  <p>Keno</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/lottery">
                <div className="lottery-icon">
                  <img src={require('../../static/images/home/快乐十分@2x.png')}/>
                </div>
                <div className="lottery-title">
                  <h3>快乐十分</h3>
                  <p>是火爆的彩种</p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
