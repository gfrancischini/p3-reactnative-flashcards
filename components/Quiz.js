import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Card from './Card'
import { connect } from 'react-redux'
import {selectDeckById} from '../selectors'

export class Quiz extends React.Component {

   
    render() {
        console.log(JSON.stringify(this.props));
        return (
            <View>
                <Card card={this.props.deck.questions[0]}/>
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
)(Quiz)
