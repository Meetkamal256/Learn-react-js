import React, { Component } from "react";
import { LifeCycleB } from "./LifecycleB";

export class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Kamal",
    };
    console.log("LifecycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycleA componentDidMount");
  }

  render() {
    console.log("LifecycleA render");
    return (
      <div>
        <div>LifeCycle A</div>
        <LifeCycleB />
      </div>
    );
  }
}

export default LifecycleA;
