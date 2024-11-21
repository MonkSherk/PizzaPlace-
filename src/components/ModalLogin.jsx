import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import '../App.css';

export default function ModalLogin({ setModalOpen, setUser }) {
    const [username, setUsername] = useState('');

    const handleLogin = () => {
        if (username) {
            localStorage.setItem('user', username);
            setUser(username);
            setModalOpen(false);
        } else {
            alert('Please enter a username');
        }
    };

    return (
        <Modal show onHide={() => setModalOpen(false)} centered>
            <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setModalOpen(false)}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleLogin}>
                    Login
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
