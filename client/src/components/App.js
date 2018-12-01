import React, { Component } from "react";
import EntryList from "./EntryList";
import NewEntry from "./NewEntry";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <h1>GuestBook</h1>
          <Route exact path="/" component={EntryList} />
          <Route path="/new" component={NewEntry} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
