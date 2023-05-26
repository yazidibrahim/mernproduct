import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container"
import { useNavigate } from 'react-router-dom';//hook is used to jump from one page to another


export default function Home() {
    const navigate = useNavigate(); //Hook

    const goToAddpage = () => {
        navigate('/AddItems');
    };
    return (
        <div>
            <Container className="d-flex justify-content-center">
                <h1 className="mx-3">PRODUCTS</h1>
                <Button variant="success" onClick={goToAddpage}>Add +</Button>
            </Container>
        </div>
    );
}
