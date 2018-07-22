import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StyledButton } from "./basic/Button"

export default class Card extends React.Component {

    constructor() {
        super();
        this.state = {
            answerReviewed: false,
        }
    }

    onPressAnswer = () => {
        this.setState({
            answerReviewed: true
        })
    }

    /**
     * mark the question as correct
     */
    onPressCorrect = () => {
        this.props.onResultSelected(true, this.props.id);
    }

    /**
     * mark the question as incorrect
     */
    onPressIncorrect = () => {
        this.props.onResultSelected(false, this.props.id);
    }

    render() {
        const { question } = this.props.card;
        return (
            <View style={{ flex: 1, flexGrow: 1, justifyContent: "center" }} >
                <Text style={{ fontSize: 20, marginBottom: 10, alignSelf: "center" }}>{question}</Text>

                <View style={{ marginBottom: 50, marginTop: 50, alignItems: 'center', justifyContent: 'center' }}>
                    {!this.state.answerReviewed && <TouchableOpacity onPress={this.onPressAnswer}>
                        <Text style={{ fontSize: 15 }}>Check Answer</Text>
                    </TouchableOpacity>}

                    {this.state.answerReviewed &&
                        <Text>{this.props.card.answer}</Text>}
                </View>
                <View style={{ paddingLeft: 10, paddingRight: 10 }} >
                    <Text style={{ fontSize: 15, marginBottom: 10, alignSelf: "center" }}>Have you answered it right or wrong?</Text>
                    <StyledButton title="Correct" color="green" onPress={this.onPressCorrect} enabled={this.state.answerReviewed} />
                    <StyledButton title="Incorrect" color="red" onPress={this.onPressIncorrect} enabled={this.state.answerReviewed} />
                </View>
            </View>
        )
    }
}