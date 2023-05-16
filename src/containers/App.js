import React, { Component } from 'react';

import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Sticky from '../components/Sticky';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: '',
    };
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(r => r.json())
      .then(users => this.setState({ robots: users }));
  }

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(r => {
      return r.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      <div className='tc'>
        <Sticky>
          <h1 className='tc f1'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
        </Sticky>
        <ErrorBoundry>
          <CardList robots={filteredRobots}></CardList>
        </ErrorBoundry>
      </div>
    );
  }
}

export default App;
