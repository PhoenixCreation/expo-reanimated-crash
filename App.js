import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Animated, Button } from 'react-native';

export default function App() {
  const translateY = React.useRef(new Animated.Value(0)).current;

  const goto = (end) => {
    Animated.timing(translateY, {
      toValue: end,
      duration: 1500,
      useNativeDriver: true
    }).start();
  }
  return (
    <View style={styles.container}>
      <View style={{ position: "absolute", left: 0, top: 0,right: 0, bottom:0, justifyContent: "space-between", zIndex: 10}}>
        <Button
          title="To bottom"
          onPress={() => goto(400)}
        />
        <Button
          title="To top"
          onPress={() => goto(0)}
        />
      </View>
      <Animated.Text style={{ margin: 50, transform: [{translateY}]}}>Testing the standalone build after installing reanimated 2.0-release candidate - 0</Animated.Text>
      <StatusBar style="auto" hidden />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
