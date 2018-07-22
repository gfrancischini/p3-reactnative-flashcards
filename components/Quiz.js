import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Card from './Card'
import { connect } from 'react-redux'
import { selectDeckById } from '../selectors'
import { PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator } from 'rn-viewpager';
import CardPagerDotIndicator from './CardPagerDotIndicator'

export class Quiz extends React.Component {

    state = {
        pageStatus: [],
        reachedEnd : false
    };

    currentPage = 0;

    constructor() {
        super();
    }

    renderDotIndicator = () => {
        return <CardPagerDotIndicator pageCount={this.props.deck.questions.length} pageStatus={this.state.pageStatus} />;
    }

    
    componentDidUpdate = () => {
        console.log("componentDidUpdate: " + JSON.stringify(this.state));
        if(this.state.reachedEnd) {
            console.log("end of quiz");
            //end of quiz

            const correct = this.state.pageStatus.filter((status => { return status })).length;
            console.log("correct=" + correct);
            this.props.navigation.navigate(
                'QuizResult',
                { correct, questions: this.state.pageStatus.length }
            );
        }
    }
    /**
     * Set the page status based on the question anwsered
     * @param result true or false (question selected result)
     * @param questionId id of the question awnsered
     */
    onResultSelected = (result, questionId) => {
        const newPageStatus = [...this.state.pageStatus];
        newPageStatus[questionId] = result;
        this.setState({
            pageStatus: newPageStatus
        });
        this.updatePage(this.currentPage + 1);
    }

    updatePage = (index) => {
        if (index < this.props.deck.questions.length) {
            this.viewPager.setPage(index); 
        }
        else {
            this.setState({
                reachedEnd: true
            });
        }
    }

    onPageSelected = (page) => {
        this.currentPage = page.position;
    }

    render() {
        //console.log(this.props.deck);
        return (
            <View style={{ flex: 1 }}>
                <IndicatorViewPager
                    style={{ flex: 1 }}
                    indicator={this.renderDotIndicator()}
                    ref={viewPager => { this.viewPager = viewPager; }}
                    onPageSelected={this.onPageSelected}>
                    {
                        this.props.deck.questions.map((question, id) => {
                            return <View key={id} style={{ flex: 10, backgroundColor: 'cadetblue' }}>
                                <Card card={question}
                                    id={id}
                                    onResultSelected={this.onResultSelected} />
                            </View>
                        })
                    }

                </IndicatorViewPager>
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
