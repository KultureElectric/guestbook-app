import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import _ from "lodash";
import EntryField from "./EntryField";
import { Link } from "react-router-dom";

const entryFields = [
  { label: "Your Title", name: "heading" },
  { label: "Your Name", name: "user" },
  { label: "Your text", name: "body" }
];

class NewEntry extends Component {
  handleSubmit() {
    console.log("submit successful");
  }

  renderFields() {
    return _.map(entryFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          type="text"
          label={label}
          name={name}
          component={EntryField}
        />
      );
    });
  }

  render() {
    return (
      <div className="New-Entry">
        <form onSubmit={this.handleSubmit}>
          {this.renderFields()}
          <Link className="red btn-flat white-text left" to="/">
            Back
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "entryForm"
})(NewEntry);
