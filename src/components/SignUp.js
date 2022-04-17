import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import API_URL from '../apiConfig';

const SignUp = () => {
    /* === Title Tag === */
    document.title = '| Signup'
    /* Variables */
    const initialData = {
        email: '',
        username: '',
        password: '',
        re_password: '',
    }
    const navigate = useNavigate();
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const [formData, setFormData] = useState(initialData)
    const [signupErrors, setSignupErrors] = useState([]);

    const handleChange = (event) => {
        setFormData((prevState) => {
            return { ...prevState, [event.target.id]: event.target.value };
        })
    }
    // Verifies password & re-entered password match 
    const handlePassMatch = (event) => {
        if (formData.password !== formData.re_password){
            setError(true)
        } else {
            setError(false)
        }
    }
    const handleSignup = async (event) => {
		event.preventDefault();
        console.log(formData)
        try {
                const response = await fetch(API_URL + 'users/', {
                    method: 'POST', 
                    body: JSON.stringify(formData),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (response.status === 201){
                        setSuccess(true);
                        setTimeout(() => {
                            navigate('/signin')
                        }, 3000)
                } else if (response.status === 400) {
                    const data = await response.json();
                    // Displays errors - bug ( may not display multiple ones at once ex. username and email errors)
                    if (data.username){
                        setSignupErrors(data.username); 
                    }
                    if (data.email){
                        setSignupErrors(data.email); 
                    }
                    if (data.password){
                        setSignupErrors(data.password); 
                    }
                }
                console.log(response);
        } catch (error) { 
            console.log(error)
        }
		return;
	};

    return (
        <div className='w-75 p-3'>
            <h2>Create an account!</h2>
            <Form onSubmit={handleSignup}>
                <Form.Group controlId='username'>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        required
                        autoFocus
                        type='username'
                        name='username'
                        value={formData.username}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        required
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        required
                        type='password'
                        name='password'
                        value={formData.password}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId='re_password'>
                    <Form.Label>Re-enter Password</Form.Label>
                    <Form.Control
                        required
                        type='password'
                        name='re_password'
                        value={formData.re_password}
                        onChange={handleChange}
                        onBlur={handlePassMatch}
                    />
                </Form.Group>
                <Button type='submit'>Sign up</Button>
                {error && <Alert variant='danger'>Passwords must match!</Alert>}
				{success && (
					<Alert variant='success' className='mt-5'>
						User successfully created! You'll be redirected to log in. If you're not automatically redirected, please click{' '} 
						{<Link to='/signin'>here</Link>}.
					</Alert>
				)}
                {!!signupErrors.length && signupErrors.map((error) => {
                    return <Alert key={error} variant='danger'>{error}</Alert>
                })} 
            </Form>

        </div>
    );
}

export default SignUp;