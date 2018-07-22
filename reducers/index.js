const INITIAL_STATE = {
    itemsById: {
        1: {
            id: 1,
            title: 'React',
            questions: [
                {
                    question: 'What is React?',
                    answer: 'A library for managing user interfaces'
                },
                {
                    question: 'Where do you make Ajax requests in React?',
                    answer: 'The componentDidMount lifecycle event'
                }
            ]
        },
        2: {
            id: 2,
            title: 'JavaScript',
            questions: [
                {
                    question: 'What is a closure?',
                    answer: 'The combination of a function and the lexical environment within which that function was declared.'
                }
            ]
        }
    }
}


/**
 * 
 */
const deckReducer = (state = INITIAL_STATE, action) => {
    //console.log("deckReducer: " + JSON.stringify(action));
    switch (action.type) {
        case "RECEIVE_DECKS":
            const itemsById = action.decks
                .reduce((decks, deck) => (Object.assign(decks, { [deck.id]: deck })), state.itemsById || {});
            return {
                ...state,
                itemsById
            }
        default:
            return state
    }
}

export default deckReducer;