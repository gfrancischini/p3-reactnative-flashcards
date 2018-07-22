import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';
import Card from './Card'
import { connect } from 'react-redux'
import {selectDeckById} from '../selectors'
import { updateDeck } from '../actions'
import {StyledButton} from "./basic/Button"

export class AddQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = { question: null, answer:null };
    }

    onPressAddQuestion = () => {
        const deck = {...this.props.deck};
        const newQuestion = {
            question: this.state.question,
            answer: this.state.answer,
        }

        deck.questions.push(newQuestion);

        //console.log("onPressAddQuestion: " + JSON.stringify(deck));

        this.props.saveDeck(deck);
        this.props.goBack();
 
    }
   
    render() {
        return (
            <View>
                <Text style={{fontSize:20, alignItems: 'center', justifyContent: 'center', marginBottom:15}}> Add Card to Deck: {this.props.deck.title} </Text>
                <TextInput
                    placeholder="Type your question1"
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(question) => this.setState({ question })}
                    value={this.state.question}
                />
                <TextInput
                    placeholder="Type your answer"
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(answer) => this.setState({ answer })}
                    value={this.state.answer}
                />
                <StyledButton title="Add Question" color="green" onPress={this.onPressAddQuestion}/>
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

function mapDispatchToProps(dispatch, {navigation}) {
    return {
        saveDeck: (deck) => updateDeck(deck)(dispatch),
        goBack: () => navigation.goBack(),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddQuestion)
