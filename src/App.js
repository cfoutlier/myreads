import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks.js'
import SearchBooks from './SearchBooks.js'
import {Link, Route} from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    screen: "",
    books: [],
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({books: books})
    })
  }

  upDateShelf = (value, book) => {
    book.shelf = value

    this.setState(state => ({
      books: this.state.books.filter(b => b.id !== book.id).concat([book])

    }))

    BooksAPI.update(book, value)

  }

  render() {

    return (
      <div className="app">
        <Route path="/search" render={() => (

          <SearchBooks books={this.state.books} upDateShelf={this.upDateShelf}/>

        )} />
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">

              <ListBooks books={this.state.books} upDateShelf={this.upDateShelf}/>

            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )}/>
      </div>
    )
  }
}

export default BooksApp
