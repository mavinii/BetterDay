import React from 'react';
import { View, Text, Image } from 'react-native';

import logo_img from '../../assets/logo-better-day.png';
import { Heading } from '../../components/Heading';

import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>

      {/* Logo */}
      <Image 
      source={logo_img}
      style={styles.logo}
      />

      {/* Component Heading */}
      <Heading 
        title="Bem-vindo ao"
        subtitle="Better Day"
      />

    </View>
  );
}