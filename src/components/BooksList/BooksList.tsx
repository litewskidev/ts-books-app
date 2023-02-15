import { FC } from "react";
import { Book } from "../../interfaces/Book.interface";

type Props = {
  books: Book[];
};

const BooksList: FC<Props> = ({ books }) => {
  return(
    <ul></ul>
  );
};

export default BooksList;
