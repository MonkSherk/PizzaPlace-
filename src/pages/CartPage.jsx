import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
    clearCart,
} from '../redux/pizzaSlice';
import { Link } from 'react-router-dom';
import {
    Button,
    Alert,
    Table,
    Image,
    ButtonGroup,
} from 'react-bootstrap';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CartPage() {
    const cart = useSelector((state) => state.pizza.cart);
    const dispatch = useDispatch();

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handlePlaceOrder = () => {
        alert(`Order placed! Total: $${total.toFixed(2)}`);
        dispatch(clearCart());
    };

    return (
        <div className="container my-5">
            <div className="text-center mb-4">
                <h2>Shopping Cart</h2>
            </div>
            {cart.length === 0 ? (
                <Alert variant="info" className="text-center">
                    Your cart is empty. <Link to="/">Start adding some pizzas!</Link>
                </Alert>
            ) : (
                <>
                    <Table
                        striped
                        bordered
                        hover
                        responsive
                        className="text-center"
                        style={{ margin: '0 auto', maxWidth: '800px' }}
                    >
                        <thead className="thead-dark">
                        <tr>
                            <th>Pizza</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {cart.map((item) => (
                            <tr key={item.id}>
                                <td className="d-flex align-items-center">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        rounded
                                        width="60"
                                        height="60"
                                        className="mr-3"
                                    />
                                    {item.name}
                                </td>
                                <td>${item.price.toFixed(2)}</td>
                                <td>{item.quantity}</td>
                                <td>${(item.price * item.quantity).toFixed(2)}</td>
                                <td>
                                    <ButtonGroup>
                                        <Button
                                            onClick={() => dispatch(decrementQuantity(item.id))}
                                            variant="outline-secondary"
                                            size="sm"
                                        >
                                            -
                                        </Button>
                                        <Button
                                            onClick={() => dispatch(incrementQuantity(item.id))}
                                            variant="outline-secondary"
                                            size="sm"
                                        >
                                            +
                                        </Button>
                                        <Button
                                            onClick={() => dispatch(removeFromCart(item.id))}
                                            variant="outline-danger"
                                            size="sm"
                                        >
                                            Remove
                                        </Button>
                                    </ButtonGroup>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                    <div
                        className="d-flex justify-content-center align-items-center mt-4"
                        style={{ flexDirection: 'column' }}
                    >
                        <h4 className="mr-3">Total: ${total.toFixed(2)}</h4>
                        <Button onClick={handlePlaceOrder} variant="success" className="mt-3">
                            Place Order
                        </Button>
                    </div>
                </>
            )}
        </div>
    );
}
