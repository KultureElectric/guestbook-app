import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchEntries } from "../actions";
import { Link } from "react-router-dom";

class EntryList extends Component {
  componentDidMount() {
    this.props.fetchEntries();
  }

  renderEntries() {
    return this.props.entries.reverse().map(entry => {
      return (
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{entry.heading}</span>
            <h6>{entry.user}</h6>
            <p>{entry.body}</p>
            <div className="card-action" />
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderEntries()}
        <div className="fixed-action-btn">
          <Link to="/new" className="btn-floating btn-large right">
            <i className="material-icons">add</i>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ entries }) => {
  return { entries };
};

export default connect(
  mapStateToProps,
  { fetchEntries }
)(EntryList);
