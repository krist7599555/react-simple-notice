import React, { Component } from "react";
import "./AppItem.css";

class AppItem extends Component {
  render() {
    return (
      <div className="AppItem">
        {this.props.focus ? <span>***</span> : <span />}
        <span className="text">{this.props.value}</span>
        {this.props.focus ? (
          <button onClick={this.props.onCancel}>cancel</button>
        ) : (
          <button onClick={this.props.onEdit}>edit</button>
        )}
        <button onClick={this.props.onRemove}>remove</button>
      </div>
    );
  }
}

export default AppItem;
