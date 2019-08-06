import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

interface Props {
  title: string;
  onPress: () => void;
  titleStyle?: object;
  containerStyle: object;
}

class Button extends React.PureComponent<Props> {
  
  render() {
    const { title, onPress, containerStyle, titleStyle } = this.props;
    return (
      <TouchableOpacity onPress={onPress} style={[styles.container, containerStyle]}>
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

export default Button;