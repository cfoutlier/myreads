
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import escapeRegExp from 'escape-string-regexp';
import * as BooksAPI from './BooksAPI';
import PropTypes from 'prop-types';

class SearchBooks extends Component{
  state = {
    query: "",
    searchResults: [],
    optionState: " ",
  }

  updateQuery = (query) => {
    if(query !== ' ' || 'undefined'){
      this.setState({
        query: query
      })
      this.loadSearch(query);
    }
  }

  loadSearch = (query) => {
    if(query !== '' || 'undefined'){
      BooksAPI.search(query, 20).then((searchBooks) => {
        if(searchBooks && !searchBooks.error){
          this.setState({searchResults: searchBooks.map((searchBook) => {
            if(searchBook !== null || 'undefined'){
                this.props.books.forEach((ownedBook) => {
                    if (searchBook.id === ownedBook.id) {
                        searchBook.shelf = ownedBook.shelf;
                    }
                })
              }
              return searchBook;
            })
          })
          console.log('searchResults', this.state.searchResults)
        }
      })
    }
  }


  render(){
    console.log('Props', this.props)

    let showingBooks;

    if(this.state.query){
      const match = new RegExp(escapeRegExp(this.state.query), 'i');

      showingBooks = this.state.searchResults.filter((book) => (match.test(book.title) || match.test(book.authors)))

    }else{
      showingBooks = this.state.searchResults;
    }

    return(

      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
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

            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Filter Results</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {showingBooks.map((book) =>  (
                      <li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                            {/*had to do a special check for imageLinks.thumbnail here because sometimes the server does not return a thumbnail*/}
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks !== undefined? book.imageLinks.thumbnail:''})`  }}></div>
                            <div className="book-shelf-changer">
                              <select value={book.shelf} onChange={(event) => this.props.upDateShelf(event.target.value, book)}>
                                <option value="none">None</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
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

          </ol>
        </div>
      </div>
    )
  }
}

SearchBooks.propTypes = {
  books: PropTypes.array.isRequired,
  upDateShelf: PropTypes.func.isRequired,
}

export default SearchBooks;
