import React, { Component } from 'react';
import _ from 'lodash';
//setup connection to redux store
import { connect } from 'react-redux';
import { getNotes, saveNote, deleteNote } from '../actions/notesAction';

class App extends Component {

  constructor(props) {
    super(props);

    //initialize state
    this.state = {
      title: '',
      body: '',
    }

    //bind methods
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderNotes = this.renderNotes.bind(this);
  }

  //lifecycle
  componentDidMount() {
    //get nodes from redux store as props
    this.props.getNotes();
  }

  //Create a handleChange method to track state information
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  //Handle for submission
  handleSubmit(e) {
    //prevent the whole page from reloading after submission
    e.preventDefault();
    const note = {
      title: this.state.title,
      body: this.state.body
    }
    this.props.saveNote(note);
    this.setState = {
      title: '',
      body: ''
    }
  }

  //render notes
  renderNotes() {
    return _.map(this.props.notes, (note, key) => {
      return (
        //key = the unique key generated by firebase
        <div key="key">
          <h2>{note.title}</h2>
          <p>{note.body}</p>
          <button
            className="btn btn-danger btn-xs" onClick={() => this.props.deleteNote(key)}
          >
            Delete
          </button>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  onChange={this.handleChange}
                  value={this.state.title}
                  type="text"
                  name="title"
                  className="form-control no-border"
                  placeholder="Title..."
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  onChange={this.handleChange}
                  value={this.state.body}
                  type="text"
                  name="body"
                  className="form-control no-border"
                  placeholder="Body..."
                  required
                />
              </div>
              <div className="form-group">
                <button className="btn btn-primary col-sm-12">Save</button>
              </div>
            </form>
            {this.renderNotes()}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
      notes: state.notes
  }
}

//map properties to the state and send getNotes and saveNote methods to the state
export default connect(mapStateToProps, { getNotes, saveNote, deleteNote })(App);
