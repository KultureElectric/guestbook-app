import React, { Component } from "react";
import EntryList from "./EntryList";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>GuestBook</h1>
        <EntryList />
      </div>
    );
  }
}

export default App;
