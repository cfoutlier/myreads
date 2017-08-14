import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks.js'
import SearchBooks from './SearchBooks.js'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import {Link, Route} from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    screen: " ",
    books: [],
    showSearchPage: false,
    query: " ",
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({books: books})
    })
  }

  upDateShelf = (value, book) => {
    book.shelf = value
    /*console.log("selected target value: " + value)*/

    this.setState(state => ({
      books: state.books.filter(b => b.id !== book.id).concat([book])
    }))
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
        <Route path="/search" render={() => (
          /*{this.state.showSearchPage ? (*/
            <div className="search-books">
              <div className="search-books-bar">
                <Link to="/" className="close-search" /*onClick={() => this.setState({ showSearchPage: false })}*/>Close</Link>
                <div className="search-books-input-wrapper">
                  {/*
                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
                    You can find these search terms here:
                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                    you don't find a specific author or title. Every search is limited by search terms.
                  */
                  }
                  <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={(event) => this.updateQuery(event.target.value)} />

                </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid">

                  <SearchBooks books={this.state.books} upDateShelf={this.upDateShelf} showingBooks={showingBooks}/>

                </ol>
              </div>
            </div>
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
              <Link to="/search" /*onClick={() => this.setState({ showSearchPage: true })}*/>Add a book</Link>
            </div>
          </div>
        )}/>
      </div>
    )
  }
}

export default BooksApp
