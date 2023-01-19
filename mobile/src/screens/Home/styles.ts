import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: 60,
    height: 60,
    marginTop: 30,
  },
  cardsContainer: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    maxHeight: 500,
  },
  contentListDayCard: {
    paddingLeft: 10,
    paddingRight: 20,
  },
  contentListSuggestionsCard: {
    paddingLeft: 18,
    paddingRight: 50,
  },
});