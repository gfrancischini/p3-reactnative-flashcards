import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Deck from './Deck'
import { connect } from 'react-redux'
import {selectDecks} from '../selectors'

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
        console.log("render item= " + item);
        return (
            <View>
                <TouchableOpacity onPress={() => this.onPressListItem(item)}>
                    <Deck deck={item} />
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        console.log(JSON.stringify(this.props));


        return (
            <FlatList data={this.props.decks}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => item.title} />
        )
    }
}

function mapStateToProps(state) {
    console.log("state= " + JSON.stringify(state));
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