import {configureStore} from '@reduxjs/toolkit';
import groupsReducer from './groupsSlice';

export const store = configureStore({
    reducer: {
        groups: groupsReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
});