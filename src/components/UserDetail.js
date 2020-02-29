import React, {Component} from 'react';

export class UserDetail extends Component {
    state = {
        prevTitle: ''        
    }

    componentDidMount() {
        this.setState( 
            {
                prevTitle: document.title                
            }            
        )
        document.title = this.props.match.params.name;
    }

    componentWillUnmount() {
        document.title = this.state.prevTitle;
    }

    render() {
        return (
            <>
                <h1>Usuário {this.props.match.params.name}</h1>                
            </>  
        )
    };
}
