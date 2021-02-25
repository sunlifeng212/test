import React, { Component } from 'react';
import { Route } from "react-router-dom";

class index extends Component {

  render() {
    console.log("admin1",this.props)
    return (
      <div>
        <h2>admin1</h2>
        <button onClick={() => {
          this.props.history.push({
            pathname: "/admin/admin2/2?name=33333",
            state: "3",
            params: "eeeeeeeeeeeeeeeeeeee"
          })
        }}>goadmin2</button>
      </div>
    );
  }
}

export default index;
