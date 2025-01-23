import React from 'react';
import { View, Text } from 'react-native';

const Element2 = () => {
  return (
    <View>
      <Text>This is Element xxtttvvvx</Text>
    </View>
  );
};


const Element1 = {
  Element2: function() {
    return (
      <Element2 />
    );
  }
};



export default Element1;
