import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { selectDeckById } from '../selectors'
import { connect } from 'react-redux'
import { StyledButton } from "./basic/Button"
export class DeckDetail extends React.Component {

    startQuiz = () => {
        if(this.props.deck.questions.length <= 0) {
            Alert.alert(
                'There are no questions',
                'You cannot start a Quiz that does not have questions. Add questions first.',
                [
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: true }
              )
            return;
        }
        this.props.navigation.navigate(
            'Quiz',
            { id: this.props.deck.id }
        )
    }

    addQuestion = () => {
        this.props.navigation.navigate(
            'AddQuestion',
            { id: this.props.deck.id }
        )
    }

    render() {
        //const {title} = this.props.deck;
        return (
            <View style={{ flex: 1, justifyContent: "center" }}>
                <Text style={{ fontSize: 30, alignSelf: "center" }}>{this.props.deck.title}</Text>
                <Text style={{ marginTop: 15, alignSelf: "center", marginBottom: 80 }}>Number of cards: {this.props.deck.questions.length}</Text>

                <View style={{ backgroundColor: "#44ffff" }}>
                    <StyledButton style={{ alignSelf: "flex-end" }} title="Add Card" color="orange" onPress={this.addQuestion} />
                    <StyledButton title="Start Quiz" color="green" onPress={this.startQuiz} />
                </View>
            </View>
        )
    }
}

function mapStateToProps(state, { navigation }) {
    const { id } = navigation.state.params
    return {
        deck: selectDeckById(state, id)
    }
}

export default connect(
    mapStateToProps
)(DeckDetail)
