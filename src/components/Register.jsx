import React, { useState } from 'react';
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "../App.css";

function FormGroupExample() {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        userName: '',
        password: '',
        rewritePassword: ''
    });

    const [formError, setFormError] = useState({
        nameError: null,
        emailError: null,
        userNameError: null,
        passwordError: null,
        rewritePasswordError: null
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = {
            nameError: formValues.name.length === 0 ? 'Name Required' : null,
            emailError: formValues.email.length === 0 ? "Email is required"
                : !/\S+@\S+\.\S+/.test(formValues.email)
                    ? "Email is invalid"
                    : null,
            userNameError: formValues.userName.length === 0 ? 'Username required' : formValues.userName.includes(' ') ? 'Username cannot contain spaces' : null,
            passwordError: formValues.password.length === 0 ? 'Password required' : formValues.password.length < 6
                ? "Password must be at least 6 characters"
                : !/[a-z]/.test(formValues.password)
                    ? 'Password must contain at least one lowercase letter'
                    : !/[A-Z]/.test(formValues.password)
                        ? 'Password must contain at least one uppercase letter'
                        : !/[0-9]/.test(formValues.password)
                            ? 'Password must contain at least one digit'
                            : !/[!*@%$#]/.test(formValues.password)
                                ? 'Password must contain at least one special character (e.g., * @ % $ #)'
                                : null,
            rewritePasswordError: formValues.rewritePassword !== formValues.password ? 'Passwords do not match' : null
        };

        setFormError(errors);

        const noErrors = Object.values(errors).every(error => error === null);

        if (noErrors) {
            alert('Account created successfully');
        }
    };

    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    return (
        <Container className='con'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name='name' onChange={handleInput} value={formValues.name} type="text" placeholder="Enter name" />
                </Form.Group>
                {formError.nameError &&
                    <div className='form-text text-danger'>
                        {formError.nameError}
                    </div>
                }

                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' onChange={handleInput} value={formValues.email} type="email" placeholder="Enter email" />
                </Form.Group>
                {formError.emailError &&
                    <div className='form-text text-danger'>
                        {formError.emailError}
                    </div>
                }

                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control name='userName' onChange={handleInput} value={formValues.userName} type="text" placeholder="Enter username" />
                </Form.Group>
                {formError.userNameError &&
                    <div className='form-text text-danger'>
                        {formError.userNameError}
                    </div>
                }

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' onChange={handleInput} value={formValues.password} type="password" placeholder="Password" />
                    {formError.passwordError &&
                        <div className='form-text text-danger'>
                            {formError.passwordError}
                        </div>
                    }
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Re-enter Password</Form.Label>
                    <Form.Control name='rewritePassword' onChange={handleInput} value={formValues.rewritePassword} type="password" placeholder="Re-enter Password" />
                </Form.Group>
                {formError.rewritePasswordError &&
                    <div className='form-text text-danger'>
                        {formError.rewritePasswordError}
                    </div>
                }

                <Button variant="primary" type="submit">
                    Create Account
                </Button>
            </Form>
        </Container>
    );
}

export default FormGroupExample;
