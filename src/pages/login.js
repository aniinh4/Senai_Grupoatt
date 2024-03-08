import React from 'react';
import { View } from 'react-native';
import styles from '../styles/styles'; 
import HeaderPrincipal from '../components/header'; 
import Rodape from '../components/rodape'; 


export default function Login() { 

  return (
    <View style={styles.container}>
      <HeaderPrincipal/>

        <Rodape/>
      </View>
  );
}