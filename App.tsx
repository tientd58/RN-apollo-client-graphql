/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { ApolloProvider } from 'react-apollo';
import RootContainer from './Root';
import ApolloClient from './src/graphql/ApolloClient';
import { Platform, StatusBar, View, StyleSheet, Text } from 'react-native';

class App extends React.PureComponent {
  render() {
    return (
      <ApolloProvider client={ApolloClient}>
        <RootContainer />
      </ApolloProvider>
    );
  }
}

export default App;
