import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native';



const HomeScreen = ({ navigation }) => {
    return (
     
       <View style={{flex:1, justifyContent: 'center',
    alignItems: 'center',backgroundColor:'#ff00ff',top:60}}>
           <Text>Home Screen xxx</Text>
         </View>

    );
  };
  
  const DetailsScreen = ({ navigation }) => {
    return (
        <View style={{flex:1, justifyContent: 'flex-start',
        alignItems: 'center',top:60}}>
            <Text>Details Screen</Text>
          </View>
    );
  };

 

const Custom7 = () => {
  const [drawerOpened, setDrawerOpened] = useState(false);
  const drawerAnimation = useRef(new Animated.Value(0)).current;

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
        <Text style={styles.headerText}>Drawer Header</Text>
        <TouchableOpacity onPress={toggleDrawer}>
          <Text style={styles.toggleButton}>{drawerOpened ? "Close Drawer" : "Open Drawer"}</Text>
        </TouchableOpacity>
      </View>
     <View>
     {renderScreen()}
     </View>
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
          <Text style={styles.closeButton}>Close Drawer</Text>
        </TouchableOpacity>
        <View style={styles.drawerContent}>
          <Text>Drawer Content</Text>
          <TouchableOpacity onPress={() =>{ 
            navigateToHome();
            toggleDrawer();
            }}>

          <Text style={styles.closeButton}>HOME</Text>
        </TouchableOpacity>
        <TouchableOpacity  
            onPress={() =>{ 
                navigateToDetails();
                toggleDrawer();
                }}>
          <Text style={styles.closeButton}>DETAILS</Text>
        </TouchableOpacity>
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
  header: {
    position:'absolute',
    top:0,
    left:0,
    height: 50,
    backgroundColor: '#f0f0f0',
    width: '100%',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
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

export default Custom7;
