import React from 'react';
import useAuth from '../../contexts/auth';

export default function Login(props) {
    const context = useAuth();
    const handleSubmit = e => {
        e.preventDefault();
        const { username, password } = e.target.elements;
        // This isn't being exported out of the context properly or I'm not using it right
        context.login(username.value, password.value);
    }

    const logoutSubmit = e => {
        e.preventDefault();
        context.logout();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Username" name="username" />
            <input placeholder="Password" type="password" name="password" />
            <button>Log In</button>
        </form>
    )
}