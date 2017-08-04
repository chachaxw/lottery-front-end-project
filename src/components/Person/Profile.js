import React, { Component } from 'react';
import { NavBar, List, InputItem, Button } from 'antd-mobile';
import { Link } from 'react-router';
import { createForm } from 'rc-form';

import './style.scss';

const Item = List.Item;

class Profile extends Component {

  saveProfile = () => {
    console.log('保存资料');
  }

  verifyEmail = () => {
    console.log('验证邮箱');
  }

  render() {
    const { getFieldProps } = this.props.form;
    const profile = {
      username: 'chacha',
      mobile: '13712341234',
      qq: '12345678',
      email: '12345678@qq.com',
      avatar: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3617699907,1490380098&fm=21&gp=0.jpg',
    }

    return (
      <div className="container profile">
        <NavBar iconName={false} leftContent={<Link to="/person">
            <i className="iconfont left-icon">&#xe69f;</i>
        </Link>}
        rightContent={<span onClick={this.saveProfile}>保存</span>}>资料编辑</NavBar>
        <List className="menu-list" style={{marginTop: 20}}>
          <Item thumb={<div className="user-avatar"
            style={{backgroundImage: `url(${profile.avatar})`}}></div>}
            arrow="horizontal">上传头像</Item>
        </List>
        <List className="menu-list" style={{marginTop: 20}}>
          <Item arrow="horizontal" extra={<InputItem
              {...getFieldProps('username',{
                initialValue: profile.username
              })}>
          </InputItem>}>用户名</Item>
          <Item arrow="horizontal" extra={<InputItem
              {...getFieldProps('mobile',{
                initialValue: profile.mobile
              })}>
          </InputItem>}>电话</Item>
          <Item arrow="horizontal" extra={<InputItem
              {...getFieldProps('qq',{
                initialValue: profile.qq
              })}>
          </InputItem>}>QQ</Item>
        <Item className="email-input" extra={<div><InputItem
              {...getFieldProps('email',{
                initialValue: profile.email
              })}>
            </InputItem>
            <Button className="verify-btn" onClick={this.verifyEmail} inline size="small">验证</Button></div>
          }>邮箱</Item>
        </List>
      </div>
    )
  }
}
export default Profile = createForm()(Profile);
