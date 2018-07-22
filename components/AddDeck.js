import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';
import Card from './Card'
import { connect } from 'react-redux'
import { addDeck } from '../actions'
import { StyledButton } from "./basic/Button"

export class AddDeck extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: null };
    }

    onPressAddDeck = () => {
        console.log("nextAvailableId: " + this.props.nextAvailableId);
        const newDeck = {
            id: this.props.nextAvailableId, //TODO: in a real work this should be a unique guid
            title: this.state.title,
            questions: []
        }

        //console.log("onPressAddDeck: " + JSON.stringify(newDeck));

        this.props.saveDeck(newDeck);
        this.props.goBack();

    }

    render() {
        return (
            <View style={{ flex: 1, flexGrow: 1, justifyContent: "center" }}>
                <Text>What is your deck name</Text>
                <TextInput
                    placeholder="Type your deck name"
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(title) => this.setState({ title })}
                    value={this.state.title}
                />

                <StyledButton onPress={this.onPressAddDeck} title="Save Deck" color="green" />
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        nextAvailableId: Math.max(...Object.keys(state.itemsById))+1,
    }
}

function mapDispatchToProps(dispatch, { navigation }) {
    return {
        saveDeck: (deck) => addDeck(deck)(dispatch),
        goBack: () => navigation.goBack(),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddDeck)
