export const RECEIVE_DECKS = "RECEIVE_DECKS";

/**
 * Action dispatched when decks are received
 * @param {*} posts 
 */
export const receiveDecks = decks => ({
    type: RECEIVE_DECKS,
    decks
});

/**
 * 
 */
export const addDeck = (newDeck) => dispatch => (
    dispatch(receiveDecks([deck]))
)

/**
 * 
 */
export const updateDeck = (newDeck) => dispatch => (
    dispatch(receiveDecks([deck]))
)

