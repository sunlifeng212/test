import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
import { Login, NotFout, Admin, Admin1, Home, Del } from "./view";
import "./App.less";
import { Map } from "immutable";
import "./sort";
// import { Button } from 'antd';
// import "antd-mobile/dist/antd-mobile.css";
// import { Button } from "antd-mobile";
// import 'antd/dist/antd.css';
// import Button from 'antd/es/button';
// import 'antd/es/button/style/css';
class App extends Component {
  static a = 3;
  constructor(props) {
    super(props);

    let a = Map({
      select: "users",
      filter: Map({ name: "Cam" }),
    });
    let b = a.set("select", "people");
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/del" component={Del} />
          <Route path="/home" component={Home}></Route>
          <Route path="/admin" component={Admin}></Route>
          <Route path="/login" component={Login}></Route>
          <Redirect to="/home" />
        </Switch>
      </Router>
    );
  }
}

export default App;
