import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './routes';

export default function App({ navigation }) {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#5A68E6" />
      <Routes navigation={navigation} />
    </>
  );
}