import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../redux/pizzaSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
export default function Cart() {
    const cart = useSelector((state) => state.pizza.cart);
    const dispatch = useDispatch();

    const [animate, setAnimate] = useState(false);

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    useEffect(() => {
        if (cart.length > 0) {
            setAnimate(true);
            const timer = setTimeout(() => setAnimate(false), 300);
            return () => clearTimeout(timer);
        }
    }, [cart.length]);

    return (
        <div className="container my-4">
            <div className="d-flex justify-content-between align-items-center">
                <h2>Shopping Cart</h2>
            </div>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    {cart.map((item) => (
                        <div
                            key={item.id}
                            className={`d-flex justify-content-between align-items-center border-bottom pb-2 mb-2 ${animate ? 'cart-animation' : ''}`}
                        >
                            <div>
                                <h5>{item.name}</h5>
                                <p>Price: ${item.price} x {item.quantity} = ${item.price * item.quantity}</p>
                            </div>
                            <div>
                                <button onClick={() => dispatch(incrementQuantity(item.id))} className="btn btn-outline-primary mx-1">+</button>
                                <button onClick={() => dispatch(decrementQuantity(item.id))} className="btn btn-outline-primary mx-1">-</button>
                                <button onClick={() => dispatch(removeFromCart(item.id))} className="btn btn-outline-danger mx-1">Remove</button>
                            </div>
                        </div>
                    ))}
                    <h4>Total: ${total}</h4>
                    <button onClick={() => alert(`Order placed! Total: $${total}`)} className="btn btn-success">Place Order</button>
                </>
            )}
        </div>
    );
}
