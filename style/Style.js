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
        backgroundColor: '#333',
        padding: 10,
        marginTop: 20,
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
    },
    iconsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
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


});

export default { styles };