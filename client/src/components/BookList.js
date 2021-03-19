import Book from "./Book"

export default function BookList({ books, saveBooks }) {

    return (
      <div className="App">
          <h1>Results</h1>
          <Book books={books} saveBooks={saveBooks} />
      </div>
    );
  }