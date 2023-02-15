import { FC } from "react";
import { Book } from "../../interfaces/Book.interface";

const BooksList: FC<{ books: Book[] }> = ({ books }) => {
  return(
    <ul></ul>
  );
};

export default BooksList;
