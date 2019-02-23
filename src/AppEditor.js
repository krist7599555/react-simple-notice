import React, { Component, createRef } from "react";
import "./AppItem.css";
// import AppSelector from "./AppSelector";
import AppTextArea from "./AppTextArea";

class AppEditor extends Component {
  constructor() {
    super();
    this.ref_select = createRef();
    this.ref_textarea = createRef();
    this.state = {
      currId: null,
      texts: {
        [null]: ""
      }
    };
  }
  adding(id, text) {
    let texts = this.state.texts;
    texts[id] = texts[id] || text;
    // this.ref_select.current.addId(id);
    this.setState({
      currId: id,
      texts
    });
  }
  setText(id, val) {
    let texts = this.state.texts;
    texts[id] = val;
    this.setState({
      texts
    });
  }
  finish(id) {
    this.props.onFinish(id, this.state.texts[id]);
    this.cancel(id);
  }
  cancel(id) {
    // this.ref_select.current.removeId(id);
    if (this.state.currId === id) {
      this.setState({
        currId: null
      });
    }
  }
  render() {
    const { texts, currId } = this.state;
    return (
      <div className="AppItem">
        {/* <AppSelector
          ref={this.ref_select}
          onSelect={nid => this.setState({ currId: nid })}
          focus={currId}
        /> */}
        <AppTextArea
          ref={this.ref_textarea}
          value={texts[currId]}
          onChange={e => this.setText(currId, e.target.value)}
          onFinish={() => this.finish(currId)}
          onCancel={() => this.cancel(currId)}
        />
      </div>
    );
  }
}

export default AppEditor;
