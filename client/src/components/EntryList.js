import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchEntries } from "../actions";

class EntryList extends Component {
  componentDidMount() {
    this.props.fetchEntries();
  }

  renderEntries() {
    return this.props.entries.map(entry => {
      return (
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{entry.heading}</span>
            <p>{entry.body}</p>
            <div className="card-action">
              <a href="#">{entry.user}</a>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderEntries()}</div>;
  }
}

const mapStateToProps = ({ entries }) => {
  return { entries };
};

export default connect(
  mapStateToProps,
  { fetchEntries }
)(EntryList);
