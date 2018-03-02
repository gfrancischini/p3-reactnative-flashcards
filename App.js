import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createStore, applyMiddleware  } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { white, purple } from './utils/colors'

import DeckList from './components/DeckList'
import DeckDetail from './components/DeckDetail'
import Quiz from './components/Quiz'
import { TabNavigator, StackNavigator } from 'react-navigation'

import AddDeck from './components/AddDeck'
import AddQuestion from './components/AddQuestion'

import thunk from 'redux-thunk';    

const WrappedDeck = ({ navigation }) => {
    return <DeckList navigation={navigation} decks={[{ title: "bla bla bla1" }, { title: "bla bla bla2" }, { title: "bla bla bla3" }]} />
}

const MainNavigator = StackNavigator({
    Home: {
        screen: DeckList,
        navigationOptions: {
            headerTintColor: white,
            headerStyle: {
                backgroundColor: purple,
            }
        }
    },
    DeckDetail: {
        screen: DeckDetail,
    },
    Quiz: {
        screen: Quiz
    },
    AddDeck: {
        screen: AddDeck
    },
    AddQuestion: {
        screen: AddQuestion
    }

})

const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <View style={{ flex: 1 }}>
                    <MainNavigator />
                </View>
            </Provider>
        )
    }
}