import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './Pages/SearchPage';
import MainPage from './Pages/MainPage';
import { Route } from 'react-router';

class BooksApp extends React.Component {
  state = {
    books: [],
    read: [],
    wantToRead: [],
    currentlyReading: []
  }

  // fetch all books when application start
  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books }));
    this.whichShilf()
  }

  // if any change in book state happen update the state to the new change
  componentDidUpdate(prevProps, prevState) {

    if (this.state.books !== prevState.books) {

      this.whichShilf()
    }
  }

  // update book with the new shelf
  updateShelf = (book, shelf) => {

    // change the data in the server
    BooksAPI.update(book, shelf)
      .then(data => {
        book.shelf = shelf
        this.setState(prevState => ({
          // change data in the state 
          // -- delete changedBook from it's shelf array
          // -- add changed book to the new Array
          // change UI bassed on the
          books: prevState.books
            .filter(books => books.id !== book.id)
            .concat(book)
        }))
      })
  }

  // determine which shilf for the book
  whichShilf = () => {
    const booksShelves = { read: [], wantToRead: [], currentlyReading: [] };
    this.state.books.forEach(b => {
      if (b.shelf === "read") {
        booksShelves.read.push(b)
      } else if (b.shelf === "wantToRead") {
        booksShelves.wantToRead.push(b)
      } else if (b.shelf === "currentlyReading") {
        booksShelves.currentlyReading.push(b)
      }
      this.setState({ read: booksShelves.read })
      this.setState({ wantToRead: booksShelves.wantToRead })
      this.setState({ currentlyReading: booksShelves.currentlyReading })

    })
  }

  render() {
    return (
      <div className="app">
        <Route path="/" exact>
          <MainPage
            read={this.state.read}
            wantToRead={this.state.wantToRead}
            currentlyReading={this.state.currentlyReading}
            updateShelf={this.updateShelf} />
        </Route>
        <Route path="/search" exact>
          <SearchPage updateShelf={this.updateShelf} books={this.state.books} />
        </Route>
      </div>
    )
  }
}

export default BooksApp
