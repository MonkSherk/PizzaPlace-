// pizzaSlice.js

import { createSlice } from '@reduxjs/toolkit';
import image from '../images/pizza.png';

const loadCartFromLocalStorage = () => {
    try {
        const serializedCart = localStorage.getItem('cart');
        if (serializedCart === null) {
            return [];
        }
        return JSON.parse(serializedCart);
    } catch (e) {
        console.warn('Failed to load cart from localStorage:', e);
        return [];
    }
};

const initialState = {
    pizzas: [
        { id: 1, name: 'Margherita', description: 'Classic Margherita with mozzarella and tomatoes', price: 8, rating: 4.5, image: image },
        { id: 2, name: 'Pepperoni', description: 'Pepperoni and mozzarella on a classic crust', price: 10, rating: 4.7, image: image },
        { id: 3, name: 'BBQ Chicken', description: 'Chicken, BBQ sauce, and onions', price: 12, rating: 4.6, image: image },
        { id: 4, name: 'Hawaiian', description: 'Ham, pineapple, and cheese', price: 11, rating: 4.4, image: image },
        { id: 5, name: 'Veggie Delight', description: 'Bell peppers, olives, onions, and mushrooms', price: 9, rating: 4.3, image: image },
        { id: 6, name: 'Four Cheese', description: 'Mozzarella, cheddar, parmesan, and blue cheese', price: 13, rating: 4.8, image: image },
        { id: 7, name: 'Spicy Jalapeno', description: 'Jalapenos, pepperoni, and hot sauce', price: 10, rating: 4.2, image: image },
        { id: 8, name: 'Meat Feast', description: 'Pepperoni, sausage, ham, and bacon', price: 14, rating: 4.7, image: image },
        { id: 9, name: 'Mediterranean', description: 'Feta cheese, olives, spinach, and sun-dried tomatoes', price: 12, rating: 4.6, image: image },
        { id: 10, name: 'Buffalo Chicken', description: 'Buffalo chicken, mozzarella, and ranch dressing', price: 13, rating: 4.5, image: image },
    ],
    cart: loadCartFromLocalStorage(),
};
const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const pizza = state.pizzas.find((p) => p.id === action.payload);
            const existingItem = state.cart.find((item) => item.id === action.payload);

            if (existingItem) {
                existingItem.quantity += 1;
                alert('Added to cart!');
            } else {
                state.cart.push({ ...pizza, quantity: 1 });
                alert('Added to cart!');
            }
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
        },
        incrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            if (item) item.quantity += 1;
        },
        decrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },
        clearCart: (state) => {
            state.cart = [];
        },
    },
});
export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity, clearCart } = pizzaSlice.actions;
export default pizzaSlice.reducer;
