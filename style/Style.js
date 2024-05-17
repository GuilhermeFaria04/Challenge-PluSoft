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
    box: {
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
    }
});

export default { styles };