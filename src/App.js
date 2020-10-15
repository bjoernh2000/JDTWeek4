import React from "react";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["Milk", "Eggs", "Cheese", "Pastries"],
      value: "",
    };
  }

  handleAdd = (item) => {
    const list = this.state.list;
    list.push(item);
    this.setState({ list });
    console.log(list);
    this.setState({ value: "" });
  };

  handleRemove = () => {
    const list = this.state.list;
    list.pop();
    this.setState({ list });
    console.log(list);
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div class="container">
        <button
          class="button"
          onClick={this.handleRemove}
          disabled={this.state.list.length === 0 ? "disabled" : ""}
        >
          Remove Item
        </button>
        <br />
        <input
          class="input"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <br />
        <button class="button" onClick={() => this.handleAdd(this.state.value)}>
          Add Item
        </button>

        <ol type="A">
          {this.state.list.map((item, index) => (
            <li>{item}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default App;
