import { Heading } from "dracula-ui";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBook } from "../../redux/slices/BooksSlice";

const BooksView = () => {
  const books = useSelector((state) => state.booksReducer.books);
  const dispatch = useDispatch();
  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <div className="h-screen">
      <div className="flex justify-center">
        <Heading size="2xl" className="py-5">
          Books
        </Heading>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Book Name
              </th>
              <th scope="col" className="px-6 py-3">
                Author
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Language
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {books &&
              books.map((book) => {
                const { id, title, author, categories, language } = book;
                return (
                  <tr
                    key={id}
                    className="bg-white border-b dark:bg-gray-800/80 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <th
                      scope="row"
                      className="w-48 truncate px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {title}
                    </th>
                    <td className="px-6 h-8 capitalize">{author}</td>
                    <td className="px-6 h-8 capitalize">{categories}</td>
                    <td className="px-6 h-8 capitalize">{language}</td>

                    <td className="flex gap-3 justify-center">
                      <Link
                        to="/edit-book"
                        state={{ id, title, author, categories, language }}
                      >
                        <button
                          type="button"
                          className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 active:scale-90 transition-all"
                        >
                          Edit
                        </button>
                      </Link>

                      <button
                        onClick={() => handleDeleteBook(id)}
                        type="button"
                        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 active:scale-90 transition-all"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BooksView;
