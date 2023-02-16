import { FC } from "react";
import { Book } from "../../interfaces/Book.interface";
import BookItem from "../BookItem/BookItem";
import './BooksList.css';

type Props = {
  books: Book[],
  removeBook: (bookId: string) => void
};

const BooksList: FC<Props> = ({ books, removeBook }) => {
  return(
    <ul className="books-list">
      {books.map((book: Book) => <BookItem key={book.id} book={book} removeBook={removeBook} bookId={book.id} />)}
    </ul>
  );
};

export default BooksList;
