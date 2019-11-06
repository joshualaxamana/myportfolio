import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.png';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Typical from 'react-typical';

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    < App />
  </Router>, document.getElementById('root')
  );

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <h1>Joshua Laxamana</h1> */}
        <Typical
          steps={['Software', 1000, 'Software Developer', 2000]}
          loop={Infinity}
          wrapper="h3"
        />
      </header>
    </div>
  );
}

export default App;
