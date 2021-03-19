
import React, { useState } from 'react';
import BookList from './BookList';
import API from "../utils/API"

export default function Search() {
    const [search, setSearch] = useState("")
    const [books, setBooks] = useState([])


    const getGiphy = async (e) => {
        e.preventDefault()
        console.log(search)
        try {
            const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=" + search + "&maxResults=20&keyes&key=AIzaSyAl0fKF3R635PEYex8TPnz_XF6YW46mgug") 
            const data = await response.json()
            console.log(data.items)
            setBooks(data.items)
          } catch (err){
            console.log(err.response)
          }

         
         
    }

    const handleSearch = (event) => {
        console.log(event.target.value)
        setSearch(event.target.value)
    }

    // function saveBooks(event) {
    //   event.preventDefault();
 
    //     const foundBook = books.find(book => book.id === book.id)
    //     API.saveBook({
    //       title:  foundBook.volumeInfo.title,
    //       authors: foundBook.volumeInfo.title,
    //       description: foundBook.volumeInfo.title,
    //       image: foundBook.volumeInfo.title,
    //       link: foundBook.volumeInfo.title
    //     })
    //       .then(res => (console.log("saved")))
    //       .catch(err => console.log(err));
    //   // }
    // };

    function saveBooks(id) {
      // console.log('idid', id)
      // const foundBook = apiResponse
      const foundBook = books.find(book => book.id === id)
      console.log('found', foundBook)
      // const updateSavedBook = savedBook.slice()
      // updateSavedBook.push(foundBook)
      let authorsString = foundBook.volumeInfo.authors.join(', ')
      const bookObject = {
          id: foundBook.id,
          title: foundBook.volumeInfo.title,
          authors: authorsString,
          description: foundBook.volumeInfo.description,
          image: foundBook.volumeInfo.imageLinks.smallThumbnail,
          link: foundBook.volumeInfo.infoLink,
      }

      console.log('obj', bookObject)
      API.saveBook(bookObject)
  }



    return (
      <div className="App">
          <form  noValidate autoComplete="off">
          <h2>Search for a Book</h2>
          <input id="standard-basic" label="Search using Gipfy" onChange={handleSearch} value={search}/>
          <button onClick={getGiphy}>Search</button>
          <BookList books={books} saveBooks={saveBooks} />
          </form>
      </div>
    );
  }




  