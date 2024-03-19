import React, { useState } from 'react';
import { TextInput, Alert, Keyboard, ScrollView, Platform, StyleSheet, Text, Image } from 'react-native';
import ButtonBlack from '../elements/ButtonBlack.js';
import ButtonGray from '../elements/ButtonGray.js';
import { KeyboardAvoidingView } from 'react-native';
import WindowStandart from '../elements/WindowStandart.js';

const LoginForm = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);


  const handleLogin = () => {
    if (email === 'admin' && password === 'admin') {
      Alert.alert('Успешно', 'Вход прошел успешно!');
      setError(false);
    } else{
    setError(true);}


    Keyboard.dismiss();
  };

  const registration = () => {
    navigation.navigate('RegistrationForm');
  };

  const passwordLogin = () => {
    navigation.navigate('ChangeThePassForm');
  };

  const number = () => {
    navigation.navigate('NumberCodeForm');
  };

  const telegram = () => {
    navigation.navigate('TelegramForm');
  };

  const changePass = () => {
    navigation.navigate('PasswordRecoveryForm');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'android' ? 'padding' : null}
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        <WindowStandart
          title="Введите почту"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            setError(false);
          }}
          error={error}
        />
        {error && <Text style={styles.errorText}>Неверный логин или пароль</Text>}

       <WindowStandart
         secureTextEntry
         title="Пароль"
         value={password}
         onChangeText={(text) => {
           setPassword(text);
           setError(false);
         }}
         error={error}
       />
        {error && <Text style={styles.errorText}>Неверный логин или пароль</Text>}

        <ButtonBlack title="Войти" onPress={handleLogin} style={styles.button} />
        <ButtonBlack title="Забыли пароль?" onPress={changePass} style={styles.button} />
        <ButtonGray title="Войти по номеру телефона" onPress={number} style={styles.button} />
        <ButtonGray title="Войти через Телеграм" onPress={telegram} style={styles.button} />
        <ButtonGray title="Регистрация" onPress={registration} style={styles.button} />
        <ButtonGray title="Сменить пароль" onPress={passwordLogin} style={styles.button} />
      </ScrollView>
    </KeyboardAvoidingView>
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

export default LoginForm;