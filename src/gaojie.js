import React, { Component } from 'react';
function gaojie(Zujian){
    return class index extends Component {
        render() {
            return (
                <div>
                    高阶层
                    <Zujian></Zujian>
                </div>
            );
        }
    }
}

export default gaojie;