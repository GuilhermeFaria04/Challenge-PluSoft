import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image  } from "react-native";
import Header from '../components/Header';
import { styles } from '../style/Style'
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

const Favoritos = () => {

  const [produtos, setProdutos] = useState([])
  useEffect(() => {
    async function data(){
      const URL = 'http://localhost:5000/favoritos'
      try {
          const produtoFav = axios.get(URL)
          setProdutos(produtoFav.data)
      } catch (error) {
          console.log(error)
      }
    }
    data()  
  }, [] )

  return(
    <ScrollView style={stylesFav.container}>
    <Header />
    <Text style={stylesFav.titulo}>Favoritos</Text>
    {produtos.map((item, index) => (
      <View key={index} style={styles.produtoBox}>
        <Image source={item.image} style={styles.produtoImagem} />
        <Text style={styles.produtoTitulo}>{item.title}</Text>
        <Icon name="heart" size={24} color="white" style={stylesFav.icon} />
      </View>
    ))}
    </ScrollView>
  ); 
}



  const stylesFav = StyleSheet.create({
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
    icon: {
      marginHorizontal: 5,
      position: 'absolute',
      top: 10,
      right: 10,
      color: 'red'
    },
  });

export default Favoritos;