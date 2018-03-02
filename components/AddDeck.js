import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';
import Card from './Card'
import { connect } from 'react-redux'
import { selectDeckById } from '../selectors'

export class AddDeck extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: null };
    }

    render() {
        console.log(JSON.stringify(this.props));
        return (
            <View>
                <Text> ahsjahs </Text>
                <TextInput
                    placeholder="Type your deck name"
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(title) => this.setState({ title })}
                    value={this.state.title}
                />
            </View>
        )
    }
}


function mapStateToProps(state, { navigation }) {
    //const { id } = navigation.state.params

    return {
        //deck: selectDeckById(state, id)
    }
}

export default connect(
    mapStateToProps
)(AddDeck)
