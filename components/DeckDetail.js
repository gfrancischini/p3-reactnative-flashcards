import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { selectDeckById } from '../selectors'
import { connect } from 'react-redux'

export class DeckDetail extends React.Component {

    
    render() {
        //const {title} = this.props.deck;
        return (
            <View>
                <Text>{this.props.deck.title}</Text>
                <Text>{this.props.deck.questions.length}</Text>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate(
                        'AddQuestion',
                        { id: this.props.deck.id }
                    )}>
                    <Text>Add Card</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate(
                        'Quiz',
                        { id: this.props.deck.id }
                    )}>
                    <Text>Start Quiz</Text>
                </TouchableOpacity>
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
