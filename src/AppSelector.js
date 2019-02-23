import React, { Component } from "react";
import "./AppSelector.css";

class AppSelector extends Component {
  constructor() {
    super();
    this.state = {
      ids: [null]
    };
  }
  removeId(id) {
    console.log("remove", id);
    if (id != null) {
      this.setState({
        ids: this.state.ids.filter(myid => myid !== id)
      });
    }
  }
  addId(id) {
    let ids = this.state.ids;
    if (ids.indexOf(id) == -1) {
      ids.push(id);
      this.setState({
        ids: ids
      });
    }
  }
  render() {
    return (
      <ul className="AppSelector">
        {this.state.ids.map(i => (
          <li key={i} focus={this.props.focus === i ? 1 : 0} onClick={() => this.props.onSelect(i)}>
            {i == null ? "create" : i}
          </li>
        ))}
      </ul>
    );
  }
}

export default AppSelector;
