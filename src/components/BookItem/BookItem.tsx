import { FC } from "react";
import { Book } from "../../interfaces/Book.interface";
import "./BooksItem.css";

type Props = {
  book: Book,
  removeBook: (bookId: string) => void,
  bookId: string
};

const BookItem: FC<Props> = ({ book, removeBook, bookId }) => {
  return(
    <li className="book-item">
      {book.title} by {book.author}, ${book.price}
      <button className="remove-book" onClick={() => removeBook(bookId)}>Remove Book</button>
    </li>
  );
};

export default BookItem;
