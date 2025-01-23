// ScreenA.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const ScreenA = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Screen A</Text>
      <Button title="Go to Screen B" onPress={() => navigation.navigate('ScreenB')} />
    </View>
  );
};

export default ScreenA;
