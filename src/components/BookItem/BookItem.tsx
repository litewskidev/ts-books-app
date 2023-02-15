import { FC } from "react";
import { Book } from "../../interfaces/Book.interface";

type Props = {
  book: Book;
}

const BookItem: FC<Props> = ({ book }) => {
  return(
    <li>{book.title} by {book.author}, ${book.price}</li>
  );
};

export default BookItem;
