import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { 
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter'


import { Home } from './src/screens/Home';
import { Loading } from './src/components/loading';

// Background img for all screens 
import { Background } from './src/components/background';

export default function App() {

  // Load fonts
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  });

  if(!fontsLoaded) {
    return null;
  }

  return (
    <Background>
      <StatusBar 
      barStyle="dark-content" 
      backgroundColor="trasparent"
      translucent 
      
      />

      { fontsLoaded ? <Home /> : <Loading /> }
    </Background>
  );
}