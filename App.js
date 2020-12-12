import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Animated, Button } from 'react-native';
import * as Animatable from 'react-native-animatable';

const animation = {
  0: { opacity: 0, translateX: 50, translateY: -50},
  1: { opacity: 1, translateX: 0, translateY: 0}
}


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
      <Animatable.View
        animation={animation}
        duration={2000}
        delay={1000}
        style={{ width: 100, height: 100, backgroundColor: "red", borderRadius: 25}}
      >
      </Animatable.View>
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
