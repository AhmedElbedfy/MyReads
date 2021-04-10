import React, { Component } from 'react';
export default class Book extends Component {
    state = {
        shelf: "none"
    }

    componentDidMount() {
        this.shelfOrganize()
    }

    componentDidUpdate(prevProps, prevState) {
        // Typical usage (don't forget to compare props):
        if (this.state.shelf !== prevState.shelf) {
            this.props.updateShelf(this.props.book, this.state.shelf)
        }
    }

    shelfOrganize = () => {

        const haveShelf = book => {
            book.id === this.props.book.id && this.setState({ shelf: book.shelf })
        }

        this.props.books && this.props.books.forEach(haveShelf)

        this.props.bookShelf !== undefined && this.setState({ shelf: this.props.bookShelf })

        // this.props.bookShelf === undefined ? this.setState({ shelf: "none" }) : this.setState({ shelf: this.props.bookShelf })

    }

    render() {
        const { bookTitle, bookAuthor, imageUrl } = this.props;

        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        {(imageUrl && imageUrl.thumbnail)
                            ? <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageUrl.thumbnail})` }}></div>
                            : <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(http://books.google.com/books/content?id=1yx1tgAAC%E2%80%A6J&printsec=frontcover&img=1&zoom=1&source=gbs_api)` }}></div>}
                        <div className="book-shelf-changer">
                            <select
                                value={this.state.shelf}
                                onChange={e => { this.setState({ shelf: e.target.value }); }}
                            >
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{bookTitle}</div>
                    <div className="book-authors">{bookAuthor ? bookAuthor.map(author => (`${author}\n`)) : "Author Name Unknown"}</div>
                </div>
            </li>

        )
    }
}

