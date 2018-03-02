export const selectDeckById = (state, id) => {
    if (id == null) {
        return null;
    }

    //when there is no loaded post we should try to load the specific one
    if (state.itemsById == null) {
        return null;
    }
    return state.itemsById[id];
}

export const selectDecks = (state) => {
    //when there is no loaded post we should try to load the specific one
    if (state.itemsById == null) {
        return null;
    }

    const decks = Object.values(state.itemsById);

    return decks;
}