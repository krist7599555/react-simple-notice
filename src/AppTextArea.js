import React, { Component } from "react";
import "./AppTextArea.css";

class AppTextArea extends Component {
  render() {
    return (
      <div className="AppTextArea">
        <textarea value={this.props.value} onChange={this.props.onChange} />
        <button className="finish" onClick={this.props.onFinish}>
          finish
        </button>
        {/* <button onClick={this.props.onCancel}>cancel</button> */}
      </div>
    );
  }
}

export default AppTextArea;
