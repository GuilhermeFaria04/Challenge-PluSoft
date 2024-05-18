import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { styles } from '../style/Style'
import { useState } from 'react';
import Button from '../components/Button';



const Login = ({ navigation }) => {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    const handleLogin = () => {
        if (user && pass) {
            navigation.navigate('Home');
        } else {
            alert('Por favor, preencha ambos os campos.');
        }
    };

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
                <Button title='Logar' onPress={handleLogin} />
            </View>
        </View>
    )
}

export default Login;