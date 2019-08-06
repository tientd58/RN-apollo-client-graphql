import React from 'react';
import {
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  Image,
  Text,
  Alert,
} from 'react-native';
import get from 'lodash.get';
import styles from './styles';
import { NavigationRoutes } from '../../navigation/Routes';
import { colors } from '../../utils/helpers';
import Responsive from '../../utils/responsive';
import { LoginMutation } from '../../containers/User/LoginMutation';
import CircleLoading from '../../components/CircleLoading';
import { Storage, StorageKey } from '../../utils/storage';

interface State {
  emailAddress: string;
  password: string;
}

interface Props {
  navigation: any;
}

export default class LoginScreen extends React.Component<Props, State> {
  static navigationOptions = ({ navigation }: any) => ({
    headerStyle: {
      backgroundColor: colors.MAIN_BACKGROUND,
      borderBottomWidth: 0,
      elevation: 0,
      height: Responsive.h(50)
    },
    headerTitleStyle: {
      color: colors.WHITE,
      fontSize: Responsive.h(18),
    }
  })
  constructor(props: Props) {
    super(props);
    this.state = {
      emailAddress: '',
      password: '',
    };
  }

  render() {
    const { navigation } = this.props;
    const { emailAddress, password } = this.state;
    return (
      <ScrollView
        contentContainerStyle={{ justifyContent: 'flex-start', display: 'flex', flex: 1 }}
        style={styles.container}
      >
        <KeyboardAvoidingView keyboardVerticalOffset={100} behavior="padding">
          <SafeAreaView>
            <LoginMutation
              onCompleted={async (data) => {
                if (data && data.token) {
                  await Storage.set(StorageKey.AuthToken, data.token);
                  if (get(data, 'user.company.id')) {
                    navigation.navigate(NavigationRoutes.Home);
                  } else {
                    navigation.navigate(NavigationRoutes.AuthStack);
                  }
                }
              }}
              onError={(error) => Alert.alert('Error', error)}
            >
              {({ login, loading }) => {
                return (
                  <View>
                    <CircleLoading isVisible={loading} offset={50} />
                    <View style={styles.logoScope}>
                      <View style={styles.logoContainer}>
                        <Text>LOGO</Text>
                      </View>
                    </View>
                    <Text style={styles.heading}>Login To Your Account</Text>
                    <TextInput
                      autoCapitalize="none"
                      autoCorrect={false}
                      returnKeyType="next"
                      placeholderTextColor={colors.WHITE}
                      style={styles.input}
                      placeholder="Email Address"
                      onChangeText={(e) => this.setState({ emailAddress: e })}
                    />
                    <TextInput
                      returnKeyType="go"
                      placeholderTextColor={colors.WHITE}
                      style={styles.input}
                      onChangeText={(e) => this.setState({ password: e })}
                      placeholder="Password"
                      secureTextEntry={true}
                      onSubmitEditing={() => login(emailAddress, password)}
                    />

                    <TouchableOpacity
                      onPress={() => login(emailAddress, password)}
                      style={styles.actionSignIn}
                    >
                      <Text style={styles.actionSignInText}>Sign In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.actionForgotPassword}
                    >
                      <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                    </TouchableOpacity>
                  </View>
                );
              }}
            </LoginMutation>
          </SafeAreaView>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}
