import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Introheader extends Component {

  schoolUpdate = (e) => {
    e.preventDefault();
    this.setState({
      schoolSearch: e.target.value
    })
  }
render() {
  console.log(this.state);
  return (
  <div className="introheader">
    <div className="introbox">
    <div className="row">
        <div className="col-xs-offset-3 col-xs-6 text-center enter_section">
          <h2 className="textwhite">ENTER A COLLEGE OR UNIVERSITY NAME</h2>
          <form>
            <input  type="text" onChange={this.props.schoolName} className="form-control" id="enter_text"/>

            <button type="submit" className="btn btn-primary" id="text-enter-button button submit">
              <Link to='/results'>Submit</Link>
            </button>
          </form>
        </div>
    </div>
    </div>
  </div>
  )
 }
}

export default Introheader;
