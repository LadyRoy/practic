import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useFonts, Lato_500Medium } from '@expo-google-fonts/lato';
import { Image } from 'react-native';

const WindowStandart = ({ title, value, onChangeText, error }) => {
  let [fontsLoaded] = useFonts({
    Lato_500Medium,
  });
     return (
        <View style={styles.textContainer}>
          <Text style={styles.labelText}>{title}</Text>
          <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder=" "
            style={styles.inputText}
          />
          {error && <Image source={require('../assets/error.png')} style={styles.errorImage} />}
        </View>
      );
  };

const styles = StyleSheet.create({
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 9,
    width: 240,
    height: 50,
    borderWidth: 1,
    borderColor: '#303030',
    borderRadius: 3,
    marginBottom: 5,
    marginTop: 5,

  },
  labelText: {
    width: 200,
    height: 15,
    fontFamily: 'Lato_500Medium',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 12,
    color: '#707070',
  },
  inputText: {
    width: 208,
    height: 20,
    fontFamily: 'Lato_500Medium',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    color: '#2D2828',
    marginTop: 0,
  },
   errorImage: {

      width: 20,
      height: 20,
      marginLeft: 10,
      marginTop: -22,
      marginRight: -190,
    },
});

export default WindowStandart;