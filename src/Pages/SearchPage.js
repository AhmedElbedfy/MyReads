import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import Book from './Components/Book';


export default class SearchPage extends Component {

    state = {
        query: "",
        queryResult: []
    };


    // componentDidUpdate(prevProps, prevState) {
    //     // Typical usage (don't forget to compare props):
    //     if (this.state.query !== prevState.query) {

    //     }
    // }

    queryFetch = (query) => {
        // query !== '' ?
        BooksAPI.search(query)
            .then(queryResult => {
                this.setState({ queryResult })
            })
        // : this.setState({ queryResult: "" })
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" >
                        <button className="close-search">Close</button>
                    </Link>

                    <div className="search-books-input-wrapper">
                        <input
                            autoFocus
                            type="text"
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={(e) => {
                                this.queryFetch(e.target.value);

                                this.setState({ query: e.target.value });

                                console.log(e.target.value);
                                console.log(this.state.queryResult);
                            }}
                        />
                    </div>
                </div>

                <div className="search-books-results">
                    <ol className="books-grid">
                        {
                            Array.isArray(this.state.queryResult) && this.state.queryResult.map(book => {

                                return (
                                    <Book
                                        books={this.props.books}

                                        book={book}
                                        key={book.id}
                                        bookTitle={book.title}
                                        bookAuthor={book.authors}
                                        imageUrl={book.imageLinks}
                                        bookShelf={book.shelf}
                                        updateShelf={this.props.updateShelf}
                                    />
                                )
                            })
                        }
                    </ol>
                </div>
            </div>
        )
    }
}
