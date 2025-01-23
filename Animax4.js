// App.js
import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Animated } from 'react-native';

const Header = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>My App</Text>
      </View>
    );
  };

  const HomeScreen = ({ navigation }) => {
    return (
      <View style={styles.container21}>
        <Text>Home Screen</Text>
      </View>
    );
  };
  
  const DetailsScreen = ({ navigation }) => {
    return (
      <View style={styles.container22}>
        <Text>Details Screen</Text>
      </View>
    );
  };





const Drawer = ({ onClose,onOpen,nav1,nav2 }) => {
    return (
      <View style={styles.container1}>
        <TouchableOpacity onPress={onOpen}>
          <Text style={styles.drawerItem}>Open Drawer</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onClose}>
          <Text style={styles.drawerItem}>Close Drawer</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={nav1}>
          <Text style={styles.drawerItem}>Item 1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={nav2} >
          <Text style={styles.drawerItem}>Item 2</Text>
        </TouchableOpacity>
      </View>
    );
  };


const Animax4 = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const fadeAnim = useState(new Animated.Value(0))[0]; // Initial opacity value
 
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


  const toggle1 = () => {
    Animated.timing(fadeAnim, {
      toValue:1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };


  const toggle2 = () => {
    Animated.timing(fadeAnim, {
      toValue:0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };


  const translateX = fadeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-150, 0],
  });



  return (
    
    
    <View style={styles.container}>
    <Header />
    <View style={styles.buttonx} >
      <TouchableOpacity style={styles.button} onPress={toggle1}>
        <Text style={styles.buttonText}>Open</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={toggle2}>
        <Text style={styles.buttonText}>Close</Text>
      </TouchableOpacity>
    </View>
      <Animated.View style={[styles.drawer, { transform: [{ translateX }] }]}>
        <Drawer onClose={toggle2} 
            onOpen={toggle1} 
            nav1={navigateToHome}
            nav2={navigateToDetails}

        
        />
      </Animated.View>
    <View style={{ flex: 1 }}>{renderScreen()}</View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  }, 
  container21: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0000',
  },
  container22: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0000ff',
  },
  button: {
    padding: 10,
    backgroundColor: 'steelblue',
    borderRadius: 5,
  },
  buttonx: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
  drawer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: 150,
    backgroundColor: '#00ff00',
    zIndex: 100,
  }, 
  container1: {
    flex: 1,
    padding: 20,
  },
  drawerItem: {
    fontSize: 18,
    marginBottom: 10,
  },
  header: {
    height: 60,
    position: 'absolute',
    width:'100%',
    top: 0,
    left: 0,
    backgroundColor:'red',
    justifyContent: 'center',
    alignItems: 'flex-start',
    
  },
  headerText: {
    fontSize: 20,
  },
});

export default Animax4;