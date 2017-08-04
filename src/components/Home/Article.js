import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { Link } from 'react-router';

import './style.scss';

export default class Message extends Component {

  render() {
    const article = {
      title: '转账帮助',
      date: '2016.01.24 10:16',
      sender: '彩票平台助手',
      content: '',
    }

    return (
      <div className="container article">
        <NavBar iconName={false} leftContent={<Link to="/">
            <i className="iconfont left-icon">&#xe69f;</i>
        </Link>} rightContent={<Icon type="ellipsis" />}>图文混排</NavBar>
        <div className="content">
          <div className="article-head">
            <h1>{article.title}</h1>
            <p className="article-info">
              {article.sender}<span>{article.date}</span>
            </p>
          </div>
          <div className="article-content">
            <p>
              提供的网银充值是安全、快捷、实时的充值方式，
              也是我们建议阁下首选的充值方式。
              以下将会为阁下说明这个简单又便捷的充值方法:
            </p>
            <br/>
            <img src="https://zos.alipayobjects.com/rmsportal/AiyWuByWklrrUDlFignR.png" />
            <br/>
            <p>
              网银充值最低金额为 ￥100 RMB，最高为 ￥40000 RMB，
              若阁下之充值额超过 ￥40000 RMB，烦请以多笔充值的方式
              充值。若阁下对充值操作有任何疑问，烦请与我们在缐客服联
              系，有关特大额度的充值，我们将为阁下作特别安排。祝您在
              豪龙娱乐游戏愉快，旗开得胜！
            </p>
            <br/>
            <img src="https://zos.alipayobjects.com/rmsportal/TekJlZRVCjLFexlOCuWn.png" />
            <br/>
            <p>
              若阁下对充值操作有任何疑问，烦请与我们在缐客服联系，有
              关特大额度的充值，我们将为阁下作特别安排。祝您在豪龙娱
              乐游戏愉快，旗开得胜！
            </p>
          </div>
        </div>
        <div className="warm-tips">
          <div className="tips">温馨提示</div>
          <p>
            为保障阁下资金安全，请在进行任何转帐前，先到'用户中心'的'账户
            安全'中设置'安全密码' 若阁下对转帐操作有任何疑问，烦请与我们在
            线客服联系。祝您豪龙娱乐游戏愉快，旗开得胜！
          </p>
        </div>
        <Link to="/" className="big-button">立即去转账</Link>
      </div>
    )
  }
}
