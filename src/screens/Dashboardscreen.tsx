import { NavigationProp, useNavigation } from "@react-navigation/native"
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RootStackParamList } from '../navigation/RootStackParamsList';
const Dashboardscreen = () => {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={decrement}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>

      <Text style={styles.counterText}>{count}</Text>

      <TouchableOpacity style={styles.button} onPress={increment}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboardscreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 50,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 50,
    fontWeight: 'bold',
  },
  counterText: {
    fontSize: 200,
    fontWeight: 'bold',
  },
});

