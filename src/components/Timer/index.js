import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 2,
    };
  }

  render() {
    return <p>{this.state.count}</p>;
  }
}

export default Timer;
