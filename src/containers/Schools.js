import React, { Component } from 'react';
import IntroHeader from '../components/IntroHeader';
import SearchResults from '../components/SearchResults';
import axios from 'axios';


const apiKey = 'XdOHSc8fKhMKidPu2HWqCZmMy9OxtCJamGC580Bi';

class Schools extends Component {

  state = {
    schoolResults: [],
    schoolName: ''
  }

fetchSchool = () => {
  const fields = `_fields=school.name,school.city,school.state,school.accreditor,school.school_url,2015.cost.tuition.in_state,2015.aid.median_debt.completers.overall,2015.cost.tuition.in_state&school.name=${this.state.schoolName}`;
  const requestUrl = `https://api.data.gov/ed/collegescorecard/v1/schools?&api_key=${apiKey}&${fields}`;

  axios.get(requestUrl)
  .then(res => {
    this.setState({
      schoolResults: res.data.results
    })
  })
}

  render() {
    return(
      <div>
        <Introheader schoolName={this.state.schoolName}/>
        <SearchResults />
      </div>
    )
  }
}

export default Schools;
