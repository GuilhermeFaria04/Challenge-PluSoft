import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import Header from '../components/Header';
import consumidor from '../assets/Challenge-consumidor.png'
import { styles } from '../style/Style'
import Icon from 'react-native-vector-icons/FontAwesome';

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
    <ScrollView style={stylesHome.container}>
      <Header />
      <Text style={stylesHome.titulo}>Produtos em destaque!</Text>
      {ProdutosEletronicos.map((item, index) => (
        <View key={index} style={styles.produtoBox}>
          <Image source={item.image} style={styles.produtoImagem} />
          <Text style={styles.produtoTitulo}>{item.title}</Text>
          <Text style={styles.produtoSubtitulo}>{item.subtitle}</Text>
          <Text style={styles.produtoPreco}>{item.price}</Text>
          <Icon name="heart-o" size={24} color="white" style={stylesHome.icon} />
        </View>
      ))}
      <Text style={stylesHome.titulo}>Produtos domésticos</Text>
      {ProdutosDomesticos.map((item, index) => (
        <View key={index} style={styles.produtoBox}>
          <Image source={item.image} style={styles.produtoImagem} />
          <Text style={styles.produtoTitulo}>{item.title}</Text>
          <Text style={styles.produtoSubtitulo}>{item.subtitle}</Text>
          <Text style={styles.produtoPreco}>{item.price}</Text>
          <Icon name="heart-o" size={24} color="white" style={stylesHome.icon} />
        </View>
      ))}
      <Text style={stylesHome.titulo}>Semana do consumidor</Text>
      <View style={stylesHome.container}>
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

const stylesHome = StyleSheet.create({
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
    bottom: 10,
    right: 10,
  },
});

export default Home;
