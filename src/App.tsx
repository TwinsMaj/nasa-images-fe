import React from 'react';
import './App.css';
import { Search } from './components/Search';
import { ApolloProvider } from '@apollo/client';
import { ApplicationProvider } from './context/application';
import { getApolloClient } from './bootstrap/getApolloClient';
import { NavigationBtn } from './components/NavigationBtn';

function App(): JSX.Element {
  return (
    <ApplicationProvider>
      <ApolloProvider client={getApolloClient()}>
        <div className="App">
          <Search />
          <NavigationBtn />
        </div>
      </ApolloProvider>
    </ApplicationProvider>
  );
}

export default App;
