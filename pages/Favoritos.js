import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image  } from "react-native";
import Header from '../components/Header';
import { styles } from '../style/Style'
import Icon from 'react-native-vector-icons/FontAwesome';

const Favoritos = () => {
  const ProdutosEletronicos = [
    {
      title: 'Smartphone Apple iPhone 13 256GB 5G Tela 6.1" Vermelho',
      image: require('../assets/Challenge-celular.png')
    },
  ];

  const ProdutosDomesticos = [
    {
      title: 'Fritadeira Airfryer Electrolux Family Efficient EAF51 5L 1700W 127V Vermelho',
      image: require('../assets/Challenge-fritadeira.png')
    }
  ];

    return(
      <ScrollView style={stylesFav.container}>
      <Header />
      <Text style={stylesFav.titulo}>Favoritos</Text>
      {ProdutosEletronicos.map((item, index) => (
        <View key={index} style={styles.produtoBox}>
          <Image source={item.image} style={styles.produtoImagem} />
          <Text style={styles.produtoTitulo}>{item.title}</Text>
          <Icon name="heart" size={24} color="white" style={stylesFav.icon} />
        </View>
      ))}
      {ProdutosDomesticos.map((item, index) => (
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