import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Card extends React.Component {

    onPressAnswer = () => {
        //todo show the answer
    }

    onPressCorrect = () => {
        //todo mark the question as correct
    }

    onPressIncorrect = () => {
        //todo mark the question as incorrect
    }

    render() {
        const { question } = this.props.card;
        console.log(JSON.stringify(this.props));
        return (
            <View>
                <Text>{question}</Text>

                <TouchableOpacity
                    onPress={this.onPressAnswer}>
                    <Text>Answer</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={this.onPressCorrect}>
                    <Text>Correct</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={this.onPressIncorrect}>
                    <Text>Incorrect</Text>
                </TouchableOpacity>
            </View>
        )
    }
}