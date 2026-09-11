import { Book } from "./book.jsx";

export function BooksList({ books }) {
  return (
    <div className="books-list">
      {books.map(book => 
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          description={book.description}
          pages={book.pages}
        />
      )}
    </div>
  );
}

