import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  home_wrapper: {
    paddingTop: 48,
    paddingHorizontal: 24,
    paddingBottom: 24,
    flex:1,
    backgroundColor: '#ffffff',
  },
  welcomeBack: {
    color: '#262626',
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: '300',
    textAlign: 'center',
  },
  topImage: {
    marginVertical: 35,
    alignSelf:'center',
    height: 120,
    resizeMode: 'contain',
  },
  title: {
    color: '#262626',
    fontFamily: 'Inter',
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
  },
  content: {
    color: '#707070',
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 40,
  },
  signin: {
    shadowColor: 'rgba(0, 0, 0, 0.08)',
    shadowOffset: { width: 15, height: 0 },
    shadowRadius: 15,
    elevation: 1,
    borderRadius: 16,
    backgroundColor: '#ff7c49',
    padding: 25
  },
  signinText: {
    color: '#ffffff',
    fontFamily: 'Inter',
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: 15
  },
  signinIcon: {
    width: 20,
    height:20,
    margin: 20,
    resizeMode: 'contain',
    position: 'absolute',
    right: 20,
    padding: 10,
  },
  register: {
    borderRadius: 16,
    borderColor: '#ff7c49',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    padding: 21,
    marginVertical: 20,
  },
  registerText: {
    color: '#262626',
    fontFamily: 'Inter',
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'center',
  },
  registerIcon: {
    width: 20,
    height: 20,
    margin: 20,
    resizeMode: 'contain',
    position: 'absolute',
    right: 20,
    padding: 10,
  },
  pinPassword: {
    color: '#ff7c49',
    fontFamily: 'Inter',
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  signupDivider: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  signupDvivderText: {
    color: '#b1b1b1',
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '400',
  },
  signupSeparator: {
    height: 1,
    borderColor: '#e2e2e2',
    borderStyle: 'solid',
    borderWidth: 1,
    marginStart: 10,
    flex: 1
  },
  signupItems: {
    flexDirection: 'row',
    padding:10,
    justifyContent: 'center',
  },
  signupItem: {
    padding: 20,
    shadowColor: 'rgba(211, 211, 211, 0.15)',
    shadowOffset: { width: 10, height: 0 },
    shadowRadius: 10,
    borderRadius: 16,
    elevation: 2,
    backgroundColor: '#ffffff',
    marginHorizontal: 10,
    alignContent:'center'
  },
  signupItemIcon: {
    width:28,
    height:28,
    resizeMode: 'contain',
    alignSelf: 'center'
  }
});