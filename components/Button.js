import React from 'react';
import { Text,TouchableOpacity, StyleSheet} from 'react-native';
import { styles } from '../style/Style'

const Button = ({title, onpress}) => {
    return(
        <TouchableOpacity style={stylesbutton.buttonauth} onPress={onpress}>
            <Text style={{color: 'white'}}>{title}</Text>
        </TouchableOpacity>
    )
}

export const stylesbutton = StyleSheet.create({
    buttonauth: {
        width: 100,
        height: 25,
        borderRadius: 3,
        backgroundColor: '#0043EF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}
)

export default Button;