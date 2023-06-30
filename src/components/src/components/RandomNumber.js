import React from 'react';
import { Text, StyleSheet } from 'react-native';

class RandomNumber extends React.Component {
    render() {
        return (
            <Text style={styles.random}>{this.props.number}</Text>
        );
    };
}

const styles = StyleSheet.create({
    random: {
        backgroundColor:'#999',
        padding: 10,
        width: 100,
        marginHorizontal: 30,
        marginVertical: 30,
        fontSize: 40,
        textAlign: 'center',
    }
});

export default RandomNumber;