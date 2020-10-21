import React from 'react';
import { Image, ScrollView, Text, TouchableHighlight, View } from 'react-native';
import InputField from '../components/input_field';
import { styles } from './styles';

const Signin = () => (
  <ScrollView>
    <View style={styles.login_wrapper}>
      <View style={styles.back_icon_wrapper}>
        <Image source={require('../../icons/left_arrow.png')} style={styles.back_icon} />
      </View>
      <Text style={styles.title}>Signin</Text>
      <Text style={styles.content}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
      <InputField placeholder="Username" prefix={require('../../icons/mail.png')} />
      <InputField placeholder="Password" prefix={require('../../icons/lock.png')} suffix={require('../../icons/password_show_icon.png')} />
      <InputField placeholder="Property ID" prefix={require('../../icons/community-fill.png')} />
      <View style={styles.bottom_buttons}>
        <TouchableHighlight onPress={() => {}} underlayColor="white">
          <View style={styles.signin}>
            <Text style={styles.signinText}>Sign in</Text>
            <Image style={styles.signinIcon} source={require('../../icons/right_arrow.png')} />
          </View>
        </TouchableHighlight>
        <Text style={styles.pinPassword}>4 PIN PASSWORD</Text>
      </View>
    </View>
  </ScrollView>
);

export default Signin;