import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import Header from '../components/Header';
import consumidor from '../assets/Challenge-consumidor.png'

const Home = () => {
  const ProdutosEletronicos = [
    {
      title: 'Smartphone Apple iPhone 13 256GB 5G Tela 6.1" Vermelho',
      subtitle: 'de R$ 8.999,00',
      price: 'Por R$ 4.589,00 no PIX',
      image: require('../assets/Challenge-celular.png')
    },
    {
      title: 'Smart TV LG 55" NanoCell 4K UHD WebOS 23 ThinQ AI 55NANO77SRA',
      subtitle: 'de R$ 4.999,00',
      price: 'Por R$ 2.999,00 no PIX',
      image: require('../assets/Challenge-tv.png')
      
    }
  ];

  const ProdutosDomesticos = [
    {
      title: 'Fritadeira Airfryer Electrolux Family Efficient EAF51 5L 1700W 127V Vermelho',
      subtitle: 'de R$ 699,00',
      price: 'Por R$ 399,00 no PIX',
      image: require('../assets/Challenge-fritadeira.png')
    }
  ];

  return (
    <ScrollView style={styles.container}>
      <Header/>
      <Text style={styles.titulo}>Produtos em destaque!</Text>
      {ProdutosEletronicos.map((item, index) => (
        <View key={index} style={styles.produtoBox}>
          <Image source={item.image} style={styles.produtoImagem} />
          <Text style={styles.produtoTitulo}>{item.title}</Text>
          <Text style={styles.produtoSubtitulo}>{item.subtitle}</Text>
          <Text style={styles.produtoPreco}>{item.price}</Text>
        </View>
      ))}
      <Text style={styles.titulo}>Produtos domésticos</Text>
      {ProdutosDomesticos.map((item, index) => (
        <View key={index} style={styles.produtoBox}>
          <Image source={item.image} style={styles.produtoImagem} />
          <Text style={styles.produtoTitulo}>{item.title}</Text>
          <Text style={styles.produtoSubtitulo}>{item.subtitle}</Text>
          <Text style={styles.produtoPreco}>{item.price}</Text>
        </View>
      ))}
      <Text style={styles.titulo}>Semana do consumidor</Text>
      <View style={styles.container}>
        <Image source={consumidor} style={styles.consumidorImagem} />
        <Text style={styles.consumidorTitulo}>
          Semana do Consumidor 2024: A Black Friday do primeiro semestre! {'\n'}
        </Text>   
        <Text style={styles.consumidorTexto}>
          O dia 15 de março é marcado como o Dia do Consumidor, por ser a data em que foi falado pela primeira vez sobre os direitos do consumidor. Desde então, campanhas e promoções especiais são promovidas todos os anos, como uma oportunidade de retribuir e reforçar esses direitos ao consumidor, com promoções para saudar esse cliente tão especial.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
    produtoBox: {
      backgroundColor: '#333',
      borderRadius: 10,
      overflow: 'hidden',
      marginBottom: 20,
      alignItems: 'center',
      padding: 10,
    },
    produtoImagem: {
      width: 144,
      height: 144,
      marginBottom: 10,
    },
    produtoTitulo: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#FFF',
      textAlign: 'center',
      marginBottom: 5,
    },
    produtoSubtitulo: {
      fontSize: 14,
      color: '#807A7A',
      textAlign: 'center',
      marginBottom: 5,
    },
    produtoPreco: {
      fontSize: 16,
      color: '#FFF',
      textAlign: 'center',
      fontWeight: 'bold'
    },
    consumidorImagem: {
      width: '100%',
      height: 196,
      borderRadius: 16,
      marginBottom: 10,
    },
    consumidorTitulo: {
      fontSize: 14,
      color: '#FFFFFF',
      fontWeight: 'bold',
    },
    consumidorTexto: {
      fontSize: 14,
      color: '#FFF',
      textAlign: 'justify',
    },
  });

export default Home;
