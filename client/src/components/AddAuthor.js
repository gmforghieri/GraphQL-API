import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import {addAuthorMutation, getAuthorsQuery} from '../queries/queries';

class AddAuthor extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
        };
    }
    submitForm(e){
        e.preventDefault();
        // use the addBookMutation
        this.props.addAuthorMutation({
            variables: {
                name: this.state.name,
            },
        });
    }
    render(){
        return(
            <form id="add-author" onSubmit={ this.submitForm.bind(this) } >
                <div className="field">
                    <label>Author name:</label>
                    <input type="text" onChange={ (e) => this.setState({ name: e.target.value }) } />
                </div>
                <button>+</button>
            </form>
        );
    }
}

export default compose(
    graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
    graphql(addAuthorMutation, { name: "addAuthorMutation" })
)(AddAuthor);