import {createSlice, nanoid} from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

const groupsSlice = createSlice({
    name: "groups",
    initialState,
    reducers: {
        // створити нову групу
        addGroup: {
            reducer: (state, action) => {
                state.items.push(action.payload);
            },
            prepare: (group) => ({
                payload: {id: nanoid(), players: [], ...group},
            }),
        },

        // видалити групу
        removeGroup: (state, action) => {
            state.items = state.items.filter((group) => group.id !== action.payload);
        },

        // додати гравця в групу
        addPlayer: (state, action) => {
            const {groupId, playerName} = action.payload;
            const group = state.items.find((g) => g.id === groupId);
            if (group) {
                group.players.push({id: nanoid(), name: playerName});
            }
        },

        // видалити гравця з групи
        removePlayer: (state, action) => {
            const {groupId, playerId} = action.payload;
            const group = state.items.find((g) => g.id === groupId);
            if (group) {
                group.players = group.players.filter((p) => p.id !== playerId);
            }
        },

        // скинути state
        resetState: () => initialState,
    },
});

export const {
    addGroup,
    removeGroup,
    addPlayer,
    removePlayer,
    resetState
} =
    groupsSlice.actions;

export default groupsSlice.reducer;

