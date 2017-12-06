import React from 'react';

class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = { term: '' }
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onTermChange(term);
    }

    render() {
        return (
            <div className="introheader">
                <div className="introbox">
                    <div className="row">
                        <div className="search">
                            <div className="col-xs-offset-3 col-xs-6 text-center enter_section">
                                <h2 className="textwhite">ENTER A COLLEGE OR UNIVERSITY NAME</h2>
                                <input onChange={event => this.onInputChange(event.target.value)} />
                            </div>
                        </div>
                    </div>
                </div>        
            </div>
        );
    }
}

export default SearchBar;