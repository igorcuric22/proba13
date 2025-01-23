// HomeScreen.js
import React from 'react';
import { View, Button,Text } from 'react-native';

const HomeScreen = ({ navigate }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home</Text>
      <Button title="Go to Details" onPress={() => navigate('Details')} />
    </View>
  );
};

export default HomeScreen;
