import React, {Component} from 'react';
import { Link } from "react-router-dom";

export class UsersTable extends Component {
    state = {
        items: [
            {
                name: 'Fulano de Tal',
                email: 'fulanodetal@gmail.com',
                idade: 28
            },
            {
                name: 'Cicrano de Tal',
                email: 'cicranodetal@gmail.com',
                idade: 30
            }
        ]
    }
    render () {
        return (
            <table>
            <thead>
                <th>Nome</th><th>E-mail</th><th>Idade</th>
            </thead>
            <tbody>
                {this.state.items.map ( item => (
                <tr>
                    <td><Link  to={`users/${item.name}`}>{item.name}</Link></td>
                    <td>{item.email}</td>
                    <td>{item.idade}</td>
                </tr>
                ))}
            </tbody>
        </table>

        )
    } 
}