import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import Header from '../components/Header';

const Carrinho = () => {
    return(
      <View style={styles.container}>
        <Header/>
        <Text>Carrinho</Text>
      </View>  
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 10,
  },
}
)

export default Carrinho;