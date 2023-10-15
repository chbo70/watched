import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './app/index';
import axios from 'axios';

export default function App() {

  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(function (response) {
      // handle success
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  return (
    <View style={styles.container}>
    {/*Create Button that redirects me to the app/index.js*/}
      <Text onPress={() => alert('Hello, world!')}>Hello, world!</Text>
      <StatusBar style="auto" />

      <Home />
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
