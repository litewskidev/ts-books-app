import { FC, FormEvent, useState } from "react";
import { Book } from "../../interfaces/Book.interface";
import { randomID } from "../../utils/randomID";

type Props = {

};

const AddBookForm: FC<Props> = () => {

  const [title, setTitle] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [price, setPrice] = useState<number>(0);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const book: Book = {
      id: randomID(10),
      title,
      author,
      price
    };
    console.log(book);
  };

  return(
    <form className="add-book-form" onSubmit={handleSubmit}>
      Title: <input onChange={e => setTitle(e.target.value)} type="text" />
      Author: <input onChange={e => setAuthor(e.target.value)} type="text" />
      Price: <input onChange={e => setPrice(parseInt(e.target.value))} type="number" />
      <button>Add book</button>
    </form>
  );
};

export default AddBookForm;
