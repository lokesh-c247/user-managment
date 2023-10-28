import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./index.module.scss";
import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const Login = () => {
    const [loginDetail, setLoginDetail] = useState({
        email: "",
        password: ""
    })

    const loginMutation = useMutation({
        mutationFn: async (loginDetail) => {
            return axios.post('https://dummyjson.com/auth/login', loginDetail)
        },
        onSuccess: async (data) => {
            console.log(data)
        },
        onError: (error) => {
            console.error('Login failed:', error);
        },
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setLoginDetail((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await loginMutation.mutateAsync(loginDetail)
        console.log(res, "res")
    }

    return (
        <div className={styles.conatainer} >
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Email
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control placeholder="email@example.com" name='email' onChange={handleChange} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Password
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} />
                        </Col>
                    </Form.Group>
                    <div className={styles.btn}>
                        <Button type="submit" variant="success">Login</Button>
                    </div>
                </Form>
            </Container>
        </div>
    )
}

export default Login