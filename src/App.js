import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Research from './pages/Research';

export default function App() {
  return (
    <Router>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route path="/research" component={Research} />
    </Router>
  );
}
