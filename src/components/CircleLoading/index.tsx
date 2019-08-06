import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { MaterialIndicator } from 'react-native-indicators';

import styles from './styles';
import { colors } from '../../utils/helpers';
import Responsive from '../../utils/responsive';

interface Props {
  isVisible: boolean;
  offset?: number;
}

export default class CircleLoading extends React.PureComponent<Props, {}> {
  render() {
    const { isVisible, offset } = this.props;

    if (isVisible) {
      return (
        <SafeAreaView style={[styles.container, { top: -Responsive.h(!offset ? 0 : offset) }]}>
          <View style={styles.loadingContainer}>
            <MaterialIndicator color={colors.BLUE} size={Responsive.h(40)} />
          </View>
        </SafeAreaView>
      );
    }
    return null;
  }
}
