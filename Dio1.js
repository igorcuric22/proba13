import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
    
      <Text style={styles.headerText}>Header</Text>
      <Text style={styles.headerText}>Header</Text>
    </View>
  );
};

const Body = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.bodyText}>Body</Text>
    </View>
  );
};

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Footer</Text>
    </View>
  );
};

const Dio1 = () => {
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
    backgroundColor: '#fff',
  },
  header: {
    height: 60,
    backgroundColor: '#3498db',
    //flexDirection: 'row',
    //marginRight: 10, 
    justifyContent:'center',
    alignItems: 'flex-end',
  },
  headerText: {
    fontSize: 20,
    color: '#fff',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyText: {
    fontSize: 18,
  },
  footer: {
    height: 60,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 20,
    color: '#fff',
  },
});

export default Dio1;
