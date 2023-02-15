import { FC, useState } from "react";

type Props = {

};

const AddBookForm: FC<Props> = () => {

  const [title, setTitle] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [price, setPrice] = useState<number>(0);

  return(
    <form className="add-book-form">
      Title: <input onChange={e => setTitle(e.target.value)} type="text" />
      Author: <input onChange={e => setAuthor(e.target.value)} type="text" />
      Price: <input onChange={e => setPrice(parseInt(e.target.value))} type="number" />
      <button>Add book</button>
    </form>
  );
};

export default AddBookForm;
