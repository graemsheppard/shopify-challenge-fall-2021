import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchMovies from './components/searchMovies';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
    <div className="jumbotron jumbotron-fluid bg-green text-light text-center">
      <h1 className="display-1">The Shoppies</h1>
      <hr className="my-4 bg-light" />
      <h3 className="lead">Nominate your favourite movies for the Shoppies!</h3>
    </div>
    <div className="container">
      <SearchMovies />
      <hr className="my-4" />
    </div>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
