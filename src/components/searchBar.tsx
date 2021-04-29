import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { Component } from 'react';

export interface SearchBarProps {
    
}
 
export interface SearchBarState {
    
}
 
class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
    //state = { :  }
    render() { 
        return (
            <React.Fragment>
                <div className="input-group my-3">
                    <input type="text" className="form-control form-control-lg" placeholder="Search Movies" aria-label="Search Movies" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-secondary" type="button"><FontAwesomeIcon icon={faSearch} /></button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default SearchBar;