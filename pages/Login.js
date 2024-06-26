import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { styles } from '../style/Style'
import { useState } from 'react';
import Button from '../components/Button';
import axios from 'axios';



const Login = ({ navigation }) => {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState(""); 

    async function acesso(){
        const URL = 'http://localhost:5000/login'
        const body = (user, pass)
        try {
            axios.post(URL, body)
            navigation.navigate('Home')
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.boxlogin}>
                <Text style={styles.titulo}>Login</Text>
                <Text style={styles.subTitulo}>Preencha os dados do login para acessar!</Text>
                <View style={styles.form}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput style={styles.textinput}
                        placeholder="Digite seu Email"
                        value={user} onChangeText={setUser} />
                    <Text style={styles.label}>Senha</Text>
                    <TextInput style={styles.textinput}
                        placeholder="Digite seu Senha"
                        value={pass} onChangeText={setPass}
                        secureTextEntry={true} />
                </View>
                <Text style={styles.textlink} onPress={() => { navigation.navigate('Cadastro') }}>Não possui cadastro? Clique aqui</Text>
                <Button title='Logar' onpress={acesso}/>
            </View>
        </View>
    )
}

export default Login;