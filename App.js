import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import StackNavigator from './navigators/StackNavigator';

export default function App() {
  return (
    <View style={styles.container}>
      <StackNavigator/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebebeb'
  },
});