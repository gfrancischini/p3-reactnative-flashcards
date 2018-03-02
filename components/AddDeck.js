import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';
import Card from './Card'
import { connect } from 'react-redux'
import { addDeck } from '../actions'

export class AddDeck extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: null };
    }

    onPressAddDeck = () => {
        const newDeck = {
            id: this.state.title, //todo this should be a unique guid
            title: this.state.title,
            questions: []
        }

        console.log("onPressAddDeck: " + JSON.stringify(newDeck));

        this.props.saveDeck(newDeck);
        this.props.goBack();
 
    }

    render() {
        return (
            <View>
                <Text> ahsjahs </Text>
                <TextInput
                    placeholder="Type your deck name"
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(title) => this.setState({ title })}
                    value={this.state.title}
                />

                <TouchableOpacity onPress={this.onPressAddDeck}>
                    <Text>Save Deck</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch, {navigation}) {
    return {
        saveDeck: (deck) => addDeck(deck)(dispatch),
        goBack: () => navigation.goBack(),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddDeck)
