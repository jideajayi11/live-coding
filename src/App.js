import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" render={(props) => <Login {...props} />} />
        <Route path="/register" render={(props) => <Register {...props} />} />
        <Route path="/" render={(props) => <Home {...props} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
