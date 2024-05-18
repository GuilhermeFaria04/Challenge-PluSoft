import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from '../style/Style'

const Header = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.headerbox}>
            <View style={styles.topSection}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.logo}>Wink</Text>
                </TouchableOpacity>
                <View style={styles.iconsRow}>
                    <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                        <Icon name="user" size={24} color="white" style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Icon name="sign-in" size={24} color="white" style={styles.icon} />
                    </TouchableOpacity>
                    <Icon name="heart" size={24} color="white" style={styles.icon} />
                    <Icon name="shopping-cart" size={24} color="white" style={styles.icon} />
                </View>
            </View>
            <View style={styles.barraPesquisa}>
                <Icon name="search" size={20} color="#000" />
                <TextInput
                    placeholder="Busca"
                    placeholderTextColor="#000"
                    style={[styles.pesquisaInput, {backgroundColor: '#FFF'}]}
                />
            </View>
        </View>
    );
};

export default Header;
