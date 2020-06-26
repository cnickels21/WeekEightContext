import React from 'react';
import Login from '../login/form';

export default function Header(props) {

    return(
        <header>
            <h1>To Do or Not To Do!</h1>
            <Login />
        </header>
    );
}