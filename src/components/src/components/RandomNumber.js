import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

class RandomNumber extends React.Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        number: PropTypes.number.isRequired,
        isDisabled: PropTypes.bool.isRequired,
        onPress: PropTypes.func.isRequired,
    };
    handlePress = () => {
        // console.log(this.props.number);
        this.props.onPress(this.props.id);
    }
    render() {
        return (
            <TouchableOpacity onPress={this.handlePress}>
                <Text style={[styles.random, this.props.isDisabled &&  styles.disabled]}>{this.props.number}</Text>
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
    },
    disabled: {
        opacity: 0.3
    }
});

export default RandomNumber;