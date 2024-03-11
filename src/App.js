// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Component/Home';
import Login from './Component/Login';
import OpreationalCockpit from './Component/OpreationalCockpit'
import './App.css'


const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/dashboard" component={Home} />
          <Route path="/products" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/orders" component={Home} />
          <Route path="/reports" component={Home} />
          <Route path="/integrations" component={Home} />
          <Route path="/dailogBox" component={Home}/>
          <Route path="/productDetails" component={Home}/>
          <Route path="/opreationalCockpit" component={Home}/>
          <Route path="/dataReadWrite" component={Home}/>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
