import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet} from 'react-native';
import RandomNumber from './src/components/RandomNumber';

class Game extends React.Component {
    static propTypes = {
        randomNumberCount: PropTypes.number.isRequired,
    };
    target = 10 + Math.floor(40 * Math.random());
    randomNumbers = Array
        .from({length: this.props.randomNumberCount})
        .map(()=> 1 + Math.floor(10 * Math.random()));
    target = this.randomNumbers
        .slice(0, this.props.randomNumberCount - 2)
        .reduce((acc, curr) => acc + curr, 0);
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.target}>{this.target}</Text>
                <View style={styles.randomContainer}>
                    {this.randomNumbers.map((randomNumber, index) => 
                    <RandomNumber key={index} number={index} />
                        // 
                    )}
                </View>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#ddd',
        flex:1,
        paddingTop: 50,
    },
    target: {
        fontSize:80,
        backgroundColor:'#bbb',
        marginHorizontal:50,
        textAlign: 'center',
    },
    randomContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 25,
    }
    });

export default Game;