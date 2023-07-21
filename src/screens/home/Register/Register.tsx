import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './Register.style';
import Input from '@/components/Inputs/Input';
import Button from '@/components/Buttons/Button';

const Register = () => {
  return (
    <View style={styles.root}>
      <View>
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
      </View>
      <View>
        <Button variant="contained">Entrar</Button>
      </View>
    </View>
  );
};

export default Register;
