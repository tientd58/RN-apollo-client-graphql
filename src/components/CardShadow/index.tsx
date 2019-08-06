import React from 'react';
import { View } from 'react-native';

import styles from './styles';

interface Props {
  backgroundColor?: string;
  elevation?: number;
  borderRadius?: number;
  opacity?: number;
  children?: any;
  style?: object;
}

export default class Card extends React.PureComponent<Props> {
  render() {
    const { children, elevation, opacity, borderRadius, backgroundColor, style } = this.props;
    return(
      <View style={[styles(elevation, opacity, borderRadius, backgroundColor).container, style]}>
        {children}
      </View>
    );
  }
}
