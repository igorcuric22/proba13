import React, { useRef } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native';

const Animated2 = () => {
  // Create animated value
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value 0

  const fadeIn = () => {
    // Fade in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000, // 1 second
      useNativeDriver: true, // For better performance
    }).start();
  };

  const fadeOut = () => {
    // Fade in animation
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 5000, // 1 second
      useNativeDriver: true, // For better performance
    }).start();
  };

  return (
    <View style={styles.container}>
      {/* Animated View */}
      <Animated.View
        style={[
          styles.box,
          {
            opacity: fadeAnim, // Bind opacity to animated value
        },
        ]}
      >
        <Text style={styles.text}>Fade In Animation</Text>
      </Animated.View>

      {/* Buttons */}
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={fadeIn}>
          <Text style={styles.buttonText}>Fade In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={fadeOut}>
          <Text style={styles.buttonText}>Fade Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  button: {
    marginTop: 20,
    backgroundColor: 'steelblue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Animated2;
