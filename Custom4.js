import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native';

const Custom4 = () => {
  const [drawerOpened, setDrawerOpened] = useState(false);
  const drawerAnimation = useRef(new Animated.Value(0)).current;

  const toggleDrawer = () => {
    const toValue = drawerOpened ? 0 : 1;
    Animated.timing(drawerAnimation, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setDrawerOpened(!drawerOpened);
  };

  return (
    <View style={styles.container}>
         <View style={styles.header}>
          <Text style={styles.headerText}>Drawer Header</Text>
        </View>
      <TouchableOpacity onPress={toggleDrawer}>
        <Text style={styles.buttonText}>Toggle Drawer</Text>
      </TouchableOpacity>
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
       
        <View style={styles.drawerContent}>
          <TouchableOpacity onPress={toggleDrawer}>
            <Text style={styles.closeButton}>Close Drawer</Text>
          </TouchableOpacity>
          <Text>Drawer Content</Text>
          {/* Add more drawer content here */}
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  drawer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: 300,
    backgroundColor: 'white',
  },
  header: {
    height: 50,
    position: 'absolute',
    top: 0,
    left:0,
    width:'100%',
    backgroundColor: '#f0f0f0',

  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
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

export default Custom4;
