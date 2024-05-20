import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from "react-native";
import Header from '../components/Header';
import axios from 'axios';

const Carrinho = () => {

  const [produtos, setProdutos] = useState([])
  useEffect(() => {
    async function data(){
      const URL = 'http://localhost:5000/carrinho'
      try {
          const produtoCart = axios.get(URL)
          setProdutos(produtoCart.data)
      } catch (error) {
          console.log(error)
      }
    }
    data()  
  }, [] )

    return(
      <View style={stylesCart.container}>
        <Header/>
        <Text style={stylesCart.titulo}>Meu Carrinho</Text>
        <View style={stylesCart.cartBox}>
            <Text style={{color: '#FFF' , marginRight: 100}}>Produto</Text>
            <Text style={stylesCart.text}>Quantidade</Text>
            <Text style={stylesCart.text}>Total</Text>
        </View>
      </View>  
    )
}

const stylesCart = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 10,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    marginVertical: 20,
  },
  text: {
    color: '#FFF',
  },
  cartBox:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#333',
    height: 26,
    borderRadius: 9,
    alignItems: 'center',
  },
}
)

export default Carrinho;