import React, { useRef } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native';

const Animated1 = () => {
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

      {/* Button */}
      <TouchableOpacity style={styles.button} onPress={fadeIn}>
        <Text style={styles.buttonText}>Fade In</Text>
      </TouchableOpacity>
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

export default Animated1;

