import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

const groupsSlice = createSlice({
    name: 'groups',
    initialState,
    reducers: {
        // створити нову групу
        addGroup: {
            reducer: (state, action) => {
                state.items.push(action.payload);
            },
            prepare: (group) => {
                // якщо не передав id — створимо автоматично
                return {payload: {id: nanoid(), players: [], ...group}};
            },
        },

        // видалити групу
        removeGroup: (state, action) => {
            state.items = state.items.filter(group => group.id !== action.payload);
        },

        // додати гравця в групу
        addPlayerToGroup: (state, action) => {
            const {groupId, player} = action.payload;
            const group = state.items.find(g => g.id === groupId);
            if (group) {
                group.players.push(player);
            }
        },

        // видалити гравця з групи
        removePlayerFromGroup: (state, action) => {
            const {groupId, playerId} = action.payload;
            const group = state.items.find(g => g.id === groupId);
            if (group) {
                group.players = group.players.filter(p => p.id !== playerId);
            }
        },
        // resetState
        resetState: () => initialState,
    },
});

export const {
    addGroup,
    removeGroup,
    addPlayerToGroup,
    removePlayerFromGroup,
    resetState,
} = groupsSlice.actions;

export default groupsSlice.reducer;
