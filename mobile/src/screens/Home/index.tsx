import React from 'react';
import { 
  View, 
  Image, 
  SafeAreaView,
  FlatList
} from 'react-native';

// Import images
import logo_img from '../../assets/logo-better-day.png';

// Import components
import { Heading } from '../../components/Heading';
import { DayCard } from '../../components/DayCard';

// Import styles
import { styles } from './styles';
import { units } from '../../theme/units';

export function Home() {
  const data = [
    {
      id: '1',
      title: 'Today',
      subtitle: 'Add a new card of what has been happening.'
    },
    {
      id: '2',
      title: 'Yesterday',
      subtitle: 'Add a new card of what has been happening.'
    },
    {
      id: '3',
      title: 'Last week',
      subtitle: 'Add a new card of what has been happening.'
    },

  ]

  return (
    <SafeAreaView style={styles.container}>

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
      <View style={styles.cardsContainer}>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <DayCard
              title={item.title}
              subtitle={item.subtitle}
            />
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          contentContainerStyle={{
            paddingHorizontal: units.padding,
            paddingBottom: units.padding,
          }}          
        />
      </View>

    </SafeAreaView>
  );
}