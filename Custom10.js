import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native';
import FirstScreen from './FirstScreen1';
import SecondScreen from './SecondScreen';
import ThirdScreen from './ThirdScreen';


const Custom10 = () => {
  const [drawerOpened, setDrawerOpened] = useState(false);
  const drawerAnimation = useRef(new Animated.Value(0)).current;

  const [currentScreen, setCurrentScreen] = useState('First');

  const navigateToFirst = () => setCurrentScreen('First');
  const navigateToSecond = () => setCurrentScreen('Second');
  const navigateToThird = () => setCurrentScreen('Third');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'First':
        return <FirstScreen />;
      case 'Second':
        return <SecondScreen />;
    case 'Third':
            return <ThirdScreen />;
      default:
        return null;
    }
  };

  const toggleDrawer = () => {
    const toValue = drawerOpened ? 0 : 1;
    Animated.timing(drawerAnimation, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setDrawerOpened(!drawerOpened);
  };

  const closeDrawer = () => {
    
    Animated.timing(drawerAnimation, {
      toValue:0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text >Drawer Header</Text>
        <TouchableOpacity onPress={toggleDrawer}>
          <Text style={[styles.toggleButton,styles.headerText]}>{drawerOpened ? "X" : <Text>&#9776;</Text>}</Text>
        </TouchableOpacity>
      </View>
     
     {renderScreen()}
     
      <Animated.View
        style={[
          styles.drawer,
          {
            transform: [
              {
                translateX: drawerAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-300, 0],
                }),
              },
            ],
          },
        ]}
      >
        <TouchableOpacity onPress={toggleDrawer}>
          <Text style={styles.closeButton}>X</Text>
        </TouchableOpacity>
        <View style={styles.drawerContent}>
          <Text>Drawer Content</Text>
          <TouchableOpacity onPress={() =>{ 
            navigateToFirst();
            toggleDrawer();
            }}>

          <Text style={styles.closeButton}>FIRST</Text>
        </TouchableOpacity>
        <TouchableOpacity  
            onPress={() =>{ 
                navigateToSecond();
                toggleDrawer();
                }}>
          <Text style={styles.closeButton}>SECOND</Text>
        </TouchableOpacity>
        <TouchableOpacity  
            onPress={() =>{ 
                navigateToThird();
                toggleDrawer();
                }}>
          <Text style={styles.closeButton}>THIRD</Text>
        </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
 
  },
  header: {
    flex:1,
    position:'absolute',
    top:0,
    left:0,
    height: 60,
    backgroundColor: '#f0f0f0',
    width: '100%',
    justifyContent: 'center',
    alignItems:'flex-start',
  },
  headerText: {
    fontSize: 18,
    fontWeight:'bold',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  drawer: {
    position: 'absolute',
    top: 0, // Adjust the top position to accommodate the header
    bottom: 0,
    left: 0,
    width: 300,
    backgroundColor: 'lightgrey',
  },
  closeButton: {

    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 10,
    marginBottom: 10,
  },
  drawerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Custom10;