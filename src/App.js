import React, { Component, createRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import AppItem from "./AppItem";
import AppEditor from "./AppEditor";

class App extends Component {
  constructor() {
    super();
    this.ref_editor = createRef();
    this.state = {
      countId: 0,
      focusId: null,
      itemList: []
    };
  }
  finishCreateOrEdit(id, text) {
    console.log(id, text);
    let { itemList, countId } = this.state;
    const idx = itemList.findIndex(o => o.id === id);
    if (id == null || idx == -1) {
      itemList.push({ id: countId++, text });
    } else {
      itemList[idx].text = text;
    }
    this.setState({
      itemList,
      countId,
      focusId: null
    });
  }
  selectEdit(id) {
    this.ref_editor.current.adding(id, this.state.itemList.find(o => o.id === id).text);
    this.setState({
      focusId: id
    });
  }
  unselectEdit() {
    this.selectEdit(null);
  }
  remove(id) {
    let { itemList, focusId } = this.state;
    this.setState({
      itemList: itemList.filter(o => o.id !== id),
      focusId: focusId == id ? null : focusId
    });
  }
  cancel(id) {
    this.ref_editor.current.cancel(id);
    this.setState({ focusId: null });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <AppEditor ref={this.ref_editor} onFinish={this.finishCreateOrEdit.bind(this)} />
          <div className="AppItem__wrapper">
            {this.state.itemList.map(({ text, id }) => (
              <AppItem
                value={text}
                key={id}
                onEdit={() => this.selectEdit(id)}
                focus={id === this.state.focusId}
                onRemove={() => this.remove(id)}
                onCancel={() => this.cancel(id)}
              />
            ))}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
