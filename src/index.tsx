import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SearchBar from './components/searchBar';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <React.StrictMode>
    <div className="jumbotron bg-secondary text-light text-center">
      <h1 className="display-1">The Shoppies</h1>
      <hr className="my-4 bg-light" />
      <p className="lead">Nominate your favourite movies for the Shoppies!</p>
    </div>
    <div className="container">
      <SearchBar />
      <hr className="my-4" />
    </div>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
