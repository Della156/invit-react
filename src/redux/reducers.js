/*
包含n个reducer函数: 根据老的state和指定的action返回一个新的state
 */
import { combineReducers } from "redux";
import {
  AUTH_SUCCESS,
  ERROR_MSG,
  RECEIVE_USER,
  RESET_USER
} from "./action-types";
import { getRedirectTo } from "../utils";

const initUser = {
  username: "", // 用户名
  type: "", // 用户类型：dashen/boss
  msg: "", // 错误提示信息
  redirectTo: "" // 需要自动重定向的路由路径
};
// 产生user状态的reducer
function user(state = initUser, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      const redirectTo = getRedirectTo(action.data.type, action.data.header);
      return { ...action.data, redirectTo };
    case ERROR_MSG:
      return { ...state, msg: action.data };
    case RECEIVE_USER: // data 是 user
      return action.data;
    case RESET_USER: // data 是msg
      return { ...initUser, msg: action.data };
    default:
      return state;
  }
}

export default combineReducers({
  user
});
// 向外暴露的状态的结构: {user: {}, userList: [], chat: {}}

