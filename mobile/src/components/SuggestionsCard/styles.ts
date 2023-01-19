import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    marginRight: 15,
  },
  cover: {
    width: 160,
    height: 240,
    borderRadius: 8,
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  footer: {
    width: '100%',
    height: 102,
    padding: 16,
    justifyContent: 'flex-end',
  },
  name: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.BOLD,
  },
  ads: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  },
});