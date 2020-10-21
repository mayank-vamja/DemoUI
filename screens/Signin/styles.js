import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  login_wrapper: {
    padding: 20,
    flex:1,
    backgroundColor: '#ffffff',
  },
  back_icon_wrapper: {
    elevation: 8,
    shadowColor: 'rgba(163, 87, 248, 0.26)',
    shadowOffset: { width: 10, height: 0 },
    padding: 12,
    shadowRadius: 10,
    borderRadius: 12,
    backgroundColor: '#543a9b',
    alignSelf: 'flex-start'
  },
  back_icon: {
    width: 16,
    height: 16,
    resizeMode: 'contain'
  },
  title: {
    color: '#262626',
    fontFamily: 'Inter',
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'left',
    marginTop: 50,
  },
  content: {
    color: '#707070',
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'left',
    marginTop: 15,
    lineHeight: 20,
    marginBottom: 30,
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
    // lineHeight: 15,
  },
  signinIcon: {
    width: 20,
    height: 20,
    margin: 24,
    resizeMode: 'contain',
    position: 'absolute',
    alignSelf: 'center',
    right: 20,
    padding: 10,
  },
  pinPassword: {
    color: '#ff7c49',
    fontFamily: 'Inter',
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'center',
    marginVertical: 40,
    textDecorationLine: 'underline',
  },
  bottom_buttons: {
    marginTop: 50,
  },
});