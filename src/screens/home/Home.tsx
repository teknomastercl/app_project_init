import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './Home.style';
import Button from '@/components/Buttons/Button';

const Home = ({navigation}: any) => {
  return (
    <View style={styles.root}>
      <View style={{width: '100%', paddingHorizontal: 20}}>
        <View style={{marginBottom: 10}}>
          <Button
            onPress={() => navigation.navigate('login')}
            variant="contained">
            Iniciar sesión
          </Button>
        </View>
        <Button
          onPress={() => navigation.navigate('register')}
          variant="contained">
          Registrar
        </Button>
      </View>
    </View>
  );
};

export default Home;
