import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated from "react-native-reanimated"

export default function App() {
  return (
    <View style={styles.container}>
      <Animated.Text>Testing the standalone build after installinig reanimated 2.0-alpha</Animated.Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
