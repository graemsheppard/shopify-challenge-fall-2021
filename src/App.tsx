import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchMovies from './components/searchMovies';

function App() {
  return (
    <React.Fragment>
      <div className="jumbotron jumbotron-fluid bg-secondary text-light text-center">
        <h1 className="display-1">The Shoppies</h1>
        <hr className="my-4 bg-light" />
        <h3 className="lead">Nominate your favourite movies for the Shoppies!</h3>
      </div>
      <div className="container">
        <SearchMovies />
      </div>
    </React.Fragment>
  );
}

export default App;
