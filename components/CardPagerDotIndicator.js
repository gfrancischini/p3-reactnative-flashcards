import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, ViewPropTypes } from 'react-native'

const DEFAULT_DOT_RADIUS = 6

export default class CardPagerDotIndicator extends Component {
    static propTypes = {
        ...ViewPropTypes,
        pageCount: PropTypes.number.isRequired,
        initialPage: PropTypes.number,
        pager: PropTypes.any,
        dotStyle: ViewPropTypes.style,
        selectedDotStyle: ViewPropTypes.style,
        hideSingle: PropTypes.bool
    }

    static defaultProps = {
        pageCount: 0,
        initialPage: 0,
        hideSingle: false
    }

    state = {
        selectedIndex: this.props.initialPage
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.selectedIndex != nextState.selectedIndex ||
            this.props.pageCount != nextProps.pageCount ||
            this.props.dotStyle != nextProps.dotStyle ||
            this.props.selectedDotStyle != nextProps.selectedDotStyle ||
            this.props.style != nextProps.style
    }

    render() {
        let { pageCount, dotStyle, selectedDotStyle } = this.props;
        if (pageCount <= 0) return null;
        if (this.props.hideSingle && pageCount == 1) return null;
        let dotsView = [];
        for (let i = 0; i < pageCount; i++) {
            let isSelected = i === this.state.selectedIndex
            let dotAwnserStyle = this.props.pageStatus[i] == null ? null : this.props.pageStatus[i] ? styles.correct : styles.incorrect

            dotsView.push(
                <View
                    style={[styles.dot, dotAwnserStyle, isSelected ? styles.selectDot : null]}
                    key={i}
                />
            )
        }
        return (
            <View {...this.props} style={[styles.container, this.props.style]} >
                {dotsView}
            </View>
        )
    }

    onPageSelected(e) {
        this.setState({ selectedIndex: e.position })
    }
}
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    dot: {
        width: DEFAULT_DOT_RADIUS,
        height: DEFAULT_DOT_RADIUS,
        borderRadius: DEFAULT_DOT_RADIUS >> 1,
        backgroundColor: '#BBBBBB',
        margin: DEFAULT_DOT_RADIUS >> 1
    },
    selectDot: {
        borderWidth: 1,
        borderColor: '#d6d7da',
    },
    correct: {
        backgroundColor: 'green'
    },
    incorrect: {
        backgroundColor: 'red'
    }
});