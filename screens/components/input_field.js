import React, { useState } from 'react';
import { View, Image, TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  focusedInputBox: {
    flexDirection: 'row',
    marginVertical: 10,
    elevation: 10,
    shadowColor: 'rgba(84, 58, 155, 0.16)',
    shadowOffset: { width: 10, height: 0 },
    shadowRadius: 20,
    borderRadius: 10,
    borderColor: '#543a9b',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: '#ffffff',
  },
  blurredInputBox: {
    flexDirection: 'row',
    marginVertical: 10,
    borderRadius: 10,
    borderColor: '#f2f2f2',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: '#ffffff',
  },
  icon:{
    marginHorizontal: 15,
    height:16,
    width: 16,
    resizeMode: 'contain',
    alignSelf:'center',
  },
  input: {
    flex: 1,
    padding: 12,
    color: '#262626',
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '600',
  }
});

const InputField = (props) => {
  const [hasFocus, setFocus] = useState(false);
  return (
    <View style={hasFocus ? styles.focusedInputBox : styles.blurredInputBox}>
      {props.prefix && <Image style={styles.icon} source={props.prefix} />}
      <TextInput 
        placeholder={props.placeholder} 
        placeholderTextColor={"#b0b0b0"} 
        style={styles.input} 
        onFocus={() => setFocus(true)} 
        onBlur={() => setFocus(false)} 
      />
      {props.suffix && <Image style={styles.icon} source={props.suffix} />}
    </View>
  );
}

export default InputField;