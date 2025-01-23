// App.js
import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Animated } from 'react-native';
import Drawer from './Drawer';

const Animax1 = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(0)); // Initial opacity value

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    if (!isDrawerOpen) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={toggleDrawer}>
        <Text style={styles.buttonText}>{isDrawerOpen ? 'Close Drawer' : 'Open Drawer'}</Text>
      </TouchableOpacity>
      <Animated.View style={[styles.drawer, { opacity: fadeAnim, transform: [{ translateX: fadeAnim.interpolate({ inputRange: [0, 1], outputRange: [-300, 0] }) }] }]}>
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
    backgroundColor: '#fff',
    zIndex: 100,
  },
});

export default Animax1;
