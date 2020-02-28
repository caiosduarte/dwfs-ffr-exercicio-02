import React, {Component} from "react";
import { Link } from "react-router-dom";

export class UserItem extends Component {
    render () {        
        return (
            <tr>
                <td>
                    <Link to={`users/${this.props.name}`} params={{name: this.props.name}}>
                        {this.props.name}
                    </Link>
                </td>
                <td>{this.props.email}</td>
                <td>{this.props.age}</td>
            </tr>
        );
    }
}