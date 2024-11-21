import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../App.css'
export default function Footer() {
    const links = [
        { name: 'Contact Us', url: '#' },
        { name: 'Privacy Policy', url: '#' },
        { name: 'Terms of Service', url: '#' },
    ];
    const socialMedia = [
        { name: 'Facebook', url: 'https://www.facebook.com/?locale=ru_RU', icon: <FaFacebookF size={24} /> },
        { name: 'Twitter', url: 'https://twitter.com/x/migrate?tok=7b2265223a222f3f6c616e673d7275222c2274223a313733323131343531367d0f6ca2e4c0c54f635e5aa82e1e3a0872', icon: <FaTwitter size={24} /> },
        { name: 'Instagram', url: 'https://www.instagram.com/', icon: <FaInstagram size={24} /> },
    ];

    return (
        <footer className="bg-dark text-white py-4 mt-5">
            <Container>
                <Row className="text-center">
                    <Col md={6} className="mb-3 mb-md-0">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            {links.map((link, index) => (
                                <li key={index}>
                                    <a href={link.url} className="text-white">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </Col>
                    <Col md={6}>
                        <h5>Follow Us</h5>
                        <ul
                            className="list-unstyled d-flex justify-content-center"
                            style={{ padding: 0, margin: 0 }}
                        >
                            {socialMedia.map((social, index) => (
                                <li key={index} className="mx-2">
                                    <a href={social.url} className="text-white">
                                        {social.icon}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </Col>
                </Row>
                <hr className="border-top border-secondary" />
                <p className="mt-3 text-center">
                    Чонкуг
                </p>
            </Container>
        </footer>
    );
}
