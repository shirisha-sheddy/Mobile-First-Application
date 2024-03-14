import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <Router>
        <div className="container">
          <Route exact path="/login" component={Login} />
          <Route path="/home" component={Home} />
        </div>
      </Router>
    )
}

export default App;

