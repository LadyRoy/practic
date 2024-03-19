import React, { useState } from 'react';
import { TextInput, Alert, ScrollView, Platform, StyleSheet, Text, View } from 'react-native';
import ButtonBlack from '../elements/ButtonBlack.js';
import ButtonGray from '../elements/ButtonGray.js';
import { KeyboardAvoidingView } from 'react-native';
import WindowStandart from '../elements/WindowStandart.js';

const NumberCodeForm = ({ navigation }) => {
  const [number, setNumber] = useState('');
  const [code, setCode] = useState('');
  const [error, setError] = useState(false);


  const handleNumber = () => {
    if (number === '12345' && code === '12345') {
      Alert.alert('Успешно', 'Вход успешен');
    } else {
      setError(true);
    }
  };

  const sendTheCode = () => {
    if (number === '12345') {
      Alert.alert('Успешно', 'Ваш код: 12345');
    } else {
      setError(true);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleNumber();
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'android' ? 'padding' : null}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <WindowStandart
            title="Введите номер"
            value={number}
            onChangeText={(text) => {
              setNumber(text);
              setError(false);
            }}
            error={error}
          />
          {error && <Text style={styles.errorText}>Некорректный номер или код</Text>}
          <ButtonGray title="Отправить код" onPress={sendTheCode} style={styles.button} />

          <WindowStandart
            title="Введите код"
            value={code}
            onChangeText={(text) => {
              setCode(text);
              setError(false);
            }}
            error={error}
          />
          {error && <Text style={styles.errorText}>Неверный номер или код</Text>}
          <ButtonBlack title="Вход" onPress={handleNumber} style={styles.button} />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 5,
  },
  errorText: {
    color: 'red',
    marginBottom: 2,
  },
});

export default NumberCodeForm;