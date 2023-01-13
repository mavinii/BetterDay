import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
  },
  title: {
    color: THEME.COLORS.TEXT_TITLE,
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONTS.BODY,
  },
  subtitle: {
    color: THEME.COLORS.TEXT_SUBTITLE,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONTS.BODY,
  },
});