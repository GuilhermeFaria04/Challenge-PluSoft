import React from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import { styles } from '../style/Style'
import { useState } from 'react';



const Login = (props) => {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    return (
        <View styles={styles.container}>
            <View styles={styles.box}>
                <Text style={styles.titulo}>Login</Text>
                <Text style={styles.label}>Email</Text>
                <View style={styles.form}>
                    <TextInput style={styles.textinput}
                        placeholder="Digite seu Email"
                        value={user} onChangeText={setUser} />
                    <Text style={styles.label}>Senha</Text>
                    <TextInput style={styles.textinput}
                        placeholder="Digite seu Senha"
                        value={pass} onChangeText={setPass}
                        secureTextEntry={true} />
                </View>
                <Text style={styles.textlink}>Não possui cadastro? Clique aqui</Text>
                <Button title="Logar" onPress={() => {
                    props.onLogar(user, pass);
                }} />
            </View>
        </View>
    )
}

export default Login;