import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import API_URL from '../apiConfig';

function SignUp(props) {
    const initialData = {
        email: '',
        username: '',
        password: '',
        re_password: '',
    }
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const [formData, setFormData] = useState(initialData)
    const handleChange = (event) => {
        setFormData((prevState) => {
            return { ...prevState, [event.target.id]: event.target.value };
        })
    }
    const handlePassMatch = (event) => {
        if (formData.password !== formData.re_password){
            setError(true)
        } else {
            setError(false)
        }
    }
    const handleSignup = async (event) => {
		event.preventDefault();
		return;
	};

    // console.log(formData)

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
                        autoFocus
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
                        autoFocus
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
                        autoFocus
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
						User successfully created! You will be redirected to log in. If you
						are not automatically redirected, please click{' '}
						{<Link to='/signin'>here</Link>}.
					</Alert>
				)}
            </Form>

        </div>
    );
}

export default SignUp;