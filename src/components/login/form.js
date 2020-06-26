import React from 'react';
import { useAuth } from '../../contexts/auth';

export default function Login() {
    const { login, logout } = useAuth();

    handleSubmit = e => {
        e.preventDefault();
        const { username, password } = e.target.elements;
        this.context.login(username.value, password.value);
    }

    logoutSubmit = e => {
        e.preventDefault();
        this.context.logout();
    }

    return (
        <form onSubmit={this.handleSubmit}>
            <input placeholder="Username" name="username" />
            <input placeholder="Password" type="password" name="password" />
            <button>Log In</button>
        </form>
    )
}