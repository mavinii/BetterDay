import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { 
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter'

// Screens
import { Home } from './src/screens/Home';

// it is a component that loads the fonts
import { Loading } from './src/components/Loading';
// it is a component image that will be used in all screens 
import { Background } from './src/components/Background';

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

      {/* Status bar transparent */}
      <StatusBar 
      barStyle="dark-content" 
      backgroundColor="trasparent"
      translucent      
      />

      {/* it checks if the font is loaded, if not, keeps loading */}
      { fontsLoaded ? <Home /> : <Loading /> }
    </Background>
  );
}