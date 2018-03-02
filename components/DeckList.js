import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Deck from './Deck'
import { connect } from 'react-redux'
import { selectDecks } from '../selectors'

export class DeckList extends React.Component {

    state = {
        ready: false,
    }

    onPressListItem = (item) => {
        this.props.navigation.navigate(
            'DeckDetail',
            { id: item.id }
        );
    }

    renderItem = ({ item }) => {
        return (
            <View>
                <TouchableOpacity onPress={() => this.onPressListItem(item)}>
                    <Deck deck={item} />
                </TouchableOpacity>
            </View>
        )
    }

    onPressAddDeck = () => {
        this.props.navigation.navigate(
            'AddDeck'
        );
    }

    render() {
        return (
            <View>
                <FlatList data={this.props.decks}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => item.title} />



                <TouchableOpacity onPress={this.onPressAddDeck}>
                    <Text>Add Deck</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        decks: selectDecks(state)
    }
}

function mapDispatchToProps() {
    return {
        gettDecks: () => getDecks,
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeckList)