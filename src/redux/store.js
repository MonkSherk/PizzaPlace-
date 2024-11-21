

import { configureStore } from '@reduxjs/toolkit';
import pizzaReducer from './pizzaSlice';

export const store = configureStore({
    reducer: {
        pizza: pizzaReducer,
    },
});

store.subscribe(() => {
    try {
        const state = store.getState();
        const serializedCart = JSON.stringify(state.pizza.cart);
        localStorage.setItem('cart', serializedCart);
    } catch (e) {
        console.warn('Failed to save cart to localStorage:', e);
    }
});
