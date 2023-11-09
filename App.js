import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Home from './app/index';
import axios from 'axios';

export default function App() {
  return (
    <View className="flex px-6 pt-16 relative bg-slate-100 min-h-full">
      <StatusBar style="auto" />
      <Image source={require('./assets/images/moviesBackground.jpg')} className="w-full absolute -top-5 opacity-10" style={{ height: 210, width: 420 }} />
      <Home />
    </View>
  );
}