import React, { Component } from 'react';
import { database } from '../firebase';

class App extends Component {

  constructor(props) {
    super(props);

    //initialize state
    this.state = {
      title: '',
      body: '',
      number: 0
    }

    //bind methods
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.increaseNumber = this.increaseNumber.bind(this);
  }

  //lifecycle
  componentDidMount() {
    database.on('value', snapshot => {
      this.setState({notes: snapshot.val()});
    });
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
    database.push(note);
    this.setState = {
      title: '',
      body: ''
    }
  }

  increaseNumber() {
    this.setState({number: this.state.number + 1});
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

              <div className="form-group">
                <button OnClick={this.increaseNumber}>Update Number</button>
                <NumberComponent myNumber={this.state.number}/>
              </div>

            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

class NumberComponent extends Component {
  render() {
    return (
      <h4>{this.props.myNumber}</h4>
    );
  }

}
