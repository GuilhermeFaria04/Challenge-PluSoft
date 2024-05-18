import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { styles } from '../style/Style'
import Button from '../components/Button';
import { useState } from 'react';
//import { useChallengeControl } from '../control/challengeControl';


const Cadastro = ({navigation}) => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    return (
        <View style={styles.container}>
            <View style={styles.boxcadastro}>
                <Text style={styles.titulo}> Cadastro </Text>
                <Text style={styles.subTitulo}> Prencha os dados pra Cadastrar! </Text>
                <View style={styles.form}>
                    <Text style={styles.label}>Nome</Text>
                    <TextInput style={styles.textinput}
                        placeholder="Digite seu Nome"
                        value={nome} onChangeText={setNome} />
                    <Text style={styles.label}>Email</Text>
                    <TextInput style={styles.textinput}
                        placeholder="Digite seu Email"
                        value={email} onChangeText={setEmail} />
                    <Text style={styles.label}>Telefone</Text>
                    <TextInput style={styles.textinput}
                        placeholder="Digite seu Telefone"
                        value={telefone} onChangeText={setTelefone} />
                    <Text style={styles.label}>Senha</Text>
                    <TextInput style={styles.textinput}
                        placeholder="Digite seu Senha"
                        value={senha} onChangeText={setSenha}
                        secureTextEntry={true} />
                    <Text style={styles.label}>Confirmar Senha</Text>
                    <TextInput style={styles.textinput}
                        placeholder="Confirme sua Senha"
                        value={confirmarSenha} onChangeText={setConfirmarSenha} />
                </View>
                <Text style={styles.textlink} onPress={() => { navigation.navigate('Login') }}>Já possui cadastro? Clique aqui</Text>
                <Button title='Cadastrar' onpress={() => { navigation.navigate('Login') }}/>
            </View>
        </View>
    )
}

export default Cadastro;  