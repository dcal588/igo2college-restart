import React from 'react';
import ReactDOM from 'react-dom';
import GifList from './components/GifList';
import SearchBar from './components/SearchBar';
import request from 'superagent';
import './styles/app.css';

class App extends React.Component {
	constructor() {
    super();
    this.state = {
      schoolName: '',
  		city: '',
   		state: '',
  		url: '',
   		tuition: '',
   		debt: ''
    };
    this.handleTermChange = this.handleTermChange.bind(this)
  }
  handleTermChange = (term) => {
    const apiKey = 'XdOHSc8fKhMKidPu2HWqCZmMy9OxtCJamGC580Bi';
    const fields = `_fields=school.name,school.city,school.state,school.accreditor,school.school_url,2015.cost.tuition.in_state,2015.aid.median_debt.completers.overall,2015.cost.tuition.in_state&school.name=${this.state.schoolName}`;
    const url = `https://api.data.gov/ed/collegescorecard/v1/schools?&api_key=${apiKey}&${fields}`;

    request.get(url, (err, res, data)
    .then((res) => res.json())
    .then((data) => {
     	this.setState({ 
     		schoolName: data.results[0]['school.name'],
     		city: data.results[0]['school.city'],
    		state: data.results[0]['school.state'],
     		accreditor: data.results[0]['school.accreditor'],
     		url: data.results[0]['school.school_url'],
     		tuition: data.results[0]['2015.cost.tuition.in_state'],
     		debt: data.results[0]['2015.aid.median_debt.completers.overall'] 
    	})
 	  })

    render() {
      return (
        <div>
        	<p>School: { this.state.schoolName } </p>
        	<p>Location: { this.state.city }  {this.state.state} </p>
        	<p>Accreditor: { this.state.accreditor } </p>
        	<p>School Homepage: { this.state.url } </p>
        	<p>Average Tuition: ${ this.state.tuition.toString() } </p>
        	<p>Average Debt: ${ this.state.debt.toString() } </p>
       		<SearchBar onTermChange={this.handleTermChange} />
        	<GifList schoolName={this.state.schoolName} />
        </div>
      );
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));