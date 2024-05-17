import React from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import { styles } from '../style/Style'
//import { ArrowLeftOutlined } from '@ant-design/icons';
import { useState } from 'react';
//import { useChallengeControl } from '../control/challengeControl';


const Cadastro = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    return (
        <View style={styles.container}>
            <View style={styles.box}>
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
                        secureTextEntry={true}/>
                    <Text style={styles.label}>Confirmar Senha</Text>
                    <TextInput style={styles.textinput}
                        placeholder="Confirme sua Senha"
                        value={confirmarSenha} onChangeText={setConfirmarSenha} />
                    <Text style={styles.textlink}>Já possui cadastro? Clique aqui</Text>
                </View>
                <Button title="Cadastrar" onPress={() => { navigation.navigate('Home') }} />

            </View>
        </View>
    )
}

export default Cadastro;  