import React from 'react';
import { ImageBackground } from 'react-native';

import { styles } from './styles';

// importing the background img
import { backgroundImg } from '../../assets/imagens/background-better-day.png';
 
// creating an interface typed for the backound running in all my application
interface Props {
  children: React.ReactNode;
} 

export function Background({ children }: Props) {
  return (
    <ImageBackground 
    source={ backgroundImg }
    defaultSource={ backgroundImg }
    style={styles.container}
    
    >
      {children}
    </ImageBackground>
  );
}