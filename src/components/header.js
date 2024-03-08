//Cabeçalho-------

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,  } from 'react-native';
import styles from '../styles/styles';
import { useNavigation } from '@react-navigation/native';

  function HeaderPrincipal() {
    const navigation = useNavigation();
  return (
    <View style={[styles.containerHeader, { backgroundColor: 'white',}]}>
      <View style={{backgroundColor: 'black', width: 1, height: '100%'}}></View>
      <View style={styles.Buttons}>
      <TouchableOpacity
      onPress={() => navigation.navigate("Home")} 
      >
        <Text>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={() => navigation.navigate("Login")} 
      >
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => navigation.navigate("Sobre")}
      >
        <Text>Sobre</Text>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={() => navigation.navigate("Contact")}
      >
        <Text>Contato</Text>
      </TouchableOpacity>
      
      </View>

    </View>
  );
}

export default HeaderPrincipal;