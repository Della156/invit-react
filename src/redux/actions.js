/*
包含n个action creator
异步action
同步action
 */
import {
  AUTH_SUCCESS,
  ERROR_MSG,
  RECEIVE_USER,
  RESET_USER
} from "./action-types";

import { reqRegister, reqLogin, reqUpdate } from "../api";

// 授权成功
const authSuccess = user => ({ type: AUTH_SUCCESS, data: user });
// 错误提示信息
const errorMsg = msg => ({ type: ERROR_MSG, data: msg });

// 同步接收用户
const receiveUser = (user) => ({type: RECEIVE_USER, data: user});
// 同步重置用户
export const resetUser = (msg) => ({type: RESET_USER, data: msg});


// 注册异步 action
export const register = user => {
  const { username, password, password2, type } = user;
  // 进行前台表单验证, 如果不合法返回一个同步 action 对象, 显示提示信息
  if (!username || !password || !type) {
    return errorMsg("存在空数据");
  }
  if (password !== password2) {
    return errorMsg("两次密码要一致");
  }
  // 表单数据合法，返回一个发ajax请求的函数
  return async dispatch => {
    // 发送注册的异步ajax请求
    /*
    const promise = reqRegister(user)
    promise.then(res => {
      const result = res.data
    })
    */
    const res = await reqRegister({ username, password, type });
    const result = res.data;

    if (result.code === 0) {
      // 成功
      return dispatch(authSuccess(result.data));
    } else {
      //失败
      return dispatch(errorMsg(result.msg));
    }
  };
};

export const login = user => {
  const { username, password } = user;
  if (!username || !password) {
    return errorMsg("用户名或密码不能为空！");
  }

  return async dispatch => {
    // 发送注册的异步ajax请求
    const res = await reqLogin(user);
    const result = res.data;

    if (result.code === 0) {
      // 成功
      return dispatch(authSuccess(result.data));
    } else {
      //失败
      return dispatch(errorMsg(result.msg));
    }
  };
};

// 异步更新用户
export const update = user => {
  return async dispatch => {
    const res = await reqUpdate(user);
    const result = res.data;
    if(result.code === 0) {
      dispatch(receiveUser(result.data))
    } else {
      dispatch(resetUser(result.msg))
    }
  }



};
