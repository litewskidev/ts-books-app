import { FC, FormEvent, useState } from "react";
import { Book } from "../../interfaces/Book.interface";
import { randomID } from "../../utils/randomID";
import { addBook } from "../../redux/booksRedux";
import { useAppDispatch } from "../../utils/redux";
import "./AddBookForm.css";

const AddBookForm: FC = () => {

  const dispatch = useAppDispatch();

  const [title, setTitle] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [price, setPrice] = useState<number>(0);

  const resetInput = ():void => {
    setTitle('');
    setAuthor('');
    setPrice(0);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const book: Book = {
      id: randomID(10),
      title,
      author,
      price
    };
    dispatch(addBook(book));
    resetInput();
  };

  return(
    <form className="add-book-form" onSubmit={handleSubmit}>
      Title: <input value={title} onChange={e => setTitle(e.target.value)} type="text" />
      Author: <input value={author} onChange={e => setAuthor(e.target.value)} type="text" />
      Price: <input value={price} onChange={e => setPrice(parseInt(e.target.value))} type="number" />
      <button>Add Book</button>
    </form>
  );
};

export default AddBookForm;
