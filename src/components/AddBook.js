import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';
import { addBookMutation, getAuthorsQuery, getBooksQuery } from '../queries/queries';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      genre: '',
      authorId: ''
    };
  }

  displayAuthors() {
    var data = this.props.getAuthorsQuery;
    if (data.loading) {
      return (<option disabled>Loading authors</option>);
    } else {
      return data.authors.map(author => {
        return (<option key={author.id} value={author.id}>{author.name}</option>);
      });
    }
  }

  submitForm(e) {
    e.preventDefault();
    // use the addBookMutation
    this.props.addBookMutation({
      variables: {
        name: this.state.name,
        genre: this.state.genre,
        authorId: this.state.authorId
      },
      refetchQueries: [{ query: getBooksQuery }]
    });
  }

  render() {
    return (
      <form id="add-book" onSubmit={this.submitForm.bind(this)}>
        <div className="field">
          <label>Book name:</label>
          <input type="text" onChange={(e) => this.setState({ name: e.target.value })}/>
        </div>
        <div className="field">
          <label>Genre:</label>
          <input type="text" onChange={(e) => this.setState({ genre: e.target.value })}/>
        </div>
        <div className="field">
          <label>Author:</label>
          <select onChange={(e) => this.setState({ authorId: e.target.value })}>
            <option>Select author</option>
            {this.displayAuthors()}
          </select>
        </div>
        <Fab color="primary" aria-label="add" id="button" type="submit">
          <AddIcon/>
        </Fab>
      </form>

    );
  }
}

export default compose(
  graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
  graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);
