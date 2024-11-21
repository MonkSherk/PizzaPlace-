// App.jsx

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Импорт Bootstrap CSS
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import Header from './components/Header';
import Footer from './components/Footer';
import ModalLogin from './components/ModalLogin';
import './App.css';
import Home from './pages/Home';
import CartPage from "./pages/CartPage.jsx";
export default function App() {
    const [modalOpen, setModalOpen] = useState(false);
    const [user, setUser] = useState('');
    const [search, setSearch] = useState('');

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Header setModalOpen={setModalOpen} user={user} setSearch={setSearch} />
                    {modalOpen && <ModalLogin setModalOpen={setModalOpen} setUser={setUser} />}
                    <Routes>
                        <Route path="/" element={<Home search={search} />} />
                        <Route path="/cart" element={<CartPage />} />
                    </Routes>
                    <Footer />
                </div>
            </Router>
        </Provider>
    );
}
