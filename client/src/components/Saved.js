import React, { useState, useEffect } from 'react';
import BookList from './BookList';
import API from "../utils/API"
import SavedBook from "./SavedBook"

export default function Saved() {
    const [books, setBooks] = useState([])


    useEffect(() => {
        loadBooks()
      }, [])


      function loadBooks() {
        API.getBooks()
          .then(res => 
            setBooks(res.data)
          )
          .catch(err => console.log(err));
      };






    return (
      <div className="App">
          <form  noValidate autoComplete="off">
          <h2>Saved Books</h2>
          <SavedBook books={books} />
          </form>
      </div>
    );
  }