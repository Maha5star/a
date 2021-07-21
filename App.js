import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header} from 'react-native-elements';
import HomeScreen from './Screens/HomeScreen';

export default function App() {
  return (
   <View style={styles.container}>
     <HomeScreen/>
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
