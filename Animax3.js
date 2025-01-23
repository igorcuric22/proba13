// App.js
import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Animated } from 'react-native';
import Drawer from './Drawer';

const Animax3 = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const fadeAnim = useState(new Animated.Value(0))[0]; // Initial opacity value
 

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
    outputRange: [-300, 0],
  });



  return (
    <View style={styles.container}>
    <View style={styles.buttonx} >
      <TouchableOpacity style={styles.button} onPress={toggle1}>
        <Text style={styles.buttonText}>Open</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={toggle2}>
        <Text style={styles.buttonText}>Close</Text>
      </TouchableOpacity>
    </View>
      <Animated.View style={[styles.drawer, { transform: [{ translateX }] }]}>
        <Drawer onClose={toggle2} onOpen={toggle1} />
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
    width: 300,
    backgroundColor: '#00ff00',
    zIndex: 100,
  },
});

export default Animax3;
