/*
入口JS
 */
import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/index.less";

import { Button } from "antd-mobile";
ReactDOM.render(
  <div>
    <Button>Start</Button>
    <p className="ce-shi">color</p>
  </div>,
  document.getElementById("root")
);
