import { StyleSheet, Dimensions } from 'react-native';

import { colors } from '../../utils/helpers';
import Responsive from '../../utils/responsive';

const styles = StyleSheet.create({
  container: {
    position:'absolute',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    left: 0,
    right: 0,
    bottom: 0,
    height: Dimensions.get('screen').height,
    width: '100%',
  },
  loadingContainer: {
    width: Responsive.h(70),
    height: Responsive.h(70),
    borderRadius: Responsive.h(5),
    backgroundColor: colors.WHITE
  }
});

export default styles;