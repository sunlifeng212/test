import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
  Redirect,
} from "react-router-dom";
import "./index.less";
import Footer from "../../view/components/footer";
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
                    pathname: "/del"
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
        <NavLink
          to={{
            pathname: "/del",
          }}
        >
          <span>departManange</span>
        </NavLink>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default index;
