import { StyleSheet, Platform, Dimensions } from 'react-native';

import { colors } from '../../utils/helpers';
import Responsive from '../../utils/responsive';

const styles = (elevation: number = 0, opacity: number = 0.5, borderRadius: number = 5, backgroundColor: string = colors.WHITE) => StyleSheet.create({
  container: Platform.select({
    ios: {
      shadowRadius: Responsive.h(elevation), 
      shadowOpacity: opacity, 
      shadowOffset: {
        width: 0,
        height: Responsive.h(elevation)
      },
      borderRadius: Responsive.h(borderRadius),
      backgroundColor,
      // width: Dimensions.get('window').width - Responsive.h(40),
    },
    android: {
      elevation,
      borderRadius: Responsive.h(borderRadius), 
      backgroundColor,
      // width: Dimensions.get('window').width - Responsive.h(40),
    }
  })
});

export default styles;
