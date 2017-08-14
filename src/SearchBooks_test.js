
import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import escapeRegExp from 'escape-string-regexp'


class SearchBooks extends Component{

  state = {
    books: [],
    query: " ",
  }

  componentDidMount(){
    BooksAPI.search().then((books) => {
      this.setState({books: books})
    })
  }

  updateQuery = (query) => {
    this.setState({query: query.trim()})

    BooksAPI.search(query,50)
  }

  render(){
    console.log('Props', this.props)

    let showingBooks

    if(this.state.query){
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      showingBooks = this.state.books.filter((book) => match.test(book.title) || match.test(book.authors))
    }else{
      showingBooks = this.state.books
    }

    return(
      <div>
      {/*  <div className="bookshelf">
          <h2 className="bookshelf-title">Filter Results</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {showingBooks.map((book) =>  (
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
        </div>*/}
      </div>
    )
  }
}

export default SearchBooks
