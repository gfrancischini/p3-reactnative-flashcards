import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Card from './Card'
import { connect } from 'react-redux'
import { selectDeckById } from '../selectors'
import { PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator } from 'rn-viewpager';
import CardPagerDotIndicator from './CardPagerDotIndicator'

export class QuizResult extends React.Component {
    render() {
        return (
            <View style={{flex:1, backgroundColor: "cadetblue", justifyContent:"center" }}>
                <Text style={{alignSelf:"center", fontSize: 30, color: "#FFD700" }}>Congratulations. You reached the end of the quiz</Text>
                {console.log("corret:" + this.props.correct)}
                {console.log("questions:" + this.props.questions)}
                <Text style={{marginTop:15, alignSelf:"center", fontSize: 20, color: "#FFD700"}}>Your Score: {this.props.correct}/{this.props.questions}</Text>
            </View>
        )
    }
}


function mapStateToProps(state, { navigation }) {
    const { correct, questions } = navigation.state.params
    console.log("corret:" + correct);
    return {
        correct,
        questions
    }
}

export default connect(
    mapStateToProps
)(QuizResult)
