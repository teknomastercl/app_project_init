import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '@/screens/home/Home';
import Dashboard from '@/screens/dashboard';
import moment from 'moment';
import 'moment/locale/es';
import Login from '@/screens/home/Login/Login';
import Register from '@/screens/home/Register/Register';

const Layout = () => {
  // Auth Sessión
  const [isSigned, setIsSigned] = useState(false);
  moment.locale('es');

  return (
    <NavigationContainer>
      {isSigned ? <Dashboard /> : <HomeStack />}
    </NavigationContainer>
  );
};

const Stack = createStackNavigator();
const HomeStack = ({setIsSignedIn}: any) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="login"
        component={props => <Login {...props} setIsSignedIn={setIsSignedIn} />}
        options={{
          title: 'Login',
          headerBackTitle: 'Volver',
          headerStyle: {
            shadowColor: 'transparent',
          },
        }}
        initialParams={{setIsSignedIn}}
      />
      <Stack.Screen
        name="register"
        component={props => (
          <Register {...props} setIsSignedIn={setIsSignedIn} />
        )}
        options={{
          title: 'Register',
          headerBackTitle: 'Volver',
          headerStyle: {
            shadowColor: 'transparent',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default Layout;
