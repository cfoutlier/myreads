This is the MyReads app based on the starter template for the final assessment project for Udacity's React Fundamentals course, developed by [React Training](https://reacttraining.com).  The app is meant to help the user keep track of the books they are currently reading, want to read, or have already read.

## What You're Getting
```
+--public/    
 |-- index.html - DO NOT MODIFY
 |-- favicon.ico - React Icon, You may change if you wish.
+-- src/
 +-- icons/ - Helpful images for your app. Use at your discretion.
  |-- add.svg
  |-- arrow-back.svg
  |-- arrow-drop-down.svg
 |-- App.js - This is the root of your app. Contains static HTML right now.
 |-- App.css - Styles for your app. Feel free to customize this as you desire.
 |-- App.test.js - Used for testing. Provided with Create React App.
 Testing is encouraged, but not required.
 |--ListBooks.js - the component file that list the books that are currently in the library.
 |--searchBook.js - the component file that allows for a user to search for books currently and not currently in the library and add them to the library.
 |-- BooksAPI.js - A JavaScript API for the provided Udacity backend.
 Instructions for the methods are below.
 |-- index.js - You should not need to modify this file. It is used for DOM rendering only.
 |-- index.css - Global styles. You probably won't need to change anything here.
|-- .gitignore
|-- CONTRIBUTING.MD - Information about contributing to this repo.
TL;DR - Fork and clone your own version of this to use it.
|-- README.MD - This README file.
|-- SEARCH_TERMS.md - The whitelisted short collection of available search terms
for you to use with your app.
|-- package.json - npm package manager file. It's unlikely that you'll need to modify this.
```

## Installation Instructions
Required tools to install:
- npm (or yarn)
- create-react-app

* Install NPM on your local computer.  https://www.npmjs.com NPM will allow you to install packages and run your project
* You may also use yarn package manger. https://yarnpkg.com/en/ Yarn will allow you to install packages and run your project
* Install create-react-app-> "npm install -g create-react-app"
* Create the app-> "create-react-app myreads"
* Clone (download) the myreads files from GitHub to your local computer.  https://github.com/cfoutlier/myreads
* Copy the files from the cloned folder to the newly created "myreads" app folder, replacing the original create-react-app files.
* Navigate to the myreads folder via the terminal and type "npm install" to install any dependencies for the app
* Type "npm start" to run the app


## Usage Instructions
* Home Page
  * The home page of the app is a listing of books that a user can categorize as currently reading, want to read, or have already read.  To move the book to a new category or shelf, simply click the drop down on the bottom right hand corner of the the shelf and select the new shelf.  A user has the ability to add new books to the list by using the search function.
* Search page
  * Select the plus button on the bottom right hand side of the home page to access the search page.
  * On the search page the user can start typing the title of the book they would like to add to the book list and the page will dynamically populate with results.
  * To add the book to the book list select the drop down on the bottom right of each book and choose a category.

## Backend Server

The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

### `getAll()`
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update(book, shelf)`
* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search(query, maxResults)`
* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## create-react-app

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
