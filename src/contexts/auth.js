import React, { useContext } from 'react';
import jwt, { JsonWebTokenError } from 'jsonwebtoken';

const usersAPI = 'https://deltav-todo-alpha.azurewebsites.net/api/v1/Users';

export const AuthContext = React.createContext();

export default function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider(props) {

    const login = async(username, password) => {
        const result = await fetch(`${usersAPI}/Login`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify([username, password]),
        });

        const body = await result.json();

        if (result.ok) {
            this.setState({ user: body });
        };

        this.logout();
    }

    const logout = () => {
        this.setState({ user: null });
    }

    return (
        <AuthContext.Provider value={this.state}>
          {this.props.children}
        </AuthContext.Provider>
    );
}