import {StyleSheet} from 'react-native';
import {colors, fontFamily} from '@/styles/theme';

export const styles = StyleSheet.create({
    container: {
        gap:24,
        flex:1,
    },
    title: {
        fontSize:16,
        fontWeight: 'bold',
        fontFamily: fontFamily.regular,
        color: colors.gray[500],
    },
});