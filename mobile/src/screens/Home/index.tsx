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
import { HeadingSugestions } from '../../components/HeadingSugestions';
import { SuggestionsCard } from '../../components/SuggestionsCard';

// Import Suggestions
import {SUGGESTIONS} from '../../utils/suggestions';

// Import styles
import { styles } from './styles';
import { units } from '../../theme/units';

export function Home() {
  const data = [
    {
      id: '1',
      title: 'Today',
      subtitle: 'laboriosam excepturi velit aperiam assumenda unde dolorem animi ipsa illo!'
    },
    {
      id: '2',
      title: 'Yesterday',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    // {
    //   id: '3',
    //   title: 'Last week',
    //   subtitle: 'This happened last week'
    // },
  ]

  return (
    <SafeAreaView style={styles.container}>

      {/* Logo */}
      <Image 
        source={logo_img}
        style={styles.logo}
      />

      {/* Heading Component */}
      <Heading 
        title="All days"
        subtitle="Add a new card of what has been happening."
      />

      {/* Component DayCard with FlatList */}
      <View style={styles.cardsContainer}>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <DayCard
              title={item.title}        // title="" 
              subtitle={item.subtitle}  // subtitle=""
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

      {/* Sugestions component title and subtitle */}
      <HeadingSugestions 
        title="Lorem ipsum"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />

      {/* Component SuggestionsCard background imgs */}
      <SuggestionsCard
        data={{
          id: SUGGESTIONS[0].id,
          name: SUGGESTIONS[0].name,
          ads: SUGGESTIONS[0].ads,
          cover: SUGGESTIONS[0].cover,
        }}
      />

    </SafeAreaView>
  );
}