export default function SavedBook({ books }) {

console.log(books)

const data = books.map(data => {
    let image = ""
    if (data.image) {
       image = data.image
    } else {
        image = ""
    }

    return (
        <div className="book">
            <h3>{data.title}</h3>
            <h4>{data.authors}</h4>
            <img src={image} alt="book" />
            <p>{data.description}</p>
           
        </div>
    )
})

    return (
      <div className="App">
          {data}
      </div>
    );
  }