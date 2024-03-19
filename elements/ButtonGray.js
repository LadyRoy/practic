import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useFonts, Lato_500Medium } from '@expo-google-fonts/lato';

const ButtonGray = ({ title, onPress, style, left, top }) => {
  let [fontsLoaded] = useFonts({ Lato_500Medium });
  return (
    <TouchableOpacity style={[styles.appGrayButton, style, { left, top }]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  appGrayButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    width: 240,
    height: 40,
    backgroundColor: '#4A4A4A',
    borderRadius: 3
  },
  buttonText: {
    fontFamily: 'Lato_500Medium',
    fontSize: 14,
    lineHeight: 20,
    color: '#FFFFFF'
  }
});

export default ButtonGray;