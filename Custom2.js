import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';

const Custom2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [drawerWidth] =useState(new Animated.Value(0));

  const toggleDrawer = () => {
    Animated.timing(drawerWidth, {
      toValue: isOpen ? 0 : 250,
      duration: 300,
      useNativeDriver: false, // Adjust based on your animation requirements
    }).start();
    setIsOpen(!isOpen);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My App</Text>
      </View>
      <Animated.View style={[styles.drawer, { width: drawerWidth }]}>
        {/* Drawer Content Goes Here */}
        <Text style={styles.drawerText}>Menu Item 1</Text>
        <Text style={styles.drawerText}>Menu Item 2</Text>
        <Text style={styles.drawerText}>Menu Item 3</Text>
        <Text style={styles.drawerText}>Menu Item 4</Text>
      </Animated.View>
      <TouchableOpacity style={styles.toggleBtn} onPress={toggleDrawer}>
        <Text style={styles.toggleBtnText}>Toggle Drawer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    backgroundColor: '#555',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
  },
  drawer: {
    backgroundColor: '#333',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  drawerText: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },
  toggleBtn: {
    backgroundColor: '#555',
    padding: 10,
    position: 'absolute',
    top: 20,
    left: 20,
  },
  toggleBtnText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Custom2;
