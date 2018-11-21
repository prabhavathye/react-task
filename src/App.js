import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PostList from './components/posts/PostList.js';
import Profile from './components/profile';
import './App.css';

class App extends Component {
  componentWillMount() {
    console.log('Loading app');
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={PostList} />
          <Route path="/profile/:id" component={Profile} />
        </Switch>
      </div>
    );
  }
}

export default App;
