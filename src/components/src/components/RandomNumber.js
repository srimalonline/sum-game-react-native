import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

class RandomNumber extends React.Component {
    static propTypes = {
        number: PropTypes.number.isRequired,
    };
    render() {
        return (
            <TouchableOpacity>
                <Text style={styles.random}>{this.props.number}</Text>
            </TouchableOpacity>
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