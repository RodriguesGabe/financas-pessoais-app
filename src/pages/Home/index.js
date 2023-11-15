import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from '../../components/Headers'

export default function Home() {
  return (
    <View style={styles.container}>
    <Header/>
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
  },
});
