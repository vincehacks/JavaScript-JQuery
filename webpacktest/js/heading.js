// Created by Vince Chang

import React from 'react';

export default class Heading extends React.Component {
  constructor(props) {
    super(props);
    this.sayHello = this.sayHello.bind(this);
  }
  sayHello() {
    alert("Hello " + this.props.name);
  }

  render() {
    const nums = [1, 5, , 8, 10];
    const elements = nums.map(num => <li>{num}</li>);
    // return <h1 onClick={this.sayHello}> Hello, {this.props.name}!</h1>;
    return (
      <h1>
        Hello! {
          (this.props.userType === 'admin') ?
            <em>You are an admin</em>
            :
            null
        }
      </h1>
    )

    // return <ul>
    //   {elements}
    // </ul>;
  }
}