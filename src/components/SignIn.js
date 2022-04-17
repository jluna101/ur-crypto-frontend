import React, { useState } from 'react';
import API_URL from '../apiConfig';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = ({ handleSetSignedIn }) => {
    /* === Title Tag === */
    document.title = '| Signin'
    /* Variables */
    const initialData = {
        email: '',
        password: '',
    }
    const [formData, setFormData] = useState(initialData);
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const handleChange = (event) => {
        setFormData((prevState) => {
            return { ...prevState, [event.target.id]: event.target.value };
        })
    }
    const handleSignin = async (event) => {
        event.preventDefault();
        setError(false)
        try {
            const response = await fetch(API_URL + 'token/login/', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            if (response.status === 200){
                const data = await response.json()
                handleSetSignedIn(data.auth_token)
                navigate('/prices')
            } else if (response.status === 400){
                setError(true);
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='w-75 p-3'>
            <h2>Login</h2>
            <Form onSubmit={handleSignin}>
                <Form.Group controlId='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                    required
                    
                    type='email'
                    value={formData.email}
                    onChange ={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                    required
                    type='password'
                    value={formData.password}
                    onChange ={handleChange}
                    />
                </Form.Group>
                <Button type='submit'>Login</Button>
            </Form>
            {error && (
				<Alert variant='warning' className='mt-4'>
					No user found with the credentials entered. Please try again or click <Link to='/signup'>sign up</Link> for an account.
				</Alert>
			)}
        </div>
    );
}

export default SignIn;