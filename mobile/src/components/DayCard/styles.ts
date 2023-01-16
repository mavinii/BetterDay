import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

// Cards styles
export const styles = StyleSheet.create({
  card: {
    padding: 10,
    margin: 5,
    width: 188,
    height: 118,
    borderRadius: 10,
    backgroundColor: THEME.COLORS.CARD_1,
  },
  title: {
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