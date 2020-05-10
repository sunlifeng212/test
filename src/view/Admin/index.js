import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from "react-router-dom";
import { Admin1, Admin2 } from '../index';
class index extends Component {
    render() {
        return (
            <div>
                <h2>admin</h2>
                <Link to={{
                    pathname: '/admin/admin1/1',
                }}>
                    <span>admin1</span>
                </Link>
                <Link to={{
                    pathname: '/admin/admin2/2',
                }}>
                    <span>admin2</span>
                </Link>
                <Switch>
                    <Route path='/admin/admin1/:id' component={Admin1}></Route>
                    <Route path='/admin/admin2/:id' component={Admin2}></Route>
                    <Redirect to="/admin/admin1/1" from="/admin"></Redirect>
                </Switch>
            </div>
        );
    }
}

export default index;