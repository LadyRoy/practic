import React from 'react';
import {  View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useFonts, Lato_500Medium } from '@expo-google-fonts/lato';

const ButtonBlack = ({ title, onPress, style, left, top }) => {
  let [fontsLoaded] = useFonts({ Lato_500Medium });

  return (
    <TouchableOpacity style={[styles.appBlackButton, style, { left, top }]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  appBlackButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    width: 240,
    height: 40,
    backgroundColor: '#313131',
    borderRadius: 3,
  },
  buttonText: {
    fontFamily: 'Lato_500Medium',
    fontSize: 14,
    lineHeight: 20,
    color: '#FFFFFF',
  }
});

export default ButtonBlack;