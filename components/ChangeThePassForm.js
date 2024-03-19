import React, { useState } from 'react';
import { TextInput, Alert, ScrollView, Platform, StyleSheet, Text, View } from 'react-native';
import ButtonBlack from '../elements/ButtonBlack.js';
import ButtonGray from '../elements/ButtonGray.js';
import { KeyboardAvoidingView } from 'react-native';
import WindowStandart from '../elements/WindowStandart.js';

const ChangeThePassForm = ({ navigation }) => {
  const [oldpass, setOldpass] = useState('');
  const [newpass, setNewpass] = useState('');
  const [repeatnewpass, setRepearnewpass] = useState('');
  const [error, setError] = useState(false);

  const change = () => {
    if (oldpass === '12345' && newpass === '1234' && repeatnewpass === '1234' && oldpass !== newpass && newpass === repeatnewpass) {
      Alert.alert('Успешно', 'Пароль был изменен');
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
                title="Старый пароль"
                value={oldpass}
                onChangeText={(text) => {
                  setOldpass(text);
                  setError(false);
                }}
                error={error}
              />
     <WindowStandart
               secureTextEntry
               title="Новый пароль"
               value={newpass}
               onChangeText={(text) => {
                 setNewpass(text);
                 setError(false);
               }}
               error={error}
             />
      <WindowStandart
                secureTextEntry
                title="Повторите пароль"
                value={repeatnewpass}
                onChangeText={(text) => {
                  setRepearnewpass(text);
                  setError(false);
                }}
                error={error}
              />
               {error && <Text style={styles.errorText}>Пароли не совпадают или новый совпадает со старым.</Text>}
      <ButtonBlack title="Изменить" onPress={change} style={styles.button}/>
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
export default ChangeThePassForm;