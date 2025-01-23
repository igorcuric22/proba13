import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text>This is the Header</Text>
    </View>
  );
};

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text>This is the Footer</Text>
    </View>
  );
};

const Body = () => {
  return (
    <View style={styles.body}>
      <Text>This is the Body</Text>
    </View>
  );
};

const Dio3 = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Body />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    backgroundColor: 'lightblue',
    alignItems: 'center',
    padding: 10,
  },
  footer: {
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    padding: 10,
  },
  body: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default Dio3;
