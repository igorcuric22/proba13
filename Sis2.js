// App.js
import React, { useState } from 'react';
import { View } from 'react-native';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('Home');

  const navigate = (screenName) => {
    setCurrentScreen(screenName);
  };

  let screenToShow;
  if (currentScreen === 'Home') {
    screenToShow = <HomeScreen navigate={navigate} />;
  } else if (currentScreen === 'Details') {
    screenToShow = <DetailsScreen navigate={navigate} />;
  }

  return <View style={{ flex: 1 }}>{screenToShow}</View>;
};

export default App;
