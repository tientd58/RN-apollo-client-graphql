import React from 'react';
import { DotIndicator } from 'react-native-indicators';

import { colors } from '../../utils/helpers';
import Responsive from '../../utils/responsive';

interface Props {
  isVisible: boolean;
}

export default class DotLoading extends React.PureComponent<Props, {}> {
  render() {
    const { isVisible } = this.props;

    if (isVisible) {
      return (
          <DotIndicator
            size={Responsive.h(13)}
            color={colors.WHITE}
            count={3}
          />
      );
    }
    return null;
  }
}
