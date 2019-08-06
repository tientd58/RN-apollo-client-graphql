import React from 'react';
import { View, StyleSheet } from 'react-native';

import CircleLoading from '../components/CircleLoading';
import { colors } from '../utils/helpers';
import { StorageKey, Storage } from '../utils/storage';
import { NavigationRoutes } from './Routes';
import Responsive from '../utils/responsive';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingContainer: {
    width: Responsive.h(70),
    height: Responsive.h(70),
    borderRadius: Responsive.h(5),
    backgroundColor: colors.BLUE,
  },
});

interface Props {
  navigation: any;
}

class AuthLoading extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.checkAuthencation();
  }

  checkAuthencation = async () => {
    const { navigation } = this.props;
    const authToken = await Storage.get(StorageKey.AuthToken);
    if (authToken === null) {
      navigation.navigate(NavigationRoutes.AuthStack);
    } else {
      navigation.navigate(NavigationRoutes.AuthStack);
      // navigation.navigate(NavigationRoutes.Home);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <CircleLoading isVisible={true} />
      </View>
    );
  }
}

export default AuthLoading;
