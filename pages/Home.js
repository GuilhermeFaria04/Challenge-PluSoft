import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
//import foto from '../assets/Challenge-consummidor'

const Home = () => {
  const ProdutosEletronicos = [
    {
      title: 'Smartphone Apple iPhone 13 256GB 5G Tela 6.1" Vermelho',
      subtitle: 'de R$ 6.000,00',
      price: 'Por R$ 4.589,00 no PIX',
      //image: 'https://example.com/iphone13.jpg'
    },
    {
      title: 'Smartphone Samsung Galaxy S21 128GB 5G',
      subtitle: 'de R$ 5.000,00',
      price: 'Por R$ 3.999,00 no PIX',
      //image: 'https://example.com/galaxys21.jpg'
    }
  ];

  const ProdutosDomesticos = [
    {
      title: 'Fritadeira Airfryer Electrolux Family Efficient EAF51 5L 1700W 127V Vermelho',
      subtitle: 'de R$ 600,00',
      price: 'Por R$ 399,00 no PIX',
      //image: 'https://example.com/airfryer.jpg'
    }
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Produtos em destaque!</Text>
      {ProdutosEletronicos.map((item, index) => (
        <View key={index} style={styles.produtoBox}>
          <Image source={{ uri: item.image }} style={styles.produtoImagem} />
          <Text style={styles.produtoTitulo}>{item.title}</Text>
          <Text style={styles.produtoSubtitulo}>{item.subtitle}</Text>
          <Text style={styles.produtoPreco}>{item.price}</Text>
        </View>
      ))}
      <Text style={styles.titulo}>Produtos domésticos</Text>
      {ProdutosDomesticos.map((item, index) => (
        <View key={index} style={styles.produtoBox}>
          <Image source={{ uri: item.image }} style={styles.produtoImagem} />
          <Text style={styles.produtoTitulo}>{item.title}</Text>
          <Text style={styles.produtoSubtitulo}>{item.subtitle}</Text>
          <Text style={styles.produtoPreco}>{item.price}</Text>
        </View>
      ))}
      <Text style={styles.titulo}>Semana do consumidor</Text>
      <View style={styles.consumidor}>
        <Image style={styles.consumidorImagem} />
        <Text style={styles.consumidorTexto}>
          Semana do Consumidor 2024: A Black Friday do primeiro semestre! O dia 15 de março é marcado como o Dia do Consumidor, por ser a data em que foi falado pela primeira vez sobre os direitos do consumidor. Desde então, campanhas e promoções especiais são promovidas todos os anos, como uma oportunidade de retribuir e reforçar esses direitos ao consumidor, com promoções para saudar esse cliente tão especial.
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
      width: '100%',
      height: 150,
      resizeMode: 'cover',
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
      color: '#FFF',
      textAlign: 'center',
      marginBottom: 5,
    },
    produtoPreco: {
      fontSize: 16,
      color: '#FFF',
      textAlign: 'center',
    },
    consumidor: {
      padding: 20,
      margin: 20,
    },
    consumidorImagem: {
      width: '100%',
      height: 200,
      borderRadius: 10,
      marginBottom: 10,
    },
    consumidorTexto: {
      fontSize: 14,
      color: '#FFF',
      textAlign: 'justify',
    },
  });

export default Home;
