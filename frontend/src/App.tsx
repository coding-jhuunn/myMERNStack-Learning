import { useEffect, useState } from "react";

interface booksObject {
  title: string;
  author: string;
  publishYear: number;
}

const App = () => {
  const [books, SetBooks] = useState<booksObject>();

  useEffect(() => {
    fetch("http://localhost:5555/books")
      .then((res) => res.json())
      .then((data) => {
        SetBooks(data);
        console.log(books);
      })
      .catch((err) => console.log(err));
  }, []);
  return <div></div>;
};

export default App;
