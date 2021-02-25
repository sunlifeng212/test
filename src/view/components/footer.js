import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import { connect } from "react-redux";
import { addTodo, addCountAsync } from "../../store/reducer/caraction";
class footer extends Component {
  componentDidMount() {
    console.log("footer", this.props);
    setTimeout(() => {
      this.props.addTodo(8888);
    }, 3000);
  }
  render() {
    return (
      <div className="btm">
        <NavLink
          to={{
            pathname: "/home",
          }}
          activeClassName="seleted"
        >
          <span>
            首页
            {this.props.add}
          </span>
        </NavLink>
        <NavLink
          to={{
            pathname: "/admin",
          }}
          activeClassName="seleted"
        >
          <span>发现</span>
        </NavLink>
        <NavLink
          to={{
            pathname: "/login",
          }}
          activeClassName="seleted"
        >
          <span>我的</span>
        </NavLink>
      </div>
    );
  }
}
var mapState = (state) => {
  return {
    add: state.car,
  };
};
var mapDispatchToProps = (dispatch) => {
  return { addTodo, addCountAsync };
};
export default connect(mapState, mapDispatchToProps)(footer);
