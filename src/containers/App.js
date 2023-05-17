import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Sticky from '../components/Sticky';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry';

import { requestRobots, setSearchField } from '../actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: e => dispatch(setSearchField(e.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

function App(store) {
  useEffect(() => {
    store.onRequestRobots();
  }, []);

  const filteredRobots = store.robots.filter(r => {
    return r.name.toLowerCase().includes(store.searchField);
  });

  return store.isPending ? (
    <h1>Loading</h1>
  ) : (
    <div className='tc'>
      <Sticky>
        <h1 className='tc f1'>RoboFriends</h1>
        <SearchBox searchChange={store.onSearchChange} />
      </Sticky>
      <ErrorBoundry>
        <CardList robots={filteredRobots}></CardList>
      </ErrorBoundry>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
