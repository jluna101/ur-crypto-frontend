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
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100"> 
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white shadow-lg" style={{borderRadius: '.5rem'}}> 
                            <div className="card-body p-5 text-center">
                                <div className="mb-md-5 mt-md-4 pb-5">
                                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                    <p class="text-white-50 mb-5">Please enter your login and password!</p>
                                    <Form onSubmit={handleSignin}>
                                        <Form.Group className="form-outline form-white mb-4" controlId='email'>
                                            <Form.Label className='fw-bold mb-2'>Email</Form.Label>
                                            <Form.Control
                                                required
                                                type='email'
                                                value={formData.email}
                                                onChange ={handleChange}
                                            />
                                        </Form.Group>
                                        <Form.Group class="form-outline form-white mb-4" controlId='password'>
                                            <Form.Label className='fw-bold mb-2'>Password</Form.Label>
                                            <Form.Control
                                                required
                                                type='password'
                                                value={formData.password}
                                                onChange ={handleChange}
                                            />
                                        </Form.Group>
                                        <Button type='submit' className='fw-bold mb-2'>Login</Button>
                                        <div class="d-flex justify-content-center text-center mt-4 pt-1">
                                            <a href="#!" class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
                                            <a href="#!" class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                                            <a href="#!" class="text-white"><i class="fab fa-google fa-lg"></i></a>
                                        </div>
                                    </Form>
                            {error && (
                                <Alert variant='warning' className='mt-4'>
                                    No user found with the credentials entered. Please try again or click <Link to='/signup'>sign up</Link> for an account.
                                </Alert>
                            )}
                            <div>
                                <p className="mb-0">Don't have an account? <Link style={{ textDecoration: 'none'}} to='/signup' className="text-primary-50 fw-bold">Sign Up</Link>
                                </p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SignIn;