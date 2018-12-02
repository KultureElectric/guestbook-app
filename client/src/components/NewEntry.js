import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import _ from "lodash";
import EntryField from "./EntryField";
import { Link } from "react-router-dom";
import { sendEntry } from "../actions";
import { connect } from "react-redux";

const entryFields = [
  { label: "Your Title", name: "heading" },
  { label: "Your Name", name: "user" },
  { label: "Your text", name: "body" }
];

class NewEntry extends Component {
  submitEntry(e) {
    sendEntry(e);
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
        <form onSubmit={this.props.handleSubmit(this.submitEntry)}>
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

const mapStateToProps = ({ form }) => {
  return { formValues: form.entryForm };
};

export default reduxForm({
  form: "entryForm"
})(
  connect(
    mapStateToProps,
    { sendEntry }
  )(NewEntry)
);
