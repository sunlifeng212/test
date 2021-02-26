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
import PropTypes from "prop-types";
import { addTodo, addCountAsync } from "../../store/reducer/caraction";

class footer extends Component {
  static propTypes = {
    list: PropTypes.array,
  };
  static defaultProps = {
    list: [
      { name: "首页", path: "/home", activeClassName: "seleted" },
      { name: "发现", path: "/admin", activeClassName: "seleted" },
      { name: "我的", path: "/login", activeClassName: "seleted" },
    ],
  };
  componentDidMount() {
    console.log('luyou',this.props);
  }
  render() {
    let { list } = this.props;
    return (
      <div className="btm">
        {list.map((item) => {
          return (
            <NavLink
              to={{
                pathname: item.path,
                s: { name: "sunny" },
                search: "ad=23&we=33333333",
                state: [3],
              }}
              key={item.name}
              activeClassName="seleted"
            >
              <span>
                {item.name}
                {this.props.add}
              </span>
            </NavLink>
          );
        })}
      </div>
    );
  }
}
var mapState = (state) => {
  return {
    add: state.car,
  };
};
// var mapDispatchToProps = (dispatch) => {
//   return { addTodo, addCountAsync };
// };
export default connect(mapState, { addTodo, addCountAsync })(
  withRouter(footer)
);

// export default withRouter(footer);
