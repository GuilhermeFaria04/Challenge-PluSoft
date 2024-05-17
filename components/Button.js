import React from 'react';
import { Text,TouchableOpacity } from 'react-native';
import { styles } from '../style/Style'

const Button = ({title, onpress}) => {
    return(
        <TouchableOpacity style={styles.buttonauth} onPress={onpress}>
            <Text style={{color: 'white'}}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button;