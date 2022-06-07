import React from 'react';
import './App.css';
import { Search } from './components/Search';
import { ApolloProvider } from '@apollo/client';
import { ApplicationProvider } from './context/application';
import { getApolloClient } from './bootstrap/getApolloClient';

function App(): JSX.Element {
  return (
    <ApplicationProvider>
      <ApolloProvider client={getApolloClient()}>
        <div className="App">
          <Search />
        </div>
      </ApolloProvider>
    </ApplicationProvider>
  );
}

export default App;
