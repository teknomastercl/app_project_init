import {View, Text} from 'react-native';
import React from 'react';
import Input from '@/components/Inputs/Input';
import Button from '@/components/Buttons/Button';
import {styles} from './Login.style';

const Login = () => {
  return (
    <View style={styles.root}>
      <View>
        <Input />
        <Input />
      </View>
      <View>
        <Button variant="contained">Entrar</Button>
      </View>
    </View>
  );
};

export default Login;
