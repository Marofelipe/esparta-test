/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StatusBar
} from 'react-native';
import ToDoList from './src/views/toDoList';


const App = ({children, title})  => {
  return (
    <>
      <StatusBar />

      <ToDoList />
    </>
  );
};

export default App;
