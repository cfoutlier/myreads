import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks.js'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import {Link, Route} from 'react-router-dom'

class SearchBooks extends React.Component {
  state = {
    books: [],
    query: " ",
  }

  componentDidMount(){
    BooksAPI.search().then((books) => {
      this.setState({books: books})
    })
  }

  upDateShelf = (value, book) => {
    book.shelf = value
    /*console.log("selected target value: " + value)*/

    this.setState(state => ({
      books: state.books.filter(b => b.id !== book.id).concat([book])

    }))

    BooksAPI.update(book, value)
    /*console.log("bookShelf value after setState: " + book.bookShelf)*/
  }

  /* state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */

  updateQuery = (query) => {
    this.setState({query: query.trim()})

    BooksAPI.search(query,50)
  }

  render() {
    let showingBooks

    if(this.state.query){
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      showingBooks = this.state.books.filter((book) => match.test(book.title) || match.test(book.authors))
    }else{
      showingBooks = this.state.books
    }

    return (
      <div className="app">

          <p>hello</p>

          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Filter Results</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.showingBooks.map((book) =>  (
                    <li key={book.id}>
                      <div className="book">
                        <div className="book-top">
                          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                          <div className="book-shelf-changer">
                            <select value={book.shelf} onChange={(event) => this.props.upDateShelf(event.target.value, book)}>
                              <option value="none" disabled>Move to...</option>
                              <option value="currentlyReading">Currently Reading</option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors}</div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default SearchBooks
