import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Header = ({ navigateToHome, navigateToDetails }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>My App</Text>
      <View style={styles.buttonsContainer}>
        <Button title="Home" onPress={navigateToHome} />
        <Button title="Details" onPress={navigateToDetails} />
      </View>
    </View>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
};

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
    </View>
  );
};

const Part3 = () => {
  const [currentScreen, setCurrentScreen] = useState('Home');

  const navigateToHome = () => setCurrentScreen('Home');
  const navigateToDetails = () => setCurrentScreen('Details');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Home':
        return <HomeScreen />;
      case 'Details':
        return <DetailsScreen />;
      default:
        return null;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Header navigateToHome={navigateToHome} navigateToDetails={navigateToDetails} />
      {renderScreen()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    height: 100,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  headerText: {
    fontSize: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
});

export default Part3;
