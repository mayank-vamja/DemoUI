import React from 'react';
import { Image, ScrollView, Text, TouchableHighlight, View } from 'react-native';
import { styles } from './styles';

const Homepage = () => (
  <ScrollView>
    <View style={styles.home_wrapper}>
      <Text style={styles.welcomeBack}>Welcome</Text>
      <Image style={styles.topImage} source={require('./img/welcome.png')} />
      <Text style={styles.title}>Channel manager</Text>
      <Text style={styles.content}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
      <TouchableHighlight onPress={() => {}} underlayColor="white">
        <View style={styles.signin}>
          <Text style={styles.signinText}>Sign in</Text>
          <Image style={styles.signinIcon} source={require('../../icons/right_arrow.png')} />
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => {}} underlayColor="white">
        <View style={styles.register}>
          <Text style={styles.registerText}>Register</Text>
          <Image style={styles.registerIcon} source={require('../../icons/right_arrow_color.png')} />
        </View>
      </TouchableHighlight>
      <Text style={styles.pinPassword}>4 PIN PASSWORD</Text>
      <View style={styles.signupDivider}>
        <Text style={styles.signupDvivderText}>Sign up with</Text>
        <View style={styles.signupSeparator} />
      </View>
      <View style={styles.signupItems}>
        <View style={styles.signupItem}>
          <Image source={require('../../icons/google.png')} style={styles.signupItemIcon} />
        </View>
        <View style={styles.signupItem}>
          <Image source={require('../../icons/twitter.png')} style={styles.signupItemIcon} />
        </View>
        <View style={styles.signupItem}>
          <Image source={require('../../icons/facebook.png')} style={styles.signupItemIcon} />
        </View>  
      </View>
  </View>
    </ScrollView>
);

export default Homepage;