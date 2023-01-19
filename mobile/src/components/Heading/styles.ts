import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 20,
  },
  title: {
    color: THEME.COLORS.TEXT_TITLE,
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    paddingLeft: 15,
  },
  subtitle: {
    color: THEME.COLORS.TEXT_SUBTITLE,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    paddingLeft: 15,
    marginBottom: 5,
  },
});