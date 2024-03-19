import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import LoginForm from './components/LoginForm';
import PasswordRecoveryForm from './components/PasswordRecoveryForm';
import NumberCodeForm from './components/NumberCodeForm';
import RegistrationForm from './components/RegistrationForm';
import ChangeThePassForm from './components/ChangeThePassForm';
import TelegramForm from './components/TelegramForm';



const Stack = createStackNavigator();

export default function Navigate(){
    return <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="LoginForm"
          component={LoginForm}
          options={{
            title: 'Авторизация',
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen
            name="PasswordRecoveryForm"
            component={PasswordRecoveryForm}
            options={{ title: 'Восстановление пароля' ,
            headerTitleAlign: 'center'
            }}
        />
         <Stack.Screen
             name="NumberCodeForm"
             component={NumberCodeForm}
             options={{ title: 'Вход по номеру телефона' ,
             headerTitleAlign: 'center'
             }}
         />
           <Stack.Screen
             name="RegistrationForm"
             component={RegistrationForm}
             options={{ title: 'Регистрация' ,
             headerTitleAlign: 'center'}}
         />
            <Stack.Screen
             name="ChangeThePassForm"
             component={ChangeThePassForm}
             options={{ title: 'Изменение пароля',
             headerTitleAlign: 'center'}}
         />
            <Stack.Screen
             name="TelegramForm"
             component={TelegramForm}
             options={{ title: 'Вход через телеграм',
              headerTitleAlign: 'center'}}
         />
        </Stack.Navigator>
    </NavigationContainer>;
}
//описание экранов