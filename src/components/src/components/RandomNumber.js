import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

class RandomNumber extends React.Component {
    static propTypes = {
        number: PropTypes.number.isRequired,
        isSelected: PropTypes.bool.isRequired,
    };
    handlePress = () => {
        // console.log(this.props.number);
    }
    render() {
        return (
            <TouchableOpacity onPress={this.handlePress}>
                <Text style={[styles.random, this.props.isSelected &&  styles.selected]}>{this.props.number}</Text>
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
    selected: {
        opacity: 0.3
    }
});

export default RandomNumber;