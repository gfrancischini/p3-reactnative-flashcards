import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createStore, applyMiddleware  } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { white, purple } from './utils/colors'

import DeckList from './components/DeckList'
import DeckDetail from './components/DeckDetail'
import Quiz from './components/Quiz'
import QuizResult from './components/QuizResult'
import { TabNavigator, StackNavigator } from 'react-navigation'

import AddDeck from './components/AddDeck'
import AddQuestion from './components/AddQuestion'

import thunk from 'redux-thunk';    


const MainNavigator = StackNavigator({
    Home: {
        screen: DeckList,
        navigationOptions: {
            headerTintColor: white,
            headerStyle: {
                backgroundColor: purple,
                
            },
            title: 'Cards are Awesome'
        },
        
    },
    DeckDetail: {
        screen: DeckDetail,
        navigationOptions: {
            headerTintColor: white,
            headerStyle: {
                backgroundColor: purple,
                
            },
            title: 'Quiz Detail'
        },
    },
    Quiz: {
        screen: Quiz,
        navigationOptions: {
            headerTintColor: white,
            headerStyle: {
                backgroundColor: purple,
                
            },
            title: 'Playing Quiz'
        },
    },
    QuizResult: {
        screen: QuizResult,
        navigationOptions: {
            headerTintColor: white,
            headerStyle: {
                backgroundColor: purple,
                
            },
            title: 'Quiz Result'
        },
    },
    AddDeck: {
        screen: AddDeck,
        navigationOptions: {
            headerTintColor: white,
            headerStyle: {
                backgroundColor: purple,
                
            },
            title: 'Add a new Deck Quiz'
        },
    },
    AddQuestion: {
        screen: AddQuestion,
        navigationOptions: {
            headerTintColor: white,
            headerStyle: {
                backgroundColor: purple,
                
            },
            title: 'Add Question to Quiz'
        },
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