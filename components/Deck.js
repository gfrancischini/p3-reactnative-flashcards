import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Hero from 'react-native-hero';
export default class Deck extends React.Component {
    render() {
        const { title } = this.props.deck;
        return (
            <View style={styles.container}>
                <Hero
                    source={{ uri: `https://picsum.photos/420/320?image=${this.props.deck.id}` }}
                    renderOverlay={() => (
                        <View style={{ flex: 1, padding: 20 }}>
                            <Text style={styles.h1}>{title.toUpperCase()}</Text>
                            <Text style={styles.h2}>{this.props.deck.questions.length} Question(s)</Text>
                        </View>)}

                    colorOpacity={0.5}
                    resizeMode='cover'
                    minHeight={200} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        width: '100%',
        paddingBottom: 20
    },
    h1: {
        fontSize: 25, color: '#fff', fontWeight: 'bold'
    },
    h2: {
        fontSize: 15, color: '#fff'
    },
});