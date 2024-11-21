import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Form, FormControl, Button, Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';
import '../App.css';

export default function Header({ setModalOpen, setSearch, user, setUser }) {
    const [searchValue, setSearchValue] = useState('');
    const cartItemCount = useSelector((state) => state.pizza.cart.length);

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
        setSearch(event.target.value);
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        alert('You have been logged out');
        window.location.reload();
        setUser(null);
    };

    return (
        <Navbar
            bg="dark"
            variant="dark"
            expand="lg"
            className="p-3"
            style={{ justifyContent: 'center' }}
        >
            <div className="container text-center">
                <Navbar.Brand as={Link} to="/" className="mx-auto">
                    Pizza Delivery
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse
                    id="basic-navbar-nav"
                    className="justify-content-center"
                >
                    <Form inline className="d-flex align-items-center">
                        <FormControl
                            type="text"
                            placeholder="Search for food..."
                            className="mr-sm-2"
                            value={searchValue}
                            onChange={handleSearchChange}
                            style={{ marginRight: '10px' }}
                        />
                        {user ? (
                            <>
                                <Navbar.Text className="mr-3 text-white">
                                    Welcome, {user}
                                </Navbar.Text>
                                <Button
                                    as={Link}
                                    to="/cart"
                                    variant="outline-light"
                                    className="position-relative"
                                >
                                    <FaShoppingCart size={20} />
                                    {cartItemCount > 0 && (
                                        <Badge
                                            variant="danger"
                                            className="position-absolute"
                                            style={{ top: '-5px', right: '-10px' }}
                                        >
                                            {cartItemCount}
                                        </Badge>
                                    )}
                                </Button>
                                <Button
                                    onClick={handleLogout}
                                    variant="outline-light"
                                    className="ml-2"
                                >
                                    Logout
                                </Button>
                            </>
                        ) : (
                            <Button
                                onClick={() => setModalOpen(true)}
                                variant="outline-light"
                                className="ml-2"
                            >
                                Login
                            </Button>
                        )}
                    </Form>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}
