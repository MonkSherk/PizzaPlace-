import React from 'react';
import PizzaList from '../components/PizzaList';
import { Container } from 'react-bootstrap';
import '../App.css'
export default function Home({ search }) {
    return (
        <Container className="my-5">
            <PizzaList search={search} />
        </Container>
    );
}
