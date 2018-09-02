import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ onPress, children, style }) => {
    const { container, text } = styles;
    return (
        <TouchableOpacity onPress={onPress} style={[container, style]}>
            <Text style={[text, style]}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    container: {
        flex: 1,
        alignSelf: 'stretch',
        marginLeft: 5,
        marginRight: 5

    },
    text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        borderWidth: 1,
        padding: 10,
        borderColor: '#08AB8A',
        backgroundColor: '#08AB8A'
    }
};

export { Button };
