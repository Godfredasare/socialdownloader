import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigation from './App/Navigation/AppNavigation';
import Navigation from './App/Navigation/Navigation';
import HomeScreen from './App/Screens/HomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
    <NavigationContainer>

      <AppNavigation />
      {/* <StatusBar style="auto" /> */}
    </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  },
});
