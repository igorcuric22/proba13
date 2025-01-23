// Drawer.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Drawer = ({ onClose,onOpen }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onOpen}>
        <Text style={styles.drawerItem}>Open Drawer</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onClose}>
        <Text style={styles.drawerItem}>Close Drawer</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.drawerItem}>Item 1</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.drawerItem}>Item 2</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  drawerItem: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default Drawer;