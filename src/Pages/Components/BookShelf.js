import React, { Component } from 'react'
import Book from './Book';

export default class BookShelf extends Component {
    render() {
        const { shelfName, books, updateShelf } = this.props;
        return (
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">{shelfName}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {books && books.map(book => {
                                return (
                                    <Book

                                        book={book}
                                        key={book.id}
                                        bookTitle={book.title}
                                        bookAuthor={book.authors}
                                        imageUrl={book.imageLinks}
                                        bookShelf={book.shelf}
                                        updateShelf={updateShelf}
                                    />
                                )
                            }
                            )}
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}
