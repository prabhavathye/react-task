import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Posts from './components/posts/PostList';
import Profile from './components/profile';

export default (
  <Router>
    <Route path="/" component={App}>
      <Route path='/profile/:id' component={Profile} />
    </Route>
  </Router>
);
