import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex'
    },
    titulo: {
        fontSize: 30,
        color: '#0043EF',
        textAlign: 'center',
        marginBottom: 15,
    },
    subTitulo: {
        fontSize: 13,
        color: '#5B5D63',
        textAlign: 'center',
        marginBottom: 7,
    },
    boxcadastro: {
        width: 325,
        height: 570,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderStyle: 'solid',
        borderColor: 'white',
        borderRadius: 20,
        gap: 10,
    },
    boxlogin: {
        width: 325,
        height: 375,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderStyle: 'solid',
        borderColor: 'white',
        borderRadius: 20,
        gap: 10,
    },
    textinput: {
        borderBottomColor: '#424949',
        borderBottomWidth: 0.6,
        marginBottom: 15,
    },
    form: {
        width: 209,
        display: 'flex',
    },
    label: {
        fontSize: 16,
        color: '#0043EF',
    },
    textlink: {
        fontSize: 12,
        color: '#5B5D63'
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginVertical: 20,
    },
    consumerWeek: {
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        margin: 20,
    },
    consumerImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
    },
    consumerText: {
        fontSize: 14,
        color: '#000',
        textAlign: 'justify',
    },
    headerbox: {
        width: 363,
        height: 137,
        backgroundColor: '#333',
        padding: 10,
        justifyContent: 'center',
        borderStyle: 'solid',
        borderColor: 'white',
        borderRadius: 20,
        marginTop: 20,
        gap: 20,
    },
    topSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    logo: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    iconsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginRight: 10,
    },
    icon: {
        marginHorizontal: 5,
    },
    barraPesquisa: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginHorizontal: 10,
    },
    pesquisaInput: {
        color: '#000',
        marginLeft: 5,
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

export default { styles };