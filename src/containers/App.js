import React, { useEffect, useState } from 'react';

import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Sticky from '../components/Sticky';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry';

function App() {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState('');

  const onSearchChange = event => {
    setSearchField(event.target.value);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(r => r.json())
      .then(users => setRobots(users));
    console.log('Fetch');
  }, []);

  const filteredRobots = robots.filter(r => {
    return r.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return !robots.length ? (
    <h1>Loading</h1>
  ) : (
    <div className='tc'>
      <Sticky>
        <h1 className='tc f1'>RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
      </Sticky>
      <ErrorBoundry>
        <CardList robots={filteredRobots}></CardList>
      </ErrorBoundry>
    </div>
  );
}

export default App;
