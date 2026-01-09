import React from 'react';
import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Payment Gateway</Text>
      <Pressable
        style={styles.button}
        onPress={() => Alert.alert('Payment successful')}
      >
        <Text style={styles.buttonText}>Pay now</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white",
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
    button: {
    backgroundColor: '#2177daff',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  }, 
});
