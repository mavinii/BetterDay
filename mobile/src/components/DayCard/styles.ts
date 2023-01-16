import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

// Cards styles
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  card: {
    padding: 15,
    margin: 7,
    width: 180,
    height: 118,
    borderRadius: 10,
    backgroundColor: THEME.COLORS.CARD_1,
  },
  title: {
    marginBottom: 10,
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.BOLD,
  },
  subtitle: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  },
});