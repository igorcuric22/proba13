import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const YourScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Your screen content */}
    </View>
  );
};

YourScreen.navigationOptions = ({ navigation }) => ({
  headerRight: () => (
    <View style={styles.headerButtons}>
      <Button title="Button 1" onPress={() => console.log("Button 1 pressed")} />
      <Button title="Button 2" onPress={() => console.log("Button 2 pressed")} />
    </View>
  ),
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerButtons: {
    flexDirection: 'row',
    marginRight: 10, // Adjust this value to add space between buttons and right edge
  },
});

export default YourScreen;
