import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../screen/Login/LoginScreen';
import { NavigationRoutes } from './Routes';

const AuthStack = createStackNavigator(
  {
    [NavigationRoutes.Login]: {
      screen: LoginScreen,
    }
  },
  {
    initialRouteName: NavigationRoutes.Login,
    headerMode: 'screen',
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
);

const RootStack = createStackNavigator(
  {
    [NavigationRoutes.AuthStack]: {
      screen: AuthStack,
    }
  },
  {
    initialRouteName: NavigationRoutes.AuthStack,
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
);

export default RootStack;
