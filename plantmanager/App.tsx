import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Welcome from './src/pages/Welcome';

export default function App() {
  return (
    <View
      style={styles.container}
    >
      <Welcome />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 25,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
