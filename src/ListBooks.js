
import React, {Component} from 'react'


class ListBooks extends React.Component{

  updateShelf = (value, bookShelf) => {

    console.log("target value: " + value)
    this.setState({bookShelf : value})
    console.log("bookShelf value after setState: " + bookShelf)
  }

  render(){
    console.log('Props', this.props)
    return(
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.books.filter(book => book.bookShelf === "currentlyReading").map((book) =>  (
                <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.bookURL})` }}></div>
                      <div className="book-shelf-changer">
                        <select onChange={(event) => this.updateShelf(event.target.value, book.bookShelf)}>
                          <option value="none" disabled>Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                      </div>
                    </div>
                    <div className="book-title">{book.bookTitle}</div>
                    <div className="book-authors">{book.author}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Want to Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.books.filter(book => book.bookShelf === "wantToRead").map((book) =>  (
                <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.bookURL})` }}></div>
                      <div className="book-shelf-changer">
                        <select>
                          <option value="none" disabled>Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                      </div>
                    </div>
                    <div className="book-title">{book.bookTitle}</div>
                    <div className="book-authors">{book.author}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.books.filter(book => book.bookShelf === "read").map((book) =>  (
                <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.bookURL})` }}></div>
                      <div className="book-shelf-changer">
                        <select>
                          <option value="none" disabled>Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                      </div>
                    </div>
                    <div className="book-title">{book.bookTitle}</div>
                    <div className="book-authors">{book.author}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default ListBooks
