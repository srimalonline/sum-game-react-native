import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet} from 'react-native';
import RandomNumber from './src/components/RandomNumber';

class Game extends React.Component {
    static propTypes = {
        randomNumberCount: PropTypes.number.isRequired,
    };
    state = {
        selectedIds:[],
    };
    target = 10 + Math.floor(40 * Math.random());
    randomNumbers = Array
        .from({length: this.props.randomNumberCount})
        .map(()=> 1 + Math.floor(10 * Math.random()));
    target = this.randomNumbers
        .slice(0, this.props.randomNumberCount - 2)
        .reduce((acc, curr) => acc + curr, 0);
    // TODO: Shuffle the random numbers

    isNumberSelected = (numberIndex) => {
        return this.state.selectedIds.indexOf(numberIndex) >= 0;
    }

    selectNumber = (numberIndex) => {
        this.setState((prevState) => ({
            selectedIds: [...prevState.selectedIds, numberIndex],
         }));
    };

    //gameStatus: Playing, WON, LOST
    gameStatus = () => {
            const sumSelected = this.state.selectedIds.reduce((acc,curr) => {
                return acc + this.randomNumbers[curr];
            }, 0);
            if (sumSelected < this.target) {
                return 'PLAYING';
            }
            if (sumSelected == this.target) {
                return 'WON';
            }
            if (sumSelected > this.target) {
                return 'LOST';
            }
    }

    render() {
        const gameStatus = this.gameStatus();
        return (
            <View style={styles.container}>
                <Text style={[styles.target, styles[`STATUS_${gameStatus}`]]}>{this.target}</Text>
                <View style={styles.randomContainer}>
                    {this.randomNumbers.map((randomNumber, index) => 
                    <RandomNumber 
                        key={index} 
                        id={index}
                        number={randomNumber} 
                        isDisabled={this.isNumberSelected(index) || gameStatus !== 'PLAYING'}
                        onPress={this.selectNumber} 
                    />
                    )}
                </View>
                <Text>{gameStatus}</Text>
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
    },

    STATUS_PLAYING: {
        backgroundColor:'#bbb',
    },
    STATUS_WON: {
        backgroundColor:'green',
    },
    STATUS_LOST: {
        backgroundColor:'red',
    },
    
    });

export default Game;