import React from 'react';
import { View, Image } from 'react-native';

// Import images
import logo_img from '../../assets/logo-better-day.png';

// Import components
import { Heading } from '../../components/Heading';
import { DayCard } from '../../components/DayCard';

// Import styles
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
        title="All days"
        subtitle="Add a new card of what has been happening."
      />

      {/* Component DayCard */}
      <DayCard
        title="Monday"
        subtitle="Today I woke up at 6:00 am and I went to the gym."
      />

    </View>
  );
}