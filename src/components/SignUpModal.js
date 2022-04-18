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
        <section id='signUp' className="vh-100 gradient-custom">
            <div className="container py-5 h-60">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div id='signUpSize' className="card bg-dark text-white shadow-lg" style={{borderRadius: '.5rem'}}>
                            <div  className="card-body px-5 text-center">
                                <div  className="md-5 md-2 pb-5">
                                    <h2 className="fw-bold mb-2 text-uppercase">Create an account</h2>
                                    <p class="text-white-50 mb-2">Please fill out below for member access!</p>
                                    <Form onSubmit={handleSignup}>
                                        <Form.Group className="form-outline form-white mb-4" controlId='username'>
                                            <Form.Label className='fw-bold mb-2'>Username</Form.Label>
                                            <Form.Control
                                                required
                                                autoFocus
                                                type='username'
                                                name='username'
                                                value={formData.username}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                        <Form.Group className="form-outline form-white mb-4" controlId='email'>
                                            <Form.Label className='fw-bold mb-2'>Email</Form.Label>
                                            <Form.Control
                                                required
                                                type='email'
                                                name='email'
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                        <Form.Group className="form-outline form-white mb-4" controlId='password'>
                                            <Form.Label className='fw-bold mb-2'>Password</Form.Label>
                                            <Form.Control
                                                required
                                                type='password'
                                                name='password'
                                                value={formData.password}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                        <Form.Group className="form-outline form-white mb-4" controlId='re_password'>
                                            <Form.Label className='fw-bold mb-2'>Re-enter Password</Form.Label>
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
                                        <div>
                                            <p className="mb-0">Already have an account? <Link style={{ textDecoration: 'none'}} to='/signin' className="text-primary-50 fw-bold">Signin</Link>
                                            </p>
                                        </div>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
    }

export default SignUp;