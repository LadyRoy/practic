import React, { useState } from 'react';
import { TextInput, Alert, ScrollView, Platform, StyleSheet, Text, View } from 'react-native';
import ButtonBlack from '../elements/ButtonBlack.js';
import ButtonGray from '../elements/ButtonGray.js';
import { KeyboardAvoidingView } from 'react-native';
import WindowStandart from '../elements/WindowStandart.js';

const RegistrationForm = ({ navigation }) => {
  const [firstname, setFirstname] = useState('');
  const [secondname, setSecondname] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [error, setError] = useState(false);

  const handleRegister = () => {
    if (firstname === 'Ivan' && secondname === 'Ivanov' && email === 'admin1' && number === '12345') {
      Alert.alert('Успешно', 'Регистрация прошла успешно!');
    } else {
      setError(true);
    }
  };

  const handleKeyPress = (e) => {
    if (e.nativeEvent.key === 'Enter') {
      handleRegister();
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'android' ? 'padding' : null}
      >
        <ScrollView contentContainerStyle={styles.scrollView}>
          <WindowStandart
            title="Имя"
            value={firstname}
            onChangeText={(text) => {
              setFirstname(text);
              setError(false);
            }}
            error={error}

          />
          <WindowStandart
            title="Фамилия"
            value={secondname}
            onChangeText={(text) => {
              setSecondname(text);
              setError(false);
            }}
            error={error}
          />
          <WindowStandart
            title="Почта"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              setError(false);
            }}
            error={error}
          />
          <WindowStandart
            title="Номер телефона"
            value={number}
            onChangeText={(text) => {
              setNumber(text);
              setError(false);
            }}
            error={error}
          />
          {error && <Text style={styles.errorText}>Неверно введенные данные</Text>}
          <ButtonBlack title="Register" onPress={handleRegister} style={styles.button} />
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

export default RegistrationForm;