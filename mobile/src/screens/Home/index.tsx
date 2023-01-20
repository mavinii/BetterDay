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

// Import Suggestions and Data
import { SUGGESTIONS } from '../../utils/suggestions';
import { DATA } from '../../utils/data';

// Import styles
import { styles } from './styles';

export function Home() {
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

      {/* This will be the cards the users are going to add */}
      <View style={styles.cardsContainer}>
        <FlatList
          data={DATA}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <DayCard
              title={item.title}        // title="" 
              subtitle={item.subtitle}  // subtitle=""
              // icon="plus"               // icon=""
              // image="https://images.unsplash.com/photo-1616161616161-1c1c1c1c1c1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            />
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          contentContainerStyle={styles.contentListDayCard}          
        />
      </View>

      {/* Sugestions component with title and subtitle */}
      <HeadingSugestions 
        title="Lorem ipsum"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />

      {/* This will be the cards the users will recieve as suggestions of how to avoid it */}
      {/* This also uses Flatlist that allows to display all cards horizontal */}
      <FlatList
        data={SUGGESTIONS}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <SuggestionsCard
            data={{
              id: item.id,
              name: item.name,
              subtitle: item.subtitle,
              cover: item.cover,
            }}
          />
        )}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.contentListSuggestionsCard}
      />

    </SafeAreaView>
  );
}