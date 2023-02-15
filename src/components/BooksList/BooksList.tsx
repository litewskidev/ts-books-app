import { FC } from "react";
import { Book } from "../../interfaces/Book.interface";
import BookItem from "../BookItem/BookItem";

type Props = {
  books: Book[];
};

const BooksList: FC<Props> = ({ books }) => {
  return(
    <ul>
      {books.map((book: Book) => <BookItem key={book.id} book={book} />)}
    </ul>
  );
};

export default BooksList;
