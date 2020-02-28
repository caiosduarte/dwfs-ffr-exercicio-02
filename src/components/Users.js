import React, {Component} from 'react';
import {UsersTable} from './UsersTable';

export class Users extends Component {

    render() {
        return (
            <>
            <h1>Usuários</h1>
            <UsersTable />
            </>    
        );   
    }
}