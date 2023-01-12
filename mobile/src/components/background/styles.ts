import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

// Compare this snippet from mobile/src/theme/index.ts:
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.COLORS.BACKGROUND
    }
});