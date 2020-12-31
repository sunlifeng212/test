import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
import "./index.less";
import imgURL from "../../static/image/bgd.png";
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [1, 2, 3, 4, 5, 6, 7, 8],
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className="top-ban">
          <img src={imgURL} />
        </div>
        <div className="ban">
          {this.state.list.map((item, index) => {
            return (
              <div
                onClick={() => {
                  this.props.history.push({
                    pathname: "/del/q?name=222",
                    query: { name: "sunny" },
                    state: "3",
                    params: "eeeeeeeeeeeeeeeeeeee",
                    r: 23,
                    seach: {
                      name: 2,
                      age: 89,
                    },
                  });
                }}
                key={item}
                className="item"
              >
                {index}
              </div>
            );
          })}
        </div>
        <Link
          to={{
            pathname: "/del?tenantId=12121212",
          }}
        >
          <span>departManange</span>
        </Link>
        <div className="btm">
          <Link
            to={{
              pathname: "/home",
            }}
          >
            <span>首页</span>
          </Link>
          <Link
            to={{
              pathname: "/admin",
            }}
          >
            <span>发现</span>
          </Link>
          <Link
            to={{
              pathname: "/login",
            }}
          >
            <span>我的</span>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default index;
