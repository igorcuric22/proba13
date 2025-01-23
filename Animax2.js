// App.js
import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Animated } from 'react-native';
import Drawer from './Drawer';

const Animax2 = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const fadeAnim = useState(new Animated.Value(0))[0]; // Initial opacity value
  const translateX = fadeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-300, 0],
  });

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    Animated.timing(fadeAnim, {
      toValue: isDrawerOpen ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={toggleDrawer}>
        <Text style={styles.buttonText}>xxx {isDrawerOpen ? 'Close Drawer' : 'Open Drawer'}</Text>
      </TouchableOpacity>
      <Animated.View style={[styles.drawer, { transform: [{ translateX }] }]}>
        <Drawer onClose={toggleDrawer} />
      </Animated.View>
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
  button: {
    padding: 10,
    backgroundColor: 'steelblue',
    borderRadius: 5,
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
    width: 300,
    backgroundColor: '#00ff00',
    zIndex: 100,
  },
});

export default Animax2;
