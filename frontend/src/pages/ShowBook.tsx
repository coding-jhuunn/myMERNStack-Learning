import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
interface booksObject {
  _id: string;
  title: string;
  author: string;
  publishYear: number;
}
const ShowBook = () => {
  const [books, SetBooks] = useState<booksObject | undefined>(undefined);
  const [loading, SetLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    SetLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        if (!response) {
          return new Error(`Could not retrive books`);
        }
        SetBooks(response.data);
        SetLoading(false);
      })
      .catch((error) => {
        console.log(error);
        SetLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <BackButton></BackButton>
      <h1 className="text-3xl m-4">Show Book</h1>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Id</span>
            <span>{books?._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Title</span>
            <span>{books?.title}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Author</span>
            <span>{books?.author}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Publish Year</span>
            <span>{books?.publishYear}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
