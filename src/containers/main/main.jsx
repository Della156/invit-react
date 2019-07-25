/*
主界面的路由组件
 */

import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import BossInfo from "../boss-info/boss-info";
import DashenInfo from "../dashen-info/dashen-info";

export default class Main extends Component {
  render() {
    // 如果浏览器中没有保存userid的cookie，直接跳转到login
    const userid = Cookies.get('userid')
    if(!userid) {
      this.props.history.replace('/login')
      return null
    }
    return (
      <div>
        <Switch>
          <Route path="/bossinfo" component={BossInfo} />
          <Route path="/dasheninfo" component={DashenInfo} />
        </Switch>
      </div>
    );
  }
}
