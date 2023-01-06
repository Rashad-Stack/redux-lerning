import { Input } from "dracula-ui";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateBook } from "../../redux/slices/BooksSlice";

const EditBook = () => {
  const route = useLocation();
  const [bookName, setBookName] = useState(route.state.title);
  const [author, setAuthor] = useState(route.state.author);
  const [language, setLanguage] = useState(route.state.language);
  const [category, setCategory] = useState(route.state.categories);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const updateBookHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateBook({ id: route.state.id, bookName, author, language, category })
    );
    navigation("/show-books");
  };

  return (
    <div className="h-screen flex justify-center items-center w-full md:inset-0">
      <div className="p-4 w-full max-w-2xl h-full md:h-auto">
        {/* Modal content */}
        <div className="p-4 bg-white rounded-lg shadow dark:bg-gray-800/50 sm:p-5">
          {/* Modal header */}
          <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Update Book
            </h3>
          </div>
          {/* Modal body */}
          <form onSubmit={updateBookHandler}>
            <div className="grid gap-4 mb-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Book Name
                </label>
                <Input
                  value={bookName}
                  onChange={(e) => setBookName(e.target.value)}
                  color="green"
                  size="md"
                  placeholder="name of book"
                  m="xs"
                  type="text"
                  name="book"
                  id="book"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700/50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                />
              </div>
              <div>
                <label
                  htmlFor="brand"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Author Name
                </label>
                <Input
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  color="green"
                  size="md"
                  placeholder="writer name"
                  m="xs"
                  type="text"
                  name="writer"
                  id="writer"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700/50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                />
              </div>
              <div>
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Category
                </label>
                <Input
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  color="green"
                  size="md"
                  placeholder="category of book"
                  m="xs"
                  type="text"
                  name="category"
                  id="category"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700/50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                />
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Language
                </label>
                <Input
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  color="green"
                  size="md"
                  placeholder="written language"
                  m="xs"
                  type="text"
                  name="language"
                  id="language"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700/50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                />
              </div>
            </div>

            <button
              type="submit"
              className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 active:scale-90 transition-all"
            >
              <span className="flex items-center">Update Book</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditBook;
