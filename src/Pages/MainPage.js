import React, { Component } from 'react'
import BookShelf from './Components/BookShelf'
import OpenSearchButton from './Components/OpenSearchButton';

export default class MainPage extends Component {

    render() {
        const { updateShelf, read, wantToRead, currentlyReading } = this.props;

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>

                <div className="list-books-content">
                    <div>
                        <BookShelf shelfName="Currently Reading" books={currentlyReading} updateShelf={updateShelf} />
                        <BookShelf shelfName="Want to Read" books={wantToRead} updateShelf={updateShelf} />
                        <BookShelf shelfName="Read" books={read} updateShelf={updateShelf} />
                    </div>
                </div>
                <OpenSearchButton />
            </div>
        )
    }
}
