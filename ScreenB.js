// ScreenB.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const ScreenB = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Screen B</Text>
      <Button title="Go back to Screen A" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default ScreenB;
