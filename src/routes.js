import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Base from 'components/Base';
import LayoutFrame from 'components/common/LayoutFrame';
import { LoginPage, Signup } from 'components/Login';
import { HomePage, Message, Article, Order, LotteryRecord, Lottery } from 'components/Home';
import { DataPage } from 'components/Data';
import { Profit, Setting, Profile, AddLevel, BetRecord, Manage } from 'components/Person';
import { AddCard, TopupRecord, Topup, WithDraw, Transfer } from 'components/Wallet';

export default (
  <Route component={Base}>
    <Route path='/' component={LayoutFrame} />
    <IndexRoute component={HomePage}/>
    <Route path="home" component={LayoutFrame} />
    <Route path="lottery" component={Lottery} />
    <Route path="order" component={Order} />
    <Route path="lotteryrecord" component={LotteryRecord} />
    <Route path="data" component={LayoutFrame} />
    <Route path="person" component={LayoutFrame} />
    <Route path="wallet" component={LayoutFrame} />
    <Route path="login" component={LoginPage} />
    <Route path="signup" component={Signup} />
    <Route path="message" component={Message} />
    <Route path="article" component={Article} />
    <Route path="profile" component={Profile} />
    <Route path="profit" component={Profit} />
    <Route path="addlevel" component={AddLevel} />
    <Route path="manage" component={Manage} />
    <Route path="setting" component={Setting} />
    <Route path="betrecord" component={BetRecord} />
    <Route path="addcard" component={AddCard} />
    <Route path="topuprecord" component={TopupRecord} />
    <Route path="topup" component={Topup} />
    <Route path="withdraw" component={WithDraw} />
    <Route path="transfer" component={Transfer} />
  </Route>
);
