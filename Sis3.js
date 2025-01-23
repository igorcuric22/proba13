import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate("ScreenB")} />
    </View>
  );
};

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details Screen</Text>
      <Button title="Go back to Home" onPress={() => navigation.navigate("ScreenA")} />
    </View>
  );
};

const Sis3 = () => {
  const [screen, setScreen] = useState("ScreenA");

  const navigate= (screenName) => {
    setScreen(screenName);
  };

  return (
    <View style={{ flex: 1 }}>
      {screen === "ScreenA" && <HomeScreen navigation={{navigate}} />}
      {screen === "ScreenB" && <DetailsScreen navigation={{navigate}} />}
    </View>
  );
};


export default Sis3;
