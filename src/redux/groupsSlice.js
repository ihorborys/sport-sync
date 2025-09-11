import {createSlice, nanoid} from '@reduxjs/toolkit';

const groupsSlice = createSlice({
    name: 'groups',
    initialState: [], // список груп
    reducers: {
        // створити нову групу
        addGroup: {
            reducer: (state, action) => {
                state.push(action.payload);
            },
        },

        // видалити групу
        removeGroup: (state, action) => {
            return state.filter(group => group.id !== action.payload);
        },

        // додати гравця в групу
        addPlayerToGroup: (state, action) => {
            const {groupId, player} = action.payload;
            const group = state.find(g => g.id === groupId);
            if (group) {
                group.players.push(player);
            }
        },

        // видалити гравця з групи
        removePlayerFromGroup: (state, action) => {
            const {groupId, playerId} = action.payload;
            const group = state.find(g => g.id === groupId);
            if (group) {
                group.players = group.players.filter(p => p.id !== playerId);
            }
        }
    }
});

// експорт екшенів
export const {addGroup, removeGroup, addPlayerToGroup, removePlayerFromGroup} = groupsSlice.actions;

// експорт редюсера (обовʼязково для store)
export default groupsSlice.reducer;
