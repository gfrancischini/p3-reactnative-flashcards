import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Deck extends React.Component {
    render() {
        const { title } = this.props.deck;
        console.log(JSON.stringify(this.props));
        return (
            <View>
                <Text>{title}</Text>
            </View>
        )
    }
}