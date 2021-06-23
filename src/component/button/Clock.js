import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), text: "Xin chao" };
  }

  updateState(e) {
    console.log("updateState", e);
    // this.setState({ date: new Date() });
  }

  render() {
    return (
      <div>
        <h1>{this.state.text}</h1>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
        <button onClick={(e) => this.updateState(e)}>Click me</button>
      </div>
    );
  }
}

export default Clock;
