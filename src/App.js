import React, { Component } from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Introheader from './components/IntroHeader';
import SearchResults from './components/SearchResults';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <div className="wrap">
            <Route exact path="/" component={Schools} />
            <Route path="/results" component={SearchResults} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
