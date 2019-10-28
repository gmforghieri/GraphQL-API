import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import AddBook from "../AddBook";
import BookList from "../BookList";



class App extends Component {
  render() {
    return (
      <div id="main">
        <h1>Reading List</h1>
        <BookList />
        <AddBook />
      </div>
    );
  }
}

export default withApollo(App);
