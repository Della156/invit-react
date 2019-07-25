
/*
* 使用 axios 封装的ajax请求函数
* 函数返回的是promise对象
*/

import axios from 'axios'

export default function ajax(url = '', data = {}, type = 'GET') {

  if (type === 'GET') {
    // data: {username: tom, password: 123}
    // username=tom&password=123
     let paramStr = ''; // 数据拼接字符串
     Object.keys(data).forEach(key => {
        paramStr += key + '=' + data[key] + '&'
     });
     if(paramStr) {
       paramStr = paramStr.substring(0,paramStr.length-1) // 多了一个 '&'
     }
    return axios.get(url + '?' + paramStr)

  } else { // 发送POST请求
    return axios.post(url, data)
  }
}
