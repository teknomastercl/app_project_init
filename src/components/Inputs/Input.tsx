import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { styles } from './Input.style';

const Input = ({ }) => {
  return (
    <View>
      <View style={{marginBottom: 20}}>
        <TextInput placeholder="Nombre" style={styles.input} />
      </View>
    </View>
  );
};

export default Input;
