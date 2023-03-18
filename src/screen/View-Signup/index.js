import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';
import Form from './Form/index'
import Title from './Title/index'

export default function Signup({navigation}) {
 return (
    <View style={styles.linearGradient}>
    <Title/>
    <Form/>
    <Text style={styles.text} onPress={() => navigation.navigate('Signin') }>Não tem uma conta? Cadastre-se</Text>
    </View>
  );
}