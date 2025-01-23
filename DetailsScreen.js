// DetailsScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const DetailsScreen = ({ navigate }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details Screen</Text>
      <Button title="Go back to Home" onPress={() => navigate('Home')} />
    </View>
  );
};

export default DetailsScreen;
