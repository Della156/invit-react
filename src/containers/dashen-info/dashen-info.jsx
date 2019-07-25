/*
大神信息完善的路由容器组件
*/
import React, { Component } from "react";
import { connect } from "react-redux";
import { NavBar, InputItem, Button } from "antd-mobile";
import {update} from "../../redux/actions";
import HeaderSelector from "../../components/header-selector/header-selector";

class DashenInfo extends Component {
  state = {
    header: "",
    post: "",
    info: ""
  };

  // 更新header状态
  setHeader = header => {
    this.setState({
      header
    });
  };

  // 监听表单输入
  handleChange = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  save = () => {
    this.props.update(this.state)
  };

  render() {
    return (
      <div>
        <NavBar> 大神信息完善 </NavBar>
        <HeaderSelector setHeader={this.setHeader} />
        <InputItem
          placeholder="请输入求职岗位"
          onChange={val => {
            this.handleChange("post", val);
          }}
        >
          求职岗位：
        </InputItem>
        <InputItem
          placeholder="请输入个人介绍"
          onChange={val => {
            this.handleChange("info", val);
          }}
        >
          个人介绍：
        </InputItem>
        <Button type="primary" onClick={this.save}>
          保&nbsp;&nbsp;&nbsp;存
        </Button>
      </div>
    );
  }
}

export default connect(
  state => ({ user: state.user }),
  {update}
)(DashenInfo);
