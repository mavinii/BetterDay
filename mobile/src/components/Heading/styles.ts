import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
    marginTop: 20,
  },
  title: {
    color: THEME.COLORS.TEXT_TITLE,
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.BOLD,
  },
  subtitle: {
    color: THEME.COLORS.TEXT_SUBTITLE,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  },
});