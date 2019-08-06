import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

interface Props {
  navigation: any;
}

interface State {
  title: string;
}

export default class HomeScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      title: 'Hello home screen'
    };
  }

  render() {
    const { title } = this.state;
    return (
      <View style={styles.container}>
        <Text>{title}</Text>
      </View>
    );
  }
}