import React, {Component} from 'react';
import {UserItem} from './UserItem';

export class UsersTable extends Component {
    state = {
        items: [
            {
                name: 'Fulano de Tal',
                email: 'fulanodetal@gmail.com',
                age: 28
            },
            {
                name: 'Cicrano de Tal',
                email: 'cicranodetal@gmail.com',
                age: 30
            }
        ]
    }

    render () {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Nome</th><th>E-mail</th><th>Idade</th>
                    </tr>                    
                </thead>
                <tbody>                    
                    {this.state.items.map ( item => (
                        <UserItem    
                        name={item.name} 
                        email={item.email} 
                        age={item.age} 
                        />
                    ))}
                </tbody>
            </table>
        )
    } 
}