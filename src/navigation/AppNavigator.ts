import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import AuthLoading from './AuthLoading';
import HomeRootStack from './HomeStack';
import AuthStack from './AuthStack';
import { NavigationRoutes } from './Routes';

export default createAppContainer(
  createSwitchNavigator({
    AuthLoading,
    AuthStack,
    HomeRootStack
  },
  {
    initialRouteName: NavigationRoutes.AuthLoading
  })
);