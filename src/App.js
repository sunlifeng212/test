import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import { Login, NotFout, Admin, Admin1, Home } from './view'
import "./App.less"
import { Button } from 'antd';
// import 'antd/dist/antd.css';
// import Button from 'antd/es/button';
// import 'antd/es/button/style/css'; 
import gaojie from "./gaojie"
@gaojie
class App extends Component {
    static a=3
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Router>
                <Button>按钮</Button>
                <Link to={{
                    pathname: '/login'
                }}>
                    <span>登录</span>
                </Link>
                <Link to={{
                    pathname: '/admin'
                }}>
                    <span>toadmin</span>
                </Link>
                <Switch>
                    <Route path='/home' component={Home}></Route>
                    <Route path='/admin' component={Admin}></Route>
                    <Redirect to="/home" from='/' />
                </Switch>
            </Router >

        );
    }
}

export default App;