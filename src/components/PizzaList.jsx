
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/pizzaSlice';
import { Card, Button, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
export default function PizzaList({ search }) {
    const pizzas = useSelector((state) => state.pizza.pizzas);
    const dispatch = useDispatch();

    const filteredPizzas = pizzas.filter((pizza) =>
        pizza.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="text-center">
            <h2 className="mb-5">Our Pizzas</h2>
            <div className="row justify-content-center">
                {filteredPizzas.length > 0 ? (
                    filteredPizzas.map((pizza) => (
                        <div className="col-md-4 mb-4" key={pizza.id}>
                            <Card className="h-100 shadow-sm">
                                <Card.Img
                                    variant="top"
                                    src={pizza.image}
                                    alt={pizza.name}
                                    style={{ objectFit: 'cover', height: '200px' }}
                                />
                                <Card.Body className="d-flex flex-column">
                                    <div className="mb-2">
                                        <Card.Title className="text-center">
                                            {pizza.name}
                                        </Card.Title>
                                        <Card.Text className="text-muted text-center">
                                            {pizza.description}
                                        </Card.Text>
                                    </div>
                                    <div className="mt-auto">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h5 className="mb-0">
                                                ${pizza.price.toFixed(2)}
                                            </h5>
                                            <Badge variant="warning">
                                                {pizza.rating}{' '}
                                                <span role="img" aria-label="star">
                                                    ⭐
                                                </span>
                                            </Badge>
                                        </div>
                                        <Button
                                            onClick={() => dispatch(addToCart(pizza.id))}
                                            variant="primary"
                                            className="w-100 mt-3"
                                        >
                                            Add to Cart
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    ))
                ) : (
                    <p className="text-center">No pizzas found.</p>
                )}
            </div>
        </div>
    );
}
