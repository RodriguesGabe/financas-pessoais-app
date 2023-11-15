import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Headers'

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Página Home</Text>
      <Text>Página Home</Text>
      <Text>Página Home</Text>
      <Text>Página Home</Text>
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
