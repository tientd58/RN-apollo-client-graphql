import { StyleSheet } from 'react-native';
import { colors } from '../../utils/helpers';
import Responsive from '../../utils/responsive';

const styles = StyleSheet.create({
  question: {
    color: colors.BLACK,
    fontSize: 16,
  },
  input: {
    padding: 15,
    fontSize: 15,
    borderRadius: 5,
    backgroundColor: colors.MAIN_ITEM,
    color: 'white',
    marginBottom: 15,
  },
  header: {
    flexDirection: 'row',
    paddingLeft: Responsive.h(15),
    alignItems: 'center',
  },
  logo: {
    width: Responsive.h(80),
    height: Responsive.h(80),
  },
  logoScope: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Responsive.h(10),
  },
  logoContainer: {
    width: Responsive.h(80),
    height: Responsive.h(80),
    borderRadius: Responsive.h(40),
    marginTop: Responsive.v(10),
    marginBottom: Responsive.v(20),
    borderColor: colors.WHITE,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.MAIN_BACKGROUND,
    paddingHorizontal: 15,
  },
  actionContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  actionSignIn: {
    backgroundColor: colors.BLUE,
    borderRadius: 5,
    paddingHorizontal: 25,
    paddingVertical: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  actionSignInText: {
    color: colors.WHITE,
    fontWeight: '600',
  },
  actionForgotPassword: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotPasswordText: {
    color: colors.WHITE,
    fontWeight: '600',
  },
  loginButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  getStartText: {
    color: 'white',
    fontWeight: '600',
  },
  description: {
    marginBottom: 30,
    color: 'white',
    opacity: 0.9,
  },
  heading: {
    color: colors.WHITE,
    fontSize: Responsive.h(20),
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: Responsive.h(20),
  },
});

export default styles;
