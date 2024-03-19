import React, { useState } from 'react';
import { TextInput, Alert, Keyboard, ScrollView, Platform, StyleSheet, Text, View } from 'react-native';
import ButtonBlack from '../elements/ButtonBlack.js';
import ButtonGray from '../elements/ButtonGray.js';
import { KeyboardAvoidingView } from 'react-native';
import WindowStandart from '../elements/WindowStandart.js';

const PasswordRecoveryForm = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const handleRecoverPassword = () => {
    if (email === 'admin') {
      Alert.alert('Успешно', 'Инструкция по восстановлению пароля отправлена на почту');
    } else {
      setError(true);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'android' ? 'padding' : null}
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        <WindowStandart
          secureTextEntry
          title="Почта"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            setError(false);
          }}
          error={error}
        />
        {error && <Text style={styles.errorText}>Некорректная почта</Text>}

        <ButtonBlack title="Восстановить пароль" onPress={handleRecoverPassword} style={styles.button}/>
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
export default PasswordRecoveryForm;