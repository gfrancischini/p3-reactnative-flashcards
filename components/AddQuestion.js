import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';
import Card from './Card'
import { connect } from 'react-redux'
import {selectDeckById} from '../selectors'

export class AddQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = { question: null, answer:null };
    }
   
    render() {
        console.log(JSON.stringify(this.props));
        return (
            <View>
                <Text> Add Card to {this.props.deck.title} </Text>
                <TextInput
                    placeholder="Type your question"
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(question) => this.setState({ question })}
                    value={this.state.question}
                />
                <TextInput
                    placeholder="Type your question"
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(answer) => this.setState({ answer })}
                    value={this.state.answer}
                />
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
)(AddQuestion)
